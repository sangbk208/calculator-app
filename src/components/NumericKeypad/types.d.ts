export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "number" | "operation";
}

export interface INumericKeypadProps {
  handleOnClick: (value: string) => void;
}
