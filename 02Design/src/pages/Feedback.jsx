import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Feedback.css";

const Feedback = () => {
  const [filter, setFilter] = useState("All");
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);

  // Simulate fetching feedback from an API
  useEffect(() => {
    const data = [
      {
        course: "English - A1",
        student: "John Doe",
        comment: "The lessons were really interactive and helpful!",
        rating: 5,
      },
      {
        course: "Math - B2",
        student: "Ava Green",
        comment: "Challenging but the teacher explained concepts very well.",
        rating: 4,
      },
      {
        course: "Science - C3",
        student: "Ethan Patel",
        comment: "Enjoyed the experiments and practical sessions.",
        rating: 5,
      },
      {
        course: "English - B1",
        student: "Liam Smith",
        comment: "Improved my grammar a lot, great course!",
        rating: 4,
      },
    ];

    setFeedbacks(data);
  }, []);

  // Filter logic
  const filteredFeedbacks =
    filter === "All"
      ? feedbacks
      : feedbacks.filter((fb) => fb.course.includes(filter));

  return (
    <div className="page feedback-page">
      <div className="feedback-header">
        <h2>Course Feedback</h2>

        <div className="feedback-filter">
          <label htmlFor="filter">Filter by Course:</label>
          <select
            id="filter"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="All">All</option>
            <option value="English">English</option>
            <option value="Math">Math</option>
            <option value="Science">Science</option>
          </select>
        </div>
      </div>

      <div className="feedback-list">
        {filteredFeedbacks.map((fb, index) => (
          <motion.div
            key={index}
            className="feedback-card"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            onClick={() => setSelectedFeedback(fb)}
          >
            <h4>{fb.course}</h4>
            <p className="student-name">By {fb.student}</p>
            <p className="comment-preview">
              “{fb.comment.slice(0, 60)}{fb.comment.length > 60 ? "..." : ""}”
            </p>
            <p className="rating">⭐ {fb.rating}/5</p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedFeedback && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h3>{selectedFeedback.course}</h3>
              <p className="student">By {selectedFeedback.student}</p>
              <p className="comment">“{selectedFeedback.comment}”</p>
              <p className="rating">⭐ {selectedFeedback.rating}/5</p>

              <button
                className="close-btn"
                onClick={() => setSelectedFeedback(null)}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
