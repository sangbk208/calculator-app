export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  type?: "default" | "number" | "calculation";
}
