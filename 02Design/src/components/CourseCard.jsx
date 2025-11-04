import React from "react";
import "./CourseCard.css";

const CourseCard = ({ title, progress }) => {
  return (
    <div className="course-card">
      <div className="course-card-header">
        <h4>{title}</h4>
        <span className="course-progress-text">{progress}% complete</span>
      </div>

      <div className="course-progress-bar">
        <div
          className="course-progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <button className="course-btn">
        {progress === 100 ? "Review Course" : "Continue Learning"}
      </button>
    </div>
  );
};

export default CourseCard;
