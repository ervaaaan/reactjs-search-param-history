import { FC } from "react";
import classes from "./index.module.scss";

const LoadingSpinner: FC = () => {
  return <div className={classes.spinner}></div>;
};

export default LoadingSpinner;
