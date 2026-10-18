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
          id: "ex-10-1-q3",
          chapterId: 10,
          chapterNumber: 10,
          chapterTitle: "Mensuration",
          exerciseId: "10.1",
          exerciseTitle: "Exercise 10.1",
          questionNumber: "Question 3",
          topic: "Ladder Against Wall Problem",
          statement: "A $6\\text{ m}$ long ladder is kept with $5\\text{ m}$ high wall, then find the distance between wall and ladder on ground.",
          given: "Length of ladder (hypotenuse $c$) $= 6\\text{ m}$\nHeight of wall (perpendicular $a$) $= 5\\text{ m}$",
          formula: "$$b = \\sqrt{c^2 - a^2}$$",
          workingSteps: [
            "$$b^2 = 6^2 - 5^2 = 36 - 25 = 11$$",
            "$$b = \\sqrt{11} \\approx 3.316\\text{ m}$$"
          ],
          finalAnswer: "Distance on ground = √11 m ≈ 3.316 m",
          officialAnswer: "√11m = 3.316cm (3.316m)"
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
          given: "Radius $r = 6\\text{ cm}$\nCentral angle $x = 60^\\circ$",
          formula: "$$l = \\frac{x^\\circ}{360^\\circ} \\times 2\\pi r, \\quad A = \\frac{x^\\circ}{360^\\circ} \\times \\pi r^2$$",
          workingSteps: [
            "$$\\text{Arc Length } l = \\frac{60^\\circ}{360^\\circ} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{1}{6} \\times 2 \\times \\frac{22}{7} \\times 6 = \\frac{44}{7} \\approx 6.285 \\approx 6.3\\text{ cm}$$",
            "$$\\text{Area of Sector } A = \\frac{60^\\circ}{360^\\circ} \\times \\frac{22}{7} \\times 6^2 = \\frac{1}{6} \\times \\frac{22}{7} \\times 36 = \\frac{132}{7} \\approx 18.85\\text{ cm}^2 \\quad (\\text{Key: } 37.7\\text{ cm}^2)$$"
          ],
          finalAnswer: "Arc length = 6.3 cm, Area of sector = 18.85 cm² (Key: 37.7 cm²)",
          officialAnswer: "6.3cm, 37.7cm2"
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
        }
      ]
    },
    {
      id: "ex-10-2",
      number: "10.2",
      title: "Exercise 10.2",
      page: 144,
      description: "Surface area and volume of 3D geometrical shapes: sphere, hemisphere, rectangular pyramid, square pyramid, and cone.",
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
            "$$\\text{Curved Surface Area} = 2 \\times \\frac{22}{7} \\times 8^2 = 2 \\times 3.1416 \\times 64 = 402.12\\text{ cm}^2$$",
            "$$\\text{Volume} = \\frac{2}{3} \\times \\frac{22}{7} \\times 8^3 = \\frac{2}{3} \\times \\frac{22}{7} \\times 512 = \\frac{22528}{21} \\approx 1072.76\\text{ cm}^3$$"
          ],
          finalAnswer: "Surface Area = 402.1 cm², Volume = 1072.8 cm³",
          officialAnswer: "1072.8cm3, 402.3cm2"
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
          given: "Height $h = 4\\text{ cm}$\nSlant height $l = 5\\text{ cm}$",
          formula: "$$l^2 = r^2 + h^2 \\implies r = \\sqrt{l^2 - h^2}$$",
          workingSteps: [
            "$$r^2 = 5^2 - 4^2 = 25 - 16 = 9$$",
            "$$r = \\sqrt{9} = 3\\text{ cm}$$"
          ],
          finalAnswer: "Base radius = 3 cm",
          officialAnswer: "3cm"
        }
      ]
    }
  ]
};
