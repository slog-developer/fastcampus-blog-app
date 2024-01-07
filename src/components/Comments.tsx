import { useState } from "react";

const COMMENTS = {};

export default function Comments() {
  const [comment, setComment] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const {
      target: { name, value },
    } = e;

    if (name === "comment") {
      setComment(value);
    }
  };

  return (
    <div className="comments">
      <form className="comments__form">
        <div className="form__block">
          <label htmlFor="comment">댓글 입력</label>
          <textarea
            name="comment"
            id="comment"
            onChange={onChange}
            value={comment}
            required
          />
        </div>
        <div className="form__block form__block-reverse">
          <input type="submit" value="입력" className="form__btn-submit" />
        </div>
      </form>
      <div className="comments__list">
        <div className="comment__box">
          <div className="comment__profile-box">
            <div className="comment__email">{"asdfasdf"}</div>
            <div className="comment__date">{"asdzxcvzxcv"}</div>
            <div className="comment__delete">삭제</div>
          </div>
          <div className="comment__text">댓글내용</div>
        </div>
      </div>
    </div>
  );
}
