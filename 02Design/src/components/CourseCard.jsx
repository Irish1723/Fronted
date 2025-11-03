import React from "react";

const CourseCard = ({ title, progress }) => {
  return (
    <div className="course-card">
      <h4>{title}</h4>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{progress}% complete</p>
    </div>
  );
};

export default CourseCard;
