import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);

  const menuItems = [
    { label: "Manage Sessions", route: "/manage-sessions" },
    { label: "Manage Students", route: "/manage-students" },
    { label: "Virtual Instructors", route: "/virtual-instructor" },
    { label: "Manage Courses", route: "/manage-courses" },
    { label: "Analytics", route: "/analytics" },
    { label: "Settings", route: "/settings" },
  ];

  useEffect(() => {
    setActive(location.pathname);
  }, [location.pathname]);

  return (
    <motion.div
      className="sidebar"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="sidebar-title">Admin Panel</h2>

      <ul className="sidebar-menu">
        {menuItems.map((item) => (
          <li
            key={item.route}
            className={active === item.route ? "active" : ""}
          >
            <Link
              to={item.route}
              style={{
                textDecoration: "none",
                color: active === item.route ? "white" : "inherit",
                display: "block",
              }}
              onClick={() => setActive(item.route)}
            >
              {item.label}
            </Link>
          </li>
        ))}
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
};

export default Sidebar;
