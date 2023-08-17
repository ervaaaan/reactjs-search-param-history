import { FC } from "react";
import Card from "../../../UI/Card";
import { getTimeAgo } from "../../../utils";
import classes from "./index.module.scss";

interface SingleNewsProps {
  id: number;
  title: string;
  score: number;
  by: string;
  time: number;
  type: string;
  number: number;
}

const SingleNews: FC<SingleNewsProps> = ({ id, title, score, by, time, type, number }) => {
  const calculateTime = getTimeAgo(time);

  if (type !== "story") {
    return <></>;
  }

  return (
    <Card className={classes["single-news"]}>
      <li>
        <a href={`/news/${id}`} className={classes.article} target="_blank" rel="noreferrer">
          <h4>
            <span>{number}. </span>
            {title}
          </h4>
          <div className={classes.wrapper}>
            <p>
              {score} {score === 1 ? "Point" : "Points"}
            </p>
            <p>{calculateTime}</p>
            <p className={classes.author}>
              By: <span>{by}</span>
            </p>
          </div>
        </a>
      </li>
    </Card>
  );
};

export default SingleNews;
