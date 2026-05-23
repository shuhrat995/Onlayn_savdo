import { Link } from "react-router-dom";
import usePageTitle from "../hooks/usePageTitle";

function Cart() {
  usePageTitle("Cart | Exclusive");
  return (
    <main className="page-main cart-page">
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Cart</span>
      </nav>

      <section className="cart-table" aria-label="Shopping cart">
        <div className="cart-row cart-row--head">
          <span>Product</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Subtotal</span>
        </div>
        <div className="cart-row">
          <div className="cart-product">
            <img src="/products/lcd-monitor-cart.png" alt="LCD Monitor" />
            <span>LCD Monitor</span>
          </div>
          <span>$650</span>
          <input className="quantity-input" type="number" min="1" defaultValue="1" aria-label="LCD Monitor quantity" />
          <span>$650</span>
        </div>
        <div className="cart-row">
          <div className="cart-product">
            <img src="/products/h1-gamepad-cart.png" alt="H1 Gamepad" />
            <span>H1 Gamepad</span>
          </div>
          <span>$550</span>
          <input className="quantity-input" type="number" min="1" defaultValue="2" aria-label="H1 Gamepad quantity" />
          <span>$1100</span>
        </div>
      </section>

      <div className="cart-actions">
        <Link to="/flash-sales" className="outline-btn">Return To Shop</Link>
        <button className="outline-btn" type="button">Update Cart</button>
      </div>

      <section className="cart-bottom">
        <form className="coupon-form">
          <input type="text" placeholder="Coupon Code" aria-label="Coupon code" />
          <button className="view-all-btn" type="submit">Apply Coupon</button>
        </form>

        <aside className="cart-total">
          <h2>Cart Total</h2>
          <p><span>Subtotal:</span><strong>$1750</strong></p>
          <p><span>Shipping:</span><strong>Free</strong></p>
          <p><span>Total:</span><strong>$1750</strong></p>
          <Link className="view-all-btn checkout-link" to="/checkout">Proceed to checkout</Link>
        </aside>
      </section>
    </main>
  );
}

export default Cart;
