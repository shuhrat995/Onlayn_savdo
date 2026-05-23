import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className="auth-page">
      <div className="auth-visual">
        <img src="sing-in.jpg" alt="Kirish rasmi " />
      </div>

      <section className="auth-card">
        <h1>Create an account</h1>
        <p>Enter your details below</p>

        <form className="auth-form">
          <input type="text" placeholder="Name" required />
          <input type="text" placeholder="Email or Phone Number" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="view-all-btn auth-primary">
            Create Account
          </button>

          <button type="button" className="google-btn">
            <i className="bi bi-google"></i>
            Sign up with Google
          </button>

          <p className="auth-switch">
            Already have account? <Link to="/login">Log in</Link>
          </p>
        </form>
      </section>
    </main>
  );
}

export default Signup;
