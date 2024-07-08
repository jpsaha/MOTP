---
layout: page
permalink: /TrainingProg/
title: Training Programs
description: OTIS, Sophie Fellowship, Online Math Club, ...
nav: true
nav_order: 4
giscus_comments: true
tabs: true
toc:
  beginning: true
---

## Study materials for Math Olympiad

- <span style="color: green"> Available for download.
  - [Algebra]({{ site.url }}{{ site.baseurl }}/Algebra/).
  - [Combinatorics]({{ site.url }}{{ site.baseurl }}/Combinatorics/).
  - [Geometry]({{ site.url }}{{ site.baseurl }}/Geometry/) (to be posted soon).
  - [Number Theory]({{ site.url }}{{ site.baseurl }}/NumberTheory/) (to be posted soon).
  - [IOQM]({{ site.url }}{{ site.baseurl }}/blog/2024/IOQM/).

- <span style="color: green"> Students enrolled in 8th, 9th, 10th, 11th, 12th standard, or anyone interested may use the notes posted at</span> <span style="color: red">the above links. </span>

<!--
{% tabs studymat %}

{% tab studymat Algebra %}

#### Algebra

- Notes on Algebra are available at [this link]({{ site.url }}{{ site.baseurl }}/Algebra/).

{% endtab %}

{% tab studymat Combinatorics %}

#### Combinatorics

- Notes on Combinatorics are available at [this link]({{ site.url }}{{ site.baseurl }}/Combinatorics/).

{% endtab %}

{% tab studymat Geometry %}

#### Geometry

- Notes on Geometry are available at [this link]({{ site.url }}{{ site.baseurl }}/Geometry/) (to be posted soon).

{% endtab %}

{% tab studymat Number Theory %}

#### Number Theory

- Notes on Number Theory are available at [this link]({{ site.url }}{{ site.baseurl }}/NumberTheory/) (to be posted soon).

{% endtab %}

{% tab studymat IOQM %}

#### IOQM

- A few problems from IOQM 2023 have been discussed [here]({{ site.url }}{{ site.baseurl }}/blog/2024/IOQM/).

{% endtab %}

{% endtabs %}

-->
---

### Participation of India in [IMO](https://www.imo-official.org/), [APMO](https://www.apmo-official.org/), [EGMO](https://www.egmo.org/)

For ease of reference, here is a brief overview of participation of India in [IMO](https://www.imo-official.org/), [APMO](https://www.apmo-official.org/), [EGMO](https://www.egmo.org/) in recent times, which relies on the information available at the following webpages, which are significantly more detailed.

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
  for (var year = 2015; year <= 2023; year++) {
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
        {
          value: '2015',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2016',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2017',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2018',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2019',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2020',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2021',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
        {
          value: '2022',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
          symbolSize: 16
        },
        {
          value: '2023',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'circle',
          symbolSize: 16
        },
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
    }
  ]
};

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>

---

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

---

## Some of the [suggestions](https://web.evanchen.cc/faq-contest.html#C-0) from [Evan Chen](https://web.evanchen.cc/) regarding the preparation of Math Olympiad. 

> * Pick up any standard textbook to work through, so you learn some of the standard theory that is tested in math contests. 
> * Go through some past problems from previous contests. 
> * Rope some friends into learning with you. It’s more fun that way, and you can learn from each other. 
> * You should repeat these steps until you have some comfort with the kinds of problems that appear.
> * As you get experience, you will automatically start to know what deep understanding feels like. 
> * Be aware that you will see many, many problems which you can’t solve, where you read the solution and ask, “how was I supposed to think of that?”. This is okay and expected: it’s not because you’re dumb, it’s because you are learning.

---

## [A few training programs]({{ site.url }}{{ site.baseurl }}/Resources/)

