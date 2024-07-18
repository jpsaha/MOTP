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

For ease of reference, one may have a brief overview of participation of India in [IMO](https://www.imo-official.org/), [APMO](https://www.apmo-official.org/), [EGMO](https://www.egmo.org/) in recent times below, which relies on the information available at the following webpages, which are significantly more detailed.
- [Team results at IMO](https://www.imo-official.org/country_team_r.aspx?code=IND),
- [Results for India at APMO](https://www.apmo-official.org/country_report/IND/all),
- [India at EGMO](https://www.egmo.org/countries/country35/).

<body style="height: 75%; margin: 0">
  <div id="container" style="height: 500%"></div>

  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>

  <script type="text/javascript">
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};

    var option;

    var dataMap = {};
function dataFormatter(obj) {
  // prettier-ignore
  var pList = ['IMO', 'APMO', 'EGMO'];
  var temp;
  for (var year = 2015; year <= 2024; year++) {
    var max = 0;
    var sum = 0;
    temp = obj[year];
    for (var i = 0, l = temp.length; i < l; i++) {
      max = Math.max(max, temp[i]);
      sum += temp[i];
      obj[year][i] = {
        name: pList[i],
        value: temp[i]
      };
    }
    obj[year + 'max'] = Math.floor(max / 100) * 100;
    obj[year + 'sum'] = sum;
  }
  return obj;
}
// prettier-ignore Gold
dataMap.dataGold = dataFormatter({
    //max : 60000,
    2024: [0, 0, 0],
    2023: [2, 1, 0],
    2022: [1, 1, 0],
    2021: [1, 0, 0],
    2020: [0, 1, 0],
    2019: [1, 1, 0],
    2018: [0, 0, 0],
    2017: [0, 0, 0],
    2016: [0, 0, 0],
    2015: [0, 0, 0]
});
// prettier-ignore Silver
dataMap.dataSilver = dataFormatter({
    //max : 4000,
    2024: [0, 0, 2],
    2023: [2, 2, 2],
    2022: [0, 2, 0],
    2021: [1, 0, 1],
    2020: [0, 2, 0],
    2019: [4, 2, 1],
    2018: [3, 0, 0],
    2017: [0, 3, 0],
    2016: [1, 3, 0],
    2015: [1, 1, 0]
});
// prettier-ignore Bronze
dataMap.dataBronze = dataFormatter({
    //max : 26600,
    2024: [0, 0, 2],
    2023: [2, 4, 1],
    2022: [5, 4, 4],
    2021: [3, 0, 0],
    2020: [0, 4, 1],
    2019: [0, 4, 2],
    2018: [2, 7, 2],
    2017: [3, 4, 1],
    2016: [5, 4, 1],
    2015: [2, 5, 1]
});
// prettier-ignore HM
dataMap.dataHM = dataFormatter({
    //max : 25000,
    2024: [0, 0, 0],
    2023: [0, 3, 1],
    2022: [0, 3, 0],
    2021: [1, 0, 1],
    2020: [0, 3, 1],
    2019: [1, 3, 0],
    2018: [1, 3, 0],
    2017: [3, 3, 1],
    2016: [0, 1, 0],
    2015: [3, 3, 0]
});
option = {
  baseOption: {
    timeline: {
      axisType: 'category',
      // realtime: false,
      // loop: false,
      autoPlay: true,
      // currentIndex: 2,
      playInterval: 1000,
      // controlStyle: {
      //     position: 'left'
      // },
      data: [
        '2015',
        {
          value: '2016',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        '2017',
        {
          value: '2018',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        '2019',
        {
          value: '2020',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        '2021',
        {
          value: '2022',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        '2023',
      ],
      label: {
        formatter: function (s) {
          return new Date(s).getFullYear();
        }
      }
    },
    title: {
      subtext: ' Participation in'
    },
    tooltip: {},
    legend: {
      left: 'right',
      data: ['Gold', 'Silver', 'Bronze', 'HM'],
      selected: {
        Gold: true
      }
    },
    calculable: true,
    grid: {
      top: 80,
      bottom: 100,
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow',
          label: {
            show: true,
            formatter: function (params) {
              return params.value.replace('\n', '');
            }
          }
        }
      }
    },
    xAxis: [
      {
        type: 'category',
        axisLabel: { interval: 0 },
        data: [
          'IMO',
          'APMO',
          'EGMO',
          ''
        ],
        splitLine: { show: false }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: 'IMO, APMO, EGMO'
      }
    ],
    series: [
      { name: 'Gold', type: 'bar' },
      { name: 'Silver', type: 'bar' },
      { name: 'Bronze', type: 'bar' },
      { name: 'HM', type: 'bar' },
      {
        name: 'Medals',
        type: 'pie',
        center: ['77%', '25%'],
        radius: '28%',
        z: 100
      }
    ]
  },
  options: [
    {
      title: { text: '2015' },
      series: [
        { data: dataMap.dataGold['2015'] },
        { data: dataMap.dataSilver['2015'] },
        { data: dataMap.dataBronze['2015'] },
        { data: dataMap.dataHM['2015'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2015sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2015sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2015sum'] },
            { name: 'HM', value: dataMap.dataHM['2015sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2016' },
      series: [
        { data: dataMap.dataGold['2016'] },
        { data: dataMap.dataSilver['2016'] },
        { data: dataMap.dataBronze['2016'] },
        { data: dataMap.dataHM['2016'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2016sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2016sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2016sum'] },
            { name: 'HM', value: dataMap.dataHM['2016sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2017' },
      series: [
        { data: dataMap.dataGold['2017'] },
        { data: dataMap.dataSilver['2017'] },
        { data: dataMap.dataBronze['2017'] },
        { data: dataMap.dataHM['2017'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2017sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2017sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2017sum'] },
            { name: 'HM', value: dataMap.dataHM['2017sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2018' },
      series: [
        { data: dataMap.dataGold['2018'] },
        { data: dataMap.dataSilver['2018'] },
        { data: dataMap.dataBronze['2018'] },
        { data: dataMap.dataHM['2018'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2018sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2018sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2018sum'] },
            { name: 'HM', value: dataMap.dataHM['2018sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2019' },
      series: [
        { data: dataMap.dataGold['2019'] },
        { data: dataMap.dataSilver['2019'] },
        { data: dataMap.dataBronze['2019'] },
        { data: dataMap.dataHM['2019'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2019sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2019sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2019sum'] },
            { name: 'HM', value: dataMap.dataHM['2019sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2020' },
      series: [
        { data: dataMap.dataGold['2020'] },
        { data: dataMap.dataSilver['2020'] },
        { data: dataMap.dataBronze['2020'] },
        { data: dataMap.dataHM['2020'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2020sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2020sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2020sum'] },
            { name: 'HM', value: dataMap.dataHM['2020sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2021' },
      series: [
        { data: dataMap.dataGold['2021'] },
        { data: dataMap.dataSilver['2021'] },
        { data: dataMap.dataBronze['2021'] },
        { data: dataMap.dataHM['2021'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2021sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2021sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2021sum'] },
            { name: 'HM', value: dataMap.dataHM['2021sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2022' },
      series: [
        { data: dataMap.dataGold['2022'] },
        { data: dataMap.dataSilver['2022'] },
        { data: dataMap.dataBronze['2022'] },
        { data: dataMap.dataHM['2022'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2022sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2022sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2022sum'] },
            { name: 'HM', value: dataMap.dataHM['2022sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2023' },
      series: [
        { data: dataMap.dataGold['2023'] },
        { data: dataMap.dataSilver['2023'] },
        { data: dataMap.dataBronze['2023'] },
        { data: dataMap.dataHM['2023'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2023sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2023sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2023sum'] },
            { name: 'HM', value: dataMap.dataHM['2023sum'] }
          ]
        }
      ]
    },
    {
      title: { text: '2024' },
      series: [
        { data: dataMap.dataGold['2024'] },
        { data: dataMap.dataSilver['2024'] },
        { data: dataMap.dataBronze['2024'] },
        { data: dataMap.dataHM['2024'] },
        {
          data: [
            { name: 'Gold', value: dataMap.dataGold['2024sum'] },
            { name: 'Silver', value: dataMap.dataSilver['2024sum'] },
            { name: 'Bronze', value: dataMap.dataBronze['2024sum'] },
            { name: 'HM', value: dataMap.dataHM['2024sum'] }
          ]
        }
      ]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>

## Participation of a few Indian contestants in some International Olympiads

{% tabs participation %}

{% tab participation Anant Mudgal %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=25764)  2015 (HM), 2016 (B), 2017 (B), 2018 (S),
- APMO [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S).

[He is](https://www.linkedin.com/in/anant-mudgal-987982223/) an alumni of the [Chennai Mathematical Society](https://www.cmi.ac.in/people/alumni-profile.php?id=amudgal).

{% endtab %}

{% tab participation Pranjal Srivastava %}

participated in

- [IMO](https://www.imo-official.org/participant_r.aspx?id=28249) 2018 (S), 2019 (G), 2021 (G), 2022 (G),
- APMO [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G),
- IGO 2021 (B).

Currently, [he is](https://www.linkedin.com/in/pranjal-srivastava-a48158271/) a student at MIT.

{% endtab %}

{% tab participation Atul Shatavart Nadig %}

participated in

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31725) 2022 (B), 2023 (G),
- APMO [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G),
- IGO 2022 (S).

Currently, [he is](https://www.linkedin.com/in/atul-shatavart-nadig-610ba1248/) a student at MIT.
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

She [qualified](https://www.linkedin.com/in/gunjan-aggarwal-5551b4232/)
- diploma in Sharygin Geometry Olympiad in 2019.

She [received](https://www.linkedin.com/in/gunjan-aggarwal-5551b4232/) a
- Silver medal in IGO.

She [obtained](https://www.linkedin.com/in/gunjan-aggarwal-5551b4232/) a
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

Currently, [he is](https://www.linkedin.com/in/adityakhurmi/) a student at the University of Massachusetts Amherst.

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

## [Geoff Smith](https://en.wikipedia.org/wiki/Geoff_Smith_(mathematician))
is a British mathematician. He has been the [leader of the UK IMO team](https://www.imo-official.org/country_team_r.aspx?code=UNK) during 2002--2010, 2013--2018, 2022. He [has been awarded](https://www.imo-register.org.uk/golden-microphone.html) the IMO Golden Microphone thrice (during 2006, 2009, 2014). 
#### He remarked the following in the foreword to the text [Infinity](http://prac.im.pwr.wroc.pl/~kwasnicki/pl/o/infinity.pdf) by [Hojoo Lee](https://cosmogeometer.wordpress.com/problems/), [Tom Lovering](https://www.imo-official.org/participant_r.aspx?id=15875) (he maintains a [blog](https://tlovering.wordpress.com/)), and [Cosmin Pohoata](https://pohoatza.wordpress.com/).

>The nations which do consistently well at this competition (IMO) must have at least one (and probably at least two) of the following attributes:
> * A large population.
> * A significant proportion of its population in receipt of a good education.
> * A well-organized training infrastructure to support mathematics competitions.
> * A culture which values intellectual achievement.
>
> Alternatively, you need a cloning facility and a relaxed regulatory framework.

#### Here is an excerpt from his [Advice for young mathematicians](https://people.bath.ac.uk/masgcs/advice.html).

> From time to time I am approached by students interested in advice about becoming more effective contestants in mathematics olympiads. Here it is.

> Do lots and lots, and then more, past papers. Begin with national mathematical olympiads, starting with the less difficult papers. Now, I am not going to risk insulting any countries by saying that their national maths olympiads are easy. Work it out for yourself. Countries which have small populations, and no great tradition of success in maths competitions, will generally have easier questions. When you become very good at those, then move on to hard national maths olympiad problems and the less demanding international competitions.

> I am often approached by students from **developing countries**. Sometimes students complain that *there is no satisfactory educational or training regime in my country*. Please check that this is true! The [IMO contact person](http://www.imo-official.org/countries.aspx) in your country may tell you otherwise. In the worst case, where there is no competent organization providing free (or nearly free) assistance to young mathematicians, then you will have to help yourself. Try to locate other young people in your country who are interested in mathematics, and work together. Fortunately there is a vast collection of free resources on the internet: over 25 thousand past problems from maths competitions are available at the extensive Art of Problem Solving site, and if you explore, you will find discussions of solutions. Don't look up the solutions too quickly (be prepared to spend many hours thinking about each problem). If you want to start on some problems which are less demanding than a full national maths olympiad, here are plenty of [British Maths Olympiad](https://bmos.ukmt.org.uk/home/bmolot.pdf) round 1 problems. The round 2 problems are more challenging.