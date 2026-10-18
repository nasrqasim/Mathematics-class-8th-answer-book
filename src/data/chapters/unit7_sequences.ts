import { Chapter } from '../../types/math';

export const unit7Sequences: Chapter = {
  id: 7,
  number: 7,
  title: "Number Sequence and Patterns",
  page: 86,
  iconName: "TrendingUp",
  summary: "Study of arithmetic sequences, term-to-term rules, position-to-term formulas (general term a_n), geometric sequences with common ratio r, recurrence relations, and applied progression word problems.",
  keyFormulas: [
    { name: "Arithmetic General Term", formula: "a_n = a_1 + (n - 1)d \\quad (d = a_2 - a_1)" },
    { name: "Term-to-Term Rule (AP)", formula: "a_n = a_{n-1} + d" },
    { name: "Geometric General Term", formula: "a_n = a_1 \\cdot r^{n - 1} \\quad \\left(r = \\frac{a_2}{a_1}\\right)" },
    { name: "Geometric Recurrence", formula: "a_{n} = r \\cdot a_{n-1}" }
  ],
  exercises: [
    {
      id: "ex-7-1",
      number: "7.1",
      title: "Exercise 7.1",
      page: 90,
      description: "Finding nth terms, constructing general formulas, filling missing sequence values, and determining specific indexed terms.",
      questions: [
        {
          id: "ex-7-1-q1",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 1",
          topic: "General Term Formula",
          statement: "Find the $n^{\\text{th}}$ term of the sequence and construct the formula for general term:\n(i) $30, 25, 20, 15, ...$\n(ii) $2, 5, 8, 11, ...$\n(iii) $3, -1, -5, -9, ...$\n(iv) $3, 7, 11, 15, ...$",
          formula: "$$a_n = a_1 + (n - 1)d$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$30, 25, 20, 15, ...$",
              working: [
                "First term $a_1 = 30$, common difference $d = 25 - 30 = -5$.",
                "$$a_n = 30 + (n - 1)(-5) = 30 - 5n + 5 = 35 - 5n$$"
              ],
              finalAnswer: "$a_n = 35 - 5n$ (or $30 - 5(n - 1)$)"
            },
            {
              label: "(ii)",
              statement: "$2, 5, 8, 11, ...$",
              working: [
                "First term $a_1 = 2$, common difference $d = 5 - 2 = 3$.",
                "$$a_n = 2 + (n - 1)(3) = 2 + 3n - 3 = 3n - 1$$"
              ],
              finalAnswer: "$a_n = 2 + 3(n - 1) = 3n - 1$"
            },
            {
              label: "(iii)",
              statement: "$3, -1, -5, -9, ...$",
              working: [
                "First term $a_1 = 3$, common difference $d = -1 - 3 = -4$.",
                "$$a_n = 3 + (n - 1)(-4) = 3 - 4n + 4 = 7 - 4n$$"
              ],
              finalAnswer: "$a_n = 3 - 4(n - 1) = 7 - 4n$"
            },
            {
              label: "(iv)",
              statement: "$3, 7, 11, 15, ...$",
              working: [
                "First term $a_1 = 3$, common difference $d = 7 - 3 = 4$.",
                "$$a_n = 3 + (n - 1)(4) = 3 + 4n - 4 = 4n - 1$$"
              ],
              finalAnswer: "$a_n = 3 + 4(n - 1) = 4n - 1$"
            }
          ],
          finalAnswer: "(i) an = 35 - 5n, (ii) an = 3n - 1, (iii) an = 7 - 4n, (iv) an = 4n - 1",
          officialAnswer: "(i) an = 30 - 5(n - 1), (ii) an = 2 + 3(n - 1), (iii) an = 3 - 4(n - 1), (iv) an = 3 + 4(n - 1)"
        },
        {
          id: "ex-7-1-q4",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 4",
          topic: "Parameters of Arithmetic Progression",
          statement: "If $4, 7, 10, 13, 16, ...$ is a sequence, find:\n(i) common difference\n(ii) $n^{\\text{th}}$ term\n(iii) $21^{\\text{st}}$ term",
          formula: "$$d = a_2 - a_1, \\quad a_n = a_1 + (n - 1)d, \\quad a_{21} = a_1 + 20d$$",
          workingSteps: [
            "**(i) Common difference:** $$d = 7 - 4 = 3$$",
            "**(ii) General $n^{\\text{th}}$ term:** $$a_n = 4 + (n - 1)(3) = 4 + 3n - 3 = 3n + 1$$",
            "**(iii) $21^{\\text{st}}$ term:** $$a_{21} = 4 + (21 - 1)(3) = 4 + 20(3) = 4 + 60 = 64$$"
          ],
          finalAnswer: "(i) d = 3 | (ii) an = 3n + 1 | (iii) a21 = 64",
          officialAnswer: "(i) d = 3, (ii) an = 4 + 3(n - 1), (iii) d = 64 (a21 = 64)"
        },
        {
          id: "ex-7-1-q5",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 5",
          topic: "Missing Terms by Term-to-Term Rule",
          statement: "Write the missing terms of each of the following sequence by term to term rule:\n(i) $12, \\underline{\\phantom{x}}, 22, 27, \\underline{\\phantom{x}}, ...$\n(ii) $3, 11, \\underline{\\phantom{x}}, \\underline{\\phantom{x}}, 35, ...$\n(iii) $5, 15, \\underline{\\phantom{x}}, \\underline{\\phantom{x}}, 45, ...$\n(iv) $18, 30, \\underline{\\phantom{x}}, 54, \\underline{\\phantom{x}}, ...$",
          subQuestions: [
            { label: "(i)", statement: "$12, _, 22, 27, _, ...$", working: ["$d = 27 - 22 = 5$. Missing terms: $12 + 5 = 17$, and $27 + 5 = 32$."], finalAnswer: "$12, 17, 22, 27, 32, ...$" },
            { label: "(ii)", statement: "$3, 11, _, _, 35, ...$", working: ["$d = 11 - 3 = 8$. Missing terms: $11 + 8 = 19$, and $19 + 8 = 27$."], finalAnswer: "$3, 11, 19, 27, 35, ...$" },
            { label: "(iii)", statement: "$5, 15, _, _, 45, ...$", working: ["$d = 15 - 5 = 10$. Missing terms: $15 + 10 = 25$, and $25 + 10 = 35$."], finalAnswer: "$5, 15, 25, 35, 45, ...$" },
            { label: "(iv)", statement: "$18, 30, _, 54, _, ...$", working: ["$d = 30 - 18 = 12$. Missing terms: $30 + 12 = 42$, and $54 + 12 = 66$."], finalAnswer: "$18, 30, 42, 54, 66, ...$" }
          ],
          finalAnswer: "(i) 17, 32 | (ii) 19, 27 | (iii) 25, 35 | (iv) 42, 66",
          officialAnswer: "(i) 12,17,22,32... (ii) 3,11,19,27,35... (iii) 5,15,25,35,45... (iv) 18,30,42,54,66..."
        }
      ]
    },
    {
      id: "ex-7-2",
      number: "7.2",
      title: "Exercise 7.2",
      page: 91,
      description: "Geometric sequences, identifying common ratio r, finding higher powers, and student progression word problems.",
      questions: [
        {
          id: "ex-7-2-q1",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.2",
          exerciseTitle: "Exercise 7.2",
          questionNumber: "Question 1",
          topic: "Geometric General Formula",
          statement: "Find the general term of each of the following geometric sequences:\n(i) $3, 6, 12, ...$\n(ii) $4, 8, 16, ...$\n(iii) $6, 12, 24, ...$\n(iv) $-128, -64, -32, ...$",
          formula: "$$a_n = a_1 \\cdot r^{n-1}$$",
          subQuestions: [
            { label: "(i)", statement: "$3, 6, 12, ...$", working: ["$a_1 = 3, r = \\frac{6}{3} = 2 \\implies a_n = 3(2^{n-1})$."], finalAnswer: "$a_n = 3(2^{n-1})$" },
            { label: "(ii)", statement: "$4, 8, 16, ...$", working: ["$a_1 = 4, r = \\frac{8}{4} = 2 \\implies a_n = 4(2^{n-1})$."], finalAnswer: "$a_n = 4(2^{n-1})$" },
            { label: "(iii)", statement: "$6, 12, 24, ...$", working: ["$a_1 = 6, r = \\frac{12}{6} = 2 \\implies a_n = 6(2^{n-1})$."], finalAnswer: "$a_n = 6(2^{n-1})$" },
            { label: "(iv)", statement: "$-128, -64, -32, ...$", working: ["$a_1 = -128, r = \\frac{-64}{-128} = \\frac{1}{2} \\implies a_n = -128\\left(\\frac{1}{2}\\right)^{n-1}$."], finalAnswer: "$a_n = -128(2^{-(n-1)})$" }
          ],
          finalAnswer: "(i) an = 3(2^(n-1)), (ii) an = 4(2^(n-1)), (iii) an = 6(2^(n-1)), (iv) an = -128(1/2)^(n-1)",
          officialAnswer: "(i) an = 3*2^(n-1), (ii) an = 4*2^(n-1), (iii) an = 6*2^(n-1), (iv) an = -128*2^(n-1)"
        },
        {
          id: "ex-7-2-q4",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.2",
          exerciseTitle: "Exercise 7.2",
          questionNumber: "Question 4",
          topic: "Higher Terms of Geometric Progression",
          statement: "Find the $10^{\\text{th}}$ and $20^{\\text{th}}$ terms of the Geometric Progression with first term $3$ and common ratio $2$.",
          given: "First term $a_1 = 3$\nCommon ratio $r = 2$",
          formula: "$$a_n = a_1 \\cdot r^{n-1}$$",
          workingSteps: [
            "For $10^{\\text{th}}$ term ($n = 10$):",
            "$$a_{10} = 3 \\times 2^{10-1} = 3 \\times 2^9 = 3 \\times 512 = 1536$$",
            "For $20^{\\text{th}}$ term ($n = 20$):",
            "$$a_{20} = 3 \\times 2^{20-1} = 3 \\times 2^{19} = 3 \\times 524288 = 1,572,864$$"
          ],
          finalAnswer: "10th term = 1,536 | 20th term = 1,572,864",
          officialAnswer: "a10 = 1536, a20 = 1572864"
        },
        {
          id: "ex-7-2-q5",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.2",
          exerciseTitle: "Exercise 7.2",
          questionNumber: "Question 5",
          topic: "Progression Word Problem - Class Sections",
          statement: "There are $50$ students in section - A, $40$ students in section - B and $30$ students in section - C. If the students decrease in the same progression, find the number of students in section - E.",
          given: "Section A $= 50$\nSection B $= 40$\nSection C $= 30$",
          formula: "Common difference $d = 40 - 50 = -10$. $a_n = 50 + (n - 1)(-10)$.",
          workingSteps: [
            "Section A ($n = 1$): $50$",
            "Section B ($n = 2$): $40$",
            "Section C ($n = 3$): $30$",
            "Section D ($n = 4$): $30 - 10 = 20$",
            "Section E ($n = 5$): $20 - 10 = 10$"
          ],
          finalAnswer: "Number of students in section E = 10",
          officialAnswer: "50,40,30,20,10, E-section = 10"
        }
      ]
    }
  ]
};
