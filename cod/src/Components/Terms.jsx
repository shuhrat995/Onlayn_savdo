import { Link } from "react-router-dom";

function Terms() {
     return (
               <main className="page-main simple-page">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                         <Link to="/">Home</Link>
                         <span>/</span>
                         <span>Terms Of Use</span>
                    </nav>

                    <article className="simple-card">
                         <h1>Terms Of Use</h1>

                         <p>
                              By using Exclusive, you agree to use the site responsibly and
                              provide accurate account, delivery, and payment information.
                         </p>

                         <h2>Orders</h2>

                         <p>
                              Orders are subject to product availability, payment confirmation,
                              and delivery coverage.
                         </p>

                         <h2>Returns</h2>

                         <p>
                              Eligible products may be returned according to the return policy
                              shown during checkout.
                         </p>
                    </article>
               </main>
     )
}
export default Terms;
