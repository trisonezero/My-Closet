import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { auth, logout } from "./firebase.js";

const Layout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(auth, navigate);
  };

  return (
    <div>
      <div id="navbar">
        <h1 id="title">My Closet</h1>
        <h2 id="logout" onClick={handleLogout}>
          Logout
        </h2>
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
