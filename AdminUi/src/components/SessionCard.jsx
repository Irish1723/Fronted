import React from "react";
import { motion } from "framer-motion";
import "./SessionCard.css";

export default function SessionCard({ session, onDelete, onEdit, onStart }) {
  return (
    <motion.div
      className="session-card"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="session-info">
        <h3 className="session-title">{session.title}</h3>
        <p className="session-details">
          AI Instructor • {session.students} students • {session.duration}
        </p>
      </div>

      <div className="session-footer">
        <span className={`status ${session.status.toLowerCase()}`}>
          {session.status}
        </span>

        <div className="session-actions">
          {session.status === "Scheduled" && (
            <button className="action-btn" onClick={() => onStart(session.id)} title="Start Session">
              ▶
            </button>
          )}

          <button className="action-btn" onClick={() => onEdit(session.id)} title="Edit Session">
            ✏️
          </button>

          <button
            className="action-btn delete"
            onClick={() => onDelete(session.id)}
            title="Delete Session"
          >
            🗑️
          </button>
        </div>
      </div>
    </motion.div>
  );
}
