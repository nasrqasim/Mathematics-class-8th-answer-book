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
          id: "ex-6-1-q4",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 4",
          topic: "Loss Percentage - Jewelry Set",
          statement: "Iqra bought a jewelry set for $\\text{Rs. } 375,000$ and sold it for $\\text{Rs. } 365,000$ after some time. Find his loss percentage.",
          given: "$\\text{C.P} = \\text{Rs. } 375,000, \\quad \\text{S.P} = \\text{Rs. } 365,000$",
          formula: "$$\\text{Loss} = \\text{C.P} - \\text{S.P}, \\quad \\text{Loss \\%} = \\frac{\\text{Loss}}{\\text{C.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Loss} = 375000 - 365000 = \\text{Rs. } 10,000$$",
            "$$\\text{Loss \\%} = \\frac{10000}{375000} \\times 100\\% = \\frac{10}{375} \\times 100\\% \\approx 2.67\\%$$"
          ],
          finalAnswer: "Loss Percentage = 2.67%",
          officialAnswer: "2.67%"
        },
        {
          id: "ex-6-1-q5",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 5",
          topic: "Loss Percentage - Pen",
          statement: "A student buys a pen for $\\text{Rs. } 190$ and sells it for $\\text{Rs. } 150$. Find his loss percent.",
          given: "$\\text{C.P} = \\text{Rs. } 190, \\quad \\text{S.P} = \\text{Rs. } 150$",
          formula: "$$\\text{Loss} = \\text{C.P} - \\text{S.P}, \\quad \\text{Loss \\%} = \\frac{\\text{Loss}}{\\text{C.P}} \\times 100\\%$$",
          workingSteps: [
            "$$\\text{Loss} = 190 - 150 = \\text{Rs. } 40$$",
            "$$\\text{Loss \\%} = \\frac{40}{190} \\times 100\\% = \\frac{400}{19}\\% \\approx 21.05\\%$$"
          ],
          finalAnswer: "Loss Percentage = 21.05%",
          officialAnswer: "21.05%"
        },
        {
          id: "ex-6-1-q6",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 6",
          topic: "Selling Price with Loss - Solar Iron",
          statement: "A retailer sells a solar iron at a cost price of $\\text{Rs. } 1500$ with a loss of $10\\%$. Calculate the price at which the customer will purchase it. Also, find loss earned by the retailer.",
          given: "Cost Price $\\text{C.P} = \\text{Rs. } 1500$\nLoss percentage $= 10\\%$",
          formula: "$$\\text{Loss} = \\text{C.P} \\times 10\\%, \\quad \\text{S.P} = \\text{C.P} - \\text{Loss}$$",
          workingSteps: [
            "$$\\text{Loss} = 1500 \\times \\frac{10}{100} = \\text{Rs. } 150$$",
            "$$\\text{Selling Price (purchase price)} = 1500 - 150 = \\text{Rs. } 1350$$"
          ],
          finalAnswer: "Purchase Price = Rs. 1350, Loss = Rs. 150",
          officialAnswer: "Purchase Price: Rs. 1350, Loss: Rs. 150"
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
                "$$\\text{M.P} = \\frac{1222}{1 - 0.06} = \\frac{1222}{0.94} = \\text{Rs. } 1300$$"
              ],
              finalAnswer: "Rs. 1,300"
            },
            {
              label: "(ii)",
              statement: "Discount Price = Rs. 495, Discount = 1%",
              working: [
                "$$\\text{M.P} = \\frac{495}{1 - 0.01} = \\frac{495}{0.99} = \\text{Rs. } 500$$"
              ],
              finalAnswer: "Rs. 500"
            }
          ],
          finalAnswer: "(i) Rs. 1,300, (ii) Rs. 500",
          officialAnswer: "(i) Rs. 1300, (ii) Rs. 500"
        },
        {
          id: "ex-6-1-q8",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 8",
          topic: "Cash Discount - Sewing Machine",
          statement: "A shop sells sewing machines offers $3\\%$ discount on all cash purchases. What cash amount does a customer pay for a sewing machine the market price of which is $\\text{Rs. } 650$?",
          given: "Market Price $\\text{M.P} = \\text{Rs. } 650$\nDiscount Rate $= 3\\%$",
          formula: "$$\\text{Discount} = \\text{M.P} \\times 3\\%, \\quad \\text{Cash Paid} = \\text{M.P} - \\text{Discount}$$",
          workingSteps: [
            "$$\\text{Discount} = 650 \\times \\frac{3}{100} = \\text{Rs. } 19.50$$",
            "$$\\text{Amount paid} = 650 - 19.50 = \\text{Rs. } 630.50$$"
          ],
          finalAnswer: "Customer pays = Rs. 630.50",
          officialAnswer: "Rs. 630.50"
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
        },
        {
          id: "ex-6-1-q10",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.1",
          exerciseTitle: "Exercise 6.1",
          questionNumber: "Question 10",
          topic: "Discount Amount - Printer",
          statement: "The cost price of printer is $\\text{Rs. } 25,000$. Discount on the printer is $15\\%$. Find the discount given to the customer.",
          given: "Price $= \\text{Rs. } 25,000$\nDiscount Rate $= 15\\%$",
          formula: "$$\\text{Discount} = 25000 \\times 15\\%$$",
          workingSteps: [
            "$$\\text{Discount} = 25000 \\times \\frac{15}{100} = 250 \\times 15 = \\text{Rs. } 3,750$$"
          ],
          finalAnswer: "Discount = Rs. 3,750",
          officialAnswer: "Rs. 3750"
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
          id: "ex-6-2-q1",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 1",
          topic: "Markup and Total Amount - Borrowing",
          statement: "Find the total amount and amount of markup that Ahsan has to pay to the financial department. If he borrowed $\\text{Rs. } 200,000$ at the rate of $15\\%$ for three years.",
          given: "Principal $P = \\text{Rs. } 200,000$\nRate $R = 15\\%$\nTime $T = 3\\text{ years}$",
          formula: "$$M = P \\times R \\times T, \\quad \\text{Total} = P + M$$",
          workingSteps: [
            "$$\\text{Markup } M = 200,000 \\times \\frac{15}{100} \\times 3 = 2000 \\times 45 = \\text{Rs. } 90,000$$",
            "$$\\text{Total Amount} = 200,000 + 90,000 = \\text{Rs. } 290,000$$"
          ],
          finalAnswer: "Markup = Rs. 90,000, Total Amount = Rs. 290,000",
          officialAnswer: "Markup: Rs. 90,000, Total: Rs. 290,000"
        },
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
          id: "ex-6-2-q3",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 3",
          topic: "Vehicle Insurance - Car Worth",
          statement: "Usman paid $\\text{Rs. } 54,606$ as a premium for his car at the rate of $2.7\\%$. Find the worth of his car where policy fee is $\\text{Rs. } 900$.",
          given: "Total Premium $= \\text{Rs. } 54,606$\nPolicy fee $= \\text{Rs. } 900$\nInsurance rate $= 2.7\\%$",
          formula: "$$\\text{Net Premium} = \\text{Total Premium} - \\text{Policy Fee} = \\text{Worth} \\times 2.7\\%$$",
          workingSteps: [
            "$$\\text{Net Premium} = 54,606 - 900 = \\text{Rs. } 53,706$$",
            "$$\\text{Worth of car} = \\frac{53706}{2.7\\%} = \\frac{53706 \\times 100}{2.7} = \\text{Rs. } 1,989,111.11$$"
          ],
          finalAnswer: "Worth of car = Rs. 1,989,111",
          officialAnswer: "Rs. 1989111"
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
          topic: "Business Partnership Profit Division",
          statement: "Ali and Salman are two business partners and their partnership share is of $3 : 5$. If the business earns $\\text{Rs. } 900,000$, then find the share of each.",
          given: "Total Profit $= \\text{Rs. } 900,000$\nRatio $= 3 : 5$",
          formula: "$$\\text{Sum of Ratios} = 3 + 5 = 8$$",
          workingSteps: [
            "$$\\text{Ali's share} = \\frac{3}{8} \\times 900,000 = 3 \\times 112,500 = \\text{Rs. } 337,500$$",
            "$$\\text{Salman's share} = \\frac{5}{8} \\times 900,000 = 5 \\times 112,500 = \\text{Rs. } 562,500$$"
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
          topic: "Islamic Inheritance - Wife, 6 Daughters, 2 Sons",
          statement: "Imran left an inheritance of $\\text{Rs. } 600,000$. Inheritance will be distributed among his wife, six daughters and two sons. Find the share of each.",
          given: "Total Inheritance $= \\text{Rs. } 600,000$\nHeirs: 1 Wife, 6 Daughters, 2 Sons",
          formula: "$$\\text{Wife's share} = \\frac{1}{8}, \\quad \\text{Son : Daughter} = 2 : 1$$",
          workingSteps: [
            "$$\\text{Wife's share} = \\frac{1}{8} \\times 600,000 = \\text{Rs. } 75,000$$",
            "$$\\text{Remaining amount} = 600,000 - 75,000 = \\text{Rs. } 525,000$$",
            "Ratios: 2 sons $\\times 2 = 4$ shares; 6 daughters $\\times 1 = 6$ shares. Total units $= 4 + 6 = 10$.",
            "$$\\text{Value of 1 share (each daughter)} = \\frac{525,000}{10} = \\text{Rs. } 52,500$$",
            "$$\\text{Each son's share} = 2 \\times 52,500 = \\text{Rs. } 105,000$$"
          ],
          finalAnswer: "Wife = Rs. 75,000 | Each Son = Rs. 105,000 | Each Daughter = Rs. 52,500",
          officialAnswer: "Wife: Rs. 75000, Son: Rs. 105000, Daughter: Rs. 52500"
        },
        {
          id: "ex-6-2-q7",
          chapterId: 6,
          chapterNumber: 6,
          chapterTitle: "Percentage and Financial Arithmetic",
          exerciseId: "6.2",
          exerciseTitle: "Exercise 6.2",
          questionNumber: "Question 7",
          topic: "Inheritance with Debt & Burial Expenses",
          statement: "A woman left her property of $\\text{Rs. } 1,600,000$. A debt of $\\text{Rs. } 73,000$ was due upon her and $\\text{Rs. } 20,000$ was spent on burial. Divide the remaining amount between her husband and two daughters according to Islamic principles of inheritance.",
          given: "Total Estate $= \\text{Rs. } 1,600,000$\nDebt $= \\text{Rs. } 73,000$\nBurial expenses $= \\text{Rs. } 20,000$\nHeirs: Husband, 2 Daughters",
          formula: "$$\\text{Net Estate} = 1600000 - (73000 + 20000) = 1,507,000$$",
          workingSteps: [
            "$$\\text{Husband's share (with children)} = \\frac{1}{4} \\times 1,507,000 = \\text{Rs. } 376,750$$",
            "$$\\text{Remaining amount for daughters} = 1,507,000 - 376,750 = \\text{Rs. } 1,130,250$$",
            "$$\\text{Each daughter's share} = \\frac{1,130,250}{2} = \\text{Rs. } 565,125$$",
            "Note: Textbook page 226 gives: Rs. 753,500 for husband/daughters based on 1/2 distribution."
          ],
          finalAnswer: "Husband = Rs. 376,750 (or Rs. 753,500 per textbook key), Daughters = Rs. 565,125 each (or Rs. 753,500 total)",
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
          topic: "Shop Insurance Premium",
          statement: "The worth of Saleem's shop is $\\text{Rs. } 8,400,000$. He gets the insurance policy at rate of $6\\%$. Find how much premium he will pay annually to the insurance company?",
          given: "Worth of shop $= \\text{Rs. } 8,400,000$\nRate of annual premium $= 6\\%$",
          formula: "$$\\text{Annual Premium} = \\text{Worth} \\times \\text{Rate}$$",
          workingSteps: [
            "$$\\text{Annual Premium} = 8,400,000 \\times \\frac{6}{100} = 84,000 \\times 6 = \\text{Rs. } 504,000$$"
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
          topic: "Investment Profit Share",
          statement: "Khadija and Mahnoor invest $\\text{Rs. } 40,000$ and $\\text{Rs. } 50,000$ in a business. After some time they got profit $\\text{Rs. } 45,000$. Find the share of each.",
          given: "Investments: Khadija $= 40,000$, Mahnoor $= 50,000$\nTotal Profit $= \\text{Rs. } 45,000$",
          formula: "$$\\text{Ratio of investment} = 40000 : 50000 = 4 : 5, \\quad \\text{Sum} = 9$$",
          workingSteps: [
            "$$\\text{Khadija's profit share} = \\frac{4}{9} \\times 45,000 = 4 \\times 5000 = \\text{Rs. } 20,000$$",
            "$$\\text{Mahnoor's profit share} = \\frac{5}{9} \\times 45,000 = 5 \\times 5000 = \\text{Rs. } 25,000$$"
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
          topic: "Inheritance - 1 Son and 1 Daughter",
          statement: "Shahwali died and left $\\text{Rs. } 300,000$ inheritance. He has a son and a daughter. Find the share of each.",
          given: "Total Estate $= \\text{Rs. } 300,000$\nHeirs: 1 Son, 1 Daughter",
          formula: "$$\\text{Ratio Son : Daughter} = 2 : 1, \\quad \\text{Sum of ratios} = 3$$",
          workingSteps: [
            "$$\\text{Son's share} = \\frac{2}{3} \\times 300,000 = \\text{Rs. } 200,000$$",
            "$$\\text{Daughter's share} = \\frac{1}{3} \\times 300,000 = \\text{Rs. } 100,000$$"
          ],
          finalAnswer: "Son's Share = Rs. 200,000 | Daughter's Share = Rs. 100,000",
          officialAnswer: "Rs. 200000, Rs. 100000"
        }
      ]
    }
  ]
};
