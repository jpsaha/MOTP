---
layout: page
permalink: /APMO/
title: APMO
description: APMO
nav: false
nav_order: 12
giscus_comments: true
---

## [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO)

* The Asian Pacific Mathematics Olympiad ([APMO](https://www.apmo-official.org/)) is a mathematical competition for countries in the Pacific-Rim Region.
* One of its [aims](https://www.apmo-official.org/) is
> Discovering, encouraging and challenging mathematically gifted high-school students.
* The [first](https://www.apmo-official.org/timeline) APMO was held in 1989, with four countries participating.
* The APMO is held annually.
* In [2023](https://www.apmo-official.org/year_report/2023), 38 countries participated in APMO.
* Some of its [regulations](https://www.apmo-official.org/regulations) are as follows. 
  * The APMO contest consists of one four-hour paper consisting of five questions of varying difficulty and each having a maximum score of 7 points.
  * Country representatives organize the competition locally. Any number of students may sit the exam in each country, but the results of at most 10 per country can be sent for official participation.

## [Participation of India in APMO](https://www.apmo-official.org/country_report/IND/all)

* India has been participating in APMO [since 2015](https://www.apmo-official.org/country_report/IND/all).
* India has received 4 Gold medals (G), 15 Silver medals (S), 36 Bronze medals (B), and 22 Honourable mentions (HM).
* [India](https://www.apmo-official.org/country_report/IND/all) ranked
  * 12th in 2019 (G, S, S, B, B, B, B, HM, HM, HM),
  * 8th in 2020 (G, S, S, B, B, B, B, HM, HM, HM),
  * 6th in 2022 (G, S, S, B, B, B, B, HM, HM, HM),
  * 6th in 2023 (G, S, S, B, B, B, B, HM, HM, HM),
  * 7th in 2024 (G, S, S, B, B, B, B, HM, HM, HM).

<!--
* Some of the past contestants are
  * Anant Mudgal, participated in [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S),
  * Pranjal Srivastava, participated in [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G), 
  * Aditya Khurmi, participated in [2020](https://www.apmo-official.org/country_report/IND/2020) (B),
  * Atul Nadig, participated in [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G),
  * Adhitya Mangudy, participated in [2022](https://www.apmo-official.org/country_report/IND/2022) (B), [2023](https://www.apmo-official.org/country_report/IND/2023) (S),
  * Ananda Bhaduri, participated in [2023](https://www.apmo-official.org/country_report/IND/2023) (B),
  * Siddharth Choppara, participated in [2023](https://www.apmo-official.org/country_report/IND/2023) (B),
  * Arjun Gupta, participated in [2023](https://www.apmo-official.org/country_report/IND/2023) (S).
-->


For ease of reference, one may have a brief overview of participation of India in APMO in recent times below, which relies on the information available at [this webpage](https://www.apmo-official.org/country_report/IND/all), which is significantly more detailed.

<body style="height: 100%; margin: 0">
  <div id="container" style="height: 900%"></div>

  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.5.1/dist/echarts.min.js"></script>

  <script type="text/javascript">
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, null, {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};

    var option;

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
  title: {
    "text": "Participation of India in APMO in the recent years"
  },
  responsive: true,
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  legend: {
    top: "30px",
    data: ['Gold', 'Silver', 'Bronze', 'HM'],
    bottom: "120px"
  },
  toolbox: {
    show: true,
    orient: 'vertical',
    left: 'right',
    top: 'center',
    feature: {
      mark: { show: true },
      dataView: { show: false, readOnly: false },
      magicType: { show: true, type: ['line', 'bar', 'stack'] },
      restore: { show: true },
      saveAsImage: { show: false }
    }
  },
  xAxis: [
    {
      type: 'category',
      axisTick: { show: true },
      data: ['2015', '\n2016', '2017', '\n2018', '2019', '\n2020', '2022', '\n2023', '2024']
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
      data: [0, 0, 0, 0, 1, 1, 1, 1, 1]
    },
    {
      name: 'Silver',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 3, 3, 0, 2, 2, 2, 2, 2]
    },
    {
      name: 'Bronze',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [5, 4, 4, 7, 4, 4, 4, 4, 4]
    },
    {
      name: 'HM',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [3, 1, 3, 3, 3, 3, 3, 3, 3]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
