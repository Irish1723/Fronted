import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import ManageSessions from "./pages/ManageSessions";
import VirtualInstructor from "./pages/VirtualInstructor";
import "./styles.css";

const App = () => {
  const [activePage, setActivePage] = useState("Manage Sessions");

  return (
    <Router>
      <div className="app-container">
        {/* Sidebar with navigation */}
        <Sidebar activePage={activePage} setActivePage={setActivePage} />

        {/* Main content area */}
        <div className="page-content">
          <Routes>
            <Route path="/" element={<Navigate to="/manage-sessions" />} />
            <Route path="/manage-sessions" element={<ManageSessions />} />
            <Route path="/manage-students" element={<div>Manage Students Page</div>} />
            <Route path="/virtual-instructor" element={<VirtualInstructor />} />
            <Route path="/manage-courses" element={<div>Manage Courses Page</div>} />
            <Route path="/analytics" element={<div>Analytics Page</div>} />
            <Route path="/settings" element={<div>Settings Page</div>} />
            <Route path="*" element={<Navigate to="/manage-sessions" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
