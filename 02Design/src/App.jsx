import React, { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Feedback from "./pages/Feedback";
import "./App.css";
import LiveClass from "./pages/CLass";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [activePage, setActivePage] = useState("Dashboard");

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard />;
      case "Live Classes":
         return (
    <Router>
      <Routes>
        <Route path="/" element={<CalendarCard />} />
        <Route path="/live/:classTitle" element={<LiveClass />} />
      </Routes>
    </Router>)
      case "Courses":
        return <Courses />;
      case "Attendance":
        return <Attendance />;
      case "Feedback":
        return <Feedback />;
      default:
        return <Dashboard />;
    }
  };

  useEffect(() => {
    document.title = `${activePage} | LearnThru`;
  }, [activePage]);

  return (
    <div className="app-container">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="content">{renderPage()}</div>
    </div>
  );
  
};

export default App;
