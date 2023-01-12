import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";

const SinglePostPage = () => {
  const post = useSelector((state) => selectPostById(state, postId));
  if (!post) {
    return (
      <section>
        <h2>Post not found</h2>
      </section>
    );
  }
  return (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <div className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date}></TimeAgo>
      </div>
      <ReactionButton post={post}></ReactionButton>
    </article>
  );
};

export default SinglePostPage;
