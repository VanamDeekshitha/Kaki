import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from '../../services/AuthContext';
import "./navbar.css";

const NavBar = () => {
  const { currentUser, logout } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
          window.location.href = '/home';
    } catch (err) {
      console.error("Failed to logout", err);
    }
  };

  return (
    <div className="nav">
      <FontAwesomeIcon icon={faCrow} className="logo" size="2x" />
      <div className="d-flex aic">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/bookmarks">Bookmark</Link>
          <Link to="/profile">Profile</Link>
        </div>
        <div className="commonProfile pointer" onClick={toggleDropdown}>
          {currentUser?.email?.charAt(0).toUpperCase() || "T"}
        </div>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
