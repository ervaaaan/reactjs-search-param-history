import { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./index.module.scss";

const NotFoundPage: FC = () => {
  return (
    <section className={classes["not-found"]}>
      <h2>404 Not found</h2>
      <Link to="/">Back to top stories</Link>
    </section>
  );
};

export default NotFoundPage;
