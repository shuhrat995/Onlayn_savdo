
import { Link } from 'react-router-dom';

export default function Order() {
  return (
    <main className="page-main simple-page">
      {/* BREADCRUMB */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Orders</span>
      </nav>

      {/* ORDERS CONTENT */}
      <section className="simple-card simple-empty">
        <h1>My Orders</h1>
        <p>You do not have active orders yet.</p>
        
        {/* Tugma ko'rinishidagi link o'z joyida qoldi, faqat React Router formatiga o'tdi */}
        <Link className="view-all-btn" to="/flash-sales">
          Start Shopping
        </Link>
      </section>
    </main>
  );
}
