export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "number" | "operation";
}

export interface INumericKeypad {
  handleOnClick: (value: string) => void;
}
