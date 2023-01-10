import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAllUsers } from "../users/usersSlice";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [userId, setUserId] = useState("");
  const users = useSelector(selectAllUsers);

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);
  const onAuthorChanged = (e) => setUserId(e.target.value);

  const dispatch = useDispatch();
  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content, userId));
      setTitle("");
      setContent("");
      setUserId("");
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
