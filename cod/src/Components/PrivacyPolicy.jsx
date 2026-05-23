import { Link } from "react-router-dom";

function PrivacyPolicy() {
     return (
               <main className="page-main simple-page">
                    <nav className="breadcrumb" aria-label="Breadcrumb">
                         <Link to="/">Home</Link>
                         <span>/</span>
                         <span>Privacy Policy</span>
                    </nav>

                    <article className="simple-card">
                         <h1>Privacy Policy</h1>

                         <p>
                              Exclusive uses customer information to process orders, support
                              accounts, and improve the shopping experience.
                         </p>

                         <h2>Information We Collect</h2>

                         <p>
                              We may collect contact details, delivery addresses, order
                              information, and account preferences entered by the customer.
                         </p>

                         <h2>How We Use It</h2>

                         <p>
                              Information is used for checkout, delivery, account support, fraud
                              prevention, and product recommendations.
                         </p>
                    </article>
               </main>
     )
}
export default PrivacyPolicy;
