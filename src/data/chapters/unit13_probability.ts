import { Chapter } from '../../types/math';

export const unit13Probability: Chapter = {
  id: 13,
  number: 13,
  title: "Probability",
  page: 203,
  iconName: "Dices",
  summary: "Foundations of probability: sample space S, event E, theoretical probability P(E) = n(E)/n(S), experimental probability from empirical trials, equally likely outcomes, mutually exclusive events, independent combined events, and everyday decision simulations.",
  keyFormulas: [
    { name: "Theoretical Probability", formula: "P(E) = \\frac{n(E)}{n(S)} = \\frac{\\text{Number of favourable outcomes}}{\\text{Total number of possible outcomes}}" },
    { name: "Probability Bounds", formula: "0 \\le P(E) \\le 1 \\quad (P(\\emptyset) = 0, \\; P(S) = 1)" },
    { name: "Mutually Exclusive Events", formula: "P(A \\cap B) = 0 \\implies P(A \\cup B) = P(A) + P(B)" },
    { name: "Independent Combined Events", formula: "P(A \\cap B) = P(A) \\times P(B)" },
    { name: "Experimental Probability", formula: "P(A) = \\frac{\\text{Number of times event occurs}}{\\text{Total number of trials}}" }
  ],
  exercises: [
    {
      id: "ex-13-1",
      number: "13.1",
      title: "Exercise 13.1",
      page: 210,
      description: "Probability experiments with socks, dice, spinners, sports, and coin tossing empirical frequencies.",
      questions: [
        {
          id: "ex-13-1-q1",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 1",
          topic: "Socks Selection Probability",
          statement: "If you have a collection of $6$ pairs of white socks and $3$ pairs of black socks. What is the probability that a pair you pick without looking is:\n(a) white\n(b) black",
          given: "White pairs $= 6$\nBlack pairs $= 3$\nTotal pairs $n(S) = 6 + 3 = 9$",
          formula: "$$P(E) = \\frac{n(E)}{n(S)}$$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Picking a white pair",
              working: [
                "$$n(W) = 6, \\quad n(S) = 9$$",
                "$$P(W) = \\frac{6}{9} = \\frac{2}{3} \\approx 0.67$$"
              ],
              finalAnswer: "$P(\\text{white}) = \\frac{2}{3}$"
            },
            {
              label: "(b)",
              statement: "Picking a black pair",
              working: [
                "$$n(B) = 3, \\quad n(S) = 9$$",
                "$$P(B) = \\frac{3}{9} = \\frac{1}{3} \\approx 0.33$$"
              ],
              finalAnswer: "$P(\\text{black}) = \\frac{1}{3}$"
            }
          ],
          finalAnswer: "(a) P(white) = 2/3 | (b) P(black) = 1/3",
          officialAnswer: "a) P(white) = 2/3, b) P(black) = 1/3"
        },
        {
          id: "ex-13-1-q2",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 2",
          topic: "Rolling Two Dice",
          statement: "Two dice are rolled simultaneously. Find the probability of getting $3$ and $4$ both (or individual probabilities for each die)?",
          formula: "$$n(S) = 6 \\times 6 = 36, \\quad P(\\text{each face}) = \\frac{1}{6}$$",
          workingSteps: [
            "For each fair standard 6-sided die:",
            "$$P(3) = \\frac{1}{6}, \\quad P(4) = \\frac{1}{6}$$",
            "If rolling two dice and obtaining both numbers 3 and 4 together:",
            "Favourable pairs: $\\{(3, 4), (4, 3)\\} \\implies n(E) = 2$",
            "$$P(\\{3, 4\\}) = \\frac{2}{36} = \\frac{1}{18}$$"
          ],
          finalAnswer: "Individual: P(3) = 1/6, P(4) = 1/6 (Combined pair: 1/18)",
          officialAnswer: "P(3) = 1/6, P(4) = 1/6"
        },
        {
          id: "ex-13-1-q3",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 3",
          topic: "Combinations of Sample Space",
          statement: "Aimen has $3$ types of vegetables: (a) Peas, (b) Carrots, (c) Potato. She will choose two vegetables. Write down all the possible combinations of vegetables she can choose.",
          given: "Vegetable set $= \\{\\text{Peas}, \\text{Carrots}, \\text{Potato}\\}$",
          formula: "$$\\text{Combinations } = \\binom{3}{2} = 3$$",
          workingSteps: [
            "Pair 1: $\\{\\text{Peas}, \\text{Carrots}\\}$",
            "Pair 2: $\\{\\text{Peas}, \\text{Potato}\\}$",
            "Pair 3: $\\{\\text{Carrots}, \\text{Potato}\\}$"
          ],
          finalAnswer: "Sample Space = {{Peas, Carrots}, {Peas, Potato}, {Carrots, Potato}}",
          officialAnswer: "S = {Peas, Carrots, Potatoes}, {Peas, carrots}, {Peas, Potatoes}, {Carrots, Potatoes}"
        },
        {
          id: "ex-13-1-q4",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 4",
          topic: "Left-Handed Students Probability",
          statement: "In Grade-VIII, $10$ out of $60$ students are left handed. Find the probability of left-handed students?",
          given: "Left-handed students $n(E) = 10$\nTotal students $n(S) = 60$",
          formula: "$$P(E) = \\frac{n(E)}{n(S)}$$",
          workingSteps: [
            "$$P(\\text{left handed}) = \\frac{10}{60} = \\frac{1}{6} \\approx 16.7\\%$$"
          ],
          finalAnswer: "Probability = 1/6",
          officialAnswer: "P(left handed students) = 1/6"
        },
        {
          id: "ex-13-1-q5",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 5",
          topic: "Colored Stones in Box",
          statement: "A box contains $20$ red, $25$ green and $30$ purple stones. A stone is drawn randomly. Find the probability that it is either green or purple.",
          given: "Red $= 20$, Green $= 25$, Purple $= 30$\nTotal stones $n(S) = 20 + 25 + 30 = 75$",
          formula: "$$P(G \\cup P) = \\frac{n(G) + n(P)}{n(S)}$$",
          workingSteps: [
            "$$n(G) = 25 \\implies P(\\text{green}) = \\frac{25}{75} = \\frac{1}{3}$$",
            "$$n(P) = 30 \\implies P(\\text{purple}) = \\frac{30}{75} = \\frac{2}{5}$$",
            "$$P(\\text{green or purple}) = \\frac{25 + 30}{75} = \\frac{55}{75} = \\frac{11}{15}$$"
          ],
          finalAnswer: "P(green) = 1/3, P(purple) = 2/5 | P(green or purple) = 11/15",
          officialAnswer: "P(green) = 1/3, P(purple) = 2/5"
        },
        {
          id: "ex-13-1-q6",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 6",
          topic: "Football Goals Probability",
          statement: "In a friendly football match between $2$ teams scored $6$ goals in which team $A$ scored $2$ goals while team $B$ scored $4$ goals. Find the probability of goals of each team.",
          given: "Team A goals $= 2$, Team B goals $= 4$, Total goals $= 6$",
          workingSteps: [
            "$$P(A) = \\frac{2}{6} = \\frac{1}{3}$$",
            "$$P(B) = \\frac{4}{6} = \\frac{2}{3}$$"
          ],
          finalAnswer: "P(Team A) = 1/3 | P(Team B) = 2/3",
          officialAnswer: "P(A) = 1/3, P(B) = 2/3"
        },
        {
          id: "ex-13-1-q7",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 7",
          topic: "Equally Likely Events - Goal Scorers",
          statement: "In a football match Afghan club, Ahmed and Waqas score one goal each and Sajid scored 2 goals. If in a match total 8 goals were scored then find the equally likely events of the players.",
          workingSteps: [
            "Ahmed's goals $= 1 \\implies P(\\text{Ahmed}) = \\frac{1}{8}$",
            "Waqas's goals $= 1 \\implies P(\\text{Waqas}) = \\frac{1}{8}$",
            "Sajid's goals $= 2 \\implies P(\\text{Sajid}) = \\frac{2}{8} = \\frac{1}{4}$",
            "Since Ahmed and Waqas have identical score ($1$ goal each), their scoring events have equal probability $\\frac{1}{8}$."
          ],
          finalAnswer: "Player Ahmed and Waqas scored 1 goal each, so these events are equally likely.",
          officialAnswer: "Player Ahmed and Waqas scored one one goal so, these event are equally likely event."
        },
        {
          id: "ex-13-1-q8",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 8",
          topic: "Fruit Plate Probability",
          statement: "Sadaf presents one apple, one orange and $2$ mangoes in a plate to her friend. Find the probability of mangoes.",
          given: "Apple $= 1$, Orange $= 1$, Mangoes $= 2$\nTotal fruits $n(S) = 1 + 1 + 2 = 4$",
          formula: "$$P(\\text{Mangoes}) = \\frac{n(M)}{n(S)}$$",
          workingSteps: [
            "$$P(\\text{Mangoes}) = \\frac{2}{4} = \\frac{1}{2} = 0.5 = 50\\%$$"
          ],
          finalAnswer: "P(Mangoes) = 1/2",
          officialAnswer: "P(Mangoes) = 1/2"
        },
        {
          id: "ex-13-1-q9",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 9",
          topic: "Experimental Probability - Coin Toss 50 Times",
          statement: "Ahmed and Jaleel experiment to toss a coin $50$ times and get the following results:\n- Ahmed (Head): Frequency $= 38$\n- Jaleel (Tail): Frequency $= 12$\nTotal $= 50$\nFind the experimental probability between Ahmed and Jaleel winning the toss.",
          formula: "$$P(E) = \\frac{\\text{Frequency of outcome}}{\\text{Total trials}}$$",
          workingSteps: [
            "$$P(\\text{Ahmed}) = \\frac{38}{50} = \\frac{19}{25} = 0.76$$",
            "$$P(\\text{Jaleel}) = \\frac{12}{50} = \\frac{6}{25} = 0.24$$"
          ],
          finalAnswer: "P(Ahmed) = 19/25 (0.76) | P(Jaleel) = 6/25 (0.24)",
          officialAnswer: "P(Ahmed) = 38/50 = 19/25, P(Jaleel) = 12/50 = 6/25"
        },
        {
          id: "ex-13-1-q10",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "13.1",
          exerciseTitle: "Exercise 13.1",
          questionNumber: "Question 10",
          topic: "Spinner Sector Probability",
          statement: "Waheed is spinning a given spinner divided into 6 equal sectors labeled $a, b, b, d, c, a$. Find the probability of $a$, $b$ and $c$.",
          given: "Sectors: $a, b, b, d, c, a$\nTotal sectors $= 6$\nCount of $a = 2$, Count of $b = 2$, Count of $c = 1$, Count of $d = 1$",
          workingSteps: [
            "$$P(a) = \\frac{2}{6} = \\frac{1}{3}$$",
            "$$P(b) = \\frac{2}{6} = \\frac{1}{3}$$",
            "$$P(c) = \\frac{1}{6}$$"
          ],
          finalAnswer: "P(a) = 1/3, P(b) = 1/3, P(c) = 1/6",
          officialAnswer: "P(a) = 1/3, P(b) = 1/3, P(c) = 1/6",
          diagramType: "spinner"
        }
      ]
    },
    {
      id: "review-13",
      number: "Review 13",
      title: "Review Exercise 13",
      page: 212,
      description: "Unit 13 Review MCQs, sample space evaluations, compound events, and marble urn probability.",
      questions: [
        {
          id: "review-13-q1",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "Review 13",
          exerciseTitle: "Review Exercise 13",
          questionNumber: "Question 1 (MCQs)",
          topic: "Review MCQs",
          statement: "Tick (✓) the correct option:\n(i) If two events have equal number of chances of happening, then events are called:\n(ii) If $S = \\{H, T\\}, A = \\{H\\}, B = \\{T\\}$, then events $A$ and $B$ are:\n(iii) Events which involve occurrence of two or more events at the same time is:\n(iv) If $S = \\{1, 2, 3, 4, 5, 6\\}, A = \\{2, 4, 6\\}, B = \\{1, 2, 3\\}$, then events $A$ and $B$ are:\n(v) If occurrence of one does not affect the other, then events are:\n(vi) Ahmed rolls a fair die, then probability of getting 6 is:\n(vii) If occurrence of an effect on occurrence of other is called:\n(viii) To fire a balloon out of 10 different colours, this event is called:\n(ix) The formula of theoretical probability is:\n(x) Asif has one burger out of 8, the probability of Asif burger is:",
          subQuestions: [
            { label: "(i)", statement: "Equal chance of happening", working: ["Definition."], finalAnswer: "(a) equally likely" },
            { label: "(ii)", statement: "A={H}, B={T}", working: ["P(H) = P(T) = 1/2."], finalAnswer: "(a) equally likely" },
            { label: "(iii)", statement: "Two or more events together", working: ["Definition of combined events."], finalAnswer: "(d) simple combine events (key: equally likely / combine)" },
            { label: "(iv)", statement: "A={2,4,6}, B={1,2,3}", working: ["Both have 3 outcomes out of 6 (3/6 = 1/2)."], finalAnswer: "(a) equally likely" },
            { label: "(v)", statement: "No effect on each other", working: ["Definition of independent events."], finalAnswer: "(b) Independent" },
            { label: "(vi)", statement: "Probability of getting 6 on a die", working: ["Single favorable face 6 out of 6."], finalAnswer: "(d) 1/6" },
            { label: "(vii)", statement: "Occurrence affects other", working: ["Definition."], finalAnswer: "(d) dependant events" },
            { label: "(viii)", statement: "Pick balloon from 10 colors", working: ["Independent trial."], finalAnswer: "(a) Independent event (or equally likely)" },
            { label: "(ix)", statement: "Formula of theoretical probability", working: ["n(E) / n(S)."], finalAnswer: "(a) n(E) / n(S)" },
            { label: "(x)", statement: "1 burger out of 8", working: ["1/8."], finalAnswer: "(d) 1/8" }
          ],
          finalAnswer: "(i) a, (ii) a, (iii) a/d, (iv) a, (v) b, (vi) d, (vii) d, (viii) a, (ix) a, (x) d",
          officialAnswer: "(i) a) equally likely, (ii) a) equally likely, (iii) a) equally likely, (iv) a) equally likely, (v) b) Independent, (vi) d) 1/6, (vii) d) dependent events, (viii) a) Independent event, (ix) a) n(E)/n(S), (x) d) 1/8"
        },
        {
          id: "review-13-q5",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "Review 13",
          exerciseTitle: "Review Exercise 13",
          questionNumber: "Question 5",
          topic: "Class Gender Selection",
          statement: "A class has $10$ boys and $15$ girls. What is the probability of selecting a girl from the class?",
          given: "Boys $= 10$\nGirls $= 15$\nTotal students $n(S) = 10 + 15 = 25$",
          formula: "$$P(\\text{girl}) = \\frac{n(G)}{n(S)}$$",
          workingSteps: [
            "$$P(\\text{girl}) = \\frac{15}{25} = \\frac{3}{5} = 0.6 = 60\\%$$"
          ],
          finalAnswer: "P(girl) = 3/5",
          officialAnswer: "P(girls) = 3/5"
        },
        {
          id: "review-13-q6",
          chapterId: 13,
          chapterNumber: 13,
          chapterTitle: "Probability",
          exerciseId: "Review 13",
          exerciseTitle: "Review Exercise 13",
          questionNumber: "Question 6",
          topic: "Colored Balls in Bag",
          statement: "A bag contains $3$ red balls, $4$ green balls, and $5$ blue balls. One ball is drawn at random from the bag. What is the probability that the ball drawn is either red or green?",
          given: "Red $= 3$, Green $= 4$, Blue $= 5$\nTotal balls $n(S) = 3 + 4 + 5 = 12$",
          formula: "$$P(\\text{Red or Green}) = \\frac{n(R) + n(G)}{n(S)}$$",
          workingSteps: [
            "$$n(R \\cup G) = 3 + 4 = 7$$",
            "$$P(\\text{Red or Green}) = \\frac{7}{12} \\approx 0.583$$"
          ],
          finalAnswer: "Probability = 7/12",
          officialAnswer: "7/12"
        }
      ]
    }
  ]
};
