import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const menuItems = [
  {label: "Dashboard", route: "/dashboard"},
  {label: "Courses", route: "/courses"},
  {label: "Attendance", route: "/attendance"},
  {label: "Feedback", route: "/feedback"},
  {label: "Virtual Instructor", route: "/virtual-instructor"},
];

const Sidebar = ({ activePage, setActivePage }) => {
  const location = useLocation();
  const [highlight, setHighlight] = useState(activePage);

  useEffect(() => {
    setHighlight(activePage);
  }, [activePage]);

  return (
    <div className="sidebar">
      <ul className="nav">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={location.pathname === item.route ? "active" : ""}
            onClick={() => setActivePage(item.label)}
          >
            <Link to={item.route}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <button className="logout-btn">Logout</button>
    </div>
  );
};

export default Sidebar;
