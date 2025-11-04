import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "./LiveClass.css";

const LiveClass = () => {
  const { classTitle } = useParams();
  const [activeTab, setActiveTab] = useState("live");

  return (
    <div className="live-container">
      {/* Sidebar */}
      <motion.div
        className="live-sidebar"
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        <h3 className="class-title">{decodeURIComponent(classTitle)}</h3>
        <div className="status">
          <span className="live-dot"></span> Live Now
        </div>

        <div className="sidebar-tabs">
          <button
            className={activeTab === "live" ? "active" : ""}
            onClick={() => setActiveTab("live")}
          >
            🎥 Live
          </button>
          <button
            className={activeTab === "chat" ? "active" : ""}
            onClick={() => setActiveTab("chat")}
          >
            💬 Chatbot
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="live-main">
        {activeTab === "live" ? (
          <motion.div
            className="video-frame"
            key="live"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Example embedded Zoom meeting */}
            <iframe
              src="https://zoom.us/wc/join/123456789"
              title="Zoom Meeting"
              allow="camera; microphone; fullscreen; display-capture"
              frameBorder="0"
            ></iframe>
          </motion.div>
        ) : (
          <motion.div
            className="chatbot"
            key="chat"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h4>Ask your questions</h4>
            <div className="chat-window">
              <div className="message bot">👋 Hi! How can I assist you?</div>
            </div>
            <input
              type="text"
              placeholder="Type your message..."
              className="chat-input"
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default LiveClass;
