import { Link } from "react-router-dom";

export default function Cancellations() {
  return (
    <main className="page-main simple-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>My Cancellations</span>
      </nav>

      <section className="simple-card simple-empty">
        <h1>My Cancellations</h1>
        <p>You do not have canceled orders yet.</p>
        <Link className="view-all-btn" to="/orders">
          View Orders
        </Link>
      </section>
    </main>
  );
}
