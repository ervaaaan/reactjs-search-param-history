import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";
import Theme from "../Theme";

const Header: FC = () => {
  return (
    <header className={classes.header}>
      <Theme />
      <h1>
        <Link to="/">HackerNews</Link>
      </h1>
    </header>
  );
};

export default Header;
