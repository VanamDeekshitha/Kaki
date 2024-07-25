import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./comp.css";

function Profile() {
  return (
    <div className="profile-container">
      <p >Profile</p>
      <div style={{color:'grey'}}>
        <FontAwesomeIcon icon={faUserCircle} size="6x" />
      </div>
      <div className="profile-details">
        <div className="row">
          <span className="label">Name:</span>
          <span className="value">John Doe</span>
        </div>
        <div className="row">
          <span className="label">Email:</span>
          <span className="value">john.doe@example.com</span>
        </div>
        <div className="row">
          <span className="label">Phone:</span>
          <span className="value">123-456-7890</span>
        </div>
        <div className="row">
          <span className="label">Address:</span>
          <span className="value">1234 Elm Street</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
