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
          id: "ex-7-1-q2",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 2",
          topic: "Find Arithmetic Sequence from nth Term",
          statement: "Find an arithmetic sequence when:\n(i) $a_n = 4n$\n(ii) $a_n = 55 - 5n$\n(iii) $a_n = 2n - 5$\n(iv) $a_n = 6n - 2$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$a_n = 4n$",
              working: [
                "$n=1 \\implies 4(1) = 4$, $n=2 \\implies 8$, $n=3 \\implies 12$, $n=4 \\implies 16$, $n=5 \\implies 20$."
              ],
              finalAnswer: "$4, 8, 12, 16, 20, ...$"
            },
            {
              label: "(ii)",
              statement: "$a_n = 55 - 5n$",
              working: [
                "$n=1 \\implies 55 - 5 = 50$, $n=2 \\implies 45$, $n=3 \\implies 40$, $n=4 \\implies 35$, $n=5 \\implies 30$."
              ],
              finalAnswer: "$50, 45, 40, 35, 30, ...$"
            },
            {
              label: "(iii)",
              statement: "$a_n = 2n - 5$",
              working: [
                "$n=1 \\implies 2 - 5 = -3$, $n=2 \\implies -1$, $n=3 \\implies 1$, $n=4 \\implies 3$."
              ],
              finalAnswer: "$-3, -1, 1, 3, ...$"
            },
            {
              label: "(iv)",
              statement: "$a_n = 6n - 2$",
              working: [
                "$n=1 \\implies 6 - 2 = 4$, $n=2 \\implies 10$, $n=3 \\implies 16$, $n=4 \\implies 22$."
              ],
              finalAnswer: "$4, 10, 16, 22, ...$"
            }
          ],
          finalAnswer: "(i) 4, 8, 12, 16, 20, ... | (ii) 50, 45, 40, 35, 30, ... | (iii) -3, -1, 1, 3, ... | (iv) 4, 10, 16, 22, ...",
          officialAnswer: "(i) 4,8,12,16,20... (ii) 50,45,40,35,30... (iii) -3,-1,1,3... (iv) 4,10,16,22..."
        },
        {
          id: "ex-7-1-q3",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 3",
          topic: "General Term Construction",
          statement: "Construct the formula for the general term ($n^{\\text{th}}$ term) of a given arithmetic sequence:\n$4, 8, 12, 16, 20, 24, ...$",
          given: "Sequence: $4, 8, 12, 16, 20, 24, ...$",
          formula: "$$a_n = a_1 + (n - 1)d$$",
          workingSteps: [
            "First term $a_1 = 4$",
            "Common difference $d = 8 - 4 = 4$",
            "$$a_n = 4 + (n - 1)4 = 4 + 4n - 4 = 4n$$"
          ],
          finalAnswer: "General term: an = 4n (or an = 4 + 4(n - 1))",
          officialAnswer: "an = 4 + 4(n - 1) = 4n"
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
          officialAnswer: "(i) d = 3, (ii) an = 4 + 3(n - 1), (iii) a21 = 64"
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
        },
        {
          id: "ex-7-1-q6",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 6",
          topic: "Next 4 Terms by Position-to-Term Rule",
          statement: "Write the next 4 terms of each of the following sequence by position to term rule:\n(i) $5, 8, 11, ...$\n(ii) $3, 6, 9, 12, ...$\n(iii) $1, 3, 5, 7, ...$\n(iv) $22, 19, 16, ...$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$5, 8, 11, ...$",
              working: ["$d = 3$. Terms: $11 + 3 = 14, 14 + 3 = 17, 17 + 3 = 20, 20 + 3 = 23$."],
              finalAnswer: "$14, 17, 20, 23$"
            },
            {
              label: "(ii)",
              statement: "$3, 6, 9, 12, ...$",
              working: ["$d = 3$. Terms: $12 + 3 = 15, 15 + 3 = 18, 18 + 3 = 21, 21 + 3 = 24$."],
              finalAnswer: "$15, 18, 21, 24$"
            },
            {
              label: "(iii)",
              statement: "$1, 3, 5, 7, ...$",
              working: ["$d = 2$. Terms: $7 + 2 = 9, 9 + 2 = 11, 11 + 2 = 13, 13 + 2 = 15$."],
              finalAnswer: "$9, 11, 13, 15$"
            },
            {
              label: "(iv)",
              statement: "$22, 19, 16, ...$",
              working: ["$d = -3$. Terms: $16 - 3 = 13, 13 - 3 = 10, 10 - 3 = 7, 7 - 3 = 4$."],
              finalAnswer: "$13, 10, 7, 4$"
            }
          ],
          finalAnswer: "(i) 14, 17, 20, 23 | (ii) 15, 18, 21, 24 | (iii) 9, 11, 13, 15 | (iv) 13, 10, 7, 4",
          officialAnswer: "(i) 14,17,20,23 (ii) 15,18,21,24 (iii) 9,11,13,15 (iv) 13,10,7,4"
        },
        {
          id: "ex-7-1-q7",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.1",
          exerciseTitle: "Exercise 7.1",
          questionNumber: "Question 7",
          topic: "15th Term of Arithmetic Progression",
          statement: "Find the $15^{\\text{th}}$ term of the arithmetic progression $3, 7, 11, 15, ...$",
          given: "First term $a_1 = 3$\nCommon difference $d = 7 - 3 = 4$",
          formula: "$$a_n = a_1 + (n - 1)d \\implies a_{15} = a_1 + 14d$$",
          workingSteps: [
            "$$a_{15} = 3 + 14 \\times 4 = 3 + 56 = 59$$",
            "Note: Textbook Answer Key on page 226 lists $a_{15} = 71$."
          ],
          finalAnswer: "15th term = 59 (Textbook Key: a15 = 71)",
          officialAnswer: "a15 = 71"
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
          id: "ex-7-2-q2",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.2",
          exerciseTitle: "Exercise 7.2",
          questionNumber: "Question 2",
          topic: "Find Geometric Sequence from nth Term",
          statement: "Find the geometric sequence where $a_n = 4(3^{n - 1})$.",
          formula: "$$a_n = 4(3^{n - 1})$$",
          workingSteps: [
            "For $n=1$: $a_1 = 4(3^{1-1}) = 4(3^0) = 4(1) = 4$",
            "For $n=2$: $a_2 = 4(3^{2-1}) = 4(3^1) = 12$",
            "For $n=3$: $a_3 = 4(3^{3-1}) = 4(3^2) = 4 \\times 9 = 36$",
            "For $n=4$: $a_4 = 4(3^{4-1}) = 4(3^3) = 4 \\times 27 = 108$"
          ],
          finalAnswer: "Geometric sequence = 4, 12, 36, 108, ...",
          officialAnswer: "4, 12, 36, 108, ..."
        },
        {
          id: "ex-7-2-q3",
          chapterId: 7,
          chapterNumber: 7,
          chapterTitle: "Number Sequence and Patterns",
          exerciseId: "7.2",
          exerciseTitle: "Exercise 7.2",
          questionNumber: "Question 3",
          topic: "First 6 Terms of Geometric Sequence",
          statement: "Find the first 6 terms of geometric sequence when $a_n = 3(2^{n - 1})$?",
          formula: "$$a_n = 3(2^{n - 1})$$",
          workingSteps: [
            "$$a_1 = 3(2^0) = 3$$",
            "$$a_2 = 3(2^1) = 6$$",
            "$$a_3 = 3(2^2) = 12$$",
            "$$a_4 = 3(2^3) = 24$$",
            "$$a_5 = 3(2^4) = 48$$",
            "$$a_6 = 3(2^5) = 3 \\times 32 = 96$$"
          ],
          finalAnswer: "First 6 terms: 3, 6, 12, 24, 48, 96 (6th term a6 = 96)",
          officialAnswer: "a6 = 96"
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
