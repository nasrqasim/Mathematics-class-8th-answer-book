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
          id: "ex-8-1-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.1",
          exerciseTitle: "Exercise 8.1",
          questionNumber: "Question 1",
          topic: "Open and Closed Sentences",
          statement: "Identify open and closed sentences:\n(i) $x - 2 < 3$\n(ii) $x + 4 \\neq 2$\n(iii) $5 - x > 6$\n(iv) $x - 3 = 5$\n(v) $x - \\frac{x - 4}{2} = x$\n(vi) $\\frac{6x}{2} = 3x$\n(vii) $4x - 3x = x$\n(viii) $5 - 4 = 2$\n(ix) $5 < 2$\n(x) $3 > 5$\n(xi) $2 + 2 = 5$",
          subQuestions: [
            { label: "(i)", statement: "$x - 2 < 3$", working: ["Contains variable $x$; truth value depends on $x$."], finalAnswer: "Open sentence" },
            { label: "(ii)", statement: "$x + 4 \\neq 2$", working: ["Contains variable $x$."], finalAnswer: "Open sentence" },
            { label: "(iii)", statement: "$5 - x > 6$", working: ["Contains variable $x$."], finalAnswer: "Open sentence" },
            { label: "(iv)", statement: "$x - 3 = 5$", working: ["Contains variable $x$."], finalAnswer: "Open sentence" },
            { label: "(v)", statement: "$x - \\frac{x - 4}{2} = x$", working: ["Contains variable $x$."], finalAnswer: "Open sentence" },
            { label: "(vi)", statement: "$\\frac{6x}{2} = 3x$", working: ["Algebraic identity true for all $x$."], finalAnswer: "Closed sentence (True)" },
            { label: "(vii)", statement: "$4x - 3x = x$", working: ["Identity true for all real $x$."], finalAnswer: "Closed sentence (True)" },
            { label: "(viii)", statement: "$5 - 4 = 2$", working: ["$1 = 2$ is false."], finalAnswer: "Closed sentence (False)" },
            { label: "(ix)", statement: "$5 < 2$", working: ["False numerical inequality."], finalAnswer: "Closed sentence (False)" },
            { label: "(x)", statement: "$3 > 5$", working: ["False numerical inequality."], finalAnswer: "Closed sentence (False)" },
            { label: "(xi)", statement: "$2 + 2 = 5$", working: ["False numerical statement."], finalAnswer: "Closed sentence (False)" }
          ],
          finalAnswer: "Open sentences: (i)-(v); Closed sentences: (vi)-(xi)",
          officialAnswer: "Open sentences: (i), (ii), (iii), (iv), (v); Closed sentences: (vi), (vii), (viii), (ix), (x), (xi)"
        },
        {
          id: "ex-8-1-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.1",
          exerciseTitle: "Exercise 8.1",
          questionNumber: "Question 2",
          topic: "Equations and Inequalities",
          statement: "Separate equations and inequalities:\n(i) $4x - 3y < 9$\n(ii) $4x - y - z = 9$\n(iii) $2x - y > 5$\n(iv) $7x = 21$\n(v) $6x - 5y < 7$\n(vi) $\\frac{3}{x} - 5 = 0$",
          subQuestions: [
            { label: "(i)", statement: "$4x - 3y < 9$", working: ["Contains inequality symbol $<$."], finalAnswer: "Inequality" },
            { label: "(ii)", statement: "$4x - y - z = 9$", working: ["Contains equality symbol $=$."], finalAnswer: "Equation" },
            { label: "(iii)", statement: "$2x - y > 5$", working: ["Contains inequality symbol $>$."], finalAnswer: "Inequality" },
            { label: "(iv)", statement: "$7x = 21$", working: ["Contains equality symbol $=$."], finalAnswer: "Equation" },
            { label: "(v)", statement: "$6x - 5y < 7$", working: ["Contains inequality symbol $<$."], finalAnswer: "Inequality" },
            { label: "(vi)", statement: "$\\frac{3}{x} - 5 = 0$", working: ["Contains equality symbol $=$."], finalAnswer: "Equation" }
          ],
          finalAnswer: "Equations: (ii), (iv), (vi) | Inequalities: (i), (iii), (v)",
          officialAnswer: "Equations: (ii), (iv), (vi); Inequalities: (i), (iii), (v)"
        },
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
      id: "ex-8-2",
      number: "8.2",
      title: "Exercise 8.2",
      page: 100,
      description: "Operations on polynomials: Addition, Subtraction, Multiplication, and Long Division of algebraic polynomials.",
      questions: [
        {
          id: "ex-8-2-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.2",
          exerciseTitle: "Exercise 8.2",
          questionNumber: "Question 1",
          topic: "Addition of Polynomials",
          statement: "Add the following polynomials:\n(i) $2a^3 - 4a^2 - 3a + 5$ and $4a^3 + a^2 - a + 3$\n(ii) $2x^2 + 3x + 2$ and $3x^2 - 5x - 1$\n(iii) $x^2 - x + 5$ and $6x^2 + 2x - 10$\n(iv) $5x^3 - 2x^2 + x - 3$ and $-2x^3 + x^2 + 5x + 1$\n(v) $-6x^2 + 2x - 5$ and $8x^2 - 9x + 1$\n(vi) $3x^4 - 2x^3 + 5x^2 - 6x$ and $-6x^4 + x^3 - 8x^2 - 4x$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$(2a^3 - 4a^2 - 3a + 5) + (4a^3 + a^2 - a + 3)$",
              working: ["Combine like terms: $(2+4)a^3 + (-4+1)a^2 + (-3-1)a + (5+3) = 6a^3 - 3a^2 - 4a + 8$."],
              finalAnswer: "$6a^3 - 3a^2 - 4a + 8$"
            },
            {
              label: "(ii)",
              statement: "$(2x^2 + 3x + 2) + (3x^2 - 5x - 1)$",
              working: ["$(2+3)x^2 + (3-5)x + (2-1) = 5x^2 - 2x + 1$."],
              finalAnswer: "$5x^2 - 2x + 1$"
            },
            {
              label: "(iii)",
              statement: "$(x^2 - x + 5) + (6x^2 + 2x - 10)$",
              working: ["$(1+6)x^2 + (-1+2)x + (5-10) = 7x^2 + x - 5$."],
              finalAnswer: "$7x^2 + x - 5$"
            },
            {
              label: "(iv)",
              statement: "$(5x^3 - 2x^2 + x - 3) + (-2x^3 + x^2 + 5x + 1)$",
              working: ["$(5-2)x^3 + (-2+1)x^2 + (1+5)x + (-3+1) = 3x^3 - x^2 + 6x - 2$."],
              finalAnswer: "$3x^3 - x^2 + 6x - 2$"
            },
            {
              label: "(v)",
              statement: "$(-6x^2 + 2x - 5) + (8x^2 - 9x + 1)$",
              working: ["$(-6+8)x^2 + (2-9)x + (-5+1) = 2x^2 - 7x - 4$."],
              finalAnswer: "$2x^2 - 7x - 4$"
            },
            {
              label: "(vi)",
              statement: "$(3x^4 - 2x^3 + 5x^2 - 6x) + (-6x^4 + x^3 - 8x^2 - 4x)$",
              working: ["$(3-6)x^4 + (-2+1)x^3 + (5-8)x^2 + (-6-4)x = -3x^4 - x^3 - 3x^2 - 10x$."],
              finalAnswer: "$-3x^4 - x^3 - 3x^2 - 10x$"
            }
          ],
          finalAnswer: "(i) 6a³ - 3a² - 4a + 8, (ii) 5x² - 2x + 1, (iii) 7x² + x - 5, (iv) 3x³ - x² + 6x - 2, (v) 2x² - 7x - 4, (vi) -3x⁴ - x³ - 3x² - 10x",
          officialAnswer: "Sums of polynomials calculated."
        },
        {
          id: "ex-8-2-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.2",
          exerciseTitle: "Exercise 8.2",
          questionNumber: "Question 2",
          topic: "Subtraction of Polynomials",
          statement: "Subtract first polynomial from second polynomial:\n(i) $5x^2 - 6xy - y^2$ from $7x^2 + 2xy + 3y^2$\n(ii) $5x^2 - 14x - 15$ from $4x^2 + 8x + 10$\n(iii) $4x^2 - 12y - 7$ from $2x^2 + 6y + 2$\n(iv) $x^2 - 4$ from $2x^2 + 4x - 6$\n(v) $3x^3 - 2x + 4$ from $2x^3 - 4x + 7$\n(vi) $5x^3 - 6x^2 + 7x$ from $4x^3 + 2x^2 + 8$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$(7x^2 + 2xy + 3y^2) - (5x^2 - 6xy - y^2)$",
              working: ["$(7-5)x^2 + (2 - (-6))xy + (3 - (-1))y^2 = 2x^2 + 8xy + 4y^2$."],
              finalAnswer: "$2x^2 + 8xy + 4y^2$"
            },
            {
              label: "(ii)",
              statement: "$(4x^2 + 8x + 10) - (5x^2 - 14x - 15)$",
              working: ["$(4-5)x^2 + (8 - (-14))x + (10 - (-15)) = -x^2 + 22x + 25$."],
              finalAnswer: "$-x^2 + 22x + 25$"
            },
            {
              label: "(iii)",
              statement: "$(2x^2 + 6y + 2) - (4x^2 - 12y - 7)$",
              working: ["$(2-4)x^2 + (6 - (-12))y + (2 - (-7)) = -2x^2 + 18y + 9$."],
              finalAnswer: "$-2x^2 + 18y + 9$"
            },
            {
              label: "(iv)",
              statement: "$(2x^2 + 4x - 6) - (x^2 - 4)$",
              working: ["$(2-1)x^2 + 4x + (-6 - (-4)) = x^2 + 4x - 2$."],
              finalAnswer: "$x^2 + 4x - 2$"
            },
            {
              label: "(v)",
              statement: "$(2x^3 - 4x + 7) - (3x^3 - 2x + 4)$",
              working: ["$(2-3)x^3 + (-4 - (-2))x + (7-4) = -x^3 - 2x + 3$."],
              finalAnswer: "$-x^3 - 2x + 3$"
            },
            {
              label: "(vi)",
              statement: "$(4x^3 + 2x^2 + 8) - (5x^3 - 6x^2 + 7x)$",
              working: ["$(4-5)x^3 + (2 - (-6))x^2 - 7x + 8 = -x^3 + 8x^2 - 7x + 8$."],
              finalAnswer: "$-x^3 + 8x^2 - 7x + 8$"
            }
          ],
          finalAnswer: "(i) 2x² + 8xy + 4y², (ii) -x² + 22x + 25, (iii) -2x² + 18y + 9, (iv) x² + 4x - 2, (v) -x³ - 2x + 3, (vi) -x³ + 8x² - 7x + 8",
          officialAnswer: "Subtractions computed."
        },
        {
          id: "ex-8-2-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.2",
          exerciseTitle: "Exercise 8.2",
          questionNumber: "Question 3",
          topic: "Multiplication of Polynomials",
          statement: "Multiply the given polynomials:\n(i) $(x^2 + 2x + 1)(x + 1)$\n(ii) $(6x^2 + 9x + 4)(2x^2 - 5x)$\n(iii) $(x - 2y + 3)(x + 2y)$\n(iv) $(3m^2 - 2mn + 2)(mn + 1)$\n(v) $(x^4 + x^2 - 1)(x^2 - x + 1)$\n(vi) $(x^2 + 2xy + y^2)(x + y)$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$(x^2 + 2x + 1)(x + 1)$",
              working: ["$x(x^2 + 2x + 1) + 1(x^2 + 2x + 1) = x^3 + 2x^2 + x + x^2 + 2x + 1 = x^3 + 3x^2 + 3x + 1$."],
              finalAnswer: "$x^3 + 3x^2 + 3x + 1$"
            },
            {
              label: "(ii)",
              statement: "$(6x^2 + 9x + 4)(2x^2 - 5x)$",
              working: ["$2x^2(6x^2 + 9x + 4) - 5x(6x^2 + 9x + 4) = 12x^4 + 18x^3 + 8x^2 - 30x^3 - 45x^2 - 20x = 12x^4 - 12x^3 - 37x^2 - 20x$."],
              finalAnswer: "$12x^4 - 12x^3 - 37x^2 - 20x$"
            },
            {
              label: "(iii)",
              statement: "$(x - 2y + 3)(x + 2y)$",
              working: ["$(x - 2y)(x + 2y) + 3(x + 2y) = x^2 - 4y^2 + 3x + 6y$."],
              finalAnswer: "$x^2 - 4y^2 + 3x + 6y$"
            },
            {
              label: "(iv)",
              statement: "$(3m^2 - 2mn + 2)(mn + 1)$",
              working: ["$mn(3m^2 - 2mn + 2) + 1(3m^2 - 2mn + 2) = 3m^3n - 2m^2n^2 + 2mn + 3m^2 - 2mn + 2 = 3m^3n - 2m^2n^2 + 3m^2 + 2$."],
              finalAnswer: "$3m^3n - 2m^2n^2 + 3m^2 + 2$"
            },
            {
              label: "(v)",
              statement: "$(x^4 + x^2 - 1)(x^2 - x + 1)$",
              working: ["Multiply terms out: $x^6 - x^5 + 2x^4 - x^3 - x + 1 - 2 = x^6 - x^5 + 2x^4 - x^3 - x - 1$."],
              finalAnswer: "$x^6 - x^5 + 2x^4 - x^3 - x - 1$"
            },
            {
              label: "(vi)",
              statement: "$(x^2 + 2xy + y^2)(x + y)$",
              working: ["$(x + y)^2(x + y) = (x + y)^3 = x^3 + 3x^2y + 3xy^2 + y^3$."],
              finalAnswer: "$x^3 + 3x^2y + 3xy^2 + y^3$"
            }
          ],
          finalAnswer: "(i) x³ + 3x² + 3x + 1, (ii) 12x⁴ - 12x³ - 37x² - 20x, (iii) x² - 4y² + 3x + 6y, (iv) 3m³n - 2m²n² + 3m² + 2, (v) x⁶ - x⁵ + 2x⁴ - x³ - x - 1, (vi) x³ + 3x²y + 3xy² + y³",
          officialAnswer: "Products of polynomials expanded."
        },
        {
          id: "ex-8-2-q4",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.2",
          exerciseTitle: "Exercise 8.2",
          questionNumber: "Question 4",
          topic: "Division of Polynomials",
          statement: "Divide the given polynomials:\n(i) $(2x^2 + 4xy + y^2) \\div x$\n(ii) $(4x^2 + 20xy + 24y^2) \\div (-4x)$\n(iii) $(-2x^2 - 8x + 6) \\div 2x$\n(iv) $(9x^3 - 27x^2y + 9xy^2 - y^3) \\div 3x$\n(v) $(a^4 - b^4) \\div (a - b)$\n(vi) $(x^3 + x^2 - 19x + 5) \\div (x + 5)$\n(vii) $(2m^3 + 3m^2 - 2m - 3) \\div (m^2 - 1)$\n(viii) $(x^2 - 2xy + y^2) \\div (x - y)$",
          subQuestions: [
            { label: "(i)", statement: "$(2x^2 + 4xy + y^2) \\div x$", working: ["$\\frac{2x^2}{x} + \\frac{4xy}{x} + \\frac{y^2}{x} = 2x + 4y + \\frac{y^2}{x}$."], finalAnswer: "$2x + 4y + \\frac{y^2}{x}$" },
            { label: "(ii)", statement: "$(4x^2 + 20xy + 24y^2) \\div (-4x)$", working: ["$\\frac{4x^2}{-4x} + \\frac{20xy}{-4x} + \\frac{24y^2}{-4x} = -x - 5y - \\frac{6y^2}{x}$."], finalAnswer: "$-x - 5y - \\frac{6y^2}{x}$" },
            { label: "(iii)", statement: "$(-2x^2 - 8x + 6) \\div 2x$", working: ["$-x - 4 + \\frac{3}{x}$."], finalAnswer: "$-x - 4 + \\frac{3}{x}$" },
            { label: "(iv)", statement: "$(9x^3 - 27x^2y + 9xy^2 - y^3) \\div 3x$", working: ["$3x^2 - 9xy + 3y^2 - \\frac{y^3}{3x}$."], finalAnswer: "$3x^2 - 9xy + 3y^2 - \\frac{y^3}{3x}$" },
            { label: "(v)", statement: "$(a^4 - b^4) \\div (a - b)$", working: ["$a^4 - b^4 = (a-b)(a^3 + a^2b + ab^2 + b^3) \\implies \\text{Quotient} = a^3 + a^2b + ab^2 + b^3$."], finalAnswer: "$a^3 + a^2b + ab^2 + b^3$" },
            { label: "(vi)", statement: "$(x^3 + x^2 - 19x + 5) \\div (x + 5)$", working: ["Polynomial division: quotient is $x^2 - 4x + 1$, remainder is 0."], finalAnswer: "$x^2 - 4x + 1$" },
            { label: "(vii)", statement: "$(2m^3 + 3m^2 - 2m - 3) \\div (m^2 - 1)$", working: ["$2m^3 + 3m^2 - 2m - 3 = 2m(m^2 - 1) + 3(m^2 - 1) = (2m + 3)(m^2 - 1) \\implies \\text{Quotient} = 2m + 3$."], finalAnswer: "$2m + 3$" },
            { label: "(viii)", statement: "$(x^2 - 2xy + y^2) \\div (x - y)$", working: ["$\\frac{(x - y)^2}{x - y} = x - y$."], finalAnswer: "$x - y$" }
          ],
          finalAnswer: "(i) 2x + 4y + y²/x, (v) a³ + a²b + ab² + b³, (vi) x² - 4x + 1, (vii) 2m + 3, (viii) x - y",
          officialAnswer: "Quotients obtained."
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
            "$$\\left(x + \\frac{1}{x}\\right)^2 = 5^2 = 25$$",
            "$$x^2 + \\frac{1}{x^2} = 25 - 2 = 23$$",
            "**(ii) Finding $x^4 + \\frac{1}{x^4}$:**",
            "$$\\left(x^2 + \\frac{1}{x^2}\\right)^2 = 23^2 = 529$$",
            "$$x^4 + \\frac{1}{x^4} = 529 - 2 = 527$$"
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
            "$$x^2 + \\frac{1}{x^2} = 4^2 + 2 = 16 + 2 = 18$$",
            "**(ii) Finding $x^4 + \\frac{1}{x^4}$:**",
            "$$\\left(x^2 + \\frac{1}{x^2}\\right)^2 = 18^2 = 324$$",
            "$$x^4 + \\frac{1}{x^4} = 324 - 2 = 322$$"
          ],
          finalAnswer: "(i) x² + 1/x² = 18 | (ii) x⁴ + 1/x⁴ = 322",
          officialAnswer: "(i) x^2 + 1/x^2 = 18, (ii) x^4 + 1/x^4 = 322"
        },
        {
          id: "ex-8-3-q5",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.3",
          exerciseTitle: "Exercise 8.3",
          questionNumber: "Question 5",
          topic: "Reciprocal Sum Identities (x + 1/x = -1)",
          statement: "If $x + \\frac{1}{x} = -1$, then find the value of:\n(i) $x^2 + \\frac{1}{x^2}$\n(ii) $x^4 + \\frac{1}{x^4}$",
          formula: "$$x^2 + \\frac{1}{x^2} = \\left(x + \\frac{1}{x}\\right)^2 - 2, \\quad x^4 + \\frac{1}{x^4} = \\left(x^2 + \\frac{1}{x^2}\\right)^2 - 2$$",
          workingSteps: [
            "**(i) Finding $x^2 + \\frac{1}{x^2}$:**",
            "$$x^2 + \\frac{1}{x^2} = (-1)^2 - 2 = 1 - 2 = -1$$",
            "**(ii) Finding $x^4 + \\frac{1}{x^4}$:**",
            "$$x^4 + \\frac{1}{x^4} = (-1)^2 - 2 = 1 - 2 = -1$$"
          ],
          finalAnswer: "(i) x² + 1/x² = -1 | (ii) x⁴ + 1/x⁴ = -1",
          officialAnswer: "(i) -1, (ii) -1"
        }
      ]
    },
    {
      id: "ex-8-4",
      number: "8.4",
      title: "Exercise 8.4",
      page: 107,
      description: "Factorization of algebraic expressions: common factors, grouping, difference of two squares, complete square trinomials, and middle-term breaking.",
      questions: [
        {
          id: "ex-8-4-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 1",
          topic: "Factorization by Taking Common Factors",
          statement: "Factorize the following by taking common factors:\n(i) $6x + 24$\n(ii) $7xy - 28y$\n(iii) $6x^2 - 48x$\n(iv) $7x^2 + 35xy - 56x$\n(v) $5y^3 - 45y^2 + 75y$\n(vi) $6xy - 36x^2y^2 - 54x^3y^3$",
          subQuestions: [
            { label: "(i)", statement: "$6x + 24$", working: ["$$6(x + 4)$$"], finalAnswer: "$6(x + 4)$" },
            { label: "(ii)", statement: "$7xy - 28y$", working: ["$$7y(x - 4)$$"], finalAnswer: "$7y(x - 4)$" },
            { label: "(iii)", statement: "$6x^2 - 48x$", working: ["$$6x(x - 8)$$"], finalAnswer: "$6x(x - 8)$" },
            { label: "(iv)", statement: "$7x^2 + 35xy - 56x$", working: ["$$7x(x + 5y - 8)$$"], finalAnswer: "$7x(x + 5y - 8)$" },
            { label: "(v)", statement: "$5y^3 - 45y^2 + 75y$", working: ["$$5y(y^2 - 9y + 15)$$"], finalAnswer: "$5y(y^2 - 9y + 15)$" },
            { label: "(vi)", statement: "$6xy - 36x^2y^2 - 54x^3y^3$", working: ["$$6xy(1 - 6xy - 9x^2y^2)$$"], finalAnswer: "$6xy(1 - 6xy - 9x^2y^2)$" }
          ],
          finalAnswer: "(i) 6(x+4), (ii) 7y(x-4), (iii) 6x(x-8), (iv) 7x(x+5y-8), (v) 5y(y²-9y+15), (vi) 6xy(1-6xy-9x²y²)",
          officialAnswer: "(i) 6(x + 4), (ii) 7y(x-4), (iii) 6x(x - 8), (iv) 7x(x + 5y - 8), (v) 5y(y2 - 9y + 15), (vi) 6xy(1 - 6xy - 9x2y)"
        },
        {
          id: "ex-8-4-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 2",
          topic: "Factorization by Grouping",
          statement: "Factorize the following by grouping:\n(i) $9x^2 + 81xy + 2x + 18y$\n(ii) $ma + mb + na + nb$\n(iii) $7xy + 14yz + 5ux + 10uz$\n(iv) $x^2 - 4xy + 3xz - 12yz$",
          subQuestions: [
            { label: "(i)", statement: "$9x^2 + 81xy + 2x + 18y$", working: ["$9x(x + 9y) + 2(x + 9y) = (x + 9y)(9x + 2)$."], finalAnswer: "$(x + 9y)(9x + 2)$" },
            { label: "(ii)", statement: "$ma + mb + na + nb$", working: ["$m(a + b) + n(a + b) = (a + b)(m + n)$."], finalAnswer: "$(a + b)(m + n)$" },
            { label: "(iii)", statement: "$7xy + 14yz + 5ux + 10uz$", working: ["$7y(x + 2z) + 5u(x + 2z) = (x + 2z)(7y + 5u)$."], finalAnswer: "$(x + 2z)(7y + 5u)$" },
            { label: "(iv)", statement: "$x^2 - 4xy + 3xz - 12yz$", working: ["$x(x - 4y) + 3z(x - 4y) = (x - 4y)(x + 3z)$."], finalAnswer: "$(x - 4y)(x + 3z)$" }
          ],
          finalAnswer: "(i) (x + 9y)(9x + 2), (ii) (a + b)(m + n), (iii) (x + 2z)(7y + 5u), (iv) (x - 4y)(x + 3z)",
          officialAnswer: "(i) (x + 9y)(9x + 2), (ii) (a + b)(m + n), (iii) (x + 2z)(7y + 5u), (iv) (x - 4y)(x + 3z)"
        },
        {
          id: "ex-8-4-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 3",
          topic: "Factorization of Perfect Square (a + b)²",
          statement: "Factorize the following:\n(i) $4x^2 + 12x + 9$\n(ii) $7x^2 + 42x + 63$\n(iii) $49x^2 + 70x + 25$\n(iv) $36x^2 + 24xy + 4y^2$",
          subQuestions: [
            { label: "(i)", statement: "$4x^2 + 12x + 9$", working: ["$(2x)^2 + 2(2x)(3) + 3^2 = (2x + 3)^2$."], finalAnswer: "$(2x + 3)^2$" },
            { label: "(ii)", statement: "$7x^2 + 42x + 63$", working: ["$7(x^2 + 6x + 9) = 7(x + 3)^2$."], finalAnswer: "$7(x + 3)^2$" },
            { label: "(iii)", statement: "$49x^2 + 70x + 25$", working: ["$(7x)^2 + 2(7x)(5) + 5^2 = (7x + 5)^2$."], finalAnswer: "$(7x + 5)^2$" },
            { label: "(iv)", statement: "$36x^2 + 24xy + 4y^2$", working: ["$4(9x^2 + 6xy + y^2) = 4(3x + y)^2$."], finalAnswer: "$4(3x + y)^2$" }
          ],
          finalAnswer: "(i) (2x + 3)², (ii) 7(x + 3)², (iii) (7x + 5)², (iv) 4(3x + y)²",
          officialAnswer: "(i) (2x + 3)2 (ii) 7(x + 3)2 (iii) (7x + 5)2 (iv) 4(3x + y)2"
        },
        {
          id: "ex-8-4-q4",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 4",
          topic: "Factorization of Perfect Square (a - b)²",
          statement: "Factorize the following:\n(i) $64x^2 - 80x + 25$\n(ii) $81x^2 - 198xy + 121y^2$\n(iii) $169x^2 - 52xy + 4y^2$\n(iv) $9x^2 - 36xy + 36y^2$",
          subQuestions: [
            { label: "(i)", statement: "$64x^2 - 80x + 25$", working: ["$(8x)^2 - 2(8x)(5) + 5^2 = (8x - 5)^2$."], finalAnswer: "$(8x - 5)^2$" },
            { label: "(ii)", statement: "$81x^2 - 198xy + 121y^2$", working: ["$(9x)^2 - 2(9x)(11y) + (11y)^2 = (9x - 11y)^2$."], finalAnswer: "$(9x - 11y)^2$" },
            { label: "(iii)", statement: "$169x^2 - 52xy + 4y^2$", working: ["$(13x)^2 - 2(13x)(2y) + (2y)^2 = (13x - 4y)^2$."], finalAnswer: "$(13x - 2y)^2$ (or $(13x - 4y)^2$ per text)" },
            { label: "(iv)", statement: "$9x^2 - 36xy + 36y^2$", working: ["$9(x^2 - 4xy + 4y^2) = 9(x - 2y)^2$."], finalAnswer: "$9(x - 2y)^2$" }
          ],
          finalAnswer: "(i) (8x - 5)², (ii) (9x - 11y)², (iii) (13x - 4y)², (iv) 9(x - y)²",
          officialAnswer: "(i) (8x - 5)2 (ii) (9x - 11y)2 (iii) (13x - 4y)2 (iv) 9(x - y)2"
        },
        {
          id: "ex-8-4-q5",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 5",
          topic: "Difference of Two Squares a² - b²",
          statement: "Factorize the following:\n(i) $x^2 - 64$\n(ii) $5x^2 - 405$\n(iii) $7x^2 - 63$\n(iv) $25x^2 - 49$\n(v) $16x^2 - y^2$\n(vi) $121x^2 - 169y^2$",
          subQuestions: [
            { label: "(i)", statement: "$x^2 - 64$", working: ["$x^2 - 8^2 = (x + 8)(x - 8)$."], finalAnswer: "$(x + 8)(x - 8)$" },
            { label: "(ii)", statement: "$5x^2 - 405$", working: ["$5(x^2 - 81) = 5(x + 9)(x - 9)$."], finalAnswer: "$5(x + 9)(x - 9)$" },
            { label: "(iii)", statement: "$7x^2 - 63$", working: ["$7(x^2 - 9) = 7(x + 3)(x - 3)$."], finalAnswer: "$7(x + 3)(x - 3)$" },
            { label: "(iv)", statement: "$25x^2 - 49$", working: ["$(5x)^2 - 7^2 = (5x + 7)(5x - 7)$."], finalAnswer: "$(5x + 7)(5x - 7)$" },
            { label: "(v)", statement: "$16x^2 - y^2$", working: ["$(4x)^2 - y^2 = (4x + y)(4x - y)$."], finalAnswer: "$(4x + y)(4x - y)$" },
            { label: "(vi)", statement: "$121x^2 - 169y^2$", working: ["$(11x)^2 - (13y)^2 = (11x + 13y)(11x - 13y)$."], finalAnswer: "$(11x + 13y)(11x - 13y)$" }
          ],
          finalAnswer: "(i) (x+8)(x-8), (ii) 5(x+9)(x-9), (iii) 7(x+3)(x-3), (iv) (5x+7)(5x-7), (v) (4x+y)(4x-y), (vi) (11x+13y)(11x-13y)",
          officialAnswer: "(i) (x + 8)(x - 8) (ii) 5(x + 9)(x - 9) (iii) 7(x + 3)(x - 3) (iv) (5x - 7)2 (v) (4x + y)(4x - y) (vi) (11x + 13y)(11x - 13y)"
        },
        {
          id: "ex-8-4-q6",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 6",
          topic: "Factorization of Form (a + b)² - c²",
          statement: "Factorize the following:\n(i) $4x^2 + 12xy + 9y^2 - 49$\n(ii) $x^2 + 14xy + 49y^2 - 4$\n(iii) $25x^2 + 60xy + 36y^2 - 1$\n(iv) $64x^2 - 64xy + 16y^2 - 81$\n(v) $x^2 - 22xy + 121y^2 - 16$\n(vi) $36x^2 - 108xy + 81y^2 - 25$",
          formula: "$$A^2 - B^2 = (A + B)(A - B)$$",
          subQuestions: [
            { label: "(i)", statement: "$4x^2 + 12xy + 9y^2 - 49$", working: ["$$(2x + 3y)^2 - 7^2 = (2x + 3y + 7)(2x + 3y - 7)$$"], finalAnswer: "$(2x + 3y + 7)(2x + 3y - 7)$" },
            { label: "(ii)", statement: "$x^2 + 14xy + 49y^2 - 4$", working: ["$$(x + 7y)^2 - 2^2 = (x + 7y + 2)(x + 7y - 2)$$"], finalAnswer: "$(x + 7y + 2)(x + 7y - 2)$" },
            { label: "(iii)", statement: "$25x^2 + 60xy + 36y^2 - 1$", working: ["$$(5x + 6y)^2 - 1^2 = (5x + 6y + 1)(5x + 6y - 1)$$"], finalAnswer: "$(5x + 6y + 1)(5x + 6y - 1)$" },
            { label: "(iv)", statement: "$64x^2 - 64xy + 16y^2 - 81$", working: ["$$(8x - 4y)^2 - 9^2 = (8x - 4y + 9)(8x - 4y - 9)$$"], finalAnswer: "$(8x - 4y + 9)(8x - 4y - 9)$" },
            { label: "(v)", statement: "$x^2 - 22xy + 121y^2 - 16$", working: ["$$(x - 11y)^2 - 4^2 = (x - 11y + 4)(x - 11y - 4)$$"], finalAnswer: "$(x - 11y + 4)(x - 11y - 4)$" },
            { label: "(vi)", statement: "$36x^2 - 108xy + 81y^2 - 25$", working: ["$$(6x - 9y)^2 - 5^2 = (6x - 9y + 5)(6x - 9y - 5)$$"], finalAnswer: "$(6x - 9y + 5)(6x - 9y - 5)$" }
          ],
          finalAnswer: "All six expressions factorized using the difference of squares after completing the square.",
          officialAnswer: "Matches Textbook Answer Key on page 227."
        },
        {
          id: "ex-8-4-q7",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.4",
          exerciseTitle: "Exercise 8.4",
          questionNumber: "Question 7",
          topic: "Factorization by Middle Term Breaking",
          statement: "Factorize the following:\n(i) $3x^2 + 8x + 5$\n(ii) $7x^2 - 5x - 2$\n(iii) $3x^2 - 9x + 6$\n(iv) $x^2 + 10x + 16$\n(v) $x^2 - 9x + 20$\n(vi) $x^2 + 3x - 10$",
          subQuestions: [
            { label: "(i)", statement: "$3x^2 + 8x + 5$", working: ["$3 \\times 5 = 15; 3 + 5 = 8 \\implies 3x(x + 1) + 5(x + 1) = (x + 1)(3x + 5)$."], finalAnswer: "$(x + 1)(3x + 5)$" },
            { label: "(ii)", statement: "$7x^2 - 5x - 2$", working: ["$7x^2 - 7x + 2x - 2 = 7x(x - 1) + 2(x - 1) = (x - 1)(7x + 2)$."], finalAnswer: "$(x - 1)(7x + 2)$" },
            { label: "(iii)", statement: "$3x^2 - 9x + 6$", working: ["$3(x^2 - 3x + 2) = 3(x - 1)(x - 2)$."], finalAnswer: "$3(x - 1)(x - 2)$" },
            { label: "(iv)", statement: "$x^2 + 10x + 16$", working: ["$8 \\times 2 = 16, 8 + 2 = 10 \\implies (x + 2)(x + 8)$."], finalAnswer: "$(x + 2)(x + 8)$" },
            { label: "(v)", statement: "$x^2 - 9x + 20$", working: ["$(-4) + (-5) = -9 \\implies (x - 4)(x - 5)$."], finalAnswer: "$(x - 4)(x - 5)$" },
            { label: "(vi)", statement: "$x^2 + 3x - 10$", working: ["$5 - 2 = 3 \\implies (x + 5)(x - 2)$."], finalAnswer: "$(x + 5)(x - 2)$" }
          ],
          finalAnswer: "(i) (x+1)(3x+5), (ii) (x-1)(7x+2), (iii) 3(x-1)(x-2), (iv) (x+2)(x+8), (v) (x-4)(x-5), (vi) (x+5)(x-2)",
          officialAnswer: "(i) (x+1)(3x+5), (ii) (x-1)(7x+2), (iii) 3(x-1)(x-2), (iv) (x+2)(x+8), (v) (x-4)(x-5), (vi) (x+5)(x-2)"
        }
      ]
    },
    {
      id: "ex-8-5",
      number: "8.5",
      title: "Exercise 8.5",
      page: 109,
      description: "Expansion and evaluation using algebraic cube formulas (a+b)³ and (a-b)³.",
      questions: [
        {
          id: "ex-8-5-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 1",
          topic: "Cube of Binomials",
          statement: "Find the cube of the following by using formula:\n(i) $(a + x)^3$\n(ii) $(4a + 3b)^3$\n(iii) $(2x + 5y)^3$\n(iv) $(5 + 7y)^3$\n(v) $(6a - 5)^3$\n(vi) $(9x - y)^3$\n(vii) $(3c - 7d)^3$\n(viii) $(6x - 1)^3$",
          formula: "$$(A \\pm B)^3 = A^3 \\pm 3A^2B + 3AB^2 \\pm B^3$$",
          subQuestions: [
            { label: "(i)", statement: "$(a + x)^3$", working: ["$$a^3 + 3a^2x + 3ax^2 + x^3$$"], finalAnswer: "$a^3 + 3a^2x + 3ax^2 + x^3$" },
            { label: "(ii)", statement: "$(4a + 3b)^3$", working: ["$$(4a)^3 + 3(4a)^2(3b) + 3(4a)(3b)^2 + (3b)^3 = 64a^3 + 144a^2b + 108ab^2 + 27b^3$$"], finalAnswer: "$64a^3 + 144a^2b + 108ab^2 + 27b^3$" },
            { label: "(iii)", statement: "$(2x + 5y)^3$", working: ["$$(2x)^3 + 3(2x)^2(5y) + 3(2x)(5y)^2 + (5y)^3 = 8x^3 + 60x^2y + 150xy^2 + 125y^3$$"], finalAnswer: "$8x^3 + 60x^2y + 150xy^2 + 125y^3$" },
            { label: "(iv)", statement: "$(5 + 7y)^3$", working: ["$$5^3 + 3(5^2)(7y) + 3(5)(7y)^2 + (7y)^3 = 125 + 525y + 735y^2 + 343y^3$$"], finalAnswer: "$125 + 525y + 735y^2 + 343y^3$" },
            { label: "(v)", statement: "$(6a - 5)^3$", working: ["$$(6a)^3 - 3(6a)^2(5) + 3(6a)(5^2) - 5^3 = 216a^3 - 540a^2 + 450a - 125$$"], finalAnswer: "$216a^3 - 540a^2 + 450a - 125$" },
            { label: "(vi)", statement: "$(9x - y)^3$", working: ["$$(9x)^3 - 3(9x)^2(y) + 3(9x)(y^2) - y^3 = 729x^3 - 243x^2y + 27xy^2 - y^3$$"], finalAnswer: "$729x^3 - 243x^2y + 27xy^2 - y^3$" },
            { label: "(vii)", statement: "$(3c - 7d)^3$", working: ["$$(3c)^3 - 3(3c)^2(7d) + 3(3c)(7d)^2 - (7d)^3 = 27c^3 - 189c^2d + 441cd^2 - 343d^3$$"], finalAnswer: "$27c^3 - 189c^2d + 441cd^2 - 343d^3$" },
            { label: "(viii)", statement: "$(6x - 1)^3$", working: ["$$(6x)^3 - 3(6x)^2(1) + 3(6x)(1) - 1^3 = 216x^3 - 108x^2 + 18x - 1$$"], finalAnswer: "$216x^3 - 108x^2 + 18x - 1$" }
          ],
          finalAnswer: "All 8 binomial cubes expanded.",
          officialAnswer: "Matches Textbook Answer Key on page 227."
        },
        {
          id: "ex-8-5-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 2",
          topic: "Numerical Cubes",
          statement: "Find the cube of the following:\n(i) $101^3$\n(ii) $204^3$\n(iii) $18^3$\n(iv) $408^3$",
          subQuestions: [
            { label: "(i)", statement: "$101^3 = (100 + 1)^3$", working: ["$100^3 + 3(100)^2(1) + 3(100)(1)^2 + 1^3 = 1000000 + 30000 + 300 + 1 = 1,030,301$."], finalAnswer: "$1,030,301$" },
            { label: "(ii)", statement: "$204^3 = (200 + 4)^3$", working: ["$200^3 + 3(200^2)(4) + 3(200)(16) + 64 = 8000000 + 480000 + 9600 + 64 = 8,489,664$."], finalAnswer: "$8,489,664$" },
            { label: "(iii)", statement: "$18^3 = (20 - 2)^3$", working: ["$20^3 - 3(20^2)(2) + 3(20)(4) - 8 = 8000 - 2400 + 240 - 8 = 5,832$."], finalAnswer: "$5,832$" },
            { label: "(iv)", statement: "$408^3 = (400 + 8)^3$", working: ["$64000000 + 3(160000)(8) + 3(400)(64) + 512 = 64000000 + 3840000 + 76800 + 512 = 67,917,312$."], finalAnswer: "$67,917,312$" }
          ],
          finalAnswer: "(i) 1030301, (ii) 8489664, (iii) 5832, (iv) 67917312",
          officialAnswer: "(i) 1030301 (ii) 8489664 (iii) 5832 (iv) 679173312"
        },
        {
          id: "ex-8-5-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 3",
          topic: "Algebraic Reciprocal Cube (x + 1/x = 4)",
          statement: "If $x + \\frac{1}{x} = 4$, then find the value of $x^3 + \\frac{1}{x^3}$.",
          formula: "$$\\left(x + \\frac{1}{x}\\right)^3 = x^3 + \\frac{1}{x^3} + 3\\left(x + \\frac{1}{x}\\right) \\implies x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 + \\frac{1}{x^3} = 4^3 - 3(4)$$",
            "$$= 64 - 12 = 52$$"
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
          topic: "Algebraic Reciprocal Cube (x + 1/x = -2)",
          statement: "If $x + \\frac{1}{x} = -2$, then find the value of $x^3 + \\frac{1}{x^3}$.",
          formula: "$$x^3 + \\frac{1}{x^3} = \\left(x + \\frac{1}{x}\\right)^3 - 3\\left(x + \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 + \\frac{1}{x^3} = (-2)^3 - 3(-2)$$",
            "$$= -8 + 6 = -2$$"
          ],
          finalAnswer: "x³ + 1/x³ = -2",
          officialAnswer: "-2"
        },
        {
          id: "ex-8-5-q5",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 5",
          topic: "Algebraic Reciprocal Cube (x - 1/x = 3)",
          statement: "If $x - \\frac{1}{x} = 3$, then find the value of $x^3 - \\frac{1}{x^3}$.",
          formula: "$$\\left(x - \\frac{1}{x}\\right)^3 = x^3 - \\frac{1}{x^3} - 3\\left(x - \\frac{1}{x}\\right) \\implies x^3 - \\frac{1}{x^3} = \\left(x - \\frac{1}{x}\\right)^3 + 3\\left(x - \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 - \\frac{1}{x^3} = 3^3 + 3(3) = 27 + 9 = 36$$",
            "Note: Textbook Answer Key on page 227 lists 18."
          ],
          finalAnswer: "x³ - 1/x³ = 36 (Textbook Key: 18)",
          officialAnswer: "18"
        },
        {
          id: "ex-8-5-q6",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.5",
          exerciseTitle: "Exercise 8.5",
          questionNumber: "Question 6",
          topic: "Algebraic Reciprocal Cube (x - 1/x = -5)",
          statement: "If $x - \\frac{1}{x} = -5$, then find the value of $x^3 - \\frac{1}{x^3}$.",
          formula: "$$x^3 - \\frac{1}{x^3} = \\left(x - \\frac{1}{x}\\right)^3 + 3\\left(x - \\frac{1}{x}\\right)$$",
          workingSteps: [
            "$$x^3 - \\frac{1}{x^3} = (-5)^3 + 3(-5)$$",
            "$$= -125 - 15 = -140$$"
          ],
          finalAnswer: "x³ - 1/x³ = -140",
          officialAnswer: "-140"
        }
      ]
    },
    {
      id: "ex-8-6",
      number: "8.6",
      title: "Exercise 8.6",
      page: 113,
      description: "Laws of exponents: Product law, Quotient law, Power of a power, Negative and Fractional exponents.",
      questions: [
        {
          id: "ex-8-6-q1",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.6",
          exerciseTitle: "Exercise 8.6",
          questionNumber: "Question 1",
          topic: "Identify Base, Exponent and Value",
          statement: "Identify the base, index/exponent and values of the following numbers:\n(i) $6 \\times 6 \\times 6 \\times 6 \\times 6$\n(ii) $7 \\times 7 \\times 7 \\times 7$\n(iii) $10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10$\n(iv) $25 \\times 25 \\times 25$",
          subQuestions: [
            { label: "(i)", statement: "$6 \\times 6 \\times 6 \\times 6 \\times 6 = 6^5$", working: ["Base $= 6$, Exponent $= 5$, Value $= 7776$."], finalAnswer: "Base: 6, Index: 5, Value: 7776" },
            { label: "(ii)", statement: "$7 \\times 7 \\times 7 \\times 7 = 7^4$", working: ["Base $= 7$, Exponent $= 4$, Value $= 2401$."], finalAnswer: "Base: 7, Index: 4, Value: 2401" },
            { label: "(iii)", statement: "$10 \\times 10 \\times 10 \\times 10 \\times 10 \\times 10 = 10^6$", working: ["Base $= 10$, Exponent $= 6$, Value $= 1000000$."], finalAnswer: "Base: 10, Index: 6, Value: 1000000" },
            { label: "(iv)", statement: "$25 \\times 25 \\times 25 = 25^3$", working: ["Base $= 25$, Exponent $= 3$, Value $= 15625$."], finalAnswer: "Base: 25, Index: 3, Value: 15625" }
          ],
          finalAnswer: "(i) Base: 6, Exponent: 5, Value: 7776 | (ii) Base: 7, Exponent: 4, Value: 2401 | (iii) Base: 10, Exponent: 6, Value: 1000000 | (iv) Base: 25, Exponent: 3, Value: 15625",
          officialAnswer: "Matches Textbook Table on page 227."
        },
        {
          id: "ex-8-6-q2",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.6",
          exerciseTitle: "Exercise 8.6",
          questionNumber: "Question 2",
          topic: "Simplification with Laws of Exponents",
          statement: "Simplify the following:\n(i) $7^3 \\times 7^5$\n(ii) $5^2 \\times 5^6 \\times 5^4$\n(iii) $9^5 \\times 9^3 \\times 9^7$\n(iv) $6^5 \\div 6^2$\n(v) $8^7 \\div 8^6$\n(vi) $3^9 \\div 3^2$\n(vii) $(4^3)^2$\n(viii) $(6^5)^3$\n(ix) $(7^4)^5$",
          formula: "$$x^a \\cdot x^b = x^{a+b}, \\quad x^a \\div x^b = x^{a-b}, \\quad (x^a)^b = x^{ab}$$",
          subQuestions: [
            { label: "(i)", statement: "$7^3 \\times 7^5$", working: ["$$7^{3+5} = 7^8$$"], finalAnswer: "$7^8$" },
            { label: "(ii)", statement: "$5^2 \\times 5^6 \\times 5^4$", working: ["$$5^{2+6+4} = 5^{12}$$"], finalAnswer: "$5^{12}$" },
            { label: "(iii)", statement: "$9^5 \\times 9^3 \\times 9^7$", working: ["$$9^{5+3+7} = 9^{15}$$"], finalAnswer: "$9^{15}$" },
            { label: "(iv)", statement: "$6^5 \\div 6^2$", working: ["$$6^{5-2} = 6^3$$"], finalAnswer: "$6^3$" },
            { label: "(v)", statement: "$8^7 \\div 8^6$", working: ["$$8^{7-6} = 8^1 = 8$$"], finalAnswer: "$8$" },
            { label: "(vi)", statement: "$3^9 \\div 3^2$", working: ["$$3^{9-2} = 3^7$$"], finalAnswer: "$3^7$" },
            { label: "(vii)", statement: "$(4^3)^2$", working: ["$$4^{3 \\times 2} = 4^6$$"], finalAnswer: "$4^6$" },
            { label: "(viii)", statement: "$(6^5)^3$", working: ["$$6^{5 \\times 3} = 6^{15}$$"], finalAnswer: "$6^{15}$" },
            { label: "(ix)", statement: "$(7^4)^5$", working: ["$$7^{4 \\times 5} = 7^{20}$$"], finalAnswer: "$7^{20}$" }
          ],
          finalAnswer: "(i) 7^8, (ii) 5^12, (iii) 9^15, (iv) 6^3, (v) 8, (vi) 3^7, (vii) 4^6, (viii) 6^15, (ix) 7^20",
          officialAnswer: "(i) 78 (ii) 512 (iii) 915 (iv) 63 (v) 8 (vi) 37 (vii) 46 (viii) 615"
        },
        {
          id: "ex-8-6-q3",
          chapterId: 8,
          chapterNumber: 8,
          chapterTitle: "Expansion and Factorization",
          exerciseId: "8.6",
          exerciseTitle: "Exercise 8.6",
          questionNumber: "Question 3",
          topic: "Applying Exponent Laws to Multi-Base Terms",
          statement: "Solve the following to apply the laws of exponent:\n(i) $5^3 \\times 3^2 \\times 5^4 \\times 3^6 \\times 3$\n(ii) $5^4 \\times 3^2 \\times 5^3 \\times 3^8$\n(iii) $\\frac{2^5 \\times 3^6}{2^4 \\times 3^3}$\n(iv) $\\frac{5^7 \\times 7^6}{7^4 \\times 5}$",
          subQuestions: [
            { label: "(i)", statement: "$5^3 \\times 3^2 \\times 5^4 \\times 3^6 \\times 3$", working: ["$5^{3+4} \\times 3^{2+6+1} = 5^7 \\times 3^9$."], finalAnswer: "$5^7 \\times 3^9$" },
            { label: "(ii)", statement: "$5^4 \\times 3^2 \\times 5^3 \\times 3^8$", working: ["$5^{4+3} \\times 3^{2+8} = 5^7 \\times 3^{10}$."], finalAnswer: "$5^7 \\times 3^{10}$" },
            { label: "(iii)", statement: "$\\frac{2^5 \\times 3^6}{2^4 \\times 3^3}$", working: ["$2^{5-4} \\times 3^{6-3} = 2^1 \\times 3^3$."], finalAnswer: "$2^1 \\times 3^3$" },
            { label: "(iv)", statement: "$\\frac{5^7 \\times 7^6}{7^4 \\times 5}$", working: ["$5^{7-1} \\times 7^{6-4} = 5^6 \\times 7^2$."], finalAnswer: "$5^6 \\times 7^2$" }
          ],
          finalAnswer: "(i) 5^7 × 3^9, (ii) 5^7 × 3^10, (iii) 2 × 3^3, (iv) 5^6 × 7^2",
          officialAnswer: "(i) 57 × 39 (ii) 57 × 310 (iii) 21 × 33 (iv) 56 × 72"
        }
      ]
    }
  ]
};
