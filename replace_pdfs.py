#!/usr/bin/env python3
"""
Replace PDFs in MOTP from the corresponding prooly directories.

Mapping:
    prooly/MOTPA/pdf/ -> MOTP/assets/pdf/Algebra/
    prooly/MOTPC/pdf/ -> MOTP/assets/pdf/Combinatorics/

Behavior:
    - Dry-run by default.
    - --apply performs the actual copies.
    - Matching filenames are overwritten.
    - New PDFs are added.
    - Destination-only PDFs are preserved.
    - Non-PDF files are ignored.
"""

import argparse
import shutil
import sys
from pathlib import Path


# ============================================================
# Configuration
# ============================================================

SCRIPT_DIR = Path(__file__).resolve().parents[1]

# Assumes replace_pdfs.py is inside the common parent of MOTP and prooly.
PROOLY_ROOT = SCRIPT_DIR / "prooly"
MOTP_ROOT = SCRIPT_DIR / "MOTP"

DIRECTORY_MAP = {
    PROOLY_ROOT / "MOTPA" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "Algebra",

    PROOLY_ROOT / "MOTPC" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "Combinatorics",

    PROOLY_ROOT / "MOTPG" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "Geometry",

    PROOLY_ROOT / "MOTPNT" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "NumberTheory",

    PROOLY_ROOT / "10RMO" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "RMO",

    PROOLY_ROOT / "10INMO" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "INMO",

    PROOLY_ROOT / "MOPSS25" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "MOPSS",

    PROOLY_ROOT / "MOPSS26" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "MOPSS",
}


# ============================================================
# Terminal colors
# ============================================================

RED = "\033[91m"
GREEN = "\033[92m"
YELLOW = "\033[93m"
CYAN = "\033[96m"
RESET = "\033[0m"


# ============================================================
# Replacement logic
# ============================================================

def replace_pdfs(
    source: Path,
    destination: Path,
    apply: bool,
) -> tuple[int, int]:
    """Replace matching PDFs and report destination-only PDFs.

    Returns:
        (replaced_count, destination_only_count)
    """

    if not source.is_dir():
        raise FileNotFoundError(
            f"Source directory does not exist: {source}"
        )

    source_pdfs = sorted(
        path for path in source.iterdir()
        if path.is_file() and path.suffix.lower() == ".pdf"
    )

    if not destination.is_dir() and apply:
        raise FileNotFoundError(
            f"Destination directory does not exist: {destination}"
        )

    destination_pdfs = sorted(
        (
            path for path in destination.iterdir()
            if path.is_file() and path.suffix.lower() == ".pdf"
        )
    ) if destination.is_dir() else []

    source_names = {path.name for path in source_pdfs}
    destination_names = {path.name for path in destination_pdfs}

    replaced = 0
    destination_only = 0

    print(f"\nSource:      {source}")
    print(f"Destination: {destination}")

    # --------------------------------------------------------
    # Replace PDFs with matching filenames
    # --------------------------------------------------------

    if not source_pdfs:
        print("  No source PDFs found.")

    for src in source_pdfs:
        dst = destination / src.name

        if not dst.is_file():
            print(f"  {RED}[SKIP]    {src.name}{RESET} (not in destination)")
            continue

        replaced += 1
        print(f"  {GREEN}[REPLACE]{RESET} {src.name}")

        if apply:
            shutil.copy2(src, dst)

    # --------------------------------------------------------
    # Report PDFs present only in the destination
    # --------------------------------------------------------

    destination_only_pdfs = sorted(
        destination_names - source_names
    )

    destination_only = len(destination_only_pdfs)

    print(
        f"\n  PDFs present only in destination "
        f"({destination_only}):"
    )

    for filename in destination_only_pdfs:
        print(f"    {YELLOW}[DESTINATION ONLY]{RESET} {filename}")

    return replaced, destination_only


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Replace matching MOTP PDFs using PDFs from prooly."
    )
    parser.add_argument(
        "--apply",
        action="store_true",
        help="Actually copy files. Without this flag, only preview changes.",
    )
    args = parser.parse_args()

    mode = "APPLY" if args.apply else "DRY RUN"
    print(f"Mode: {mode}")

    total_replaced = 0
    total_destination_only = 0

    try:
        for source, destination in DIRECTORY_MAP.items():
            replaced, destination_only = replace_pdfs(
                source=source,
                destination=destination,
                apply=args.apply,
            )
            total_replaced += replaced
            total_destination_only += destination_only

    except (FileNotFoundError, OSError) as exc:
        print(f"\nERROR: {exc}", file=sys.stderr)
        return 1

    print("\n" + "=" * 50)
    print("Summary")
    print(f"  PDFs to replace / replaced: {total_replaced}")
    print(f"  PDFs present only in destination: {total_destination_only}")

    if not args.apply:
        print("\nDry run only. No files were copied.")
        print("Run with --apply to perform the replacements.")
    else:
        print("\nPDF replacement completed.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())

if __name__ == "__main__":
    raise SystemExit(main())