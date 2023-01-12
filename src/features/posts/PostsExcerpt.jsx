import React from "react";
import PostAuthor from "./PostAuthor";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  return (
    <div>
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 100)}</p>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date}></TimeAgo>
        <ReactionButton post={post}></ReactionButton>
      </article>
    </div>
  );
};

export default PostsExcerpt;
