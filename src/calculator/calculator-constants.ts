const DIGITS = {
  ZERO: "0",
  ONE: "1",
  TWO: "2",
  THREE: "3",
  FOUR: "4",
  FIVE: "5",
  SIX: "6",
  SEVEN: "7",
  HEIGHT: "8",
  NINE: "9",
} as const;

export const DIGITS_WITH_SEP = { ...DIGITS, SEP: "," } as const;

export const DIGITS_LIST_WITH_SEP = Object.values(DIGITS_WITH_SEP);

export const OPERATORS = {
  DIVISION: "/",
  MULTIPLICATION: "*",
  ADDITION: "+",
  SUBSTRACTION: "-",
} as const;

export const OPERATORS_LIST = Object.values(OPERATORS);

export const TOOLS = {
  RESET: "RESET",
  INVERT: "INVERT",
  PERCENT: "PERCENT",
} as const;
