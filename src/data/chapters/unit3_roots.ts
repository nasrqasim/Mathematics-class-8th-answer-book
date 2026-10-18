import { Chapter } from '../../types/math';

export const unit3Roots: Chapter = {
  id: 3,
  number: 3,
  title: "Square and Cube Roots",
  page: 28,
  iconName: "Box",
  summary: "Comprehensive methods for calculating squares and square roots of natural numbers, common fractions, and decimals up to 6 digits by prime factorization and long division methods; finding cubes and cube roots up to 5-digit numbers; real-world volume and area word problems.",
  keyFormulas: [
    { name: "Square of a Number", formula: "a^2 = a \\times a" },
    { name: "Square Root Property", formula: "\\sqrt{x \\times x} = \\sqrt{x^2} = (x^2)^{\\frac{1}{2}} = x" },
    { name: "Square Root of Fraction", formula: "\\sqrt{\\frac{a}{b}} = \\frac{\\sqrt{a}}{\\sqrt{b}}" },
    { name: "Cube of a Number", formula: "a^3 = a \\times a \\times a" },
    { name: "Cube Root Property", formula: "\\sqrt[3]{x^3} = (x^3)^{\\frac{1}{3}} = x" },
    { name: "Volume of a Cube", formula: "V = l^3 \\implies l = \\sqrt[3]{V}" }
  ],
  exercises: [
    {
      id: "ex-3-1",
      number: "3.1",
      title: "Exercise 3.1",
      page: 34,
      description: "Finding squares, square roots by prime factorization and long division method for integers, fractions, and decimals; geometric applications.",
      questions: [
        {
          id: "ex-3-1-q1",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 1",
          topic: "Finding Squares of Numbers",
          statement: "Find the squares of each of the following:\n(i) $28$\n(ii) $246$\n(iii) $1256$\n(iv) $34507$\n(v) $562000$\n(vi) $163524$",
          formula: "$$a^2 = a \\times a$$",
          subQuestions: [
            { label: "(i)", statement: "$28^2$", working: ["$$28^2 = 28 \\times 28 = 784$$"], finalAnswer: "$784$" },
            { label: "(ii)", statement: "$246^2$", working: ["$$246^2 = 246 \\times 246 = 60,516$$", "*(Note: Textbook answer key prints 50516 due to a printing typo, exact square is 60,516)*"], finalAnswer: "$60,516$ (Key: $50516$)" },
            { label: "(iii)", statement: "$1256^2$", working: ["$$1256^2 = 1256 \\times 1256 = 1,577,536$$"], finalAnswer: "$1,577,536$" },
            { label: "(iv)", statement: "$34507^2$", working: ["$$34507^2 = 34507 \\times 34507 = 1,190,733,049$$"], finalAnswer: "$1,190,733,049$" },
            { label: "(v)", statement: "$562000^2$", working: ["$$562000^2 = 562000 \\times 562000 = 315,844,000,000$$"], finalAnswer: "$315,844,000,000$" },
            { label: "(vi)", statement: "$163524^2$", working: ["$$163524^2 = 163524 \\times 163524 = 26,740,098,576$$"], finalAnswer: "$26,740,098,576$" }
          ],
          finalAnswer: "(i) 784, (ii) 60,516, (iii) 1,577,536, (iv) 1,190,733,049, (v) 315,844,000,000, (vi) 26,740,098,576",
          officialAnswer: "(i) 784, (ii) 50516 (typo for 60516), (iii) 1577536, (iv) 1190733049, (v) 315844000000, (vi) 26740098576"
        },
        {
          id: "ex-3-1-q2",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 2",
          topic: "Square Root by Prime Factorization",
          statement: "Find the square root of each of the following numbers by prime factorization method:\n(i) $51984$\n(ii) $280900$\n(iii) $29584$\n(iv) $20164$\n(v) $14641$\n(vi) $324$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$\\sqrt{51984}$",
              working: [
                "Prime factors: $51984 = 2 \\times 2 \\times 2 \\times 2 \\times 3 \\times 3 \\times 19 \\times 19$",
                "$$= 2^4 \\times 3^2 \\times 19^2 = (2^2 \\times 3 \\times 19)^2$$",
                "$$\\sqrt{51984} = 4 \\times 3 \\times 19 = 228$$"
              ],
              finalAnswer: "$228$"
            },
            {
              label: "(ii)",
              statement: "$\\sqrt{280900}$",
              working: [
                "Prime factors: $280900 = 2 \\times 2 \\times 5 \\times 5 \\times 53 \\times 53$",
                "$$= 2^2 \\times 5^2 \\times 53^2 = (2 \\times 5 \\times 53)^2$$",
                "$$\\sqrt{280900} = 10 \\times 53 = 530$$"
              ],
              finalAnswer: "$530$"
            },
            {
              label: "(iii)",
              statement: "$\\sqrt{29584}$",
              working: [
                "Prime factors: $29584 = 2^4 \\times 43^2$",
                "$$\\sqrt{29584} = 2^2 \\times 43 = 4 \\times 43 = 172$$"
              ],
              finalAnswer: "$172$"
            },
            {
              label: "(iv)",
              statement: "$\\sqrt{20164}$",
              working: [
                "Prime factors: $20164 = 2^2 \\times 71^2$",
                "$$\\sqrt{20164} = 2 \\times 71 = 142$$"
              ],
              finalAnswer: "$142$"
            },
            {
              label: "(v)",
              statement: "$\\sqrt{14641}$",
              working: [
                "Prime factors: $14641 = 11 \\times 11 \\times 11 \\times 11 = 11^4$",
                "$$\\sqrt{14641} = 11^2 = 121$$"
              ],
              finalAnswer: "$121$"
            },
            {
              label: "(vi)",
              statement: "$\\sqrt{324}$",
              working: [
                "Prime factors: $324 = 2^2 \\times 3^4$",
                "$$\\sqrt{324} = 2 \\times 3^2 = 2 \\times 9 = 18$$"
              ],
              finalAnswer: "$18$"
            }
          ],
          finalAnswer: "(i) 228, (ii) 530, (iii) 172, (iv) 142, (v) 121, (vi) 18",
          officialAnswer: "(i) 228, (ii) 530, (iii) 172, (iv) 142, (v) 121, (vi) 18"
        },
        {
          id: "ex-3-1-q3",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 3",
          topic: "Square Root by Long Division Method",
          statement: "Find the square root of each of the following numbers by division method:\n(i) $1156$\n(ii) $4225$\n(iii) $34225$\n(iv) $393129$\n(v) $144400$\n(vi) $361$",
          subQuestions: [
            { label: "(i)", statement: "$\\sqrt{1156}$", working: ["Group in pairs from right: $\\overline{11}\\;\\overline{56}$. Largest square $\\le 11$ is $3^2=9$. Remainder 2, bring down 56 $\\to 256$. Double divisor to 6; $64 \\times 4 = 256$."], finalAnswer: "$34$" },
            { label: "(ii)", statement: "$\\sqrt{4225}$", working: ["Pairs: $\\overline{42}\\;\\overline{25}$. $6^2=36$, remainder 6, bring down 25 $\\to 625$. Double to 12; $125 \\times 5 = 625$."], finalAnswer: "$65$" },
            { label: "(iii)", statement: "$\\sqrt{34225}$", working: ["Pairs: $3\\;\\overline{42}\\;\\overline{25}$. $1^2=1$, rem 2, bring 42 $\\to 242$. $28 \\times 8 = 224$, rem 18, bring 25 $\\to 1825$. $365 \\times 5 = 1825$."], finalAnswer: "$185$" },
            { label: "(iv)", statement: "$\\sqrt{393129}$", working: ["Pairs: $\\overline{39}\\;\\overline{31}\\;\\overline{29}$. $6^2=36$, rem 3, bring 31 $\\to 331$. $122 \\times 2 = 244$, rem 87, bring 29 $\\to 8729$. $1247 \\times 7 = 8729$."], finalAnswer: "$627$" },
            { label: "(v)", statement: "$\\sqrt{144400}$", working: ["Pairs: $\\overline{14}\\;\\overline{44}\\;\\overline{00}$. $3^2=9$, rem 5, bring 44 $\\to 544$. $68 \\times 8 = 544$, rem 0, bring 00 $\\to 760 \\times 0 = 0$."], finalAnswer: "$380$" },
            { label: "(vi)", statement: "$\\sqrt{361}$", working: ["Pairs: $3\\;\\overline{61}$. $1^2=1$, rem 2, bring 61 $\\to 261$. $29 \\times 9 = 261$."], finalAnswer: "$19$" }
          ],
          finalAnswer: "(i) 34, (ii) 65, (iii) 185, (iv) 627, (v) 380, (vi) 19",
          officialAnswer: "(i) 34, (ii) 65, (iii) 185, (iv) 627, (v) 380, (vi) 19"
        },
        {
          id: "ex-3-1-q6",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 6",
          topic: "Square Root of Common Fractions",
          statement: "Find square root of following fractions by using prime factorization and division method:\n(i) $\\frac{625}{841}$\n(ii) $\\frac{5476}{5776}$\n(iii) $\\frac{61504}{62001}$\n(iv) $\\frac{174724}{176400}$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$\\sqrt{\\frac{625}{841}}$",
              working: [
                "Numerator: $\\sqrt{625} = \\sqrt{25^2} = 25$",
                "Denominator: $\\sqrt{841} = \\sqrt{29^2} = 29$",
                "$$\\sqrt{\\frac{625}{841}} = \\frac{25}{29}$$"
              ],
              finalAnswer: "$\\frac{25}{29}$"
            },
            {
              label: "(ii)",
              statement: "$\\sqrt{\\frac{5476}{5776}}$",
              working: [
                "Numerator: $\\sqrt{5476} = 74$",
                "Denominator: $\\sqrt{5776} = 76$",
                "$$\\frac{74}{76} = \\frac{37}{38}$$"
              ],
              finalAnswer: "$\\frac{37}{38}$ (or $\\frac{74}{76}$)"
            },
            {
              label: "(iii)",
              statement: "$\\sqrt{\\frac{61504}{62001}}$",
              working: [
                "Numerator: $\\sqrt{61504} = 248$",
                "Denominator: $\\sqrt{62001} = 249$",
                "$$\\sqrt{\\frac{61504}{62001}} = \\frac{248}{249}$$"
              ],
              finalAnswer: "$\\frac{248}{249}$"
            },
            {
              label: "(iv)",
              statement: "$\\sqrt{\\frac{174724}{176400}}$",
              working: [
                "Numerator: $\\sqrt{174724} = 418$",
                "Denominator: $\\sqrt{176400} = 420$",
                "$$\\frac{418}{420} = \\frac{209}{210}$$"
              ],
              finalAnswer: "$\\frac{209}{210}$ (or $\\frac{418}{420}$)"
            }
          ],
          finalAnswer: "(i) 25/29, (ii) 37/38, (iii) 248/249, (iv) 209/210",
          officialAnswer: "(i) 25/29, (ii) 74/76 = 37/38, (iii) 248/249, (iv) 418/420 = 209/210"
        },
        {
          id: "ex-3-1-q7",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 7",
          topic: "Word Problem - Table Side Length",
          statement: "A square table has an area of $64516\\text{ cm}^2$. What is the length of one side of the table?",
          given: "Area of square table $A = 64516\\text{ cm}^2$",
          formula: "$$\\text{Area} = l^2 \\implies l = \\sqrt{A}$$",
          workingSteps: [
            "$$l = \\sqrt{64516}$$",
            "By long division:",
            "Pairs: $6\\;\\overline{45}\\;\\overline{16}$",
            "$2^2 = 4$, rem 2, bring 45 $\\to 245$",
            "$45 \\times 5 = 225$, rem 20, bring 16 $\\to 2016$",
            "$504 \\times 4 = 2016$, rem 0.",
            "$$l = 254\\text{ cm}$$"
          ],
          finalAnswer: "Length of one side = 254 cm",
          officialAnswer: "254cm"
        },
        {
          id: "ex-3-1-q9",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 9",
          topic: "Word Problem - Square Formation",
          statement: "There are $12544$ students in a school ground in such a way that the number of students in each row and column are equal. Find the number of students in each row and column.",
          given: "Total number of students $= 12544$\nNumber of rows $=$ Number of columns $= x$",
          formula: "$$x^2 = 12544 \\implies x = \\sqrt{12544}$$",
          workingSteps: [
            "$$x = \\sqrt{12544}$$",
            "Prime factorization of $12544 = 2^8 \\times 7^2$",
            "$$\\sqrt{12544} = 2^4 \\times 7 = 16 \\times 7 = 112$$"
          ],
          finalAnswer: "Number of students in each row and column = 112",
          officialAnswer: "112 students"
        },
        {
          id: "ex-3-1-q10",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 10",
          topic: "Word Problem - Square Dam",
          statement: "The area of a square dam is $272484\\text{ m}^2$. Find the length of one side of the square dam.",
          given: "Area $A = 272484\\text{ m}^2$",
          formula: "$$l = \\sqrt{\\text{Area}}$$",
          workingSteps: [
            "$$l = \\sqrt{272484}$$",
            "By long division on $\\overline{27}\\;\\overline{24}\\;\\overline{84}$:",
            "$5^2 = 25$, remainder 2, bring down 24 $\\to 224$.",
            "$102 \\times 2 = 204$, remainder 20, bring down 84 $\\to 2084$.",
            "$1042 \\times 2 = 2084$, remainder 0.",
            "$$l = 522\\text{ m}$$"
          ],
          finalAnswer: "Length of one side = 522 m",
          officialAnswer: "522m"
        },
        {
          id: "ex-3-1-q11",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 11",
          topic: "Word Problem - Boundary Barrier",
          statement: "The square shape college area is $385641\\text{ m}^2$. Find the cost of constructing a barrier around its boundary at rate of $\\text{Rs. } 560\\text{ per metre}$.",
          given: "Area $= 385641\\text{ m}^2$\nRate per metre $= \\text{Rs. } 560$",
          formula: "$$l = \\sqrt{\\text{Area}}, \\quad \\text{Perimeter} = 4l, \\quad \\text{Cost} = \\text{Perimeter} \\times \\text{Rate}$$",
          workingSteps: [
            "$$l = \\sqrt{385641} = 621\\text{ m}$$",
            "Perimeter $= 4 \\times 621 = 2484\\text{ m}$",
            "Cost for complete boundary $= 2484 \\times 560 = \\text{Rs. } 1,391,040$",
            "*(Textbook answer key gives Rs. 347,760 which corresponds to 1 side cost: $621 \\times 560 = \\text{Rs. } 347,760$)*"
          ],
          finalAnswer: "Side = 621 m, Total boundary cost = Rs. 1,391,040 (One side = Rs. 347,760 as in key)",
          officialAnswer: "Rs. 347760"
        },
        {
          id: "ex-3-1-q12",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.1",
          exerciseTitle: "Exercise 3.1",
          questionNumber: "Question 12",
          topic: "Word Problem - Square Carpet",
          statement: "The area of a square carpet is $1.5376\\text{ m}^2$. Find the one side length of the carpet.",
          given: "Area $= 1.5376\\text{ m}^2$",
          formula: "$$l = \\sqrt{\\text{Area}} = \\sqrt{1.5376}$$",
          workingSteps: [
            "$$1.5376 = \\frac{15376}{10000}$$",
            "$$\\sqrt{15376} = 124$$",
            "$$\\sqrt{1.5376} = \\frac{124}{100} = 1.24\\text{ m}$$"
          ],
          finalAnswer: "Side length = 1.24 m",
          officialAnswer: "1.24m"
        }
      ]
    },
    {
      id: "ex-3-2",
      number: "3.2",
      title: "Exercise 3.2",
      page: 37,
      description: "Cubes of up to 2-digit numbers, cube roots of up to 5-digit numbers by prime factorization, and cubic word problems.",
      questions: [
        {
          id: "ex-3-2-q1",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 1",
          topic: "Cubes of Numbers",
          statement: "Find the cube of each of the following:\n(i) $13$\n(ii) $17$\n(iii) $36$\n(iv) $47$\n(v) $65$",
          formula: "$$a^3 = a \\times a \\times a$$",
          subQuestions: [
            { label: "(i)", statement: "$13^3$", working: ["$$13^3 = 13 \\times 13 \\times 13 = 169 \\times 13 = 2197$$"], finalAnswer: "$2197$" },
            { label: "(ii)", statement: "$17^3$", working: ["$$17^3 = 17 \\times 17 \\times 17 = 289 \\times 17 = 4913$$"], finalAnswer: "$4913$" },
            { label: "(iii)", statement: "$36^3$", working: ["$$36^3 = 36 \\times 36 \\times 36 = 1296 \\times 36 = 46656$$"], finalAnswer: "$46656$" },
            { label: "(iv)", statement: "$47^3$", working: ["$$47^3 = 47 \\times 47 \\times 47 = 2209 \\times 47 = 103823$$"], finalAnswer: "$103823$" },
            { label: "(v)", statement: "$65^3$", working: ["$$65^3 = 65 \\times 65 \\times 65 = 4225 \\times 65 = 274625$$"], finalAnswer: "$274625$" }
          ],
          finalAnswer: "(i) 2197, (ii) 4913, (iii) 46656, (iv) 103823, (v) 274625",
          officialAnswer: "(i) 2197, (ii) 4913, (iii) 46656, (iv) 103823, (v) 274625"
        },
        {
          id: "ex-3-2-q2",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 2",
          topic: "Cube Roots Evaluation",
          statement: "Evaluate the following:\n(i) $\\sqrt[3]{343}$\n(ii) $\\sqrt[3]{729}$\n(iii) $\\sqrt[3]{1728}$\n(iv) $\\sqrt[3]{9261}$\n(v) $\\sqrt[3]{35937}$",
          formula: "$$\\sqrt[3]{x^3} = x$$",
          subQuestions: [
            { label: "(i)", statement: "$\\sqrt[3]{343}$", working: ["$$343 = 7 \\times 7 \\times 7 = 7^3 \\implies \\sqrt[3]{343} = 7$$"], finalAnswer: "$7$" },
            { label: "(ii)", statement: "$\\sqrt[3]{729}$", working: ["$$729 = 3^6 = (3^2)^3 = 9^3 \\implies \\sqrt[3]{729} = 9$$"], finalAnswer: "$9$" },
            { label: "(iii)", statement: "$\\sqrt[3]{1728}$", working: ["$$1728 = 2^6 \\times 3^3 = (2^2 \\times 3)^3 = 12^3 \\implies \\sqrt[3]{1728} = 12$$"], finalAnswer: "$12$" },
            { label: "(iv)", statement: "$\\sqrt[3]{9261}$", working: ["$$9261 = 3^3 \\times 7^3 = (3 \\times 7)^3 = 21^3 \\implies \\sqrt[3]{9261} = 21$$"], finalAnswer: "$21$" },
            { label: "(v)", statement: "$\\sqrt[3]{35937}$", working: ["$$35937 = 3^3 \\times 11^3 = (3 \\times 11)^3 = 33^3 \\implies \\sqrt[3]{35937} = 33$$"], finalAnswer: "$33$" }
          ],
          finalAnswer: "(i) 7, (ii) 9, (iii) 12, (iv) 21, (v) 33",
          officialAnswer: "(i) 7, (ii) 9, (iii) 12, (iv) 21, (v) 33"
        },
        {
          id: "ex-3-2-q3",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 3",
          topic: "Volume of Cube Room",
          statement: "Find the volume of a cube room whose one side length is $2.7\\text{ m}$.",
          given: "Side length $l = 2.7\\text{ m}$",
          formula: "$$V = l^3$$",
          workingSteps: [
            "$$V = (2.7)^3$$",
            "$$2.7 \\times 2.7 = 7.29$$",
            "$$7.29 \\times 2.7 = 19.683\\text{ m}^3$$"
          ],
          finalAnswer: "Volume = 19.683 m³",
          officialAnswer: "19.683"
        },
        {
          id: "ex-3-2-q4",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 4",
          topic: "Volume of Cube from Surface Area",
          statement: "Find the volume of a cube whose face/surface area is $676\\text{ m}^2$.",
          given: "Area $= 676\\text{ m}^2$",
          formula: "$$a = \\sqrt{676} = 26\\text{ m}, \\quad V = a^3$$",
          workingSteps: [
            "Edge of cube $a = \\sqrt{676} = 26\\text{ m}$",
            "$$V = 26^3 = 26 \\times 26 \\times 26 = 676 \\times 26 = 17,576\\text{ m}^3$$"
          ],
          finalAnswer: "Volume = 17,576 m³",
          officialAnswer: "17576"
        },
        {
          id: "ex-3-2-q5",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 5",
          topic: "Cube Dimensions from Volume",
          statement: "Find the length, width and height of a cube whose volume is $4096\\text{ cm}^3$.",
          given: "Volume $V = 4096\\text{ cm}^3$",
          formula: "$$l = w = h = \\sqrt[3]{V}$$",
          workingSteps: [
            "For a cube, length $=$ width $=$ height $= a$",
            "$$a = \\sqrt[3]{4096}$$",
            "Prime factorize: $4096 = 2^{12} = (2^4)^3 = 16^3$",
            "$$a = 16\\text{ cm}$$"
          ],
          finalAnswer: "Length = Width = Height = 16 cm",
          officialAnswer: "16m (16 cm)"
        },
        {
          id: "ex-3-2-q6",
          chapterId: 3,
          chapterNumber: 3,
          chapterTitle: "Square and Cube Roots",
          exerciseId: "3.2",
          exerciseTitle: "Exercise 3.2",
          questionNumber: "Question 6",
          topic: "Dimensions of Cube Tent",
          statement: "The volume of a cube tent is $42875\\text{ m}^3$. Find its length, width and height.",
          given: "Volume $V = 42875\\text{ m}^3$",
          formula: "$$l = w = h = \\sqrt[3]{V}$$",
          workingSteps: [
            "$$a = \\sqrt[3]{42875}$$",
            "Prime factorization of $42875$:",
            "$$42875 = 5 \\times 5 \\times 5 \\times 7 \\times 7 \\times 7 = 5^3 \\times 7^3 = (35)^3$$",
            "$$a = 5 \\times 7 = 35\\text{ m}$$"
          ],
          finalAnswer: "Length = Width = Height = 35 m",
          officialAnswer: "35m"
        }
      ]
    }
  ]
};
