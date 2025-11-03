import React from "react";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const courses = [
    { title: "English - A1", progress: 80 },
    { title: "Math - B2", progress: 60 },
    { title: "Science - C3", progress: 75 },
  ];

  return (
    <div className="page">
      <h2>Your Courses</h2>
      <div className="courses-grid">
        {courses.map((c, i) => (
          <CourseCard key={i} title={c.title} progress={c.progress} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
