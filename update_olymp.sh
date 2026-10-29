#!/bin/bash
set -e

# ============================================================
# Update olymp.yml and regenerate the MOTP data
#
# Purpose:
#   1. Generate olymp.yml in the prooly repository.
#   2. Build the TeX sources for the specified projects.
#   3. Replace existing PDFs in MOTP.
#   4. Move olymp.yml into MOTP's _data directory.
#   5. Generate and merge contest URLs.
#   6. Regenerate additional datasets.
#   7. Check PDF links.
#
# Usage:
#   Run this script from the MOTP directory.
#
# Note:
#   set -e stops execution if any command fails.
#   Progress messages are printed to help the terminal user
#   identify the current operation.
# ============================================================


# ------------------------------------------------------------
# 1. Navigate to the prooly directory
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 1/8: Navigating to the prooly directory"
echo "============================================================"

cd ../prooly


# ------------------------------------------------------------
# 2. Generate olymp.yml and build TeX sources
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 2/8: Generating olymp.yml"
echo "Command: python find_olympiad_inputs.py --manifest olymp.yml"
echo "============================================================"

python find_olympiad_inputs.py --manifest olymp.yml

echo
echo "Building TeX sources for the specified projects..."
echo "Command: python3 build_tex.py MOTPA MOTPC MOTPG MOTPNT MOPSS25 MOPSS26 IMOTC25 IMOTC26 10RMO 10INMO"

python3 build_tex.py MOTPA MOTPC MOTPG MOTPNT MOPSS25 MOPSS26 IMOTC25 IMOTC26 10RMO 10INMO

echo "Completed: olymp.yml generated and TeX sources built."


# ------------------------------------------------------------
# 3. Return to the MOTP directory and replace PDFs
# ------------------------------------------------------------
cd ../MOTP

echo
echo "============================================================"
echo "STEP 3/8: Replacing existing PDFs"
echo "Command: python3 replace_pdfs.py --apply"
echo "============================================================"

python3 replace_pdfs.py --apply

echo "Completed: PDF replacement."


# ------------------------------------------------------------
# 4. Move olymp.yml into MOTP's _data directory
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 4/8: Updating the olympiad manifest"
echo "Source:      ../prooly/olymp.yml"
echo "Destination: _data/olymp.yml"
echo "============================================================"

mv ../prooly/olymp.yml _data/olymp.yml

echo "Completed: _data/olymp.yml updated."


# ------------------------------------------------------------
# 5. Generate contest URLs
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 5/8: Generating contest URLs"
echo "Command: python3 _scripts/generate_contest_urls.py"
echo "============================================================"

python3 _scripts/generate_contest_urls.py

echo "Completed: contest URLs generated."


# ------------------------------------------------------------
# 6. Merge the generated contest URLs
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 6/8: Merging contest URLs"
echo "Command: python3 _scripts/merge_contest_urls.py"
echo "============================================================"

python3 _scripts/merge_contest_urls.py

echo "Completed: contest URLs merged."


# ------------------------------------------------------------
# 7. Run additional data-generation scripts
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 7/8: Regenerating additional datasets"
echo "============================================================"

echo
echo "[1/3] Generating ACGNT-related data..."
python3 acgnt.py
echo "Completed: ACGNT data."

echo
echo "[2/3] Generating MOPSS-related data..."
python3 mopss.py
echo "Completed: MOPSS data."

echo
echo "[3/3] Generating PYQ data..."
python3 pyq.py
echo "Completed: PYQ data."


# ------------------------------------------------------------
# 8. Check PDF links
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 8/8: Checking PDF links"
echo "Command: python3 check_pdf_links.py"
echo "============================================================"

python3 check_pdf_links.py

echo "Completed: PDF link check."


# ------------------------------------------------------------
# Final status
# ------------------------------------------------------------
echo
echo "============================================================"
echo "SUCCESS: All steps completed successfully."
echo "olymp.yml updated, PDFs processed, data regenerated,"
echo "and PDF links checked."
echo "============================================================"


# ============================================================
# To make this script executable and run it:
#
#   chmod +x update_olymp.sh
#   ./update_olymp.sh
# ============================================================