import React, { useEffect, useState } from "react";
import "./Sidebar.css";

const Sidebar = ({ activePage, setActivePage }) => {
  const [highlight, setHighlight] = useState(activePage);

  useEffect(() => {
    setHighlight(activePage);
  }, [activePage]);

  const menuItems = ["Dashboard", "Courses", "Attendance", "Feedback"];

  return (
    <div className="sidebar">
      <h2 className="logo">Athena LMS</h2>
      <ul className="nav">
        {menuItems.map((item) => (
          <li
            key={item}
            className={highlight === item ? "active" : ""}
            onClick={() => setActivePage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
