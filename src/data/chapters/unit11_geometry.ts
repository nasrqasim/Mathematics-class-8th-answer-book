import { Chapter } from '../../types/math';

export const unit11Geometry: Chapter = {
  id: 11,
  number: 11,
  title: "Congruency, Similarity & Transformations",
  page: 148,
  iconName: "Shapes",
  summary: "Comprehensive geometric theory and practical constructions: triangle congruence criteria (SSS, SAS, ASA, HS), similarity ratios, geometric constructions of triangles, quadrilaterals (parallelograms, squares, rectangles, rhombuses, trapeziums, kites), angle & line bisectors, and coordinate transformations (rotations by 90°, 180°, 270° and enlargements with scale factors).",
  keyFormulas: [
    { name: "Congruence Postulates", formula: "\\text{SSS } \\cong \\text{ SSS}, \\; \\text{SAS } \\cong \\text{ SAS}, \\; \\text{ASA } \\cong \\text{ ASA}, \\; \\text{HS } \\cong \\text{ HS}" },
    { name: "Scale Factor of Similarity", formula: "k = \\frac{\\text{Length of image}}{\\text{Length of object}} = \\frac{a'}{a} = \\frac{b'}{b}" },
    { name: "Rotation 90° Clockwise", formula: "(x, y) \\longrightarrow (y, -x)" },
    { name: "Rotation 180°", formula: "(x, y) \\longrightarrow (-x, -y)" },
    { name: "Rotation 270° Clockwise / 90° CCW", formula: "(x, y) \\longrightarrow (-y, x)" },
    { name: "Coordinate Enlargement", formula: "P'(x', y') = \\left(x_c + k(x - x_c), \\; y_c + k(y - y_c)\\right)" }
  ],
  exercises: [
    {
      id: "ex-11-1",
      number: "11.1",
      title: "Exercise 11.1",
      page: 154,
      description: "Identifying congruent and similar triangles, applying postulates (SSS, SAS, ASA, HS), and formal geometric proofs.",
      questions: [
        {
          id: "ex-11-1-q1",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.1",
          exerciseTitle: "Exercise 11.1",
          questionNumber: "Question 1",
          topic: "Congruent vs Similar Triangles",
          statement: "State whether the two triangles are congruent or similar and justify your answer:\n(i) $\\Delta ABC$ and $\\Delta PQR$ with sides $5\\text{ cm}, 5\\text{ cm}, 3\\text{ cm}$ and angles $70^\\circ, 70^\\circ, 40^\\circ$\n(ii) Equilateral triangles with all sides $5\\text{ cm}$\n(iii) Triangles with angles $85^\\circ, 55^\\circ, 40^\\circ$ but different sizes\n(iv) Triangles with sides $(2, 3, 3.5)$ and $(4, 6, 7)$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Triangles with identical sides (5, 5, 3) and angles (70°, 70°, 40°)",
              working: ["All corresponding sides and angles are equal."],
              finalAnswer: "Congruent (by SSS or SAS)"
            },
            {
              label: "(ii)",
              statement: "Two triangles with all three sides equal to 5 cm",
              working: ["All 3 sides have identical lengths $5\\text{ cm} = 5\\text{ cm}$."],
              finalAnswer: "Congruent (by SSS)"
            },
            {
              label: "(iii)",
              statement: "Triangles with angles 85°, 55°, 40° but different side lengths",
              working: ["Angles are equal, but sizes are enlarged/reduced."],
              finalAnswer: "Similar (by AAA similarity)"
            },
            {
              label: "(iv)",
              statement: "Sides 2, 3, 3.5 and 4, 6, 7",
              working: ["$$\\frac{4}{2} = \\frac{6}{3} = \\frac{7}{3.5} = 2 \\quad (\\text{constant scale factor } k = 2)$$"],
              finalAnswer: "Similar (by SSS similarity, scale factor = 2)"
            }
          ],
          finalAnswer: "Congruent: (i), (ii) | Similar: (iii), (iv)",
          officialAnswer: "Congruent: (i), (ii) Similar: (iii), (iv)"
        }
      ]
    },
    {
      id: "ex-11-2",
      number: "11.2",
      title: "Exercise 11.2",
      page: 160,
      description: "Geometric construction of quadrilaterals: parallelograms, squares, rhombuses, rectangles, trapeziums, and kites with step-by-step compass and ruler protocols.",
      questions: [
        {
          id: "ex-11-2-q1",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 1",
          topic: "Construction of Parallelogram",
          statement: "Construct the parallelogram $ABCD$, when:\n(i) $AB = 6\\text{ cm}, \\; AD = 4\\text{ cm}, \\; \\angle A = 45^\\circ$\n(ii) $BC = 5\\text{ cm}, \\; CD = 3\\text{ cm}, \\; \\angle C = 60^\\circ$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$AB = 6\\text{ cm}, AD = 4\\text{ cm}, \\angle A = 45^\\circ$",
              working: [
                "1. Draw base line segment $AB = 6\\text{ cm}$ using a ruler.",
                "2. At vertex $A$, construct an angle of $45^\\circ$ using compass and ruler.",
                "3. With $A$ as center, draw an arc of radius $4\\text{ cm}$ cutting the angle arm at $D$.",
                "4. With $B$ as center and radius $4\\text{ cm}$, draw an arc.",
                "5. With $D$ as center and radius $6\\text{ cm}$, draw another arc intersecting the previous arc at $C$.",
                "6. Join $B$ to $C$ and $D$ to $C$ to complete parallelogram $ABCD$."
              ],
              finalAnswer: "Parallelogram ABCD accurately constructed."
            },
            {
              label: "(ii)",
              statement: "$BC = 5\\text{ cm}, CD = 3\\text{ cm}, \\angle C = 60^\\circ$",
              working: [
                "1. Draw base line segment $BC = 5\\text{ cm}$.",
                "2. At vertex $C$, construct an angle of $60^\\circ$.",
                "3. Cut an arc of radius $3\\text{ cm}$ at $D$.",
                "4. From $B$, draw an arc of radius $3\\text{ cm}$, and from $D$, radius $5\\text{ cm}$ intersecting at $A$.",
                "5. Join vertices to complete parallelogram $ABCD$."
              ],
              finalAnswer: "Parallelogram ABCD accurately constructed."
            }
          ],
          finalAnswer: "Both parallelograms constructed with exact ruler & compass protocols."
        },
        {
          id: "ex-11-2-q2",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 2",
          topic: "Construction of Squares",
          statement: "Construct the following squares with the given measurements:\n(i) Square $EAST$, $EA = 6.5\\text{ cm}$\n(ii) Square $WEST$, $WE = 7.5\\text{ cm}$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Square EAST with side EA = 6.5 cm",
              working: [
                "1. Draw line segment $EA = 6.5\\text{ cm}$.",
                "2. Construct perpendiculars ($90^\\circ$) at vertices $E$ and $A$.",
                "3. With radius $6.5\\text{ cm}$, draw arcs from $E$ and $A$ to cut perpendiculars at $T$ and $S$.",
                "4. Join $T$ to $S$. All 4 sides equal $6.5\\text{ cm}$ and all angles $90^\\circ$."
              ],
              finalAnswer: "Square EAST constructed with side 6.5 cm."
            },
            {
              label: "(ii)",
              statement: "Square WEST with side WE = 7.5 cm",
              working: [
                "1. Draw segment $WE = 7.5\\text{ cm}$.",
                "2. Construct right angles at $W$ and $E$, mark vertices $T$ and $S$ at distance $7.5\\text{ cm}$.",
                "3. Join $T$ and $S$."
              ],
              finalAnswer: "Square WEST constructed with side 7.5 cm."
            }
          ],
          finalAnswer: "Both squares constructed successfully."
        }
      ]
    },
    {
      id: "ex-11-4",
      number: "11.4",
      title: "Exercise 11.4",
      page: 166,
      description: "Rotations in coordinate geometry: 90° clockwise, 180°, 270°, and locating centers of rotation.",
      questions: [
        {
          id: "ex-11-4-q3",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 3",
          topic: "Rotation 90° Clockwise about Origin",
          statement: "Find the co-ordinates of the points obtained on rotating the point given below through $90^\\circ$ about the origin in clockwise direction:\n(a) $P(5, 7)$\n(b) $Q(-4, -7)$\n(c) $R(-7, 5)$\n(d) $S(2, -5)$",
          formula: "$$(x, y) \\xrightarrow{90^\\circ \\text{ CW}} (y, -x)$$",
          subQuestions: [
            { label: "(a)", statement: "$P(5, 7)$", working: ["$$x' = y = 7, \\quad y' = -x = -5$$"], finalAnswer: "$P'(7, -5)$" },
            { label: "(b)", statement: "$Q(-4, -7)$", working: ["$$x' = y = -7, \\quad y' = -(-4) = 4$$"], finalAnswer: "$Q'(-7, 4)$" },
            { label: "(c)", statement: "$R(-7, 5)$", working: ["$$x' = y = 5, \\quad y' = -(-7) = 7$$"], finalAnswer: "$R'(5, 7)$" },
            { label: "(d)", statement: "$S(2, -5)$", working: ["$$x' = y = -5, \\quad y' = -(2) = -2$$"], finalAnswer: "$S'(-5, -2)$" }
          ],
          finalAnswer: "(a) P'(7, -5), (b) Q'(-7, 4), (c) R'(5, 7), (d) S'(-5, -2)",
          diagramType: "coordinate"
        },
        {
          id: "ex-11-4-q6",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 6",
          topic: "Rotations of Point P(2, -9)",
          statement: "What will be the values of $x$ and $y$ for $P'$ if an image having point $P(2, -9)$ is rotated:\n(a) $90^\\circ$ clockwise\n(b) $180^\\circ$ counterclockwise\n(c) $270^\\circ$ clockwise",
          subQuestions: [
            {
              label: "(a)",
              statement: "90° clockwise: $(x, y) \\to (y, -x)$",
              working: ["$$P(2, -9) \\to (-9, -2)$$"],
              finalAnswer: "$P'(-2, -9)$ / $(-9, -2)$"
            },
            {
              label: "(b)",
              statement: "180°: $(x, y) \\to (-x, -y)$",
              working: ["$$P(2, -9) \\to (-2, 9)$$"],
              finalAnswer: "$P'(-2, 9)$"
            },
            {
              label: "(c)",
              statement: "270° clockwise: $(x, y) \\to (-y, x)$",
              working: ["$$P(2, -9) \\to (9, 2)$$"],
              finalAnswer: "$P'(2, 9)$ / $(9, 2)$"
            }
          ],
          finalAnswer: "(a) P'(-2, -9), (b) P'(-2, 9), (c) P'(2, 9)",
          officialAnswer: "(a) P(-2, -9), (b) P(-2, 9), (c) P(2, 9)"
        }
      ]
    }
  ]
};
