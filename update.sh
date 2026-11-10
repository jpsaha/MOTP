#!/bin/bash
set -e

# ============================================================
# Update the MOTP repository
#
# Purpose:
#   1. Run the prooly updating script.
#   2. Generate topic names.
#   3. Replace existing PDFs.
#   4. Update the olympiad manifest.
#   5. Generate and merge contest URLs.
#   6. Regenerate additional datasets.
#   7. Check PDF links.
#
# Usage:
#   Run from the MOTP directory:
#       ./update.sh
#
# Note:
#   set -e stops execution if any command fails.
#   Subsequent steps are executed only if the preceding
#   commands complete successfully.
# ============================================================


# ------------------------------------------------------------
# Terminal colors
# ------------------------------------------------------------
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'
RESET='\033[0m'


# ------------------------------------------------------------
# 1. Update the prooly repository
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 1/7: Updating the prooly repository${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Move to the sibling prooly repository.
cd ../prooly

# 1.1 Run the prooly updating script
#     This generates olymp.yml, updates problem metadata
#     and URLs, generates LaTeX sources, and builds TeX
#     projects.

echo
echo -e "${YELLOW}Updating prooly...${RESET}"
echo -e "${BLUE}Command: ./update_prooly.sh${RESET}"

./update_prooly.sh

echo -e "${GREEN}Completed: prooly repository updated.${RESET}"


# 1.2 Generate topic names
#     Generates topic-name data used by the MOTP website.

echo
echo -e "${YELLOW}Generating topic names...${RESET}"
echo -e "${BLUE}Command: python3 _scripts/generate_topic_names.py${RESET}"

python3 _scripts/generate_topic_names.py

echo -e "${GREEN}Completed: topic names generated.${RESET}"


# ------------------------------------------------------------
# 2. Return to MOTP and replace PDFs
# ------------------------------------------------------------
cd ../MOTP

echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 2/7: Replacing existing PDFs${RESET}"
echo -e "${BLUE}Command: python3 _scripts/replace_pdfs.py --apply${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Replace matching PDFs in MOTP with the newly built PDFs
# from prooly. Only existing destination PDFs are replaced.

echo
echo -e "${YELLOW}Replacing existing PDFs...${RESET}"

python3 _scripts/replace_pdfs.py --apply

echo -e "${GREEN}Completed: PDF replacement.${RESET}"


# ------------------------------------------------------------
# 3. Update the olympiad manifest
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 3/7: Updating the olympiad manifest${RESET}"
echo -e "${BLUE}Source:      ../prooly/olymp.yml${RESET}"
echo -e "${BLUE}Destination: _data/olymp.yml${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Copy the generated olympiad manifest from prooly
# into the MOTP Jekyll data directory.

echo
echo -e "${YELLOW}Copying olymp.yml...${RESET}"

cp ../prooly/olymp.yml _data/olymp.yml

echo -e "${GREEN}Completed: _data/olymp.yml updated.${RESET}"


# ------------------------------------------------------------
# 4. Generate contest URLs
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 4/7: Generating contest URLs${RESET}"
echo -e "${BLUE}Command: python3 _scripts/generate_contest_urls.py${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Generate contest URL data from the available sources.

echo
echo -e "${YELLOW}Generating contest URLs...${RESET}"

python3 _scripts/generate_contest_urls.py

echo -e "${GREEN}Completed: contest URLs generated.${RESET}"


# ------------------------------------------------------------
# 5. Merge contest URLs
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 5/7: Merging contest URLs${RESET}"
echo -e "${BLUE}Command: python3 _scripts/merge_contest_urls.py${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Merge the generated contest URLs into the final
# Jekyll data file.

echo
echo -e "${YELLOW}Merging contest URLs...${RESET}"

python3 _scripts/merge_contest_urls.py

echo -e "${GREEN}Completed: contest URLs merged.${RESET}"


# ------------------------------------------------------------
# 6. Regenerate additional datasets
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 6/7: Regenerating additional datasets${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"


# 6.1 Generate ACGNT-related data

echo
echo -e "${YELLOW}[1/3] Generating ACGNT-related data...${RESET}"

python3 _scripts/acgnt.py

echo -e "${GREEN}Completed: ACGNT data.${RESET}"


# 6.2 Generate MOPSS-related data

echo
echo -e "${YELLOW}[2/3] Generating MOPSS-related data...${RESET}"

python3 _scripts/mopss.py

echo -e "${GREEN}Completed: MOPSS data.${RESET}"


# 6.3 Generate PYQ data

echo
echo -e "${YELLOW}[3/3] Generating PYQ data...${RESET}"

python3 _scripts/pyq.py

echo -e "${GREEN}Completed: PYQ data.${RESET}"


# ------------------------------------------------------------
# 7. Check PDF links
# ------------------------------------------------------------
echo
echo -e "${CYAN}${BOLD}============================================================${RESET}"
echo -e "${CYAN}${BOLD}STEP 7/7: Checking PDF links${RESET}"
echo -e "${BLUE}Command: python3 _scripts/check_pdf_links.py${RESET}"
echo -e "${CYAN}${BOLD}============================================================${RESET}"

# Check the PDF links used throughout the MOTP website.

echo
echo -e "${YELLOW}Checking PDF links...${RESET}"

python3 _scripts/check_pdf_links.py

echo -e "${GREEN}Completed: PDF link check.${RESET}"


# ------------------------------------------------------------
# Final status
# ------------------------------------------------------------
echo
echo -e "${GREEN}${BOLD}============================================================${RESET}"
echo -e "${GREEN}${BOLD}SUCCESS: All MOTP updates completed successfully.${RESET}"
echo
echo -e "${GREEN}The following operations were completed:${RESET}"
echo -e "${GREEN}  1. prooly repository updated.${RESET}"
echo -e "${GREEN}  2. Topic names generated.${RESET}"
echo -e "${GREEN}  3. Existing PDFs replaced.${RESET}"
echo -e "${GREEN}  4. Olympiad manifest updated.${RESET}"
echo -e "${GREEN}  5. Contest URLs generated.${RESET}"
echo -e "${GREEN}  6. Contest URLs merged.${RESET}"
echo -e "${GREEN}  7. ACGNT, MOPSS and PYQ datasets regenerated.${RESET}"
echo -e "${GREEN}  8. PDF links checked.${RESET}"
echo -e "${GREEN}${BOLD}============================================================${RESET}"


# ============================================================
# To make this script executable and run it:
#
#   chmod +x update.sh
#   ./update.sh
# ============================================================