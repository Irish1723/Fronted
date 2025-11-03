export default function Sidebar({ setIsAuthenticated }) {
  return (
    <div className="sidebar">
      <div>
        <h1>LearnThru</h1>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Courses</a>
          <a href="#">Attendance</a>
          <a href="#">Feedback</a>
        </nav>
      </div>
      <button className="logout-btn" onClick={() => setIsAuthenticated(false)}>
        Logout
      </button>
    </div>
  )
}
