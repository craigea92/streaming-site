import React from "react";
import "./Comment.css";

const Comment = () => {
  return (
    <div className="Comment_Container">
      <div
        className="Comment_Avatar"
        src="https://yt3.ggpht.com/yti/APfAmoE-Q0ZLJ4vk3vqmV4Kwp0sbrjxLyB8Q4ZgNsiRH=s88-c-k-c0x00ffffff-no-rj-mo"
      />
      <div className="Comment_Details">
        <div className="Comment_Name">
          John Doe <div className="Comment_Date">1 day ago</div>
        </div>
        <div className="Comment_Text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel, ex
          laboriosam ipsam aliquam voluptatem perferendis provident modi, sequi
          tempore reiciendis quod, optio ullam cumque? Quidem numquam sint
          mollitia totam reiciendis?
        </div>
      </div>
    </div>
  );
};

export default Comment;
