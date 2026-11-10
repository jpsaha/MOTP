import csv
import os

# Configuration
input_csv = '_data/csv/no.csv'

# Subject → folder mapping
subject_dirs = {
    'Geometry': '_geo',
    'Algebra': '_alg',
    'Combinatorics': '_comb',
    'NumberTheory': '_nt'
}

# Create all output directories
for folder in subject_dirs.values():
    os.makedirs(folder, exist_ok=True)

def generate_markdown():
    try:
        with open(input_csv, mode='r', encoding='utf-8') as f:
            reader = csv.DictReader(f)

            for row in reader:
                subject = row['subj'].strip().replace(' ', '')

                # Skip unwanted subjects
                if subject not in subject_dirs:
                    continue

                topic = row['topic'].strip()
                pdf_value = row['pdf'].strip()

                # Skip rows with empty pdf field
                if not pdf_value:
                    continue

                # Choose correct output folder
                output_dir = subject_dirs[subject]

                # Remove extension and create markdown filename
                base = os.path.splitext(pdf_value)[0]
                filename = f"{base.lower()}.md"

                file_path = os.path.join(output_dir, filename)

                # Markdown content
                md_content = f"""---
layout: page
title: {topic}
description:
ctst:
yr:
p:
category:
jpdf: {pdf_value}
jsujet: {subject}
lnmo: true
giscus_comments: true
pretty_table: true
---
"""

                # Write markdown file
                with open(file_path, 'w', encoding='utf-8') as md_file:
                    md_file.write(md_content)

                print(f"Generated: {file_path}")

    except FileNotFoundError:
        print(f"Error: The file '{input_csv}' was not found.")

if __name__ == "__main__":
    generate_markdown()