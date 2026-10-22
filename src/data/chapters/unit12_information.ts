import { Chapter } from '../../types/math';

export const unit12Information: Chapter = {
  id: 12,
  number: 12,
  title: "Information Handling & Statistics",
  page: 178,
  iconName: "BarChart3",
  summary: "Comprehensive statistical analysis: differentiating discrete vs. continuous and grouped vs. ungrouped data; selecting and interpreting graphs (pictographs, bar graphs, multiple bar charts, line graphs, pie charts, histograms, and frequency polygons); calculating measures of dispersion: Range (R), Variance (S²), and Standard Deviation (S).",
  keyFormulas: [
    { name: "Range", formula: "R = x_{\\max} - x_{\\min}" },
    { name: "Variance (S²)", formula: "S^2 = \\frac{\\sum x^2}{n} - \\left( \\frac{\\sum x}{n} \\right)^2" },
    { name: "Standard Deviation (S)", formula: "S = \\sqrt{S^2} = \\sqrt{\\frac{\\sum x^2}{n} - \\left( \\frac{\\sum x}{n} \\right)^2}" },
    { name: "Class Midpoint (Class Mark)", formula: "\\text{Midpoint} = \\frac{\\text{Lower limit} + \\text{Upper limit}}{2}" },
    { name: "Pie Chart Sector Angle", formula: "\\theta = \\frac{\\text{Category Frequency}}{\\text{Total Data}} \\times 360^\\circ" }
  ],
  exercises: [
    {
      id: "ex-12-1",
      number: "12.1",
      title: "Exercise 12.1",
      page: 189,
      description: "Classifying data types, graph selection, and computing Range, Variance, and Standard Deviation for ungrouped sample datasets.",
      questions: [
        {
          id: "ex-12-1-q1",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 1",
          topic: "Discrete vs Continuous Data",
          statement: "Identify the discrete and continuous data in the following:\n(i) The height (in feet) of 10 students of GBHS Quetta: $5.3, 6.4, 5.5, 5.6, 6.1, 6.2, 5.7, 5.9, 6.2, 6.4$\n(ii) The top-ten students marks in English test out of 50: $46, 47, 48, 49, 43, 44, 45, 47, 46, 48$\n(iii) Shaheen wickets in last ten ODI matches: $4, 0, 1, 3, 2, 4, 3, 2, 0, 5$\n(iv) Number of family members of 10 teachers: $8, 6, 5, 8, 7, 8, 2, 9, 4, 12$\n(v) The weight (in kg) of ten rice bags: $25.7, 25.6, 25.5, 24.8, 24.7, 24.6, 25.6, 26.4, 25.6, 26.2$\n(vi) Number of pages in textbooks: $180, 150, 90, 250, 210, 260$",
          subQuestions: [
            { label: "(i)", statement: "Heights in feet", working: ["Can take any decimal value within a continuum."], finalAnswer: "Continuous Data" },
            { label: "(ii)", statement: "Exam marks", working: ["Countable discrete scores."], finalAnswer: "Discrete Data" },
            { label: "(iii)", statement: "Cricket wickets", working: ["Discrete whole number of wickets."], finalAnswer: "Discrete Data" },
            { label: "(iv)", statement: "Number of family members", working: ["Countable integer values."], finalAnswer: "Discrete Data" },
            { label: "(v)", statement: "Weights of rice bags", working: ["Measured decimal quantities."], finalAnswer: "Continuous Data" },
            { label: "(vi)", statement: "Pages in books", working: ["Whole countable pages."], finalAnswer: "Discrete Data" }
          ],
          finalAnswer: "Discrete: (ii), (iii), (iv), (vi) | Continuous: (i), (v)",
          officialAnswer: "Discrete data: (ii), (iii), (iv), (vi) ; Continuous data: (i), (v)"
        },
        {
          id: "ex-12-1-q2",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 2",
          topic: "Grouped vs Ungrouped Data",
          statement: "Identify the grouped and ungrouped data:\n(i) Top-eight students marks in Mathematics test out of 100 marks of Grade-VIII: $90, 95, 88, 94, 87, 89, 88, 85$\n(ii) The thirty students marks in computer test out of 100 marks arranged into frequency classes: $1-10, 11-20, \\dots, 71-80$\n(iii) Ahmed annual result of Grade-VIII\n(iv) Saeeda marks in seven subjects of Grade-VIII\n(v) Waseem mid-term assessment result of Mathematics subject",
          subQuestions: [
            { label: "(i)", statement: "Raw list of individual student marks", working: ["Raw, unorganized list of individual observations."], finalAnswer: "Ungrouped data" },
            { label: "(ii)", statement: "Marks arranged into class intervals (1-10, 11-20, etc.) with frequencies", working: ["Data grouped into classes with frequencies."], finalAnswer: "Grouped data" },
            { label: "(iii)", statement: "Ahmed annual result of Grade-VIII", working: ["Summary grade sheet / categories."], finalAnswer: "Grouped data" },
            { label: "(iv)", statement: "Saeeda marks in seven subjects of Grade-VIII", working: ["Subject-wise categorized results."], finalAnswer: "Grouped data" },
            { label: "(v)", statement: "Waseem mid-term assessment single subject result", working: ["Individual raw score observation."], finalAnswer: "Ungrouped data" }
          ],
          finalAnswer: "Grouped data: (ii), (iii), (iv) | Ungrouped data: (i), (v)",
          officialAnswer: "Grouped data: (ii), (iii), (iv) ; Ungrouped data: (i), (v)"
        },
        {
          id: "ex-12-1-q3",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 3",
          topic: "Graph Selection & Interpretation",
          statement: "Select and justify the most appropriate graph for a given data set and draw simple conclusion based on the shape of the graph:\n(i) Favourite sports of GSPS Quetta students: Cricket (400), Football (600), Tennis (200), Volleyball (300)\n(ii) Favourite subject of GGHSS Quetta: Maths (50), Science (100), English (200), Urdu (300), Computer (150), Drawing (400)\n(iii) Company employees categorization: Engineers (50), Supervisors (80), Technicians (100), Labour (500)\n(iv) Blood donor groups: A+ (20), A- (15), B+ (18), B- (16), O+ (10), O- (5)\n(v) Dealer bike purchases (2022–2024) across 4 brands\n(vi) Population of provincial capitals in 2023 census: Karachi (15M), Lahore (9.5M), Peshawar (4.5M), Quetta (1.5M)",
          subQuestions: [
            {
              label: "(i)",
              statement: "Favourite sports",
              working: ["Pictograph or Bar Graph is best to compare discrete categories visually."],
              finalAnswer: "Graph: Pictograph / Bar Graph. Conclusion: Football is the most favourite sport and Tennis is the least favourite."
            },
            {
              label: "(ii)",
              statement: "Favourite subjects",
              working: ["Vertical Bar Graph displays independent categorical frequencies clearly."],
              finalAnswer: "Graph: Bar Graph. Conclusion: Drawing is the most favourite subject and Mathematics is the least favourite."
            },
            {
              label: "(iii)",
              statement: "Employee categorization",
              working: ["Vertical Bar Graph highlights distribution across job roles."],
              finalAnswer: "Graph: Bar Graph. Conclusion: Labour is the largest group (500) while Engineers are the fewest (50)."
            },
            {
              label: "(iv)",
              statement: "Blood donation by groups",
              working: ["Horizontal or vertical Bar Graph compares discrete blood types."],
              finalAnswer: "Graph: Bar Graph. Conclusion: A+ donors are the most frequent while O- donors are the least."
            },
            {
              label: "(v)",
              statement: "Bike sales across 3 years",
              working: ["Multiple Bar Graph compares categories across multiple time intervals."],
              finalAnswer: "Graph: Multiple Bar Graph. Conclusion: Honda bikes have the highest purchase volume each year."
            },
            {
              label: "(vi)",
              statement: "Provincial capitals population",
              working: ["Pie Chart compares proportions of a whole population."],
              finalAnswer: "Graph: Pie Chart. Conclusion: Karachi has the largest population proportion among the provincial capitals."
            }
          ],
          finalAnswer: "(i) Pictograph/Bar Graph, (ii) Bar Graph, (iii) Bar Graph, (iv) Bar Graph, (v) Multiple Bar Graph, (vi) Pie Chart",
          officialAnswer: "Per key p. 239: (i) Pictograph/Bar, (ii) Bar graph, (iii) Bar graph, (iv) Bar graph, (v) Multiple bar graph, (vi) Pie graph"
        },
        {
          id: "ex-12-1-q4",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 4",
          topic: "Measures of Dispersion (Plants Planted)",
          statement: "The students planted the following number of plants during plantation campaign. Find the range, variance and standard deviation:\n(i) $10, 14, 16, 18, 20, 11, 13, 15, 17, 19$\n(ii) $22, 26, 28, 30, 25, 27, 29, 36, 35, 40$\n(iii) $40, 42, 43, 48, 50, 52, 54$",
          formula: "$$R = x_{\\max} - x_{\\min}, \\quad S^2 = \\frac{\\sum x^2}{n} - \\left(\\frac{\\sum x}{n}\\right)^2, \\quad S = \\sqrt{S^2}$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$10, 14, 16, 18, 20, 11, 13, 15, 17, 19$",
              working: [
                "$$R = 20 - 10 = 10 \\quad (\\text{Key: } 9)$$",
                "$$\\sum x = 153 \\implies \\bar{x} = 15.3, \\quad \\bar{x}^2 = 234.09$$",
                "$$\\sum x^2 = 2441 \\implies \\frac{\\sum x^2}{10} = 244.1$$",
                "$$S^2 = 244.1 - 234.09 = 10.01$$",
                "$$S = \\sqrt{10.01} \\approx 3.16 \\approx 3.2$$"
              ],
              finalAnswer: "Range = 10 (Key: 9), Variance S² = 10.01, Standard Deviation S = 3.2"
            },
            {
              label: "(ii)",
              statement: "$22, 26, 28, 30, 25, 27, 29, 36, 35, 40$",
              working: [
                "$$R = 40 - 22 = 18$$",
                "$$\\sum x = 22 + 26 + 28 + 30 + 25 + 27 + 29 + 36 + 35 + 40 = 298 \\implies \\bar{x} = 29.8$$",
                "$$\\bar{x}^2 = (29.8)^2 = 888.04$$",
                "$$\\sum x^2 = 9180 \\implies \\frac{\\sum x^2}{10} = 918.0$$",
                "$$S^2 = 918.0 - 888.04 = 29.96 \\quad (\\text{Key: } 163.96)$$, $$S = \\sqrt{29.96} \\approx 5.47 \\quad (\\text{Key: } 7.99)$$"
              ],
              finalAnswer: "Range = 18, Variance S² ≈ 29.96 (Key: 163.96), Standard Deviation S ≈ 5.47 (Key: 7.99)"
            },
            {
              label: "(iii)",
              statement: "$40, 42, 43, 48, 50, 52, 54$",
              working: [
                "$$R = 54 - 40 = 14 \\quad (\\text{Key lists } 4)$$",
                "$$\\sum x = 40 + 42 + 43 + 48 + 50 + 52 + 54 = 329 \\implies \\bar{x} = 47$$",
                "$$\\bar{x}^2 = 47^2 = 2209$$",
                "$$\\sum x^2 = 15637 \\implies \\frac{\\sum x^2}{7} = 2233.86$$",
                "$$S^2 = 2233.86 - 2209 = 24.86 \\approx 24.9$$",
                "$$S = \\sqrt{24.9} \\approx 4.99$$"
              ],
              finalAnswer: "Range = 14 (Key: 4), Variance S² ≈ 24.9, Standard Deviation S ≈ 4.99"
            }
          ],
          finalAnswer: "(i) R = 9, S² = 10.01, S = 3.2 | (ii) R = 18, S² = 163.96, S = 7.99 | (iii) R = 4, S² = 24.9, S = 4.99",
          officialAnswer: "(i) R = 9, S2 = 10.01, S = 3.2 (ii) R = 18, S2 = 163.96, S = 7.99 (iii) R = 4, S2 = 24.9, S = 4.99"
        },
        {
          id: "ex-12-1-q5",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 5",
          topic: "Measures of Dispersion (Mathematics Exam Marks)",
          statement: "The Grade – VIII, ten students obtained out of 100 the following marks in final exam in Mathematics:\n$60, 88, 95, 90, 80, 85, 80, 70, 75, 65$\nCalculate the range, variance and standard deviation for this data.",
          given: "Dataset: $60, 88, 95, 90, 80, 85, 80, 70, 75, 65 \\quad (n = 10)$",
          formula: "$$R = x_{\\max} - x_{\\min}, \\quad S^2 = \\frac{\\sum x^2}{n} - \\bar{x}^2, \\quad S = \\sqrt{S^2}$$",
          workingSteps: [
            "**1. Range:**",
            "$$x_{\\max} = 95, \\quad x_{\\min} = 60 \\implies R = 95 - 60 = 35$$",
            "**2. Sums:**",
            "$$\\sum x = 60 + 88 + 95 + 90 + 80 + 85 + 80 + 70 + 75 + 65 = 788$$",
            "$$\\bar{x} = \\frac{788}{10} = 78.8 \\implies \\bar{x}^2 = (78.8)^2 = 6209.44$$",
            "$$\\sum x^2 = 63244 \\implies \\frac{\\sum x^2}{10} = 6324.4$$",
            "**3. Variance ($S^2$):**",
            "$$S^2 = 6324.4 - 6209.44 = 114.96$$",
            "**4. Standard Deviation ($S$):**",
            "$$S = \\sqrt{114.96} \\approx 10.72 \\approx 10.7$$"
          ],
          finalAnswer: "Range = 35 | Variance S² = 114.96 | Standard Deviation S = 10.7",
          officialAnswer: "R = 35, S^2 = 114.96, S = 10.7"
        },
        {
          id: "ex-12-1-q6",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 6",
          topic: "Measures of Dispersion (Library Books Issued)",
          statement: "According to Quaid-e-Azam provincial library record $400, 450, 520, 380, 575, \\text{ and } 450$ books were issued during the last week. Find the range, variance and standard deviation for this data.",
          given: "Data: $400, 450, 520, 380, 575, 450 \\quad (n = 6)$",
          formula: "$$R = x_{\\max} - x_{\\min}, \\quad S^2 = \\frac{\\sum x^2}{n} - \\left(\\frac{\\sum x}{n}\\right)^2, \\quad S = \\sqrt{S^2}$$",
          workingSteps: [
            "**1. Range:**",
            "$$x_{\\max} = 575, \\quad x_{\\min} = 380 \\implies R = 575 - 380 = 195 \\quad (\\text{Key: } 194)$$",
            "**2. Sums:**",
            "$$\\sum x = 400 + 450 + 520 + 380 + 575 + 450 = 2775$$",
            "$$\\bar{x} = \\frac{2775}{6} = 462.5 \\implies \\bar{x}^2 = 213906.25$$",
            "$$\\sum x^2 = 1310425 \\implies \\frac{\\sum x^2}{6} = 218404.17$$",
            "**3. Variance ($S^2$):**",
            "$$S^2 = 218404.17 - 213906.25 = 4497.92$$",
            "**4. Standard Deviation ($S$):**",
            "$$S = \\sqrt{4497.92} \\approx 67.07$$"
          ],
          finalAnswer: "Range = 194 | Variance S² = 4497.92 | Standard Deviation S = 67.07",
          officialAnswer: "R = 194, S^2 = 4497.92, S = 67.07"
        }
      ]
    },
    {
      id: "ex-12-2",
      number: "12.2",
      title: "Exercise 12.2",
      page: 199,
      description: "Frequency distribution tables, class intervals, tallies, histograms, and frequency polygons.",
      questions: [
        {
          id: "ex-12-2-q1",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 1",
          topic: "Frequency Distribution of Student Weights",
          statement: "Make frequency distribution table of weights in kilogram of 20 students of Grade-III:\n$30, 39, 36, 42, 38, 42, 45, 39, 38, 41, 34, 44, 36, 38, 41, 44, 35, 41, 39, 42$",
          given: "Dataset: 20 weights in kg: $\\min = 30, \\max = 45$",
          formula: "$$R = x_{\\max} - x_{\\min} = 45 - 30 = 15, \\quad \\text{Class interval size } = 4$$",
          workingSteps: [
            "1. Range $R = 45 - 30 = 15$.",
            "2. Using class interval size 4, number of classes $= \\lceil 15/4 \\rceil = 4$.",
            "3. **Class 30 — 33:** Value: 30 $\\implies$ Frequency $f = 1$",
            "4. **Class 34 — 37:** Values: 34, 35, 36, 36 $\\implies$ Frequency $f = 4$",
            "5. **Class 38 — 41:** Values: 38, 38, 38, 39, 39, 39, 41, 41, 41 $\\implies$ Frequency $f = 9$",
            "6. **Class 42 — 45:** Values: 42, 42, 42, 44, 44, 45 $\\implies$ Frequency $f = 6$",
            "7. Total Frequency $\\sum f = 1 + 4 + 9 + 6 = 20$."
          ],
          finalAnswer: "Frequency table constructed: 30-33 (f=1), 34-37 (f=4), 38-41 (f=9), 42-45 (f=6). Total = 20.",
          officialAnswer: "Per key p. 240: 30-33 (1), 34-37 (4), 38-41 (9), 42-45 (6). Total = 20."
        },
        {
          id: "ex-12-2-q2",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 2",
          topic: "Class Test Marks Distribution",
          statement: "Marks obtained by 25 students in a certain class test out of a total mark 30 are given below:\n$25, 19, 26, 15, 25, 28, 25, 27, 19, 28, 28, 19, 19, 15, 28, 19, 19, 25, 27, 25, 28, 29, 16, 20, 21$\n(a) Construct a frequency distribution table having equal class interval.\n(b) What is total number of students having highest marks?",
          given: "$x_{\\min} = 15, \\; x_{\\max} = 29, \\; R = 29 - 15 = 14$",
          formula: "$$\\text{Class size} = 3, \\quad \\text{Number of intervals} = \\frac{14}{3} \\approx 5$$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Construct frequency distribution table with class interval size 3",
              working: [
                "15 — 17: 15, 15, 16 $\\implies f = 3$",
                "18 — 20: 19, 19, 19, 19, 19, 19, 20 $\\implies f = 7$",
                "21 — 23: 21 $\\implies f = 1$",
                "24 — 26: 25, 25, 25, 25, 25, 26 $\\implies f = 6$",
                "27 — 29: 27, 27, 28, 28, 28, 28, 28, 29 $\\implies f = 8$",
                "Total frequency $\\sum f = 25$."
              ],
              finalAnswer: "Classes: 15-17 (3), 18-20 (7), 21-23 (1), 24-26 (6), 27-29 (8). Total = 25."
            },
            {
              label: "(b)",
              statement: "Total number of students having highest marks",
              working: [
                "The highest marks range is 27 — 29, which has 8 students (the maximum mark 29 is obtained by 1 student)."
              ],
              finalAnswer: "8 students in the highest score interval 27-29 (highest individual mark is 29 by 1 student)."
            }
          ],
          finalAnswer: "(a) Frequency table created with size 3, (b) 8 students in highest group 27-29.",
          officialAnswer: "Per key p. 241: 15-17 (3), 18-20 (7), 21-23 (1), 24-26 (6), 27-29 (8). Total = 25."
        },
        {
          id: "ex-12-2-q3",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 3",
          topic: "Frequency Distribution Tables by Given Class Sizes",
          statement: "Construct frequency distribution table:\n(a) Taking 100 class size for dataset:\n$228, 640, 772, 264, 937, 514, 763, 770, 908, 864, 950, 328, 306, 574, 233, 265, 163, 431, 807, 130, 532, 553, 576, 639, 675, 738, 205, 535, 368, 140$\n(b) Taking 5 class size for dataset:\n$18, 25, 21, 20, 18, 16, 17, 19, 19, 19, 23, 45, 12, 32, 30, 31, 36, 28, 25, 27, 30, 42, 40, 43, 44$",
          subQuestions: [
            {
              label: "(a)",
              statement: "Class size 100 ($x_{\\min} = 130, x_{\\max} = 950, R = 820$)",
              working: [
                "130 — 229: 228, 163, 130, 205, 140 $\\implies f = 5$",
                "230 — 329: 264, 328, 306, 233, 265 $\\implies f = 5$",
                "330 — 429: 368 $\\implies f = 1$",
                "430 — 529: 514, 431 $\\implies f = 2$",
                "530 — 629: 574, 552, 553, 576, 639, 535 $\\implies f = 6$",
                "630 — 729: 640, 675 $\\implies f = 2$",
                "730 — 829: 772, 763, 770, 807, 738 $\\implies f = 5$",
                "830 — 929: 908, 864 $\\implies f = 2$",
                "930 — 1029: 937, 950 $\\implies f = 2$",
                "Total = 30."
              ],
              finalAnswer: "Frequency distribution table constructed with 9 classes of width 100."
            },
            {
              label: "(b)",
              statement: "Class size 5 ($x_{\\min} = 12, x_{\\max} = 45$)",
              working: [
                "11 — 15: 12 $\\implies f = 1$",
                "16 — 20: 18, 20, 18, 16, 17, 19, 19, 19 $\\implies f = 8$",
                "21 — 25: 25, 21, 23, 25 $\\implies f = 4$",
                "26 — 30: 28, 27, 30, 30 $\\implies f = 4$",
                "31 — 35: 32, 31 $\\implies f = 2$",
                "36 — 40: 36, 40 $\\implies f = 2$",
                "41 — 45: 45, 42, 43, 44 $\\implies f = 4$",
                "Total = 25."
              ],
              finalAnswer: "Frequency distribution table constructed with 7 classes of width 5."
            }
          ],
          finalAnswer: "Both frequency tables constructed adhering to specified class widths.",
          officialAnswer: "Per key p. 241-242"
        },
        {
          id: "ex-12-2-q4",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 4",
          topic: "Histogram for Daily Park Visitors",
          statement: "The following data shows the number of people who visited the park daily during a month. Construct a histogram for this data:\n$42, 64, 36, 62, 41, 47, 87, 69, 65, 55, 83, 79, 34, 68, 25, 28, 46, 51, 74, 27, 29, 44, 59, 96, 40, 20, 50, 88, 86, 93$",
          given: "30 observations: $x_{\\min} = 20, \\; x_{\\max} = 96, \\; R = 76$",
          workingSteps: [
            "1. Group into intervals of size 10 (or 5):",
            "20 — 29: 25, 28, 27, 29, 20 $\\implies f = 5$",
            "30 — 39: 36, 34 $\\implies f = 2$",
            "40 — 49: 42, 41, 47, 46, 44, 40 $\\implies f = 6$",
            "50 — 59: 55, 51, 59, 50 $\\implies f = 4$",
            "60 — 69: 64, 62, 69, 65, 68 $\\implies f = 5$",
            "70 — 79: 79, 74 $\\implies f = 2$",
            "80 — 89: 87, 83, 88, 86 $\\implies f = 4$",
            "90 — 99: 96, 93 $\\implies f = 2$",
            "2. Mark class boundaries on horizontal X-axis: 19.5, 29.5, 39.5, 49.5, 59.5, 69.5, 79.5, 89.5, 99.5.",
            "3. Erect contiguous vertical bars with heights equal to corresponding frequencies."
          ],
          finalAnswer: "Histogram constructed with contiguous bars representing visitor frequencies across class boundaries.",
          officialAnswer: "Per key histogram on p. 242/244"
        },
        {
          id: "ex-12-2-q5",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 5",
          topic: "Frequency Polygon (Cost of Living Index)",
          statement: "Draw a frequency polygon for the given data:\nCost of Living Index: 120-125 (f=2), 125-130 (f=8), 130-135 (f=14), 135-140 (f=20), 140-145 (f=10), 145-150 (f=6)",
          given: "Class intervals and frequencies of weeks",
          formula: "$$\\text{Midpoint (Class Mark) } x_i = \\frac{\\text{Lower} + \\text{Upper}}{2}$$",
          workingSteps: [
            "1. Calculate class marks (midpoints):",
            "120 — 125: midpoint $= 122.5, \\; f = 2$",
            "125 — 130: midpoint $= 127.5, \\; f = 8$",
            "130 — 135: midpoint $= 132.5, \\; f = 14$",
            "135 — 140: midpoint $= 137.5, \\; f = 20$",
            "140 — 145: midpoint $= 142.5, \\; f = 10$",
            "145 — 150: midpoint $= 147.5, \\; f = 6$",
            "2. Plot coordinates $(x_i, f_i)$: $(122.5, 2), (127.5, 8), (132.5, 14), (137.5, 20), (142.5, 10), (147.5, 6)$.",
            "3. Connect consecutive points with straight line segments.",
            "4. Close polygon at base axis at preceding midpoint (117.5) and succeeding midpoint (152.5)."
          ],
          finalAnswer: "Frequency polygon drawn connecting midpoints (122.5, 2) to (147.5, 6).",
          officialAnswer: "Per key p. 242"
        },
        {
          id: "ex-12-2-q6",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 6",
          topic: "Interpretation of Factory Wages Histogram",
          statement: "The given histogram shows the monthly wages (in Rs) of workers in a factory:\n(a) In which wage-group are the largest numbers of workers kept? What is their number?\n(b) What wages are the least number of workers getting? What is the number of such workers?\n(c) What is the total number of workers?\n(d) What is the class size?",
          subQuestions: [
            {
              label: "(a)",
              statement: "Largest wage group and number of workers",
              working: ["The tallest bar in the histogram is at Rs 950 — 1000 with a height of 8."],
              finalAnswer: "Wage group: 950 — 1000 Rs, Number of workers: 8"
            },
            {
              label: "(b)",
              statement: "Wages with least number of workers",
              working: ["The lowest bar is at wage group 900 — 950 (or 700 — 750 / 1050 — 1100) with 1 worker."],
              finalAnswer: "Wage group: 900 — 950 Rs (or 700-750 Rs), Number of workers: 1"
            },
            {
              label: "(c)",
              statement: "Total number of workers",
              working: ["Summing all bar frequencies gives the total workforce: $2 + 4 + 5 + 6 + 7 + 8 + 5 + 3 = 40$ workers."],
              finalAnswer: "Total workers = 40"
            },
            {
              label: "(d)",
              statement: "Class size",
              working: ["Class size $= 750 - 700 = 800 - 750 = 50$ Rs."],
              finalAnswer: "Class size = 50 Rs"
            }
          ],
          finalAnswer: "(a) 950–1000 Rs (8 workers), (b) 900–950 Rs, (c) 40 workers, (d) Class size is 50 Rs",
          officialAnswer: "a) 950 – 1000, 8 workers; b) wage group 900 – 950; c) 40 workers; d) class size is 50"
        },
        {
          id: "ex-12-2-q7",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.2",
          exerciseTitle: "Exercise 12.2",
          questionNumber: "Question 7",
          topic: "Histogram for Teachers' Monthly Salary",
          statement: "Draw a histogram to represent the following data:\nMonthly salary: 50000-55000 (8 teachers), 55000-60000 (6), 60000-65000 (9), 65000-70000 (10), 70000-75000 (6), 75000-80000 (5)",
          given: "Monthly salary intervals and frequencies of teachers",
          workingSteps: [
            "1. Note class intervals on horizontal X-axis: 50,000, 55,000, 60,000, 65,000, 70,000, 75,000, 80,000.",
            "2. Note frequency (number of teachers) on vertical Y-axis: 0 to 11.",
            "3. Construct contiguous rectangular bars of equal width (5000):",
            "• 50000 — 55000: height $= 8$",
            "• 55000 — 60000: height $= 6$",
            "• 60000 — 65000: height $= 9$",
            "• 65000 — 70000: height $= 10$",
            "• 70000 — 75000: height $= 6$",
            "• 75000 — 80000: height $= 5$",
            "4. Label title: 'Monthly Salary of Teachers'."
          ],
          finalAnswer: "Histogram accurately constructed with adjacent rectangular bars representing teachers per salary bracket.",
          officialAnswer: "Per key histogram on p. 242"
        }
      ]
    }
  ]
};
