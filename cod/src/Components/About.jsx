import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function About() {
  usePageTitle("About | Exclusive");

  return (
    <main className="page-main about-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>About</span>
      </nav>

      <section className="about-hero">
        <div className="about-copy">
          <h1>Our Story</h1>
          <p>
            Launched in 2015, Exclusive is South Asia&apos;s premier online shopping marketplace
            with an active presence in Bangladesh. Supported by a wide range of tailored marketing,
            data and service solutions, Exclusive has thousands of sellers and millions of customers.
          </p>
          <p>
            Exclusive has more than 1 million products to offer, growing at a very fast pace. We
            offer a diverse assortment in categories ranging from consumer electronics to fashion
            and lifestyle.
          </p>
        </div>
        <img src="/sing-in.jpg" alt="Exclusive shopping experience" />
      </section>

      <section className="stats-grid" aria-label="Company statistics">
        <article className="stat-card">
          <span><i className="bi bi-shop"></i></span>
          <strong>10.5k</strong>
          <p>Sellers active our site</p>
        </article>
        <article className="stat-card stat-card--active">
          <span><i className="bi bi-currency-dollar"></i></span>
          <strong>33k</strong>
          <p>Monthly product sale</p>
        </article>
        <article className="stat-card">
          <span><i className="bi bi-bag-heart"></i></span>
          <strong>45.5k</strong>
          <p>Customers active in our site</p>
        </article>
        <article className="stat-card">
          <span><i className="bi bi-cash-stack"></i></span>
          <strong>25k</strong>
          <p>Annual gross sale in our site</p>
        </article>
      </section>

      <section className="team-grid" aria-label="Team">
        <article className="team-card">
          <div className="team-photo"><i className="bi bi-person-standing"></i></div>
          <h2>Tom Cruise</h2>
          <p>Founder &amp; Chairman</p>
        </article>
        <article className="team-card">
          <div className="team-photo"><i className="bi bi-person-standing-dress"></i></div>
          <h2>Emma Watson</h2>
          <p>Managing Director</p>
        </article>
        <article className="team-card">
          <div className="team-photo"><i className="bi bi-person-workspace"></i></div>
          <h2>Will Smith</h2>
          <p>Product Designer</p>
        </article>
      </section>

      <section className="service-row">
        <article className="service-item">
          <span><i className="bi bi-truck"></i></span>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </article>
        <article className="service-item">
          <span><i className="bi bi-headset"></i></span>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </article>
        <article className="service-item">
          <span><i className="bi bi-shield-check"></i></span>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </article>
      </section>
    </main>
  );
}

export default About;
