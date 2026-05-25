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
        },{id: "nav-pyqs",
          title: "PYQs",
          description: "Previous Years&#39; Question Papers of Pre-RMO, IOQM, RMO, INMO, EGMOTC, IMOTC. Problem set, Solutions, Questions, Answers, Hints, Walkthroughs, Discussions, Solutions in pdf.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/MOTP/PastPapers/";
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
