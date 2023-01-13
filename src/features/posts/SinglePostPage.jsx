import React from "react";
import { useSelector } from "react-redux";
import { selectPostById } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButton from "./ReactionButton";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const SinglePostPage = () => {
  const { postId } = useParams();
  const post = useSelector((state) => selectPostById(state, +postId));
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
        <Link to={`/post/edit/${post.id}`}> Edit Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date}></TimeAgo>
      </div>
      <ReactionButton post={post}></ReactionButton>
    </article>
  );
};

export default SinglePostPage;
