import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./VirtualInstructor.css";
import { sendToDeepseek } from "../api/deepseek"; // 👈 import your API helper

function VirtualInstructor() {
  const location = useLocation();
  const { title } = location.state || {};

  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "👋 Hello! I’m your Virtual Instructor. You can ask questions or start your session below.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // --- Send message ---
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      // ✅ Real backend call
      const data = await sendToDeepseek(input);

      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: data.reply || "🤔 No reply received from Athena.",
        },
      ]);
    } catch (err) {
      console.error("❌ Error:", err);
      setMessages((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "❌ Something went wrong. Please try again later.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <div className="virtual-instructor">
      <h2>Virtual Instructor</h2>

      <div className="vi-session-box">
        {/* --- Session Info --- */}
        <div className="vi-session-main">
          <div className="vi-session-icon"></div>
          <div className="vi-session-status">Session Ready</div>
          <div className="vi-session-desc">
            Click "Start Session" to begin your interactive class with the AI instructor.
          </div>
          <button className="vi-session-btn">Start Session</button>
        </div>

        {/* --- Chat Section --- */}
        <div className="vi-session-chat">
          <div className="vi-chat-title">Live Chat</div>

          <div className="vi-chat-box">
            {messages.map((msg, index) => (
              <div
                key={index}
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
          Computer Science • CS301 | 45 minutes | Interactive | Intermediate Level
        </div>
      </div>
    </div>
  );
}

export default VirtualInstructor;
