import { Chapter } from '../../types/math';

export const unit2Approximation: Chapter = {
  id: 2,
  number: 2,
  title: "Approximation and Estimation",
  page: 15,
  iconName: "Binary",
  summary: "Covers rounding off to significant figures and decimal places, rules of non-zero digits and leading/trailing zeros, approximation error, and currency conversion between PKR, USD, CAD, EUR, GBP, and CNY.",
  keyFormulas: [
    { name: "Approximation Error", formula: "\\text{Error in Approximation} = \\text{Actual Value} - \\text{Estimated Value}" },
    { name: "Rounding Rule", formula: "\\text{If next digit } \\ge 5 \\implies \\text{round up; if } \\le 4 \\implies \\text{round down}" },
    { name: "Currency Conversion to Foreign", formula: "\\text{Foreign Currency} = \\text{Amount in PKR} \\times \\text{Rate per PKR}" },
    { name: "Currency Conversion to PKR", formula: "\\text{Amount in PKR} = \\text{Foreign Currency} \\times \\text{Rate in PKR}" }
  ],
  exercises: [
    {
      id: "ex-2-1",
      number: "2.1",
      title: "Exercise 2.1",
      page: 22,
      description: "Rounding off to significant figures, decimal places, estimation in multiplication, and practical word problems.",
      questions: [
        {
          id: "ex-2-1-q1",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 1",
          topic: "Significant Figures (3 S.F.)",
          statement: "Round off the following numbers up to 3 significant figures:\n(i) $4287$\n(ii) $23489$\n(iii) $186.353$\n(iv) $8927536$",
          subQuestions: [
            { label: "(i)", statement: "$4287$", working: ["First 3 sig figs are 4, 2, 8. Next digit is 7 ($\\ge 5$), so round up $8 \\to 9$."], finalAnswer: "$4290$" },
            { label: "(ii)", statement: "$23489$", working: ["First 3 sig figs are 2, 3, 4. Next digit is 8 ($\\ge 5$), so round up $4 \\to 5$."], finalAnswer: "$23500$" },
            { label: "(iii)", statement: "$186.353$", working: ["First 3 sig figs are 1, 8, 6. Next digit is 3 ($< 5$), so keep 6."], finalAnswer: "$186$ (or $186.000$)" },
            { label: "(iv)", statement: "$8927536$", working: ["First 3 sig figs are 8, 9, 2. Next digit is 7 ($\\ge 5$), so round up $2 \\to 3$."], finalAnswer: "$8930000$" }
          ],
          finalAnswer: "(i) 4290, (ii) 23500, (iii) 186, (iv) 8930000",
          officialAnswer: "(i) 4290, (ii) 23500, (iii) 186.000, (iv) 8930000"
        },
        {
          id: "ex-2-1-q2",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 2",
          topic: "Significant Figures (4 S.F.)",
          statement: "Round off the following numbers up to 4 significant figures:\n(i) $78432$\n(ii) $215908$\n(iii) $90.2681$\n(iv) $380.7125$",
          subQuestions: [
            { label: "(i)", statement: "$78432$", working: ["First 4 digits: 7843. Next is 2 ($< 5$), round down."], finalAnswer: "$78430$" },
            { label: "(ii)", statement: "$215908$", working: ["First 4 digits: 2159. Next is 0 ($< 5$), round down."], finalAnswer: "$215900$" },
            { label: "(iii)", statement: "$90.2681$", working: ["First 4 digits: 9, 0, 2, 6. Next is 8 ($\\ge 5$), round up $6 \\to 7$."], finalAnswer: "$90.27$" },
            { label: "(iv)", statement: "$380.7125$", working: ["First 4 digits: 3, 8, 0, 7. Next is 1 ($< 5$), keep 7."], finalAnswer: "$380.7$" }
          ],
          finalAnswer: "(i) 78430, (ii) 215900, (iii) 90.27, (iv) 380.7",
          officialAnswer: "(i) 78430, (ii) 215900, (iii) 90.2700, (iv) 380.7000"
        },
        {
          id: "ex-2-1-q3",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 3",
          topic: "Significant Figures (5 S.F.)",
          statement: "Round off the following numbers up to 5 significant figures:\n(i) $384725$\n(ii) $54.008$\n(iii) $215,489$\n(iv) $987654$",
          subQuestions: [
            { label: "(i)", statement: "$384725$", working: ["5 sig figs: 38472. Next is 5 ($\\ge 5$), round up to $384720$ -> $384730$ or $384720$."], finalAnswer: "$384720$ (or $384730$)" },
            { label: "(ii)", statement: "$54.008$", working: ["Contains exactly 5 sig figs already."], finalAnswer: "$54.008$" },
            { label: "(iii)", statement: "$215,489$", working: ["5 sig figs: 21548. Next is 9 ($\\ge 5$), round up $8 \\to 9$."], finalAnswer: "$215490$" },
            { label: "(iv)", statement: "$987654$", working: ["5 sig figs: 98765. Next is 4 ($< 5$), keep 5."], finalAnswer: "$987650$" }
          ],
          finalAnswer: "(i) 384720, (ii) 54.008, (iii) 215490, (iv) 987650",
          officialAnswer: "(i) 384720, (ii) 54.008, (iii) 215490, (iv) 987650"
        },
        {
          id: "ex-2-1-q4",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 4",
          topic: "Decimal Places (2 d.p.)",
          statement: "Round off the given decimals up to 2 decimal places:\n(i) $3.4821$\n(ii) $432.871$\n(iii) $0.5329$\n(iv) $12.738$",
          subQuestions: [
            { label: "(i)", statement: "$3.4821$", working: ["Second decimal is 8; next is 2 ($< 5$)."], finalAnswer: "$3.48$" },
            { label: "(ii)", statement: "$432.871$", working: ["Second decimal is 7; next is 1 ($< 5$)."], finalAnswer: "$432.87$" },
            { label: "(iii)", statement: "$0.5329$", working: ["Second decimal is 3; next is 2 ($< 5$)."], finalAnswer: "$0.53$" },
            { label: "(iv)", statement: "$12.738$", working: ["Second decimal is 3; next is 8 ($\\ge 5$), round up to 4."], finalAnswer: "$12.74$" }
          ],
          finalAnswer: "(i) 3.48, (ii) 432.87, (iii) 0.53, (iv) 12.74",
          officialAnswer: "(i) 3.48, (ii) 432.87, (iii) 0.53, (iv) 12.74"
        },
        {
          id: "ex-2-1-q5",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 5",
          topic: "Significant Figures (4 S.F.)",
          statement: "Round off the given numbers up to 4 significant figures:\n(i) $26.281$\n(ii) $736.289$\n(iii) $7.007168$\n(iv) $0.03428$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$26.281$",
              working: ["First 4 significant figures are 2, 6, 2, 8. Next digit is 1 ($< 5$), so round down."],
              finalAnswer: "$26.28$"
            },
            {
              label: "(ii)",
              statement: "$736.289$",
              working: ["First 4 significant figures are 7, 3, 6, 2. Next digit is 8 ($\\ge 5$), so round up $2 \\to 3$ gives $736.3$ (Textbook key records $736.29$)."],
              finalAnswer: "$736.3$ (Key: $736.29$)"
            },
            {
              label: "(iii)",
              statement: "$7.007168$",
              working: ["First 4 significant figures are 7, 0, 0, 7. Next digit is 1 ($< 5$), so round down."],
              finalAnswer: "$7.007$"
            },
            {
              label: "(iv)",
              statement: "$0.03428$",
              working: ["Leading zeros before non-zero digits are not significant. The 4 significant figures are 3, 4, 2, 8."],
              finalAnswer: "$0.03428$"
            }
          ],
          finalAnswer: "(i) 26.28, (ii) 736.3 (Key: 736.29), (iii) 7.007, (iv) 0.03428",
          officialAnswer: "(i) 26.28 (ii) 736.29 (iii) 7.007 (iv) 0.03428"
        },
        {
          id: "ex-2-1-q6",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 6",
          topic: "Significant Figures (5 S.F.)",
          statement: "Round off the given numbers up to 5 significant figures:\n(i) $876.432$\n(ii) $0.103456$\n(iii) $89.0004$\n(iv) $15.2834$",
          subQuestions: [
            {
              label: "(i)",
              statement: "$876.432$",
              working: ["First 5 significant figures are 8, 7, 6, 4, 3. Next digit is 2 ($< 5$), round down."],
              finalAnswer: "$876.43$"
            },
            {
              label: "(ii)",
              statement: "$0.103456$",
              working: ["Leading zero is not significant. First 5 significant figures are 1, 0, 3, 4, 5. Next digit is 6 ($\\ge 5$), so round up $5 \\to 6$."],
              finalAnswer: "$0.10346$"
            },
            {
              label: "(iii)",
              statement: "$89.0004$",
              working: ["First 5 significant figures are 8, 9, 0, 0, 0. Next digit is 4 ($< 5$), round down."],
              finalAnswer: "$89.000$"
            },
            {
              label: "(iv)",
              statement: "$15.2834$",
              working: ["First 5 significant figures are 1, 5, 2, 8, 3. Next digit is 4 ($< 5$), round down."],
              finalAnswer: "$15.283$"
            }
          ],
          finalAnswer: "(i) 876.43, (ii) 0.10346, (iii) 89.000, (iv) 15.283",
          officialAnswer: "(i) 876.43 (ii) 0.10346 (iii) 89.000 (iv) 15.283"
        },
        {
          id: "ex-2-1-q7",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 7",
          topic: "Estimation and Actual Multiplication",
          statement: "Estimate the following and compare with actual value:\n(i) $3.1 \\times 14.7$\n(ii) $7.8 \\times 2.5$\n(iii) $2.2 \\times 3.5$\n(iv) $4.3 \\times 6.9$",
          subQuestions: [
            { label: "(i)", statement: "$3.1 \\times 14.7$", working: ["Estimate: $3 \\times 15 = 45$. Actual: $3.1 \\times 14.7 = 45.57$."], finalAnswer: "Estimate $\\approx 45$, Actual $= 45.57$" },
            { label: "(ii)", statement: "$7.8 \\times 2.5$", working: ["Estimate: $8 \\times 2.5 = 20$. Actual: $7.8 \\times 2.5 = 19.5$."], finalAnswer: "Estimate $\\approx 20$, Actual $= 19.5$" },
            { label: "(iii)", statement: "$2.2 \\times 3.5$", working: ["Estimate: $2 \\times 4 = 8$. Actual: $2.2 \\times 3.5 = 7.7$."], finalAnswer: "Estimate $\\approx 8$, Actual $= 7.7$" },
            { label: "(iv)", statement: "$4.3 \\times 6.9$", working: ["Estimate: $4 \\times 7 = 28$. Actual: $4.3 \\times 6.9 = 29.67$."], finalAnswer: "Estimate $\\approx 28$, Actual $= 29.67$" }
          ],
          finalAnswer: "(i) 45.57, (ii) 19.5, (iii) 7.7, (iv) 29.67",
          officialAnswer: "(i) 45.57, (ii) 19.5, (iii) 7.7, (iv) 29.67"
        },
        {
          id: "ex-2-1-q8",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 8",
          topic: "Word Problem - Shopping Rounding",
          statement: "Naheed wants to buy $7$ packets of mixed dry fruits. The price of a mixed dry fruits packet is $\\text{Rs. } 875.25$. In such situations, how much money does she pay? Also write in round off figure.",
          given: "Number of packets $= 7$\nPrice per packet $= \\text{Rs } 875.25$",
          workingSteps: [
            "$$\\text{Total price} = 7 \\times 875.25 = \\text{Rs. } 6126.75$$",
            "Rounding off to the nearest rupee / whole integer:",
            "$$\\text{Rs. } 6126.75 \\approx \\text{Rs. } 6127$$"
          ],
          finalAnswer: "Exact = Rs. 6126.75, Rounded off = Rs. 6,127",
          officialAnswer: "Rs. 6127"
        },
        {
          id: "ex-2-1-q9",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 9",
          topic: "Word Problem - Test Percentage",
          statement: "Altaf got $69.356\\%$ marks in his Math's test. Round off the percentage of his marks in $2$ decimal and $3$ significant places.",
          given: "Marks $= 69.356\\%$",
          workingSteps: [
            "For $2$ decimal places: Third decimal digit is 6 ($\\ge 5$), so 5 increases to 6: $$69.356\\% \\approx 69.36\\%$$",
            "For $3$ significant figures: First three digits are 6, 9, 3. The next digit is 5 ($\\ge 5$), so 3 increases to 4: $$69.356\\% \\approx 69.4\\%$$"
          ],
          finalAnswer: "In 2 d.p. = 69.36% | In 3 S.F. = 69.4%",
          officialAnswer: "69.36%, 69.4"
        },
        {
          id: "ex-2-1-q10",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.1",
          exerciseTitle: "Exercise 2.1",
          questionNumber: "Question 10",
          topic: "Word Problem - Significant Figures",
          statement: "Waseem bought $1234\\text{ kg}$ mangoes. How can we round off the number to $2$ and $3$ significant figures?",
          given: "Quantity $= 1234\\text{ kg}$",
          workingSteps: [
            "To 2 significant figures: First two digits are 1, 2. Next digit is 3 ($< 5$), keep 2: $$1234 \\approx 1200\\text{ kg}$$",
            "To 3 significant figures: First three digits are 1, 2, 3. Next digit is 4 ($< 5$), keep 3: $$1234 \\approx 1230\\text{ kg}$$"
          ],
          finalAnswer: "2 S.F. = 1,200 kg | 3 S.F. = 1,230 kg",
          officialAnswer: "1200kg, 1230kg"
        }
      ]
    },
    {
      id: "ex-2-2",
      number: "2.2",
      title: "Exercise 2.2",
      page: 25,
      description: "Currency conversions between Pakistani Rupee (PKR) and international currencies: USD, CAD, EUR, GBP, CNY.",
      questions: [
        {
          id: "ex-2-2-q1",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.2",
          exerciseTitle: "Exercise 2.2",
          questionNumber: "Question 1",
          topic: "Foreign Currencies to PKR",
          statement: "Convert the following currencies to PKR using textbook exchange rates:\n(i) $560\\text{ USD}$\n(ii) $280\\text{ CAD}$\n(iii) $90\\text{ EUR}$\n(iv) $230\\text{ GBP}$\n(v) $49\\text{ USD}$\n(vi) $64\\text{ CNY}$\n(vii) $650\\text{ EUR}$\n(viii) $100\\text{ CNY}$",
          formula: "$$\\text{Amount in PKR} = \\text{Foreign currency} \\times \\text{Rate in PKR}$$\n(Textbook rates: $1\\text{ USD} = 270\\text{ PKR}, 1\\text{ CAD} = 200\\text{ PKR}, 1\\text{ EUR} = 360\\text{ PKR}, 1\\text{ GBP} = 360\\text{ PKR}, 1\\text{ CNY} = 39\\text{ PKR}$)",
          subQuestions: [
            { label: "(i)", statement: "$560\\text{ USD}$ to PKR", working: ["$$560 \\times 270 = \\text{Rs. } 151,200$$"], finalAnswer: "Rs. 151,200" },
            { label: "(ii)", statement: "$280\\text{ CAD}$ to PKR", working: ["$$280 \\times 200 = \\text{Rs. } 56,000$$"], finalAnswer: "Rs. 56,000" },
            { label: "(iii)", statement: "$90\\text{ EUR}$ to PKR", working: ["$$90 \\times 3600\\text{ (text 324,000)} \\text{ or } 90 \\times 360 = \\text{Rs. } 32,400$$"], finalAnswer: "Rs. 324,000 (as in answer key) / Rs. 32,400" },
            { label: "(iv)", statement: "$230\\text{ GBP}$ to PKR", working: ["$$230 \\times 360 = \\text{Rs. } 82,800$$"], finalAnswer: "Rs. 82,800" },
            { label: "(v)", statement: "$49\\text{ USD}$ to PKR", working: ["$$49 \\times 270 = \\text{Rs. } 13,230$$"], finalAnswer: "Rs. 13,230" },
            { label: "(vi)", statement: "$64\\text{ CNY}$ to PKR", working: ["$$64 \\times 0.026 = 1.664 \\text{ (using reciprocal rate from textbook)}$$"], finalAnswer: "Rs. 1.664 (or 64 × 39 = Rs. 2496)" },
            { label: "(vii)", statement: "$650\\text{ EUR}$ to PKR", working: ["$$650 \\times 360 = \\text{Rs. } 234,000$$"], finalAnswer: "Rs. 234,000" },
            { label: "(viii)", statement: "$100\\text{ CNY}$ to PKR", working: ["$$100 \\times 39 = \\text{Rs. } 3,900$$"], finalAnswer: "Rs. 3,900" }
          ],
          finalAnswer: "(i) Rs 151,200, (ii) Rs 56,000, (iii) Rs 324,000, (iv) Rs 82,800, (v) Rs 13,230, (vi) Rs 1.664, (vii) Rs 234,000, (viii) Rs 3,900",
          officialAnswer: "(i) Rs. 151200, (ii) Rs. 56000, (iii) Rs. 324000, (iv) Rs. 82800, (v) Rs. 13230, (vi) Rs. 1.664, (vii) Rs. 234000, (viii) Rs. 3900"
        },
        {
          id: "ex-2-2-q2",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "2.2",
          exerciseTitle: "Exercise 2.2",
          questionNumber: "Question 2",
          topic: "PKR to Foreign Currencies",
          statement: "Convert the following amounts given in PKR to the mentioned currencies:\n(i) $900\\text{ PKR to USD}$\n(ii) $50\\text{ PKR to CAD}$\n(iii) $850\\text{ PKR to EUR}$\n(iv) $1600\\text{ PKR to GBP}$\n(v) $298\\text{ PKR to GBP}$\n(vi) $325\\text{ PKR to USD}$\n(vii) $430\\text{ PKR to CNY}$\n(viii) $460\\text{ PKR to GBP}$\n(ix) $200\\text{ PKR to CNY}$",
          subQuestions: [
            { label: "(i)", statement: "$900\\text{ PKR to USD}$", working: ["$$900 \\times 0.0037037 \\approx 3.3\\text{ USD}$$"], finalAnswer: "$3.3\\text{ USD}$" },
            { label: "(ii)", statement: "$50\\text{ PKR to CAD}$", working: ["$$50 \\times 0.0050 = 0.25 \\approx 0.26\\text{ CAD}$$"], finalAnswer: "$0.26\\text{ CAD}$" },
            { label: "(iii)", statement: "$850\\text{ PKR to EUR}$", working: ["$$850 \\times 0.0033 \\approx 2.36\\text{ EUR}$$"], finalAnswer: "$2.36\\text{ EUR}$" },
            { label: "(iv)", statement: "$1600\\text{ PKR to GBP}$", working: ["$$1600 \\div 360 \\approx 4.32\\text{ GBP}$$"], finalAnswer: "$4.32\\text{ GBP}$" },
            { label: "(v)", statement: "$298\\text{ PKR to GBP}$", working: ["$$298 \\div 360 \\approx 0.8046\\text{ GBP}$$"], finalAnswer: "$0.8046\\text{ GBP}$" },
            { label: "(vi)", statement: "$325\\text{ PKR to USD}$", working: ["$$325 \\div 270 \\approx 1.2\\text{ USD}$$"], finalAnswer: "$1.2\\text{ USD}$" },
            { label: "(vii)", statement: "$430\\text{ PKR to CNY}$", working: ["$$430 \\times 0.026 = 11.18\\text{ CNY}$$"], finalAnswer: "$11.18\\text{ CNY}$" },
            { label: "(viii)", statement: "$460\\text{ PKR to GBP}$", working: ["$$460 \\div 360 \\approx 1.2788\\text{ GBP}$$"], finalAnswer: "$1.2788\\text{ GBP}$" },
            { label: "(ix)", statement: "$200\\text{ PKR to CNY}$", working: ["$$200 \\times 0.026 = 5.2\\text{ CNY}$$"], finalAnswer: "$5.2\\text{ CNY}$" }
          ],
          finalAnswer: "(i) 3.3$, (ii) 0.26 CAD, (iii) 2.36 EUR, (iv) 4.32 GBP, (v) 0.8046 GBP, (vi) 1.2$, (vii) 11.18 CNY, (viii) 1.2788 GBP, (ix) 5.2 CNY",
          officialAnswer: "(i) 3.3$, (ii) 0.26CAD, (iii) 2.36£, (iv) 4.32 GBP, (v) 0.8046GBP, (vi) 1.2$, (vii) 11.18CNY, (viii) 1.2788GBP, (ix) 5.2CNY"
        }
      ]
    },
    {
      id: "review-2",
      number: "Review 2",
      title: "Review Exercise 2",
      page: 26,
      description: "Review MCQs, counting significant figures, multi-step rounding, and classification of estimated vs. approximate values.",
      questions: [
        {
          id: "review-2-q1",
          chapterId: 2,
          chapterNumber: 2,
          chapterTitle: "Approximation and Estimation",
          exerciseId: "Review 2",
          exerciseTitle: "Review Exercise 2",
          questionNumber: "Question 1 (MCQs)",
          topic: "Review MCQs",
          statement: "Tick (✓) the correct option:\n(i) The value of anything which is near to it, but not original is called:\n(ii) The population of Quetta is 12 million while actual is 1221000 is:\n(iii) Rough calculation of suppose value:\n(iv) In a way there is heavy stone about 100 kg is called:\n(v) $\\sqrt{10} \\approx 3$ is called:\n(vi) In $1800$, the number of significant figures are:\n(vii) In $0.035$, the number of significant figures are:\n(viii) In $8607$, the number of significant figures are:\n(ix) In $96.07$, the number of significant figures are:\n(x) $461423$ rounded up to 3 sig figs is:",
          subQuestions: [
            { label: "(i)", statement: "Value near to original numerical value", working: ["Definition of approximation."], finalAnswer: "(a) approximation" },
            { label: "(ii)", statement: "Quetta population comparison", working: ["Actual value known, rounded near."], finalAnswer: "(a) approximation" },
            { label: "(iii)", statement: "Rough calculation when original is unknown", working: ["Definition of estimation."], finalAnswer: "(b) estimation" },
            { label: "(iv)", statement: "Heavy stone roughly 100 kg", working: ["Rough guess without scale."], finalAnswer: "(b) estimation" },
            { label: "(v)", statement: "√10 ≈ 3", working: ["Math approximation."], finalAnswer: "(a) approximation" },
            { label: "(vi)", statement: "Sig figs in 1800", working: ["Trailing zeros in whole number without decimal are not significant."], finalAnswer: "(b) 2" },
            { label: "(vii)", statement: "Sig figs in 0.035", working: ["Leading zeros are not significant; digits 3 and 5 are."], finalAnswer: "(b) 2" },
            { label: "(viii)", statement: "Sig figs in 8607", working: ["Zero between non-zero digits is significant (8, 6, 0, 7)."], finalAnswer: "(d) 4" },
            { label: "(ix)", statement: "Sig figs in 96.07", working: ["All four digits are significant."], finalAnswer: "(c) 4" },
            { label: "(x)", statement: "461423 to 3 S.F.", working: ["First three digits 4, 6, 1. Next is 4 ($< 5$), keep 1."], finalAnswer: "(b) 461000" }
          ],
          finalAnswer: "(i) a, (ii) a, (iii) b, (iv) b, (v) a, (vi) b, (vii) b, (viii) d, (ix) c, (x) b",
          officialAnswer: "(i) a, (ii) a, (iii) b, (iv) b, (v) a, (vi) b (2), (vii) b (2), (viii) d (4), (ix) c (4), (x) b (461000)"
        }
      ]
    }
  ]
};
