import { DIGITS_WITH_SEP, OPERATORS, TOOLS } from "./calculator-constants";

export type Operation = "/" | "*" | "-" | "+";

type DigitWithSepKey = keyof typeof DIGITS_WITH_SEP;

export type DigitWithSepValue = `${typeof DIGITS_WITH_SEP[DigitWithSepKey]}`;

type OperatorKey = keyof typeof OPERATORS;

export type OperatorValue = `${typeof OPERATORS[OperatorKey]}`;

type ToolKey = keyof typeof TOOLS;

export type ToolValue = `${typeof TOOLS[ToolKey]}`;
