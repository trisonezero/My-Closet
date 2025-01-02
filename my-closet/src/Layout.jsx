import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    const linkStyle = {
        color: "white",
        textDecoration: "none",
    };

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/login" style={linkStyle}>Login</Link></li>
                    <li><Link to="/register" style={linkStyle}>Register</Link></li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
