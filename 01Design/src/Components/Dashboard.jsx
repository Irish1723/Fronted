import Course from "./Course.jsx";
import Attendance from "./Attendance.jsx";
import Feedback from "./Feedback.jsx";
import ProfileCard from "./Profile.jsx";
import CalenderCard from "./CalenderCard.jsx"; 


export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="card">
        <h2>Welcome back, Ansh Pal!</h2>
        <p>Here’s an overview of your recent classes and progress.</p>

        <Course />
        <Attendance />
        <Feedback />
      </div>

      <ProfileCard />
      <CalenderCard/> 
    </div>
  );
}
