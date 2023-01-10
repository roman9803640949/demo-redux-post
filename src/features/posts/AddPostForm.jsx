import { useState } from "react";
import { postAdded } from "./postsSlice";
import { useDispatch } from "react-redux";
const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  const dispatch = useDispatch();
  const onSavePostClick = () => {
    if (title && content) {
      dispatch(postAdded(title, content));
      setTitle("");
      setContent("");
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
          <button type="button" onClick={onSavePostClick}>
            Save Post
          </button>
        </form>
      </section>
    </div>
  );
};

export default AddPostForm;
