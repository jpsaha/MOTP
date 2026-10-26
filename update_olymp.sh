
#!/bin/bash
set -e

# ============================================================
# Update olymp.yml and regenerate the MOTP data
#
# Purpose:
#   1. Generate olymp.yml from the prooly repository.
#   2. Copy olymp.yml into MOTP.
#   3. Regenerate contest URLs and merge the generated data.
#   4. Run the additional data-generation scripts.
#   5. Check PDF links.
#
# Usage:
#   Run this script from the MOTP directory.
#
# Note:
#   set -e stops execution if any command fails.
# ============================================================


# ------------------------------------------------------------
# 1. Navigate to the prooly directory
# ------------------------------------------------------------
cd ../prooly


# ------------------------------------------------------------
# 2. Generate olymp.yml
#    The manifest is written to olymp.yml in the prooly directory.
# ------------------------------------------------------------
python find_olympiad_inputs.py --manifest olymp.yml


# ------------------------------------------------------------
# 3. Return to the MOTP directory
# ------------------------------------------------------------
cd ../MOTP


# ------------------------------------------------------------
# 4. Copy the generated olymp.yml into MOTP's _data directory
# ------------------------------------------------------------
cp ../prooly/olymp.yml _data/olymp.yml


# ------------------------------------------------------------
# 5. Generate contest URLs
# ------------------------------------------------------------
python3 _scripts/generate_contest_urls.py


# ------------------------------------------------------------
# 6. Merge the generated contest URLs
# ------------------------------------------------------------
python3 _scripts/merge_contest_urls.py


# ------------------------------------------------------------
# 7. Run additional data-generation scripts
# ------------------------------------------------------------

# Generate ACGNT-related data
python3 acgnt.py

# Generate MOPSS-related data
python3 mopss.py

# Generate PYQ-related data
python3 pyq.py


# ------------------------------------------------------------
# 8. Check PDF links
# ------------------------------------------------------------
python3 check_pdf_links.py


# ------------------------------------------------------------
# 9. Report successful completion
# ------------------------------------------------------------
echo "Done: olymp.yml updated, data regenerated, and PDF links checked."


# ============================================================
# To make this script executable and run it:
#
#   chmod +x update_olymp.sh
#   ./update_olymp.sh
# ============================================================
