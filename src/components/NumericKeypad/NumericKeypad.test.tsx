import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { NumericKeypad } from "./NumericKeypad";
import { KeypadValuesDefault } from "../../constants";

describe("<NumericKeypad />", () => {
  it("renders keys in keypad", () => {
    render(
      <NumericKeypad handleOnClick={jest.fn()} operator="" isAllClear={true} />
    );

    KeypadValuesDefault.flat().forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
    const zeroButtonElement = screen.getByRole("button", { name: "0" });
    expect(zeroButtonElement.className.includes("keypad-button-0")).toEqual(
      true
    );
  });

  it("check operator button is active", () => {
    render(
      <NumericKeypad handleOnClick={jest.fn()} operator="+" isAllClear={true} />
    );

    const plusButtonElement = screen.getByRole("button", { name: "+" });
    const minusButtonElement = screen.getByRole("button", { name: "-" });

    expect(plusButtonElement).toBeInTheDocument();
    expect(minusButtonElement).toBeInTheDocument();
    expect(
      plusButtonElement.className.includes("button-operator-active")
    ).toEqual(true);
    expect(
      minusButtonElement.className.includes("button-operator-active")
    ).toEqual(false);
  });

  it("clear button state", () => {
    render(
      <NumericKeypad
        handleOnClick={jest.fn()}
        operator="+"
        isAllClear={false}
      />
    );

    const clearButtonElement = screen.getByRole("button", { name: "C" });
    expect(clearButtonElement).toBeInTheDocument();
  });
});
