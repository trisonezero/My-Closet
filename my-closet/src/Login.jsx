import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, loginEmailAndPassword } from "./firebase.js";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await loginEmailAndPassword(auth, email, password);
      console.log("User logged in:", userCredential.user);
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.error("Login error:", error.message);
    }
  };

  return (
    <div className="auth-form-container">
      <form onSubmit={handleSubmit} className="login-form">
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Email"
          id="email"
          name="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          id="password"
          name="password"
        />
        <button type="submit">Login</button>
      </form>

      <button onClick={() => navigate("/register")} className="link-btn">
        Register a new account
      </button>
    </div>
  );
};
