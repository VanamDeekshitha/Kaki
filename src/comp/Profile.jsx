import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../services/AuthContext';
import "./comp.css";

function Profile() {
  const { currentUser } = useAuth();

  return (
    <div className="profile-container">
      <p>Profile</p>
      <div style={{ color: 'grey' }}>
        <FontAwesomeIcon icon={faUserCircle} size="6x" />
      </div>
      <div className="profile-details">
        <div className="row">
          <span className="label">Name:</span>
          <span className="value">{currentUser?.displayName || "N/A"}</span>
        </div>
        <div className="row">
          <span className="label">Email:</span>
          <span className="value">{currentUser?.email || "N/A"}</span>
        </div>
        <div className="row">
          <span className="label">Phone:</span>
          <span className="value">{currentUser?.phoneNumber || "N/A"}</span>
        </div>
        <div className="row">
          <span className="label">Address:</span>
          <span className="value">{currentUser?.address || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default Profile;
