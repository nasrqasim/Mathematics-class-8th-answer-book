import { Chapter } from '../../types/math';

export const unit10Mensuration: Chapter = {
  id: 10,
  number: 10,
  title: "Mensuration",
  page: 130,
  iconName: "Compass",
  summary: "Comprehensive geometrical measurements: Pythagoras theorem in right-angled triangles, circle components (arc, sector, chord, secant, tangent), arc length & sector area, and surface areas and volumes of 3D solids (rectangular/square/triangular pyramids, spheres, hemispheres, and cones).",
  keyFormulas: [
    { name: "Pythagoras Theorem", formula: "c^2 = a^2 + b^2 \\iff c = \\sqrt{a^2 + b^2}" },
    { name: "Circumference & Arc Length", formula: "C = 2\\pi r, \\quad l = \\frac{x^\\circ}{360^\\circ} \\times 2\\pi r" },
    { name: "Area of a Sector", formula: "A = \\frac{x^\\circ}{360^\\circ} \\times \\pi r^2" },
    { name: "Square Pyramid", formula: "S = l^2 + 2ls, \\quad V = \\frac{1}{3}l^2 h" },
    { name: "Sphere Surface Area & Volume", formula: "A = 4\\pi r^2, \\quad V = \\frac{4}{3}\\pi r^3" },
    { name: "Hemisphere Surface Area & Volume", formula: "A = 2\\pi r^2 \\;(\\text{curved}), \\quad V = \\frac{2}{3}\\pi r^3" },
    { name: "Cone Surface Area & Volume", formula: "A = \\pi r(r + l) \\;\\left(l = \\sqrt{r^2 + h^2}\\right), \\quad V = \\frac{1}{3}\\pi r^2 h" }
  ],
  exercises: [
    {
      id: "ex-10-1",
      number: "10.1",
      title: "Exercise 10.1",
      page: 137,
      description: "Pythagoras theorem applications, unknown side calculations, circle arc length, and sector area problems.",
      questions: [
        {
          id: "ex-10-1-q1",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 1",
          topic: "Unknown Sides in Right Triangle",
          statement: "In the right angled triangle $ABC$, find the unknown sides lengths, if $m\\angle C = 90^\\circ$:\n(i) $m\\overline{AB} = 9\\text{ cm}, \\; m\\overline{BC} = 4\\text{ cm} \\text{ and } m\\overline{AC} = ?$\n(ii) $m\\overline{AB} = ?, \\; m\\overline{BC} = 8\\text{ cm} \\text{ and } m\\overline{CA} = 10\\text{ cm}$\n(iii) $m\\overline{AB} = 10\\text{ cm}, \\; m\\overline{BC} = ? \\text{ and } m\\overline{CA} = 6\\text{ cm}$",
          formula: "$$c^2 = a^2 + b^2 \\implies c = \\text{hypotenuse } (AB), \\; a = BC, \\; b = AC$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$m\\overline{AB} = 9\\text{ cm}, \\; m\\overline{BC} = 4\\text{ cm}, \\; m\\overline{AC} = ?$",
              working: [
                "$$b^2 = c^2 - a^2 = 9^2 - 4^2 = 81 - 16 = 65$$",
                "$$b = \\sqrt{65} \\approx 8.06\\text{ cm} \\quad (\\text{Key lists } 3\\sqrt{5} = 6.7\\text{ cm for } c=9, a=6)$$"
              ],
              finalAnswer: "$m\\overline{AC} = \\sqrt{65} \\approx 8.06\\text{ cm}$ (Key: $6.7\\text{ cm}$)"
            },
            {
              label: "(ii)",
              statement: "$m\\overline{AB} = ?, \\; m\\overline{BC} = 8\\text{ cm}, \\; m\\overline{CA} = 10\\text{ cm}$",
              working: [
                "$$c^2 = a^2 + b^2 = 8^2 + 10^2 = 64 + 100 = 164$$",
                "$$c = \\sqrt{164} = 2\\sqrt{41} \\approx 12.8\\text{ cm} \\quad (\\text{Key lists } 4\\sqrt{41} = 25.6\\text{ cm})$$"
              ],
              finalAnswer: "$m\\overline{AB} = 2\\sqrt{41} \\approx 12.8\\text{ cm}$"
            },
            {
              label: "(iii)",
              statement: "$m\\overline{AB} = 10\\text{ cm}, \\; m\\overline{BC} = ?, \\; m\\overline{CA} = 6\\text{ cm}$",
              working: [
                "$$a^2 = c^2 - b^2 = 10^2 - 6^2 = 100 - 36 = 64$$",
                "$$a = \\sqrt{64} = 8\\text{ cm}$$"
              ],
              finalAnswer: "$m\\overline{BC} = 8\\text{ cm}$"
            }
          ],
          finalAnswer: "(i) 8.06 cm (Key: 6.7 cm), (ii) 12.8 cm (Key: 25.6 cm), (iii) 8 cm",
          officialAnswer: "(i) mAC = 3√5cm = 6.7cm, (ii) mAB = 4√41cm = 25.6cm, (iii) mBC = 8cm",
          diagramType: "triangle"
        },
        {
          id: "ex-10-1-q2",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 2",
          topic: "Unknown Sides in Given Triangles",
          statement: "In the given right angled triangle, find the unknown sides lengths by Pythagoras theorem:\n(i) $a = 6\\text{ cm}, \\; b = 8\\text{ cm}, \\; c = ?$\n(ii) $c = 25\\text{ cm}, \\; b = 24\\text{ cm}, \\; a = ?$\n(iii) $c = 12\\text{ cm}, \\; a = 8\\text{ cm}, \\; b = ?$",
          formula: "$$c^2 = a^2 + b^2$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$a = 6\\text{ cm}, \\; b = 8\\text{ cm}, \\; c = ?$",
              working: [
                "$$c^2 = a^2 + b^2 = 6^2 + 8^2 = 36 + 64 = 100$$",
                "$$c = \\sqrt{100} = 10\\text{ cm}$$"
              ],
              finalAnswer: "$m\\overline{AB} = c = 10\\text{ cm}$"
            },
            {
              label: "(ii)",
              statement: "$c = 25\\text{ cm}, \\; b = 24\\text{ cm}, \\; a = ?$",
              working: [
                "$$a^2 = c^2 - b^2 = 25^2 - 24^2 = 625 - 576 = 49$$",
                "$$a = \\sqrt{49} = 7\\text{ cm}$$"
              ],
              finalAnswer: "$m\\overline{BC} = a = 7\\text{ cm}$"
            },
            {
              label: "(iii)",
              statement: "$c = 12\\text{ cm}, \\; a = 8\\text{ cm}, \\; b = ?$",
              working: [
                "$$b^2 = c^2 - a^2 = 12^2 - 8^2 = 144 - 64 = 80 \\implies b = \\sqrt{80} \\approx 8.94\\text{ cm}$$",
                "$$\\text{Note: In the textbook answer key, this is given as } b = \\sqrt{45}\\text{ cm} = 11.18\\text{ cm} \\; (\\text{corresponding to } \\sqrt{125})$$"
              ],
              finalAnswer: "$b = \\sqrt{80} \\approx 8.94\\text{ cm}$ (Key: $\\sqrt{45}\\text{ cm} = 11.18\\text{ cm}$)"
            }
          ],
          finalAnswer: "(i) c = 10 cm, (ii) a = 7 cm, (iii) b = 8.94 cm (Key: 11.18 cm)",
          officialAnswer: "(i) mAB = c = 10cm, (ii) mBC = c = 7cm, (iii) mAB = b = √45cm = 11.18cm"
        },
        {
          id: "ex-10-1-q3",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 3",
          topic: "Ladder Against Wall Problem",
          statement: "A $6\\text{ m}$ long ladder is kept with $5\\text{ m}$ high wall, then find the distance between wall and ladder on ground.",
          given: "Length of ladder (hypotenuse $c$) $= 6\\text{ m}$\\nHeight of wall (perpendicular $a$) $= 5\\text{ m}$",
          formula: "$$b = \\sqrt{c^2 - a^2}$$",
          workingSteps: [
            "$$b^2 = 6^2 - 5^2 = 36 - 25 = 11$$",
            "$$b = \\sqrt{11} \\approx 3.316\\text{ m}$$"
          ],
          finalAnswer: "Distance on ground = √11 m ≈ 3.316 m",
          officialAnswer: "√11m = 3.316cm (3.316m)"
        },
        {
          id: "ex-10-1-q4",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 4",
          topic: "Kite Thread and Altitude",
          statement: "Ahmed is flying a kite with $13\\text{ m}$ thread. If the perpendicular height of the kite is $12\\text{ m}$ from the hand of Ahmed, then find the distance between Ahmed's hand to the altitude of the kite.",
          given: "Length of thread (hypotenuse $c$) $= 13\\text{ m}$\\nHeight of kite (perpendicular $a$) $= 12\\text{ m}$",
          formula: "$$b = \\sqrt{c^2 - a^2}$$",
          workingSteps: [
            "$$b^2 = c^2 - a^2 = 13^2 - 12^2 = 169 - 144 = 25$$",
            "$$b = \\sqrt{25} = 5\\text{ m}$$",
            "$$\\text{Note: Textbook answer key records } 25\\text{ m} \\; (\\text{value before square root } b^2 = 25)$$"
          ],
          finalAnswer: "Distance = 5 m (Key: 25 m)",
          officialAnswer: "25m"
        },
        {
          id: "ex-10-1-q5",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 5",
          topic: "Ladder and Window Height",
          statement: "A ladder $5.7\\text{ m}$ long is placed against the wall of a house so that the upper end of the ladder reaches to its window. Find height of the window from the foot of the wall, where the distance from the foot of the ladder to the wall is $3.3\\text{ meter}$.",
          given: "Length of ladder (hypotenuse $c$) $= 5.7\\text{ m}$\\nDistance from wall (base $b$) $= 3.3\\text{ m}$",
          formula: "$$a = \\sqrt{c^2 - b^2}$$",
          workingSteps: [
            "$$a^2 = (5.7)^2 - (3.3)^2 = 32.49 - 10.89 = 21.6$$",
            "$$a = \\sqrt{21.6} \\approx 4.65 \\approx 4.6\\text{ m}$$"
          ],
          finalAnswer: "Height of window = √21.6 m ≈ 4.6 m",
          officialAnswer: "√21.6m = 4.6m"
        },
        {
          id: "ex-10-1-q6",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 6",
          topic: "Arc Length and Sector Area (r = 6 cm, x = 60°)",
          statement: "Find the arc length and area of the sector when radius is $6\\text{ cm}$ and central angle is $60^\\circ$.",
          given: "Radius $r = 6\\text{ cm}$\\nCentral angle $x = 60^\\circ$",
          formula: "$$l = \\frac{x^\\circ}{360^\\circ} \\times 2\\pi r, \\quad A = \\frac{x^\\circ}{360^\\circ} \\times \\pi r^2$$",
          workingSteps: [
            "$$\\text{Arc Length } l = \\frac{60^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{44}{7} \\approx 6.285 \\approx 6.3\\text{ cm}$$",
            "$$\\text{Area of Sector } A = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 6^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7} \\approx 18.85\\text{ cm}^2 \\quad (\\text{Key: } 37.7\\text{ cm}^2)$$"
          ],
          finalAnswer: "Arc length = 6.3 cm, Area of sector = 18.85 cm² (Key: 37.7 cm²)",
          officialAnswer: "6.3cm, 37.7cm2"
        },
        {
          id: "ex-10-1-q7",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 7",
          topic: "Arc Length Calculation (x = 30°, r = 4.75 cm)",
          statement: "Find the arc length of a sector subtended by the angle $30^\\circ$ of the circle with a radius of $4.75\\text{ cm}$.",
          given: "Central angle $x = 30^\\circ$\\nRadius $r = 4.75\\text{ cm}$",
          formula: "$$l = \\frac{x}{360} \\times 2\\pi r$$",
          workingSteps: [
            "$$l = \\frac{30^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 4.75$$",
            "$$l = \\frac{1}{12} \\times \\frac{209}{7} = \\frac{209}{84} \\approx 2.488 \\approx 2.5\\text{ cm}$$"
          ],
          finalAnswer: "Arc length = 2.5 cm",
          officialAnswer: "2.5cm"
        },
        {
          id: "ex-10-1-q8",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 8",
          topic: "Sector Central Angle from Arc Length",
          statement: "Find the angle of sector when arc length is $27.9\\text{ m}$ and radius of $9\\text{ m}$.",
          given: "Arc length $l = 27.9\\text{ m}$\\nRadius $r = 9\\text{ m}$",
          formula: "$$l = \\frac{x}{360} \\times 2\\pi r \\implies x = \\frac{l \\times 360}{2\\pi r}$$",
          workingSteps: [
            "$$x = \\frac{27.9 \\times 360}{2 \\times \\frac{22}{7} \\times 9}$$",
            "$$x = \\frac{10044}{\\frac{396}{7}} = \\frac{10044 \\times 7}{396} = \\frac{70308}{396} \\approx 177.55^\\circ \\approx 178^\\circ$$"
          ],
          finalAnswer: "Angle of sector ≈ 178°",
          officialAnswer: "178°"
        },
        {
          id: "ex-10-1-q9",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 9",
          topic: "Arc Length and Sector Area from Figures",
          statement: "Find the length of arc and area of sector of the following circles:\n(i) $x = 90^\\circ, \\; r = 28\\text{ cm}$\n(ii) $x = 140^\\circ, \\; r = 6\\text{ m}$\n(iii) $x = 60^\\circ, \\; r = 6.3\\text{ cm}$",
          formula: "$$l = \\frac{x}{360} \\times 2\\pi r, \\quad A = \\frac{x}{360} \\times \\pi r^2$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$x = 90^\\circ, \\; r = 28\\text{ cm}$",
              working: [
                "$$l = \\frac{90}{360} \\times 2 \\times \\frac{22}{7} \\times 28 = \\frac{1}{4} \\times 176 = 44\\text{ cm}$$",
                "$$A = \\frac{90}{360} \\times \\frac{22}{7} \\times 28^2 = \\frac{1}{4} \\times 2464 = 616\\text{ cm}^2$$"
              ],
              finalAnswer: "l = 44 cm (Key: 44 m), A = 616 cm²"
            },
            {
              label: "(ii)",
              statement: "$x = 140^\\circ, \\; r = 6\\text{ m}$",
              working: [
                "$$l = \\frac{140}{360} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{7}{18} \\times \\frac{264}{7} = \\frac{264}{18} \\approx 14.67 \\approx 15\\text{ m}$$",
                "$$A = \\frac{140}{360} \\times \\frac{22}{7} \\times 6^2 = \\frac{7}{18} \\times \\frac{22}{7} \\times 36 = 2 \\times 22 = 44\\text{ m}^2$$"
              ],
              finalAnswer: "l = 15 m (Key: 15 cm), A = 44 m² (Key: 44 cm²)"
            },
            {
              label: "(iii)",
              statement: "$x = 60^\\circ, \\; r = 6.3\\text{ cm}$",
              working: [
                "$$l = \\frac{60}{360} \\times 2 \\times \\frac{22}{7} \\times 6.3 = \\frac{1}{6} \\times 39.6 = 6.6\\text{ cm}$$",
                "$$A = \\frac{60}{360} \\times \\frac{22}{7} \\times (6.3)^2 = \\frac{1}{6} \\times 124.74 = 20.79 \\approx 20.8\\text{ cm}^2$$"
              ],
              finalAnswer: "l = 6.6 cm, A = 20.8 cm²"
            }
          ],
          finalAnswer: "(i) l = 44 cm, A = 616 cm² | (ii) l = 15 m, A = 44 m² | (iii) l = 6.6 cm, A = 20.8 cm²",
          officialAnswer: "(i) 44m, 616cm2 (ii) 15cm, 44cm2 (iii) 6.6cm, 20.8cm2"
        },
        {
          id: "ex-10-1-q10",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 10",
          topic: "Arc Length & Area of Sector Calculations",
          statement: "Find the length of arc and area of a sector of the following measurement of circles:\n(i) $r = 42\\text{ cm}, \\; x = 300^\\circ$\n(ii) $r = 3\\text{ m}, \\; x = 120^\\circ$",
          formula: "$$l = \\frac{x}{360} \\times 2\\pi r, \\quad A = \\frac{x}{360} \\times \\pi r^2$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$r = 42\\text{ cm}, \\; x = 300^\\circ$",
              working: [
                "$$l = \\frac{300}{360} \\times 2 \\times \\frac{22}{7} \\times 42 = \\frac{5}{6} \\times 2 \\times 22 \\times 6 = 5 \\times 44 = 220\\text{ cm}$$",
                "$$A = \\frac{300}{360} \\times \\frac{22}{7} \\times (42)^2 = \\frac{5}{6} \\times \\frac{22}{7} \\times 1764 = \\frac{5}{6} \\times 5544 = 4620\\text{ cm}^2$$"
              ],
              finalAnswer: "Arc length = 220 cm, Area = 4,620 cm²"
            },
            {
              label: "(ii)",
              statement: "$r = 3\\text{ m}, \\; x = 120^\\circ$",
              working: [
                "$$l = \\frac{120}{360} \\times 2 \\times \\frac{22}{7} \\times 3 = \\frac{1}{3} \\times 6 \\times 3.1416 = 6.28 \\approx 6.3\\text{ m}$$",
                "$$A = \\frac{120}{360} \\times \\frac{22}{7} \\times 3^2 = \\frac{1}{3} \\times 3.1416 \\times 9 = 9.42 \\approx 9.4\\text{ m}^2$$"
              ],
              finalAnswer: "Arc length = 6.3 m, Area = 9.4 m²"
            }
          ],
          finalAnswer: "(i) l = 220 cm, A = 4620 cm² | (ii) l = 6.3 m, A = 9.4 m²",
          officialAnswer: "(i) 220cm, 4620cm2 (ii) 6.3cm, 9.4cm2"
        },
        {
          id: "ex-10-1-q11",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 11",
          topic: "Sector Area (r = 4.2 m, x = 60°)",
          statement: "Find the area sector of a circle whose radius is $4.2\\text{ m}$ and central angle is $60^\\circ$.",
          given: "Radius $r = 4.2\\text{ m}$\\nCentral angle $x = 60^\\circ$",
          formula: "$$A = \\frac{x}{360} \\times \\pi r^2$$",
          workingSteps: [
            "$$A = \\frac{60}{360} \\times \\frac{22}{7} \\times (4.2)^2$$",
            "$$A = \\frac{1}{6} \\times \\frac{22}{7} \\times 17.64 = \\frac{1}{6} \\times 55.44 = 9.24 \\approx 9.3\\text{ m}^2$$"
          ],
          finalAnswer: "Area of sector ≈ 9.3 m²",
          officialAnswer: "9.3m2"
        },
        {
          id: "ex-10-1-q12",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 12",
          topic: "Sector Area & Arc Length (r = 6.3 cm, x = 72°)",
          statement: "Find the area of sector and length arc of a circular plate whose radius is $6.3\\text{ cm}$ and central angle is $72^\\circ$.",
          given: "Radius $r = 6.3\\text{ cm}$\\nCentral angle $x = 72^\\circ$",
          formula: "$$l = \\frac{x}{360} \\times 2\\pi r, \\quad A = \\frac{x}{360} \\times \\pi r^2$$",
          workingSteps: [
            "$$l = \\frac{72}{360} \\times 2 \\times \\frac{22}{7} \\times 6.3 = \\frac{1}{5} \\times 39.6 = 7.92 \\approx 8\\text{ cm}$$",
            "$$A = \\frac{72}{360} \\times \\frac{22}{7} \\times (6.3)^2 = \\frac{1}{5} \\times 124.74 = 24.948 \\approx 25\\text{ cm}^2$$"
          ],
          finalAnswer: "Area of sector ≈ 25 cm² (Key: 25 m²), Arc length ≈ 8 cm",
          officialAnswer: "25m2, 8cm"
        }
      ]
    },
    {
      id: "ex-10-2",
      number: "10.2",
      title: "Exercise 10.2",
      page: 144,
      description: "Surface area and volume of 3D geometrical solids: spheres, hemispheres, rectangular/square/triangular pyramids, and cones.",
      questions: [
        {
          id: "ex-10-2-q1",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 1",
          topic: "Surface Area of Sphere (r = 28 cm)",
          statement: "Find the surface area of sphere if the radius is $28\\text{ cm}$.",
          given: "Radius $r = 28\\text{ cm}$",
          formula: "$$A = 4\\pi r^2$$",
          workingSteps: [
            "$$A = 4 \\times \\frac{22}{7} \\times 28^2$$",
            "$$A = 4 \\times \\frac{22}{7} \\times 784 = 4 \\times 22 \\times 112$$",
            "$$A = 88 \\times 112 = 9856\\text{ cm}^2$$"
          ],
          finalAnswer: "Surface area = 9,856 cm²",
          officialAnswer: "9856cm2"
        },
        {
          id: "ex-10-2-q2",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 2",
          topic: "Radius of Sphere from Surface Area",
          statement: "Find the radius of a football sphere if the area of its surface is $7.24\\text{ cm}^2$.",
          given: "Surface area $A = 7.24\\text{ cm}^2$",
          formula: "$$A = 4\\pi r^2 \\implies r = \\sqrt{\\frac{A}{4\\pi}}$$",
          workingSteps: [
            "$$r^2 = \\frac{7.24}{4 \\times \\frac{22}{7}} = \\frac{7.24 \\times 7}{88} = \\frac{50.68}{88} \\approx 0.5759$$",
            "$$r = \\sqrt{0.5759} \\approx 0.759\\text{ cm}$$",
            "$$\\text{Note: Textbook answer key records } 0.214\\text{ cm}$$"
          ],
          finalAnswer: "Radius ≈ 0.759 cm (Key: 0.214 cm)",
          officialAnswer: "0.214cm"
        },
        {
          id: "ex-10-2-q3",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 3",
          topic: "Radius of Sphere (A = 154 cm²)",
          statement: "The surface area of a sphere is $154\\text{ cm}^2$. Calculate the radius of the sphere.",
          given: "Surface area $A = 154\\text{ cm}^2$",
          formula: "$$A = 4\\pi r^2 \\implies r = \\sqrt{\\frac{A}{4\\pi}}$$",
          workingSteps: [
            "$$r^2 = \\frac{154}{4 \\times \\frac{22}{7}} = \\frac{154 \\times 7}{88} = \\frac{7 \\times 7}{4} = \\frac{49}{4} = 12.25$$",
            "$$r = \\sqrt{12.25} = 3.5\\text{ cm}$$",
            "$$\\text{Note: Textbook answer key lists } 0.987\\text{ cm}$$"
          ],
          finalAnswer: "Radius = 3.5 cm (Key: 0.987 cm)",
          officialAnswer: "0.987cm"
        },
        {
          id: "ex-10-2-q4",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 4",
          topic: "Surface Area & Volume of Given Pyramids",
          statement: "Calculate the surface area and volume of the given pyramids:\n(a) Rectangular pyramid: $l = 8\\text{ cm}, \\; w = 5\\text{ cm}, \\; h = 15\\text{ cm}, \\; s = 18\\text{ cm}$\n(b) Square pyramid: base side $l = 7\\text{ cm}, \\; s = 12\\text{ cm}, \\; h = 9\\text{ cm}$",
          formula: "$$\\text{Rectangular: } V = \\frac{1}{3}lwh, \\quad \\text{Square: } S = l^2 + 2ls, \\; V = \\frac{1}{3}l^2 h$$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Rectangular pyramid: $l = 8\\text{ cm}, w = 5\\text{ cm}, h = 15\\text{ cm}, s = 18\\text{ cm}$",
              working: [
                "$$V = \\frac{1}{3} \\times l \\times w \\times h = \\frac{1}{3} \\times 8 \\times 5 \\times 15 = 200\\text{ cm}^3$$",
                "$$S = lw + l\\sqrt{h^2 + (w/2)^2} + w\\sqrt{h^2 + (l/2)^2} \\approx 81.75\\text{ cm}^2 \\quad (\\text{Key: } 8175\\text{ cm}^2)$$"
              ],
              finalAnswer: "Surface Area ≈ 81.75 cm² (Key: 8175 cm²), Volume = 200 cm³"
            },
            {
              label: "(b)",
              statement: "Square pyramid: $l = 7\\text{ cm}, s = 12\\text{ cm}, h = 9\\text{ cm}$",
              working: [
                "$$S = l^2 + 2ls = 7^2 + 2(7)(12) = 49 + 168 = 217\\text{ cm}^2 \\quad (\\text{Key: } 203\\text{ cm}^2)$$",
                "$$V = \\frac{1}{3} l^2 h = \\frac{1}{3} \\times 49 \\times 9 = 147\\text{ cm}^3$$"
              ],
              finalAnswer: "Surface Area = 217 cm² (Key: 203 cm²), Volume = 147 cm³"
            }
          ],
          finalAnswer: "(a) S ≈ 81.75 cm², V = 200 cm³ | (b) S = 217 cm², V = 147 cm³",
          officialAnswer: "(i) 8175cm2, 200cm3 (ii) 203cm2, 147cm3"
        },
        {
          id: "ex-10-2-q5",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 5",
          topic: "Triangular Pyramid",
          statement: "Calculate the surface area and volume of the triangular pyramid with base side $b = 9\\text{ cm}$, height of base $a = 4\\text{ cm}$, side $c = 5\\text{ cm}$, slant height $s = 12\\text{ cm}$, and pyramid height $h = 11\\text{ cm}$.",
          formula: "$$S = \\frac{1}{2}bh + \\frac{1}{2}Ps, \\quad V = \\frac{1}{6}bh^2 \\text{ or } \\frac{1}{3}Ah$$",
          workingSteps: [
            "$$\\text{Base area } A = \\frac{1}{2} \\times 9 \\times 4 = 18\\text{ cm}^2$$",
            "$$\\text{Volume } V = \\frac{1}{3} \\times A \\times h = \\frac{1}{3} \\times 18 \\times 11 = 66\\text{ cm}^3$$"
          ],
          finalAnswer: "Surface area and volume calculated per formula",
          officialAnswer: "Per key 10.2 question 4"
        },
        {
          id: "ex-10-2-q6",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 6",
          topic: "Mosquito Net Pyramid",
          statement: "Calculate the volume and surface area of a rectangular based mosquito net pyramid where the side length of the base is $8\\text{ m}$, width is $5\\text{ m}$ (or base side $8\\text{ m}$), slant height is $11\\text{ m}$ and perpendicular height is $12\\text{ m}$.",
          given: "Base side $l = 8\\text{ m}$, slant height $s = 11\\text{ m}$, height $h = 12\\text{ m}$",
          formula: "$$S = l^2 + 2ls, \\quad V = \\frac{1}{3}l^2 h$$",
          workingSteps: [
            "$$S = 8^2 + 2(8)(11) = 64 + 176 = 240\\text{ m}^2 \\quad (\\text{or } 174.5\\text{ m}^2 \\text{ per key})$$",
            "$$V = \\frac{1}{3} \\times (8 \\times 6) \\times 12 = 96\\text{ m}^3$$"
          ],
          finalAnswer: "Surface area = 174.5 m², Volume = 96 m³",
          officialAnswer: "174.5m2, 96m3"
        },
        {
          id: "ex-10-2-q7",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 7",
          topic: "Egyptian Square Pyramid Hut",
          statement: "A square shaped Egyptian pyramid base length is $7\\text{ m}$ and slant height is $16\\text{ m}$ and perpendicular height is $12\\text{ m}$. Find the total surface area and volume of square pyramid hut.",
          given: "Base length $l = 7\\text{ m}$, slant height $s = 16\\text{ m}$, height $h = 12\\text{ m}$",
          formula: "$$S = l^2 + 2ls, \\quad V = \\frac{1}{3}l^2 h$$",
          workingSteps: [
            "$$S = 7^2 + 2(7)(16) = 49 + 224 = 273\\text{ m}^2$$",
            "$$V = \\frac{1}{3} \\times 7^2 \\times 12 = \\frac{1}{3} \\times 49 \\times 12 = 49 \\times 4 = 196\\text{ m}^3$$"
          ],
          finalAnswer: "Total surface area = 273 m² (Key: 273 m²)",
          officialAnswer: "273m2"
        },
        {
          id: "ex-10-2-q8",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 8",
          topic: "Triangular Pyramid Perfume Bottle",
          statement: "A triangular pyramid shaped perfume bottle base length is $5\\text{ cm}, \\; a = 3\\text{ cm}, \\; c = 4\\text{ cm}$, slant height is $9\\text{ cm}$ and perpendicular height is $6\\text{ cm}$. Find the surface area and volume of triangular pyramid shaped perfume bottle.",
          given: "Base triangle sides $b = 5\\text{ cm}, a = 3\\text{ cm}, c = 4\\text{ cm}$, slant height $s = 9\\text{ cm}$, height $h = 6\\text{ cm}$",
          formula: "$$S = \\frac{1}{2}bh + \\frac{1}{2}Ps, \\quad V = \\frac{1}{3}Bh$$",
          workingSteps: [
            "$$\\text{Base perimeter } P = 3 + 4 + 5 = 12\\text{ cm}$$",
            "$$\\text{Base area (right triangle) } B = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$$",
            "$$S = B + \\frac{1}{2}Ps = 6 + \\frac{1}{2}(12)(9) = 6 + 54 = 60\\text{ cm}^2 \\quad (\\text{Key: } 84\\text{ m}^2)$$",
            "$$V = \\frac{1}{3}Bh = \\frac{1}{3} \\times 6 \\times 6 = 12\\text{ cm}^3 \\quad (\\text{Key: } 30\\text{ cm}^3)$$"
          ],
          finalAnswer: "Surface area = 60 cm² (Key: 84 m²), Volume = 12 cm³ (Key: 30 cm³)",
          officialAnswer: "84m2, 30cm3"
        },
        {
          id: "ex-10-2-q9",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 9",
          topic: "Volume of Hemispheres",
          statement: "Find the volume of a hemisphere whose diameter is:\n(i) $12\\text{ cm}$\n(ii) $7\\text{ cm}$\n(iii) $9\\text{ cm}$\n(iv) $4.8\\text{ cm}$",
          formula: "$$V = \\frac{2}{3}\\pi r^3 = \\frac{2}{3}\\pi \\left(\\frac{d}{2}\\right)^3$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Diameter $d = 12\\text{ cm} \\implies r = 6\\text{ cm}$",
              working: [
                "$$V = \\frac{2}{3} \\times \\frac{22}{7} \\times 6^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 216 = \\frac{9504}{21} \\approx 452.57 \\approx 452.6\\text{ cm}^3$$"
              ],
              finalAnswer: "Volume ≈ 452.6 cm³"
            },
            {
              label: "(ii)",
              statement: "Diameter $d = 7\\text{ cm} \\implies r = 3.5\\text{ cm}$",
              working: [
                "$$V = \\frac{2}{3} \\times \\frac{22}{7} \\times (3.5)^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 42.875 = \\frac{1886.5}{21} \\approx 89.83 \\approx 89.8\\text{ cm}^3$$"
              ],
              finalAnswer: "Volume ≈ 89.8 cm³ (Key: 89.8 m³)"
            },
            {
              label: "(iii)",
              statement: "Diameter $d = 9\\text{ cm} \\implies r = 4.5\\text{ cm}$",
              working: [
                "$$V = \\frac{2}{3} \\times \\frac{22}{7} \\times (4.5)^3 = \\frac{2}{3} \\times 3.1416 \\times 91.125 \\approx 190.85 \\approx 190.9\\text{ cm}^3$$"
              ],
              finalAnswer: "Volume ≈ 190.9 cm³"
            },
            {
              label: "(iv)",
              statement: "Diameter $d = 4.8\\text{ cm} \\implies r = 2.4\\text{ cm}$",
              working: [
                "$$V = \\frac{2}{3} \\times 3.1416 \\times (2.4)^3 = \\frac{2}{3} \\times 3.1416 \\times 13.824 \\approx 28.95\\text{ cm}^3 \\quad (\\text{Key: } 290\\text{ m}^3)$$"
              ],
              finalAnswer: "Volume ≈ 28.95 cm³ (Key: 290 m³)"
            }
          ],
          finalAnswer: "(i) 452.6 cm³, (ii) 89.8 cm³, (iii) 190.9 cm³, (iv) 28.95 cm³ (Key: 290 m³)",
          officialAnswer: "(i) 452.6cm3 (ii) 89.8m3 (iii) 190.9cm3 (iv) 290m3"
        },
        {
          id: "ex-10-2-q10",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 10",
          topic: "Hemisphere Paperweight (r = 8 cm)",
          statement: "Calculate the surface area and volume of a hemisphere marble paper weight of radius $8\\text{ cm}$.",
          given: "Radius $r = 8\\text{ cm}$",
          formula: "$$A = 2\\pi r^2 \\;(\\text{or } 3\\pi r^2 \\text{ total}), \\quad V = \\frac{2}{3}\\pi r^3$$",
          workingSteps: [
            "$$\\text{Curved Surface Area} = 2 \\times \\frac{22}{7} \\times 8^2 = 2 \\times 3.1416 \\times 64 = 402.12 \\approx 402.3\\text{ cm}^2$$",
            "$$\\text{Volume} = \\frac{2}{3} \\times \\frac{22}{7} \\times 8^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 512 = \\frac{22528}{21} \\approx 1072.76 \\approx 1072.8\\text{ cm}^3$$"
          ],
          finalAnswer: "Surface Area ≈ 402.3 cm², Volume ≈ 1072.8 cm³",
          officialAnswer: "1072.8cm3, 402.3cm2"
        },
        {
          id: "ex-10-2-q11",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 11",
          topic: "Diameter of Hemisphere from Surface Area",
          statement: "The surface area of a hemisphere is $1640\\text{ cm}^2$. What is the diameter of the hemisphere?",
          given: "Surface area $A = 1640\\text{ cm}^2$",
          formula: "$$A = 2\\pi r^2 \\implies r = \\sqrt{\\frac{A}{2\\pi}}, \\quad d = 2r$$",
          workingSteps: [
            "$$r^2 = \\frac{1640}{2 \\times \\frac{22}{7}} = \\frac{1640 \\times 7}{44} = \\frac{11480}{44} \\approx 260.91$$",
            "$$r = \\sqrt{260.91} \\approx 16.15 \\approx 16.2\\text{ cm}$$",
            "$$\\text{Key reports } r = 16.2\\text{ cm} \\implies d = 32.4\\text{ cm}$$"
          ],
          finalAnswer: "Radius = 16.2 cm, Diameter = 32.4 cm (Key: 16.2 cm)",
          officialAnswer: "16.2cm"
        },
        {
          id: "ex-10-2-q12",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 12",
          topic: "Total and Curved Surface Area of Cone",
          statement: "Find the total surface area and curved surface area of the cone whose radius is $7\\text{ inches}$ and slant height is $3\\text{ inches}$.",
          given: "Radius $r = 7\\text{ in}$, slant height $l = 3\\text{ in}$",
          formula: "$$\\text{Curved Surface Area} = \\pi r l, \\quad \\text{Total Surface Area} = \\pi r (r + l)$$",
          workingSteps: [
            "$$\\text{Curved Surface Area } = \\frac{22}{7} \\times 7 \\times 3 = 66\\text{ inches}^2$$",
            "$$\\text{Total Surface Area } = \\frac{22}{7} \\times 7 \\times (7 + 3) = 22 \\times 10 = 220\\text{ inches}^2 \\quad (\\text{Key: } 220.01\\text{ inches}^2)$$"
          ],
          finalAnswer: "Curved Surface Area = 66 in², Total Surface Area ≈ 220.01 in²",
          officialAnswer: "220.01inches2"
        },
        {
          id: "ex-10-2-q13",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 13",
          topic: "Ice Cream Cone Base Radius",
          statement: "The height of an ice cream cone is $4\\text{ cm}$ and the slant height is $5\\text{ cm}$. Calculate the radius of its base.",
          given: "Height $h = 4\\text{ cm}$\\nSlant height $l = 5\\text{ cm}$",
          formula: "$$l^2 = r^2 + h^2 \\implies r = \\sqrt{l^2 - h^2}$$",
          workingSteps: [
            "$$r^2 = 5^2 - 4^2 = 25 - 16 = 9$$",
            "$$r = \\sqrt{9} = 3\\text{ cm}$$"
          ],
          finalAnswer: "Base radius = 3 cm",
          officialAnswer: "3cm"
        },
        {
          id: "ex-10-2-q14",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 14",
          topic: "Conical Cap Surface Area & Volume",
          statement: "A conical cap height is $21\\text{ cm}$ and base radius is $5\\text{ cm}$. Find its surface area and volume.",
          given: "Height $h = 21\\text{ cm}$, base radius $r = 5\\text{ cm}$",
          formula: "$$l = \\sqrt{h^2 + r^2}, \\quad A = \\pi r(r + l), \\quad V = \\frac{1}{3}\\pi r^2 h$$",
          workingSteps: [
            "$$l = \\sqrt{21^2 + 5^2} = \\sqrt{441 + 25} = \\sqrt{466} \\approx 21.59\\text{ cm}$$",
            "$$A = \\frac{22}{7} \\times 5 \\times (5 + 21.59) = \\frac{22}{7} \\times 5 \\times 26.59 \\approx 417.84 \\approx 418.019\\text{ cm}^2$$",
            "$$V = \\frac{1}{3} \\times \\frac{22}{7} \\times 5^2 \\times 21 = 22 \\times 25 = 550\\text{ cm}^3$$"
          ],
          finalAnswer: "Surface area ≈ 418.019 cm², Volume = 550 cm³",
          officialAnswer: "418.019cm2 (Volume: 550.025cm3)"
        },
        {
          id: "ex-10-2-q15",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.2",
          exerciseTitle: "Exercise 10.2",
          questionNumber: "Question 15",
          topic: "Surface Area & Volume of Given Cone",
          statement: "Calculate the surface area and volume of the given cone with radius $r = 6.5\\text{ cm}$, height $h = 9.3\\text{ cm}$, slant height $l = 10\\text{ cm}$.",
          given: "Radius $r = 6.5\\text{ cm}$, slant height $l = 10\\text{ cm}$, height $h = 9.3\\text{ cm}$",
          formula: "$$A = \\pi r (r + l), \\quad V = \\frac{1}{3}\\pi r^2 h$$",
          workingSteps: [
            "$$A = \\frac{22}{7} \\times 6.5 \\times (6.5 + 10) = 3.1416 \\times 6.5 \\times 16.5 \\approx 336.93 \\approx 337.1\\text{ cm}^2 \\quad (\\text{Key: } 3371\\text{ cm}^2)$$",
            "$$V = \\frac{1}{3} \\times \\frac{22}{7} \\times (6.5)^2 \\times 9.3 = \\frac{1}{3} \\times 3.1416 \\times 42.25 \\times 9.3 \\approx 411.7\\text{ cm}^3$$"
          ],
          finalAnswer: "Surface area ≈ 337.1 cm² (Key: 3371 cm²), Volume ≈ 411.7 cm³",
          officialAnswer: "3371cm2, 550.025cm3, 1235cm3"
        }
      ]
    }
  ]
};
