import clsx from "clsx";
import { useCallback } from "react";
import { useCalculator } from "../hooks/use-calculator";
import { ButtonDigit } from "./button-digit";
import { ButtonOperation } from "./button-operation";
import { ButtonTool } from "./button-tool";
import { DIGITS_WITH_SEP, OPERATORS, TOOLS } from "./calculator-constants";
import { DigitWithSepValue } from "./calculator-types";

import "./calculator.scss";

export const Calculator = () => {
  const {
    displayedValue,
    operator,
    onCalc,
    onDigitClick,
    onOperatorClick,
    onReset,
    onInvert,
    onPercent,
  } = useCalculator();

  const handleDigitClick = useCallback(
    (value: DigitWithSepValue) => {
      // iOS calculator doesn't allow more than 9 chars
      if (displayedValue.length === 9) {
        return;
      }

      onDigitClick(value);
    },
    [displayedValue.length, onDigitClick]
  );

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
            AC
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
            isSelected={operator === OPERATORS.DIVISION}
          >
            &#xf7;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.SEVEN} onClick={handleDigitClick}>
            7
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.HEIGHT} onClick={handleDigitClick}>
            8
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.NINE} onClick={handleDigitClick}>
            9
          </ButtonDigit>
          <ButtonOperation
            className="times-button"
            value={OPERATORS.MULTIPLICATION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.MULTIPLICATION}
          >
            &#xd7;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.FOUR} onClick={handleDigitClick}>
            4
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.FIVE} onClick={handleDigitClick}>
            5
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.SIX} onClick={handleDigitClick}>
            6
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.SUBSTRACTION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.SUBSTRACTION}
          >
            &minus;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.ONE} onClick={handleDigitClick}>
            1
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.TWO} onClick={handleDigitClick}>
            2
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.THREE} onClick={handleDigitClick}>
            3
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.ADDITION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.ADDITION}
          >
            &#x2b;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.ZERO} onClick={handleDigitClick}>
            0
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.SEP} onClick={handleDigitClick}>
            ,
          </ButtonDigit>
          <ButtonOperation onClick={onCalc}>&#x3d;</ButtonOperation>
        </div>
      </div>
    </main>
  );
};
