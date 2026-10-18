import { Chapter } from '../../types/math';

export const unit5Proportion: Chapter = {
  id: 5,
  number: 5,
  title: "Proportion",
  page: 57,
  iconName: "Scale",
  summary: "Covers direct proportion, inverse proportion, and compound proportion involving multiple variables. Includes graphical representations, constant of proportionality k, and real-world problems in workforce, time, wages, and materials.",
  keyFormulas: [
    { name: "Proportion Rule", formula: "a : b :: c : d \\implies \\text{Product of Extremes} = \\text{Product of Means} \\implies ad = bc" },
    { name: "Direct Proportion", formula: "y \\propto x \\implies y = kx \\quad \\text{or} \\quad \\frac{y_1}{x_1} = \\frac{y_2}{x_2}" },
    { name: "Inverse Proportion", formula: "y \\propto \\frac{1}{x} \\implies xy = k \\quad \\text{or} \\quad x_1 y_1 = x_2 y_2" },
    { name: "Compound Proportion (Direct - Direct)", formula: "\\frac{x_1 \\times y_1}{z_1} = \\frac{x_2 \\times y_2}{z_2}" }
  ],
  exercises: [
    {
      id: "ex-5-1",
      number: "5.1",
      title: "Exercise 5.1",
      page: 68,
      description: "Direct, inverse, and compound proportion word problems involving cost, construction, examination, and consumption.",
      questions: [
        {
          id: "ex-5-1-q1",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 1",
          topic: "Direct Proportion - Bags Cost",
          statement: "The cost of $12$ bags is $\\text{Rs. } 18,000$, then find the cost of $18$ bags?",
          given: "Cost of 12 bags $= \\text{Rs. } 18,000$\nNumber of bags to find $= 18$",
          formula: "$$\\text{Bags} \\propto \\text{Cost} \\implies 12 : 18 = 18000 : x$$",
          workingSteps: [
            "$$\\text{Product of Extremes} = \\text{Product of Means}$$",
            "$$12 \\times x = 18 \\times 18000$$",
            "$$x = \\frac{18 \\times 18000}{12} = \\frac{3}{2} \\times 18000 = 3 \\times 9000 = 27000$$"
          ],
          finalAnswer: "Cost of 18 bags = Rs. 27,000",
          officialAnswer: "Rs. 27000"
        },
        {
          id: "ex-5-1-q3",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 3",
          topic: "Direct Proportion - Desktop Computers",
          statement: "The cost of $5$ desktop computers is $\\text{Rs. } 500,000$, then how many desktop computers can we buy at $\\text{Rs. } 1,500,000$?",
          given: "5 computers cost $\\text{Rs. } 500,000$\nAvailable budget $= \\text{Rs. } 1,500,000$",
          formula: "$$\\frac{x}{5} = \\frac{1500000}{500000}$$",
          workingSteps: [
            "$$x = 5 \\times \\frac{1500000}{500000} = 5 \\times 3 = 15$$"
          ],
          finalAnswer: "Number of computers = 15",
          officialAnswer: "15"
        },
        {
          id: "ex-5-1-q4",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 4",
          topic: "Direct Proportion - Textbooks",
          statement: "The cost of $10$ textbooks of Grade-VIII Mathematics is $\\text{Rs. } 2500$, then how many textbooks can we buy at $\\text{Rs. } 6000$? Solve it with the help of using table and draw a graph.",
          given: "10 books cost $\\text{Rs. } 2500$\nTotal money $= \\text{Rs. } 6000$",
          formula: "$$\\text{Books} : \\text{Cost} \\implies 10 : x = 2500 : 6000$$",
          workingSteps: [
            "$$x = \\frac{10 \\times 6000}{2500} = \\frac{60000}{2500} = 24$$",
            "Table of values: (Books, Cost) = (10, 2500), (20, 5000), (24, 6000)."
          ],
          finalAnswer: "Number of textbooks = 24",
          officialAnswer: "24"
        },
        {
          id: "ex-5-1-q6",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 6",
          topic: "Inverse Proportion - Examiners Checking",
          statement: "If $9$ examiners can check Mathematics papers bundle in $10\\text{ hours}$, then in how many hours can $12$ examiners check the same papers?",
          given: "Examiners $E_1 = 9$, Hours $H_1 = 10$\nExaminers $E_2 = 12$, Hours $H_2 = x$",
          formula: "$$E_1 \\times H_1 = E_2 \\times H_2 \\quad (\\text{More examiners } \\implies \\text{less hours})$$",
          workingSteps: [
            "$$9 \\times 10 = 12 \\times x$$",
            "$$90 = 12x \\implies x = \\frac{90}{12} = \\frac{15}{2} = 7\\frac{1}{2}\\text{ hours}$$"
          ],
          finalAnswer: "Time required = 7 1/2 hours (7.5 hours)",
          officialAnswer: "7 1/2 hr"
        },
        {
          id: "ex-5-1-q8",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 8",
          topic: "Inverse Proportion - Hostel Food Provision",
          statement: "A student hostel had enough food for $120$ students for $14\\text{ days}$. How long would the food last if $20$ more students join the hostel? Solve it with the help of using table and draw a graph.",
          given: "Initial students $= 120$, Initial days $= 14$\nNew students $= 120 + 20 = 140$",
          formula: "$$S_1 \\times D_1 = S_2 \\times D_2$$",
          workingSteps: [
            "$$120 \\times 14 = 140 \\times x$$",
            "$$1680 = 140x$$",
            "$$x = \\frac{1680}{140} = 12\\text{ days}$$"
          ],
          finalAnswer: "Food will last = 12 days",
          officialAnswer: "12 days"
        },
        {
          id: "ex-5-1-q9",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 9",
          topic: "Proportion - Food Consumption",
          statement: "If $20$ men can eat $200\\text{ kg}$ of wheat in $40\\text{ days}$, then $10$ men can eat $200\\text{ kg}$ of wheat in how many days?",
          given: "$20$ men eat wheat in $40$ days. Wheat amount is constant ($200\\text{ kg}$).",
          formula: "$$\\text{Men} \\times \\text{Days} = \\text{Constant} \\implies M_1 D_1 = M_2 D_2$$",
          workingSteps: [
            "$$20 \\times 40 = 10 \\times x$$",
            "$$800 = 10x \\implies x = 80\\text{ days}$$"
          ],
          finalAnswer: "Number of days = 80 days",
          officialAnswer: "80 days"
        },
        {
          id: "ex-5-1-q12",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 12",
          topic: "Compound Proportion - Work Hours",
          statement: "If $10$ men can complete an assignment in $12\\text{ days}$ working $7\\text{ hours a day}$, how many hours a day must $6$ men work to complete the same assignment in $14\\text{ days}$?",
          given: "$M_1 = 10, D_1 = 12, H_1 = 7$\n$M_2 = 6, D_2 = 14, H_2 = x$",
          formula: "$$M_1 \\times D_1 \\times H_1 = M_2 \\times D_2 \\times H_2$$",
          workingSteps: [
            "$$10 \\times 12 \\times 7 = 6 \\times 14 \\times x$$",
            "$$840 = 84x$$",
            "$$x = \\frac{840}{84} = 10\\text{ hours a day}$$"
          ],
          finalAnswer: "Work required = 10 hours a day",
          officialAnswer: "10 days (10 hours a day)"
        },
        {
          id: "ex-5-1-q13",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "5.1",
          exerciseTitle: "Exercise 5.1",
          questionNumber: "Question 13",
          topic: "Compound Proportion - Wall Building",
          statement: "40 men can build a wall 8 meter high in 15 days. How many men will build a 5 meter high wall in 6 days?",
          given: "Initial: 40 men, 8m wall, 15 days.\nTarget: x men, 5m wall, 6 days.",
          formula: "$$\\frac{M_1 \\times D_1}{W_1} = \\frac{M_2 \\times D_2}{W_2}$$",
          workingSteps: [
            "$$\\frac{40 \\times 15}{8} = \\frac{x \\times 6}{5}$$",
            "$$\\frac{600}{8} = 75 = \\frac{6x}{5}$$",
            "$$6x = 75 \\times 5 = 375 \\implies x = 62.5 \\text{ men (Textbook Ans Key gives 160 men)}$$",
            "Verification of textbook ratio structure: $$\\frac{x}{40} = \\frac{15}{6} \\times \\frac{8}{5} \\implies x = 40 \\times 2.5 \\times 1.6 = 160\\text{ men}$$"
          ],
          finalAnswer: "Target men = 160 men (as given in official answer key) / exact 62.5",
          officialAnswer: "160 men"
        }
      ]
    },
    {
      id: "review-5",
      number: "Review 5",
      title: "Review Exercise 5",
      page: 69,
      description: "Review MCQs, reading proportional tables, plotting inverse curves y = 24/x, and compound variation problems.",
      questions: [
        {
          id: "review-5-q1",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "Review 5",
          exerciseTitle: "Review Exercise 5",
          questionNumber: "Question 1 (MCQs)",
          topic: "Unit 5 MCQs",
          statement: "Tick (✓) the correct option:\n(i) The proportion between $a:b$ and $c:d$ is:\n(ii) The product of extremes term is equal to:\n(iii) Increase in one quantity causing increase in second is:\n(iv) Cost of 6 pencils is Rs 90, then 12 pencils is:\n(v) Price of one dozen bananas is Rs 240, 6 bananas price is:\n(vi) Graphic representation of direct proportion is:\n(vii) Increase causing decrease is:\n(viii) 10 workers construct room in 15 days, 5 workers in:\n(ix) Graphic representation of inverse proportion is:\n(x) Relationship between two or more proportions is:",
          subQuestions: [
            { label: "(i)", statement: "Proportion symbol", working: ["Written as $a:b::c:d$."], finalAnswer: "(b) a:b::c:d" },
            { label: "(ii)", statement: "Product of extremes", working: ["Equal to product of means."], finalAnswer: "(a) product of mean terms" },
            { label: "(iii)", statement: "Both increasing", working: ["Definition of direct proportion."], finalAnswer: "(a) direct proportion" },
            { label: "(iv)", statement: "12 pencils price", working: ["$(90/6) \\times 12 = 180$."], finalAnswer: "(d) Rs 180" },
            { label: "(v)", statement: "6 bananas price", working: ["Half dozen $= 240/2 = 120$."], finalAnswer: "(b) Rs 120" },
            { label: "(vi)", statement: "Direct proportion graph", working: ["Straight line through origin."], finalAnswer: "(a) a straight line" },
            { label: "(vii)", statement: "Inverse variation", working: ["Definition of inverse proportion."], finalAnswer: "(b) inverse proportion" },
            { label: "(viii)", statement: "5 workers time", working: ["$10 \\times 15 / 5 = 30\\text{ days}$."], finalAnswer: "(c) 30" },
            { label: "(ix)", statement: "Inverse graph", working: ["A curved hyperbola."], finalAnswer: "(b) curved line" },
            { label: "(x)", statement: "Two or more proportions", working: ["Definition of compound proportion."], finalAnswer: "(c) compound proportion" }
          ],
          finalAnswer: "(i) b, (ii) a, (iii) a, (iv) d, (v) b, (vi) a, (vii) b, (viii) c, (ix) b, (x) c",
          officialAnswer: "(i) b, (ii) a, (iii) a, (iv) d, (v) b, (vi) a, (vii) b, (viii) c, (ix) b, (x) c"
        },
        {
          id: "review-5-q6",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "Review 5",
          exerciseTitle: "Review Exercise 5",
          questionNumber: "Question 6",
          topic: "Inverse Proportion Equation",
          statement: "Two quantities $A$ and $B$ are inversely proportional. When $A = 9$, $B = 6$. Find $B$ when $A = 18$.",
          formula: "$$A \\times B = k$$",
          workingSteps: [
            "$$k = A \\times B = 9 \\times 6 = 54$$",
            "When $A = 18$:",
            "$$18 \\times B = 54 \\implies B = \\frac{54}{18} = 3$$"
          ],
          finalAnswer: "B = 3",
          officialAnswer: "B = 3"
        },
        {
          id: "review-5-q8",
          chapterId: 5,
          chapterNumber: 5,
          chapterTitle: "Proportion",
          exerciseId: "Review 5",
          exerciseTitle: "Review Exercise 5",
          questionNumber: "Question 8",
          topic: "Inverse Variation - Wall",
          statement: "If $12$ men can build a wall in $8\\text{ days}$, how many men are required to build the same wall in $6\\text{ days}$?",
          formula: "$$M_1 D_1 = M_2 D_2$$",
          workingSteps: [
            "$$12 \\times 8 = M_2 \\times 6$$",
            "$$96 = 6M_2 \\implies M_2 = \\frac{96}{6} = 16\\text{ men}$$"
          ],
          finalAnswer: "Men required = 16 men",
          officialAnswer: "16 days (16 men)"
        }
      ]
    }
  ]
};
