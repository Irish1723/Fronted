import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Feedback from "./pages/Feedback";
import LiveClass from "./pages/Class";
import VirtualInstructor from "./pages/VirtualInstructor";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import "./App.css";

const AppLayout = ({ activePage, setActivePage }) => {
  return (
    <div className="app-container">
      <Header />
      <div className="main-content">
        <Sidebar activePage={activePage} setActivePage={setActivePage} />
        <div className="page-content">
          <Routes>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="live-classes" element={<LiveClass />} />
            <Route path="courses" element={<Courses />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="feedback" element={<Feedback />} />
            <Route path="virtual-instructor" element={<VirtualInstructor />} />
            <Route path="*" element={<Navigate to="dashboard" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
  };
export default AppLayout;
