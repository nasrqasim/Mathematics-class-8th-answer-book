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
          id: "ex-12-1-q4",
          chapterId: 12,
          chapterNumber: 12,
          chapterTitle: "Information Handling & Statistics",
          exerciseId: "12.1",
          exerciseTitle: "Exercise 12.1",
          questionNumber: "Question 4",
          topic: "Measures of Dispersion (Plants Planted)",
          statement: "The students planted the following number of plants during plantation campaign. Find the range, variance and standard deviation:\n(i) $10, 14, 16, 18, 20, 11, 13, 15, 17, 19$",
          given: "Data values: $10, 14, 16, 18, 20, 11, 13, 15, 17, 19 \\quad (n = 10)$",
          formula: "$$R = x_{\\max} - x_{\\min}, \\quad S^2 = \\frac{\\sum x^2}{n} - \\left(\\frac{\\sum x}{n}\\right)^2, \\quad S = \\sqrt{S^2}$$",
          workingSteps: [
            "**1. Range (R):**",
            "$$x_{\\max} = 20, \\quad x_{\\min} = 10 \\implies R = 20 - 10 = 10 \\quad (\\text{Textbook Key: } R = 9)$$",
            "**2. Mean and Sums:**",
            "$$\\sum x = 10 + 14 + 16 + 18 + 20 + 11 + 13 + 15 + 17 + 19 = 153$$",
            "$$\\frac{\\sum x}{n} = \\frac{153}{10} = 15.3 \\implies \\left(\\frac{\\sum x}{n}\\right)^2 = (15.3)^2 = 234.09$$",
            "$$\\sum x^2 = 100 + 196 + 256 + 324 + 400 + 121 + 169 + 225 + 289 + 361 = 2441$$",
            "$$\\frac{\\sum x^2}{n} = \\frac{2441}{10} = 244.1$$",
            "**3. Variance ($S^2$):**",
            "$$S^2 = 244.1 - 234.09 = 10.01$$",
            "**4. Standard Deviation ($S$):**",
            "$$S = \\sqrt{10.01} \\approx 3.16 \\approx 3.2$$"
          ],
          finalAnswer: "Range = 10 (Key: 9), Variance S² = 10.01, Standard Deviation S = 3.2",
          officialAnswer: "R = 9, S^2 = 10.01, S = 3.2"
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
            "$$x_{\\max} = 95, \\quad x_{\\min} = 60$$",
            "$$R = 95 - 60 = 35$$",
            "**2. Sums:**",
            "$$\\sum x = 60 + 88 + 95 + 90 + 80 + 85 + 80 + 70 + 75 + 65 = 788$$",
            "$$\\bar{x} = \\frac{788}{10} = 78.8 \\implies \\bar{x}^2 = (78.8)^2 = 6209.44$$",
            "$$\\sum x^2 = 3600 + 7744 + 9025 + 8100 + 6400 + 7225 + 6400 + 4900 + 5625 + 4225 = 63244$$",
            "$$\\frac{\\sum x^2}{10} = 6324.4$$",
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
            "$$\\sum x^2 = 160000 + 202500 + 270400 + 144400 + 330625 + 202500 = 1310425$$",
            "$$\\frac{\\sum x^2}{6} = \\frac{1310425}{6} = 218404.17$$",
            "**3. Variance ($S^2$):**",
            "$$S^2 = 218404.17 - 213906.25 = 4497.92$$",
            "**4. Standard Deviation ($S$):**",
            "$$S = \\sqrt{4497.92} \\approx 67.07$$"
          ],
          finalAnswer: "Range = 194 | Variance S² = 4497.92 | Standard Deviation S = 67.07",
          officialAnswer: "R = 194, S^2 = 4497.92, S = 67.07"
        }
      ]
    }
  ]
};
