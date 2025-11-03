import Course from "../Components/Course";
import Attendance from "../Components/Attendance";
import Feedback from "../Components/Feedback";
import ProfileCard from "../Components/Profile";
import CalenderCard from "../Components/CalenderCard";

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
};