import { useState } from "react";
import { addNewPost, postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const canSave =
    [title, content, userId].every(Boolean) && addRequestStatus === "idle";

  const dispatch = useDispatch();
  const onSavePostClick = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content, userId })).unwrap();
        setTitle("");
        setContent("");
        setUserId("");
      } catch (error) {
        console.error("Failed to save the post", error);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };
  return (
    <div>
      <section>
        <h2>Add a New Post</h2>
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
            value={userId}
            onChange={onAuthorChanged}
            label="Select User"
          >
            {users.map((user, index) => (
              <option value={user.id} key={index}>
                {user.name}
              </option>
            ))}
          </select>
          <button type="button" onClick={onSavePostClick}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
