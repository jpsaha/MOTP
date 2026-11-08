#!/bin/bash
set -e

# ============================================================
# Update the MOTP repository
#
# Purpose:
#   1. Run the prooly updating script.
#   2. Replace existing PDFs.
#   3. Update the olympiad manifest.
#   4. Generate and merge contest URLs.
#   5. Regenerate additional datasets.
#   6. Check PDF links.
#
# Usage:
#   Run from the MOTP directory:
#       ./update.sh
#
# Note:
#   set -e stops execution if any command fails.
#   Progress messages help the terminal user track operations.
# ============================================================


# ------------------------------------------------------------
# 1. Update the prooly repository
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 1/7: Updating the prooly repository"
echo "============================================================"

cd ../prooly

echo "Running: ./update_prooly.sh"
./update_prooly.sh

echo "Completed: prooly repository updated."

python3 generate_topic_names.py

# ------------------------------------------------------------
# 2. Return to MOTP and replace PDFs
# ------------------------------------------------------------
cd ../MOTP

echo
echo "============================================================"
echo "STEP 2/7: Replacing existing PDFs"
echo "Command: python3 replace_pdfs.py --apply"
echo "============================================================"

python3 replace_pdfs.py --apply

echo "Completed: PDF replacement."


# ------------------------------------------------------------
# 3. Update the olympiad manifest
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 3/7: Updating the olympiad manifest"
echo "Source:      ../prooly/olymp.yml"
echo "Destination: _data/olymp.yml"
echo "============================================================"

cp ../prooly/olymp.yml _data/olymp.yml

echo "Completed: _data/olymp.yml updated."


# ------------------------------------------------------------
# 4. Generate contest URLs
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 4/7: Generating contest URLs"
echo "Command: python3 _scripts/generate_contest_urls.py"
echo "============================================================"

python3 _scripts/generate_contest_urls.py

echo "Completed: contest URLs generated."


# ------------------------------------------------------------
# 5. Merge contest URLs
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 5/7: Merging contest URLs"
echo "Command: python3 _scripts/merge_contest_urls.py"
echo "============================================================"

python3 _scripts/merge_contest_urls.py

echo "Completed: contest URLs merged."


# ------------------------------------------------------------
# 6. Regenerate additional datasets
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 6/7: Regenerating additional datasets"
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
# 7. Check PDF links
# ------------------------------------------------------------
echo
echo "============================================================"
echo "STEP 7/7: Checking PDF links"
echo "Command: python3 check_pdf_links.py"
echo "============================================================"

python3 check_pdf_links.py

echo "Completed: PDF link check."


# ------------------------------------------------------------
# Final status
# ------------------------------------------------------------
echo
echo "============================================================"
echo "SUCCESS: All MOTP updates completed successfully."
echo "prooly updated, PDFs replaced, manifest updated,"
echo "datasets regenerated, and PDF links checked."
echo "============================================================"


# ============================================================
# To make this script executable and run it:
#
#   chmod +x update.sh
#   ./update.sh
# ============================================================