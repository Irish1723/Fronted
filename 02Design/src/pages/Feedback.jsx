import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Feedback.css";

const Feedback = () => {
  const [filter, setFilter] = useState("All");
  const [feedbacks, setFeedbacks] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [newFeedback, setNewFeedback] = useState({
    course: "",
    student: "",
    comment: "",
    rating: 5,
  });

  useEffect(() => {
    const data = [
      { course: "English - A1", student: "John Doe", comment: "The lessons were really interactive and helpful!", rating: 5 },
      { course: "Math - B2", student: "Ava Green", comment: "Challenging but the teacher explained concepts very well.", rating: 4 },
      { course: "Science - C3", student: "Ethan Patel", comment: "Enjoyed the experiments and practical sessions.", rating: 5 },
      { course: "English - B1", student: "Liam Smith", comment: "Improved my grammar a lot, great course!", rating: 4 },
    ];
    setFeedbacks(data);
  }, []);

  const filteredFeedbacks =
    filter === "All" ? feedbacks : feedbacks.filter((fb) => fb.course.includes(filter));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newFeedback.course || !newFeedback.student || !newFeedback.comment) {
      alert("Please fill all fields.");
      return;
    }
    setFeedbacks([newFeedback, ...feedbacks]);
    setIsFormOpen(false);
    setNewFeedback({ course: "", student: "", comment: "", rating: 5 });
  };

  return (
    <div className="page feedback-page">
      <div className="feedback-header">
        <h2>Course Feedback</h2>

        <div className="feedback-actions">
          <div className="feedback-filter">
            <label htmlFor="filter">Filter by Course:</label>
            <select id="filter" value={filter} onChange={(e) => setFilter(e.target.value)}>
              <option value="All">All</option>
              <option value="English">English</option>
              <option value="Math">Math</option>
              <option value="Science">Science</option>
            </select>
          </div>

          <button className="add-feedback-btn" onClick={() => setIsFormOpen(true)}>
            + Write Feedback
          </button>
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

      {/* View Feedback Modal */}
      <AnimatePresence>
        {selectedFeedback && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
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
              <button className="close-btn" onClick={() => setSelectedFeedback(null)}>Close</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Write Feedback Modal */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div className="modal-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
              className="modal-content feedback-form"
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ type: "spring", stiffness: 180 }}
            >
              <h3>Write Feedback</h3>
              <form onSubmit={handleSubmit} className="modern-form">
                <div className="form-row">
                  <div className="form-group">
                    <label>Course:</label>
                    <input
                      type="text"
                      value={newFeedback.course}
                      onChange={(e) => setNewFeedback({ ...newFeedback, course: e.target.value })}
                      placeholder="e.g. English - A1"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Name:</label>
                    <input
                      type="text"
                      value={newFeedback.student}
                      onChange={(e) => setNewFeedback({ ...newFeedback, student: e.target.value })}
                      placeholder="e.g. John Doe"
                      required
                    />
                  </div>
                </div>

                <div className="form-group full-width">
                  <label>Comment:</label>
                  <textarea
                    value={newFeedback.comment}
                    onChange={(e) => setNewFeedback({ ...newFeedback, comment: e.target.value })}
                    placeholder="Write your feedback..."
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="form-row">
                  <div className="form-group small">
                    <label>Rating (1-5):</label>
                    <input
                      type="number"
                      min="1"
                      max="5"
                      value={newFeedback.rating}
                      onChange={(e) => setNewFeedback({ ...newFeedback, rating: Number(e.target.value) })}
                    />
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="submit" className="submit-btn">Submit</button>
                  <button type="button" className="cancel-btn" onClick={() => setIsFormOpen(false)}>Cancel</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
