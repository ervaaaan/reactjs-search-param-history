import { FC } from "react";
import CommentItem from "./CommentItem";

interface CommentsBlockProps {
  comments?: number[];
}

const CommentsBlock: FC<CommentsBlockProps> = ({ comments }) => {
  return (
    <div>
      {comments && comments.length > 0 ? (
        <ul>
          {" "}
          {comments.map((comment) => (
            <CommentItem key={comment} id={comment} />
          ))}
        </ul>
      ) : (
        <p>Still no comments</p>
      )}
    </div>
  );
};

export default CommentsBlock;
