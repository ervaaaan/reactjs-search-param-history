import { FC } from "react";
import SingleNews from "./SingleNews";
import { NumberedSingleNewsInterface } from "../../types/singleNews";

import classes from "./index.module.scss";

interface NewsListProps {
  news: NumberedSingleNewsInterface[];
}

const NewsList: FC<NewsListProps> = ({ news }) => {
  return (
    <div className={classes.news}>
      <ul>
        {news.map((singleNews) => (
          <SingleNews
            key={singleNews.id}
            id={singleNews.id}
            title={singleNews.title}
            score={singleNews.score}
            by={singleNews.by}
            time={singleNews.time}
            type={singleNews.type}
            number={singleNews.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default NewsList;
