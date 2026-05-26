// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/MOTP/";
    },
  },{id: "nav-algebra",
          title: "Algebra",
          description: "Algebra notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Resources, Notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/alg/";
          },
        },{id: "nav-combinatorics",
          title: "Combinatorics",
          description: "Combinatorics notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Resources, Notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/comb/";
          },
        },{id: "nav-geometry",
          title: "Geometry",
          description: "Geometry notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Resources, Notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/geo/";
          },
        },{id: "nav-number-theory",
          title: "Number Theory",
          description: "Number Theory notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Resources, Notes.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/nt/";
          },
        },{id: "nav-ioqm",
          title: "IOQM",
          description: "Indian Olympiad Qualifier in Mathematics. Links to Past Question Papers, Previous Years’ Question papers of IOQM, Answer keys. Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/ioqm/";
          },
        },{id: "nav-rmo",
          title: "RMO",
          description: "Regional Mathematical Olympiad. Links to Past Question Papers, Previous Years’ Question papers of RMO, Solutions. Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/rmo/";
          },
        },{id: "nav-inmotc",
          title: "INMOTC",
          description: "INMO Training Camp, Madhya Pradesh region. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/inmotc/";
          },
        },{id: "nav-inmo",
          title: "INMO",
          description: "Indian National Mathematical Olympiad. Links to Past Question Papers, Previous Years’ Question papers of INMO, Solutions. Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/inmo/";
          },
        },{id: "nav-imotc",
          title: "IMOTC",
          description: "IMOTC, held at the Chennai Mathematical Institute. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/imotc/";
          },
        },{id: "nav-smmc",
          title: "SMMC",
          description: "SMMC Training Camp. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/smmc/";
          },
        },{id: "nav-mopss",
          title: "MOPSS",
          description: "Mathematics Olympiad Problem Solving Sessions",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/mopss/";
          },
        },{id: "nav-pyqs",
          title: "PYQs",
          description: "Previous Years&#39; Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/pastpapers/";
          },
        },{id: "dropdown-prior-participations",
              title: "Prior Participations",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/priorparticipation/";
              },
            },{id: "dropdown-imo",
              title: "IMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/imo/";
              },
            },{id: "dropdown-apmo",
              title: "APMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/apmo/";
              },
            },{id: "dropdown-egmo",
              title: "EGMO",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/egmo/";
              },
            },{id: "dropdown-further-olympiads",
              title: "Further Olympiads",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/moreolympiads/";
              },
            },{id: "dropdown-resources",
              title: "Resources",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/resources/";
              },
            },{id: "dropdown-training",
              title: "Training",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/trainingprog/";
              },
            },{id: "dropdown-glimpse-of-a-few-problems",
              title: "Glimpse of a few problems",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/glimpseofafewproblems/";
              },
            },{id: "dropdown-slides",
              title: "Slides",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/slides/";
              },
            },{id: "dropdown-eligibility",
              title: "Eligibility",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/MOTP/eligibility/";
              },
            },{id: "post-inmotc-2025-mp-region-algebra",
        
          title: "INMOTC 2025 (MP region), Algebra",
        
        description: "INMOTC 2025 (MP region), Algebra",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2025/inmotc25mpalg/";
          
        },
      },{id: "post-past-question-papers-of-pre-rmo-ioqm-rmo-inmo-egmotc-imotc",
        
          title: "Past Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        
        description: "Previous Years&#39; Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/PastPapers/";
          
        },
      },{id: "post-past-question-papers-of-pre-rmo-ioqm-rmo-inmo-egmotc-imotc",
        
          title: "Past Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        
        description: "Previous Years&#39; Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/pastpapers/";
          
        },
      },{id: "post-problem-set-for-mopss",
        
          title: "Problem set for MOPSS",
        
        description: "Link to the problem set for MOPSS",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/ps0b24aug/";
          
        },
      },{id: "post-outreach-program-iiser-bhopal-08-may-2024",
        
          title: "Outreach program, IISER Bhopal, 08 May, 2024",
        
        description: "Outreach program, IISER Bhopal, 08 May, 2024",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/outreach-iiserb-24may/";
          
        },
      },{id: "post-rmo-question-papers-solutions-discussions",
        
          title: "RMO Question papers, Solutions, Discussions",
        
        description: "Regional Mathematical Olympiad. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/rmo/";
          
        },
      },{id: "post-ioqm-question-papers-solutions-discussions",
        
          title: "IOQM Question papers, Solutions, Discussions",
        
        description: "Indian Olympiad Qualifier in Mathematics. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/ioqm/";
          
        },
      },{id: "post-inmo-question-papers-solutions-discussions",
        
          title: "INMO Question papers, Solutions, Discussions",
        
        description: "Indian National Mathematical Olympiad. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/inmo/";
          
        },
      },{id: "post-notes-on-rmo",
        
          title: "Notes on RMO",
        
        description: "Regional Mathematical Olympiad. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/notesrmo/";
          
        },
      },{id: "post-notes-on-ioqm",
        
          title: "Notes on IOQM",
        
        description: "Indian Olympiad Qualifier in Mathematics. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/notesioqm/";
          
        },
      },{id: "post-notes-on-inmo",
        
          title: "Notes on INMO",
        
        description: "Indian National Mathematical Olympiad. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/notesinmo/";
          
        },
      },{id: "post-mathematics-olympiad-handouts",
        
          title: "Mathematics Olympiad Handouts",
        
        description: "Mathematics Olympiad handouts. IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/mohandout/";
          
        },
      },{id: "post-lecture-notes-on-mathematical-olympiad",
        
          title: "Lecture notes on Mathematical Olympiad",
        
        description: "Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/MOTP/blog/2024/lnmo/";
          
        },
      },{id: "alg-a-3-b-3-c-3-3abc",
          title: '$$ a^3+b^3+c^3 - 3abc $$',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/a3b3c3-3abc/";
            },},{id: "alg-arithmetic-progressions",
          title: 'Arithmetic progressions',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/ap/";
            },},{id: "alg-binomial-theorem",
          title: 'Binomial theorem',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/binomial/";
            },},{id: "alg-complex-numbers",
          title: 'Complex numbers',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/complex/";
            },},{id: "alg-cubic-polynomials",
          title: 'Cubic polynomials',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/cubic/";
            },},{id: "alg-differentiation-and-multiple-roots",
          title: 'Differentiation and multiple roots',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/diffmultroot/";
            },},{id: "alg-finite-differences",
          title: 'Finite differences',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/finitediff/";
            },},{id: "alg-functional-equations",
          title: 'Functional equations',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/funceq/";
            },},{id: "alg-functions",
          title: 'Functions',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/functions/";
            },},{id: "alg-gauss-39-s-lemma",
          title: 'Gauss&amp;#39;s lemma',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/gauss/";
            },},{id: "alg-crossing-the-x-axis",
          title: 'Crossing the $$ x $$-axis',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/imvt/";
            },},{id: "alg-inequalities",
          title: 'Inequalities',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/ineq/";
            },},{id: "alg-integer-divisibility",
          title: 'Integer divisibility',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/intdiv/";
            },},{id: "alg-invariance-principle",
          title: 'Invariance principle',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/invariance/";
            },},{id: "alg-irreducibility",
          title: 'Irreducibility',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/irred/";
            },},{id: "alg-lagrange-interpolation",
          title: 'Lagrange interpolation',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/lagrangeint/";
            },},{id: "alg-growth-of-polynomials",
          title: 'Growth of Polynomials',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/polygrowth/";
            },},{id: "alg-polynomials",
          title: 'Polynomials',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/polynomials/";
            },},{id: "alg-quadratic-polynomials",
          title: 'Quadratic polynomials',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/quadratic/";
            },},{id: "alg-quartics",
          title: 'Quartics',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/quartic/";
            },},{id: "alg-rational-and-irrational-numbers",
          title: 'Rational and irrational numbers',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/rationals/";
            },},{id: "alg-size-of-the-roots",
          title: 'Size of the roots',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/rootsize/";
            },},{id: "alg-roots-of-unity",
          title: 'Roots of unity',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/rootsunity/";
            },},{id: "alg-system-of-equations",
          title: 'System of equations',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/syseqn/";
            },},{id: "alg-telescoping",
          title: 'Telescoping',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/tele/";
            },},{id: "alg-viete-39-s-relations",
          title: 'Viete&amp;#39;s relations',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/viete/";
            },},{id: "alg-warm-up",
          title: 'Warm up',
          description: "",
          section: "Alg",handler: () => {
              window.location.href = "/MOTP/alg/warmup/";
            },},{id: "comb-arrange-in-order",
          title: 'Arrange in order',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/arrangeinorder/";
            },},{id: "comb-auxiliary-configuration",
          title: 'Auxiliary configuration',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/auxconfig/";
            },},{id: "comb-coloring-proofs",
          title: 'Coloring proofs',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/coloringproofs/";
            },},{id: "comb-counting",
          title: 'Counting',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/count/";
            },},{id: "comb-counting-via-bijections",
          title: 'Counting via bijections',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/countbijec/";
            },},{id: "comb-counting-the-complement",
          title: 'Counting the complement',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/countcomple/";
            },},{id: "comb-counting-in-two-different-ways",
          title: 'Counting in two different ways',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/counttwodiff/";
            },},{id: "comb-extremal-principle",
          title: 'Extremal principle',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/extremal/";
            },},{id: "comb-games",
          title: 'Games',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/games/";
            },},{id: "comb-generating-functions",
          title: 'Generating functions',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/genfun/";
            },},{id: "comb-grouping-in-pairs",
          title: 'Grouping in pairs',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/grppairs/";
            },},{id: "comb-inclusion-exclusion-principle",
          title: 'Inclusion-exclusion principle',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/incluexclu/";
            },},{id: "comb-induction",
          title: 'Induction',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/induction/";
            },},{id: "comb-invariance-principle",
          title: 'Invariance principle',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/invariance/";
            },},{id: "comb-optimization-problems",
          title: 'Optimization problems',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/opti/";
            },},{id: "comb-pigeonhole-principle",
          title: 'Pigeonhole principle',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/pigeon/";
            },},{id: "comb-warm-up",
          title: 'Warm up',
          description: "",
          section: "Comb",handler: () => {
              window.location.href = "/MOTP/comb/warmup/";
            },},{id: "geo-parallelograms",
          title: 'Parallelograms',
          description: "",
          section: "Geo",handler: () => {
              window.location.href = "/MOTP/geo/parallelograms/";
            },},{id: "geo-polygons",
          title: 'Polygons',
          description: "",
          section: "Geo",handler: () => {
              window.location.href = "/MOTP/geo/polygons/";
            },},{id: "geo-pythagoras-39-theorem",
          title: 'Pythagoras&amp;#39; theorem',
          description: "",
          section: "Geo",handler: () => {
              window.location.href = "/MOTP/geo/pythagoras/";
            },},{id: "imotc-imotc-2025",
          title: 'IMOTC 2025',
          description: "International Mathematical Olympiad Training Camp 2025. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Imotc",handler: () => {
              window.location.href = "/MOTP/imotc/2025/";
            },},{id: "imotc-imotc-2026",
          title: 'IMOTC 2026',
          description: "International Mathematical Olympiad Training Camp 2026. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Imotc",handler: () => {
              window.location.href = "/MOTP/imotc/2026/";
            },},{id: "inmo-inmo-2025-questions-solutions-discussions",
          title: 'INMO 2025 Questions, Solutions, Discussions',
          description: "",
          section: "Inmo",handler: () => {
              window.location.href = "/MOTP/inmo/2025/";
            },},{id: "inmo-inmo-2026-questions-solutions-discussions",
          title: 'INMO 2026 Questions, Solutions, Discussions',
          description: "",
          section: "Inmo",handler: () => {
              window.location.href = "/MOTP/inmo/2026/";
            },},{id: "inmotc-inmotc-2025",
          title: 'INMOTC 2025',
          description: "Indian National Mathematical Olympiad (INMO) Training Camp 2025, Madhya Pradesh region. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Inmotc",handler: () => {
              window.location.href = "/MOTP/inmotc/2025mp/";
            },},{id: "inmotc-inmotc-2026",
          title: 'INMOTC 2026',
          description: "Indian National Mathematical Olympiad (INMO) Training Camp 2026, Madhya Pradesh region. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions.",
          section: "Inmotc",handler: () => {
              window.location.href = "/MOTP/inmotc/2026mp/";
            },},{id: "ioqm-ioqm-2023-questions-solutions-discussions",
          title: 'IOQM 2023 Questions, Solutions, Discussions',
          description: "",
          section: "Ioqm",handler: () => {
              window.location.href = "/MOTP/ioqm/2023/";
            },},{id: "mopss-mopss-9th-august-2025",
          title: 'MOPSS, 9th August 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 9th August 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25aug09/";
            },},{id: "mopss-mopss-23rd-august-2025",
          title: 'MOPSS, 23rd August 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 23rd August 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25aug23/";
            },},{id: "mopss-mopss-13th-december-2025",
          title: 'MOPSS, 13th December 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 13th December 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25dec13/";
            },},{id: "mopss-mopss-5th-july-2025",
          title: 'MOPSS, 5th July 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 5th July 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25jul05/";
            },},{id: "mopss-mopss-8th-november-2025",
          title: 'MOPSS, 8th November 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 8th November 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25nov08/";
            },},{id: "mopss-mopss-22nd-november-2025",
          title: 'MOPSS, 22nd November 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 22nd November 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25nov22/";
            },},{id: "mopss-mopss-29th-november-2025",
          title: 'MOPSS, 29th November 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 29th November 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25nov29/";
            },},{id: "mopss-mopss-11th-october-2025",
          title: 'MOPSS, 11th October 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 11th October 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25oct11/";
            },},{id: "mopss-mopss-18th-october-2025",
          title: 'MOPSS, 18th October 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 18th October 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25oct18/";
            },},{id: "mopss-mopss-25th-october-2025",
          title: 'MOPSS, 25th October 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 25th October 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25oct25/";
            },},{id: "mopss-mopss-27th-september-2025",
          title: 'MOPSS, 27th September 2025',
          description: "MOPSS Problems, Walkthroughs, Solutions from 27th September 2025. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/25sep27/";
            },},{id: "mopss-mopss-4th-april-2026",
          title: 'MOPSS, 4th April, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 4th April 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26apr04/";
            },},{id: "mopss-mopss-14th-february-2026",
          title: 'MOPSS, 14th February, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 14th February 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26feb14/";
            },},{id: "mopss-mopss-21st-february-2026",
          title: 'MOPSS, 21st February, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 21st February 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26feb21/";
            },},{id: "mopss-mopss-31st-january-2026",
          title: 'MOPSS, 31st January, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 31st January 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26jan31/";
            },},{id: "mopss-mopss-7th-march-2026",
          title: 'MOPSS, 7th March, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 7th March 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26mar07/";
            },},{id: "mopss-mopss-14th-march-2026",
          title: 'MOPSS, 14th March, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 14th March 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26mar14/";
            },},{id: "mopss-mopss-21st-march-2026",
          title: 'MOPSS, 21st March, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 21st March 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26mar21/";
            },},{id: "mopss-mopss-28th-march-2026",
          title: 'MOPSS, 28th March, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 28th March 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26mar28/";
            },},{id: "mopss-mopss-2nd-may-2026",
          title: 'MOPSS, 2nd May, 2026',
          description: "MOPSS Problems, Walkthroughs, Solutions from 2nd May 2026. Notes for Mathematics Olympiad, IOQM, RMO, INMO. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Mopss",handler: () => {
              window.location.href = "/MOTP/mopss/26may02/";
            },},{id: "nt-binomial-coefficients",
          title: 'Binomial coefficients',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/binco/";
            },},{id: "nt-primes-divisors-and-congruences",
          title: 'Primes, divisors, and congruences',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/cong/";
            },},{id: "nt-chinese-remainder-theorem",
          title: 'Chinese remainder theorem',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/crt/";
            },},{id: "nt-cubic-polynomials",
          title: 'Cubic polynomials',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/cubic/";
            },},{id: "nt-using-identities",
          title: 'Using identities',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/iden/";
            },},{id: "nt-induction",
          title: 'Induction',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/indnt/";
            },},{id: "nt-infinite-descent",
          title: 'Infinite descent',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/infdes/";
            },},{id: "nt-lifting-the-exponent",
          title: 'Lifting the exponent',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/lte/";
            },},{id: "nt-orders",
          title: 'Orders',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/orders/";
            },},{id: "nt-quadratic-polynomials",
          title: 'Quadratic polynomials',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/quad/";
            },},{id: "nt-quadratic-reciprocity",
          title: 'Quadratic reciprocity',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/quadreci/";
            },},{id: "nt-system-of-equations",
          title: 'System of equations',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/syseqnnt/";
            },},{id: "nt-warm-up",
          title: 'Warm up',
          description: "",
          section: "Nt",handler: () => {
              window.location.href = "/MOTP/nt/warmup/";
            },},{id: "rmo-rmo-1990-questions-solutions-discussions",
          title: 'RMO 1990 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1990/";
            },},{id: "rmo-rmo-1991-questions-solutions-discussions",
          title: 'RMO 1991 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1991/";
            },},{id: "rmo-rmo-1992-questions-solutions-discussions",
          title: 'RMO 1992 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1992/";
            },},{id: "rmo-rmo-1993-questions-solutions-discussions",
          title: 'RMO 1993 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1993/";
            },},{id: "rmo-rmo-1994-questions-solutions-discussions",
          title: 'RMO 1994 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1994/";
            },},{id: "rmo-rmo-1995-questions-solutions-discussions",
          title: 'RMO 1995 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1995/";
            },},{id: "rmo-rmo-1996-questions-solutions-discussions",
          title: 'RMO 1996 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1996/";
            },},{id: "rmo-rmo-1997-questions-solutions-discussions",
          title: 'RMO 1997 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1997/";
            },},{id: "rmo-rmo-1998-questions-solutions-discussions",
          title: 'RMO 1998 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1998/";
            },},{id: "rmo-rmo-1999-questions-solutions-discussions",
          title: 'RMO 1999 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/1999/";
            },},{id: "rmo-rmo-2000-questions-solutions-discussions",
          title: 'RMO 2000 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2000/";
            },},{id: "rmo-rmo-2001-questions-solutions-discussions",
          title: 'RMO 2001 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2001/";
            },},{id: "rmo-rmo-2002-questions-solutions-discussions",
          title: 'RMO 2002 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2002/";
            },},{id: "rmo-rmo-2003-questions-solutions-discussions",
          title: 'RMO 2003 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2003/";
            },},{id: "rmo-rmo-2004-questions-solutions-discussions",
          title: 'RMO 2004 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2004/";
            },},{id: "rmo-rmo-2005-questions-solutions-discussions",
          title: 'RMO 2005 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2005/";
            },},{id: "rmo-rmo-2006-questions-solutions-discussions",
          title: 'RMO 2006 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2006/";
            },},{id: "rmo-rmo-2007-questions-solutions-discussions",
          title: 'RMO 2007 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2007/";
            },},{id: "rmo-rmo-2008-questions-solutions-discussions",
          title: 'RMO 2008 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2008/";
            },},{id: "rmo-rmo-2009-questions-solutions-discussions",
          title: 'RMO 2009 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2009/";
            },},{id: "rmo-rmo-2010-questions-solutions-discussions",
          title: 'RMO 2010 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2010/";
            },},{id: "rmo-rmo-2011-questions-solutions-discussions",
          title: 'RMO 2011 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2011/";
            },},{id: "rmo-rmo-2012-questions-solutions-discussions",
          title: 'RMO 2012 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2012/";
            },},{id: "rmo-rmo-2013-questions-solutions-discussions",
          title: 'RMO 2013 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2013/";
            },},{id: "rmo-rmo-2014-questions-solutions-discussions",
          title: 'RMO 2014 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2014/";
            },},{id: "rmo-rmo-2015-questions-solutions-discussions",
          title: 'RMO 2015 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2015/";
            },},{id: "rmo-rmo-2016-questions-solutions-discussions",
          title: 'RMO 2016 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2016/";
            },},{id: "rmo-rmo-2017-questions-solutions-discussions",
          title: 'RMO 2017 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2017/";
            },},{id: "rmo-rmo-2018-questions-solutions-discussions",
          title: 'RMO 2018 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2018/";
            },},{id: "rmo-rmo-2019-questions-solutions-discussions",
          title: 'RMO 2019 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2019/";
            },},{id: "rmo-rmo-2023-questions-solutions-discussions",
          title: 'RMO 2023 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2023/";
            },},{id: "rmo-rmo-2024-questions-solutions-discussions",
          title: 'RMO 2024 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2024/";
            },},{id: "rmo-rmo-2025-questions-solutions-discussions",
          title: 'RMO 2025 Questions, Solutions, Discussions',
          description: "",
          section: "Rmo",handler: () => {
              window.location.href = "/MOTP/rmo/2025/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6A%70%73%61%68%61@%69%69%73%65%72%62.%61%63.%69%6E", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/MOTP/feed.xml", "_blank");
        },
      },];
