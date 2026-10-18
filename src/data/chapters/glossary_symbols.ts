export interface GlossaryItem {
  term: string;
  definition: string;
  category: 'Number Systems' | 'Algebra' | 'Geometry & Mensuration' | 'Commercial Arithmetic' | 'Statistics & Probability';
}

export interface SymbolItem {
  symbol: string;
  latex: string;
  meaning: string;
  example: string;
}

export const glossaryData: GlossaryItem[] = [
  {
    term: "Rational Number",
    definition: "A number that can be expressed in the form p/q, where p and q are integers and q ≠ 0.",
    category: "Number Systems"
  },
  {
    term: "Irrational Number",
    definition: "A number that cannot be expressed in the form p/q, having a non-terminating and non-recurring decimal expansion.",
    category: "Number Systems"
  },
  {
    term: "Real Numbers",
    definition: "The union of the set of rational numbers and the set of irrational numbers: R = Q ∪ Q'.",
    category: "Number Systems"
  },
  {
    term: "Terminating Decimal",
    definition: "A decimal fraction that contains a finite number of digits in its decimal part.",
    category: "Number Systems"
  },
  {
    term: "Recurring Decimal",
    definition: "A non-terminating decimal in which a single digit or a block of digits repeats itself indefinitely.",
    category: "Number Systems"
  },
  {
    term: "Significant Figures",
    definition: "The digits in a measured or calculated value that carry reliable meaning contributing to measurement accuracy.",
    category: "Number Systems"
  },
  {
    term: "Approximation Error",
    definition: "The difference between the actual value and the estimated value: Error = Actual Value - Estimated Value.",
    category: "Number Systems"
  },
  {
    term: "Perfect Square",
    definition: "An integer that can be expressed as the square of another integer, e.g., 25 = 5 × 5.",
    category: "Number Systems"
  },
  {
    term: "Perfect Cube",
    definition: "A number obtained by multiplying an integer by itself three times, e.g., 64 = 4 × 4 × 4.",
    category: "Number Systems"
  },
  {
    term: "Power Set",
    definition: "The collection of all possible subsets of a set A, denoted by P(A), with cardinality 2^n.",
    category: "Algebra"
  },
  {
    term: "Direct Proportion",
    definition: "A relationship between two quantities such that an increase or decrease in one produces a proportional change in the other.",
    category: "Commercial Arithmetic"
  },
  {
    term: "Inverse Proportion",
    definition: "A relationship in which an increase in one quantity produces a corresponding proportional decrease in the other (xy = k).",
    category: "Commercial Arithmetic"
  },
  {
    term: "Compound Proportion",
    definition: "The proportion connecting three or more interrelated quantities.",
    category: "Commercial Arithmetic"
  },
  {
    term: "Markup",
    definition: "The profit or extra interest paid on borrowed funds: Markup = Principal × Rate × Time.",
    category: "Commercial Arithmetic"
  },
  {
    term: "Pythagoras Theorem",
    definition: "In any right-angled triangle, the square of the hypotenuse equals the sum of the squares of the base and perpendicular (c² = a² + b²).",
    category: "Geometry & Mensuration"
  },
  {
    term: "Arc of a Circle",
    definition: "A continuous curved section of the perimeter/boundary of a circle.",
    category: "Geometry & Mensuration"
  },
  {
    term: "Sector of a Circle",
    definition: "The portion of a circle bounded by two radii and the intercepted arc.",
    category: "Geometry & Mensuration"
  },
  {
    term: "Congruent Figures",
    definition: "Geometrical figures having exactly the same size and the same shape (≅).",
    category: "Geometry & Mensuration"
  },
  {
    term: "Similar Figures",
    definition: "Geometrical figures having identical shapes and proportional corresponding sides (~).",
    category: "Geometry & Mensuration"
  },
  {
    term: "Range",
    definition: "The difference between the maximum observation and minimum observation: R = x_max - x_min.",
    category: "Statistics & Probability"
  },
  {
    term: "Variance",
    definition: "A measure of data spread relative to its mean: S² = (Σx² / n) - (Σx / n)².",
    category: "Statistics & Probability"
  },
  {
    term: "Standard Deviation",
    definition: "The positive square root of the variance, measuring dispersion of data values around the mean.",
    category: "Statistics & Probability"
  },
  {
    term: "Equally Likely Events",
    definition: "Events that have exactly the same probability or equal chances of occurring.",
    category: "Statistics & Probability"
  },
  {
    term: "Mutually Exclusive Events",
    definition: "Events that cannot happen simultaneously; their intersection is null (A ∩ B = ∅).",
    category: "Statistics & Probability"
  }
];

export const symbolsData: SymbolItem[] = [
  { symbol: "∈", latex: "\\in", meaning: "Is an element / member of", example: "3 \\in \\mathbb{Z}" },
  { symbol: "∉", latex: "\\notin", meaning: "Is not an element of", example: "\\sqrt{2} \\notin \\mathbb{Q}" },
  { symbol: "∪", latex: "\\cup", meaning: "Union of sets", example: "A \\cup B" },
  { symbol: "∩", latex: "\\cap", meaning: "Intersection of sets", example: "A \\cap B" },
  { symbol: "⊆", latex: "\\subseteq", meaning: "Is subset of", example: "A \\subseteq B" },
  { symbol: "⊂", latex: "\\subset", meaning: "Is proper subset of", example: "A \\subset B" },
  { symbol: "∅", latex: "\\emptyset", meaning: "Empty / Null set", example: "A \\cap B = \\emptyset" },
  { symbol: "::", latex: "::", meaning: "Proportion symbol", example: "a : b :: c : d" },
  { symbol: "∝", latex: "\\propto", meaning: "Is proportional to", example: "y \\propto x" },
  { symbol: "≈", latex: "\\approx", meaning: "Approximately equal to", example: "\\pi \\approx 3.1416" },
  { symbol: "≅", latex: "\\cong", meaning: "Congruent to", example: "\\Delta ABC \\cong \\Delta PQR" },
  { symbol: "~", latex: "\\sim", meaning: "Similar to", example: "\\Delta ABC \\sim \\Delta XYZ" },
  { symbol: "⊥", latex: "\\perp", meaning: "Perpendicular to", example: "AB \\perp CD" },
  { symbol: "||", latex: "\\parallel", meaning: "Parallel to", example: "AB \\parallel CD" },
  { symbol: "∠", latex: "\\angle", meaning: "Angle", example: "\\angle ABC = 90^\\circ" },
  { symbol: "|x|", latex: "|x|", meaning: "Absolute value / Modulus of x", example: "|-7| = 7" },
  { symbol: "∴", latex: "\\therefore", meaning: "Therefore", example: "\\therefore x = 5" },
  { symbol: "∵", latex: "\\because", meaning: "Since / Because", example: "\\because a = b" },
  { symbol: "∑", latex: "\\sum", meaning: "Summation of values", example: "\\sum x" }
];
