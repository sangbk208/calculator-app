import { render, screen, fireEvent } from "@testing-library/react";
import { KeypadValuesDefault } from "../constants";
import { Calculator } from "./Calculator";

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

const buttomElement = (name: string) =>
  screen.getByRole("button", { name: name });

describe("<Calculator />", () => {
  it("renders correctly", () => {
    render(<Calculator />);

    const inputElement = screen.getByTestId("screen-input");

    expect(inputElement).toHaveValue("0");
    KeypadValuesDefault.flat().forEach((element) => {
      expect(screen.getByText(element)).toBeInTheDocument();
    });
  });

  describe("onclick keypad", () => {
    it("onclick number", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      numbers.forEach((element) => {
        fireEvent.click(buttomElement(element));
      });
      expect(inputElement).toHaveValue("1,234,567,890.");
    });

    it("onclick all clear: AC", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      numbers.forEach((element) => {
        fireEvent.click(buttomElement(element));
      });
      expect(inputElement).toHaveValue("1,234,567,890.");
      fireEvent.click(buttomElement("AC"));
      expect(inputElement).toHaveValue("0");
    });

    it("onclick clear: C", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      fireEvent.click(buttomElement("3"));
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("8"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("24");

      fireEvent.click(buttomElement("AC"));
      fireEvent.click(buttomElement("3"));
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("8"));
      fireEvent.click(buttomElement("C"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("18");
    });

    it("toggle sign", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");
      const toggleSignElement = screen.getByRole("button", { name: "±" });

      fireEvent.click(buttomElement("9"));
      fireEvent.click(toggleSignElement);
      expect(inputElement).toHaveValue("-9");
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("2"));
      fireEvent.click(buttomElement("="));
      fireEvent.click(toggleSignElement);
      expect(inputElement).toHaveValue("18");
    });

    it("onclick dot", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      fireEvent.click(buttomElement("."));
      expect(inputElement).toHaveValue("0.");
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("2"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("1.8");
      fireEvent.click(buttomElement("."));
      expect(inputElement).toHaveValue("1.8");
    });

    it("show the calculation history", () => {
      render(<Calculator />);

      const historybuttomElement = screen.getByRole("button", { name: "H" });

      fireEvent.click(historybuttomElement);
      expect(screen.getByText("History")).toBeInTheDocument();
      fireEvent.click(historybuttomElement);
      expect(screen.queryByText("History")).not.toBeInTheDocument();
    });
  });

  describe("perform calculations", () => {
    it("+ operator", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      // 9+6=15+15=30
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("+"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("15");

      fireEvent.click(buttomElement("+"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("30");
    });

    it("- operator", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      // 9-6=3-3=0
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("-"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("3");

      fireEvent.click(buttomElement("-"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("0");
    });

    it("x operator", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      // 9x6=54x54=2916
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("54");

      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("2,916");
    });

    it("/ operator", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      // 9/6=1.5/1.5=1
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("/"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("1.5");

      fireEvent.click(buttomElement("/"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("1");
    });

    it("calculations", () => {
      render(<Calculator />);

      const inputElement = screen.getByTestId("screen-input");

      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("9"));
      fireEvent.click(buttomElement("/"));
      fireEvent.click(buttomElement("3"));
      fireEvent.click(buttomElement("/"));
      fireEvent.click(buttomElement("2"));
      fireEvent.click(buttomElement("x"));
      fireEvent.click(buttomElement("8"));
      fireEvent.click(buttomElement("5"));
      fireEvent.click(buttomElement("+"));
      fireEvent.click(buttomElement("6"));
      fireEvent.click(buttomElement("="));
      expect(inputElement).toHaveValue("1,408.5");
    });
  });
});
