---
layout: page
permalink: /PriorParticipation/
title: Prior Participations
description: Participation of a few Indian contestants in some International Olympiads
nav: false
nav_order: 10
tabs: true
giscus_comments: true
chart:
  echarts: true
---

## International Olympiads
There are several Mathematical Olympiads of International repute, where students participated from India. 
They include 
- [International Mathematical Olympiad](https://www.imo-official.org/) (IMO), 
- [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO), 
- [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO), 
- [Sharygin Geometry Olympiad](https://geometry.ru/olimp/olimpsharygin.php), 
- [Iranian Geometry Olympiad](https://igo-official.com/?lang=en) (IGO), 
- [Tournament of Towns](https://www.turgor.ru/en/).


```echarts
{
  const posList = [
  'left',
  'right',
  'top',
  'bottom',
  'inside',
  'insideTop',
  'insideLeft',
  'insideRight',
  'insideBottom',
  'insideTopLeft',
  'insideTopRight',
  'insideBottomLeft',
  'insideBottomRight'
];
app.configParameters = {
  rotate: {
    min: -90,
    max: 90
  },
  align: {
    options: {
      left: 'left',
      center: 'center',
      right: 'right'
    }
  },
  verticalAlign: {
    options: {
      top: 'top',
      middle: 'middle',
      bottom: 'bottom'
    }
  },
  position: {
    options: posList.reduce(function (map, pos) {
      map[pos] = pos;
      return map;
    }, {})
  },
  distance: {
    min: 0,
    max: 100
  }
};
app.config = {
  rotate: 90,
  align: 'left',
  verticalAlign: 'middle',
  position: 'insideBottom',
  distance: 15,
  onChange: function () {
    const labelOption = {
      rotate: app.config.rotate,
      align: app.config.align,
      verticalAlign: app.config.verticalAlign,
      position: app.config.position,
      distance: app.config.distance
    };
    myChart.setOption({
      series: [
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        },
        {
          label: labelOption
        }
      ]
    });
  }
};
const labelOption = {
  show: true,
  position: app.config.position,
  distance: app.config.distance,
  align: app.config.align,
  verticalAlign: app.config.verticalAlign,
  rotate: app.config.rotate,
  formatter: '{c}  {name|{a}}',
  fontSize: 10,
  rich: {
    name: {}
  }
};
option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    data: ['Gold', 'Silver', 'Bronze', 'HM']
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: true },
      data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2021', '2022', '2023']
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Gold',
      type: 'bar',
      barGap: 0,
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [2, 0, 0, 0, 0, 0, 0, 1, 1, 1, 2]
    },
    {
      name: 'Silver',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [3, 2, 1, 1, 1, 0, 3, 4, 1, 0, 2]
    },
    {
      name: 'Bronze',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 3, 3, 2, 5, 3, 2, 0, 3, 5, 2]
    },
    {
      name: 'HM',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 0, 2, 3, 0, 3, 1, 1, 1, 0, 0]
    }
  ]
};
}
```

## Participation of a few Indian contestants in some International Olympiads

{% tabs participation %}

{% tab participation Anant Mudgal %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=25764)  2015 (HM), 2016 (B), 2017 (B), 2018 (S),
- APMO [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S).

{% endtab %}

{% tab participation Pranjal Srivastava %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=28249) 2018 (S), 2019 (G), 2021 (G), 2022 (G),
- APMO [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G),
- IGO 2021 (B).

{% endtab %}

{% tab participation Atul Shatavart Nadig %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31725) 2022 (B), 2023 (G),
- APMO [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G),
- IGO 2022 (S).

{% endtab %}

{% tab participation Anushka Aggarwal %}

participated in 

- [EGMO](https://www.egmo.org/people/person1429/) 2019 (B), 2020 (B), 2022 (B).

{% endtab %}

{% tab participation Ananda Bhaduri %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=33405) 2023 (S),
- APMO [2023](https://www.apmo-official.org/country_report/IND/2023) (B), 
and qualified for 
- the Final round of Sharygin Geometry Olympiad in 2020 and 2021.

{% endtab %}

{% tab participation Gunjan Aggarwal %}

participated in 

- [EGMO](https://www.egmo.org/people/person1867/) 2022 (B), 2023 (S), 2024 (S).

She qualified 
- diploma in Sharygin Geometry Olympiad.

She received a 
- Silver medal in IGO. 

She has a 
- Diploma in Tournament of Towns.

{% endtab %}

{% tab participation Amaan Khan %}

qualified for 
- the Final round of Sharygin Geometry Olympiad in 2020 and won a 3rd diploma.

{% endtab %}

{% tab participation Adhitya Venkata Ganesh Mangudy %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31724) 2022 (B), 2023 (B),
- APMO in [2022](https://www.apmo-official.org/country_report/IND/2022) (B), [2023](https://www.apmo-official.org/country_report/IND/2023) (S),
- IGO in 2019 (G), 2023 (B).

{% endtab %}

{% tab participation Ananya Rajas Ranade %}

participated in 

- [EGMO](https://www.egmo.org/people/person1866/) 2021 (S), 2022 (B).

{% endtab %}

{% tab participation Kanav Talwar %}

received a 

- Bronze medal in IGO.

{% endtab %}

{% tab participation Rohan Goyal %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31126) 2021 (B),
- APMO in [2020](https://www.apmo-official.org/country_report/IND/2020) (B), 
- IGO in 2021 (S).

{% endtab %}

{% tab participation Saee Vitthal Patil %}

participated in 

- [EGMO](https://www.egmo.org/people/person2568/) 2024 (B).

{% endtab %}

{% tab participation Sanjana Philo Chacko %}

participated in 

- [EGMO](https://www.egmo.org/people/person2283/) 2023 (B), 2024 (S) 

{% endtab %}

{% tab participation Sunaina Pati %}

participated in 

- [EGMO](https://www.egmo.org/people/person2282/) 2023 (S).

{% endtab %}

{% tab participation Aditya Khurmi %}

participated in 

- APMO [2020](https://www.apmo-official.org/country_report/IND/2020) (B).

{% endtab %}

{% tab participation Siddharth Choppara %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=33406) 2023 (S),
- APMO [2023](https://www.apmo-official.org/country_report/IND/2023) (B).

{% endtab %}

{% tab participation Arjun Gupta %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31722) 2022 (B), 2023 (G),
- APMO [2023](https://www.apmo-official.org/country_report/IND/2023) (S).

{% endtab %}

{% endtabs %}

---

<!--
| Name | [International Mathematical Olympiad](https://www.imo-official.org/) (IMO) | [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO) | [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO) | [Sharygin Geometry Olympiad](https://geometry.ru/olimp/olimpsharygin.php) | [Iranian Geometry Olympiad](https://igo-official.com/?lang=en) (IGO) | [Tournament of Towns](https://www.turgor.ru/en/) |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   `Anant Mudgal`   | [IMO](https://www.imo-official.org/participant_r.aspx?id=25764)  2015 (HM), 2016 (B), 2017 (B), 2018 (S)  | [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S) |      |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|  `Pranjal Srivastava`   |  [IMO](https://www.imo-official.org/participant_r.aspx?id=28249) 2018 (S), 2019 (G), 2021 (G), 2022 (G)  |   [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G)  |     |     | 2021 (B)|     |
|      |     |      |      |                            |                           |                     |
|  `Atul Shatavart Nadig`   | [IMO](https://www.imo-official.org/participant_r.aspx?id=31725) 2022 (B), 2023 (G)   |   [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G)  |     |     |   2022 (S)  |     |
|      |     |      |      |                            |                           |                     |
|   `Anushka Aggarwal`  |     |     |  [EGMO](https://www.egmo.org/people/person1429/) 2019 (B), 2020 (B), 2022 (B)  |     |     |     |
|      |     |      |      |                            |                           |                     |
|  `Ananda Bhaduri`   |  [IMO](https://www.imo-official.org/participant_r.aspx?id=33405) 2023 (S)   |  [2023](https://www.apmo-official.org/country_report/IND/2023) (B)   |     |  Qualified for the final round in 2020 and 2021   |     |     |
|      |     |      |      |                            |                           |                     |
|   `Gunjan Aggarwal`  |     |     | [EGMO](https://www.egmo.org/people/person1867/) 2022 (B), 2023 (S), 2024 (S)    |  Qualified diploma   |  Silver   |   Diploma  |
|      |     |      |      |                            |                           |                     |
|  `Amaan Khan`   |     |     |     |  Qualified for the final round in 2020 and won a 3rd diploma.   |      |     |
|      |     |      |      |                            |                           |                     |
|  `Adhitya Venkata Ganesh Mangudy`   | [IMO](https://www.imo-official.org/participant_r.aspx?id=31724) 2022 (B), 2023 (B)    |  [2022](https://www.apmo-official.org/country_report/IND/2022) (B), [2023](https://www.apmo-official.org/country_report/IND/2023) (S)   |     |     |  2019 (G), 2023 (B)   |     |
|      |     |      |      |                            |                           |                     |
|   `Ananya Rajas Ranade`   |     |      |  [EGMO](https://www.egmo.org/people/person1866/) 2021 (S), 2022 (B)    |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|   `Kanav Talwar`  |     |     |     |     |   Bronze  |     |
|      |     |      |      |                            |                           |                     |
|   `Rohan Goyal`  |     |     |     |     |  2021 (S)   |     |
|      |     |      |      |                            |                           |                     |
|  `Saee Vitthal Patil`    |     |      |  [EGMO](https://www.egmo.org/people/person2568/) 2024 (B)    |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|  `Sanjana Philo Chacko`    |     |      | [EGMO](https://www.egmo.org/people/person2283/) 2023 (B), 2024 (S)   |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|  `Sunaina Pati`    |     |      |  [EGMO](https://www.egmo.org/people/person2282/) 2023 (S)    |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|   `Aditya Khurmi`   |     |  [2020](https://www.apmo-official.org/country_report/IND/2020) (B)    |      |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|   `Siddharth Choppara`   |  [IMO](https://www.imo-official.org/participant_r.aspx?id=33406) 2023 (S)   |   [2023](https://www.apmo-official.org/country_report/IND/2023) (B)   |      |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|   `Arjun Gupta`   |  [IMO](https://www.imo-official.org/participant_r.aspx?id=31722) 2022 (B), 2023 (G)   |   [2023](https://www.apmo-official.org/country_report/IND/2023) (S)   |      |                            |                           |                     |
|      |     |      |      |                            |                           |                     |
|      |     |      |      |                            |                           |                     |

-------
-->

## [Geoff Smith](https://people.bath.ac.uk/masgcs/advice.html) remarked the following in the foreword to the text [Infinity](http://prac.im.pwr.wroc.pl/~kwasnicki/pl/o/infinity.pdf) by [Hojoo Lee](https://cosmogeometer.wordpress.com/problems/), [Tom Lovering](https://www.imo-official.org/participant_r.aspx?id=15875) (he maintains a [blog](https://tlovering.wordpress.com/)), and [Cosmin Pohoata](https://pohoatza.wordpress.com/).

>The nations which do consistently well at this competition (IMO) must have at least one (and probably at least two) of the following attributes:
> * A large population.
> * A significant proportion of its population in receipt of a good education.
> * A well-organized training infrastructure to support mathematics competitions.
> * A culture which values intellectual achievement.
>
> Alternatively, you need a cloning facility and a relaxed regulatory framework.

-------