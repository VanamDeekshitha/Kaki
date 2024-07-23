import React, { useState } from "react";
import "../../forms.css";
import "./createpost.css";
import { useDispatch } from "react-redux";
import { addNewPost } from "../../data/actions/newPost.actions";
const CreatePost = () => {
  const [post, setNewPost] = useState("");
  const [file, setFile] = useState(null);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const dispatch = useDispatch();

  const addPost = () => {
    if (post?.trim()) {
      dispatch(
        addNewPost({
          id: Date.now(),
          text: post,
          like: false,
          image: file,
        })
      );
      setNewPost("");
    }
  };
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  const addEmoji = (emoji) => {
    setNewPost(post + emoji.native);
  };
  return (
    <>
      <div className="createbox">
        <div className="w100">
          <textarea
            className="textarea"
            value={post}
            onChange={(e) => setNewPost(e.target.value)}
          />

          <div className="postactionContainer">
            <input
              type="file"
              id="file"
              className="hidden-file-input"
              onChange={handleFileChange}
            />
            <label htmlFor="file" className="custom-file-upload">
              <i class="bi bi-file-earmark-image"></i>
            </label>

            <div className="primaryBtn" onClick={addPost}>
              Post
            </div>
          </div>
        </div>
        <div className="profile">S</div>
      </div>
    </>
  );
};

export default CreatePost;
