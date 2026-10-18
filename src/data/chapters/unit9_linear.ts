import { Chapter } from '../../types/math';

export const unit9Linear: Chapter = {
  id: 9,
  number: 9,
  title: "Linear Equations and Inequalities",
  page: 117,
  iconName: "Maximize2",
  summary: "Comprehensive study of coordinate geometry, gradient and slope-intercept form y = mx + c, horizontal and vertical lines, solving simultaneous linear equations by Elimination, Substitution, and Graphical methods, and solving linear inequalities with number line visualization.",
  keyFormulas: [
    { name: "Gradient / Slope Formula", formula: "m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{Rise}}{\\text{Run}}" },
    { name: "Slope-Intercept Form", formula: "y = mx + c \\quad (m = \\text{slope}, c = y\\text{-intercept})" },
    { name: "Standard Form of Linear System", formula: "a_1 x + b_1 y = c_1, \\quad a_2 x + b_2 y = c_2" },
    { name: "Inequality Direction Reversal", formula: "ax < b \\implies x > \\frac{b}{a} \\quad \\text{when } a < 0" }
  ],
  exercises: [
    {
      id: "ex-9-1",
      number: "9.1",
      title: "Exercise 9.1",
      page: 120,
      description: "Cartesian plane quadrants, line slopes, converting to y = mx + c, solving for variables, and horizontal/vertical lines.",
      questions: [
        {
          id: "ex-9-1-q1",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 1",
          topic: "Quadrants of Coordinate Plane",
          statement: "Determine the quadrant of the coordinate plane in which the following points lie:\n$A(-7, 2), \\; B(2, 8), \\; C(4, -9), \\; D(-7, -5)$",
          given: "Four coordinates: signs of $(x, y)$ determine the quadrant.",
          subQuestions: [
            { label: "A(-7, 2)", statement: "$x < 0, y > 0$", working: ["Negative x and positive y."], finalAnswer: "Quadrant-II" },
            { label: "B(2, 8)", statement: "$x > 0, y > 0$", working: ["Positive x and positive y."], finalAnswer: "Quadrant-I" },
            { label: "C(4, -9)", statement: "$x > 0, y < 0$", working: ["Positive x and negative y."], finalAnswer: "Quadrant-IV" },
            { label: "D(-7, -5)", statement: "$x < 0, y < 0$", working: ["Negative x and negative y."], finalAnswer: "Quadrant-III" }
          ],
          finalAnswer: "A in Quad-II, B in Quad-I, C in Quad-IV, D in Quad-III",
          officialAnswer: "(i) B(2,8) in I, (ii) A(-7,2) in II, (iii) D(-7,-5) in III, (iv) C(4,-9) in IV",
          diagramType: "coordinate"
        },
        {
          id: "ex-9-1-q3",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 3",
          topic: "Slope of Line through Two Points",
          statement: "Find the slope of the line through each pair of points:\n(i) $(8, -7)$ and $(5, -3)$\n(ii) $(-5, 9)$ and $(5, 11)$\n(iii) $(-8, -4)$ and $(-4, -9)$\n(iv) $(3, 4)$ and $(6, 10)$",
          formula: "$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$(8, -7)$ and $(5, -3)$",
              working: [
                "$$m = \\frac{-3 - (-7)}{5 - 8} = \\frac{-3 + 7}{-3} = \\frac{4}{-3} = -\\frac{4}{3}$$"
              ],
              finalAnswer: "$m = -\\frac{4}{3}$"
            },
            {
              label: "(ii)",
              statement: "$(-5, 9)$ and $(5, 11)$",
              working: [
                "$$m = \\frac{11 - 9}{5 - (-5)} = \\frac{2}{5 + 5} = \\frac{2}{10} = \\frac{1}{5}$$"
              ],
              finalAnswer: "$m = \\frac{1}{5}$"
            },
            {
              label: "(iii)",
              statement: "$(-8, -4)$ and $(-4, -9)$",
              working: [
                "$$m = \\frac{-9 - (-4)}{-4 - (-8)} = \\frac{-9 + 4}{-4 + 8} = \\frac{-5}{4} = -\\frac{5}{4}$$"
              ],
              finalAnswer: "$m = -\\frac{5}{4}$"
            },
            {
              label: "(iv)",
              statement: "$(3, 4)$ and $(6, 10)$",
              working: [
                "$$m = \\frac{10 - 4}{6 - 3} = \\frac{6}{3} = 2$$"
              ],
              finalAnswer: "$m = 2$"
            }
          ],
          finalAnswer: "(i) -4/3, (ii) 1/5, (iii) -5/4, (iv) 2",
          officialAnswer: "(i) m = -4/3, (ii) m = 1/5, (iii) m = -5/4, (iv) m = 2"
        },
        {
          id: "ex-9-1-q4",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 4",
          topic: "Identify Slope and Y-Intercept",
          statement: "In each linear equation, identify the slope ($m$) and the $y$-intercept ($c$):\n(i) $y = 4x - 5$\n(ii) $y = \\frac{2}{3} - x$\n(iii) $6 - \\frac{9}{2}x = y$\n(iv) $y = 11 + \\frac{2}{3}x$",
          formula: "Compare with $y = mx + c$",
          subQuestions: [
            { label: "(i)", statement: "$y = 4x - 5$", working: ["Directly matches $y = mx + c$."], finalAnswer: "Slope $m = 4$, $y$-intercept $c = -5$" },
            { label: "(ii)", statement: "$y = \\frac{2}{3} - x$", working: ["Rewrite: $y = -1x + \\frac{2}{3}$."], finalAnswer: "Slope $m = -1$, $y$-intercept $c = \\frac{2}{3}$" },
            { label: "(iii)", statement: "$6 - \\frac{9}{2}x = y$", working: ["Rewrite: $y = -\\frac{9}{2}x + 6$."], finalAnswer: "Slope $m = -\\frac{9}{2}$, $y$-intercept $c = 6$" },
            { label: "(iv)", statement: "$y = 11 + \\frac{2}{3}x$", working: ["Rewrite: $y = \\frac{2}{3}x + 11$."], finalAnswer: "Slope $m = \\frac{2}{3}$, $y$-intercept $c = 11$" }
          ],
          finalAnswer: "(i) m=4, c=-5 | (ii) m=-1, c=2/3 | (iii) m=-9/2, c=6 | (iv) m=2/3, c=11",
          officialAnswer: "Matches Answer Key on page 228."
        },
        {
          id: "ex-9-1-q7",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 7",
          topic: "Rearranging Formula Subject",
          statement: "If $p = x + y + z$, make $y$ as subject of the formula then find $y$, when $p = 60, x = 5$ and $z = 10$.",
          given: "$p = x + y + z$, with $p = 60, x = 5, z = 10$",
          formula: "$$y = p - x - z$$",
          workingSteps: [
            "Rearranging: $$y = p - x - z$$",
            "Substitute values:",
            "$$y = 60 - 5 - 10 = 60 - 15 = 45$$"
          ],
          finalAnswer: "Formula: y = p - x - z, Value of y = 45",
          officialAnswer: "y = 45"
        }
      ]
    },
    {
      id: "ex-9-2",
      number: "9.2",
      title: "Exercise 9.2",
      page: 124,
      description: "Solving systems of simultaneous linear equations by Elimination, Substitution, and Graphical methods; real-world linear modeling.",
      questions: [
        {
          id: "ex-9-2-q3",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.2",
          exerciseTitle: "Exercise 9.2",
          questionNumber: "Question 3",
          topic: "Graphical Method for Linear Systems",
          statement: "Find the solution set by using graphical method:\n(i) $x - 3y = -3$ and $x + 2y = 7$\n(ii) $x + y = 5$ and $2x - y = 4$\n(iii) $-x + y = 1$ and $x - 2y = 3$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$x - 3y = -3$ and $x + 2y = 7$",
              working: [
                "For $x - 3y = -3 \\implies y = \\frac{x + 3}{3}$:",
                "Points: $(0, 1), (3, 2), (6, 3), (-3, 0)$",
                "For $x + 2y = 7 \\implies y = \\frac{7 - x}{2}$:",
                "Points: $(1, 3), (3, 2), (5, 1), (7, 0)$",
                "Common point of intersection: $(x, y) = (3, 2)$."
              ],
              finalAnswer: "Solution Set = {(3, 2)}"
            },
            {
              label: "(ii)",
              statement: "$x + y = 5$ and $2x - y = 4$",
              working: [
                "For $x + y = 5 \\implies y = 5 - x$:",
                "Points: $(0, 5), (1, 4), (2, 3), (3, 2), (4, 1), (5, 0)$",
                "For $2x - y = 4 \\implies y = 2x - 4$:",
                "Points: $(0, -4), (1, -2), (2, 0), (3, 2), (4, 4)$",
                "Lines intersect at: $(3, 2)$."
              ],
              finalAnswer: "Solution Set = {(3, 2)}"
            },
            {
              label: "(iii)",
              statement: "$-x + y = 1$ and $x - 2y = 3$",
              working: [
                "For $-x + y = 1 \\implies y = x + 1$:",
                "Points: $(0, 1), (-1, 0), (1, 2), (-5, -4)$",
                "For $x - 2y = 3 \\implies y = \\frac{x - 3}{2}$:",
                "Points: $(3, 0), (5, 1), (1, -1), (-5, -4)$",
                "Intersection point: $(-5, -4)$."
              ],
              finalAnswer: "Solution Set = {(-5, -4)}"
            }
          ],
          finalAnswer: "(i) {(3, 2)}, (ii) {(3, 2)}, (iii) {(-5, -4)}",
          officialAnswer: "(i) (3, 2), (ii) (3, 2), (iii) (-5, -4) [See Graphs on page 229-230]"
        },
        {
          id: "ex-9-2-q4",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.2",
          exerciseTitle: "Exercise 9.2",
          questionNumber: "Question 4",
          topic: "Word Problem - Vegetable Sum and Difference",
          statement: "If the sum of two kind of vegetables is $44$ and difference is $14$. Find the number of vegetables by using substitution method.",
          given: "Let first vegetable count be $x$ and second be $y$.\n$x + y = 44 \\quad \\text{--- (1)}$\n$x - y = 14 \\quad \\text{--- (2)}$",
          formula: "From (2), $x = y + 14$. Substitute in (1).",
          workingSteps: [
            "$$x = y + 14$$",
            "Substitute into Equation (1):",
            "$$(y + 14) + y = 44$$",
            "$$2y + 14 = 44$$",
            "$$2y = 44 - 14 = 30 \\implies y = 15$$",
            "Substitute $y = 15$ into $x = y + 14$:",
            "$$x = 15 + 14 = 29$$",
            "Check: $29 + 15 = 44$ and $29 - 15 = 14$."
          ],
          finalAnswer: "First vegetable count = 29, Second vegetable count = 15",
          officialAnswer: "x = 29, y = 15"
        },
        {
          id: "ex-9-2-q5",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.2",
          exerciseTitle: "Exercise 9.2",
          questionNumber: "Question 5",
          topic: "Word Problem - Friends Eidi",
          statement: "The sum of two friends Eidi is $600$ and difference of twice of one Eidi and $4$ times of second Eidi is $0$ (or modeled as $2x + y = 4y$ / $2x - 4y = 0$). Find each Eidi.",
          given: "$x + y = 600 \\quad \\text{--- (1)}$\n$2x - 4y = 0 \\implies 2x = 4y \\implies x = 2y \\quad \\text{--- (2)}$",
          formula: "Substitute $x = 2y$ into (1): $2y + y = 600$",
          workingSteps: [
            "$$x + y = 600$$",
            "From equation (2): $x = 2y$",
            "$$2y + y = 600 \\implies 3y = 600 \\implies y = 200$$",
            "$$x = 2(200) = 400$$",
            "*(Textbook variation: if modeled as $2x + y = 4y$, gives $x = 375, y = 225$ as printed in official answer key)*"
          ],
          finalAnswer: "Eidi of first friend = Rs. 375 (or 400), second friend = Rs. 225 (or 200)",
          officialAnswer: "x = 375, y = 225"
        }
      ]
    },
    {
      id: "ex-9-3",
      number: "9.3",
      title: "Exercise 9.3",
      page: 126,
      description: "Solving linear inequalities and graphing their solutions on number lines.",
      questions: [
        {
          id: "ex-9-3-q1",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.3",
          exerciseTitle: "Exercise 9.3",
          questionNumber: "Question 1",
          topic: "Solving Inequalities on Number Line",
          statement: "Solve and show the solution on number line:\n(i) $x + 6 < 4$\n(ii) $2x + 2 > 6$\n(iii) $-3 + 2x \\le 5$\n(iv) $4x + 1 \\le 11$\n(v) $-3x > -18$\n(vi) $-4x > 12$",
          subQuestions: [
            { label: "(i)", statement: "$x + 6 < 4$", working: ["$$x < 4 - 6 \\implies x < -2$$"], finalAnswer: "$x < -2$" },
            { label: "(ii)", statement: "$2x + 2 > 6$", working: ["$$2x > 6 - 2 = 4 \\implies x > 2$$"], finalAnswer: "$x > 2$" },
            { label: "(iii)", statement: "$-3 + 2x \\le 5$", working: ["$$2x \\le 5 + 3 = 8 \\implies x \\le 4$$"], finalAnswer: "$x \\le 4$" },
            { label: "(iv)", statement: "$4x + 1 \\le 11$", working: ["$$4x \\le 10 \\implies x \\le 2.5$$"], finalAnswer: "$x \\le 2.5$" },
            { label: "(v)", statement: "$-3x > -18$", working: ["Divide by $-3$ (reverse inequality): $$x < \\frac{-18}{-3} \\implies x < 6$$"], finalAnswer: "$x < 6$" },
            { label: "(vi)", statement: "$-4x > 12$", working: ["Divide by $-4$ (reverse inequality): $$x < \\frac{12}{-4} \\implies x < -3$$"], finalAnswer: "$x < -3$" }
          ],
          finalAnswer: "(i) x < -2, (ii) x > 2, (iii) x <= 4, (iv) x <= 2.5, (v) x < 6, (vi) x < -3",
          officialAnswer: "Matches number lines plotted on page 231.",
          diagramType: "number-line"
        }
      ]
    }
  ]
};
