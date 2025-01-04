import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { auth, logout } from "./firebase.js";

const Layout = () => {
  const navigate = useNavigate();

  const linkStyle = {
    color: "white",
    textDecoration: "none",
  };

  const handleLogout = () => {
    logout(auth, navigate);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/" style={linkStyle}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/login" style={linkStyle}>
              Login
            </Link>
          </li>
          <li>
            <Link to="/register" style={linkStyle}>
              Register
            </Link>
          </li>
          <li>
            <Link to="/createClothing" style={linkStyle}>
              Create Clothing
            </Link>
          </li>
          <button onClick={handleLogout} type="button">
            Logout
          </button>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
