import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PostAuthor from "./PostAuthor";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";

import ReactionButton from "./ReactionButton";
import TimeAgo from "./TimeAgo";
import "./PostsList.css";
import PostsExcerpt from "./PostsExcerpt";
const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);
  let content;
  if (postStatus === "loading") {
    content = <p>'Loading...'</p>;
  } else if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => (
      <PostsExcerpt key={post.id} post={post} />
    ));
  } else if (postStatus === "failed") {
    content = <p> {error}</p>;
  }

  return (
    <div>
      <h2>Posts</h2>
      <div className="postlist">{content}</div>
    </div>
  );
};

export default PostsList;
