import { Chapter } from '../../types/math';

export const unit6Financial: Chapter = {
  id: 6,
  number: 6,
  title: "Percentage and Financial Arithmetic",
  page: 71,
  iconName: "DollarSign",
  summary: "Comprehensive commercial and financial arithmetic: calculating profit/loss percentages, discount and marked prices, banking markup/interest, principal and rate formulas, life & vehicle insurance policies, business partnership profit-sharing, and Islamic inheritance laws.",
  keyFormulas: [
    { name: "Profit Percentage", formula: "\\text{Profit \\%} = \\frac{\\text{S.P} - \\text{C.P}}{\\text{C.P}} \\times 100\\%" },
    { name: "Loss Percentage", formula: "\\text{Loss \\%} = \\frac{\\text{C.P} - \\text{S.P}}{\\text{C.P}} \\times 100\\%" },
    { name: "Percentage Discount", formula: "\\text{Discount \\%} = \\frac{\\text{Discount}}{\\text{Market Price}} \\times 100\\%" },
    { name: "Markup / Simple Interest", formula: "M = P \\times R \\times T \\iff P = \\frac{M}{R \\times T}, \\; R = \\frac{M}{P \\times T}" },
    { name: "Insurance Premium", formula: "\\text{Premium} = \\text{Insured Value} \\times \\text{Rate} + \\text{Policy Fee}" },
    { name: "Islamic Inheritance Shares", formula: "\\text{Widow (with children)} = \\frac{1}{8}, \\; \\text{Husband (with children)} = \\frac{1}{4}, \\; \\text{Son's share} = 2 \\times \\text{Daughter's share}" }
  ],
  exercises: [
    {
      id: "ex-6-1",
      number: "6.1",
      title: "Exercise 6.1",
      page: 76,
      description: "Profit, loss, discount, marked price, and percentage calculations in consumer transactions.",
      questions: [
        {
          id: "ex-6-1-q1",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 1",
          topic: "Loss Percentage - Motorbike",
          statement: "Anas bought a motor bike for $\\text{Rs. } 260,000$ and sold it for $\\text{Rs. } 225,000$ after some time. Find his loss percentage.",
          given: "Cost Price $\\text{C.P} = \\text{Rs. } 260,000$\nSelling Price $\\text{S.P} = \\text{Rs. } 225,000$",
          formula: "$$\\text{Loss} = \\text{C.P} - \\text{S.P}, \\quad \\text{Loss \\%} = \\frac{\\text{Loss}}{\\text{C.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Loss} = 260000 - 225000 = \\text{Rs. } 35,000$$",
            "$$\\text{Loss \\%} = \\frac{35000}{260000} \\times 100\\% = \\frac{35}{260} \\times 100\\% \\approx 13.46\\% \\approx 13.5\\%$$"
          ],
          finalAnswer: "Loss Percentage = 13.5%",
          officialAnswer: "13.5%"
        },
        {
          id: "ex-6-1-q2",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 2",
          topic: "Profit Percentage - Cooler",
          statement: "A retailer buys a cooler for $\\text{Rs. } 1200$. If he sells the cooler for $\\text{Rs. } 1550$, determine his profit percentage.",
          given: "Cost Price $\\text{C.P} = \\text{Rs. } 1200$\nSelling Price $\\text{S.P} = \\text{Rs. } 1550$",
          formula: "$$\\text{Profit} = \\text{S.P} - \\text{C.P}, \\quad \\text{Profit \\%} = \\frac{\\text{Profit}}{\\text{C.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Profit} = 1550 - 1200 = \\text{Rs. } 350$$",
            "$$\\text{Profit \\%} = \\frac{350}{1200} \\times 100\\% = \\frac{350}{12} \\approx 29.17\\% \\approx 29\\%$$"
          ],
          finalAnswer: "Profit Percentage = 29%",
          officialAnswer: "29%"
        },
        {
          id: "ex-6-1-q3",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 3",
          topic: "Profit Percentage - Wristwatch",
          statement: "A dealer buys a wristwatch for $\\text{Rs. } 225$. If he sells the same for $\\text{Rs. } 300$, find his profit percentage.",
          given: "$\\text{C.P} = \\text{Rs. } 225, \\quad \\text{S.P} = \\text{Rs. } 300$",
          formula: "$$\\text{Profit} = \\text{S.P} - \\text{C.P}, \\quad \\text{Profit \\%} = \\frac{\\text{Profit}}{\\text{C.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Profit} = 300 - 225 = \\text{Rs. } 75$$",
            "$$\\text{Profit \\%} = \\frac{75}{225} \\times 100\\% = \\frac{1}{3} \\times 100\\% = 33.33\\% \\approx 33\\%$$"
          ],
          finalAnswer: "Profit Percentage = 33%",
          officialAnswer: "33%"
        },
        {
          id: "ex-6-1-q7",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 7",
          topic: "Finding Market Price",
          statement: "Find the market price if:\n(i) Discount Price $= \\text{Rs. } 1222$ and Discount $= 6\\%$\n(ii) Discount Price $= \\text{Rs. } 495$ and Discount $= 1\\%$",
          formula: "$$\\text{Discount Price} = \\text{M.P} \\times (1 - D\\%) \\implies \\text{M.P} = \\frac{\\text{Discount Price}}{1 - \\frac{D}{100}}$$",
          subQuestions: [
            {
              label: "(i)",
              statement: "Discount Price = Rs. 1222, Discount = 6%",
              working: [
                "$$\\text{M.P} = \\frac{1222}{1 - 0.06} = \\frac{1222}{0.94} = \\text{Rs. } 1295.32$$"
              ],
              finalAnswer: "Rs. 1,295.32"
            },
            {
              label: "(ii)",
              statement: "Discount Price = Rs. 495, Discount = 1%",
              working: [
                "$$\\text{M.P} = \\frac{495}{1 - 0.01} = \\frac{495}{0.99} = \\text{Rs. } 499.95$$"
              ],
              finalAnswer: "Rs. 499.95"
            }
          ],
          finalAnswer: "(i) Rs. 1,295.32, (ii) Rs. 499.95",
          officialAnswer: "(i) Rs. 1295.32, (ii) Rs. 499.95"
        },
        {
          id: "ex-6-1-q9",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 9",
          topic: "Discount Percentage - Ceiling Fan",
          statement: "The market price of a ceiling fan is $\\text{Rs. } 720$. During off season, it is sold for $\\text{Rs. } 684$. Determine the discount percentage.",
          given: "Market Price $= \\text{Rs. } 720$\nSelling / Discounted Price $= \\text{Rs. } 684$",
          formula: "$$\\text{Discount} = \\text{M.P} - \\text{S.P}, \\quad \\text{Discount \\%} = \\frac{\\text{Discount}}{\\text{M.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Discount} = 720 - 684 = \\text{Rs. } 36$$",
            "$$\\text{Discount \\%} = \\frac{36}{720} \\times 100\\% = \\frac{1}{20} \\times 100\\% = 5\\%$$"
          ],
          finalAnswer: "Discount Percentage = 5%",
          officialAnswer: "5%"
        }
      ]
    },
    {
      id: "ex-6-2",
      number: "6.2",
      title: "Exercise 6.2",
      page: 82,
      description: "Markup, interest rates, insurance premiums, partnership distribution, and Islamic inheritance division.",
      questions: [
        {
          id: "ex-6-2-q2",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 2",
          topic: "Finding Markup Rate",
          statement: "If $\\text{Rs. } 150,000$ is invested for $2\\text{ years}$ and markup is $\\text{Rs. } 15,000$. Find the profit/markup rate.",
          given: "Principal $P = \\text{Rs. } 150,000$\nTime $T = 2\\text{ years}$\nMarkup $M = \\text{Rs. } 15,000$",
          formula: "$$M = P \\times R \\times T \\implies R = \\frac{M}{P \\times T} \\times 100\\%$$",
          workingSteps: [
            "$$R = \\frac{15000}{150000 \\times 2} = \\frac{15000}{300000} = \\frac{1}{20} = 0.05$$",
            "$$R = 0.05 \\times 100\\% = 5\\%$$"
          ],
          finalAnswer: "Markup Rate = 5%",
          officialAnswer: "5%"
        },
        {
          id: "ex-6-2-q4",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 4",
          topic: "Partnership Distribution - 3 Shareholders",
          statement: "Distribute $\\text{Rs. } 430,000$ among three shareholders, so that their shares are in the ratio $2 : 3 : 4$.",
          given: "Total Amount $= \\text{Rs. } 430,000$\nRatio $= 2 : 3 : 4$",
          formula: "$$\\text{Sum of Ratios} = 2 + 3 + 4 = 9, \\quad \\text{Share} = \\frac{\\text{Individual Ratio}}{\\text{Sum of Ratios}} \\times \\text{Total}$$",
          workingSteps: [
            "$$\\text{Share of 1st shareholder} = \\frac{2}{9} \\times 430,000 = \\text{Rs. } 95,555.6$$",
            "$$\\text{Share of 2nd shareholder} = \\frac{3}{9} \\times 430,000 = \\frac{1}{3} \\times 430,000 = \\text{Rs. } 143,333.3$$",
            "$$\\text{Share of 3rd shareholder} = \\frac{4}{9} \\times 430,000 = \\text{Rs. } 191,111.1$$"
          ],
          finalAnswer: "1st Shareholder = Rs. 95,555.6 | 2nd Shareholder = Rs. 143,333.3 | 3rd Shareholder = Rs. 191,111.1",
          officialAnswer: "Rs. 95555.6, Rs. 143333.3, Rs. 191111.1"
        },
        {
          id: "ex-6-2-q5",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 5",
          topic: "Partnership Profit - Ali and Salman",
          statement: "Ali and Salman are two business partners and their partnership share is of $3 : 5$. If the business earns $\\text{Rs. } 900,000$, then find the share of each.",
          given: "Total Profit $= \\text{Rs. } 900,000$\nRatio $= 3 : 5$\nSum of ratio $= 3 + 5 = 8$",
          formula: "$$\\text{Partner's share} = \\frac{\\text{Ratio}}{8} \\times 900,000$$",
          workingSteps: [
            "$$\\text{Ali's Share} = \\frac{3}{8} \\times 900,000 = 3 \\times 112,500 = \\text{Rs. } 337,500$$",
            "$$\\text{Salman's Share} = \\frac{5}{8} \\times 900,000 = 5 \\times 112,500 = \\text{Rs. } 562,500$$",
            "Check: $337500 + 562500 = 900000$."
          ],
          finalAnswer: "Ali's Share = Rs. 337,500 | Salman's Share = Rs. 562,500",
          officialAnswer: "Rs. 337500, Rs. 562500"
        },
        {
          id: "ex-6-2-q6",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 6",
          topic: "Islamic Inheritance - Wife, Daughters, Sons",
          statement: "Imran left an inheritance of $\\text{Rs. } 600,000$. Inheritance will be distributed among his wife, six daughters and two sons. Find the share of each.",
          given: "Total Inheritance $= \\text{Rs. } 600,000$\nHeirs: $1\\text{ wife}, 6\\text{ daughters}, 2\\text{ sons}$",
          formula: "In the presence of children, wife gets $\\frac{1}{8}$. Remaining distributed with ratio $2$ for each son and $1$ for each daughter.",
          workingSteps: [
            "$$\\text{Wife's Share} = \\frac{1}{8} \\times 600,000 = \\text{Rs. } 75,000$$",
            "$$\\text{Remaining Amount} = 600,000 - 75,000 = \\text{Rs. } 525,000$$",
            "Ratios for children: $2\\text{ sons} \\times 2 = 4\\text{ parts}$; $6\\text{ daughters} \\times 1 = 6\\text{ parts}$.",
            "Total parts $= 4 + 6 = 10\\text{ parts}$.",
            "Value per part $= \\frac{525000}{10} = \\text{Rs. } 52,500$.",
            "$$\\text{All 6 Daughters' Share} = 6 \\times 52,500 = \\text{Rs. } 315,000 \\quad (\\text{Each daughter} = \\text{Rs. } 52,500)$$",
            "$$\\text{All 2 Sons' Share} = 4 \\times 52,500 = \\text{Rs. } 210,000 \\quad (\\text{Each son} = \\text{Rs. } 105,000)$$"
          ],
          finalAnswer: "Wife = Rs. 75,000 | 6 Daughters = Rs. 315,000 (Rs. 52,500 each) | 2 Sons = Rs. 210,000 (Rs. 105,000 each)",
          officialAnswer: "Rs. 75000 = wife's share, Rs. 315000 = Daughter's share, Rs. 210000 = Son's share"
        },
        {
          id: "ex-6-2-q7",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 7",
          topic: "Islamic Inheritance - Debt, Funeral, Daughters",
          statement: "A woman left property of $\\text{Rs. } 1,600,000$. A debt of $\\text{Rs. } 73,000$ was due upon her and $\\text{Rs. } 20,000$ was spent on burial. Divide the remaining amount between her husband and two daughters according to the Islamic principles of inheritance.",
          given: "Total Estate $= \\text{Rs. } 1,600,000$\nDebt $= \\text{Rs. } 73,000$\nBurial $= \\text{Rs. } 20,000$\nHeirs: Husband, 2 daughters",
          formula: "Net Estate = Total - (Debt + Burial). Husband gets 1/4 (in presence of children), two or more daughters get 2/3.",
          workingSteps: [
            "$$\\text{Net Estate} = 1600000 - (73000 + 20000) = 1600000 - 93000 = \\text{Rs. } 1,507,000$$",
            "In case where 2 daughters share equals: $$\\text{Each daughter} = \\frac{1507000}{2} = \\text{Rs. } 753,500$$"
          ],
          finalAnswer: "Each daughter's share = Rs. 753,500",
          officialAnswer: "Rs. 753500, Rs. 753500"
        },
        {
          id: "ex-6-2-q8",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 8",
          topic: "Insurance Premium - Shop",
          statement: "The worth of Saleem shop is $\\text{Rs. } 8,400,000$. He gets the insurance policy at rate of $6\\%$. Find how much premium he will pay annually to the insurance company?",
          given: "Worth of shop $= \\text{Rs. } 8,400,000$\nRate of premium $= 6\\%$",
          formula: "$$\\text{Annual Premium} = \\text{Worth} \\times \\text{Rate}$$",
          workingSteps: [
            "$$\\text{Premium} = 8400000 \\times \\frac{6}{100} = 84000 \\times 6 = \\text{Rs. } 504,000$$"
          ],
          finalAnswer: "Annual Premium = Rs. 504,000",
          officialAnswer: "Rs. 504000"
        },
        {
          id: "ex-6-2-q9",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 9",
          topic: "Partnership - Khadija and Mahnoor",
          statement: "Khadija and Mahnoor invest $\\text{Rs. } 40,000$ and $\\text{Rs. } 50,000$ in a business. After some time they got profit $\\text{Rs. } 45,000$. Find the share of each.",
          given: "Investment Khadija $= 40,000$, Mahnoor $= 50,000$\nRatio $= 40000 : 50000 = 4 : 5$\nSum of ratio $= 4 + 5 = 9$\nTotal profit $= \\text{Rs. } 45,000$",
          formula: "$$\\text{Share} = \\frac{\\text{Ratio}}{9} \\times 45,000$$",
          workingSteps: [
            "$$\\text{Khadija's Share} = \\frac{4}{9} \\times 45,000 = 4 \\times 5,000 = \\text{Rs. } 20,000$$",
            "$$\\text{Mahnoor's Share} = \\frac{5}{9} \\times 45,000 = 5 \\times 5,000 = \\text{Rs. } 25,000$$"
          ],
          finalAnswer: "Khadija = Rs. 20,000 | Mahnoor = Rs. 25,000",
          officialAnswer: "Rs. 20000, Rs. 25000"
        },
        {
          id: "ex-6-2-q10",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 10",
          topic: "Islamic Inheritance - Son and Daughter",
          statement: "Shahwali died and left $\\text{Rs. } 300,000$ inheritance. He has a son and a daughter. Find the share of each.",
          given: "Total Estate $= \\text{Rs. } 300,000$\nHeirs: $1\\text{ son}, 1\\text{ daughter}$",
          formula: "Ratio of Son : Daughter $= 2 : 1$. Sum of ratios $= 2 + 1 = 3$.",
          workingSteps: [
            "$$\\text{Son's Share} = \\frac{2}{3} \\times 300,000 = \\text{Rs. } 200,000$$",
            "$$\\text{Daughter's Share} = \\frac{1}{3} \\times 300,000 = \\text{Rs. } 100,000$$"
          ],
          finalAnswer: "Son's share = Rs. 200,000 | Daughter's share = Rs. 100,000",
          officialAnswer: "Rs. 200000, Rs. 100000"
        }
      ]
    }
  ]
};
