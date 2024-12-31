import { useState } from "react";
import {auth, createAccount, logout} from "./firebase.js";


export const Register = ({ onFormSwitch }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userCredential = await createAccount(auth, email, password);
            console.log("User logged in:", userCredential.user);
        } catch (error) {
            alert(error.message);
            console.error("Register error:", error.message);
        }
    };

    return (
        <div className="auth-form-container">
            <form onSubmit={handleSubmit} className="register-form">
                <label htmlFor="username">Username</label>
                <input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                />
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
                <button type="submit">Register</button>
                <button onClick={() => logout(auth)} type="button">Logout</button>
            </form>

            <button onClick={() => onFormSwitch('login')} className='link-btn'>Already have an account? Login here
            </button>
        </div>
    );
};
