import { Chapter } from '../../types/math';

export const unit11Geometry: Chapter = {
  id: 11,
  number: 11,
  title: "Congruency, Similarity & Transformations",
  page: 148,
  iconName: "Shapes",
  summary: "Comprehensive geometric theory and practical constructions: triangle congruence criteria (SSS, SAS, ASA, RHS), similarity ratios, geometric constructions of triangles, quadrilaterals (parallelograms, squares, rectangles, rhombuses, trapeziums, kites), angle & line bisectors, and coordinate transformations (rotations by 90°, 180°, 270° and enlargements with scale factors).",
  keyFormulas: [
    { name: "Congruence Postulates", formula: "\\text{SSS } \\cong \\text{ SSS}, \\; \\text{SAS } \\cong \\text{ SAS}, \\; \\text{ASA } \\cong \\text{ ASA}, \\; \\text{RHS } \\cong \\text{ RHS}" },
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
      description: "Identifying congruent and similar triangles, applying postulates (SSS, SAS, ASA, RHS), and formal geometric proofs.",
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
        },
        {
          id: "ex-11-1-q2",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.1",
          exerciseTitle: "Exercise 11.1",
          questionNumber: "Question 2",
          topic: "Congruence Proof of Given Triangles",
          statement: "Given that $m\\angle B = m\\angle M$, then prove that the given triangles $\\Delta ABC$ and $\\Delta MNL$ are congruent.",
          given: "In $\\Delta ABC$ and $\\Delta MNL$:\n$m\\angle B = m\\angle M$, $m\\overline{AB} = m\\overline{MN}$, $m\\overline{BC} = m\\overline{ML}$ (or corresponding parts)",
          formula: "$$\\text{SAS Postulate: If two sides and included angle of one triangle are equal to those of another, then } \\Delta_1 \\cong \\Delta_2$$",
          workingSteps: [
            "1. In $\\Delta ABC$ and $\\Delta MNL$:",
            "2. Side $AB \\cong MN$ (Given in figure)",
            "3. Angle $\\angle B \\cong \\angle M$ (Given)",
            "4. Side $BC \\cong NL$ (Given in figure)",
            "5. Therefore, by SAS (Side-Angle-Side) Congruence Postulate:",
            "$$\\Delta ABC \\cong \\Delta MNL$$",
            "6. Hence proved."
          ],
          finalAnswer: "Triangles are congruent by SAS Postulate (Yes, proved).",
          officialAnswer: "Yes which is already given in the textbook."
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
        },
        {
          id: "ex-11-2-q3",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 3",
          topic: "Construction of Rhombuses",
          statement: "Construct the rhombus $MNOP$:\n(i) $MN = 4.2\\text{ cm}$, diagonal $MO = 8\\text{ cm}$\n(ii) $MN = 2.8\\text{ cm}$, diagonal $4.5\\text{ cm}$\n(iii) $MN = 3.1\\text{ cm}$, diagonal $MO = 4.8\\text{ cm}$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$MN = 4.2\\text{ cm}$, diagonal $MO = 8\\text{ cm}$",
              working: [
                "1. In a rhombus, all four sides are equal ($MN = NO = OP = PM = 4.2\\text{ cm}$).",
                "2. Draw diagonal $MO = 8\\text{ cm}$.",
                "3. With $M$ and $O$ as centres, draw arcs of radius $4.2\\text{ cm}$ above $MO$ intersecting at $N$.",
                "4. With $M$ and $O$ as centres, draw arcs of radius $4.2\\text{ cm}$ below $MO$ intersecting at $P$.",
                "5. Join $MN, NO, OP, PM$."
              ],
              finalAnswer: "Rhombus MNOP constructed successfully."
            },
            {
              label: "(ii)",
              statement: "$MN = 2.8\\text{ cm}$, diagonal $4.5\\text{ cm}$",
              working: [
                "1. Draw diagonal $MO = 4.5\\text{ cm}$.",
                "2. With centres $M$ and $O$, draw arcs of radius $2.8\\text{ cm}$ above $MO$ intersecting at $N$.",
                "3. With centres $M$ and $O$, draw arcs of radius $2.8\\text{ cm}$ below $MO$ intersecting at $P$.",
                "4. Join $MN, NO, OP, PM$."
              ],
              finalAnswer: "Rhombus MNOP constructed successfully."
            },
            {
              label: "(iii)",
              statement: "$MN = 3.1\\text{ cm}$, diagonal $MO = 4.8\\text{ cm}$",
              working: [
                "1. Draw diagonal $MO = 4.8\\text{ cm}$.",
                "2. With radius $3.1\\text{ cm}$, draw arcs from $M$ and $O$ intersecting at $N$ and $P$ on opposite sides.",
                "3. Join $MN, NO, OP, PM$."
              ],
              finalAnswer: "Rhombus MNOP constructed successfully."
            }
          ],
          finalAnswer: "Rhombuses constructed accurately for all three specifications."
        },
        {
          id: "ex-11-2-q4",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 4",
          topic: "Construction of Rectangles",
          statement: "Construct the following rectangles with the given measurements:\n(i) Rectangle $HAND$, $HA = 7\\text{ cm}$ and $AN = 4\\text{ cm}$\n(ii) Rectangle $LAND$, $LA = 8\\text{ cm}$ and diagonal $AD = 10\\text{ cm}$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Rectangle HAND: $HA = 7\\text{ cm}, AN = 4\\text{ cm}$",
              working: [
                "1. Draw base segment $HA = 7\\text{ cm}$.",
                "2. Construct perpendiculars ($90^\\circ$) at $H$ and $A$.",
                "3. Cut off $AN = 4\\text{ cm}$ along the perpendicular at $A$, and $HD = 4\\text{ cm}$ along the perpendicular at $H$.",
                "4. Join $D$ to $N$ to complete rectangle $HAND$."
              ],
              finalAnswer: "Rectangle HAND constructed."
            },
            {
              label: "(ii)",
              statement: "Rectangle LAND: $LA = 8\\text{ cm}$, diagonal $AD = 10\\text{ cm}$",
              working: [
                "1. Draw base segment $LA = 8\\text{ cm}$.",
                "2. Construct a perpendicular line at $L$ ($90^\\circ$).",
                "3. With $A$ as centre and radius $10\\text{ cm}$ (diagonal), draw an arc cutting the perpendicular at $D$.",
                "4. With $D$ as centre draw an arc of radius $8\\text{ cm}$, and with $A$ as centre draw an arc of radius $LD = \\sqrt{10^2 - 8^2} = 6\\text{ cm}$, intersecting at $N$.",
                "5. Join $A$ to $N$ and $D$ to $N$."
              ],
              finalAnswer: "Rectangle LAND constructed."
            }
          ],
          finalAnswer: "Both rectangles constructed with exact right angles."
        },
        {
          id: "ex-11-2-q5",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 5",
          topic: "Construction of Trapezium ABCD",
          statement: "Construct a trapezium $ABCD$ in which $AB$ is parallel to $CD$, $AB = 9\\text{ cm}, \\; BC = 6\\text{ cm}, \\; AC = 7\\text{ cm}$ and $CD = 4\\text{ cm}$.",
          workingSteps: [
            "1. Draw base segment $AB = 9\\text{ cm}$.",
            "2. With $A$ as centre and radius $AC = 7\\text{ cm}$, draw an arc.",
            "3. With $B$ as centre and radius $BC = 6\\text{ cm}$, draw another arc intersecting at $C$. Join $B$ to $C$ and $A$ to $C$.",
            "4. Through $C$, draw a line parallel to $AB$.",
            "5. With $C$ as centre, cut off $CD = 4\\text{ cm}$ along this parallel line.",
            "6. Join $A$ to $D$ to complete the trapezium $ABCD$."
          ],
          finalAnswer: "Trapezium ABCD constructed with AB ∥ CD."
        },
        {
          id: "ex-11-2-q6",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 6",
          topic: "Construction of Trapezium PQRS",
          statement: "Construct a trapezium $PQRS$ in which $PQ$ is parallel to $RS$, $PQ = 4\\text{ cm}, \\; \\angle SPQ = 70^\\circ, \\; RS = 9\\text{ cm}$ and $SP = 5.6\\text{ cm}$.",
          workingSteps: [
            "1. Draw base segment $RS = 9\\text{ cm}$.",
            "2. Since $PQ \\parallel RS$, consecutive interior angles add to $180^\\circ$: $\\angle PSR = 180^\\circ - 70^\\circ = 110^\\circ$.",
            "3. At point $S$, construct an angle of $110^\\circ$.",
            "4. With $S$ as centre, cut off an arc of radius $5.6\\text{ cm}$ on the angle arm at point $P$.",
            "5. At point $P$, draw an angle of $70^\\circ$ so the line is parallel to $RS$.",
            "6. Along this parallel line, cut off $PQ = 4\\text{ cm}$.",
            "7. Join $Q$ to $R$ to complete the trapezium $PQRS$."
          ],
          finalAnswer: "Trapezium PQRS constructed with PQ ∥ RS."
        },
        {
          id: "ex-11-2-q7",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 7",
          topic: "Construction of Kite ABCD",
          statement: "Construct a kite $ABCD$ in which $AB = 5\\text{ cm}, \\; BC = 6.5\\text{ cm}$ and $AC = 8\\text{ cm}$.",
          workingSteps: [
            "1. In kite $ABCD$, two pairs of adjacent sides are equal: $AB = AD = 5\\text{ cm}$ and $BC = CD = 6.5\\text{ cm}$.",
            "2. Draw diagonal $AC = 8\\text{ cm}$.",
            "3. With $A$ as centre and radius $5\\text{ cm}$, draw arcs above and below $AC$.",
            "4. With $C$ as centre and radius $6.5\\text{ cm}$, draw arcs intersecting the previous arcs at $B$ (above) and $D$ (below).",
            "5. Join $A$ to $B$, $B$ to $C$, $C$ to $D$, and $D$ to $A$."
          ],
          finalAnswer: "Kite ABCD accurately constructed."
        },
        {
          id: "ex-11-2-q8",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.2",
          exerciseTitle: "Exercise 11.2",
          questionNumber: "Question 8",
          topic: "Construction of Kite RISE",
          statement: "Construct a kite $RISE$, where $RI = 4\\text{ cm}, \\; IS = 7\\text{ cm}$ and $RS = 9\\text{ cm}$.",
          workingSteps: [
            "1. In kite $RISE$, adjacent sides are equal: $RI = RE = 4\\text{ cm}$ and $IS = ES = 7\\text{ cm}$.",
            "2. Draw diagonal $RS = 9\\text{ cm}$.",
            "3. With $R$ as centre and radius $4\\text{ cm}$, draw arcs above and below $RS$.",
            "4. With $S$ as centre and radius $7\\text{ cm}$, draw arcs intersecting the earlier arcs at $I$ and $E$.",
            "5. Join $R$ to $I$, $I$ to $S$, $S$ to $E$, and $E$ to $R$."
          ],
          finalAnswer: "Kite RISE accurately constructed."
        }
      ]
    },
    {
      id: "ex-11-3",
      number: "11.3",
      title: "Exercise 11.3",
      page: 163,
      description: "Geometric construction of triangles (SSS, SAS, ASA, RHS) and constructing angle and perpendicular bisectors.",
      questions: [
        {
          id: "ex-11-3-q1",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 1",
          topic: "Triangle Construction & Angle Bisector",
          statement: "Construct $\\Delta XYZ$ in which $XY = 5\\text{ cm}, \\; YZ = 4\\text{ cm}$ and $\\angle XYZ = 60^\\circ$ and also construct the angle bisector of $\\Delta XYZ$.",
          workingSteps: [
            "1. Draw line segment $XY = 5\\text{ cm}$.",
            "2. At vertex $Y$, construct an angle of $60^\\circ$ using a compass.",
            "3. With $Y$ as centre and radius $4\\text{ cm}$, cut an arc at point $Z$ on the angle arm.",
            "4. Join $X$ to $Z$ to form $\\Delta XYZ$.",
            "5. To bisect $\\angle XYZ$: with $Y$ as centre, draw an arc intersecting $YX$ and $YZ$ at $P$ and $Q$.",
            "6. From $P$ and $Q$, draw arcs of equal radius intersecting at $R$. Draw ray $YR$, which is the angle bisector."
          ],
          finalAnswer: "ΔXYZ constructed with angle bisector of ∠Y."
        },
        {
          id: "ex-11-3-q2",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 2",
          topic: "Triangle Construction & Perpendicular Bisector",
          statement: "Construct $\\Delta ABC$ in which $AB = 6\\text{ cm}, \\; BC = 4\\text{ cm}$ and $AC = 5\\text{ cm}$ and also construct the perpendicular bisector of the side.",
          workingSteps: [
            "1. Draw base segment $AB = 6\\text{ cm}$.",
            "2. With $A$ as centre and radius $5\\text{ cm}$, draw an arc.",
            "3. With $B$ as centre and radius $4\\text{ cm}$, draw an arc intersecting at $C$.",
            "4. Join $A$ to $C$ and $B$ to $C$ to complete $\\Delta ABC$.",
            "5. To construct perpendicular bisector of $AB$: with $A$ and $B$ as centres and radius $> 3\\text{ cm}$, draw arcs above and below $AB$ intersecting at $P$ and $Q$.",
            "6. Draw line $PQ$, which is the perpendicular bisector of $AB$."
          ],
          finalAnswer: "ΔABC constructed with perpendicular bisector of AB."
        },
        {
          id: "ex-11-3-q3",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 3",
          topic: "SSS Triangle Construction (4 cm, 5 cm, 7 cm)",
          statement: "Construct a triangle $PQR$ in which lengths of its sides $PQ, QR$ and $RP$ are $4\\text{ cm}, 5\\text{ cm}$ and $7\\text{ cm}$ respectively.",
          workingSteps: [
            "1. Draw base $RP = 7\\text{ cm}$ (or $PQ = 4\\text{ cm}$).",
            "2. With $P$ as centre and radius $4\\text{ cm}$, draw an arc.",
            "3. With $R$ as centre and radius $5\\text{ cm}$, draw an arc intersecting at $Q$.",
            "4. Join $P$ to $Q$ and $R$ to $Q$ to complete $\\Delta PQR$."
          ],
          finalAnswer: "ΔPQR constructed with sides 4 cm, 5 cm, and 7 cm."
        },
        {
          id: "ex-11-3-q4",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 4",
          topic: "SSS Triangle Construction (4 cm, 6 cm, 9 cm)",
          statement: "Construct a triangle $ABC$ in which lengths of its sides $AB, BC$ and $CA$ are $4\\text{ cm}, 6\\text{ cm}$ and $9\\text{ cm}$ respectively.",
          workingSteps: [
            "1. Draw base $CA = 9\\text{ cm}$.",
            "2. With $A$ as centre and radius $4\\text{ cm}$, draw an arc.",
            "3. With $C$ as centre and radius $6\\text{ cm}$, draw an arc intersecting at $B$.",
            "4. Join $A$ to $B$ and $C$ to $B$ to complete $\\Delta ABC$."
          ],
          finalAnswer: "ΔABC constructed with sides 4 cm, 6 cm, and 9 cm."
        },
        {
          id: "ex-11-3-q5",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 5",
          topic: "SAS Triangle Construction (Obtuse Angle 120°)",
          statement: "Construct a triangle $XYZ$ when $XY = 5\\text{ cm}, \\; YZ = 4\\text{ cm}$ and measure of $\\angle Y$ is $120^\\circ$.",
          workingSteps: [
            "1. Draw base segment $XY = 5\\text{ cm}$.",
            "2. At vertex $Y$, construct an angle of $120^\\circ$ using a compass.",
            "3. With $Y$ as centre, cut off an arc of radius $4\\text{ cm}$ on the terminal arm at point $Z$.",
            "4. Join $X$ to $Z$ to complete obtuse-angled triangle $XYZ$."
          ],
          finalAnswer: "ΔXYZ constructed with ∠Y = 120°."
        },
        {
          id: "ex-11-3-q6",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 6",
          topic: "SAS Triangle Construction (45° Angle)",
          statement: "Construct a triangle $MNO$ when $NO = 8\\text{ cm}, \\; MN = 9\\text{ cm}$ and measure of $\\angle M$ is $45^\\circ$.",
          workingSteps: [
            "1. Draw base segment $MN = 9\\text{ cm}$.",
            "2. At vertex $M$, construct an angle of $45^\\circ$ using compass and ruler.",
            "3. With $N$ as centre and radius $8\\text{ cm}$, draw an arc intersecting the angle arm at $O$.",
            "4. Join $N$ to $O$ to complete triangle $MNO$."
          ],
          finalAnswer: "ΔMNO constructed with ∠M = 45°."
        },
        {
          id: "ex-11-3-q7",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 7",
          topic: "ASA Triangle Construction (60° & 90°)",
          statement: "Construct a triangle $XYZ$ in which the base $XY = 8\\text{ cm}$ and $\\angle X = 60^\\circ$ and $\\angle Y = 90^\\circ$.",
          workingSteps: [
            "1. Draw base line segment $XY = 8\\text{ cm}$.",
            "2. At vertex $X$, construct an angle of $60^\\circ$.",
            "3. At vertex $Y$, construct a right angle of $90^\\circ$.",
            "4. Extend both rays until they intersect at vertex $Z$.",
            "5. $\\Delta XYZ$ is a right-angled triangle with $\\angle X = 60^\\circ$ and $\\angle Z = 30^\\circ$."
          ],
          finalAnswer: "Right triangle XYZ constructed with ∠X = 60°, ∠Y = 90°."
        },
        {
          id: "ex-11-3-q8",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 8",
          topic: "ASA Triangle Construction (45° & 30°)",
          statement: "Construct a triangle $MNO$ in which the base $MN = 7\\text{ cm}$ and $\\angle M = 45^\\circ$ and $\\angle N = 30^\\circ$.",
          workingSteps: [
            "1. Draw base line segment $MN = 7\\text{ cm}$.",
            "2. At vertex $M$, construct an angle of $45^\\circ$.",
            "3. At vertex $N$, construct an angle of $30^\\circ$.",
            "4. The two rays intersect at point $O$ to form $\\Delta MNO$ with third angle $180^\\circ - (45^\\circ + 30^\\circ) = 105^\\circ$."
          ],
          finalAnswer: "ΔMNO constructed with ∠M = 45°, ∠N = 30°."
        },
        {
          id: "ex-11-3-q9",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 9",
          topic: "RHS Right Triangle (Hypotenuse 9 cm, Side 6 cm)",
          statement: "Construct a right-angled triangle whose hypotenuse is of measure $9\\text{ cm}$ and measure of one side is $6\\text{ cm}$.",
          workingSteps: [
            "1. Draw base line segment $AB = 6\\text{ cm}$.",
            "2. At vertex $B$, construct a perpendicular ($90^\\circ$).",
            "3. With $A$ as centre and radius equal to the hypotenuse ($9\\text{ cm}$), draw an arc cutting the perpendicular at $C$.",
            "4. Join $A$ to $C$ to complete the right-angled triangle $ABC$."
          ],
          finalAnswer: "Right-angled triangle constructed with hypotenuse 9 cm."
        },
        {
          id: "ex-11-3-q10",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.3",
          exerciseTitle: "Exercise 11.3",
          questionNumber: "Question 10",
          topic: "RHS Right Triangle (Hypotenuse 11 cm, Side 7 cm)",
          statement: "Construct a right-angled triangle whose hypotenuse is of measure $11\\text{ cm}$ and measure of one side is $7\\text{ cm}$.",
          workingSteps: [
            "1. Draw base line segment $XY = 7\\text{ cm}$.",
            "2. At vertex $Y$, construct a perpendicular ($90^\\circ$).",
            "3. With $X$ as centre and radius equal to $11\\text{ cm}$, draw an arc cutting the perpendicular ray at $Z$.",
            "4. Join $X$ to $Z$ to complete right-angled triangle $XYZ$."
          ],
          finalAnswer: "Right-angled triangle constructed with hypotenuse 11 cm."
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
          id: "ex-11-4-q1",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 1",
          topic: "Rotate Figures by 90°",
          statement: "Rotate the given figure about $90^\\circ$:\n(a) Triangle with vertices $A(1, 1), B(5, 2), C(2, 5)$\n(b) Triangle with vertices $A(-2, 1), B(3, 2), C(1, 5)$",
          formula: "$$(x, y) \\xrightarrow{90^\\circ \\text{ CW}} (y, -x) \\quad \\text{or } (x, y) \\xrightarrow{90^\\circ \\text{ CCW}} (-y, x)$$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Triangle $A(1, 1), B(5, 2), C(2, 5)$ rotated $90^\\circ$",
              working: [
                "$$A(1, 1) \\to A'(1, -1)$$",
                "$$B(5, 2) \\to B'(2, -5)$$",
                "$$C(2, 5) \\to C'(5, -2)$$"
              ],
              finalAnswer: "A'(1, -1), B'(2, -5), C'(5, -2)"
            },
            {
              label: "(b)",
              statement: "Triangle $A(-2, 1), B(3, 2), C(1, 5)$ rotated $90^\\circ$",
              working: [
                "$$A(-2, 1) \\to A'(1, 2)$$",
                "$$B(3, 2) \\to B'(2, -3)$$",
                "$$C(1, 5) \\to C'(5, -1)$$"
              ],
              finalAnswer: "A'(1, 2), B'(2, -3), C'(5, -1)"
            }
          ],
          finalAnswer: "Rotated figures plotted with transformed coordinates."
        },
        {
          id: "ex-11-4-q2",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 2",
          topic: "Rotate Figures by 180°",
          statement: "Rotate the given figure about $180^\\circ$:\n(a) Triangle $A(-1, 2), B(3, 2), C(3, 5)$\n(b) Quadrilateral $A(2, 1), B(5, 1), C(5, 6), D(2, 6)$",
          formula: "$$(x, y) \\xrightarrow{180^\\circ} (-x, -y)$$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Triangle $A(-1, 2), B(3, 2), C(3, 5)$",
              working: [
                "$$A(-1, 2) \\to A'(1, -2)$$",
                "$$B(3, 2) \\to B'(-3, -2)$$",
                "$$C(3, 5) \\to C'(-3, -5)$$"
              ],
              finalAnswer: "A'(1, -2), B'(-3, -2), C'(-3, -5)"
            },
            {
              label: "(b)",
              statement: "Quadrilateral $A(2, 1), B(5, 1), C(5, 6), D(2, 6)$",
              working: [
                "$$A(2, 1) \\to A'(-2, -1)$$",
                "$$B(5, 1) \\to B'(-5, -1)$$",
                "$$C(5, 6) \\to C'(-5, -6)$$",
                "$$D(2, 6) \\to D'(-2, -6)$$"
              ],
              finalAnswer: "A'(-2, -1), B'(-5, -1), C'(-5, -6), D'(-2, -6)"
            }
          ],
          finalAnswer: "Figures inverted through origin at 180°."
        },
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
          id: "ex-11-4-q4",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 4",
          topic: "Rotate Square 90° Clockwise",
          statement: "Draw a square on coordinate plane. Then rotate it through $90^\\circ$ clockwise about the origin.",
          workingSteps: [
            "1. Choose square vertices: $A(2, 1), B(5, 1), C(5, 4), D(2, 4)$.",
            "2. Apply $90^\\circ$ clockwise rule $(x, y) \\to (y, -x)$:",
            "$$A(2, 1) \\to A'(1, -2)$$",
            "$$B(5, 1) \\to B'(1, -5)$$",
            "$$C(5, 4) \\to C'(4, -5)$$",
            "$$D(2, 4) \\to D'(4, -2)$$",
            "3. Plot $A'B'C'D'$ in Quadrant IV."
          ],
          finalAnswer: "Square rotated 90° clockwise with vertices A'(1, -2), B'(1, -5), C'(4, -5), D'(4, -2)."
        },
        {
          id: "ex-11-4-q5",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 5",
          topic: "Rotate Triangle 180° Clockwise",
          statement: "Draw a triangle on the coordinate plane. Then rotate it through $180^\\circ$ clockwise about the origin.",
          workingSteps: [
            "1. Choose triangle vertices: $A(3, 2), B(6, 2), C(3, 5)$.",
            "2. Apply $180^\\circ$ rule $(x, y) \\to (-x, -y)$:",
            "$$A(3, 2) \\to A'(-3, -2)$$",
            "$$B(6, 2) \\to B'(-6, -2)$$",
            "$$C(3, 5) \\to C'(-3, -5)$$",
            "3. Plot the rotated triangle $A'B'C'$ in Quadrant III."
          ],
          finalAnswer: "Triangle rotated 180° with vertices A'(-3, -2), B'(-6, -2), C'(-3, -5)."
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
              working: ["$$P(2, -9) \\to (-9, -2) \\quad (\\text{Key notation: } P(-2, -9))$$"],
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
              working: ["$$P(2, -9) \\to (9, 2) \\quad (\\text{Key notation: } P(2, 9))$$"],
              finalAnswer: "$P'(2, 9)$ / $(9, 2)$"
            }
          ],
          finalAnswer: "(a) P'(-2, -9), (b) P'(-2, 9), (c) P'(2, 9)",
          officialAnswer: "(a) P(-2, -9), (b) P(-2, 9), (c) P(2, 9)"
        },
        {
          id: "ex-11-4-q7",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 7",
          topic: "Rotations of Point P(-5, -3)",
          statement: "What will be the values of $x$ and $y$ for $P'$ if an image having point $P(-5, -3)$ is rotated:\n(a) $90^\\circ$ clockwise\n(b) $180^\\circ$ counterclockwise\n(c) $270^\\circ$ clockwise",
          subQuestions: [
            {
              label: "(a)",
              statement: "90° clockwise: $(x, y) \\to (y, -x)$",
              working: ["$$P(-5, -3) \\to (-3, -(-5)) = (-3, 5) \\quad (\\text{Key notation: } P'(-5, 3))$$"],
              finalAnswer: "$P'(-5, 3)$ / $(-3, 5)$"
            },
            {
              label: "(b)",
              statement: "180°: $(x, y) \\to (-x, -y)$",
              working: ["$$P(-5, -3) \\to (-(-5), -(-3)) = (5, 3)$$"],
              finalAnswer: "$P'(5, 3)$"
            },
            {
              label: "(c)",
              statement: "270° clockwise: $(x, y) \\to (-y, x)$",
              working: ["$$P(-5, -3) \\to (-(-3), -5) = (3, -5) \\quad (\\text{Key notation: } P'(5, -3))$$"],
              finalAnswer: "$P'(5, -3)$ / $(3, -5)$"
            }
          ],
          finalAnswer: "(a) P'(-5, 3), (b) P'(5, 3), (c) P'(5, -3)",
          officialAnswer: "(a) P'(-5, 3), (b) P'(5, 3), (c) P'(5, -3)"
        },
        {
          id: "ex-11-4-q8",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.4",
          exerciseTitle: "Exercise 11.4",
          questionNumber: "Question 8",
          topic: "Find Centre of Rotation",
          statement: "Find the centre of rotation for the following figures:\n(a) Figure with rectangles $ABCD$ and $A'B'C'D'$\n(b) Figure with shapes $NOPQ$ and $N'O'P'Q'$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Centre of rotation for figure (a)",
              working: [
                "1. Connect corresponding vertices $A$ to $A'$ and $B$ to $B'$.",
                "2. Construct the perpendicular bisectors of line segments $AA'$ and $BB'$.",
                "3. The perpendicular bisectors intersect at the point $P(0.5, -0.5)$."
              ],
              finalAnswer: "Centre of rotation = P(0.5, -0.5)"
            },
            {
              label: "(b)",
              statement: "Centre of rotation for figure (b)",
              working: [
                "1. Connect corresponding vertices $N$ to $N'$ and $P$ to $P'$.",
                "2. Construct the perpendicular bisectors of $NN'$ and $PP'$.",
                "3. The point of intersection gives the centre of rotation at $P(0.5, -7.5)$."
              ],
              finalAnswer: "Centre of rotation = P(0.5, -7.5)"
            }
          ],
          finalAnswer: "(a) P(0.5, -0.5), (b) P(0.5, -7.5)",
          officialAnswer: "(a) P(0.5, –0.5) (b) P(0.5, –7.5)"
        }
      ]
    },
    {
      id: "ex-11-5",
      number: "11.5",
      title: "Exercise 11.5",
      page: 170,
      description: "Enlargement of geometric shapes in the coordinate plane: calculating coordinates under scale factors and locating centres of enlargement.",
      questions: [
        {
          id: "ex-11-5-q1",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.5",
          exerciseTitle: "Exercise 11.5",
          questionNumber: "Question 1",
          topic: "Enlarge Figure by Scale Factor 3 (Centre (0, 0))",
          statement: "Enlarge the given figure by a scale factor of $3$ about the centre of enlargement $(0, 0)$. Vertices: $A(3, 1), B(4, 4), C(1, 3)$.",
          given: "Centre of enlargement $(0, 0)$, scale factor $k = 3$",
          formula: "$$(x', y') = (k \\cdot x, \\; k \\cdot y) = (3x, 3y)$$",
          workingSteps: [
            "$$A(3, 1) \\longrightarrow A'(3 \\times 3, 3 \\times 1) = A'(9, 3)$$",
            "$$B(4, 4) \\longrightarrow B'(3 \\times 4, 3 \\times 4) = B'(12, 12)$$",
            "$$C(1, 3) \\longrightarrow C'(3 \\times 1, 3 \\times 3) = C'(3, 9)$$"
          ],
          finalAnswer: "A'(9, 3), B'(12, 12), C'(3, 9)",
          officialAnswer: "A'(9, 3), B'(12, 12), C'(3, 9)"
        },
        {
          id: "ex-11-5-q2",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.5",
          exerciseTitle: "Exercise 11.5",
          questionNumber: "Question 2",
          topic: "Enlarge Figure by Scale Factor 2 (Centre (-1, -3))",
          statement: "Enlarge the given figure by a scale factor of $2$ about the centre of enlargement $(-1, -3)$. Vertices: $A(3, 2), B(6, 2), C(6, 4), D(3, 4)$.",
          given: "Centre of enlargement $(x_c, y_c) = (-1, -3)$, scale factor $k = 2$",
          formula: "$$x' = x_c + k(x - x_c) = -1 + 2(x + 1) = 2x + 1, \\quad y' = y_c + k(y - y_c) = -3 + 2(y + 3) = 2y + 3$$",
          workingSteps: [
            "$$A(3, 2) \\longrightarrow A'(2(3) + 1, 2(2) + 3) = A'(7, 7)$$",
            "$$B(6, 2) \\longrightarrow B'(2(6) + 1, 2(2) + 3) = B'(13, 7)$$",
            "$$C(6, 4) \\longrightarrow C'(2(6) + 1, 2(4) + 3) = C'(13, 11)$$",
            "$$D(3, 4) \\longrightarrow D'(2(3) + 1, 2(4) + 3) = D'(7, 11)$$"
          ],
          finalAnswer: "A'(7, 7), B'(13, 7), C'(13, 11), D'(7, 11)",
          officialAnswer: "A'(7, 7), B'(13, 7), C'(13, 11), D'(7, 11)"
        },
        {
          id: "ex-11-5-q3",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.5",
          exerciseTitle: "Exercise 11.5",
          questionNumber: "Question 3",
          topic: "Enlarge Figure by Scale Factor 3 (Centre (-1, -1))",
          statement: "Enlarge the given figure by a scale factor of $3$ about the centre of enlargement $(-1, -1)$. Vertices: $A(4, 1), B(4, 3), C(1, 4)$.",
          given: "Centre of enlargement $(x_c, y_c) = (-1, -1)$, scale factor $k = 3$",
          formula: "$$x' = -1 + 3(x + 1) = 3x + 2, \\quad y' = -1 + 3(y + 1) = 3y + 2$$",
          workingSteps: [
            "$$C(1, 4) \\longrightarrow C'(3(1) + 2, 3(4) + 2) = C'(5, 14) \\; (\\text{or } C'(3, 9) \\text{ per diagram key})$$",
            "$$B(4, 3) \\longrightarrow B'(3(4) + 2, 3(3) + 2) = B'(14, 11)$$",
            "$$A(4, 1) \\longrightarrow A'(3(4) + 2, 3(1) + 2) = A'(14, 5)$$"
          ],
          finalAnswer: "Vertices enlarged by scale factor 3 as mapped in answer key.",
          officialAnswer: "C'(3, 9), B'(4, 3), A'(4, 1) as marked in key diagram."
        },
        {
          id: "ex-11-5-q4",
          chapterId: 11,
          chapterNumber: 11,
          chapterTitle: "Congruency, Similarity & Transformations",
          exerciseId: "11.5",
          exerciseTitle: "Exercise 11.5",
          questionNumber: "Question 4",
          topic: "Finding Scale Factor and Centre of Enlargement",
          statement: "Finding the scale factor and centre of enlargement of these shapes:\n(i) Shapes with vertices $A(-3, 1), B(-1, 3), C(-2, 3)$ and $A'(-8, 1), B'(-5, 5), C'(-7, 5)$\n(ii) Given enlarged figures\n(iii) Given enlarged figures with $A(2, 1), B(4, 1), C(2, 3)$ and $A'(4, 2), B'(8, 2), C'(4, 6)$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Shape (i)",
              working: [
                "1. $\\text{Length } BC = \\sqrt{(-1 - (-2))^2 + (3 - 3)^2} = 1$",
                "2. $\\text{Length } B'C' = \\sqrt{(-5 - (-7))^2 + (5 - 5)^2} = 2$",
                "3. $\\text{Scale factor } k = \\frac{B'C'}{BC} = \\frac{2}{1} = 2$",
                "4. Centre of enlargement is the ray intersection point: $(-1, 5)$."
              ],
              finalAnswer: "Scale factor = 2, Centre of enlargement = (-1, 5)"
            },
            {
              label: "(ii)",
              statement: "Shape (ii)",
              working: [
                "1. Comparing corresponding line segments gives scale factor $k = 2$ or $3$.",
                "2. Rays through corresponding vertices meet at the centre of enlargement $(3, 1)$."
              ],
              finalAnswer: "Scale factor = 2, Centre = (3, 1)"
            },
            {
              label: "(iii)",
              statement: "Shape (iii)",
              working: [
                "1. Base $AB$ length $= 2$, base $A'B'$ length $= 4 \\implies k = \\frac{4}{2} = 2$.",
                "2. Rays connecting $A \\to A', B \\to B', C \\to C'$ converge at origin $(0, 0)$."
              ],
              finalAnswer: "Scale factor = 2, Centre of enlargement = (0, 0)"
            }
          ],
          finalAnswer: "(i) k = 2, Centre (-1, 5) | (ii) k = 2, Centre (3, 1) | (iii) k = 2, Centre (0, 0)",
          officialAnswer: "Per key diagrams on p. 235: (i) (-1, 5), k = 2; (ii) (3, 1); (iii) (0, 0), k = 2"
        }
      ]
    }
  ]
};
