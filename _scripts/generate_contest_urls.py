
#!/usr/bin/env python3

from pathlib import Path
import re


# ============================================================
# 1. CONFIGURATION
# ============================================================

ROOT = Path(__file__).resolve().parent.parent

PAST_FILE = ROOT / "_data" / "past.yml"
OUTPUT_FILE = ROOT / "_data" / "contest_urls.yml"

LETTERS = "abcdefghijklmnopqrstuvwxyz"

CONTEST_PATTERN = re.compile(r"^  ([A-Za-z0-9_-]+):\s*$")
YEAR_PATTERN = re.compile(r"^    yr:\s*(\d{4})\s*$")
QUESTION_PATTERN = re.compile(r"^      - qq:\s*(.*)$")
FIELD_PATTERN = re.compile(r"^        (qq|sol|src|omc):(?:\s+(.*))?\s*$")


# ============================================================
# 2. PARSE past.yml
# ============================================================

def parse_value(value: str) -> str:
    """Return a YAML scalar value without surrounding quotes."""

    value = value.strip()

    if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
        return value[1:-1]

    return value


def parse_questions(lines):
    """Extract question records and their relevant fields."""

    questions = []
    current = None
    in_qn = False

    for line in lines:
        # The qn list begins at indentation level 4.
        if re.match(r"^    qn:\s*$", line):
            in_qn = True
            continue

        # Any other field at indentation level 4 ends the qn list.
        if in_qn and re.match(r"^    \S", line):
            in_qn = False

        if not in_qn:
            continue

        # Each question starts with "- qq:" at indentation level 6.
        match = QUESTION_PATTERN.match(line)

        if match:
            current = {
                "qq": parse_value(match.group(1)),
                "sol": "",
                "src": "",
                "omc": "",
            }
            questions.append(current)
            continue

        # Read only the selected fields belonging to this question.
        if current is not None:
            match = FIELD_PATTERN.match(line)

            if match:
                field, value = match.groups()
                current[field] = parse_value(value or "")

    return questions


def generate_contest_urls():
    """Extract contest question URLs and metadata from past.yml."""

    lines = PAST_FILE.read_text(encoding="utf-8").splitlines()
    contest_urls = {}

    i = 0

    while i < len(lines):
        match = CONTEST_PATTERN.match(lines[i])

        if not match:
            i += 1
            continue

        contest = match.group(1).lower()
        block = []
        i += 1

        # Collect this contest's block.
        while i < len(lines):
            if lines[i].startswith("- yr:"):
                break

            if CONTEST_PATTERN.match(lines[i]):
                break

            block.append(lines[i])
            i += 1

        # Find the contest year.
        year = None

        for line in block:
            match = YEAR_PATTERN.match(line)

            if match:
                year = int(match.group(1))
                break

        if year is None:
            continue

        questions = parse_questions(block)

        # Skip contests without question entries.
        if not questions:
            continue

        # Use "default" for one question entry; letters for multiple.
        if len(questions) == 1:
            variants = {"default": questions[0]}
        else:
            if len(questions) > len(LETTERS):
                raise ValueError(
                    f"{contest.upper()} {year} has {len(questions)} "
                    f"question entries; only {len(LETTERS)} suffixes "
                    "are supported."
                )

            variants = {
                LETTERS[index]: question
                for index, question in enumerate(questions)
            }

        contest_urls.setdefault(contest, {})[year] = variants

    return contest_urls


# ============================================================
# 3. WRITE YAML
# ============================================================

def yaml_value(value: str) -> str:
    """Format a string as a YAML scalar."""

    if not value:
        return '""'

    # Quote values that could be misinterpreted as YAML syntax.
    if (
        value != value.strip()
        or value.startswith(("'", '"', "[", "{", "#", "&", "*", "!", "|", ">", "@", "`"))
        or ": " in value
        or " #" in value
        or value.lower() in {"null", "true", "false", "yes", "no", "on", "off"}
    ):
        escaped = value.replace("\\", "\\\\").replace('"', '\\"')
        return f'"{escaped}"'

    return value


def write_yaml(data: dict) -> None:
    """Write contest data to YAML without external dependencies."""

    lines = []

    for contest, years in data.items():
        lines.append(f"{contest}:")

        for year, variants in years.items():
            lines.append(f"  {year}:")

            for variant, fields in variants.items():
                lines.append(f"    {variant}:")

                for field in ("qq", "sol", "src", "omc"):
                    value = yaml_value(fields.get(field, ""))
                    lines.append(f"      {field}: {value}")

    OUTPUT_FILE.write_text(
        "\n".join(lines) + "\n",
        encoding="utf-8",
    )


# ============================================================
# 4. MAIN
# ============================================================

def main() -> None:
    """Generate _data/contest_urls.yml from _data/past.yml."""

    if not PAST_FILE.is_file():
        raise SystemExit(f"Error: Input file not found: {PAST_FILE}")

    contest_urls = generate_contest_urls()
    write_yaml(contest_urls)

    total_entries = sum(
        len(variants)
        for years in contest_urls.values()
        for variants in years.values()
    )

    print(f"Generated: {OUTPUT_FILE.relative_to(ROOT)}")
    print(f"Contests: {len(contest_urls)}")
    print(f"Question entries: {total_entries}")


if __name__ == "__main__":
    main()
