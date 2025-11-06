import React from "react";
import "./CalenderCard.css";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CalendarCard = () => {
  const navigate = useNavigate();

  const classes = [
    { date: "Nov 5", title: "Grammar Workshop", time: "10:00 AM" },
    { date: "Nov 6", title: "Speaking Practice", time: "2:00 PM" },
    { date: "Nov 8", title: "Listening Class", time: "5:00 PM" },
    { date: "Nov 10", title: "Mock Interview", time: "4:00 PM" },
  ];

  // Simple month-day layout for the calendar (can be dynamic based on current date)
  const currentDate = new Date();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  return (
    <div className="calendar-card">
      <div className="calendar-content">
        <div className="upcoming-classes">
          <h3>Upcoming Classes</h3>
          <div className="calendar-list">
            {classes.map((cls, i) => (
              <motion.div
                className="calendar-item"
                key={`${cls.date}-${cls.title}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.28, delay: i*0.05 }
                }
              >
                <div className="calendar-date">{cls.date}</div>
                <div className="calendar-details">
                  <p className="class-title">{cls.title}</p>
                  <p className="class-time">{cls.time}</p>
                </div>
                <button className="join-btn"
                 onClick={() =>window.open(`/class/${encodeURIComponent(cls.title)}`, "_blank")}>Join Now</button>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mini-calendar">
          <h4>November 2025</h4>
          <div className="calendar-grid">
            {[...Array(daysInMonth)].map((_, day) => {
              const dayNum = day + 1;
              const isToday = dayNum === currentDate.getDate();
              return (
                <div className={`calendar-day ${isToday ? "today" : ""}`} key={day}>
                  {dayNum}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarCard;
