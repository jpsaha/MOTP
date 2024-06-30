---
layout: page
permalink: /IMO/
title: IMO
description: IMO
nav: false
nav_order: 11
giscus_comments: true
chart:
  echarts: true
---

## [International Mathematical Olympiad](https://www.imo-official.org/) (IMO)
* The International Mathematical Olympiad ([IMO](https://www.imo-official.org/)) is the World Championship Mathematics Competition for High School students. It is held annually in a different country.
* The [IMO Foundation](https://imof.co/) is a charity which supports the IMO. Its [vision](https://imof.co/) is as follows. 
> It is the aim of the IMO to bring young people together from all over the world to enjoy the challenges of mathematics in a spirit of friendly competition. This provides a stimulus for Mathematics in each of the participating countries as young people strive for selection. Whist clearly it is a competitive event, for most participants, it is the people that they meet and the shared joy of discovery that is what they regard as most worthwhile. It is common that lifelong friendships are forged at IMO events.

* The [first IMO](https://www.imo-official.org/year_country_r.aspx?year=1959) was held in Romania in 1959, with seven countries participating.
* It has since been held annually, except in 1980.
* Currently, it has expanded to over [100 countries](https://www.imo-official.org/year_info.aspx?year=2023) across the globe.
* Each country sends a team of up to six students. 
* In the recent past,
  * Japan was the host for [IMO2023](https://imo2023.jp/en/),
  * Norway was the host for [IMO2022](https://www.imo2022.org/),
  * Russian Federation was the host for [IMO2020](https://imo2020.ru/), IMO2021. 
* The forthcoming IMOs have been scheduled.
  * [IMO2024](https://www.imo2024.uk/) will take place in UK during July, 2024.
  * IMO2025 will be [held](https://www.imo-official.org/organizers.aspx) in Australia.
  * IMO2026 will be [held](https://www.imo-official.org/organizers.aspx) in People's Republic of China.
  * IMO2027 will be [held](https://www.imo-official.org/organizers.aspx) in Hungary. 
* IMO is held over two consecutive days with 3 problems each. Each day, the contestants have four-and-a-half hours to solve three problems. Each problem is worth 7 points for a maximum total score of 42 points.
* The problems are arranged so that the order in increasing difficulty is Q1, Q4, Q2, Q5, Q3 and Q6, where the Day 1 problems Q1, Q2, and Q3 are in increasing difficulty, and the Day 2 problems Q4, Q5, and Q6 are in increasing difficulty. 

## [Participation of India in IMO](https://www.imo-official.org/country_info.aspx?code=IND)
* [India](https://www.imo-official.org/country_info.aspx?code=IND) has been participating in IMO since 1989, and has been a host in the year 1996.
* [India](https://www.imo-official.org/country_info.aspx?code=IND) has received 16 Gold medals (G), 73 Silver medals (S), 79 Bronze medals (B), and 28 Honourable mentions (HM).
* India [ranked](https://www.imo-official.org/country_team_r.aspx?code=IND)
  * 7th in 1998 (G, G, G, S, S, S),
  * 7th in 2001 (G, G, S, S, B, B),
  * 9th in 2002 (G, S, S, S, B, B),
  * 11th in 2012 (G, G, S, S, S, HM),
  * 9th in 2023 (G, G, S, S, B, B).
<!-- ~~In 1991 - 1995, 1999 - 2000, 2003 - 2010, 2013 - 2018, there were no Gold medalists.~~ -->
* In each IMO held during 2019 - 2023, at least one participant from India [received](https://www.imo-official.org/country_team_r.aspx?code=IND) a Gold medal.

For ease of reference, one may have a brief overview of participation of India in IMO in recent times below, which relies on the information available at [this webpage](https://www.imo-official.org/country_team_r.aspx?code=IND).

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
    "text": "Participation of India in IMO in the recent years"
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
    bottom: "30px",
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
      data: ['2012', '\n2013', '2014', '\n2015', '2016', '\n2017', '2018', '\n2019', '2021', '\n 2022', '2023']
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

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>

<!--
* Some of the participants of the recent IMOs are
  * [Anant Mudgal](https://www.imo-official.org/participant_r.aspx?id=25764), participated in 2015 (HM), 2016 (B), 2017 (B), 2018 (S), 
  * [Pranjal Srivastava](https://www.imo-official.org/participant_r.aspx?id=28249), participated in 2018 (S), 2019 (G), 2021 (G), 2022 (G). He appears in IMO's [Hall of Fame](https://www.imo-official.org/hall.aspx). [He](https://www.npskrm.com/hall-of-fame-pranjal.html) is the first participant from India to receive three Gold medals in IMO. He also received a bronze medal in [IOI 2021](https://stats.ioinformatics.org/people/7475). 
  * [Atul Nadig](https://www.imo-official.org/participant_r.aspx?id=31725), participated in 2022 (B), 2023 (G), 
  * [Arjun Gupta](https://www.imo-official.org/participant_r.aspx?id=31722), participated in 2022 (B), 2023 (G), 
  * [Ananda Bhaduri](https://www.imo-official.org/participant_r.aspx?id=33405), participated in 2023 (S),
  * [Siddharth Choppara](https://www.imo-official.org/participant_r.aspx?id=33406), participated in 2023 (S),
  * [Adhitya Mangudy](https://www.imo-official.org/participant_r.aspx?id=31724), participated in 2022 (B), 2023 (B).
-->

* Some of the past [contestants](https://www.imo-official.org/country_individual_r.aspx?code=IND) are

  - [Chetan Balwe](https://www.imo-official.org/participant_r.aspx?id=4720), IISER Mohali

  - [Riddhipratim Basu](https://www.imo-official.org/participant_r.aspx?id=8641), ICTS

  - [Ashay Burungale](https://www.imo-official.org/participant_r.aspx?id=9036), University of Texas at Austin

  - [Swarnendu Datta](https://www.imo-official.org/participant_r.aspx?id=6020), IISER Kolkata

  - [Subhash Khot](https://www.imo-official.org/participant_r.aspx?id=920), New York University, received Rolf Nevanlinna Prize 2014, a Fellow of the Royal Society

  - [Abhinav Kumar](https://www.imo-official.org/participant_r.aspx?id=4714), a [mathematician](https://abhinav-kumar.weebly.com) working in industry

  - [Kartik Prasanna](https://www.imo-official.org/participant_r.aspx?id=3192), University of Michigan, Ann Arbor

  - [Abhishek Saha](https://www.imo-official.org/participant_r.aspx?id=5628), Queen Mary University of London
			
  - [Sucharit Sarkar](https://www.imo-official.org/participant_r.aspx?id=6431), University of California at Los Angeles
			
  - [Kannan Soundararajan](https://www.imo-official.org/participant_r.aspx?id=2755), Stanford University
			
  - [Vaibhav Vaish](https://www.imo-official.org/participant_r.aspx?id=5575), IISER Mohali