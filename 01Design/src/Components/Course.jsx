import { useState, useEffect } from "react";
import "./App.css";

const allCourses = [
  {
    id: 1,
    title: "React Fundamentals",
    instructor: "Leona Jimenez",
    lessons: 10,
    date: "2025-07-12", // future → upcoming
  },
  {
    id: 2,
    title: "Advanced JavaScript",
    instructor: "Cole Chandler",
    lessons: 12,
    date: "2025-05-10", // past → ongoing
  },
  {
    id: 3,
    title: "UI/UX Design",
    instructor: "Helena Lowe",
    lessons: 8,
    date: "2025-11-02", // current month → ongoing
  },
  {
    id: 4,
    title: "Python Data Analytics",
    instructor: "Alan Parker",
    lessons: 9,
    date: "2025-12-01", // future → upcoming
  },
];

export default function Course() {
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const [upcomingCourses, setUpcomingCourses] = useState([]);

  useEffect(() => {
    const today = new Date();
    const ongoing = allCourses.filter((course) => new Date(course.date) <= today);
    const upcoming = allCourses.filter((course) => new Date(course.date) > today);

    setOngoingCourses(ongoing);
    setUpcomingCourses(upcoming);
  }, []);

  return (
    <div className="course-container">
      <h2 className="section-title">Your Courses</h2>

      <div className="course-section">
        <h3 className="sub-title">🎯 Ongoing Courses</h3>
        {ongoingCourses.length > 0 ? (
          <div className="course-grid">
            {ongoingCourses.map((course) => (
              <div key={course.id} className="course-card ongoing">
                <h3>{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Lessons:</strong> {course.lessons}</p>
                <p><strong>Started:</strong> {new Date(course.date).toDateString()}</p>
                <button className="view-btn">Continue</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-text">No ongoing courses at the moment.</p>
        )}
      </div>

      <div className="course-section">
        <h3 className="sub-title">📅 Upcoming Courses</h3>
        {upcomingCourses.length > 0 ? (
          <div className="course-grid">
            {upcomingCourses.map((course) => (
              <div key={course.id} className="course-card upcoming">
                <h3>{course.title}</h3>
                <p><strong>Instructor:</strong> {course.instructor}</p>
                <p><strong>Lessons:</strong> {course.lessons}</p>
                <p><strong>Starts On:</strong> {new Date(course.date).toDateString()}</p>
                <button className="view-btn">Enroll</button>
              </div>
            ))}
          </div>
        ) : (
          <p className="empty-text">No upcoming courses right now.</p>
        )}
      </div>
    </div>
  );
}
