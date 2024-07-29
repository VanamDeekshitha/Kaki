import React, { useState } from "react";
import "./feeds.css";

const Feed = ({ content }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(content.text);
  const [isStarred, setIsStarred] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  const toggleBookmark = () => {
    setIsBookmarked(!isBookmarked);
  };

  return (
    <div className="feed">
      <div className="post">
        {content?.image && (
          <img
            src={URL.createObjectURL(content.image)}
            alt={content.image.name}
            width={300}
            height={400}
          />
        )}
        {isEditing ? (
          <div>
            <input type="text" value={text} onChange={handleTextChange} />
            <button onClick={handleSaveClick}>Save</button>
          </div>
        ) : (
          <p>{text}</p>
        )}
      </div>
      <div className="actions">
        <div>
          <button className="bi bi-pencil" onClick={handleEditClick}></button>
        </div>
        <div>
          <button
            className={`bi bi-star ${isStarred ? "selected" : "unselected"}`}
            onClick={toggleStar}
          ></button>
        </div>
        <div>
          <button
            className={`bi bi-bookmark ${
              isBookmarked ? "selected" : "unselected"
            }`}
            onClick={toggleBookmark}
          ></button>
        </div>
      </div>
    </div>
  );
};




export default Feed;
