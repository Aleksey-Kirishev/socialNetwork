import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img src='https://pbs.twimg.com/profile_images/913861131005022209/iaBdZZn1.jpg' alt="Way"/>
                <span className={s.forcomment}>{props.comment}</span>
                <div className={s.perenos}>
                    <span className={s.forcomment}>like:{props.likesCount}</span>
                    <span className={s.forcomment}>comment:{props.commentsCount}</span>
                </div>
            </div>
        </div>
    );
}

export default Post;