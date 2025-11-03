import React from "react";

const ReminderCard = () => {
  const reminders = [
    { task: "Vocabulary Test", date: "Dec 12" },
    { task: "Essay Submission", date: "Dec 14" },
    { task: "Speaking Class", date: "Dec 20" },
  ];

  return (
    <div className="card reminder-card">
      <h4>Reminders</h4>
      <ul>
        {reminders.map((r, i) => (
          <li key={i}>
            <span className="task">{r.task}</span>
            <span className="date">{r.date}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReminderCard;
