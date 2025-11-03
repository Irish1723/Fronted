export default function Register({ setIsAuthenticated, setIsRegistering }) {
  const handleSubmit = e => {
    e.preventDefault()
    setIsAuthenticated(true)
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <input type="text" placeholder="Full Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Register</button>
        <p>
          Already have an account?{" "}
          <span onClick={() => setIsRegistering(false)}>Login</span>
        </p>
      </form>
    </div>
  )
}
