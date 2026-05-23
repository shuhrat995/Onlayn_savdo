import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Checkout() {
  usePageTitle("Checkout | Exclusive");
  return (
    <main className="page-main checkout-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/account">Account</Link>
        <span>/</span>
        <Link to="/cart">Cart</Link>
        <span>/</span>
        <span>Checkout</span>
      </nav>

      <section className="checkout-layout">
        <form className="billing-card">
          <h1>Billing Details</h1>
          <label className="form-group">
            <span>First Name <b>*</b></span>
            <input type="text" required />
          </label>
          <label className="form-group">
            <span>Company Name</span>
            <input type="text" />
          </label>
          <label className="form-group">
            <span>Street Address <b>*</b></span>
            <input type="text" required />
          </label>
          <label className="form-group">
            <span>Apartment, floor, etc. (optional)</span>
            <input type="text" />
          </label>
          <label className="form-group">
            <span>Town/City <b>*</b></span>
            <input type="text" required />
          </label>
          <label className="form-group">
            <span>Phone Number <b>*</b></span>
            <input type="tel" required />
          </label>
          <label className="form-group">
            <span>Email Address <b>*</b></span>
            <input type="email" required />
          </label>
          <label className="save-info">
            <input type="checkbox" defaultChecked />
            <span>Save this information for faster check-out next time</span>
          </label>
        </form>

        <aside className="checkout-summary">
          <div className="summary-product">
            <img src="/products/lcd-monitor-cart.png" alt="LCD Monitor" />
            <span>LCD Monitor</span>
            <strong>$650</strong>
          </div>
          <div className="summary-product">
            <img src="/products/h1-gamepad-cart.png" alt="H1 Gamepad" />
            <span>H1 Gamepad</span>
            <strong>$1100</strong>
          </div>

          <div className="summary-line"><span>Subtotal:</span><strong>$1750</strong></div>
          <div className="summary-line"><span>Shipping:</span><strong>Free</strong></div>
          <div className="summary-line summary-line--total"><span>Total:</span><strong>$1750</strong></div>

          <label className="radio-row">
            <input type="radio" name="payment" defaultChecked />
            <span>Bank</span>
            <span className="payment-icons"><i className="bi bi-credit-card"></i><i className="bi bi-paypal"></i></span>
          </label>
          <label className="radio-row">
            <input type="radio" name="payment" />
            <span>Cash on delivery</span>
          </label>

          <form className="coupon-form coupon-form--checkout">
            <input type="text" placeholder="Coupon Code" aria-label="Coupon code" />
            <button className="view-all-btn" type="submit">Apply Coupon</button>
          </form>

          <button className="view-all-btn place-order" type="button">Place Order</button>
        </aside>
      </section>
    </main>
  );
}

export default Checkout;
