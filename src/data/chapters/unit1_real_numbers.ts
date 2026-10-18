import { Chapter } from '../../types/math';

export const unit1RealNumbers: Chapter = {
  id: 1,
  number: 1,
  title: "Real Numbers",
  page: 1,
  iconName: "Hash",
  summary: "Covers rational and irrational numbers, decimal representations (terminating, recurring, non-recurring), real numbers on the number line, absolute value, and algebraic properties of real numbers w.r.t addition and multiplication.",
  keyFormulas: [
    { name: "Rational Number", formula: "\\mathbb{Q} = \\left\\{ \\frac{p}{q} \\mid p, q \\in \\mathbb{Z}, q \\neq 0 \\right\\}" },
    { name: "Irrational Number", formula: "\\mathbb{Q}' = \\left\\{ x \\mid x \\notin \\frac{p}{q}, p, q \\in \\mathbb{Z}, q \\neq 0 \\right\\}" },
    { name: "Real Numbers Set", formula: "\\mathbb{R} = \\mathbb{Q} \\cup \\mathbb{Q}'" },
    { name: "Absolute Value", formula: "|x| = \\begin{cases} x & \\text{if } x \\ge 0 \\\\ -x & \\text{if } x < 0 \\end{cases}" },
    { name: "Distributive Property", formula: "a(b + c) = ab + ac \\quad \\text{and} \\quad a(b - c) = ab - ac" },
    { name: "Additive & Multiplicative Inverse", formula: "a + (-a) = 0, \\quad a \\times \\frac{1}{a} = 1 \\;(a \\neq 0)" }
  ],
  exercises: [
    {
      id: "ex-1-1",
      number: "1.1",
      title: "Exercise 1.1",
      page: 7,
      description: "Rational vs. irrational numbers, terminating and recurring decimals, number line representation, absolute values, and real-life word problems.",
      questions: [
        {
          id: "ex-1-1-q1",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 1",
          topic: "Rational and Irrational Numbers",
          statement: "Separate rational and irrational numbers from the following:\n(i) $-3$\n(ii) $1$\n(iii) $\\sqrt{6}$\n(iv) $1.7$\n(v) $-\\frac{13}{3}$\n(vi) $\\sqrt{16}$\n(vii) $2.\\overline{6}$\n(viii) $3.7218945...$",
          given: "A list of 8 numbers: $-3, 1, \\sqrt{6}, 1.7, -\\frac{13}{3}, \\sqrt{16}, 2.\\overline{6}, 3.7218945...$",
          formula: "A rational number can be written as $\\frac{p}{q}$ where $p, q \\in \\mathbb{Z}, q \\neq 0$. An irrational number cannot be expressed as $\\frac{p}{q}$ and has a non-terminating, non-recurring decimal representation.",
          subQuestions: [
            {
              label: "(i)",
              statement: "$-3$",
              working: ["$-3 = -\\frac{3}{1}$, which is of the form $\\frac{p}{q}$ with $p = -3, q = 1 \\in \\mathbb{Z}, q \\neq 0$."],
              finalAnswer: "Rational Number"
            },
            {
              label: "(ii)",
              statement: "$1$",
              working: ["$1 = \\frac{1}{1}$, which is of the form $\\frac{p}{q}$."],
              finalAnswer: "Rational Number"
            },
            {
              label: "(iii)",
              statement: "$\\sqrt{6}$",
              working: ["$6$ is not a perfect square. $\\sqrt{6} \\approx 2.449489...$ is a non-terminating, non-recurring decimal and cannot be written as a fraction $\\frac{p}{q}$."],
              finalAnswer: "Irrational Number"
            },
            {
              label: "(iv)",
              statement: "$1.7$",
              working: ["$1.7 = \\frac{17}{10}$, terminating decimal, which is of the form $\\frac{p}{q}$."],
              finalAnswer: "Rational Number"
            },
            {
              label: "(v)",
              statement: "$-\\frac{13}{3}$",
              working: ["Given directly in fraction form $\\frac{p}{q}$ where $p = -13$ and $q = 3$ are integers."],
              finalAnswer: "Rational Number (Textbook Ans Key groups as fraction)"
            },
            {
              label: "(vi)",
              statement: "$\\sqrt{16}$",
              working: ["$\\sqrt{16} = 4 = \\frac{4}{1}$, integer."],
              finalAnswer: "Rational Number"
            },
            {
              label: "(vii)",
              statement: "$2.\\overline{6}$",
              working: ["$2.\\overline{6} = 2.666... = 2 + \\frac{6}{9} = \\frac{24}{9} = \\frac{8}{3}$. Non-terminating but recurring decimal."],
              finalAnswer: "Rational Number"
            },
            {
              label: "(viii)",
              statement: "$3.7218945...$",
              working: ["The decimal is non-terminating and non-recurring (no repeating cycle)."],
              finalAnswer: "Irrational Number"
            }
          ],
          workingSteps: [
            "Definition of Rational Number: $\\mathbb{Q} = \\{ \\frac{p}{q} \\mid p, q \\in \\mathbb{Z}, q \\neq 0 \\}$. Includes integers, terminating decimals, and recurring decimals.",
            "Definition of Irrational Number: $\\mathbb{Q}' = \\{ x \\mid x \\text{ is non-terminating and non-recurring} \\}$. Includes square roots of non-perfect squares."
          ],
          finalAnswer: "Rational Numbers: (i), (ii), (iv), (v), (vi), (vii) | Irrational Numbers: (iii), (viii)",
          officialAnswer: "Rational: (i), (ii), (iv), (vi), (vii); Irrational: (v), (iii), (viii) [Note: Textbook lists (v) under irrational in answer key by typographical error, but mathematically $-13/3$ is rational]"
        },
        {
          id: "ex-1-1-q2",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 2",
          topic: "Terminating and Non-terminating Decimals",
          statement: "Identify terminating and non-terminating decimal numbers:\n(i) $0.657$\n(ii) $9.74747$\n(iii) $2.444...$\n(iv) $124.6$\n(v) $16.643643643$\n(vi) $7.\\overline{63}$\n(vii) $\\frac{2}{5}$\n(viii) $\\frac{12}{20}$",
          given: "List of numbers: $0.657, 9.74747, 2.444..., 124.6, 16.643643643, 7.\\overline{63}, \\frac{2}{5}, \\frac{12}{20}$",
          subQuestions: [
            { label: "(i)", statement: "$0.657$", working: ["Has 3 finite decimal digits."], finalAnswer: "Terminating decimal" },
            { label: "(ii)", statement: "$9.74747$", working: ["Has 5 finite decimal digits (no ellipsis)."], finalAnswer: "Terminating decimal" },
            { label: "(iii)", statement: "$2.444...$", working: ["Ellipsis indicates infinite decimal digits."], finalAnswer: "Non-terminating decimal" },
            { label: "(iv)", statement: "$124.6$", working: ["Has 1 finite decimal digit."], finalAnswer: "Terminating decimal" },
            { label: "(v)", statement: "$16.643643643$", working: ["Has 9 finite decimal digits (no ellipsis)."], finalAnswer: "Terminating decimal" },
            { label: "(vi)", statement: "$7.\\overline{63}$", working: ["The bar over 63 indicates infinite repeating digits."], finalAnswer: "Non-terminating decimal" },
            { label: "(vii)", statement: "$\\frac{2}{5}$", working: ["$\\frac{2}{5} = 0.4$, finite decimal."], finalAnswer: "Terminating decimal" },
            { label: "(viii)", statement: "$\\frac{12}{20}$", working: ["$\\frac{12}{20} = \\frac{3}{5} = 0.6$, finite decimal."], finalAnswer: "Terminating decimal" }
          ],
          finalAnswer: "Terminating Decimals: (i), (ii), (iv), (v), (vii), (viii) | Non-Terminating Decimals: (iii), (vi)",
          officialAnswer: "Terminating: (i), (ii), (iv), (v), (vii), (viii); Non-Terminating: (iii), (vi)"
        },
        {
          id: "ex-1-1-q3",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 3",
          topic: "Representation on Number Line",
          statement: "Represent each of the following numbers on number line:\n(i) $3.7$\n(ii) $5.4$\n(iii) $-4.5$\n(iv) $-3.2$\n(v) $-\\frac{3}{5}$\n(vi) $-\\frac{9}{4}$\n(vii) $\\frac{16}{3}$\n(viii) $\\frac{19}{6}$",
          given: "Numbers to plot on a horizontal real number line.",
          subQuestions: [
            { label: "(i)", statement: "$3.7$", working: ["$3.7$ lies between $3$ and $4$. Divide unit into $10$ parts; take $7$th point to the right of $3$."], finalAnswer: "Located at $+3.7$ on RHS" },
            { label: "(ii)", statement: "$5.4$", working: ["$5.4$ lies between $5$ and $6$. Divide unit into $10$ parts; take $4$th point to the right of $5$."], finalAnswer: "Located at $+5.4$ on RHS" },
            { label: "(iii)", statement: "$-4.5$", working: ["$-4.5$ lies exactly midway between $-4$ and $-5$ on LHS."], finalAnswer: "Located at $-4.5$ on LHS" },
            { label: "(iv)", statement: "$-3.2$", working: ["$-3.2$ lies between $-3$ and $-4$. Take $2$ tenths to the left of $-3$."], finalAnswer: "Located at $-3.2$ on LHS" },
            { label: "(v)", statement: "$-\\frac{3}{5} = -0.6$", working: ["Lies between $0$ and $-1$. Divide distance into $5$ equal parts; take $3$rd part left of $0$."], finalAnswer: "Located at $-0.6$ on LHS" },
            { label: "(vi)", statement: "$-\\frac{9}{4} = -2\\frac{1}{4} = -2.25$", working: ["Lies between $-2$ and $-3$. Divide distance into $4$ parts; take $1$st part left of $-2$."], finalAnswer: "Located at $-2.25$ on LHS" },
            { label: "(vii)", statement: "$\\frac{16}{3} = 5\\frac{1}{3} \\approx 5.33$", working: ["Lies between $5$ and $6$. Divide into $3$ parts; take $1$st part right of $5$."], finalAnswer: "Located at $5\\frac{1}{3}$ on RHS" },
            { label: "(viii)", statement: "$\\frac{19}{6} = 3\\frac{1}{6} \\approx 3.17$", working: ["Lies between $3$ and $4$. Divide into $6$ parts; take $1$st part right of $3$."], finalAnswer: "Located at $3\\frac{1}{6}$ on RHS" }
          ],
          finalAnswer: "All points plotted accurately on the real number line according to their exact coordinate values.",
          diagramType: "number-line"
        },
        {
          id: "ex-1-1-q4",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 4",
          topic: "Absolute Value",
          statement: "Find the absolute value of each of the following:\n(i) $14$\n(ii) $-25$\n(iii) $-100$\n(iv) $44$\n(v) $15$",
          formula: "$|x| = x$ if $x \\ge 0$, and $|x| = -x$ if $x < 0$. The absolute value represents the numerical distance from zero on the number line.",
          subQuestions: [
            { label: "(i)", statement: "$|14|$", working: ["Since $14 > 0$, $|14| = 14$."], finalAnswer: "$+14$" },
            { label: "(ii)", statement: "$|-25|$", working: ["Since $-25 < 0$, $|-25| = -(-25) = 25$."], finalAnswer: "$+25$" },
            { label: "(iii)", statement: "$|-100|$", working: ["Since $-100 < 0$, $|-100| = 100$."], finalAnswer: "$+100$" },
            { label: "(iv)", statement: "$|44|$", working: ["Since $44 > 0$, $|44| = 44$."], finalAnswer: "$+44$" },
            { label: "(v)", statement: "$|15|$", working: ["Since $15 > 0$, $|15| = 15$."], finalAnswer: "$+15$" }
          ],
          finalAnswer: "(i) 14, (ii) 25, (iii) 100, (iv) 44, (v) 15",
          officialAnswer: "(i) +14, (ii) +25, (iii) +100, (iv) +44, (v) +15"
        },
        {
          id: "ex-1-1-q5",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 5",
          topic: "Recurring and Non-recurring Decimals",
          statement: "Identify recurring and non-recurring decimal numbers:\n(i) $1.777...$\n(ii) $2.3131...$\n(iii) $5.\\overline{6}$\n(iv) $-3.222...$\n(v) $7.1623...$\n(vi) $6.1234...$\n(vii) $5.3467...$\n(viii) $8.991234...$",
          formula: "A recurring decimal has a repeating digit or block of digits. A non-recurring decimal has no periodic repeating pattern.",
          subQuestions: [
            { label: "(i)", statement: "$1.777...$", working: ["Digit 7 repeats indefinitely."], finalAnswer: "Recurring decimal" },
            { label: "(ii)", statement: "$2.3131...$", working: ["Block '31' repeats indefinitely."], finalAnswer: "Recurring decimal" },
            { label: "(iii)", statement: "$5.\\overline{6}$", working: ["Bar indicates digit 6 repeats indefinitely ($5.666...$)."], finalAnswer: "Recurring decimal" },
            { label: "(iv)", statement: "$-3.222...$", working: ["Digit 2 repeats indefinitely."], finalAnswer: "Recurring decimal" },
            { label: "(v)", statement: "$7.1623...$", working: ["Digits do not repeat periodically."], finalAnswer: "Non-recurring decimal" },
            { label: "(vi)", statement: "$6.1234...$", working: ["No repeating period."], finalAnswer: "Non-recurring decimal" },
            { label: "(vii)", statement: "$5.3467...$", working: ["No repeating period."], finalAnswer: "Non-recurring decimal" },
            { label: "(viii)", statement: "$8.991234...$", working: ["No repeating period."], finalAnswer: "Non-recurring decimal" }
          ],
          finalAnswer: "Recurring decimals: (i), (ii), (iii), (iv) | Non-recurring decimals: (v), (vi), (vii), (viii)",
          officialAnswer: "Recurring: (i), (ii), (iii), (iv); Non-recurring: (v), (vi), (vii), (viii)"
        },
        {
          id: "ex-1-1-q6",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 6",
          topic: "Word Problems - Decimals",
          statement: "Maheen jogged $3.34\\text{ km}$, Ali jogged $2.45$ times more distance than Maheen. Find the distance covered by Ali.",
          given: "Distance jogged by Maheen $= 3.34\\text{ km}$\nMultiplier for Ali $= 2.45$",
          formula: "$$\\text{Distance covered by Ali} = \\text{Distance of Maheen} \\times 2.45$$",
          workingSteps: [
            "Given: $\\text{Maheen's distance} = 3.34\\text{ km}$",
            "Multiplier $= 2.45$",
            "$$\\text{Ali's distance} = 3.34 \\times 2.45$$",
            "$$3.34 \\times 2.45 = 8.183\\text{ km}$$"
          ],
          finalAnswer: "Distance covered by Ali = 8.183 km",
          officialAnswer: "The Distance Covered by Ali = 8.183km"
        },
        {
          id: "ex-1-1-q7",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 7",
          topic: "Word Problems - Division of Real Numbers",
          statement: "Four friends went to a dinner and decided to split the cost of dinner between themselves. If the total bill was $\\text{Rs } 13,000$. What will be the approximate share of each friend?",
          given: "Total dinner bill $= \\text{Rs } 13,000$\nNumber of friends $= 4$",
          formula: "$$\\text{Share of each friend} = \\frac{\\text{Total Bill}}{\\text{Number of friends}}$$",
          workingSteps: [
            "$$\\text{Share} = \\frac{13000}{4}$$",
            "$$\\text{Share} = 3250$$"
          ],
          finalAnswer: "Share of each friend = Rs. 3,250",
          officialAnswer: "Rs. 3250"
        },
        {
          id: "ex-1-1-q8",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 8",
          topic: "Word Problems - Decimals",
          statement: "Arsalan covers $5.4\\text{ km}$ distance from home to school and back to home. How much distance does he cover in a week?",
          given: "Daily round-trip distance $= 5.4\\text{ km}$\nNumber of days in a week $= 7\\text{ days}$",
          formula: "$$\\text{Total distance} = \\text{Daily distance} \\times \\text{Number of days}$$",
          workingSteps: [
            "$$\\text{Total distance} = 5.4 \\times 7$$",
            "$$5.4 \\times 7 = 37.8\\text{ km}$$"
          ],
          finalAnswer: "Total distance covered in a week = 37.8 km",
          officialAnswer: "37.8km"
        },
        {
          id: "ex-1-1-q9",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 9",
          topic: "Word Problems",
          statement: "Sahira bought a cough syrup of $750\\text{ g}$ and she used $25\\text{ g}$ thrice a day. How much syrup did she use in a day?",
          given: "Dose per time $= 25\\text{ g}$\nFrequency $= 3\\text{ times a day}$",
          formula: "$$\\text{Daily syrup used} = \\text{Dose per time} \\times \\text{Times per day}$$",
          workingSteps: [
            "$$\\text{Daily syrup used} = 25\\text{ g} \\times 3 = 75\\text{ g}$$",
            "Note: The question asks how much syrup she used in a day ($25 \\times 3 = 75\\text{ g}$). (If remaining syrup was asked: $750 - 75 = 675\\text{ g}$, which matches textbook answer key!)"
          ],
          finalAnswer: "Used in a day: 75 g (Remaining in bottle: 675 g)",
          officialAnswer: "675g"
        },
        {
          id: "ex-1-1-q10",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.1",
          exerciseTitle: "Exercise 1.1",
          questionNumber: "Question 10",
          topic: "Word Problems - Fractions",
          statement: "Mahnoor bought $\\frac{1}{4}\\text{ litre}$ pineapple juice and $1\\frac{1}{2}\\text{ litre}$ strawberry juice. How much juice did she buy?",
          given: "Pineapple juice $= \\frac{1}{4}\\text{ L}$\nStrawberry juice $= 1\\frac{1}{2} = \\frac{3}{2}\\text{ L}$",
          formula: "$$\\text{Total juice} = \\text{Pineapple juice} + \\text{Strawberry juice}$$",
          workingSteps: [
            "$$\\text{Total juice} = \\frac{1}{4} + \\frac{3}{2}$$",
            "Find common denominator ($4$):",
            "$$\\frac{3}{2} = \\frac{6}{4}$$",
            "$$\\text{Total} = \\frac{1 + 6}{4} = \\frac{7}{4} = 1\\frac{3}{4}\\text{ litres} = 1.75\\text{ L}$$"
          ],
          finalAnswer: "Total juice bought = 1 3/4 litres (or 7/4 litres)",
          officialAnswer: "1 3/4 liter"
        }
      ]
    },
    {
      id: "ex-1-2",
      number: "1.2",
      title: "Exercise 1.2",
      page: 11,
      description: "Properties of real numbers w.r.t. addition and multiplication, ordering properties of inequalities, additive and multiplicative inverses.",
      questions: [
        {
          id: "ex-1-2-q1",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.2",
          exerciseTitle: "Exercise 1.2",
          questionNumber: "Question 1",
          topic: "Properties of Real Numbers",
          statement: "Identify the properties of given real numbers:\n(i) $7 + 5 = 5 + 7$\n(ii) $(3 + 4) + 6 = 3 + (4 + 6)$\n(iii) $5 + (-5) = 0$\n(iv) $7 + 0 = 7$\n(v) $6 + 5 = 11$\n(vi) $4 \\times 3 = 3 \\times 4$\n(vii) $3 \\times (5 \\times 2) = (3 \\times 5) \\times 2$\n(viii) $-8 \\times 1 = -8$\n(ix) $-9 \\times \\left(-\\frac{1}{9}\\right) = 1$\n(x) $0.5(0.3 + 0.6) = 0.5(0.3) + 0.5(0.6)$\n(xi) $\\frac{1}{2}\\left(\\frac{1}{3} - \\frac{1}{4}\\right) = \\frac{1}{2}\\left(\\frac{1}{3}\\right) - \\frac{1}{2}\\left(\\frac{1}{4}\\right)$\n(xii) $(\\sqrt{2} + \\sqrt{3})\\sqrt{5} = \\sqrt{2}\\sqrt{5} + \\sqrt{3}\\sqrt{5}$",
          subQuestions: [
            { label: "(i)", statement: "$7 + 5 = 5 + 7$", working: ["Order of addition is swapped: $a + b = b + a$."], finalAnswer: "Commutative property w.r.t addition" },
            { label: "(ii)", statement: "$(3 + 4) + 6 = 3 + (4 + 6)$", working: ["Grouping of addition changed: $(a + b) + c = a + (b + c)$."], finalAnswer: "Associative property w.r.t addition" },
            { label: "(iii)", statement: "$5 + (-5) = 0$", working: ["Sum of number and its opposite yields identity $0$: $a + (-a) = 0$."], finalAnswer: "Additive inverse property" },
            { label: "(iv)", statement: "$7 + 0 = 7$", working: ["Adding zero preserves the number: $a + 0 = a$."], finalAnswer: "Additive identity property" },
            { label: "(v)", statement: "$6 + 5 = 11$", working: ["The sum of two real numbers is a real number: $a, b \\in \\mathbb{R} \\implies a+b \\in \\mathbb{R}$."], finalAnswer: "Closure property w.r.t addition" },
            { label: "(vi)", statement: "$4 \\times 3 = 3 \\times 4$", working: ["Order of multiplication swapped: $a \\times b = b \\times a$."], finalAnswer: "Commutative property w.r.t multiplication" },
            { label: "(vii)", statement: "$3 \\times (5 \\times 2) = (3 \\times 5) \\times 2$", working: ["Grouping of multiplication: $a(bc) = (ab)c$."], finalAnswer: "Associative property w.r.t multiplication" },
            { label: "(viii)", statement: "$-8 \\times 1 = -8$", working: ["Multiplying by 1 preserves value: $a \\times 1 = a$."], finalAnswer: "Closure / Multiplicative identity property" },
            { label: "(ix)", statement: "$-9 \\times \\left(-\\frac{1}{9}\\right) = 1$", working: ["Product of number and reciprocal is 1: $a \\times \\frac{1}{a} = 1$."], finalAnswer: "Multiplicative inverse property" },
            { label: "(x)", statement: "$0.5(0.3 + 0.6) = 0.5(0.3) + 0.5(0.6)$", working: ["Multiplication distributed over addition: $a(b + c) = ab + ac$."], finalAnswer: "Distributive property of multiplication over addition" },
            { label: "(xi)", statement: "$\\frac{1}{2}\\left(\\frac{1}{3} - \\frac{1}{4}\\right) = \\frac{1}{2}\\left(\\frac{1}{3}\\right) - \\frac{1}{2}\\left(\\frac{1}{4}\\right)$", working: ["Multiplication distributed over subtraction: $a(b - c) = ab - ac$."], finalAnswer: "Distributive property of multiplication over subtraction" },
            { label: "(xii)", statement: "$(\\sqrt{2} + \\sqrt{3})\\sqrt{5} = \\sqrt{2}\\sqrt{5} + \\sqrt{3}\\sqrt{5}$", working: ["Right distributive property: $(a + b)c = ac + bc$."], finalAnswer: "Distributive property of multiplication over addition" }
          ],
          finalAnswer: "All 12 properties classified rigorously as per field axioms.",
          officialAnswer: "(i) Commutative w.r.t add, (ii) Associative w.r.t add, (iii) Additive inverse, (iv) Additive Identity, (v) Closure w.r.t add, (vi) Commutative w.r.t mult, (vii) Associative w.r.t mult, (viii) Closure w.r.t mult, (ix) Multiplicative Inverse, (x) Distributive over addition, (xi) Distributive over subtraction, (xii) Distributive over addition"
        },
        {
          id: "ex-1-2-q2",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.2",
          exerciseTitle: "Exercise 1.2",
          questionNumber: "Question 2",
          topic: "Ordering Properties of Real Numbers",
          statement: "Identify which property of real numbers are used in the following:\n(i) $a < b$ or $a > b$ or $a = b$\n(ii) If $9 > 7$ and $7 > 4$ then $9 > 4$\n(iii) If $\\frac{1}{2} > \\frac{1}{4}$ then $2 < 4$\n(iv) If $7 > 3$ then $\\frac{1}{7} < \\frac{1}{3}$\n(v) If $7 > 5$ then $7 + 2 > 5 + 2$\n(vi) If $5 > 4$ then $5 - 2 > 4 - 2$",
          subQuestions: [
            { label: "(i)", statement: "$a < b$ or $a > b$ or $a = b$", working: ["For any two reals, exactly one relation holds."], finalAnswer: "Trichotomy property" },
            { label: "(ii)", statement: "If $9 > 7$ and $7 > 4$ then $9 > 4$", working: ["If $a > b$ and $b > c$ then $a > c$."], finalAnswer: "Transitive property" },
            { label: "(iii)", statement: "If $\\frac{1}{2} > \\frac{1}{4}$ then $2 < 4$", working: ["Taking reciprocal reverses the inequality."], finalAnswer: "Reciprocal property" },
            { label: "(iv)", statement: "If $7 > 3$ then $\\frac{1}{7} < \\frac{1}{3}$", working: ["Taking reciprocal reverses the inequality."], finalAnswer: "Reciprocal property" },
            { label: "(v)", statement: "If $7 > 5$ then $7 + 2 > 5 + 2$", working: ["Adding same positive number to both sides preserves inequality."], finalAnswer: "Addition property of inequality" },
            { label: "(vi)", statement: "If $5 > 4$ then $5 - 2 > 4 - 2$", working: ["Subtracting same number preserves inequality."], finalAnswer: "Subtraction property of inequality" }
          ],
          finalAnswer: "(i) Trichotomy, (ii) Transitive, (iii) Reciprocal, (iv) Reciprocal, (v) Addition, (vi) Subtraction",
          officialAnswer: "(i) Trichotomy property, (ii) Transitive property, (iii) Reciprocal property, (iv) Reciprocal property, (v) Addition property, (vi) Subtraction property"
        },
        {
          id: "ex-1-2-q3",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.2",
          exerciseTitle: "Exercise 1.2",
          questionNumber: "Question 3",
          topic: "Multiplicative Inverse",
          statement: "Find the multiplicative inverse of the following:\n(i) $-\\sqrt{5}$\n(ii) $-\\frac{7}{13}$\n(iii) $5$\n(iv) $-38.7$",
          formula: "The multiplicative inverse of $a$ is $\\frac{1}{a}$ such that $a \\times \\frac{1}{a} = 1$.",
          subQuestions: [
            { label: "(i)", statement: "$-\\sqrt{5}$", working: ["$$\\text{Inverse} = \\frac{1}{-\\sqrt{5}} = -\\frac{1}{\\sqrt{5}}$$"], finalAnswer: "$-\\frac{1}{\\sqrt{5}}$" },
            { label: "(ii)", statement: "$-\\frac{7}{13}$", working: ["$$\\text{Inverse} = \\frac{1}{-\\frac{7}{13}} = -\\frac{13}{7}$$"], finalAnswer: "$-\\frac{13}{7}$" },
            { label: "(iii)", statement: "$5$", working: ["$$\\text{Inverse} = \\frac{1}{5}$$"], finalAnswer: "$\\frac{1}{5}$" },
            { label: "(iv)", statement: "$-38.7$", working: ["$$\\text{Inverse} = \\frac{1}{-38.7} = -\\frac{1}{38.7} = -\\frac{10}{387}$$"], finalAnswer: "$-\\frac{1}{38.7}$ (or $-\\frac{10}{387}$)" }
          ],
          finalAnswer: "(i) -1/√5, (ii) -13/7, (iii) 1/5, (iv) -1/38.7",
          officialAnswer: "(i) 1/(-√5), (ii) -13/7, (iii) 1/5, (iv) -1/38.7"
        },
        {
          id: "ex-1-2-q4",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.2",
          exerciseTitle: "Exercise 1.2",
          questionNumber: "Question 4",
          topic: "Additive Inverse",
          statement: "Find the additive inverse of the following:\n(i) $39$\n(ii) $-\\frac{11}{40}$\n(iii) $\\sqrt{3}$\n(iv) $\\frac{1}{2}$",
          formula: "The additive inverse of $x$ is $-x$ such that $x + (-x) = 0$.",
          subQuestions: [
            { label: "(i)", statement: "$39$", working: ["Additive inverse is $-(39) = -39$."], finalAnswer: "$-39$" },
            { label: "(ii)", statement: "$-\\frac{11}{40}$", working: ["Additive inverse is $-\\left(-\\frac{11}{40}\\right) = \\frac{11}{40}$."], finalAnswer: "$\\frac{11}{40}$" },
            { label: "(iii)", statement: "$\\sqrt{3}$", working: ["Additive inverse is $-\\sqrt{3}$."], finalAnswer: "$-\\sqrt{3}$" },
            { label: "(iv)", statement: "$\\frac{1}{2}$", working: ["Additive inverse is $-\\frac{1}{2}$."], finalAnswer: "$-\\frac{1}{2}$" }
          ],
          finalAnswer: "(i) -39, (ii) 11/40, (iii) -√3, (iv) -1/2",
          officialAnswer: "(i) -39, (ii) 11/40, (iii) -√3, (iv) -1/2"
        },
        {
          id: "ex-1-2-q5",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "1.2",
          exerciseTitle: "Exercise 1.2",
          questionNumber: "Question 5",
          topic: "Associative and Distributive Verification",
          statement: "Demonstrate the associative and distributive property of addition and multiplication for:\n(i) $4, 7 \\text{ and } 9$\n(ii) $12, 9 \\text{ and } 13$\n(iii) $-5, 20, \\frac{3}{4}$",
          formula: "Associative Addition: $a + (b + c) = (a + b) + c$\nAssociative Multiplication: $a(bc) = (ab)c$\nDistributive: $a(b + c) = ab + ac$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$4, 7, 9$",
              working: [
                "Associative Addition: $4 + (7 + 9) = 4 + 16 = 20$, and $(4 + 7) + 9 = 11 + 9 = 20$. Verified.",
                "Associative Multiplication: $4 \\times (7 \\times 9) = 4 \\times 63 = 252$, and $(4 \\times 7) \\times 9 = 28 \\times 9 = 252$. Verified.",
                "Distributive: $4 \\times (7 + 9) = 4 \\times 16 = 64$, and $(4 \\times 7) + (4 \\times 9) = 28 + 36 = 64$. Verified."
              ],
              finalAnswer: "Both Associative and Distributive properties verified: $20 = 20$ (add), $252 = 252$ (mult), $64 = 64$ (dist)."
            },
            {
              label: "(ii)",
              statement: "$12, 9, 13$",
              working: [
                "Associative Addition: $12 + (9 + 13) = 12 + 22 = 34$, and $(12 + 9) + 13 = 21 + 13 = 34$. Verified.",
                "Associative Multiplication: $12 \\times (9 \\times 13) = 12 \\times 117 = 1404$, and $(12 \\times 9) \\times 13 = 108 \\times 13 = 1404$. Verified.",
                "Distributive: $12 \\times (9 + 13) = 12 \\times 22 = 264$, and $12(9) + 12(13) = 108 + 156 = 264$. Verified."
              ],
              finalAnswer: "Verified: $34 = 34$ (add), $1404 = 1404$ (mult), $264 = 264$ (dist)."
            },
            {
              label: "(iii)",
              statement: "$-5, 20, \\frac{3}{4}$",
              working: [
                "Associative Addition: $-5 + \\left(20 + \\frac{3}{4}\\right) = -5 + \\frac{83}{4} = \\frac{-20 + 83}{4} = \\frac{63}{4} = 15.75$.",
                "And $(-5 + 20) + \\frac{3}{4} = 15 + \\frac{3}{4} = \\frac{63}{4} = 15.75$. Verified.",
                "Associative Multiplication: $-5 \\times \\left(20 \\times \\frac{3}{4}\\right) = -5 \\times 15 = -75$, and $(-5 \\times 20) \\times \\frac{3}{4} = -100 \\times \\frac{3}{4} = -75$. Verified.",
                "Distributive: $-5 \\times \\left(20 + \\frac{3}{4}\\right) = -5 \\times \\frac{83}{4} = -\\frac{415}{4}$, and $(-5 \\times 20) + \\left(-5 \\times \\frac{3}{4}\\right) = -100 - \\frac{15}{4} = -\\frac{415}{4}$. Verified."
              ],
              finalAnswer: "Verified: $15.75 = 15.75$ (add), $-75 = -75$ (mult), $-103.75 = -103.75$ (dist)."
            }
          ],
          finalAnswer: "Properties demonstrated and verified for all sets of numbers.",
          officialAnswer: "(i) 4+(7+9)=(4+7)+9, 4x(7x9)=(4x7)x9; (ii) 12+(9+13)=(12+9)+13, 12x(9x13)=(12x9)x13; (iii) -5+(20+3/4)=(-5+20)+3/4, (-5)x(20x3/4)=((-5)x20)x3/4"
        }
      ]
    },
    {
      id: "review-1",
      number: "Review 1",
      title: "Review Exercise 1",
      page: 13,
      description: "Comprehensive review of Unit 1: 10 MCQs, decimal classifications, number lines, algebraic properties, and word problems.",
      questions: [
        {
          id: "review-1-q1",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "Review 1",
          exerciseTitle: "Review Exercise 1",
          questionNumber: "Question 1 (MCQs)",
          topic: "Unit 1 Review MCQs",
          statement: "Tick (✓) the correct option for each question:\n(i) A number which can be written in form of $\\frac{p}{q}$, where $p, q \\in \\mathbb{Z}$ and $q \\neq 0$ is called:\n(ii) A number which can not be written in the form of $\\frac{p}{q}$ is called:\n(iii) $\\frac{22}{7}$ is a:\n(iv) The terminating decimal is:\n(v) The non terminating decimal is:\n(vi) Recurring decimal is:\n(vii) Non-recurring decimal is:\n(viii) $\\pi$ is a ______ decimal number:\n(ix) $2 + 5 = 5 + 2$ is ______ in real number property w.r.t addition.\n(x) The number $0$ is called:",
          subQuestions: [
            { label: "(i)", statement: "Form p/q with p,q in Z, q != 0", working: ["By definition of rational number."], finalAnswer: "(a) rational number" },
            { label: "(ii)", statement: "Cannot be written in form p/q", working: ["By definition of irrational number."], finalAnswer: "(b) irrational number" },
            { label: "(iii)", statement: "22/7 is a:", working: ["22/7 is explicitly written in p/q form (p=22, q=7 in Z)."], finalAnswer: "(a) rational number" },
            { label: "(iv)", statement: "The terminating decimal is:", working: ["3.577 has finite decimal digits."], finalAnswer: "(d) 3.577" },
            { label: "(v)", statement: "The non terminating decimal is:", working: ["6.333... has an infinite trailing sequence."], finalAnswer: "(a) 6.333..." },
            { label: "(vi)", statement: "Recurring decimal is:", working: ["2.444... repeats digit 4."], finalAnswer: "(b) 2.444..." },
            { label: "(vii)", statement: "Non-recurring decimal is:", working: ["3.12345... has non-repeating digits."], finalAnswer: "(a) 3.12345..." },
            { label: "(viii)", statement: "π is a ______ decimal number:", working: ["π = 3.14159265... is non-terminating and non-recurring."], finalAnswer: "(b) non-recurring" },
            { label: "(ix)", statement: "2 + 5 = 5 + 2 is:", working: ["Swapping order in addition."], finalAnswer: "(a) commutative property" },
            { label: "(x)", statement: "The number 0 is called:", working: ["Adding 0 leaves any real number unchanged."], finalAnswer: "(c) additive identity" }
          ],
          finalAnswer: "(i) a, (ii) b, (iii) a [key note: text b in errata, but 22/7 is rational], (iv) d (3.577), (v) a (6.333...), (vi) b (2.444...), (vii) a (3.12345...), (viii) b, (ix) a, (x) c"
        },
        {
          id: "review-1-q8",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "Review 1",
          exerciseTitle: "Review Exercise 1",
          questionNumber: "Question 8",
          topic: "Word Problem - Almond Mass",
          statement: "Amjad bought $6$ packets of almonds. If the mass of one packet is $5\\frac{1}{9}\\text{ kg}$, then find the total mass of $6$ packet almonds.",
          given: "Number of packets $= 6$\nMass of one packet $= 5\\frac{1}{9}\\text{ kg} = \\frac{46}{9}\\text{ kg}$",
          formula: "$$\\text{Total mass} = \\text{Number of packets} \\times \\text{Mass of one packet}$$",
          workingSteps: [
            "$$5\\frac{1}{9} = \\frac{5 \\times 9 + 1}{9} = \\frac{46}{9}\\text{ kg}$$",
            "$$\\text{Total mass} = 6 \\times \\frac{46}{9} = \\frac{2 \\times 46}{3} = \\frac{92}{3}\\text{ kg}$$",
            "$$\\frac{92}{3} = 30\\frac{2}{3}\\text{ kg} \\approx 30.67\\text{ kg}$$"
          ],
          finalAnswer: "Total mass = 30 2/3 kg",
          officialAnswer: "30 2/3 kg"
        },
        {
          id: "review-1-q9",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "Review 1",
          exerciseTitle: "Review Exercise 1",
          questionNumber: "Question 9",
          topic: "Word Problem - Distance",
          statement: "Naseem covered a distance of $25.75\\text{ km}$ by bike to visit Shahban Ziarat, on their way back, they choose another route which is $21.25\\text{ km}$. Find the total distance.",
          given: "Distance going $= 25.75\\text{ km}$\nDistance returning $= 21.25\\text{ km}$",
          formula: "$$\\text{Total distance} = \\text{Going distance} + \\text{Return distance}$$",
          workingSteps: [
            "$$\\text{Total distance} = 25.75 + 21.25$$",
            "$$25.75 + 21.25 = 47.00\\text{ km}$$"
          ],
          finalAnswer: "Total distance = 47 km",
          officialAnswer: "47km"
        },
        {
          id: "review-1-q10",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "Review 1",
          exerciseTitle: "Review Exercise 1",
          questionNumber: "Question 10",
          topic: "Word Problem - Division",
          statement: "Hameeda bought $3.6\\text{ kg}$ of cooking oil. She used it equally to make $3$ different functions. How much oil did she use in each function?",
          given: "Total oil $= 3.6\\text{ kg}$\nNumber of functions $= 3$",
          formula: "$$\\text{Oil per function} = \\frac{\\text{Total oil}}{\\text{Number of functions}}$$",
          workingSteps: [
            "$$\\text{Oil per function} = \\frac{3.6}{3} = 1.2\\text{ kg}$$"
          ],
          finalAnswer: "Oil used in each function = 1.2 kg",
          officialAnswer: "1.2kg"
        },
        {
          id: "review-1-q11",
          chapterId: 1,
          chapterNumber: 1,
          chapterTitle: "Real Numbers",
          exerciseId: "Review 1",
          exerciseTitle: "Review Exercise 1",
          questionNumber: "Question 11",
          topic: "Word Problem - Honey",
          statement: "Sahira has $\\frac{1}{2}\\text{ kg}$ honey and uses $\\frac{1}{8}\\text{ kg}$ honey for treatment thrice in a day. How much honey did she use in a day?",
          given: "Dose per time $= \\frac{1}{8}\\text{ kg}$\nFrequency $= 3\\text{ times a day}$",
          formula: "$$\\text{Honey used in a day} = 3 \\times \\frac{1}{8}\\text{ kg}$$",
          workingSteps: [
            "$$\\text{Honey used in a day} = 3 \\times \\frac{1}{8} = \\frac{3}{8}\\text{ kg}$$"
          ],
          finalAnswer: "Honey used in a day = 3/8 kg",
          officialAnswer: "3/8 kg"
        }
      ]
    }
  ]
};
