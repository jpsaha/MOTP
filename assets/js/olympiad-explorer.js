
document.addEventListener("DOMContentLoaded", function () {

  const root = document.getElementById("olympiad-explorer");
  if (!root) return;

  const topicNames = window.TOPIC_NAMES || {};

  // ------------------------------------------------------------
  // 1. Read data from merged.yml
  // ------------------------------------------------------------

  let data;

  try {
    data = JSON.parse(root.dataset.olympiad);
  } catch (error) {
    console.error("Could not read olympiad data:", error);
    root.innerHTML = "<p>Unable to load olympiad data.</p>";
    return;
  }

// Diagnostic output
    console.log("Olympiad data:", data);
    console.log("Available competitions:", Object.keys(data || {}));
  // ------------------------------------------------------------
  // 2. Subject names
  // ------------------------------------------------------------

  const SUBJECTS = {
    MOTPA: "Algebra",
    MOTPC: "Combinatorics",
    MOTPG: "Geometry",
    MOTPNT: "Number Theory"
  };

  const CONTESTS = {
    ioqm: "IOQM",
    rmo: "RMO",
    inmo: "INMO"
  };

  // ------------------------------------------------------------
  // 3. Topic names
  //
  // Keys are includer paths relative to the repository root.
  // Add or correct entries here as required.
  // ------------------------------------------------------------

  function getSourcePDF(includer, subjectCode) {
    if (!includer) return "";

    const filename = includer.split("/").pop().replace(/\.tex$/i, ".pdf");
    const baseurl = root.dataset.baseurl || "";
    const subjectFolders = {
      MOTPA: "Algebra",
      MOTPC: "Combinatorics",
      MOTPG: "Geometry",
      MOTPNT: "NumberTheory"
    };

    // Special folder for inequality-related PDFs.
    if (subjectCode === "MOTPA" && includer.toLowerCase().includes("/src/ineq/")) {
      return `${baseurl}/assets/pdf/${subjectFolders[subjectCode]}/Ineq.pdf`;
    }

    if (!subjectFolders[subjectCode]) return "";

    return `${baseurl}/assets/pdf/${subjectFolders[subjectCode]}/${filename}`;
  }
  
  function getTopic(path) {
    if (!path) return "Unclassified";

    if (topicNames[path]) {
      return topicNames[path];
    }

    const filename = path.split("/").pop().replace(/\.tex$/i, "");

    return filename
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/[_-]/g, " ")
      .replace(/\b\w/g, char => char.toUpperCase());
  }

  // ------------------------------------------------------------
  // 4. Flatten YAML data into individual problem records
  // ------------------------------------------------------------

  const problems = [];

  Object.entries(data || {}).forEach(([contest, years]) => {

    if (!years || typeof years !== "object") return;

    Object.entries(years).forEach(([year, variants]) => {

      if (!variants || typeof variants !== "object") return;

      Object.entries(variants).forEach(([variant, paper]) => {

        if (!paper || typeof paper !== "object") return;

        const paperInfo = {
          contest: contest.toLowerCase(),
          year: String(year),
          variant: variant,
          qq: paper.qq || "",
          sol: paper.sol || "",
          src: paper.src || "",
          omc: paper.omc || ""
        };

        (paper.problems || []).forEach(problem => {

          const usages = problem.usages || [];

          // Keep problems with no classification too.
          if (usages.length === 0) {
            problems.push({
              ...paperInfo,
              file: problem.file,
              number: problem.problem,
              subjectCode: "",
              subject: "Unclassified",
              topic: "Unclassified",
              includer: ""
            });
            return;
          }

          // A problem may have more than one subject/topic usage.
          usages.forEach(usage => {

            const subjectCode = usage.subject || "";
            const includer = usage.includer || "";

            problems.push({
              ...paperInfo,
              file: problem.file,
              number: problem.problem,
              subjectCode: subjectCode,
              subject: SUBJECTS[subjectCode] || subjectCode || "Unclassified",
              topic: getTopic(includer),
              includer: includer
            });

          });

        });

      });

    });

  });

  // ------------------------------------------------------------
  // 5. HTML elements
  // ------------------------------------------------------------

  const contestSelect = root.querySelector("#oe-contest");
  const yearSelect = root.querySelector("#oe-year");
  const subjectSelect = root.querySelector("#oe-subject");
  const topicSelect = root.querySelector("#oe-topic");
  const searchInput = root.querySelector("#oe-search");
  const solutionsCheckbox = root.querySelector("#oe-has-solutions");
  const resetButton = root.querySelector("#oe-reset");
  const results = root.querySelector("#oe-results");
  const resultCount = root.querySelector("#oe-result-count");

  // ------------------------------------------------------------
  // 6. Helper functions
  // ------------------------------------------------------------

  function unique(values) {
    return [...new Set(values)].sort((a, b) =>
      String(a).localeCompare(String(b), undefined, { numeric: true })
    );
  }

  function addOptions(select, values, labels = {}) {
    const firstOption = select.options[0];
    select.innerHTML = "";
    select.appendChild(firstOption);

    values.forEach(value => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = labels[value] || value;
      select.appendChild(option);
    });
  }

  function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    })[char]);
  }

  function makeLink(url, label) {
    if (!url || typeof url !== "string") return "";

    let parsed;

    try {
      parsed = new URL(url, window.location.origin);
    } catch {
      return "";
    }

    if (!["http:", "https:"].includes(parsed.protocol)) return "";

    return `<a href="${escapeHTML(parsed.href)}"
              target="_blank"
              rel="noopener noreferrer">${escapeHTML(label)}</a>`;
  }

  function paperLabel(problem) {
    return problem.variant === "default"
      ? ""
      : ` · Paper ${problem.variant.toUpperCase()}`;
  }

  // ------------------------------------------------------------
  // 7. Populate filters
  // ------------------------------------------------------------

  function populateContests() {
    const contests = unique(problems.map(p => p.contest));

    addOptions(contestSelect, contests, CONTESTS);
  }

  function populateYears() {
    const contest = contestSelect.value;

    const filtered = problems.filter(p =>
      !contest || p.contest === contest
    );

    addOptions(yearSelect, unique(filtered.map(p => p.year)));
  }

  function populateSubjects() {
    const contest = contestSelect.value;
    const year = yearSelect.value;

    const filtered = problems.filter(p =>
      (!contest || p.contest === contest) &&
      (!year || p.year === year)
    );

    addOptions(subjectSelect, unique(filtered.map(p => p.subject)));
  }

  function populateTopics() {
    const contest = contestSelect.value;
    const year = yearSelect.value;
    const subject = subjectSelect.value;

    const filtered = problems.filter(p =>
      (!contest || p.contest === contest) &&
      (!year || p.year === year) &&
      (!subject || p.subject === subject)
    );

    addOptions(topicSelect, unique(filtered.map(p => p.topic)));
  }

  // ------------------------------------------------------------
  // 8. Render problem cards
  // ------------------------------------------------------------

  function renderProblems() {

    const contest = contestSelect.value;
    const year = yearSelect.value;
    const subject = subjectSelect.value;
    const topic = topicSelect.value;
    const search = searchInput.value.trim().toLowerCase();
    const onlySolutions = solutionsCheckbox.checked;

    const filtered = problems.filter(p => {

      if (contest && p.contest !== contest) return false;
      if (year && p.year !== year) return false;
      if (subject && p.subject !== subject) return false;
      if (topic && p.topic !== topic) return false;
      if (onlySolutions && !p.sol) return false;

      const text = [
        p.contest,
        p.year,
        p.variant,
        p.number,
        p.subject,
        p.topic,
        p.file
      ].join(" ").toLowerCase();

      if (search && !text.includes(search)) return false;

      return true;
    });

    resultCount.textContent =
      `${filtered.length} problem${filtered.length === 1 ? "" : "s"} found`;

    if (filtered.length === 0) {
      results.innerHTML =
        '<p class="oe-empty">No problems match your filters.</p>';
      return;
    }

    results.innerHTML = filtered.map(p => {

      const contestName = CONTESTS[p.contest] || p.contest.toUpperCase();

      const paperLinks = [
        makeLink(p.qq, "Question paper"),
        makeLink(p.sol, "Solutions"),
        makeLink(getSourcePDF(p.includer, p.subjectCode), "Similar Problems"),
        makeLink(p.omc, "Other resource")
      ].filter(Boolean);

      return `
        <article class="oe-problem-card">

          <div class="oe-problem-heading">
            <div>
              <span class="oe-contest-label">
                ${escapeHTML(contestName)}
                · ${escapeHTML(p.year)}
                ${escapeHTML(paperLabel(p))}
              </span>

              <h3>Problem ${escapeHTML(p.number)}</h3>
            </div>
          </div>

          <div class="oe-tags">
            <span class="oe-tag">
              ${escapeHTML(p.subject)}
            </span>

            <span class="oe-tag oe-topic-tag">
              ${escapeHTML(p.topic)}
            </span>
          </div>

          <div class="oe-card-footer">
            <div class="oe-links">
              ${paperLinks.length
                ? paperLinks.join('<span class="oe-separator">·</span>')
                : '<span class="oe-unavailable">No PDF links available</span>'}
            </div>
          </div>

        </article>
      `;

    }).join("");

  }

  // ------------------------------------------------------------
  // 9. Filter events
  // ------------------------------------------------------------

  contestSelect.addEventListener("change", function () {
    populateYears();
    populateSubjects();
    populateTopics();
    renderProblems();
  });

  yearSelect.addEventListener("change", function () {
    populateSubjects();
    populateTopics();
    renderProblems();
  });

  subjectSelect.addEventListener("change", function () {
    populateTopics();
    renderProblems();
  });

  topicSelect.addEventListener("change", renderProblems);
  searchInput.addEventListener("input", renderProblems);
  solutionsCheckbox.addEventListener("change", renderProblems);

  resetButton.addEventListener("click", function () {
    contestSelect.value = "";
    yearSelect.value = "";
    subjectSelect.value = "";
    topicSelect.value = "";
    searchInput.value = "";
    solutionsCheckbox.checked = false;

    populateYears();
    populateSubjects();
    populateTopics();
    renderProblems();
  });

  // ------------------------------------------------------------
  // 10. Initial setup
  // ------------------------------------------------------------

  populateContests();
  populateYears();
  populateSubjects();
  populateTopics();
  renderProblems();

});
