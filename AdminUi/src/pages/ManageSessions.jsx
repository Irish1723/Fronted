import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SessionCard from "../components/SessionCard";
import "./ManageSessions.css";

export default function ManageSessions() {
  const [sessions, setSessions] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const data = [
      { id: 1, title: "Advanced Mathematics", students: 24, duration: "1h 20m", status: "Active" },
      { id: 2, title: "Physics 101", students: 18, duration: "Not started", status: "Scheduled" },
      { id: 3, title: "Chemistry Basics", students: 32, duration: "1h 45m", status: "Completed" },
    ];
    setSessions(data);
  }, []);

  const handleDelete = (id) => setSessions(sessions.filter((s) => s.id !== id));
  const handleEdit = (id) => alert(`Editing session ${id}`);
  const handleStart = (id) => {
    setSessions((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, status: "Active", duration: "0h 00m" } : s
      )
    );
  };

  const handleCreate = () => {
    const newSession = {
      id: sessions.length + 1,
      title: `New Session ${sessions.length + 1}`,
      students: 0,
      duration: "Not started",
      status: "Scheduled",
    };
    setSessions([...sessions, newSession]);
  };

  return (
    <motion.div
      className="manage-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* ===== Header ===== */}
      <div className="header">
        <div>
          <h1>Manage Virtual Instructor Sessions</h1>
          <p className="subtitle">Create and control AI instructor sessions</p>
        </div>

        <div className="header-actions">
          <button className="create-btn" onClick={handleCreate}>
            + Create New Session
          </button>
          <button className="modal-btn" onClick={() => setIsModalOpen(true)}>
            View in Modal
          </button>
        </div>
      </div>

      {/* ===== Sessions Layout ===== */}
      <div className="sessions-wrapper">
        {/* Left Info Column */}
        <div className="sessions-left">
          <h2 className="section-title">Active & Scheduled Sessions</h2>
          <p className="section-note">
            Manage and monitor ongoing or upcoming classes.
          </p>
        </div>

        {/* Right Cards Grid */}
        <div className="sessions-right">
          <div className="sessions-grid">
            {sessions
              .filter((s) => s.status !== "Completed")
              .map((session) => (
                <SessionCard
                  key={session.id}
                  session={session}
                  onDelete={handleDelete}
                  onEdit={handleEdit}
                  onStart={handleStart}
                />
              ))}
          </div>
        </div>
      </div>

    </motion.div>
  );
}
