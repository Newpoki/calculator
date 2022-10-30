import { useCalculator } from "../hooks/use-calculator";
import { ButtonDigit } from "./button-digit";
import { ButtonOperation } from "./button-operation";
import { ButtonTool } from "./button-tool";
import { DIGITS_WITH_SEP, OPERATORS, TOOLS } from "./calculator-constants";

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

  return (
    <main className="calculator">
      <div className="calculator--screen">
        <p className="calculator--screen--result">{displayedValue}</p>
      </div>

      <div className="calculator--buttons">
        <div className="calculator--buttons--row">
          <ButtonTool value={TOOLS.RESET} onClick={onReset}>
            AC
          </ButtonTool>
          <ButtonTool value={TOOLS.INVERT} onClick={onInvert}>
            +/-
          </ButtonTool>
          <ButtonTool value={TOOLS.PERCENT} onClick={onPercent}>
            %
          </ButtonTool>
          <ButtonOperation
            value={OPERATORS.DIVISION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.DIVISION}
          >
            ÷
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.SEVEN} onClick={onDigitClick}>
            7
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.HEIGHT} onClick={onDigitClick}>
            8
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.NINE} onClick={onDigitClick}>
            9
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.MULTIPLICATION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.MULTIPLICATION}
          >
            X
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.FOUR} onClick={onDigitClick}>
            4
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.FIVE} onClick={onDigitClick}>
            5
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.SIX} onClick={onDigitClick}>
            6
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.SUBSTRACTION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.SUBSTRACTION}
          >
            -
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.ONE} onClick={onDigitClick}>
            1
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.TWO} onClick={onDigitClick}>
            2
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.THREE} onClick={onDigitClick}>
            3
          </ButtonDigit>
          <ButtonOperation
            value={OPERATORS.ADDITION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.ADDITION}
          >
            +
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row--last">
          <ButtonDigit value={DIGITS_WITH_SEP.ZERO} onClick={onDigitClick}>
            0
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.SEP} onClick={onDigitClick}>
            ,
          </ButtonDigit>
          <ButtonOperation onClick={onCalc}>=</ButtonOperation>
        </div>
      </div>
    </main>
  );
};
