import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./VirtualInstructor.css";

const VirtualInstructor = () => {
  const location = useLocation();
  const { title } = location.state || {};

  // 💬 Chat state
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hello! I'm your virtual instructor. Feel free to ask any questions during the session.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // 🚀 Send message to backend
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/deepseek", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (data.reply) {
        setMessages((prev) => [...prev, { sender: "ai", text: data.reply }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "⚠️ Sorry, I couldn’t process your request." },
        ]);
      }
    } catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "❌ Server error. Please try again later." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 💡 Send when pressing Enter
  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="virtual-instructor">
      <h2>Virtual Instructor</h2>

      <div className="vi-session-box">
        {/* --- Session Info Section --- */}
        <div className="vi-session-main">
          <div className="vi-session-icon" />
          <div className="vi-session-status">Session Ready</div>
          <div className="vi-session-desc">
            Click "Start Session" to begin your virtual instructor session.
          </div>
          <button className="vi-session-btn">Start Session</button>
        </div>

        {/* --- Chat Section --- */}
        <div className="vi-session-chat">
          <div className="vi-chat-title">Session Chat</div>

          <div className="vi-chat-box">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`vi-chat-message ${
                  msg.sender === "user" ? "user-msg" : "ai-msg"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="vi-chat-message ai-msg">💬 Thinking...</div>
            )}
          </div>

          <input
            className="vi-chat-input"
            type="text"
            placeholder="Type your question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyPress}
          />
        </div>
      </div>

      <div className="vi-course-list">
        <h3>{title || "Introduction to React Hooks"}</h3>
        <div>
          Computer Science • CS301 | 45 minutes | Interactive Session | Intermediate Level
        </div>
      </div>
    </div>
  );
};

export default VirtualInstructor;
