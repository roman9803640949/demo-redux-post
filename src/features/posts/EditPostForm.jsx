import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { selectAllUsers } from "../users/usersSlice";
import { selectPostById, updatePost } from "./postsSlice";

const EditPostForm = () => {
  const { postId } = useParams();
  const navigate = useNavigate();

  const post = useSelector((state) => selectPostById(state, Number(postId)));
  const users = useSelector(selectAllUsers);

  const [title, setTitle] = useState(post.title);
  const [content, setContent] = useState(post.body);
  const [userId, setUserId] = useState(post.userId);
  const [requestStatus, setRequestStatus] = useState("idle");

  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && requestStatus === "idle";

  const onSavePostClicked = () => {
    if (canSave) {
      try {
        setRequestStatus("pending");
        dispatch(
          updatePost({
            id: post.id,
            title,
            body: content,
            userId,
            reactions: post.reactions,
          })
        ).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
        navigate(`/post/${postId}`);
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setRequestStatus("idle");
      }
    }
  };
  if (!post) {
    return (
      <section>
        <h2>Post not found !</h2>
      </section>
    );
  }
  return (
    <div>
      <section>
        <h2>Edit Post</h2>
        <form>
          <div>
            <label htmlFor="postTitle">Title</label>
            <input
              type="text"
              id="postTitle"
              value={title}
              onChange={onTitleChanged}
            />
          </div>
          <div>
            <label htmlFor="postContent">Content</label>
            <textarea
              name="postContent"
              id="postContent"
              cols="30"
              rows="10"
              value={content}
              onChange={onContentChanged}
            ></textarea>
          </div>
          <select
            name="authorId"
            id="userId"
            defaultValue={userId}
            onChange={onAuthorChanged}
            label="Select User"
          >
            <option value=""></option>
            {users.map((user, index) => (
              <option value={user.id} key={index}>
                {user.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
            Update Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default EditPostForm;
