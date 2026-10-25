
#!/usr/bin/env python3

from pathlib import Path
import re


# ============================================================
# 1. CONFIGURATION
# ============================================================

ROOT = Path(__file__).resolve().parent.parent

OLYMP_FILE = ROOT / "_data" / "olymp.yml"
CONTEST_URLS_FILE = ROOT / "_data" / "contest_urls.yml"
OUTPUT_FILE = ROOT / "_data" / "merged.yml"

FIELDS = ("qq", "sol", "src", "omc")

CONTEST_RE = re.compile(r"^([A-Za-z0-9_-]+):\s*$")
YEAR_RE = re.compile(r"^  (\d{4}):\s*$")
VARIANT_RE = re.compile(r"^    ([A-Za-z]+):\s*$")
FIELD_RE = re.compile(r"^      (qq|sol|src|omc):\s*(.*)$")


# ============================================================
# 2. READ contest_urls.yml
# ============================================================

def read_contest_urls() -> dict:
    """Read contest metadata using the expected YAML indentation."""

    lines = CONTEST_URLS_FILE.read_text(encoding="utf-8").splitlines()
    data = {}

    contest = None
    year = None
    variant = None

    for line in lines:
        match = CONTEST_RE.match(line)

        if match:
            contest = match.group(1)
            year = None
            variant = None
            continue

        match = YEAR_RE.match(line)

        if match and contest is not None:
            year = int(match.group(1))
            variant = None
            continue

        match = VARIANT_RE.match(line)

        if match and contest is not None and year is not None:
            variant = match.group(1)
            data.setdefault(contest, {}).setdefault(year, {})[variant] = {}
            continue

        match = FIELD_RE.match(line)

        if (
            match
            and contest is not None
            and year is not None
            and variant is not None
        ):
            field, value = match.groups()
            data[contest][year][variant][field] = value

    return data


# ============================================================
# 3. MERGE olymp.yml
# ============================================================

def merge_olymp(metadata: dict):
    """Add metadata to olymp.yml and preserve existing problem records."""

    lines = OLYMP_FILE.read_text(encoding="utf-8").splitlines()
    output = []
    matched = 0
    unmatched = []

    i = 0
    contest = None
    year = None

    while i < len(lines):
        line = lines[i]

        match = CONTEST_RE.match(line)

        if match:
            contest = match.group(1)
            year = None
            output.append(line)
            i += 1
            continue

        match = YEAR_RE.match(line)

        if match and contest is not None:
            year = int(match.group(1))
            output.append(line)
            i += 1
            continue

        match = VARIANT_RE.match(line)

        if not match or contest is None or year is None:
            output.append(line)
            i += 1
            continue

        variant = match.group(1)
        variant_line = line

        # Collect this variant's existing block.
        i += 1
        block = []

        while i < len(lines):
            current = lines[i]

            # A new variant, year, or contest ends this block.
            if (
                CONTEST_RE.match(current)
                or YEAR_RE.match(current)
                or VARIANT_RE.match(current)
            ):
                break

            block.append(current)
            i += 1

        contest_data = metadata.get(contest, {}).get(year, {})
        fields = contest_data.get(variant)

        output.append(variant_line)

        if fields is None:
            output.extend(block)
            unmatched.append(f"{contest}/{year}/{variant}")
            continue

        matched += 1

        # Add the source metadata before the existing problem list.
        for field in FIELDS:
            if field in fields:
                output.append(f"      {field}: {fields[field]}")

        # Keep the existing list under a named 'problems' key.
        if any(line.strip().startswith("- ") for line in block):
            output.append("      problems:")

            for existing_line in block:
                output.append(
                    "  " + existing_line if existing_line else ""
                )
        else:
            # Do not invent a problems list when none exists.
            output.extend(block)

    return output, matched, unmatched


# ============================================================
# 4. MAIN
# ============================================================

def main() -> None:
    """Merge the files and write merged.yml."""

    for path in (OLYMP_FILE, CONTEST_URLS_FILE):
        if not path.is_file():
            raise SystemExit(f"Error: Input file not found: {path}")

    metadata = read_contest_urls()
    merged_lines, matched, unmatched = merge_olymp(metadata)

    OUTPUT_FILE.write_text(
        "\n".join(merged_lines) + "\n",
        encoding="utf-8",
    )

    print(f"Generated: {OUTPUT_FILE.relative_to(ROOT)}")
    print(f"Matched variants: {matched}")

    if unmatched:
        print(f"Variants without matching metadata: {len(unmatched)}")
        for item in unmatched:
            print(f"  {item}")


if __name__ == "__main__":
    main()
