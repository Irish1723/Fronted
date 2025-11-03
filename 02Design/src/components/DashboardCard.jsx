import React from "react";

const DashboardCard = () => {
  return (
    <div className="card-group">
      <div className="card">
        <h4>Courses</h4>
        <div className="pill-container">
          <span className="pill">English - A1</span>
          <span className="pill">Math - B2</span>
          <span className="pill">Science - C3</span>
        </div>
      </div>
      <div className="card">
        <h4>Attendance</h4>
        <p>You have attended 85% of your sessions.</p>
      </div>
      <div className="card">
        <h4>Feedback</h4>
        <p>Your instructors appreciate your active participation!</p>
      </div>
    </div>
  );
};

export default DashboardCard;
