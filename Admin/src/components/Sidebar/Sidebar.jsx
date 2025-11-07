import React from "react";
import "./Sidebar.css";

const menuItems = [
  { label: "Manage Sessions", icon: "📅" },
  { label: "Manage Students", icon: "👨‍🎓" },
  { label: "Manage Courses", icon: "📚" },
  { label: "Analytics", icon: "📊" },
  { label: "Settings", icon: "⚙️" },
];

export default function Sidebar({ active, onSelect }) {
  return (
    <aside className="sidebar">
      <div className="logo">Admin Panel</div>
      <ul className="nav">
        {menuItems.map((item) => (
          <li 
            key={item.label} 
            className={active === item.label ? "active" : ""}
            onClick={() => onSelect(item.label)}
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
      <button className="switch-btn">Switch to Student View</button>
      <div className="profile-card">
        <div className="user-icon">AD</div>
        <div>
          <div className="profile-name">Admin User</div>
          <div className="profile-role">Administrator</div>
        </div>
      </div>
    </aside>
  );
}
