---
layout: about
title: Homepage
permalink: /
subtitle: <a href='#'>Mathematics Olympiad, Training Programs, Problem Solving Sessions</a>.

profile:
  align: right
  image: MOPSS.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <!--
    <p>Department of Mathematics</p>
    <p>IISER Bhopal</p>
    <p>Madhya Pradesh, India</p>
    -->

news: true # includes a list of news items
selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page
tabs: true
giscus_comments: true
pretty_table: true
---
<!--
Write your biography here. Tell the world about yourself. Link to your favorite [subreddit](http://reddit.com). You can put a picture in, too. The code is already in, just name your picture `prof_pic.jpg` and put it in the `img/` folder.

Put your address / P.O. box / other info right below your picture. You can also disable any of these elements by editing `profile` property of the YAML header of your `_pages/about.md`. Edit `_bibliography/papers.bib` and Jekyll will render your [publications page](/al-folio/publications/) automatically.

Link to your social media connections, too. This theme is set up to use [Font Awesome icons](https://fontawesome.com/) and [Academicons](https://jpswalsh.github.io/academicons/), like the ones below. Add your Facebook, Twitter, LinkedIn, Google Scholar, or just disable all of them.
-->

## Study materials for Math Olympiad

- <span style="color: green"> Available for download.
  - [Algebra]({{ site.url }}{{ site.baseurl }}/Algebra/).
  - [Combinatorics]({{ site.url }}{{ site.baseurl }}/Combinatorics/).
  - [Geometry]({{ site.url }}{{ site.baseurl }}/Geometry/) (to be posted soon).
  - [Number Theory]({{ site.url }}{{ site.baseurl }}/NumberTheory/) (to be posted soon).
  - [IOQM]({{ site.url }}{{ site.baseurl }}/blog/2024/IOQM/).

- <span style="color: green"> Students enrolled in 8th, 9th, 10th, 11th, 12th standard, or anyone interested may use the notes posted at</span> <span style="color: red">the above links. </span>

<!--
<div style="text-align: center;"><p><h3>Topics...</h3></p></div>
<div style="margin-top: -15px; text-align: center;"><p><h3><span id="typing-text"></span></h3></p></div>
-->

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

## International Olympiads

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
        {
          value: '2024',
          tooltip: {
            formatter: '{b} MO'
          },
          symbol: 'diamond',
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

There are several Mathematical Olympiads of International repute, where students participated from India. They include
- [International Mathematical Olympiad](https://www.imo-official.org/) (IMO),
- [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO),
- [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO),
- [Sharygin Geometry Olympiad](https://geometry.ru/olimp/olimpsharygin.php),
- [Iranian Geometry Olympiad](https://igo-official.com/?lang=en) (IGO),
- [Tournament of Towns](https://www.turgor.ru/en/).

---

## Hello! I'm Jyoti Prakash Saha.
<!--
[![Typing SVG](https://readme-typing-svg.demolab.com/?width=600&lines=Hi+there+👋,+I+am+Jyoti+Prakash+Saha+;+Welcome+to+this+page!)](https://git.io/typing-svg)
-->

- 🔭 I’m an Assistant Professor at the [Department of Mathematics](https://maths.iiserb.ac.in/), [IISER Bhopal](https://www.iiserb.ac.in/).
- I am the <span style="color: royalblue">Regional Coordinator of the Mathematics Olympiad program for the Madhya Pradesh region</span>. 
- For regional coordination, I work together with Dr. [Kartick Adhikari](https://sites.google.com/site/kartickmath/), who is the <span style="color: royalblue">Joint Regional Coordinator of the Mathematics Olympiad program for the Madhya Pradesh region</span>. 
- 📫 For any <span style="color: royalblue">queries related to the Mathematics Olympiad</span> program, please feel free to <span style="color: royalblue">write to</span> <a href="mailto:{{ site.email }}?subject=[MOPSS]"> 
      <i class="fas fa-envelope" style="color:gray"></i> {{ site.email }}</a>.

---

## Mathematical Olympiad program in India

The [Homi Bhabha Centre for Science Education](https://olympiads.hbcse.tifr.res.in/) (HBCSE) organizes the [Math Olympiad program](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2023/12/brochure-maths-Olympiad-2023-24.pdf) in India. 
The [Math Olympiad program organized by HBCSE](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2023/12/brochure-maths-Olympiad-2023-24.pdf), is the <span style="color: red"> only one </span> leading to participation in the following <span style="color: green"> International </span> Mathematical Olympiads --- [IMO](https://www.imo-official.org/), [APMO](https://www.apmo-official.org/), [EGMO](https://www.egmo.org/). <span style="color: red">No other contests are recognized. </span>

### [Eligibility](https://olympiads.hbcse.tifr.res.in/how-to-participate/eligibility/mathematical-olympiad/)
- The students enrolled in the 8th, 9th, 10th, 11th or 12th standard may participate in IOQM, provided certain additional conditions are met. The precise details are available at the [webpage](https://olympiads.hbcse.tifr.res.in/) of the Homi Bhabha Centre for Science Education (HBCSE).

#### Some stages of the Math Olympiad program 2024 --- 2025 are

{% tabs stages %}

{% tab stages IOQM %}

##### IOQM (Indian Olympiad Qualifier in Mathematics)
- Scheduled on [8th September, 2024, during 10:00hrs --- 13:00hrs](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).
- The paper consists of 30 question worth 100 marks in total. 
- There are 10 questions worth 2 marks, 10 questions worth 3 marks, 10 questions worth 5 marks. 
- Websites: [MTAI](https://www.mtai.org.in), [HBCSE](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).
- A few problems from IOQM 2023 have been discussed [here]({{ site.url }}{{ site.baseurl }}/blog/2024/IOQM/).

{% endtab %}

{% tab stages RMO %}

##### RMO (Regional Mathematical Olympiad)
- Scheduled on [3rd November, 2024, during 13:00hrs --- 16:00hrs](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).
- The paper consists of 6 questions. 
- It requires writing detailed proofs.
- Websites: [HBCSE](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).

{% endtab %}

{% tab stages INMO %}

##### INMO (Indian National Mathematical Olympiad)
- Scheduled on [19th January, 2025, during 12:00hrs --- 16:30hrs](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).
- The paper consists of 6 questions. 
- It requires writing detailed proofs.
- Websites: [HBCSE](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).

{% endtab %}

{% tab stages IMOTC %}

##### IMOTC (International Mathematical Olympiad Training Camp)
- A month-long training camp, held sometime during from April to May.
- Through the TSTs (Team Selection Tests), it leads to the selection of six students to represent India at [IMO](https://www.imo-official.org/organizers.aspx).
- Websites: [HBCSE](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).

{% endtab %}

{% tab stages PDC %}

##### PDC (Pre-Departure Camp)
- Held before leaving for [IMO](https://www.imo-official.org).
- Websites: [HBCSE](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/).

{% endtab %}

{% endtabs %}

---

> - Please visit [this webpage](https://olympiads.hbcse.tifr.res.in/mathematical-olympiad-2024-2025/) for the updates and further details.
{: .block-tip }

> - For [EGMO](https://www.egmo.org/), the stages are IOQM, RMO, INMO, EGMOTC, EGMOPDC, EGMO (along with certain criteria at the stages).
> - For [APMO](https://www.apmo-official.org/), the stages are IOQM, RMO, INMO, APMO (along with certain criteria at the stages).
{: .block-tip }

> - [INMOTC](https://olympiads.hbcse.tifr.res.in/faq/) is a camp, organized before INMO.
{: .block-tip }

---

| Year | Pre-RMO/IOQM | RMO | INMO |
| :----------- | :------------: | :------------: | :------------: |
| 2023   
| [IOQM 2023](https://www.mtai.org.in/wp-content/uploads/2023/09/IOQM_Sep_2023_Question-paper-with-answer-key.pdf) 
| [RMO 2023 Non-KV and Non-JNV](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2023/10/rmo-combined.pdf) 
| [INMO 2024](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/03/INMO2024-Q.-Paper.pdf)   |
| 2023   
| [IOQM 2023](https://www.mtai.org.in/wp-content/uploads/2023/09/IOQM_Sep_2023_Question-paper-with-answer-key.pdf) 
| [RMO 2023 Non-KV and Non-JNV](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2023/10/rmo-combined.pdf) 
| [INMO 2024](https://olympiads.hbcse.tifr.res.in/wp-content/uploads/2024/03/INMO2024-Q.-Paper.pdf)   |


## [Geoff Smith](https://en.wikipedia.org/wiki/Geoff_Smith_(mathematician))
is a British mathematician. He has been the [leader of the UK IMO team](https://www.imo-official.org/country_team_r.aspx?code=UNK) during 2002--2010, 2013--2018, 2022. He [has been awarded](https://www.imo-register.org.uk/golden-microphone.html) the IMO Golden Microphone thrice (during 2006, 2009, 2014). 

{% details Click here to know more %}

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

{% enddetails %}

---

## Goal of <a href="{{ site.url }}{{ site.baseurl }}/">this website</a> (aka Why another website? What is its use?!)

{% details Click here to know %}
- To provide a brief introduction to Mathematical Olympiad.
- To serve as a website for the [MOPSS]({{ site.url }}{{ site.baseurl }}/MOPSS/) program at IISER Bhopal, to be held in person, from August 2024 to November 2024.
  - We have plans to post notes containing the details of those sessions. 
- To provide handouts on the topics of [Algebra]({{ site.url }}{{ site.baseurl }}/Algebra/), [Combinatorics]({{ site.url }}{{ site.baseurl }}/Combinatorics/), [Geometry]({{ site.url }}{{ site.baseurl }}/Geometry/), and [Number Theory]({{ site.url }}{{ site.baseurl }}/NumberTheory/), and to keep it posted in an organized manner across different sub-topics.
  - These notes may be useful to the students who would like to have a look at some of the past RMO problems before getting started, or just curious about it.
  - These notes may also serve as a reference to anyone who would like to provide guidance to students, but may not have enough time to organize the relevant questions across the topics and sub-topics. 
- To provide assistance to anyone on Mathematics Olympiad.
{% enddetails %}

---

## I am enthusiastic about math/math olympiads and/or teaching math to high schoolers. How may I contribute?

{% details Click here to know %}
- One may reach to schools, to high schoolers.
- One may explain about Olympiads, and spread awareness about it.
- One may encourage people (for instance, students, teachers or anyone enthusiastic/curious about math olympiad) to go through this website (and suggest a careful reading of the homepage!).
- Next, a student interested in math olympiad, may browse through the handouts posted here (this will grow with time).
- A person with passion in teaching high school students could use the handouts as a problem bag, or in other way.
- What else? For instance, if one has interest in a science subject(s) other than (or parallel to) mathematics, then one may refer to the [webpage of HBCSE](https://olympiads.hbcse.tifr.res.in/), which has information about olympiads ([past papers](https://olympiads.hbcse.tifr.res.in/how-to-prepare/past-papers/)) on the following subjects, and may repeat the same process as above adapted to those subjects!
  - Astronomy
  - Biology
  - Chemistry
  - Junior Science
  - Physics
{% enddetails %}

---

## I do not have much time for the above, but I find it interesting. Is there something that I can do?

{% details Click here to know %}
- Yes! You could spread the message, only if you find it worth doing and willing to do so, by 
  - sharing the link [{{ site.url }}{{ site.baseurl }}/]({{ site.url }}{{ site.baseurl }}/),
  - and suggeting to go through the homepage [{{ site.url }}{{ site.baseurl }}/]({{ site.url }}{{ site.baseurl }}/), to find what all this is about!
{% enddetails %}

---