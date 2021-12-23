import { CommentImage } from "./CommentImage";

import './styles.scss';

interface CommentItemProps{
  data: {
    name: string;
    commentary: string;
  }
}

export function CommentItem({data} : CommentItemProps){
  return(
    <div className="comment">
      <header>
        <CommentImage />
        <h2>{data.name}</h2>
      </header>
      <p>{data.commentary}</p>
    </div>
  );
}