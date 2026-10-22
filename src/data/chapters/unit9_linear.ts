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
          id: "ex-9-1-q2",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 2",
          topic: "Graphing Linear Equations",
          statement: "Draw the graph of each of the following:\n(i) $3x + y = 6$\n(ii) $x + 2y = 4$\n(iii) $6x - 3y = -12$\n(iv) $x - y = -3$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$3x + y = 6 \\implies y = 6 - 3x$",
              working: ["For $x = 0, y = 6$; for $x = 1, y = 3$; for $x = 2, y = 0$. Plot points $(0, 6), (1, 3), (2, 0)$ and connect with a straight line."],
              finalAnswer: "Straight line through (0, 6), (1, 3), (2, 0)"
            },
            {
              label: "(ii)",
              statement: "$x + 2y = 4 \\implies 2y = 4 - x \\implies y = 2 - \\frac{x}{2}$",
              working: ["For $x = 0, y = 2$; for $x = 2, y = 1$; for $x = 4, y = 0$. Plot points $(0, 2), (2, 1), (4, 0)$."],
              finalAnswer: "Straight line through (0, 2), (2, 1), (4, 0)"
            },
            {
              label: "(iii)",
              statement: "$6x - 3y = -12 \\implies 3y = 6x + 12 \\implies y = 2x + 4$",
              working: ["For $x = 0, y = 4$; for $x = -2, y = 0$; for $x = 1, y = 6$. Plot points $(0, 4), (-2, 0), (1, 6)$."],
              finalAnswer: "Straight line through (0, 4), (-2, 0), (1, 6)"
            },
            {
              label: "(iv)",
              statement: "$x - y = -3 \\implies y = x + 3$",
              working: ["For $x = 0, y = 3$; for $x = -3, y = 0$; for $x = 1, y = 4$. Plot points $(0, 3), (-3, 0), (1, 4)$."],
              finalAnswer: "Straight line through (0, 3), (-3, 0), (1, 4)"
            }
          ],
          finalAnswer: "All four linear equations graphed on Cartesian coordinate planes.",
          officialAnswer: "Matches Textbook Graphs on page 228."
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
              working: ["$$m = \\frac{-3 - (-7)}{5 - 8} = \\frac{4}{-3} = -\\frac{4}{3}$$"],
              finalAnswer: "$m = -\\frac{4}{3}$"
            },
            {
              label: "(ii)",
              statement: "$(-5, 9)$ and $(5, 11)$",
              working: ["$$m = \\frac{11 - 9}{5 - (-5)} = \\frac{2}{10} = \\frac{1}{5}$$"],
              finalAnswer: "$m = \\frac{1}{5}$"
            },
            {
              label: "(iii)",
              statement: "$(-8, -4)$ and $(-4, -9)$",
              working: ["$$m = \\frac{-9 - (-4)}{-4 - (-8)} = \\frac{-5}{4} = -\\frac{5}{4}$$"],
              finalAnswer: "$m = -\\frac{5}{4}$"
            },
            {
              label: "(iv)",
              statement: "$(3, 4)$ and $(6, 10)$",
              working: ["$$m = \\frac{10 - 4}{6 - 3} = \\frac{6}{3} = 2$$"],
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
          id: "ex-9-1-q5",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 5",
          topic: "Evaluate Variable x",
          statement: "Find the value of $x$, in the given equation $5x - 2y = 7$, when $y = 2$.",
          given: "Equation: $5x - 2y = 7$, $y = 2$",
          workingSteps: [
            "Substitute $y = 2$ into the equation:",
            "$$5x - 2(2) = 7$$",
            "$$5x - 4 = 7$$",
            "$$5x = 7 + 4 = 11$$",
            "$$x = \\frac{11}{5} = 2.2$$"
          ],
          finalAnswer: "x = 11/5 (2.2)",
          officialAnswer: "x = 11/5"
        },
        {
          id: "ex-9-1-q6",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 6",
          topic: "Evaluate Variable y",
          statement: "Find the value of $y$, in the given equation $3x + 2y = 4$, when $x = 3$.",
          given: "Equation: $3x + 2y = 4$, $x = 3$",
          workingSteps: [
            "Substitute $x = 3$ into the equation:",
            "$$3(3) + 2y = 4$$",
            "$$9 + 2y = 4$$",
            "$$2y = 4 - 9 = -5$$",
            "$$y = -\\frac{5}{2} = -2.5$$"
          ],
          finalAnswer: "y = -5/2 (-2.5)",
          officialAnswer: "y = -5/2"
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
        },
        {
          id: "ex-9-1-q8",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.1",
          exerciseTitle: "Exercise 9.1",
          questionNumber: "Question 8",
          topic: "Horizontal and Vertical Lines",
          statement: "Draw the following horizontal and vertical line of the following:\n(i) $y = -5$\n(ii) $y = 6$\n(iii) $x = -4$\n(iv) $x = 2$",
          subQuestions: [
            { label: "(i)", statement: "$y = -5$", working: ["Horizontal line parallel to the x-axis passing through $(0, -5)$."], finalAnswer: "Horizontal line at y = -5" },
            { label: "(ii)", statement: "$y = 6$", working: ["Horizontal line parallel to the x-axis passing through $(0, 6)$."], finalAnswer: "Horizontal line at y = 6" },
            { label: "(iii)", statement: "$x = -4$", working: ["Vertical line parallel to the y-axis passing through $(-4, 0)$."], finalAnswer: "Vertical line at x = -4" },
            { label: "(iv)", statement: "$x = 2$", working: ["Vertical line parallel to the y-axis passing through $(2, 0)$."], finalAnswer: "Vertical line at x = 2" }
          ],
          finalAnswer: "(i) Horizontal line y = -5, (ii) Horizontal line y = 6, (iii) Vertical line x = -4, (iv) Vertical line x = 2",
          officialAnswer: "Plotted on Cartesian plane."
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
          id: "ex-9-2-q1",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.2",
          exerciseTitle: "Exercise 9.2",
          questionNumber: "Question 1",
          topic: "Elimination Method",
          statement: "Find the solution set by using elimination method:\n(i) $5y = 8 + x$ and $x - 2y = 7$\n(ii) $2y = 5 + x$ and $2y + 3x = -3$\n(iii) $x + 3y = 22$ and $3x + 4y = 15$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$5y = 8 + x \\implies -x + 5y = 8$ and $x - 2y = 7$",
              working: [
                "Adding both equations eliminates $x$:",
                "$$(-x + 5y) + (x - 2y) = 8 + 7$$",
                "$$3y = 15 \\implies y = 5$$",
                "Substitute $y = 5$ into $x - 2y = 7$:",
                "$$x - 2(5) = 7 \\implies x - 10 = 7 \\implies x = 17$$"
              ],
              finalAnswer: "x = 17, y = 5 (Solution: {(17, 5)})"
            },
            {
              label: "(ii)",
              statement: "$2y = 5 + x \\implies -x + 2y = 5$ and $3x + 2y = -3$",
              working: [
                "Subtract first equation from second:",
                "$$(3x + 2y) - (-x + 2y) = -3 - 5$$",
                "$$4x = -8 \\implies x = -2$$",
                "Substitute $x = -2$ into $2y = 5 + x$:",
                "$$2y = 5 - 2 = 3 \\implies y = \\frac{3}{2} = 1.5$$"
              ],
              finalAnswer: "x = -2, y = 3/2"
            },
            {
              label: "(iii)",
              statement: "$x + 3y = 22$ and $3x + 4y = 15$",
              working: [
                "Multiply first equation by 3: $$3x + 9y = 66$$",
                "Subtract second equation: $$(3x + 9y) - (3x + 4y) = 66 - 15$$",
                "$$5y = 51 \\implies y = \\frac{51}{5} = 10\\frac{1}{5}$$",
                "Substitute $y$: $$x = 22 - 3\\left(\\frac{51}{5}\\right) = \\frac{110 - 153}{5} = -\\frac{43}{5} = -8\\frac{3}{5}$$"
              ],
              finalAnswer: "x = -43/5, y = 51/5 (Matches Textbook Answer Key page 229: x = -43/5, y = 51/5)"
            }
          ],
          finalAnswer: "(i) x=17, y=5 | (ii) x=-2, y=3/2 | (iii) x=-43/5, y=51/5",
          officialAnswer: "(i) x=17, y=5, (ii) x=-2, y=3/2, (iii) x=-43/5, y=51/5"
        },
        {
          id: "ex-9-2-q2",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.2",
          exerciseTitle: "Exercise 9.2",
          questionNumber: "Question 2",
          topic: "Substitution Method",
          statement: "Find the solution set by using substitution method:\n(i) $2x + 3y = -15$ and $3x + y = 8$\n(ii) $x + 4y = -2$ and $4x + 3y = 11$\n(iii) $5x - 2y = 17$ and $3x + 4y = 10$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$2x + 3y = -15$ and $3x + y = 8$",
              working: [
                "From second equation: $$y = 8 - 3x$$",
                "Substitute into first equation:",
                "$$2x + 3(8 - 3x) = -15$$",
                "$$2x + 24 - 9x = -15 \\implies -7x = -39 \\implies x = \\frac{39}{7}$$",
                "$$y = 8 - 3\\left(\\frac{39}{7}\\right) = \\frac{56 - 117}{7} = -\\frac{61}{7}$$"
              ],
              finalAnswer: "x = 39/7, y = -61/7 (Matches Textbook Key on page 229)"
            },
            {
              label: "(ii)",
              statement: "$x + 4y = -2$ and $4x + 3y = 11$",
              working: [
                "From first equation: $$x = -2 - 4y$$",
                "Substitute into second equation:",
                "$$4(-2 - 4y) + 3y = 11$$",
                "$$-8 - 16y + 3y = 11 \\implies -13y = 19 \\implies y = -\\frac{19}{13}$$",
                "$$x = -2 - 4\\left(-\\frac{19}{13}\\right) = \\frac{-26 + 76}{13} = \\frac{50}{13}$$"
              ],
              finalAnswer: "x = 50/13, y = -19/13"
            },
            {
              label: "(iii)",
              statement: "$5x - 2y = 17$ and $3x + 4y = 10$",
              working: [
                "From first equation: $$2y = 5x - 17 \\implies y = \\frac{5x - 17}{2}$$",
                "Substitute into second equation:",
                "$$3x + 4\\left(\\frac{5x - 17}{2}\\right) = 10$$",
                "$$3x + 2(5x - 17) = 10 \\implies 3x + 10x - 34 = 10$$",
                "$$13x = 44 \\implies x = \\frac{44}{13} = 3\\frac{5}{13}$$",
                "$$y = \\frac{5(44/13) - 17}{2} = \\frac{220 - 221}{26} = -\\frac{1}{26}$$"
              ],
              finalAnswer: "x = 44/13, y = -1/26 (Matches Textbook Key: x = 44/13, y = -1/26)"
            }
          ],
          finalAnswer: "(i) x=39/7, y=-61/7 | (ii) x=50/13, y=-19/13 | (iii) x=44/13, y=-1/26",
          officialAnswer: "(i) x=39/7, y=-61/7, (iii) x=44/13, y=-1/26"
        },
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
          statement: "The sum of two friends Eidi is $600$ and difference of twice of one Eidi and $4$ times of second Eidi is $0$. Find each Eidi.",
          given: "$x + y = 600 \\quad \\text{--- (1)}$\n$2x - 4y = 0 \\implies x = 2y \\quad \\text{--- (2)}$",
          formula: "Substitute $x = 2y$ into (1): $2y + y = 600$",
          workingSteps: [
            "$$x + y = 600$$",
            "From equation (2): $x = 2y$",
            "$$2y + y = 600 \\implies 3y = 600 \\implies y = 200$$",
            "$$x = 2(200) = 400$$",
            "*(Textbook variation gives $x = 375, y = 225$ as printed in official answer key)*"
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
        },
        {
          id: "ex-9-3-q2",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.3",
          exerciseTitle: "Exercise 9.3",
          questionNumber: "Question 2",
          topic: "Writing Inequality from Number Line",
          statement: "Write the equations of inequality for the given number lines:\n(i) Ray from 2 to the right with solid circle\n(ii) Ray from -3 to the left with open circle\n(iii) Ray from -3 to the left\n(iv) Ray from 0 to the left with solid circle\n(v) Ray from -2 to the right with solid circle",
          subQuestions: [
            { label: "(i)", statement: "Ray starting from 2 going rightwards", working: ["Solid dot at 2 extending rightwards."], finalAnswer: "$x \\ge 2$" },
            { label: "(ii)", statement: "Ray starting from -3 going leftwards", working: ["Open dot at -3 extending leftwards."], finalAnswer: "$x < -3$" },
            { label: "(iii)", statement: "Ray starting from -3 going leftwards", working: ["Open dot at -3 extending leftwards."], finalAnswer: "$x < -3$" },
            { label: "(iv)", statement: "Ray starting from 0 going leftwards", working: ["Solid dot at 0 extending leftwards."], finalAnswer: "$x \\le 0$" },
            { label: "(v)", statement: "Ray starting from -2 going rightwards", working: ["Solid dot at -2 extending rightwards."], finalAnswer: "$x \\ge -2$" }
          ],
          finalAnswer: "(i) x >= 2, (ii) x < -3, (iii) x < -3, (iv) x <= 0, (v) x >= -2",
          officialAnswer: "(i) x ≥ 2 (ii) x < -3 (iii) x < -3 (iv) x ≤ 0 (v) x ≥ -2 (Textbook page 231)"
        },
        {
          id: "ex-9-3-q3",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.3",
          exerciseTitle: "Exercise 9.3",
          questionNumber: "Question 3",
          topic: "Solving Linear Inequalities",
          statement: "Solve the following inequalities:\n(i) $3x + 1 > 7$\n(ii) $3x - 4 < 5$\n(iii) $-4x > 8$\n(iv) $-2x < 8$",
          subQuestions: [
            { label: "(i)", statement: "$3x + 1 > 7$", working: ["$$3x > 7 - 1 = 6 \\implies x > 2$$"], finalAnswer: "$x > 2$" },
            { label: "(ii)", statement: "$3x - 4 < 5$", working: ["$$3x < 5 + 4 = 9 \\implies x < 3$$ (Textbook Key: $x > 3$)"], finalAnswer: "$x < 3$ (Textbook Key: $x > 3$)" },
            { label: "(iii)", statement: "$-4x > 8$", working: ["Divide by $-4$: $$x < -2$$"], finalAnswer: "$x < -2$" },
            { label: "(iv)", statement: "$-2x < 8$", working: ["Divide by $-2$: $$x > -4$$"], finalAnswer: "$x > -4$" }
          ],
          finalAnswer: "(i) x > 2, (ii) x < 3 (key: x > 3), (iii) x < -2, (iv) x > -4",
          officialAnswer: "(i) x > 2 (ii) x > 3 (iii) x < -2 (iv) x > -4"
        },
        {
          id: "ex-9-3-q4",
          chapterId: 9,
          chapterNumber: 9,
          chapterTitle: "Linear Equations and Inequalities",
          exerciseId: "9.3",
          exerciseTitle: "Exercise 9.3",
          questionNumber: "Question 4",
          topic: "Solve and Represent on Number Line",
          statement: "Solve and represent the solution on number line:\n(i) $x + 1 > 3$\n(ii) $x - 5 < 1$\n(iii) $-4x > 12$\n(iv) $-5x + 1 > 9$",
          subQuestions: [
            { label: "(i)", statement: "$x + 1 > 3$", working: ["$$x > 3 - 1 \\implies x > 2$$"], finalAnswer: "$x > 2$" },
            { label: "(ii)", statement: "$x - 5 < 1$", working: ["$$x < 1 + 5 \\implies x < 6$$"], finalAnswer: "$x < 6$" },
            { label: "(iii)", statement: "$-4x > 12$", working: ["Divide by $-4$: $$x < \\frac{12}{-4} \\implies x < -3$$"], finalAnswer: "$x < -3$" },
            { label: "(iv)", statement: "$-5x + 1 > 9$", working: ["$$-5x > 9 - 1 = 8 \\implies x < -\\frac{8}{5} = -1.6$$"], finalAnswer: "$x < -1.6$" }
          ],
          finalAnswer: "(i) x > 2, (ii) x < 6, (iii) x < -3, (iv) x < -1.6",
          officialAnswer: "Matches number lines plotted on page 231.",
          diagramType: "number-line"
        }
      ]
    }
  ]
};
