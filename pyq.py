from pathlib import Path

CONFIG = [
    {
        "folder": "_rmo",
        "contest": "rmo",
        "title": "RMO",
        "category": "",
        "start": 1990,
        "end": 2025,
        "exclude": {2020, 2021, 2022},
    },
    {
        "folder": "_inmo",
        "contest": "inmo",
        "title": "INMO",
        "category": "INMO",
        "start": 1989,
        "end": 2026,
        "exclude": {2022},
    },
    {
        "folder": "_ioqm",
        "contest": "ioqm",
        "title": "IOQM",
        "category": "IOQM",
        "start": 2020,
        "end": 2025,
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