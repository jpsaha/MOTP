from pathlib import Path
from pathlib import Path
import yaml

ROOT = Path(__file__).resolve().parents[1]
PAST_FILE = ROOT / "_data" / "past.yml"

with open(PAST_FILE, "r", encoding="utf-8") as f:
    past = yaml.safe_load(f) or []

# Find the latest available year for each contest.
END_YEARS = {}

for entry in past:
    for contest in ("ioqm", "rmo", "inmo"):
        if contest in entry and entry[contest]:
            year = entry[contest].get("yr")
            if year is not None:
                END_YEARS[contest] = max(
                    END_YEARS.get(contest, year),
                    year
                )

CONFIG = [
    {
        "folder": "_rmo",
        "contest": "rmo",
        "title": "RMO",
        "category": "",
        "start": 1990,
        "end": END_YEARS["rmo"],
        "exclude": {2020, 2021, 2022},
    },
    {
        "folder": "_inmo",
        "contest": "inmo",
        "title": "INMO",
        "category": "INMO",
        "start": 1989,
        "end": END_YEARS["inmo"],
        "exclude": {2022},
    },
    {
        "folder": "_ioqm",
        "contest": "ioqm",
        "title": "IOQM",
        "category": "IOQM",
        "start": 2020,
        "end": END_YEARS["ioqm"],
        "exclude": set(),
    },
]

template = """---
layout: page
title: {title} {year} Questions, Solutions, Discussions
description:
ctst: {contest}
yr: {year}
{category_line}lnmo: true
giscus_comments: true
pretty_table: true
---
"""

for cfg in CONFIG:
    folder = Path(cfg["folder"])
    folder.mkdir(exist_ok=True)

    count = 0

    for year in range(cfg["start"], cfg["end"] + 1):
        if year in cfg["exclude"]:
            continue

        category_line = (
            f"category: {cfg['category']}\n"
            if cfg["category"]
            else "category:\n"
        )

        content = template.format(
            title=cfg["title"],
            year=year,
            contest=cfg["contest"],
            category_line=category_line,
        )

        (folder / f"{year}.md").write_text(content, encoding="utf-8")
        count += 1

    print(f"Created {count} files in {folder}")