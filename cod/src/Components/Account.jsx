import { Link } from "react-router-dom";

export default function Account() {
  return (
    <main className="page-main account-page">
      <div className="account-topline">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Home</Link>
          <span>/</span>
          <span>My Account</span>
        </nav>
        <p>
          Welcome! <strong>Md Rimel</strong>
        </p>
      </div>

      <section className="account-layout">
        <aside className="account-sidebar">
          <h2>Manage My Account</h2>
          <ul className="account-menu">
            <li><Link className="account-menu__active" to="/account">My Profile</Link></li>
            <li><Link to="/account">Address Book</Link></li>
            <li><Link to="/account">My Payment Options</Link></li>
          </ul>

          <h2>My Orders</h2>
          <ul className="account-menu">
            <li><Link to="/orders">My Returns</Link></li>
            <li><Link to="/cancellations">My Cancellations</Link></li>
          </ul>

          <h2>My Wishlist</h2>
          <ul className="account-menu">
            <li><Link to="/wishlist">Saved Items</Link></li>
          </ul>
        </aside>

        <form className="profile-card profile-form">
          <h1>Edit Your Profile</h1>

          <div className="form-grid">
            <label className="form-group">
              <span>First Name</span>
              <input id="first-name" type="text" defaultValue="Md" />
            </label>

            <label className="form-group">
              <span>Last Name</span>
              <input id="last-name" type="text" defaultValue="Rimel" />
            </label>

            <label className="form-group">
              <span>Email</span>
              <input id="email" type="email" defaultValue="rimel1111@gmail.com" />
            </label>

            <label className="form-group">
              <span>Address</span>
              <input id="address" type="text" defaultValue="Kingston, 5236, United State" />
            </label>
          </div>

          <div className="pass-table">
            <h2>Password Changes</h2>
            <label className="form-group">
              <input type="password" placeholder="Current Password" />
            </label>
            <label className="form-group">
              <input type="password" placeholder="New Password" />
            </label>
            <label className="form-group">
              <input type="password" placeholder="Confirm New Password" />
            </label>
          </div>

          <div className="form-actions">
            <button className="text-btn cancel-btn" type="button">
              Cancel
            </button>
            <button className="view-all-btn save-btn" type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
