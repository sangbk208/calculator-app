import { CALCULATION_HISTORY_KEY, KeypadValuesDefault } from ".";

export const testKeypadValuesDefault = [
  ["AC", "H", "±", "/"],
  ["7", "8", "9", "x"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];

describe("constants", () => {
  it("CALCULATION_HISTORY_KEY", () => {
    expect(CALCULATION_HISTORY_KEY).toEqual("calculation-history");
  });

  it("KeypadValuesDefault", () => {
    expect(JSON.stringify(KeypadValuesDefault)).toEqual(
      JSON.stringify(testKeypadValuesDefault)
    );
  });
});
