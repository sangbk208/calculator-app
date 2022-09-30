export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "number" | "operator";
  isActive?: boolean;
}

export interface INumericKeypadProps {
  handleOnClick: (value: string) => void;
}
