import { useState } from "react"
import Sidebar from "./Components/Sidebar"
import Dashboard from "./components/Dashboard"
import Login from "./pages/Login"
import Register from "./pages/Register"
import "./index.css"

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isRegistering, setIsRegistering] = useState(false)

  if (!isAuthenticated) {
    return isRegistering ? (
      <Register setIsAuthenticated={setIsAuthenticated} setIsRegistering={setIsRegistering} />
    ) : (
      <Login setIsAuthenticated={setIsAuthenticated} setIsRegistering={setIsRegistering} />
    )
  }

  return (
    <div className="container">
      <Sidebar setIsAuthenticated={setIsAuthenticated} />
      <Dashboard />
    </div>
  )
}
