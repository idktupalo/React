import React from "react";
import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  const removeItem = () => {
    props.removeItem(props.post);
  };
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {props.number}.{props.post.title}
        </strong>
        <div>{props.post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton onClick={removeItem}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
