import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h3>Exclusive</h3>

          <strong>Subscribe</strong>

          <p>Get 10% off your first order</p>

          <label className="footer-subscribe">
            <span className="sr-only">Email address</span>

            <input
              type="email"
              placeholder="Enter your email"
            />

            <button aria-label="Subscribe">
              <i className="bi bi-send"></i>
            </button>
          </label>
        </div>

        <div className="footer-section">
          <h3>Support</h3>

          <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>

          <p>exclusive@gmail.com</p>

          <p>+88015-88888-9999</p>
        </div>

        <div className="footer-section">
          <h3>Account</h3>

          <ul>
            <li>
              <Link to="/account">My Account</Link>
            </li>

            <li>
              <Link to="/login">Login</Link> /{" "}
              <Link to="/signup">Register</Link>
            </li>

            <li>
              <Link to="/cart">Cart</Link>
            </li>

            <li>
              <Link to="/wishlist">Wishlist</Link>
            </li>

            <li>
              <Link to="/flash-sales">Shop</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Quick Link</h3>

          <ul>
            <li>
              <Link to="/privacy-policy">
                Privacy Policy
              </Link>
            </li>

            <li>
              <Link to="/terms">
                Terms Of Use
              </Link>
            </li>

            <li>
              <Link to="/faq">FAQ</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Download App</h3>

          <p className="app-note">
            Save $3 with App New User Only
          </p>

          <div className="app-download">
            <img
              src="/error.jpg"
              alt="QR code"
              className="qr"
            />

            <div className="store-links">
              <img
                src="/google-play.png"
                alt="Google Play"
              />

              <img
                src="/app-store.png"
                alt="App Store"
              />
            </div>
          </div>

          <div className="social-icons">
            <a href="#" aria-label="Facebook">
              <i className="bi bi-facebook"></i>
            </a>

            <a href="#" aria-label="Twitter">
              <i className="bi bi-twitter-x"></i>
            </a>

            <a href="#" aria-label="Instagram">
              <i className="bi bi-instagram"></i>
            </a>

            <a href="#" aria-label="LinkedIn">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="copyright">
        Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
}

export default Footer;
