import React from "react";
import DashboardCard from "../components/DashboardCard";
import CalenderCard from "../components/CalenderCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome back, Ansh Pal!</h2>
      <p className="subtitle">
        Here’s an overview of your recent classes and progress.
      </p>

      <DashboardCard />
      <CalenderCard />
    </div>
  );
};

export default Dashboard;
