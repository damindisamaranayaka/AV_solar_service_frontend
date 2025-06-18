// src/components/Header.jsx
import "./header.css";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext.jsx"; // 👈 make sure this path is correct

const Header = () => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user, logout } = useAuth(); // 👈 access user and logout

  const handleClick = () => {
    navigate("/dueservice");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header className="header">
      <img src="/src/images/AVlogo.jpeg" className="logo-image" />
      <div className="header-right">
        <div className="notification-icon">
          <NotificationsActiveIcon onClick={handleClick} />
        </div>

        <span className="user-name">
          Hi{user?.name ? `! ${user.name}` : "!"}
        </span>

        <div
          className="user-icon"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <AccountCircleIcon fontSize="large" />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
