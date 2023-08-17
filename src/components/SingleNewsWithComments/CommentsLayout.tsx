import { FC } from "react";
import CommentsBlock from "./NewsDetails/CommentsBlock.tsx";
import { SingleNewsInterface } from "../../types/singleNews";
import classes from "./CommentsLayout.module.scss";

interface CommentsLayoutProps {
  singleNews: SingleNewsInterface;
}

const DetailsAndCommentsLayout: FC<CommentsLayoutProps> = ({ singleNews }) => {
  return (
    <div>
      <div className={classes["comments-wrapper"]}>
        <h3>Comments:</h3>
        <CommentsBlock comments={singleNews.kids} />
      </div>
    </div>
  );
};

export default DetailsAndCommentsLayout;
