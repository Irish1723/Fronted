import React from "react";
import Sidebar from "./components/Sidebar";
import ManageSessions from "./pages/ManageSessions";
import "./styles.css";

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <ManageSessions />
    </div>
  );
}
