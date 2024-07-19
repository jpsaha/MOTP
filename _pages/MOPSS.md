---
layout: page
permalink: /MOPSS/
title: MOPSS
description: MOPSS
nav: true
nav_order: 5
tabs: true
giscus_comments: true
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
<!--
## Participation of India in [International Mathematical Olympiads]({{ site.url }}{{ site.baseurl }}/PriorParticipation/)

India has been participating in the
* [International Mathematical Olympiad](https://www.imo-official.org/) (IMO) since [1989](https://www.imo-official.org/country_team_r.aspx?code=IND).
* [Asian Pacific Mathematics Olympiad](https://www.apmo-official.org/) (APMO) since [2015](https://www.apmo-official.org/country_report/IND/all). 
* [European Girls’ Mathematical Olympiad](https://www.egmo.org/) (EGMO) since [2015](https://www.egmo.org/countries/country35/).
-->

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
        name: '     IMO, APMO, EGMO'
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

If you (the reader!) are aware of these Olympiads, and would like to prepare for them, then you may wish to know about [a few training programs]({{ site.url }}{{ site.baseurl }}/TrainingProg/).

---

## [Mathematics Olympiad Problem Solving Sessions]({{ site.url }}{{ site.baseurl }}/MOPSS/) (MOPSS)

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/MOPSS.jpg" title="MOPSS" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

---

Here is [the flyer](../assets/pdf/MOPSS/flyer.pdf).

<iframe src="{{ site.baseurl }}/assets/pdf/MOPSS/flyer.pdf" width="100%" height="500" frameborder="no" border="0" marginwidth="0" marginheight="0"></iframe>

---

  * The Department of Mathematics, IISER Bhopal, would be organizing a series of Mathematics Olympiad Problem Solving Sessions (MOPSS). 
  * The aim is to develop an interest in mathematics among the students by encouraging them to work on problems falling broadly within the scope of the Mathematical Olympiad.
  
  > The plan for MOPSS is spread across the **following 9 dates**. The sessions will be held **during 9:00am to 12:00pm in IISER Bhopal in person classroom meetings**.
  >
  > <i class="fas fa-calendar-alt" style="color:gray"></i> 3rd, 17th, 31st August, 2024.
  >
  > <i class="fas fa-calendar-alt" style="color:gray"></i> 14th, 28th September, 2024.
  >
  > <i class="fas fa-calendar-alt" style="color:gray"></i> 19th October, 2024.
  >
  > <i class="fas fa-calendar-alt" style="color:gray"></i> 2nd, 16th, 30th November, 2024.
  >
  > A student will get the **maximum benefit** out of MOPSS if he/she attends **all the above 9 sessions**. 
{: .block-warning }

  *  Applications to be accepted <span style="color: royalblue"> **until 21st July, 2024**</span> through the [Google form](https://forms.gle/B9wQteEtGXvCj3AH9) posted at [this link](https://forms.gle/B9wQteEtGXvCj3AH9). 
  * In the Google form, the link to [this problem set]({{ site.url }}{{ site.baseurl }}/assets/pdf/MOPSS/PS0B24Aug.pdf) has been provided. While filling in the form, the solutions to these problems (or the details of the progress made) are to be submitted.
  * The students, selected for participation in the session, will be informed by <span style="color: royalblue"> **the end of July, 2024**</span>.

  * Please refer to [the flyer](../assets/pdf/MOPSS/flyer.pdf) for further information.
  * For more information, you may write to
    * Jyoti Prakash Saha (<a href="mailto:jpsaha@iiserb.ac.in?subject=[MOPSS]">
      <i class="fas fa-envelope" style="color:gray"></i> {{ site.email }}</a>),
    * Kartick Adhikari (<a href="mailto:kartick@iiserb.ac.in?subject=[MOPSS]">
      <i class="fas fa-envelope" style="color:gray"></i> kartick@iiserb.ac.in</a>),
    * Manas Kar (<a href="mailto:manas@iiserb.ac.in?subject=[MOPSS]">
      <i class="fas fa-envelope" style="color:gray"></i> manas@iiserb.ac.in</a>).

## Why math olympiads are a valuable experience for high schoolers

{% details Click here to know more %}
* The post by Evan Chen on [Lessons from math olympiads](https://blog.evanchen.cc/2018/01/05/lessons-from-math-olympiads/) is worth reading.
* In a previous post, titled [Against the “Research vs. Olympiads” Mantra](https://blog.evanchen.cc/2016/08/13/against-the-research-vs-olympiads-mantra/), Evan Chen discussed why math olympiads should not be judged by their relevance to research mathematics. He mentions that in that post, he failed to actually explain why he thinks math olympiads are a valuable experience for high schoolers. In the post [Lessons from math olympiads](https://blog.evanchen.cc/2018/01/05/lessons-from-math-olympiads/), he puts the amends. 
* and the last, but not the least, could be to take a look at the following [vision](https://imof.co/) of the [IMO Foundation](https://imof.co/), which is a charity supporting the International Mathematical Olympiad ([IMO](https://www.imo-official.org/)). 
> It is the aim of the IMO to bring young people together from all over the world to enjoy the challenges of mathematics in a spirit of friendly competition. This provides a stimulus for Mathematics in each of the participating countries as young people strive for selection. Whist clearly it is a competitive event, for most participants, it is the people that they meet and the shared joy of discovery that is what they regard as most worthwhile. It is common that lifelong friendships are forged at IMO events.
{% enddetails %}

---

## Admission to the Chennai Mathematical Institute (CMI)

To quote from the webpage of CMI regarding [admissions](https://www.cmi.ac.in/admissions/) (please refer to this page and any other relevant page for the precise and updated details),

> Students with exceptionally good performance in the National Olympiads in Mathematics and Physics conducted by [HBSCE](https://olympiads.hbcse.tifr.res.in/) and the Indian Computing Olympiad conducted by [IARCS](https://www.iarcs.org.in/inoi/) are exempted from writing the BSc entrance examination.
> Typically, the following categories of students qualify for direct admission:
> - Students who have qualified for the International Mathematical Olympiad Training Camp (IMOTC) or European Girls Mathematical Olympiad Training Camp (EGMOTC) in Class 11 or Class 12.
> - Students who have qualified for the Orientation Cum Selection Camp (OCSC) in Physics in Class 11 or Class 12.
> - Students who have qualified for the International Olympiad in Informatics Training Camp (IOITC), or have received a gold or silver medal at the Indian National Olympiad in Informatics (INOI) in Class 11 or Class 12.
{: .block-tip }

## Admission to the Indian Statistical Institute (ISI)

To quote from the [Prospectus 2024--25](https://www.isical.ac.in/~admission/Documents/IsiAdmission2024/ISI-Prospectus-2024.pdf) of ISI (please refer to this page and any other relevant page for the precise and updated details), 

**The following applies to admissions in a particular academic year.**

> There is a separate provision for applicants of B.Stat.--B.Math. programmes who have been selected as INMO AWARDEES to participate in the International Mathematics Olympiad Training Camp (IMOTC) in the years 2023 and 2024 based on their performance in the Indian National Mathematics Olympiad (INMO), conducted by the National Board of Higher Mathematics, Department of Atomic Energy, Government of India. The number of seats for INMO AWARDEES is supernumerary, subject to a maximum of 5 seats. There will be no Written Test, and the selection to these supernumerary seats will be based on interview.
{: .block-tip }

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