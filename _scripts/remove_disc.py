
from pathlib import Path
import re
import shutil

# ------------------------------------------------------------
# Configuration
# ------------------------------------------------------------
ROOT = Path(__file__).resolve().parents[1]
YAML_FILE = ROOT / "_data" / "past.yml"

# ------------------------------------------------------------
# Backup original file
# ------------------------------------------------------------
backup = YAML_FILE.with_suffix(".yml.bak")
shutil.copy2(YAML_FILE, backup)

# ------------------------------------------------------------
# Remove disc blocks
# ------------------------------------------------------------
lines = YAML_FILE.read_text(encoding="utf-8").splitlines(keepends=True)

updated = []
removed = 0
skip_indent = None

for line in lines:
    stripped = line.lstrip()
    indent = len(line) - len(stripped)

    # Currently inside a disc block
    if skip_indent is not None:

        # Blank lines inside the block
        if not stripped.strip():
            continue

        # Continue removing only more deeply indented lines
        if indent > skip_indent:
            continue

        # A line at the same or lower indentation ends the block
        skip_indent = None

    # Detect a disc: key
    if re.match(r"^disc\s*:", stripped):
        skip_indent = indent
        removed += 1
        continue

    updated.append(line)

# ------------------------------------------------------------
# Write updated file
# ------------------------------------------------------------
YAML_FILE.write_text("".join(updated), encoding="utf-8")

print(f"Removed {removed} disc sections.")
print(f"Updated: {YAML_FILE.name}")
print(f"Backup:  {backup.name}")
