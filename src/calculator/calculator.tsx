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
            className="times-button"
            value={OPERATORS.MULTIPLICATION}
            onClick={onOperatorClick}
            isSelected={operator === OPERATORS.MULTIPLICATION}
          >
            &#xd7;
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
            &minus;
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
            &#x2b;
          </ButtonOperation>
        </div>

        <div className="calculator--buttons--row">
          <ButtonDigit value={DIGITS_WITH_SEP.ZERO} onClick={onDigitClick}>
            0
          </ButtonDigit>
          <ButtonDigit value={DIGITS_WITH_SEP.SEP} onClick={onDigitClick}>
            ,
          </ButtonDigit>
          <ButtonOperation onClick={onCalc}>&#x3d;</ButtonOperation>
        </div>
      </div>
    </main>
  );
};
