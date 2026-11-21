# MOTP Python Scripts Guide

This guide documents the Python scripts used in the **MOTP repository** to update contest data, generate problem pages, manage PDF files, and check the generated website.

Run all commands from the root directory of the MOTP repository.

## 1. Main update workflow

The following is the regular update sequence. Run the commands in the given order.

```bash
# ============================================================
# 1. Generate topic names and update PDF files
# ============================================================

python3 _scripts/generate_topic_names.py
python3 _scripts/replace_pdfs.py --apply


# ============================================================
# 2. Generate and merge contest URLs
# ============================================================

python3 _scripts/generate_contest_urls.py
python3 _scripts/merge_contest_urls.py


# ============================================================
# 3. Generate Markdown pages
# ============================================================

python3 _scripts/acgnt.py
python3 _scripts/mopss.py
python _scripts/pyq.py


# ============================================================
# 4. Build the website and check PDF links
# ============================================================

bundle exec jekyll build
python3 _scripts/check_pdf_links.py
```

### Step 1. Generate topic names

**Script:** `generate_topic_names.py`

Generates or updates topic-name data used by the website.

Run this before the other update scripts so that the topic information is available to subsequent steps.

### Step 2. Replace PDF files

**Script:** `replace_pdfs.py`

Copies updated PDFs from the sibling `prooly` repository into the corresponding directories in MOTP.

The mappings include:

| Source in `prooly` | Destination in MOTP |
|---|---|
| `MOTPA/pdf/` | `assets/pdf/Algebra/` |
| `MOTPC/pdf/` | `assets/pdf/Combinatorics/` |
| `MOTPG/pdf/` | `assets/pdf/Geometry/` |
| `MOTPNT/pdf/` | `assets/pdf/NumberTheory/` |
| `10RMO/pdf/` | `assets/pdf/RMO/` |
| `10INMO/pdf/` | `assets/pdf/INMO/` |
| `MOPSS25/pdf/` | `assets/pdf/MOPSS/` |
| `MOPSS26/pdf/` | `assets/pdf/MOPSS/` |

The script compares files using SHA-256 hashes.

- Only matching filenames are considered.
- Files with identical contents are skipped.
- Files with different contents are replaced.
- New destination files are not added.
- Destination-only PDFs are preserved.
- Non-PDF files are ignored.

The default mode is a dry run. Use `--apply` to perform the actual replacements.

### Step 3. Generate and merge contest URLs

**Script:** `generate_contest_urls.py`

Reads contest information from:

```text
_data/past.yml
```

Generates:

```text
_data/contest_urls.yml
```

It extracts the available contest URLs, including question papers, solutions, source files, and other relevant links.

When a year has multiple question-paper entries, the script assigns variants such as `a`, `b`, `c`, etc. A single entry uses the default variant.

**Script:** `merge_contest_urls.py`

Combines:

```text
_data/olymp.yml
_data/contest_urls.yml
```

and generates:

```text
_data/merged.yml
```

The merged data associates contest URLs with the corresponding contest, year, and variant. The original problem information is retained under `problems`.

### Step 4. Generate Markdown pages

These scripts generate Markdown pages from the available contest and problem data.

**Script:** `acgnt.py`

- Reads `_data/csv/no.csv`.
- Generates Markdown pages for Algebra, Combinatorics, Geometry, and Number Theory.
- Writes the generated pages into:

```text
_geo/
_alg/
_comb/
_nt/
```

Entries with unsupported subjects or missing PDF information are skipped.

**Script:** `mopss.py`

Generates Markdown pages for MOPSS problem papers.

- Reads PDF files from `assets/pdf/MOPSS/`.
- Generates corresponding Markdown pages in `_mopss/`.
- Uses the PDF filename to determine the relevant contest date.

**Script:** `pyq.py`

Generates past-year question pages for:

- IOQM
- RMO
- INMO

The generated pages are placed in:

```text
_ioqm/
_rmo/
_inmo/
```

The script reads contest information from `_data/past.yml` to determine the relevant year ranges. Contest-specific exclusions are handled in its configuration.

### Step 5. Build the website and check PDF links

**Script:** `check_pdf_links.py`

Checks local PDF links in the generated website.

It scans the generated HTML under `_site/` and verifies that referenced PDF files exist under `assets/pdf/`.

The website must be built before running the checker:

```bash
bundle exec jekyll build
python3 _scripts/check_pdf_links.py
```

This helps identify broken PDF links before deployment.

---

## 2. Additional utility scripts

The following scripts are available in `_scripts/` but are not part of the regular update sequence.

### `liquid_include_tree.py`

A diagnostic utility for examining Liquid template dependencies.

It examines:

- `_includes/`
- `_layouts/`
- Root-level HTML templates

It recognizes both `include` and `include_relative` statements and reports unresolved includes and circular dependencies.

Useful when debugging the structure of Jekyll templates.

### `remove_disc.py`

Removes `disc` blocks from:

```text
_data/past.yml
```

Before modifying the file, it creates a backup:

```text
_data/past.yml.bak
```

Use this script only when the `disc` entries need to be removed.

---

## 3. Recommended update procedure

For a regular MOTP update:

1. Generate topic names.
2. Update existing PDF files from prooly.
3. Generate contest URL data.
4. Merge contest metadata and URLs.
5. Generate subject-wise Markdown pages.
6. Generate MOPSS pages.
7. Generate IOQM, RMO, and INMO pages.
8. Build the Jekyll website.
9. Check PDF links.
10. Review the generated site before deployment.

The scripts in this guide belong to the **MOTP repository**. The scripts used to prepare olympiad inputs and generate LaTeX sources belong to the separate **prooly repository** and are documented independently.

---

## 4. Quick reference

| Script | Main purpose |
|---|---|
| `generate_topic_names.py` | Generate topic-name data |
| `replace_pdfs.py` | Replace existing PDFs with updated files from prooly |
| `generate_contest_urls.py` | Extract contest URLs from `_data/past.yml` |
| `merge_contest_urls.py` | Merge contest metadata and URLs into `_data/merged.yml` |
| `acgnt.py` | Generate Algebra, Combinatorics, Geometry, and Number Theory pages |
| `mopss.py` | Generate MOPSS pages from PDF files |
| `pyq.py` | Generate IOQM, RMO, and INMO past-year pages |
| `check_pdf_links.py` | Check local PDF links in the generated website |
| `liquid_include_tree.py` | Inspect Liquid include dependencies |
| `remove_disc.py` | Remove `disc` blocks from `_data/past.yml`, keeping a backup |