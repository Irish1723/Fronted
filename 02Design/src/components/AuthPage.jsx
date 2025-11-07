// src/pages/AuthPage.jsx
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./AuthPage.css";

function AuthPage({ setLoggedIn }) {
  const [isLogin, setIsLogin] = useState(true); // toggle login/signup
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setMessage("Please enter both username and password");
      return;
    }

    try {
      const endpoint = isLogin
        ? "http://localhost:5000/auth/login"
        : "http://localhost:5000/auth/signup";

      const res = await axios.post(endpoint, { username, password });

      if (isLogin) {
        // ✅ LOGIN SUCCESS
        if (res.data.message === "Login successful") {
          setLoggedIn(true);
          navigate("/");
        } else {
          setMessage(res.data.error || "Invalid credentials");
        }
      } else {
        // ✅ SIGNUP SUCCESS
        if (res.status === 201) {
          setMessage("Signup successful! You can now log in.");
          setIsLogin(true);
        } else {
          setMessage(res.data.error || "Signup failed");
        }
      }
    } catch (err) {
      setMessage(err.response?.data?.error || "Server error");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isLogin ? "Login" : "Sign Up"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
        </form>
        {message && <p className="message">{message}</p>}

        <div className="toggle-section">
          {isLogin ? (
            <p>
              Don’t have an account?{" "}
              <span onClick={() => setIsLogin(false)}>Sign up</span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span onClick={() => setIsLogin(true)}>Log in</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
