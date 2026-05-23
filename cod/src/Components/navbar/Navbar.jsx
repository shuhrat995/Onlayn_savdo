import { NavLink, Link } from "react-router-dom";
import { FiHeart, FiSearch, FiShoppingCart, FiUser } from "react-icons/fi";

function Navbar() {
  return (
    <>
      <div className="top-bar">
        <div className="top-bar__inner">
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
            <Link to="/flash-sales">Shop Now</Link>
          </p>
          <select className="lang-select" aria-label="Language">
            <option>English</option>
            <option>Uzbek</option>
            <option>Russian</option>
          </select>
        </div>
      </div>

      <header className="site-header">
        <nav className="top-nav container" aria-label="Main navigation">
          <Link to="/" className="brand">
            Exclusive
          </Link>

          <ul className="main-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={({ isActive }) => (isActive ? "active-link" : "")}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" className={({ isActive }) => (isActive ? "active-link" : "")}>
                Sign Up
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <label className="search-bar">
              <span className="sr-only">Search products</span>
              <input type="search" placeholder="What are you looking for?" />
              <FiSearch aria-hidden="true" />
            </label>

            <Link to="/wishlist" className="icon-link" aria-label="Wishlist">
              <FiHeart />
            </Link>
            <Link to="/cart" className="icon-link" aria-label="Cart">
              <FiShoppingCart />
            </Link>

            <div className="user-dropdown">
              <button className="user-btn" type="button" aria-label="User menu">
                <FiUser />
              </button>

              <div className="drop-menu">
                <Link to="/account">Manage My Account</Link>
                <Link to="/orders">My Order</Link>
                <Link to="/cancellations">My Cancellations</Link>
                <Link to="/reviews">My Reviews</Link>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Navbar;
