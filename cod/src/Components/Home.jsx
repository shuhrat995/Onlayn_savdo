
import { Link } from 'react-router-dom';
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronRight,
  FiHeadphones,
  FiTruck,
} from "react-icons/fi";
import { FaApple, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main>
      {/* HERO SECTION */}
      <section className="hero-section">
        <div className="container hero-layout">
          <nav className="sidebar-menu" aria-label="Product categories">
            <ul>
              <li className="has-submenu">
                <Link to="/flash-sales">Woman&apos;s Fashion <FiChevronRight aria-hidden="true" /></Link>
                <ul className="submenu">
                  <li><Link to="/flash-sales">Dresses</Link></li>
                  <li><Link to="/flash-sales">Tops & Blouses</Link></li>
                  <li><Link to="/flash-sales">Pants & Jeans</Link></li>
                  <li><Link to="/flash-sales">Shoes</Link></li>
                </ul>
              </li>
              <li className="has-submenu">
                <Link to="/flash-sales">Men&apos;s Fashion <FiChevronRight aria-hidden="true" /></Link>
                <ul className="submenu">
                  <li><Link to="/flash-sales">T-Shirts</Link></li>
                  <li><Link to="/flash-sales">Shirts</Link></li>
                  <li><Link to="/flash-sales">Hoodies & Sweatshirts</Link></li>
                  <li><Link to="/flash-sales">Sweaters</Link></li>
                </ul>
              </li>
              <li><Link to="/flash-sales">Electronics</Link></li>
              <li><Link to="/flash-sales">Home & Lifestyle</Link></li>
              <li><Link to="/flash-sales">Medicine</Link></li>
              <li><Link to="/flash-sales">Sports & Outdoor</Link></li>
              <li><Link to="/flash-sales">Baby&apos;s & Toys</Link></li>
              <li><Link to="/flash-sales">Groceries & Pets</Link></li>
              <li><Link to="/flash-sales">Health & Beauty</Link></li>
            </ul>
          </nav>

          <div className="hero-banner">
            <div className="promo-content">
              <div className="product-header">
                <FaApple className="apple-logo" aria-hidden="true" />
                <span className="series-name">iPhone 14 Series</span>
              </div>

              <h1>Up to 10%<br />off Voucher</h1>

              <Link to="/flash-sales" className="shop-btn">
                Shop Now <FiArrowRight aria-hidden="true" />
              </Link>
            </div>

            <div className="carousel-inner">
              <img src="/hero/iphone-14-pro.jpg" alt="iPhone 14 Pro" className="carousel-item active" />
              <img src="/hero/iphone-screen.png" alt="iPhone screen" className="carousel-item" />
              <img src="/hero/iphone-colors.png" alt="iPhone color lineup" className="carousel-item" />
              <img src="/hero/iphone-hand.png" alt="iPhone in hand" className="carousel-item" />
              <img src="/hero/iphone-models.jpg" alt="iPhone models" className="carousel-item" />
            </div>

            <div className="carousel-indicators" aria-label="Hero carousel controls">
              <button className="indicator-dot active" data-slide-to="0" aria-label="Slide 1"></button>
              <button className="indicator-dot" data-slide-to="1" aria-label="Slide 2"></button>
              <button className="indicator-dot" data-slide-to="2" aria-label="Slide 3"></button>
              <button className="indicator-dot" data-slide-to="3" aria-label="Slide 4"></button>
              <button className="indicator-dot" data-slide-to="4" aria-label="Slide 5"></button>
            </div>
          </div>
        </div>
      </section>

      {/* FLASH SALES */}
      <section className="flash-sales section-block">
        <div className="section-header flash-sales__header">
          <div>
            <div className="section-label">
              <span className="label-icon"></span>
              <span className="label-text">Today's</span>
            </div>

            <div className="flash-sales__title-section">
              <h2 className="section-title">Flash Sales</h2>

              <div className="flash-sales__timer">
                <div className="timer-unit">
                  <span className="timer-label">Days</span>
                  <span className="timer-value" id="days">03</span>
                </div>
                <span className="timer-separator">:</span>
                <div className="timer-unit">
                  <span className="timer-label">Hours</span>
                  <span className="timer-value" id="hours">23</span>
                </div>
                <span className="timer-separator">:</span>
                <div className="timer-unit">
                  <span className="timer-label">Minutes</span>
                  <span className="timer-value" id="minutes">19</span>
                </div>
                <span className="timer-separator">:</span>
                <div className="timer-unit">
                  <span className="timer-label">Seconds</span>
                  <span className="timer-value" id="seconds">56</span>
                </div>
              </div>
            </div>
          </div>

          <div className="slider-controls">
            <button className="control-btn prev-btn" aria-label="Previous products"><FiArrowLeft aria-hidden="true" /></button>
            <button className="control-btn next-btn" aria-label="Next products"><FiArrowRight aria-hidden="true" /></button>
          </div>
        </div>

        <div className="products-scroll" id="productsScroll"></div>

        <div className="section-footer">
          <button className="view-all-btn">View All Products</button>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="categories-section section-block section-divider">
        <div className="section-header">
          <div>
            <div className="section-label">
              <span className="label-icon"></span>
              <span className="label-text">Categories</span>
            </div>
            <h2 className="section-title">Browse By Category</h2>
          </div>

          <div className="slider-controls">
            <button className="control-btn cat-prev-btn" aria-label="Previous categories"><FiArrowLeft aria-hidden="true" /></button>
            <button className="control-btn cat-next-btn" aria-label="Next categories"><FiArrowRight aria-hidden="true" /></button>
          </div>
        </div>

        <div className="categories-scroll" id="categoriesScroll"></div>
      </section>

      {/* BEST SELLING */}
      <section className="best-selling-section section-block section-divider">
        <div className="section-header">
          <div>
            <div className="section-label">
              <span className="label-icon"></span>
              <span className="label-text">This Month</span>
            </div>
            <h2 className="section-title">Best Selling Products</h2>
          </div>

          <button className="view-all-btn view-all-btn--compact">View All</button>
        </div>

        <div className="best-selling-grid" id="bestSellingGrid"></div>
      </section>

      {/* PROMO BANNER */}
      <section className="promo-banner">
        <div className="promo-left">
          <span className="promo-label">Categories</span>
          <h2>Enhance Your<br />Music Experience</h2>

          <div className="promo-timer">
            <div className="promo-timer-unit">
              <span className="promo-timer-value" id="promoDays">05</span>
              <span className="promo-timer-label">Days</span>
            </div>
            <div className="promo-timer-unit">
              <span className="promo-timer-value" id="promoHours">23</span>
              <span className="promo-timer-label">Hours</span>
            </div>
            <div className="promo-timer-unit">
              <span className="promo-timer-value" id="promoMinutes">59</span>
              <span className="promo-timer-label">Minutes</span>
            </div>
            <div className="promo-timer-unit">
              <span className="promo-timer-value" id="promoSeconds">35</span>
              <span className="promo-timer-label">Seconds</span>
            </div>
          </div>

          <button className="buy-now-btn">Buy Now!</button>
        </div>

        <div className="promo-right">
          <img src="/products/jbl-speaker.png" alt="JBL speaker" className="promo-image" />
        </div>
      </section>

      {/* EXPLORE PRODUCTS */}
      <section className="explore-section section-block">
        <div className="section-header">
          <div>
            <div className="section-label">
              <span className="label-icon"></span>
              <span className="label-text">Our Products</span>
            </div>
            <h2 className="section-title">Explore Our Products</h2>
          </div>

          <div className="slider-controls">
            <button className="control-btn explore-prev-btn" aria-label="Previous products"><FiArrowLeft aria-hidden="true" /></button>
            <button className="control-btn explore-next-btn" aria-label="Next products"><FiArrowRight aria-hidden="true" /></button>
          </div>
        </div>

        <div className="explore-grid" id="exploreGrid"></div>

        <div className="section-footer">
          <button className="view-all-btn">View All Products</button>
        </div>
      </section>

      {/* NEW ARRIVAL */}
      <section className="new-arrival-section section-block">
        <div className="section-label">
          <span className="label-icon"></span>
          <span className="label-text">Featured</span>
        </div>
        <h2 className="section-title">New Arrival</h2>

        <div className="arrival-grid">
          <article className="arrival-card arrival-card--large">
            <img src="/products/gp11-gamepad.png" alt="Gaming controller" />
            <div className="arrival-copy">
              <h3>PlayStation 5</h3>
              <p>Black and white version of the PS5 coming out on sale.</p>
              <Link to="/flash-sales">Shop Now</Link>
            </div>
          </article>

          <article className="arrival-card arrival-card--wide">
            <img src="/products/satin-jacket.png" alt="Women&apos;s jacket" />
            <div className="arrival-copy">
              <h3>Women's Collections</h3>
              <p>Featured woman collections that give you another vibe.</p>
              <Link to="/flash-sales">Shop Now</Link>
            </div>
          </article>

          <article className="arrival-card">
            <img src="/products/jbl-speaker.png" alt="Speakers" />
            <div className="arrival-copy">
              <h3>Speakers</h3>
              <p>Amazon wireless speakers.</p>
              <Link to="/flash-sales">Shop Now</Link>
            </div>
          </article>

          <article className="arrival-card">
            <img src="/products/curology-set.png" alt="Perfume set" />
            <div className="arrival-copy">
              <h3>Perfume</h3>
              <p>GUCCI INTENSE OUD EDP.</p>
              <Link to="/flash-sales">Shop Now</Link>
            </div>
          </article>
        </div>
      </section>

      {/* SERVICES */}
      <section className="service-row">
        <article className="service-item">
          <span><FiTruck aria-hidden="true" /></span>
          <h3>FREE AND FAST DELIVERY</h3>
          <p>Free delivery for all orders over $140</p>
        </article>
        <article className="service-item">
          <span><FiHeadphones aria-hidden="true" /></span>
          <h3>24/7 CUSTOMER SERVICE</h3>
          <p>Friendly 24/7 customer support</p>
        </article>
        <article className="service-item">
          <span><FaShieldAlt aria-hidden="true" /></span>
          <h3>MONEY BACK GUARANTEE</h3>
          <p>We return money within 30 days</p>
        </article>
      </section>
    </main>
  );
}
