import React, { useState } from "react";
import { auth, loginEmailAndPassword, logout } from "./firebase.js";

export const Login = ({ onFormSwitch }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await loginEmailAndPassword(auth, email, password);
            console.log("User logged in:", userCredential.user);

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
                <button onClick={() => logout(auth)} type="button">Logout</button>
            </form>

            <button onClick={() => onFormSwitch('register')} className='link-btn'>Register a new account</button>
        </div>
    );
};
