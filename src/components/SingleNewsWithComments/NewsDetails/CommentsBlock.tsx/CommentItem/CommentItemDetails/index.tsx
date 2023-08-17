import { FC, useState, useEffect } from "react";
import Card from "../../../../../../UI/Card";
import { getTimeAgo } from "../../../../../../utils";
import CommentsBlock from "../..";
import classes from "./index.module.scss";
import he from "he";

interface CommentsItemDetailsProps {
  by: string;
  id: number;
  kids?: number[];
  text?: string;
  time: number;
  deleted?: boolean;
}

const CommentsItemDetails: FC<CommentsItemDetailsProps> = ({ by, kids = [], text, time, deleted }) => {
  const calculateTime = getTimeAgo(time);
  const [showKidsComments, setShowKidsComments] = useState<boolean>(false);
  const [decodedText, setDecodedText] = useState<string | null>(null);

  useEffect(() => {
    if (text) {
      setDecodedText(he.decode(text));
    }
  }, [text]);

  const changeShowNestedCommentsHandler = (): void => {
    setShowKidsComments((prevState) => !prevState);
  };

  return (
    <>
      <Card className={classes["single-comment"]}>
        <p className={classes.author}>
          By: <span>{by}</span>
        </p>
        <p className={classes.time}>{calculateTime}</p>
        {decodedText ? <p>{decodedText}</p> : <p>{deleted ? "*Deleted" : "[dead]"}</p>}
        {kids?.length > 0 && (
          <button onClick={changeShowNestedCommentsHandler}>
            {showKidsComments ? "—" : kids?.length} {!showKidsComments && "More"}
          </button>
        )}
        {showKidsComments && <CommentsBlock comments={kids} />}
      </Card>
    </>
  );
};

export default CommentsItemDetails;
