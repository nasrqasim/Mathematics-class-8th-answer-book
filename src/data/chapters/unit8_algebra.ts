import { Chapter } from '../../types/math';

export const unit8Algebra: Chapter = {
  id: 8,
  number: 8,
  title: "Expansion and Factorization",
  page: 94,
  iconName: "Code",
  summary: "Polynomial algebra: open/closed sentences, degrees and types of polynomials, operations (addition, subtraction, multiplication, division), algebraic identities (a+b)², (a-b)², a²-b², (a+b)³, (a-b)³, algebraic factorization techniques (common terms, grouping, middle-term breaking), and laws of exponents.",
  keyFormulas: [
    { name: "Square of Sum", formula: "(a + b)^2 = a^2 + 2ab + b^2" },
    { name: "Square of Difference", formula: "(a - b)^2 = a^2 - 2ab + b^2" },
    { name: "Difference of Two Squares", formula: "a^2 - b^2 = (a - b)(a + b)" },
    { name: "Cube of Sum", formula: "(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3 = a^3 + b^3 + 3ab(a + b)" },
    { name: "Cube of Difference", formula: "(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3 = a^3 - b^3 - 3ab(a - b)" },
    { name: "Laws of Exponents", formula: "x^m \\cdot x^n = x^{m+n}, \\quad \\frac{x^m}{x^n} = x^{m-n}, \\quad (x^m)^n = x^{mn}" }
  ],
  exercises: [
    {
      id: "ex-8-1",
      number: "8.1",
      title: "Exercise 8.1",
      page: 98,
      description: "Classifying open and closed mathematical sentences, equations vs inequalities, degree and classification of polynomials.",
      questions: [
        {
          id: "ex-8-1-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.1",
          exerciseTitle: "Exercise 8.1",
          questionNumber: "Question 3",
          topic: "Degree of Polynomials",
          statement: "Write the degree of polynomial of each of the following:\n(i) $4x - 7$\n(ii) $3x^2 - 5y$\n(iii) $x^4 - x^2 + 6$\n(iv) $x^2y^2 - 2xy$\n(v) $8m - 6$\n(vi) $3x^2 - 4x + 7$",
          subQuestions: [
            { label: "(i)", statement: "$4x - 7$", working: ["Highest exponent of variable $x$ is 1."], finalAnswer: "Degree = 1" },
            { label: "(ii)", statement: "$3x^2 - 5y$", working: ["Highest degree term is $3x^2$ with power 2."], finalAnswer: "Degree = 2" },
            { label: "(iii)", statement: "$x^4 - x^2 + 6$", working: ["Highest exponent of $x$ is 4."], finalAnswer: "Degree = 4" },
            { label: "(iv)", statement: "$x^2y^2 - 2xy$", working: ["Sum of powers in term $x^2y^2$ is $2 + 2 = 4$."], finalAnswer: "Degree = 4" },
            { label: "(v)", statement: "$8m - 6$", working: ["Exponent of $m$ is 1."], finalAnswer: "Degree = 1" },
            { label: "(vi)", statement: "$3x^2 - 4x + 7$", working: ["Highest power is 2."], finalAnswer: "Degree = 2" }
          ],
          finalAnswer: "(i) 1, (ii) 2, (iii) 4, (iv) 4, (v) 1, (vi) 2",
          officialAnswer: "(i) 1, (ii) 2, (iii) 4, (iv) 4, (v) 1, (vi) 2"
        },
        {
          id: "ex-8-1-q4",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.1",
          exerciseTitle: "Exercise 8.1",
          questionNumber: "Question 4",
          topic: "Classification by Degree",
          statement: "Separate linear, quadratic, cubic and biquadratic polynomials:\n(i) $m^4 - 3mn - n$\n(ii) $x^2 - y^2$\n(iii) $3x - 7$\n(iv) $u^2 - u - 8$\n(v) $u - v$\n(vi) $a^4 - 3a^3 + a - 3$\n(vii) $x + 3y - 1$\n(viii) $2x^2 - 4xy + y^2$\n(ix) $3x^3 - 4xy + 7y^3$",
          subQuestions: [
            { label: "(i)", statement: "$m^4 - 3mn - n$", working: ["Degree 4."], finalAnswer: "Biquadratic polynomial" },
            { label: "(ii)", statement: "$x^2 - y^2$", working: ["Degree 2."], finalAnswer: "Quadratic polynomial" },
            { label: "(iii)", statement: "$3x - 7$", working: ["Degree 1."], finalAnswer: "Linear polynomial" },
            { label: "(iv)", statement: "$u^2 - u - 8$", working: ["Degree 2."], finalAnswer: "Quadratic polynomial" },
            { label: "(v)", statement: "$u - v$", working: ["Degree 1."], finalAnswer: "Linear polynomial" },
            { label: "(vi)", statement: "$a^4 - 3a^3 + a - 3$", working: ["Degree 4."], finalAnswer: "Biquadratic polynomial" },
            { label: "(vii)", statement: "$x + 3y - 1$", working: ["Degree 1."], finalAnswer: "Linear polynomial" },
            { label: "(viii)", statement: "$2x^2 - 4xy + y^2$", working: ["Degree 2."], finalAnswer: "Quadratic polynomial" },
            { label: "(ix)", statement: "$3x^3 - 4xy + 7y^3$", working: ["Degree 3."], finalAnswer: "Cubic polynomial" }
          ],
          finalAnswer: "Linear: (iii), (v), (vii) | Quadratic: (ii), (iv), (viii) | Cubic: (ix) | Biquadratic: (i), (vi)",
          officialAnswer: "Linear: (iii), (v), (vii); Quadratic: (ii), (iv), (viii); Cubic: (ix); Biquadratic: (i), (vi)"
        }
      ]
    },
    {
      id: "ex-8-3",
      number: "8.3",
      title: "Exercise 8.3",
      page: 104,
      description: "Expanding expressions and evaluating numerical products using algebraic identities; symmetric rational reciprocal sums.",
      questions: [
        {
          id: "ex-8-3-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.3",
          exerciseTitle: "Exercise 8.3",
          questionNumber: "Question 1",
          topic: "Algebraic Expansion Using Identities",
          statement: "Simplify the following with the help of identities/formula:\n(i) $(5x + 11y)^2$\n(ii) $(7x + 13)^2$\n(iii) $(8x + 15y)^2$\n(iv) $(x - 9)^2$\n(v) $(7x - 5y)^2$\n(vi) $(12x - 25y)^2$\n(vii) $(7x - 3y)(7x + 3y)$\n(viii) $(17x + 13y)(17x - 13y)$\n(ix) $(9 - 7x)(9 + 7x)$",
          subQuestions: [
            { label: "(i)", statement: "$(5x + 11y)^2$", working: ["$$(5x)^2 + 2(5x)(11y) + (11y)^2 = 25x^2 + 110xy + 121y^2$$"], finalAnswer: "$25x^2 + 110xy + 121y^2$" },
            { label: "(ii)", statement: "$(7x + 13)^2$", working: ["$$(7x)^2 + 2(7x)(13) + (13)^2 = 49x^2 + 182x + 169$$"], finalAnswer: "$49x^2 + 182x + 169$" },
            { label: "(iii)", statement: "$(8x + 15y)^2$", working: ["$$(8x)^2 + 2(8x)(15y) + (15y)^2 = 64x^2 + 240xy + 225y^2$$"], finalAnswer: "$64x^2 + 240xy + 225y^2$" },
            { label: "(iv)", statement: "$(x - 9)^2$", working: ["$$x^2 - 2(x)(9) + 9^2 = x^2 - 18x + 81$$"], finalAnswer: "$x^2 - 18x + 81$" },
            { label: "(v)", statement: "$(7x - 5y)^2$", working: ["$$(7x)^2 - 2(7x)(5y) + (5y)^2 = 49x^2 - 70xy + 25y^2$$"], finalAnswer: "$49x^2 - 70xy + 25y^2$" },
            { label: "(vi)", statement: "$(12x - 25y)^2$", working: ["$$(12x)^2 - 2(12x)(25y) + (25y)^2 = 144x^2 - 600xy + 625y^2$$"], finalAnswer: "$144x^2 - 600xy + 625y^2$" },
            { label: "(vii)", statement: "$(7x - 3y)(7x + 3y)$", working: ["$$(7x)^2 - (3y)^2 = 49x^2 - 9y^2$$"], finalAnswer: "$49x^2 - 9y^2$" },
            { label: "(viii)", statement: "$(17x + 13y)(17x - 13y)$", working: ["$$(17x)^2 - (13y)^2 = 289x^2 - 169y^2$$"], finalAnswer: "$289x^2 - 169y^2$" },
            { label: "(ix)", statement: "$(9 - 7x)(9 + 7x)$", working: ["$$9^2 - (7x)^2 = 81 - 49x^2$$"], finalAnswer: "$81 - 49x^2$" }
          ],
          finalAnswer: "All identities expanded accurately.",
          officialAnswer: "Matches Textbook Answer Key on page 226."
        },
        {
          id: "ex-8-3-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.3",
          exerciseTitle: "Exercise 8.3",
          questionNumber: "Question 2",
          topic: "Numerical Evaluation with Identities",
          statement: "Evaluate the following with the help of identities/formula:\n(i) $(105)^2$\n(ii) $(96)^2$\n(iii) $103 \\times 97$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$(105)^2$",
              working: [
                "$$(105)^2 = (100 + 5)^2 = 100^2 + 2(100)(5) + 5^2$$",
                "$$= 10000 + 1000 + 25 = 11,025$$"
              ],
              finalAnswer: "$11,025$"
            },
            {
              label: "(ii)",
              statement: "$(96)^2$",
              working: [
                "$$(96)^2 = (100 - 4)^2 = 100^2 - 2(100)(4) + 4^2$$",
                "$$= 10000 - 800 + 16 = 9,216$$"
              ],
              finalAnswer: "$9,216$"
            },
            {
              label: "(iii)",
              statement: "$103 \\times 97$",
              working: [
                "$$103 \\times 97 = (100 + 3)(100 - 3) = 100^2 - 3^2$$",
                "$$= 10000 - 9 = 9,991$$"
              ],
              finalAnswer: "$9,991$"
            }
          ],
          finalAnswer: "(i) 11025, (ii) 9216, (iii) 9991",
          officialAnswer: "(i) 11025, (ii) 9216, (iii) 9991"
        },
        {
          id: "ex-8-3-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.3",
          exerciseTitle: "Exercise 8.3",
          questionNumber: "Question 3",
          topic: "Reciprocal Sum Identities (x + 1/x = 5)",
          statement: "If $x + \\frac{1}{x} = 5$, then find the value of:\n(i) $x^2 + \\frac{1}{x^2}$\n(ii) $x^4 + \\frac{1}{x^4}$",
          formula: "$$\\left(x + \\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} + 2 \\implies x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2$$",
          workingSteps: [
            "**(i) Finding $x^2 + \\frac{1}{x^2}$:**",
            "Squaring both sides of $x + \\frac{1}{x} = 5$:",
            "$$\\left(x + \\frac{1}{x}\\right)^2 = 5^2$$",
            "$$x^2 + 2(x)\\left(\\frac{1}{x}\\right) + \\frac{1}{x^2} = 25$$",
            "$$x^2 + 2 + \\frac{1}{x^2} = 25 \\implies x^2 + \\frac{1}{x^2} = 25 - 2 = 23$$",
            "**(ii) Finding $x^4 + \\frac{1}{x^4}$:**",
            "Squaring both sides of $x^2 + \\frac{1}{x^2} = 23$:",
            "$$\\left(x^2 + \\frac{1}{x^2}\\right)^2 = 23^2$$",
            "$$x^4 + 2 + \\frac{1}{x^4} = 529 \\implies x^4 + \\frac{1}{x^4} = 529 - 2 = 527$$"
          ],
          finalAnswer: "(i) x² + 1/x² = 23 | (ii) x⁴ + 1/x⁴ = 527",
          officialAnswer: "(i) x^2 + 1/x^2 = 23, (ii) x^4 + 1/x^4 = 527"
        },
        {
          id: "ex-8-3-q4",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.3",
          exerciseTitle: "Exercise 8.3",
          questionNumber: "Question 4",
          topic: "Reciprocal Difference Identities (x - 1/x = 4)",
          statement: "If $x - \\frac{1}{x} = 4$, then find the value of:\n(i) $x^2 + \\frac{1}{x^2}$\n(ii) $x^4 + \\frac{1}{x^4}$",
          formula: "$$\\left(x - \\frac{1}{x}\\right)^2 = x^2 + \\frac{1}{x^2} - 2 \\implies x^2 + \\frac{1}{x^2} = \\left(x - \\frac{1}{x}\\right)^2 + 2$$",
          workingSteps: [
            "**(i) Finding $x^2 + \\frac{1}{x^2}$:**",
            "$$\\left(x - \\frac{1}{x}\\right)^2 = 4^2$$",
            "$$x^2 - 2 + \\frac{1}{x^2} = 16 \\implies x^2 + \\frac{1}{x^2} = 16 + 2 = 18$$",
            "**(ii) Finding $x^4 + \\frac{1}{x^4}$:**",
            "$$\\left(x^2 + \\frac{1}{x^2}\\right)^2 = 18^2$$",
            "$$x^4 + 2 + \\frac{1}{x^4} = 324 \\implies x^4 + \\frac{1}{x^4} = 324 - 2 = 322$$"
          ],
          finalAnswer: "(i) x² + 1/x² = 18 | (ii) x⁴ + 1/x⁴ = 322",
          officialAnswer: "(i) x^2 + 1/x^2 = 18, (ii) x^4 + 1/x^4 = 322"
        }
      ]
    },
    {
      id: "ex-8-4",
      number: "8.4",
      title: "Exercise 8.4",
      page: 107,
      description: "Factorization of polynomials using common monomial factoring, grouping, perfect square forms, and middle-term splitting.",
      questions: [
        {
          id: "ex-8-4-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 1",
          topic: "Common Monomial Factoring",
          statement: "Factorize the following:\n(i) $6x + 24$\n(ii) $7xy - 28y$\n(iii) $6x^2 - 48x$\n(iv) $7x^2 + 35xy - 56x$\n(v) $5y^3 - 45y^2 + 75y$\n(vi) $6xy - 36x^2y^2 - 54x^3y^3$",
          subQuestions: [
            { label: "(i)", statement: "$6x + 24$", working: ["Take common factor 6: $$6(x + 4)$$"], finalAnswer: "$6(x + 4)$" },
            { label: "(ii)", statement: "$7xy - 28y$", working: ["Take common factor $7y$: $$7y(x - 4)$$"], finalAnswer: "$7y(x - 4)$" },
            { label: "(iii)", statement: "$6x^2 - 48x$", working: ["Take common factor $6x$: $$6x(x - 8)$$"], finalAnswer: "$6x(x - 8)$" },
            { label: "(iv)", statement: "$7x^2 + 35xy - 56x$", working: ["Take common factor $7x$: $$7x(x + 5y - 8)$$"], finalAnswer: "$7x(x + 5y - 8)$" },
            { label: "(v)", statement: "$5y^3 - 45y^2 + 75y$", working: ["Take common factor $5y$: $$5y(y^2 - 9y + 15)$$"], finalAnswer: "$5y(y^2 - 9y + 15)$" },
            { label: "(vi)", statement: "$6xy - 36x^2y^2 - 54x^3y^3$", working: ["Take common factor $6xy$: $$6xy(1 - 6xy - 9x^2y^2)$$"], finalAnswer: "$6xy(1 - 6xy - 9x^2y^2)$" }
          ],
          finalAnswer: "(i) 6(x+4), (ii) 7y(x-4), (iii) 6x(x-8), (iv) 7x(x+5y-8), (v) 5y(y²-9y+15), (vi) 6xy(1-6xy-9x²y²)",
          officialAnswer: "(i) 6(x+4), (ii) 7y(x-4), (iii) 6x(x-8), (iv) 7x(x+5y-8), (v) 5y(y^2-9y+15), (vi) 6xy(1-6xy-9x^2y^2)"
        },
        {
          id: "ex-8-4-q6",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 6",
          topic: "Form a² ± 2ab + b² - c²",
          statement: "Factorize the following:\n(i) $4x^2 + 12xy + 9y^2 - 49$\n(ii) $x^2 + 14xy + 49y^2 - 4$\n(iii) $25x^2 + 60xy + 36y^2 - 1$\n(iv) $64x^2 - 64xy + 16y^2 - 81$\n(v) $x^2 - 22xy + 121y^2 - 16$\n(vi) $36x^2 - 108xy + 81y^2 - 25$",
          formula: "$$a^2 \\pm 2ab + b^2 - c^2 = (a \\pm b)^2 - c^2 = (a \\pm b - c)(a \\pm b + c)$$",
          subQuestions: [
            { label: "(i)", statement: "$4x^2 + 12xy + 9y^2 - 49$", working: ["$$(2x + 3y)^2 - 7^2 = (2x + 3y - 7)(2x + 3y + 7)$$"], finalAnswer: "$(2x + 3y - 7)(2x + 3y + 7)$" },
            { label: "(ii)", statement: "$x^2 + 14xy + 49y^2 - 4$", working: ["$$(x + 7y)^2 - 2^2 = (x + 7y - 2)(x + 7y + 2)$$"], finalAnswer: "$(x + 7y - 2)(x + 7y + 2)$" },
            { label: "(iii)", statement: "$25x^2 + 60xy + 36y^2 - 1$", working: ["$$(5x + 6y)^2 - 1^2 = (5x + 6y - 1)(5x + 6y + 1)$$"], finalAnswer: "$(5x + 6y - 1)(5x + 6y + 1)$" },
            { label: "(iv)", statement: "$64x^2 - 64xy + 16y^2 - 81$", working: ["$$(8x - 4y)^2 - 9^2 = (8x - 4y - 9)(8x - 4y + 9)$$"], finalAnswer: "$(8x - 4y - 9)(8x - 4y + 9)$" },
            { label: "(v)", statement: "$x^2 - 22xy + 121y^2 - 16$", working: ["$$(x - 11y)^2 - 4^2 = (x - 11y - 4)(x - 11y + 4)$$"], finalAnswer: "$(x - 11y - 4)(x - 11y + 4)$" },
            { label: "(vi)", statement: "$36x^2 - 108xy + 81y^2 - 25$", working: ["$$(6x - 9y)^2 - 5^2 = (6x - 9y - 5)(6x - 9y + 5)$$"], finalAnswer: "$(6x - 9y - 5)(6x - 9y + 5)$" }
          ],
          finalAnswer: "All six expressions factorized into product of two linear binomials.",
          officialAnswer: "Matches Answer Key on page 227."
        }
      ]
    },
    {
      id: "ex-8-5",
      number: "8.5",
      title: "Exercise 8.5",
      page: 109,
      description: "Cubic formulas (a+b)³ and (a-b)³, algebraic manipulations, and cubic reciprocal equations.",
      questions: [
        {
          id: "ex-8-5-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 3",
          topic: "Cubic Reciprocal Identity (x + 1/x = 4)",
          statement: "If $x + \\frac{1}{x} = 4$, then find the value of $x^3 + \\frac{1}{x^3}$.",
          formula: "$$\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right) \\implies x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right)$$",
          workingSteps: [
            "Cubing both sides of $x + \\frac{1}{x} = 4$:",
            "$$\\left(x + \\frac{1}{x}\\right)^3 = 4^3 = 64$$",
            "$$x^3 + \\frac{1}{x^3} + 3(x)\\left(\\frac{1}{x}\\right)\\left(x + \\frac{1}{x}\\right) = 64$$",
            "$$x^3 + \\frac{1}{x^3} + 3(1)(4) = 64$$",
            "$$x^3 + \\frac{1}{x^3} + 12 = 64$$",
            "$$x^3 + \\frac{1}{x^3} = 64 - 12 = 52$$"
          ],
          finalAnswer: "x³ + 1/x³ = 52",
          officialAnswer: "52"
        },
        {
          id: "ex-8-5-q4",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 4",
          topic: "Cubic Reciprocal Identity (x + 1/x = -2)",
          statement: "If $x + \\frac{1}{x} = -2$, then find the value of $x^3 + \\frac{1}{x^3}$.",
          formula: "$$x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 + \\frac{1}{x^3} = (-2)^3 - 3(-2)$$",
            "$$= -8 - (-6) = -8 + 6 = -2$$"
          ],
          finalAnswer: "x³ + 1/x³ = -2",
          officialAnswer: "-2"
        },
        {
          id: "ex-8-5-q6",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 6",
          topic: "Cubic Difference Identity (x - 1/x = -5)",
          statement: "If $x - \\frac{1}{x} = -5$, then find the value of $x^3 - \\frac{1}{x^3}$.",
          formula: "$$\\left(x - \\frac{1}{x}\\right)^3 = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right) \\implies x^3 - \\frac{1}{x^3} = \\left(x - \\frac{1}{x}\\right)^3 + 3\\left(x - \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 - \\frac{1}{x^3} = (-5)^3 + 3(-5)$$",
            "$$= -125 + (-15) = -125 - 15 = -140$$"
          ],
          finalAnswer: "x³ - 1/x³ = -140",
          officialAnswer: "-140"
        }
      ]
    }
  ]
};
