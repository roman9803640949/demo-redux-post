import React from "react";
import { useDispatch } from "react-redux";
import { reactionAdded } from "./postsSlice";
const reactionEmojis = {
  thumbsUp: "👍",
  wow: "😯",
  heart: "♥️",
  rocket: "🚀",
  coffee: "☕",
};
const ReactionButton = ({ post }) => {
  const dispatch = useDispatch();
  const addReaction = (postId, name) =>
    dispatch(
      reactionAdded({
        postId,
        reaction: name,
      })
    );
  return (
    <div>
      {Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button
          type="button"
          key={name}
          onClick={() => addReaction(post.id, name)}
        >
          {emoji} , {post.reactions[name]}
        </button>
      ))}
    </div>
  );
};

export default ReactionButton;
