export const getButtonType = (value: string) => {
  if (["+", "-", "x", "/", "="].includes(value)) {
    return "operation";
  }
  if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."].includes(value)) {
    return "number";
  }
  return "default";
};
