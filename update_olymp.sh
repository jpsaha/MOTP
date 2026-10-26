
#!/bin/bash
set -e

# ============================================================
# Update olymp.yml and regenerate the MOTP data
# Run this script from the MOTP directory.
# ============================================================

# 1. Go to ../prooly
cd ../prooly

# 2. Generate olymp.yml
python find_olympiad_inputs.py --manifest olymp.yml

# 3. Return to MOTP
cd ../MOTP

# 4. Copy the generated olymp.yml
cp ../prooly/olymp.yml _data/olymp.yml

# 5. Generate data
python3 _scripts/generate_contest_urls.py

# 6. Merge generated data
python3 _scripts/merge_contest_urls.py

echo "Done: olymp.yml updated and scripts completed successfully."

# chmod +x update_olymp.sh
# ./update_olymp.sh