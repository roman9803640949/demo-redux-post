import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <div>
      <article>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <p>
          <PostAuthor userId={post.userId} />
        </p>
        <p>
          <TimeAgo timeStamp={post.date}></TimeAgo>
        </p>
        <ReactionButton post={post}></ReactionButton>
      </article>
    </div>
  );
};

export default PostsExcerpt;
