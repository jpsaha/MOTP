import re
from pathlib import Path

pdf_dir = Path("assets/pdf/MOPSS")
mopss_dir = Path("_mopss")
mopss_dir.mkdir(exist_ok=True)

months = {
    "Jan": "January",
    "Feb": "February",
    "Mar": "March",
    "Apr": "April",
    "May": "May",
    "Jun": "June",
    "Jul": "July",
    "Aug": "August",
    "Sep": "September",
    "Oct": "October",
    "Nov": "November",
    "Dec": "December",
}

template = """---
layout: page
title: MOPSS, {day} {month_full} 20{yy}
description: MOPSS Problems, Walkthroughs, Solutions from {day} {month_full} 20{yy}. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.
ctst: mopss
yr: {yy}
p: {month_lower}{day_num}
category:
jpdf: {basename}
jsujet: MOPSS
lnmo: true
giscus_comments: true
pretty_table: true
---
"""

count = 0

for pdf in sorted(pdf_dir.glob("MOPSS*.pdf")):
    m = re.fullmatch(r"MOPSS(\d{2})([A-Z][a-z]{2})(\d{1,2})\.pdf", pdf.name)
    if not m:
        print(f"Skipping {pdf.name}")
        continue

    yy, mon, day = m.groups()

    month_full = months[mon]
    month_lower = mon.lower()
    day_num = day
    day_display = f"{int(day)}th"

    # Optional: nicer ordinal suffixes
    n = int(day)
    if 10 <= n % 100 <= 20:
        suffix = "th"
    else:
        suffix = {1: "st", 2: "nd", 3: "rd"}.get(n % 10, "th")
    day_display = f"{n}{suffix}"

    md_name = f"{yy}{month_lower}{day_num}.md"

    content = template.format(
        day=day_display,
        day_num=day_num,
        month_full=month_full,
        month_lower=month_lower,
        yy=yy,
        basename=pdf.stem,
    )

    (mopss_dir / md_name).write_text(content, encoding="utf-8")
    count += 1

print(f"Created {count} MOPSS pages.")