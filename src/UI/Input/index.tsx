import { FC, PropsWithChildren } from "react";
import classes from "./index.module.scss";
import classnames from "classnames";

interface InputProps {
  id?: string;
  onChange?: any;
  onKeyDown?: any;
  className?: string;
  placeholder?: string;
}

const Input: FC<PropsWithChildren<InputProps>> = ({ children, id, onChange, onKeyDown, className, placeholder }) => {
  const inputClasses = classnames(classes.input, className);

  return (
    <div className={inputClasses}>
      <input type="text" id={id} placeholder={placeholder} onChange={onChange} onKeyDown={onKeyDown} />
      {children}
    </div>
  );
};

export default Input;
