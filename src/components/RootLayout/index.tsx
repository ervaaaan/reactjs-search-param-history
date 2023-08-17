import { FC, PropsWithChildren } from "react";
import Header from "../Header";
import classes from "./index.module.scss";

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={classes.main}>{children}</main>
    </>
  );
};

export default RootLayout;
