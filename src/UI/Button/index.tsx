import { FC, PropsWithChildren } from "react";
import classes from "./index.module.scss";
import classnames from "classnames";

interface ButtonProps {
  onClick?: () => void;
  className?: string;
}

const Button: FC<PropsWithChildren<ButtonProps>> = ({ children, onClick, className }) => {
  const buttonClasses = classnames(classes.button, className);

  return (
    <button type="button" className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
