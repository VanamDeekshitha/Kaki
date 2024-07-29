import React, { useState } from "react";
import "../../forms.css";
import "./createpost.css";
import { useDispatch } from "react-redux";
import { addNewPostRequest } from "../../data/actions/posts.actions";
import { useAuth } from '../../services/AuthContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const CreatePost = () => {
  const [post, setNewPost] = useState("");
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const { currentUser } = useAuth();

  // If user is not logged in, display a message
  if (!currentUser) {
    return <div>Please log in to create a post.</div>;
  }

  // Handle file input change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Function to upload the file to Firebase Storage and create a post
  const uploadFileAndCreatePost = async () => {
    if (file) {
      const storage = getStorage();
      const fileRef = ref(storage, `posts/${file.name}`);

      try {
        await uploadBytes(fileRef, file);
        const fileURL = await getDownloadURL(fileRef);
        
        // Create post with file URL
        const newPost = {
          text: post,
          image: fileURL,
          userId: currentUser.uid,
          username: currentUser.displayName || 'Anonymous',
          timestamp: new Date().toISOString(), // Add timestamp
        };

        // Dispatch action to add post
        dispatch(addNewPostRequest(newPost));
        setNewPost("");
        setFile(null);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    } else {
      // Create post without file
      const newPost = {
        text: post,
        image: '',
        userId: currentUser.uid,
        username: currentUser.displayName || 'Anonymous',
        timestamp: new Date().toISOString(), // Add timestamp
      };

      // Dispatch action to add post
      dispatch(addNewPostRequest(newPost));
      setNewPost("");
    }
  };

  const addPost = () => {
    uploadFileAndCreatePost();
  };

  return (
    <div className="createbox">
      <div className="w100">
        <textarea
          className="textarea"
          value={post}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="Write something..."
        />

        <div className="postactionContainer">
          {/* <input
            type="file"
            id="file"
            className="hidden-file-input"
            onChange={handleFileChange}
          />
          <label htmlFor="file" className="custom-file-upload">
            <i className="bi bi-file-earmark-image"></i>
          </label> */}

          <div className="primaryBtn" onClick={addPost}>
            Post
          </div>
        </div>
      </div>
      <div className="profile"> {currentUser?.email?.charAt(0).toUpperCase() || "T"}</div>
    </div>
  );
};

export default CreatePost;
