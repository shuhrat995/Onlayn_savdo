import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FiEye, FiTrash } from "react-icons/fi";

const wishlistItems = [
  {
    name: "Gucci duffle bag",
    price: 960,
    originalPrice: 1160,
    image: "/products/gucci-duffle-bag.png",
    discount: "-35%",
  },
  {
    name: "RGB liquid CPU Cooler",
    price: 1960,
    image: "/products/rgb-cpu-cooler.png",
  },
  {
    name: "GP11 Shooter USB Gamepad",
    price: 550,
    image: "/products/gp11-gamepad.png",
  },
  {
    name: "Quilted Satin Jacket",
    price: 750,
    image: "/products/satin-jacket.png",
  },
];

const suggestions = [
  {
    name: "ASUS FHD Gaming Laptop",
    price: 960,
    originalPrice: 1160,
    image: "/products/asus-laptop.png",
    discount: "-35%",
  },
  {
    name: "IPS LCD Gaming Monitor",
    price: 1160,
    image: "/products/ips-lcd-monitor.png",
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 560,
    image: "/products/havit-gamepad.png",
    badge: "NEW",
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 200,
    image: "/products/ak-900-keyboard.png",
  },
];

function ProductRating() {
  return (
    <div className="product-rating">
      <div className="stars">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStarHalfAlt />
      </div>
      <span className="review-count">(65)</span>
    </div>
  );
}

function Price({ price, originalPrice }) {
  return (
    <div className="product-price">
      <span className="price-current">${price}</span>
      {originalPrice ? <span className="price-original">${originalPrice}</span> : null}
    </div>
  );
}

export default function Wishlist() {
  return (
    <main className="page-main wishlist-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Wishlist</span>
      </nav>

      <section className="wishlist-block">
        <div className="wishlist-head">
          <h1>Wishlist ({wishlistItems.length})</h1>
          <Link className="outline-btn" to="/cart">
            Move All To Bag
          </Link>
        </div>

        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <article className="product-card" key={item.name}>
              <div className="product-image-wrapper">
                {item.discount ? <span className="discount-badge">{item.discount}</span> : null}
                <img src={item.image} alt={item.name} className="product-image" />
                <button className="action-btn" type="button" aria-label={`Remove ${item.name}`}>
                  <FiTrash />
                </button>
                <button className="add-to-cart-btn" type="button">
                  Add To Cart
                </button>
              </div>

              <div className="product-info">
                <h3 className="product-name">
                  <Link to="/product-detail">{item.name}</Link>
                </h3>
                <Price price={item.price} originalPrice={item.originalPrice} />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="wishlist-block wishlist-block--spaced">
        <div className="wishlist-head">
          <div className="section-label wishlist-label">
            <span className="label-icon"></span>
            <span className="label-text">Just For You</span>
          </div>
          <Link className="outline-btn" to="/flash-sales">
            See All
          </Link>
        </div>

        <div className="wishlist-grid">
          {suggestions.map((item) => (
            <article className="product-card" key={item.name}>
              <div className="product-image-wrapper">
                {item.discount ? <span className="discount-badge">{item.discount}</span> : null}
                {item.badge ? <span className="new-badge">{item.badge}</span> : null}
                <img src={item.image} alt={item.name} className="product-image" />
                <Link className="action-btn" to="/product-detail" aria-label={`Quick view ${item.name}`}>
                  <FiEye />
                </Link>
                <button className="add-to-cart-btn" type="button">
                  Add To Cart
                </button>
              </div>

              <div className="product-info">
                <h3 className="product-name">
                  <Link to="/product-detail">{item.name}</Link>
                </h3>
                <Price price={item.price} originalPrice={item.originalPrice} />
                <ProductRating />
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
