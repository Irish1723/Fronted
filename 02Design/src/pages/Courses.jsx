import React, { useState } from "react";
import CourseCard from "../components/CourseCard";


const CourseListWithFilter = () => {
  const [filter, setFilter] = useState("All");

  const courses = [
    { title: "English - A1", progress: 80 },
    { title: "Math - B2", progress: 60 },
    { title: "Science - C3", progress: 75 },
    { title: "Science - C4", progress: 50 },
    { title: "English - B1", progress: 90 },
    { title: "Math - C2", progress: 40 },
  ];

  const filteredCourses =
    filter === "All"
      ? courses
      : courses.filter((c) => c.title.includes(filter));

  return (
    <div className="page">
      <div className="course-header">
        <h2>Your Courses</h2>

        <div className="course-filter">
          <label htmlFor="filter">Filter by Type:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="filter-select"
          >
            <option value="All">All</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>
        </div>
      </div>

      <div className="courses-grid">
        {filteredCourses.map((c, i) => (
          <CourseCard key={i} title={c.title} progress={c.progress} />
        ))}
      </div>
    </div>
  );
};

export default CourseListWithFilter;
