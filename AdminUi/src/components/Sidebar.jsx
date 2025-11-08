import React from "react";
import { motion } from "framer-motion";
import "./Sidebar.css";

export default function Sidebar() {
  return (
    <motion.div
      className="sidebar"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="sidebar-title">Admin Panel</h2>

      <ul className="sidebar-menu">
        <li className="active">Manage Sessions</li>
        <li>Manage Students</li>
        <li>Manage Courses</li>
        <li>Analytics</li>
        <li>Settings</li>
      </ul>

      <button className="switch-btn">Switch to Student View</button>

      <div className="admin-info">
        <div className="avatar">AD</div>
        <div>
          <div className="admin-name">Admin User</div>
          <div className="admin-role">Administrator</div>
        </div>
      </div>
    </motion.div>
  );
}
