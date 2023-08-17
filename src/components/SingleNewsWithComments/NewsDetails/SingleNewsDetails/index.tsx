import { FC, memo } from "react";
import { getDomainFromLink } from "../../../../utils";
import Card from "../../../../UI/Card";
import classes from "./index.module.scss";

interface SingleNewsDetailsProps {
  url: string;
  title: string;
  by: string;
  score: number;
  descendants: number;
}

const SingleNewsDetails: FC<SingleNewsDetailsProps> = ({ url, title, by, score, descendants }) => {
  return (
    <Card className={classes["news-details"]}>
      <article className={classes.article}>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <span>Taken from:</span> {`${getDomainFromLink(url)}`}
        </a>
        <h3>{title}</h3>
        <div className={classes.wrapper}>
          <p>
            {score} {score === 1 ? "Point" : "Points"}
          </p>
          <p>
            {descendants} {descendants === 1 ? "Comment" : "Comments"}
          </p>
          <p className={classes.author}>
            By: <span>{by}</span>
          </p>
        </div>
      </article>
    </Card>
  );
};

export default memo(SingleNewsDetails);
