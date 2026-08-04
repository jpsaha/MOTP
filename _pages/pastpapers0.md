---
layout: page
permalink: /PastPapers/
title: PYQs # Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC
description: Previous Years' Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.
pretty_table: true
nav: false
nav_order: 25
tags: [Past Question Papers, Previous Years' Question Papers, Pre-RMO, IOQM, Pre-RMO, RMO, INMO, EGMOTC, IMOTC]
tabs: true
giscus_comments: true
---

{% capture lnmo %}{% include mdcode/lnmoall.md %}{% endcapture %}
{{ lnmo | markdownify }}

{% capture ppsrc %}{% include mdcontent/pastsrc.md %}{% endcapture %}
{{ ppsrc | markdownify }}

{% capture table %}{% include lqd/pastpapersall.liquid %}{% endcapture %}
{{ table | markdownify }}
