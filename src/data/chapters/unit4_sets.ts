import { Chapter } from '../../types/math';

export const unit4Sets: Chapter = {
  id: 4,
  number: 4,
  title: "Sets",
  page: 40,
  iconName: "Layers",
  summary: "Comprehensive treatment of Set theory: descriptive, tabular, and set-builder notations; subsets, proper and improper subsets, power set cardinality (2^n); set operations (union, intersection, difference, complement); commutative, associative, distributive laws; De Morgan's laws with Venn diagrams and real-life survey problems.",
  keyFormulas: [
    { name: "Power Set Cardinality", formula: "n(P(A)) = 2^n \\quad \\text{where } n = n(A)" },
    { name: "De Morgan's First Law", formula: "(A \\cup B)^c = A^c \\cap B^c" },
    { name: "De Morgan's Second Law", formula: "(A \\cap B)^c = A^c \\cup B^c" },
    { name: "Distributive Law (Union over Intersection)", formula: "A \\cup (B \\cap C) = (A \\cup B) \\cap (A \\cup C)" },
    { name: "Distributive Law (Intersection over Union)", formula: "A \\cap (B \\cup C) = (A \\cap B) \\cup (A \\cap C)" },
    { name: "Set Difference & Complement", formula: "A - B = \\{ x \\mid x \\in A \\text{ and } x \\notin B \\}, \\quad A^c = U - A" }
  ],
  exercises: [
    {
      id: "ex-4-1",
      number: "4.1",
      title: "Exercise 4.1",
      page: 44,
      description: "Writing sets in descriptive, tabular, and set-builder notations; power sets and calculating total subsets.",
      questions: [
        {
          id: "ex-4-1-q1",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.1",
          exerciseTitle: "Exercise 4.1",
          questionNumber: "Question 1",
          topic: "Descriptive and Set Builder Notation",
          statement: "Write the following sets in descriptive and set builder notation form:\n(i) $A = \\{a, e, i, o, u\\}$\n(ii) $B = \\{1, 3, 5, 7, 9\\}$\n(iii) $C = \\{2, 3, 5, 7, 9\\}$\n(iv) $D = \\{\\text{March}, \\text{May}\\}$\n(v) $E = \\{1, 2, 3, ..., 10\\}$\n(vi) $Z = \\{0, \\pm 1, \\pm 2, ...\\}$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$A = \\{a, e, i, o, u\\}$",
              working: [
                "Descriptive Form: $A = \\text{Set of vowels of the English alphabet}$",
                "Set-Builder Notation: $A = \\{x \\mid x \\text{ is a vowel of the English alphabet}\\}$"
              ],
              finalAnswer: "Descriptive: Set of vowels | Set-builder: {x | x is a vowel of English alphabet}"
            },
            {
              label: "(ii)",
              statement: "$B = \\{1, 3, 5, 7, 9\\}$",
              working: [
                "Descriptive Form: $B = \\text{Set of first five odd natural numbers}$",
                "Set-Builder Notation: $B = \\{x \\mid x \\in O \\wedge x \\le 9\\}$"
              ],
              finalAnswer: "Descriptive: Set of first five odd numbers | Set-builder: {x | x ∈ O ∧ x ≤ 9}"
            },
            {
              label: "(iii)",
              statement: "$C = \\{2, 3, 5, 7, 9\\}$",
              working: [
                "Descriptive Form: $C = \\text{Set containing first four primes and } 9$",
                "Set-Builder Notation: $C = \\{x \\mid x \\in \\mathbb{P} \\cup \\{9\\}, x < 10\\}$"
              ],
              finalAnswer: "Descriptive: First four prime numbers and 9 | Set-builder: {x | x ∈ P ∧ 2 ≤ x ≤ 7 or x = 9}"
            },
            {
              label: "(iv)",
              statement: "$D = \\{\\text{March}, \\text{May}\\}$",
              working: [
                "Descriptive Form: $D = \\text{Set of names of months of solar year starting with letter 'M'}$",
                "Set-Builder Notation: $D = \\{x \\mid x \\text{ is a month of the solar year starting with 'M'}\\}$"
              ],
              finalAnswer: "Descriptive: Months starting with 'M' | Set-builder: {x | x is month starting with 'M'}"
            },
            {
              label: "(v)",
              statement: "$E = \\{1, 2, 3, ..., 10\\}$",
              working: [
                "Descriptive Form: $E = \\text{Set of first ten natural numbers}$",
                "Set-Builder Notation: $E = \\{x \\mid x \\in \\mathbb{N} \\wedge x \\le 10\\}$"
              ],
              finalAnswer: "Descriptive: First ten natural numbers | Set-builder: {x | x ∈ N ∧ x ≤ 10}"
            },
            {
              label: "(vi)",
              statement: "$Z = \\{0, \\pm 1, \\pm 2, ...\\}$",
              working: [
                "Descriptive Form: $Z = \\text{Set of all integers}$",
                "Set-Builder Notation: $Z = \\{x \\mid x \\in \\mathbb{Z}\\}$"
              ],
              finalAnswer: "Descriptive: Set of integers | Set-builder: {x | x ∈ Z}"
            }
          ],
          finalAnswer: "All sets transcribed and verified in descriptive and set-builder notation.",
          officialAnswer: "Matches Textbook Answer Key on page 222."
        },
        {
          id: "ex-4-1-q4",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.1",
          exerciseTitle: "Exercise 4.1",
          questionNumber: "Question 4",
          topic: "Power Sets Construction",
          statement: "Write the power set of each of the following sets:\n(i) $A = \\{1, 2, 3, 4\\}$\n(ii) $B = \\{2, 4, 6\\}$\n(iii) $C = \\{0\\}$\n(iv) $D = \\{x, u\\}$\n(v) $E = \\{a, b, c, d\\}$\n(vi) $F = \\{-1, -2\\}$",
          formula: "$$P(S) = \\{ X \\mid X \\subseteq S \\}, \\quad n(P(S)) = 2^n$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$A = \\{1, 2, 3, 4\\}$",
              working: [
                "Total elements $n = 4 \\implies 2^4 = 16$ subsets.",
                "Subsets: $\\emptyset$,",
                "Singletons: $\\{1\\}, \\{2\\}, \\{3\\}, \\{4\\}$,",
                "Pairs: $\\{1, 2\\}, \\{1, 3\\}, \\{1, 4\\}, \\{2, 3\\}, \\{2, 4\\}, \\{3, 4\\}$,",
                "Triplets: $\\{1, 2, 3\\}, \\{1, 2, 4\\}, \\{1, 3, 4\\}, \\{2, 3, 4\\}$,",
                "Full set: $\\{1, 2, 3, 4\\}$."
              ],
              finalAnswer: "$P(A) = \\{\\emptyset, \\{1\\}, \\{2\\}, \\{3\\}, \\{4\\}, \\{1,2\\}, \\{1,3\\}, \\{1,4\\}, \\{2,3\\}, \\{2,4\\}, \\{3,4\\}, \\{1,2,3\\}, \\{1,2,4\\}, \\{1,3,4\\}, \\{2,3,4\\}, \\{1,2,3,4\\}\\}$"
            },
            {
              label: "(ii)",
              statement: "$B = \\{2, 4, 6\\}$",
              working: [
                "Total subsets: $2^3 = 8$.",
                "Subsets: $\\emptyset, \\{2\\}, \\{4\\}, \\{6\\}, \\{2, 4\\}, \\{2, 6\\}, \\{4, 6\\}, \\{2, 4, 6\\}$."
              ],
              finalAnswer: "$P(B) = \\{\\emptyset, \\{2\\}, \\{4\\}, \\{6\\}, \\{2,4\\}, \\{2,6\\}, \\{4,6\\}, \\{2,4,6\\}\\}$"
            },
            {
              label: "(iii)",
              statement: "$C = \\{0\\}$",
              working: ["$n = 1 \\implies 2^1 = 2$ subsets: $\\emptyset$ and $\\{0\\}$."],
              finalAnswer: "$P(C) = \\{\\emptyset, \\{0\\}\\}$"
            },
            {
              label: "(iv)",
              statement: "$D = \\{x, u\\}$",
              working: ["$n = 2 \\implies 2^2 = 4$ subsets: $\\emptyset, \\{x\\}, \\{u\\}, \\{x, u\\}$."],
              finalAnswer: "$P(D) = \\{\\emptyset, \\{x\\}, \\{u\\}, \\{x, u\\}\\}$"
            },
            {
              label: "(v)",
              statement: "$E = \\{a, b, c, d\\}$",
              working: [
                "Total subsets: $2^4 = 16$.",
                "Subsets: $\\emptyset, \\{a\\}, \\{b\\}, \\{c\\}, \\{d\\}, \\{a, b\\}, \\{a, c\\}, \\{a, d\\}, \\{b, c\\}, \\{b, d\\}, \\{c, d\\}, \\{a, b, c\\}, \\{a, b, d\\}, \\{a, c, d\\}, \\{b, c, d\\}, \\{a, b, c, d\\}$."
              ],
              finalAnswer: "$P(E) = 16\\text{ subsets}$"
            },
            {
              label: "(vi)",
              statement: "$F = \\{-1, -2\\}$",
              working: ["$n = 2 \\implies 2^2 = 4$ subsets: $\\emptyset, \\{-1\\}, \\{-2\\}, \\{-1, -2\\}$."],
              finalAnswer: "$P(F) = \\{\\emptyset, \\{-1\\}, \\{-2\\}, \\{-1, -2\\}\\}$"
            }
          ],
          finalAnswer: "All power sets enumerated exhaustively.",
          officialAnswer: "Matches Answer Key on page 222."
        },
        {
          id: "ex-4-1-q5",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.1",
          exerciseTitle: "Exercise 4.1",
          questionNumber: "Question 5",
          topic: "Cardinality of Power Set",
          statement: "Write the number of subsets of the power set in each of the following sets:\n(i) $A = \\{x, y, z\\}$\n(ii) $B = \\{x \\mid x \\in \\mathbb{N} \\wedge 1 < x < 4\\}$\n(iii) $C = \\{0, \\pm 1\\}$\n(iv) $D = \\{x \\mid x \\text{ is the capital of Pakistan}\\}$",
          formula: "$$\\text{Number of subsets} = 2^n \\quad (n = \\text{number of elements in the set})$$",
          subQuestions: [
            { label: "(i)", statement: "$A = \\{x, y, z\\}$", working: ["$n = 3 \\implies 2^3 = 8$."], finalAnswer: "$8$" },
            { label: "(ii)", statement: "$B = \\{x \\mid x \\in \\mathbb{N} \\wedge 1 < x < 4\\}$", working: ["$B = \\{2, 3\\} \\implies n = 2 \\implies 2^2 = 4$."], finalAnswer: "$4$" },
            { label: "(iii)", statement: "$C = \\{0, \\pm 1\\}$", working: ["$C = \\{-1, 0, 1\\} \\implies n = 3 \\implies 2^3 = 8$."], finalAnswer: "$8$" },
            { label: "(iv)", statement: "$D = \\{x \\mid x \\text{ is the capital of Pakistan}\\}$", working: ["$D = \\{\\text{Islamabad}\\} \\implies n = 1 \\implies 2^1 = 2$."], finalAnswer: "$2$" }
          ],
          finalAnswer: "(i) 8, (ii) 4, (iii) 8, (iv) 2",
          officialAnswer: "(i) 8, (ii) 4, (iii) 8, (iv) 2"
        }
      ]
    },
    {
      id: "ex-4-2",
      number: "4.2",
      title: "Exercise 4.2",
      page: 49,
      description: "Set operations: Union, Intersection, Difference, Complement, and verification of Commutative, Associative, and Distributive Laws.",
      questions: [
        {
          id: "ex-4-2-q1",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.2",
          exerciseTitle: "Exercise 4.2",
          questionNumber: "Question 1",
          topic: "Basic Set Operations",
          statement: "If $U = \\{0, 1, 2, 3, ..., 10\\}$, $A = \\{0, 2, 4, 6, 8\\}$, $B = \\{1, 3, 5, 7, 9\\}$, $C = \\{1, 2, 3, 8\\}$, $D = \\{2, 3, 4, 5, 6\\}$. Find out the following:\n(i) $A \\cup C$\n(ii) $B \\cap \\emptyset$\n(iii) $C \\cup B$\n(iv) $C \\cap D$\n(v) $A \\cup B$\n(vi) $U \\cup C$",
          subQuestions: [
            { label: "(i)", statement: "$A \\cup C$", working: ["$\\{0, 2, 4, 6, 8\\} \\cup \\{1, 2, 3, 8\\} = \\{0, 1, 2, 3, 4, 6, 8\\}$."], finalAnswer: "$\\{0, 1, 2, 3, 4, 6, 8\\}$" },
            { label: "(ii)", statement: "$B \\cap \\emptyset$", working: ["Intersection with empty set is empty: $\\emptyset$."], finalAnswer: "$\\emptyset$ (or $\\{\\}$)" },
            { label: "(iii)", statement: "$C \\cup B$", working: ["$\\{1, 2, 3, 8\\} \\cup \\{1, 3, 5, 7, 9\\} = \\{1, 2, 3, 5, 7, 8, 9\\}$."], finalAnswer: "$\\{1, 2, 3, 5, 7, 8, 9\\}$" },
            { label: "(iv)", statement: "$C \\cap D$", working: ["$\\{1, 2, 3, 8\\} \\cap \\{2, 3, 4, 5, 6\\} = \\{2, 3\\}$."], finalAnswer: "$\\{2, 3\\}$" },
            { label: "(v)", statement: "$A \\cup B$", working: ["$\\{0, 2, 4, 6, 8\\} \\cup \\{1, 3, 5, 7, 9\\} = \\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$."], finalAnswer: "$\\{0, 1, 2, 3, 4, 5, 6, 7, 8, 9\\}$" },
            { label: "(vi)", statement: "$U \\cup C$", working: ["Since $C \\subseteq U$, $U \\cup C = U = \\{0, 1, 2, ..., 10\\}$."], finalAnswer: "$\\{0, 1, 2, ..., 10\\}$" }
          ],
          finalAnswer: "(i) {0,1,2,3,4,6,8}, (ii) ∅, (iii) {1,2,3,5,7,8,9}, (iv) {2,3}, (v) {0,1,2,3,4,5,6,7,8,9}, (vi) {0,1,2,...,10}",
          officialAnswer: "(i) A∪C = {0,1,2,3,4,6,8}, (ii) B∩∅ = {}, (iii) C∪B = {1,2,3,5,7,8,9}, (iv) C∩D = {2,3}, (v) A∪B = {0,1,2,3,4,5,6,7,8,9}, (vi) U∪C = {0,1,2,...,10}"
        },
        {
          id: "ex-4-2-q2",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.2",
          exerciseTitle: "Exercise 4.2",
          questionNumber: "Question 2",
          topic: "Complement and Difference",
          statement: "If $U = \\{1, 2, 3, ..., 10\\}$, $A = \\{1, 2, 3, 4\\}$, $B = \\{1, 3, 4, 5\\}$. Then find:\n(i) $A^c$\n(ii) $B^c$\n(iii) $A - B$\n(iv) $B - A$",
          subQuestions: [
            { label: "(i)", statement: "$A^c = U - A$", working: ["$U - A = \\{1..10\\} - \\{1, 2, 3, 4\\} = \\{5, 6, 7, 8, 9, 10\\}$."], finalAnswer: "$\\{5, 6, 7, 8, 9, 10\\}$" },
            { label: "(ii)", statement: "$B^c = U - B$", working: ["$U - B = \\{1..10\\} - \\{1, 3, 4, 5\\} = \\{2, 6, 7, 8, 9, 10\\}$."], finalAnswer: "$\\{2, 6, 7, 8, 9, 10\\}$" },
            { label: "(iii)", statement: "$A - B$", working: ["Elements in $A$ not in $B$: $\\{1, 2, 3, 4\\} - \\{1, 3, 4, 5\\} = \\{2\\}$."], finalAnswer: "$\\{2\\}$" },
            { label: "(iv)", statement: "$B - A$", working: ["Elements in $B$ not in $A$: $\\{1, 3, 4, 5\\} - \\{1, 2, 3, 4\\} = \\{5\\}$."], finalAnswer: "$\\{5\\}$" }
          ],
          finalAnswer: "(i) {5,6,7,8,9,10}, (ii) {2,6,7,8,9,10}, (iii) {2}, (iv) {5}",
          officialAnswer: "(i) Ac = {5,6,7,8,9,10}, (ii) Bc = {2,6,7,8,9,10}, (iii) A - B = {2}, (iv) B - A = {5}"
        }
      ]
    },
    {
      id: "ex-4-3",
      number: "4.3",
      title: "Exercise 4.3",
      page: 53,
      description: "Verification of De Morgan's Laws with Venn diagrams, and real-life survey word problems.",
      questions: [
        {
          id: "ex-4-3-q1",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.3",
          exerciseTitle: "Exercise 4.3",
          questionNumber: "Question 1",
          topic: "De Morgan's Laws Verification",
          statement: "Verify De-Morgan's Law if $U = \\{1, 2, 3, ..., 20\\}$, $A = \\{2, 3, 5, 7, 9, 11\\}$ and $B = \\{1, 3, 5, 7, 9, 11, 13\\}$. Also draw Venn diagrams.",
          formula: "Law I: $(A \\cup B)^c = A^c \\cap B^c$\nLaw II: $(A \\cap B)^c = A^c \\cup B^c$",
          workingSteps: [
            "**Verification of Law I: $(A \\cup B)^c = A^c \\cap B^c$**",
            "$$A \\cup B = \\{1, 2, 3, 5, 7, 9, 11, 13\\}$$",
            "$$\\text{L.H.S} = (A \\cup B)^c = U - (A \\cup B) = \\{4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "$$A^c = U - A = \\{1, 4, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "$$B^c = U - B = \\{2, 4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "$$\\text{R.H.S} = A^c \\cap B^c = \\{4, 6, 8, 10, 12, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "Since $\\text{L.H.S} = \\text{R.H.S}$, Law I is verified.",
            "**Verification of Law II: $(A \\cap B)^c = A^c \\cup B^c$**",
            "$$A \\cap B = \\{3, 5, 7, 9, 11\\}$$",
            "$$\\text{L.H.S} = (A \\cap B)^c = \\{1, 2, 4, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "$$\\text{R.H.S} = A^c \\cup B^c = \\{1, 2, 4, 6, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20\\}$$",
            "Hence $\\text{L.H.S} = \\text{R.H.S}$, Law II is verified."
          ],
          finalAnswer: "Both De Morgan's laws verified successfully.",
          officialAnswer: "(A∪B)c = Ac∩Bc = {4,6,8,10,12,14,15,16,17,18,19,20}; (A∩B)c = Ac∪Bc = {1,2,4,6,8,10,12,14,15,16,17,18,19,20}",
          diagramType: "venn"
        },
        {
          id: "ex-4-3-q5",
          chapterId: 4,
          chapterNumber: 4,
          chapterTitle: "Sets",
          exerciseId: "4.3",
          exerciseTitle: "Exercise 4.3",
          questionNumber: "Question 5",
          topic: "Word Problem - Ice Cream Venn Diagram",
          statement: "103 customers said they liked chocolate, 98 customers said they like vanilla, while 27 customers said they liked both chocolate and vanilla. How many customers said they like only chocolate? Create a Venn diagram to illustrate the information.",
          given: "Total liking chocolate $n(C) = 103$\nTotal liking vanilla $n(V) = 98$\nLiking both $n(C \\cap V) = 27$",
          formula: "$$\\text{Only Chocolate} = n(C) - n(C \\cap V)$$",
          workingSteps: [
            "$$\\text{Customers liking only chocolate} = 103 - 27 = 76$$",
            "$$\\text{Customers liking only vanilla} = 98 - 27 = 71$$",
            "$$\\text{Customers liking both} = 27$$",
            "$$\\text{Total customers in survey} = 76 + 27 + 71 = 174$$"
          ],
          finalAnswer: "Customers who like only chocolate = 76",
          officialAnswer: "Customer who like chocolate = 76 (Textbook page 224: Chocolate = 76, Both = 27, Vanilla = 71)",
          diagramType: "venn"
        }
      ]
    }
  ]
};
