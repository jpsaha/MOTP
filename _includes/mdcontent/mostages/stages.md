{% assign ioqmdate = "ioqm_" | append: site.data.lnk.moyr | remove: "20" | remove: "--"  | append: "_date" -%}
{% assign rmodate = "rmo_" | append: site.data.lnk.moyr | remove: "20" | remove: "--"  | append: "_date" -%}
{% assign inmodate = "inmo_" | append: site.data.lnk.moyr | remove: "20" | remove: "--"  | append: "_date" -%}

```mermaid
graph LR
    Q(IOQM
    {{ site.data.lnk[ioqmdate] | replace: "September", "Sept" }}) --> R(RMO
    {{ site.data.lnk[rmodate] | replace: "November", "Nov" }})
    R -- INMO Training Camp --> N(INMO
    {{ site.data.lnk[inmodate] | replace: "January", "Jan" }})
    N --> J(IMOTC)
    J --> P((PDC))
    P --> I{IMO}
    N --> E(EGMOTC)
    E --> F((EGMOPDC))
    F --> G{EGMO}
    N --> A{APMO}
```
