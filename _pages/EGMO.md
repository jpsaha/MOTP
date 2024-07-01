---
layout: page
permalink: /EGMO/
title: EGMO
description: EGMO
nav: false
nav_order: 13
giscus_comments: true
---

## [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO)
* The European Girls’ Mathematical Olympiad ([EGMO](https://www.egmo.org/))
> is the premier European mathematics competition, made exclusively for high school female students who enjoy mathematics beyond the regular school curriculum. Started by the United Kingdom in April 2012, EGMO has grown since then and now includes over fifty countries, welcoming participants from beyond Europe.
* [EGMO](https://www.egmo.org/)
> aims to inspire girls to take part in national and international mathematics competitions, providing more opportunities for mathematical development. It serves as a platform to amplify the presence of young female mathematicians on the global stage with the possibility to find associates and make remarkable connections while fostering cultural exchange among teenagers worldwide. It encourages young females to become scientists and boosts the number of girls in IMO teams.
* The [first](https://www.egmo.org/egmos/) EGMO was held in 2012, with [19](https://www.egmo.org/egmos/egmo1/) countries participating.
* The EGMO is held annually.
* In [2024](https://www.egmo.org/egmos/egmo13/), 54 countries participated in EGMO.
* Participation in the EGMO is by invitation only. Each invited country sends a team consisting of up to four contestants. 
* In the recent past,
  * Georgia was the host for [EGMO2024](https://www.egmo.org/egmos/egmo13/),
  * Slovenia was the host for [EGMO2023](https://www.egmo.org/egmos/egmo12/),
  * Hungary was the host for [EGMO2022](https://www.egmo.org/egmos/egmo11/).
* The forthcoming EGMOs have been scheduled.
  * [EGMO2025](https://www.egmo.org/egmos/egmo14/) will take place in Kosovo.
  * [EGMO2026](https://www.egmo.org/egmos/egmo14/) will take place in France.
* [EGMO](https://www.egmo.org/) is held over two days. Since 2013, 
  * each of the two contest papers consists of three problems,
  * each day, the contest lasts for four-and-a-half hours,
  * each problem is worth 7 points for a maximum total score of 42 points.  
  
## [Participation of India in EGMO](https://www.egmo.org/countries/country35/)
* India has been participating in EGMO since [2015](https://www.egmo.org/countries/country35/).
* India has received 6 Silver medals (S), 15 Bronze medals (B), and 4 Honourable mentions (HM).

<!--
* Some of the past contestants are
  * [Anushka Aggarwal](https://www.egmo.org/people/person1429/), participated in 2019 (B), 2020 (B), 2022 (B),
  * [Ananya Rajas Ranade](https://www.egmo.org/people/person1866/), participated in 2021 (S), 2022 (B),
  * [Gunjan Aggarwal](https://www.egmo.org/people/person1867/), participated in 2022 (B), 2023 (S), 2024 (S),
  * [Sanjana Philo Chacko](https://www.egmo.org/people/person2283/), participated in 2023 (B), 2024 (S),
  * [Sunaina Pati](https://www.egmo.org/people/person2282/), participated in 2023 (S).
-->

For ease of reference, one may have a brief overview of participation of India in EGMO in recent times below, which relies on the information available at [this webpage](https://www.egmo.org/countries/country35/), which is significantly more detailed.

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
    "text": "Participation of India in EGMO in the recent years"
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
      data: ['2015', '\n2016', '2017', '\n2018', '2019', '\n2020', '2021', '\n2022', '2023', '\n 2024']
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
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    },
    {
      name: 'Silver',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 0, 0, 1, 0, 1, 0, 2, 2]
    },
    {
      name: 'Bronze',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [1, 1, 1, 2, 2, 1, 0, 4, 1, 2]
    },
    {
      name: 'HM',
      type: 'bar',
      label: labelOption,
      emphasis: {
        focus: 'series'
      },
      data: [0, 0, 1, 0, 0, 1, 1, 0, 1, 0]
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
