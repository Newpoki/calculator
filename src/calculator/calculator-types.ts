import { DIGITS, DIGIT_SEP, OPERATORS, TOOLS } from "./calculator-constants";

type DigitKey = keyof typeof DIGITS;

export type Digit = `${typeof DIGITS[DigitKey]}`;

export type DigitWithSep = Digit | typeof DIGIT_SEP;

type OperatorKey = keyof typeof OPERATORS;

export type Operator = `${typeof OPERATORS[OperatorKey]}`;

type ToolKey = keyof typeof TOOLS;

export type Tool = `${typeof TOOLS[ToolKey]}`;
