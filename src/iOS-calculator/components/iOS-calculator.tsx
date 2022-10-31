import clsx from "clsx";
import { DIGITS, DIGIT_SEP, OPERATORS, TOOLS } from "../../calculator/calculator-constants";
import { useIOSCalculator } from "../hooks/use-iOS-calculator";
import { IOSButtonDigit } from "./iOS-button-digit";
import { IOSButtonOperator } from "./iOS-button-operator";
import { IOSButtonTool } from "./iOS-button-tool";

import "./iOS-calculator.scss";

export const IOSCalculator = () => {
  const {
    displayedValue,
    resetButtonLabel,
    rightValue,
    operator,
    onCalc,
    onDigitClick,
    onOperatorClick,
    onReset,
    onInvert,
    onPercent,
    onSepClick,
  } = useIOSCalculator();

  return (
    <main className="calculator">
      <div className="calculator--screen">
        <p
          className={clsx("calculator--screen--result", {
            "calculator--screen--result--normal": displayedValue.length <= 7,
            "calculator--screen--result--small": displayedValue.length === 8,
            "calculator--screen--result--extra-small": displayedValue.length === 9,
          })}
        >
          {displayedValue}
        </p>
      </div>

      <div className="calculator--buttons">
        <div className="calculator--buttons--row">
          <IOSButtonTool className="reset-button" value={TOOLS.RESET} onClick={onReset}>
            {resetButtonLabel}
          </IOSButtonTool>
          <IOSButtonTool className="invert-button" value={TOOLS.INVERT} onClick={onInvert}>
            ⁺∕₋
          </IOSButtonTool>
          <IOSButtonTool className="percent-button" value={TOOLS.PERCENT} onClick={onPercent}>
            %
          </IOSButtonTool>
          <IOSButtonOperator
            value={OPERATORS.DIVISION}
            onClick={onOperatorClick}
            isSelected={
              operator === OPERATORS.DIVISION && (!rightValue || rightValue === DIGITS.ZERO)
            }
          >
            &#xf7;
          </IOSButtonOperator>
        </div>

        <div className="calculator--buttons--row">
          <IOSButtonDigit value={DIGITS.SEVEN} onClick={onDigitClick}>
            7
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.HEIGHT} onClick={onDigitClick}>
            8
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.NINE} onClick={onDigitClick}>
            9
          </IOSButtonDigit>
          <IOSButtonOperator
            className="times-button"
            value={OPERATORS.MULTIPLICATION}
            onClick={onOperatorClick}
            isSelected={
              operator === OPERATORS.MULTIPLICATION && (!rightValue || rightValue === DIGITS.ZERO)
            }
          >
            &#xd7;
          </IOSButtonOperator>
        </div>

        <div className="calculator--buttons--row">
          <IOSButtonDigit value={DIGITS.FOUR} onClick={onDigitClick}>
            4
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.FIVE} onClick={onDigitClick}>
            5
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.SIX} onClick={onDigitClick}>
            6
          </IOSButtonDigit>
          <IOSButtonOperator
            value={OPERATORS.SUBSTRACTION}
            onClick={onOperatorClick}
            isSelected={
              operator === OPERATORS.SUBSTRACTION && (!rightValue || rightValue === DIGITS.ZERO)
            }
          >
            &minus;
          </IOSButtonOperator>
        </div>

        <div className="calculator--buttons--row">
          <IOSButtonDigit value={DIGITS.ONE} onClick={onDigitClick}>
            1
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.TWO} onClick={onDigitClick}>
            2
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGITS.THREE} onClick={onDigitClick}>
            3
          </IOSButtonDigit>
          <IOSButtonOperator
            value={OPERATORS.ADDITION}
            onClick={onOperatorClick}
            isSelected={
              operator === OPERATORS.ADDITION && (!rightValue || rightValue === DIGITS.ZERO)
            }
          >
            &#x2b;
          </IOSButtonOperator>
        </div>

        <div className="calculator--buttons--row">
          <IOSButtonDigit value={DIGITS.ZERO} onClick={onDigitClick}>
            0
          </IOSButtonDigit>
          <IOSButtonDigit value={DIGIT_SEP} onClick={onSepClick}>
            ,
          </IOSButtonDigit>
          <IOSButtonOperator onClick={onCalc}>&#x3d;</IOSButtonOperator>
        </div>
      </div>
    </main>
  );
};
