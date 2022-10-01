import { IcalculationProp } from "../components/CalculationHistory/type";
import { CALCULATION_HISTORY_KEY } from "../constants";
import { setLocalStorage } from "./localStorage";
import {
  calculatorOperations,
  formatCalculation,
  formattedValue,
  getButtonType,
  updateCalculationHistory,
} from "./mix";

const calculation: IcalculationProp = {
  firstOperand: "2",
  secondOperand: "3",
  operator: "x",
  result: "6",
};

const calculations = [
  {
    firstOperand: "1",
    secondOperand: "3",
    operator: "x",
    result: "3",
  },
  {
    firstOperand: "3",
    secondOperand: "3",
    operator: "x",
    result: "9",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "2",
    secondOperand: "3",
    operator: "x",
    result: "6",
  },
  {
    firstOperand: "22",
    secondOperand: "3",
    operator: "x",
    result: "66",
  },
  {
    firstOperand: "12",
    secondOperand: "3",
    operator: "x",
    result: "36",
  },
];

describe("mix.ts in helper folder", () => {
  it("getButtonType: default, number, operator", () => {
    ["+", "-", "x", "/", "="].forEach((element) => {
      expect(getButtonType(element)).toEqual("operator");
    });

    ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].forEach(
      (element) => {
        expect(getButtonType(element)).toEqual("number");
      }
    );

    ["a", "b", "c", "]"].forEach((element) => {
      expect(getButtonType(element)).toEqual("default");
    });
  });

  it("calculatorOperations: + , - , x , / ", () => {
    expect(calculatorOperations("+", 4, 10)).toEqual(14);
    expect(calculatorOperations("-", 4, 10)).toEqual(-6);
    expect(calculatorOperations("x", 4, 10)).toEqual(40);
    expect(calculatorOperations("/", 4, 10)).toEqual(0.4);
  });

  it("formatCalculation()", () => {
    expect(formatCalculation(calculation)).toEqual("2 x 3 = 6");
  });

  it("formatDisplayValue()", () => {
    expect(formattedValue("1234567890.")).toEqual("1,234,567,890.");
  });

  describe("updateCalculationHistory", () => {
    it("calculation historical is empry", () => {
      updateCalculationHistory(calculation);

      expect(localStorage.getItem(CALCULATION_HISTORY_KEY) || "").toEqual(
        JSON.stringify([calculation])
      );
    });

    it("calculation historical < 20 elements", () => {
      setLocalStorage(CALCULATION_HISTORY_KEY, [calculation]);
      updateCalculationHistory(calculation);

      expect(localStorage.getItem(CALCULATION_HISTORY_KEY) || "").toEqual(
        JSON.stringify([calculation, calculation])
      );
    });

    it("calculation historical >= 20 elements", () => {
      setLocalStorage(CALCULATION_HISTORY_KEY, calculations);
      updateCalculationHistory(calculation);

      const newCalculations = [...calculations];
      newCalculations.pop();
      newCalculations.unshift(calculation);
      expect(localStorage.getItem(CALCULATION_HISTORY_KEY) || "").toEqual(
        JSON.stringify(newCalculations)
      );
    });
  });
});
