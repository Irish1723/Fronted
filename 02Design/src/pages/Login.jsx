// src/pages/Login.jsx
import React from "react";
import AuthPage from "../components/AuthPage";

function Login({ setLoggedIn }) {
  return <AuthPage setLoggedIn={setLoggedIn} />;
}

export default Login;
