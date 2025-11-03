import React from "react";
import "./Sidebar.css";

export default function Sidebar({ setActiveSection, activeSection, setIsAuthenticated }) {
  const menuItems = ["Dashboard", "Courses", "Attendance", "Feedback"];

  return (
    <div className="sidebar">
      <div>
        <h1>LearnThru</h1>
        <nav>
          {menuItems.map((item) => (
            <button
              key={item}
              className={`sidebar-link ${activeSection === item ? "active" : ""}`}
              onClick={() => setActiveSection(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </div>

      <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>
        Logout
      </button>
    </div>
  );
}