#### The [OTIS program](https://web.evanchen.cc/otis.html)
  * Olympiad Training for Individual Study, run by [Evan Chen](https://web.evanchen.cc/) and [people](https://web.evanchen.cc/otis.html#people), is **a proof-based olympiad training program, with over [300 students](https://web.evanchen.cc/upload/public-CV.pdf) per year from across the world**.
  * [Sunaina Pati](https://www.cmi.ac.in/people/student-profile.php?id=sunaina.ug2023), who [received](https://www.egmo.org/people/person2282/) a Silver medal in [EGMO 2023](https://www.egmo.org/egmos/egmo12/), remarked the following in a post discussing [How to start with Math olympiads](https://www.omath.club/2022/03/how%20to%20start%20with%20math%20olympiads.html).
   > Do join OTIS! It is simply so good. Evan is also very kind with financial aid. Moreover, do not be scared of applying! And if there is some financial burden, do tell to Evan.

##### Some of the <a href="https://web.evanchen.cc/otis.html#staff">alums</a> of the [OTIS program](https://web.evanchen.cc/otis.html) are

{% tabs OTISalum %}

{% tab OTISalum Anant Mudgal %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=25764)  2015 (HM), 2016 (B), 2017 (B), 2018 (S),
- APMO [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S).

{% endtab %}

{% tab OTISalum Pranjal Srivastava %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=28249) 2018 (S), 2019 (G), 2021 (G), 2022 (G),
- APMO [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G),
- IGO 2021 (B).

{% endtab %}

{% tab OTISalum Atul Shatavart Nadig %}

participated in 

- [IMO](https://www.imo-official.org/participant_r.aspx?id=31725) 2022 (B), 2023 (G),
- APMO [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G),
- IGO 2022 (S).

{% endtab %}

{% tab OTISalum Anushka Aggarwal %}

participated in 

- [EGMO](https://www.egmo.org/people/person1429/) 2019 (B), 2020 (B), 2022 (B).

{% endtab %}

{% tab OTISalum Rohan Goyal %}

received a

- Silver medal in IGO 2021.

{% endtab %}

{% tab OTISalum Rushil Mathur %}

- is a [member](https://timesofindia.indiatimes.com/life-style/parenting/moments/rushil-mathur-3-time-math-olympiad-awardee-on-how-to-become-a-maths-genius/articleshow/111488430.cms) of the India IMO team 2024, and 
- is an instructor at [OTIS](https://web.evanchen.cc/otis.html).

{% endtab %}

{% endtabs %}

---
<!--
| Name | IMO | APMO | EGMO | Sharygin Geometry Olympiad | Iranian Geometry Olympiad | Tournament of Towns |
| :---: | :---: | :---: | :---: | :---: | :---: | :---: |
|   `Anant Mudgal`   | [IMO](https://www.imo-official.org/participant_r.aspx?id=25764)  2015 (HM), 2016 (B), 2017 (B), 2018 (S)  | [2016](https://www.apmo-official.org/country_report/IND/2016) (B), [2017](https://www.apmo-official.org/country_report/IND/2017) (S) |
|     |     |     |     |     |     |     |     |
|  `Pranjal Srivastava`   |  [IMO](https://www.imo-official.org/participant_r.aspx?id=28249) 2018 (S), 2019 (G), 2021 (G), 2022 (G)  |   [2018](https://www.apmo-official.org/country_report/IND/2018) (HM), [2019](https://www.apmo-official.org/country_report/IND/2019) (G), [2022](https://www.apmo-official.org/country_report/IND/2022) (G)  |     |
|     |     |     |     |     |     |     |     |
|  `Atul Shatavart Nadig`   | [IMO](https://www.imo-official.org/participant_r.aspx?id=31725) 2022 (B), 2023 (G)   |   [2022](https://www.apmo-official.org/country_report/IND/2022) (S), [2023](https://www.apmo-official.org/country_report/IND/2023) (G)  |     |     |     |     |     |
|     |     |     |     |     |     |     |     |
|   `Anushka Aggarwal`  |     |     |  [EGMO](https://www.egmo.org/people/person1429/) 2019 (B), 2020 (B), 2022 (B)  |     |     |     |     |

---
-->

#### [The Sophie Fellowship](https://www.sophiefellowship.in/home)
  * It is a training program and fellowship for students preparing for IMO, EGMO, INMO and other national and international mathematical competitions.
  * It is a student-run initiative to assist selected high schoolers passionate about mathematics, by offering help from people who have performed well at various mathematical contests such as the IMO, APMO, EGMO, and INMO.
  * The program will be completely free of cost.
  * It is run by a bunch of students who really like math and want to spread it further in the country. They aim to improve the quality of math education in India by making Olympiad math more accessible, as well as improve the gender ratio in the mathematical community.
  * The [team](https://www.sophiefellowship.in/team) consists of many IMO and EGMO medalists, as well as others who have attended the Indian IMO training camp. They have previously participated in Olympiads, we understand the challenges students in the math community face and want to help them. 
  * [Sunaina Pati](https://www.cmi.ac.in/people/student-profile.php?id=sunaina.ug2023), who [received](https://www.egmo.org/people/person2282/) a Silver medal in [EGMO 2023](https://www.egmo.org/egmos/egmo12/), remarked the following in a post discussing [How to start with Math olympiads](https://www.omath.club/2022/03/how%20to%20start%20with%20math%20olympiads.html).
   > Sophie Fellowship is the gem! It provides such a nice community and so many resources!

---

#### [Online Math Club 2.0](https://sites.google.com/view/online-math-club)
* To quote from [this post](https://sunainalovesmath.blogspot.com/2022/05/reflecting-on-past.html) of [Sunaina Pati](https://www.cmi.ac.in/people/student-profile.php?id=sunaina.ug2023), 
> The Online Math Club is an initiative to reach high school students interested in math and give them a platform to learn more and interact with others. The Club aims to increase exposure to olympiad mathematics and advanced mathematics. And OMC is free and open to all!
* The [Online Math Club 2.0](https://sites.google.com/view/online-math-club/home?authuser=0) is a student-run mathematical program that aims to help students from all over India and internationally prepare for mathematical olympiads. The team consists of a group of math enthusiasts who have taken part in these math olympiads in the past, many of whom are also IMO and EGMO medallists and awardees from the Indian National Mathematical Olympiad. The classes run on a Discord server.
  * There are weekly olympiad mathematics sessions on each Saturday and Sunday. Through these classes, a wide range of olympiad mathematical topics are covered that are required for RMO and INMO preparation in each of Combinatorics, Geometry, Number Theory and Algebra, starting from the basics and building up to several advanced topics over the course of the year. [This page](https://sites.google.com/view/online-math-club/overview?authuser=0) contains further details. 

* [Blog](https://www.omath.club/)
* On [YouTube](https://www.youtube.com/@omath)
  * An [interview](https://www.youtube.com/watch?v=OwZ8nx54a20) with the [Indian IMO team 2022](https://www.imo-official.org/team_r.aspx?code=IND&year=2022)
  * An [interview](https://www.youtube.com/watch?v=HSuWLw4l_yY) with the [Indian IMO team 2023](https://www.imo-official.org/team_r.aspx?code=IND&year=2023)

---

#### [The Philomath Club](https://thephillomathclub.weebly.com/)
* It is a math club founded by [Sunaina Pati](https://www.cmi.ac.in/people/student-profile.php?id=sunaina.ug2023), which aims to motivate the elementary and middle school students to do Mathematics but in a fun way. The club wants to spread the awareness towards non-routine mathematics.

---

## Contests, Programs, Camps

* [International Tournament of Young Mathematicians](https://www.itym.org/)
  > A team competition for high school students from all over the world. 
* [Purple Comet! Math Meet!](https://purplecomet.org/)
  > A team mathematics competition designed for middle and high school students conducted annually since 2003. 

* [Maths Beyond Limits](https://mathsbeyondlimits.eu/mbl/)
* [Maths Beyond Limits Balkans](https://mathsbeyondlimits.eu/balkans/)
* [STEMS](https://tessellate.cmi.ac.in/stems/)
  * Test
  > STEMS (Scholastic Test of Excellence in Mathematical Sciences) is an annual first-of-its-kind open resource examination conducted for students from 8th grade to undergraduates across India. The exam will be held in Mathematics, Physics, and (theoretical) Computer Science in December. The relaxed duration of the exam and original conceptual questions promote academic creativity over rote learning and research interest, increasing the interest and awareness of mathematical sciences amongst the students.
  * Camp
  > About 30 of the best scorers across the three disclipines of STEMS will be selected for a 3-day, fully-funded camp at CMI. Past students selected for this camp include various medalists at the IMO, IOI and few of the brightest school and college students across India.
  * [STEMS 2024 Final Camp](https://www.youtube.com/playlist?list=PLNh_spmAPSMFiwJDjfWZVa_NQX6yohx-C)
* [PROMYS India](https://promys-india.org/)
  > A challenging six-week residential mathematics summer programme, PROMYS India is open to mathematically talented secondary and higher secondary students (Standards IX - XII or equivalent). Meticulously selected students from across India will gather on the campus of the Indian Institute of Science (IISc) Bengaluru to immerse themselves in rigorous mathematics.