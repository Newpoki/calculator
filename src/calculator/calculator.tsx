import clsx from "clsx";
import { ButtonDigit } from "./button-digit";
import { ButtonOperation } from "./button-operation";
import { ButtonTool } from "./button-tool";
import { DIGITS, DIGIT_SEP, OPERATORS, TOOLS } from "./calculator-constants";
import { useIOSCalculator } from "./use-iOS-calculator";

import "./calculator.scss";

export const Calculator = () => {
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
          <ButtonTool className="reset-button" value={TOOLS.RESET} onClick={onReset}>
            {resetButtonLabel}
          </ButtonTool>
          <ButtonTool className="invert-button" value={TOOLS.INVERT} onClick={onInvert}>
            ⁺∕₋
          </ButtonTool>
          <ButtonTool className="percent-button" value={TOOLS.PERCENT} onClick={onPercent}>
            %
          </ButtonTool>
          <ButtonOperation
            value={OPERATORS.DIVISION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.DIVISION && (!rightValue || rightValue === "0")}
          >
            &#xf7;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS.SEVEN} onClick={onDigitClick}>
            7
          </ButtonDigit>
          <ButtonDigit value={DIGITS.HEIGHT} onClick={onDigitClick}>
            8
          </ButtonDigit>
          <ButtonDigit value={DIGITS.NINE} onClick={onDigitClick}>
            9
          </ButtonDigit>
          <ButtonOperation
            className="times-button"
            value={OPERATORS.MULTIPLICATION}
            onClick={onOperatorClick}
            isSelected={
              operator === OPERATORS.MULTIPLICATION && (!rightValue || rightValue === "0")
            }
          >
            &#xd7;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS.FOUR} onClick={onDigitClick}>
            4
          </ButtonDigit>
          <ButtonDigit value={DIGITS.FIVE} onClick={onDigitClick}>
            5
          </ButtonDigit>
          <ButtonDigit value={DIGITS.SIX} onClick={onDigitClick}>
            6
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.SUBSTRACTION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.SUBSTRACTION && (!rightValue || rightValue === "0")}
          >
            &minus;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS.ONE} onClick={onDigitClick}>
            1
          </ButtonDigit>
          <ButtonDigit value={DIGITS.TWO} onClick={onDigitClick}>
            2
          </ButtonDigit>
          <ButtonDigit value={DIGITS.THREE} onClick={onDigitClick}>
            3
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.ADDITION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.ADDITION && (!rightValue || rightValue === "0")}
          >
            &#x2b;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS.ZERO} onClick={onDigitClick}>
            0
          </ButtonDigit>
          <ButtonDigit value={DIGIT_SEP} onClick={onSepClick}>
            ,
          </ButtonDigit>
          <ButtonOperation onClick={onCalc}>&#x3d;</ButtonOperation>
        </div>
      </div>
    </main>
  );
};
