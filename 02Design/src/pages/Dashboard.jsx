import React from "react";
import DashboardCard from "../components/DashboardCard";
import ReminderCard from "../components/ReminderCard";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome back, Stella Walton!</h2>
      <p className="subtitle">
        Here’s an overview of your recent classes and progress.
      </p>

      <DashboardCard />
      <ReminderCard />
    </div>
  );
};

export default Dashboard;
