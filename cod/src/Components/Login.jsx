import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="auth-page">
      <div className="auth-visual">
        <img src="sing-in.jpg" alt="Login visual" />
      </div>

      <section className="auth-card">
        <h1>Log in to Exclusive</h1>
        <p>Enter your details below</p>

        <form className="auth-form">
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />

          <div className="auth-row">
            <button type="submit" className="view-all-btn auth-primary">
              Log In
            </button>
            <Link to="/terms">Forgot Password?</Link>
          </div>

          <p className="auth-switch">
            New here? <Link to="/signup">Create account</Link>
          </p>
        </form>
      </section>
    </main>
  );
}
