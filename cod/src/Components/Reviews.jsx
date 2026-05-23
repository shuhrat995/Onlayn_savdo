import { Link } from "react-router-dom";

export default function Reviews() {
     return (
          <main className="page-main simple-page">
               <nav className="breadcrumb" aria-label="Breadcrumb">
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <span>Reviews</span>
               </nav>

               <section className="simple-card simple-empty">
                    <h1>My Reviews</h1>

                    <p>You have not reviewed any products yet.</p>

                    <Link className="view-all-btn" to="/flash-sales">
                         Browse Products
                    </Link>
               </section>
          </main>

     );
}
