#!/usr/bin/env python3
"""
Replace PDFs in MOTP from the corresponding prooly directories.

Mapping:
    prooly/MOTPA/pdf/   -> MOTP/assets/pdf/Algebra/
    prooly/MOTPC/pdf/   -> MOTP/assets/pdf/Combinatorics/
    prooly/MOTPG/pdf/   -> MOTP/assets/pdf/Geometry/
    prooly/MOTPNT/pdf/  -> MOTP/assets/pdf/NumberTheory/
    prooly/10RMO/pdf/   -> MOTP/assets/pdf/RMO/
    prooly/10INMO/pdf/  -> MOTP/assets/pdf/INMO/
    prooly/MOPSS25/pdf/ -> MOTP/assets/pdf/MOPSS/
    prooly/MOPSS26/pdf/ -> MOTP/assets/pdf/MOPSS/

Behavior:
    - Dry-run by default.
    - --apply performs the actual copies.
    - SHA-256 hashes determine whether PDF contents differ.
    - Matching filenames with identical contents are skipped.
    - Matching filenames with different contents are replaced.
    - Source PDFs missing from the destination are reported, not added.
    - Destination-only PDFs are preserved.
    - Non-PDF files are ignored.
"""

import argparse
import hashlib
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

    PROOLY_ROOT / "IMOTC25" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "IMOTC",

    PROOLY_ROOT / "IMOTC26" / "pdf":
        MOTP_ROOT / "assets" / "pdf" / "IMOTC",

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
MAGENTA = "\033[95m"
CYAN = "\033[96m"
RESET = "\033[0m"


# ============================================================
# Hashing
# ============================================================

def sha256_file(path: Path) -> str:
    """Return the SHA-256 hash of a file's contents."""

    digest = hashlib.sha256()

    # Read in chunks to avoid loading large PDFs entirely into memory.
    with path.open("rb") as file:
        for chunk in iter(lambda: file.read(1024 * 1024), b""):
            digest.update(chunk)

    return digest.hexdigest()


# ============================================================
# Replacement logic
# ============================================================

def replace_pdfs(
    source: Path,
    destination: Path,
    apply: bool,
) -> tuple[int, int, int, int]:
    """Compare source PDFs with matching destination PDFs.

    Returns:
        (
            replaced_count,
            identical_count,
            missing_destination_count,
            destination_only_count,
        )

    A replacement is counted only when the source and destination
    have matching filenames but different SHA-256 hashes.
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
        path for path in destination.iterdir()
        if path.is_file() and path.suffix.lower() == ".pdf"
    ) if destination.is_dir() else []

    source_names = {path.name for path in source_pdfs}
    destination_names = {path.name for path in destination_pdfs}

    replaced = 0
    identical = 0
    missing_destination = 0

    # Storree filenames of PDFs whose contents differ.
    
    replaced_files = []

    print(f"\nSource:      {source}")
    print(f"Destination: {destination}")

    # --------------------------------------------------------
    # Compare matching PDFs using SHA-256 hashes
    # --------------------------------------------------------

    if not source_pdfs:
        print("  No source PDFs found.")

    for src in source_pdfs:
        dst = destination / src.name

        # Preserve the existing behavior: do not add new PDFs.
        if not dst.is_file():
            missing_destination += 1
            print(
                f"  {RED}[SKIP]    {src.name}{RESET} "
                "(not in destination)"
            )
            continue

        # Compare actual file contents, not timestamps or file sizes.
        if sha256_file(src) == sha256_file(dst):
            identical += 1
            print(
                f"  {CYAN}[UNCHANGED]{RESET} {src.name} "
                "(identical)"
            )
            continue

        replaced += 1
        replaced_files.append(src.name)
        print(
            f"  {GREEN}[REPLACE]{RESET} {src.name} "
            "(content differs)"
        )

        if apply:
            shutil.copy2(src, dst)

    # --------------------------------------------------------
    # Report PDFs present only in the destination
    # --------------------------------------------------------

    # For shared destinations, compare against PDFs from all
    # source directories that map to the same destination.
    all_source_names = {
        path.name
        for mapped_source, mapped_destination in DIRECTORY_MAP.items()
        if mapped_destination == destination
        for path in mapped_source.iterdir()
        if path.is_file() and path.suffix.lower() == ".pdf"
    }

    destination_only_pdfs = sorted(
        destination_names - all_source_names
    )

    destination_only = len(destination_only_pdfs)

    print(
        f"\n  PDFs present only in destination "
        f"({destination_only}):"
    )

    for filename in destination_only_pdfs:
        print(
            f"    {MAGENTA}[DESTINATION ONLY]{RESET} "
            f"{filename}"
        )

    return (
        replaced,
        identical,
        missing_destination,
        destination_only,
        replaced_files,
    )


# ============================================================
# Main
# ============================================================

def main() -> int:
    parser = argparse.ArgumentParser(
        description=(
            "Replace differing MOTP PDFs using PDFs from prooly, "
            "with SHA-256 content comparison."
        )
    )

    parser.add_argument(
        "--apply",
        action="store_true",
        help=(
            "Actually copy differing PDFs. Without this flag, "
            "only preview changes."
        ),
    )

    args = parser.parse_args()

    mode = "APPLY" if args.apply else "DRY RUN"
    print(f"Mode: {mode}")

    total_replaced = 0
    total_identical = 0
    total_missing_destination = 0
    total_destination_only = 0

    # Store destination paths of PDFs that need replacing.
    all_replaced_files = []

    try:
        for source, destination in DIRECTORY_MAP.items():
            (
                replaced,
                identical,
                missing_destination,
                destination_only,
                replaced_files,
            ) = replace_pdfs(
                source=source,
                destination=destination,
                apply=args.apply,
            )

            total_replaced += replaced
            total_identical += identical
            total_missing_destination += missing_destination
            total_destination_only += destination_only

            all_replaced_files.extend(
                (destination, filename)
                for filename in replaced_files
            )

    except (FileNotFoundError, OSError) as exc:
        print(f"\nERROR: {exc}", file=sys.stderr)
        return 1

    print("\n" + "=" * 50)
    print("Summary")
    print(
        f"  PDFs to replace / replaced: "
        f"{total_replaced}"
    )

    for destination, filename in all_replaced_files:
        print(f"    {destination / filename}")
    print(
        f"  PDFs skipped (identical): "
        f"{total_identical}"
    )
    print(
        f"  PDFs absent from destination: "
        f"{total_missing_destination}"
    )
    print(
        f"  PDFs present only in destination: "
        f"{total_destination_only}"
    )

    if not args.apply:
        print("\nDry run only. No files were copied.")
        print("Run with --apply to perform the replacements.")
    else:
        print("\nPDF replacement completed.")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())