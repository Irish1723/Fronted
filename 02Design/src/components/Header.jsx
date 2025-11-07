import React, { useState } from "react";
import { FaUserCircle, FaComments } from "react-icons/fa";
import "./Header.css";
import ChatBot from "./Chatbot.jsx";

export default function Header() {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => setShowChat(!showChat);

  return (
    <>
      <header className="header">
        <div className="header-left">
          <h1 className="logo">Athena LMS</h1>
        </div>

        <div className="header-right">
          <FaComments className="icon chat-icon" onClick={toggleChat} />
          <FaUserCircle className="icon profile-icon" />
        </div>
      </header>

      {/* ChatBot Drawer */}
      {showChat && (
        <div className="chatbot-container">
          <div className="chatbot-overlay" onClick={toggleChat}></div>
          <div className="chatbot-panel">
            <ChatBot onClick={toggleChat}/>
          </div>
        </div>
      )}
    </>
  );
}
