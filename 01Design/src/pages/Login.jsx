export default function Login({ setIsAuthenticated, setIsRegistering }) {
  const handleSubmit = e => {
    e.preventDefault()
    setIsAuthenticated(true)
  }

  return (
    <div className="auth-container">
      <form className="auth-box" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button>Login</button>
        <p>
          Don’t have an account?{" "}
          <span onClick={() => setIsRegistering(true)}>Register</span>
        </p>
      </form>
    </div>
  )
}
