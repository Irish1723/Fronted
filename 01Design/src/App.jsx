// In App.jsx
import { useState, useEffect } from "react";
import Sidebar from "./Components/Sidebar";
import Course from "./Components/Course";
import Dashboard from "./Components/Dashboard";
import Attendance from "./Components/Attendance";
import Feedback from "./Components/Feedback";
import "./App.css";

export default function App() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  // Load last section from localStorage on mount
  useEffect(() => {
    const last = localStorage.getItem("lastSection");
    if (last) setActiveSection(last);
  }, []);

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} activeSection={activeSection} />
      <main className="main-content">
        {activeSection === "Dashboard" && <Dashboard />}
        {activeSection === "Course" && <Course />}
        {activeSection === "Attendance" && <Attendance />}
        {activeSection === "Feedback" && <Feedback />}
      </main>
    </div>
  );
}
