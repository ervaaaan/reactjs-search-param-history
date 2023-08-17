import { FC, PropsWithChildren } from "react";
import classes from "./index.module.scss";
import classnames from "classnames";

interface CardProps {
  className?: string;
}

const Card: FC<PropsWithChildren<CardProps>> = ({ children, className }) => {
  const cardClasses = classnames(classes.card, className);

  return <div className={cardClasses}>{children}</div>;
};

export default Card;
