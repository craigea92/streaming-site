import React from "react";
import "./Comments.css";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="Comments_Container">
      <div className="Comments_NewComment">
        <div
          className="Comments_Avatar"
          src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
        />
        <div className="Input" placeholder="Add a comment..." />
      </div>
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
      <Comment />
    </div>
  );
};

export default Comments;
