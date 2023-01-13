import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";
import { deletePost } from "./postsSlice";
import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";

const PostsExcerpt = ({ post }) => {
  const dispatch = useDispatch();
  const onDeletePostClicked = () => dispatch(deletePost(post));
  return (
    <div>
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body.substring(0, 75)}...</p>
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timeStamp={post.date}></TimeAgo>
        <ReactionButton post={post}></ReactionButton>
        <button type="button" onClick={onDeletePostClicked}>
          Delete Post
        </button>
      </article>
    </div>
  );
};

export default PostsExcerpt;
