import { Link } from "react-router-dom";

export default function ProductDetail() {
  return (
      <main className="page-main detail-page">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link to="/">Account</Link>
          <span>/</span>
          <Link to="/flash-sales">Gaming</Link>
          <span>/</span>
          <span>Havic HV-G92 Gamepad</span>
        </nav>

        <section className="detail-layout">
          <div className="detail-gallery">
            <div
              className="detail-thumbs"
              role="list"
              aria-label="Product images"
            >
              <button
                className="thumb-btn is-active"
                type="button"
                aria-label="View image 1"
              >
                <img
                  src="/products/havit-gamepad.png"
                  alt="Gamepad front"
                />
              </button>

              <button
                className="thumb-btn"
                type="button"
                aria-label="View image 2"
              >
                <img
                  src="/products/gp11-gamepad.png"
                  alt="Gamepad angle"
                />
              </button>

              <button
                className="thumb-btn"
                type="button"
                aria-label="View image 3"
              >
                <img
                  src="/products/h1-gamepad-cart.png"
                  alt="Gamepad black"
                />
              </button>

              <button
                className="thumb-btn"
                type="button"
                aria-label="View image 4"
              >
                <img
                  src="/products/havit-gamepad.png"
                  alt="Gamepad controller"
                />
              </button>
            </div>

            <div className="detail-main-image">
              <img
                id="mainProductImage"
                src="/products/havit-gamepad.png"
                alt="Havic HV-G92 Gamepad"
              />
            </div>
          </div>

          <div className="detail-info">
            <h1>Havic HV G-92 Gamepad</h1>

            <div className="detail-rating">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>

              <span className="review-count">(150 Reviews)</span>
              <span className="detail-stock">In Stock</span>
            </div>

            <p className="detail-price">$192.00</p>

            <p className="detail-copy">
              PlayStation 5 Controller Skin High quality vinyl with air channel
              adhesive for easy bubble free install and mess free removal
              Pressure sensitive.
            </p>

            <div className="detail-options">
              <div className="option-row">
                <span>Colours:</span>

                <div className="color-dots">
                  <button
                    className="color-dot is-selected"
                    type="button"
                    style={{ background: "#a0bce0" }}
                    aria-label="Blue color"
                  ></button>

                  <button
                    className="color-dot"
                    type="button"
                    style={{ background: "#db4444" }}
                    aria-label="Red color"
                  ></button>
                </div>
              </div>

              <div className="option-row">
                <span>Size:</span>

                <div className="size-row">
                  <button type="button" className="size-btn">
                    XS
                  </button>

                  <button type="button" className="size-btn">
                    S
                  </button>

                  <button type="button" className="size-btn is-active">
                    M
                  </button>

                  <button type="button" className="size-btn">
                    L
                  </button>

                  <button type="button" className="size-btn">
                    XL
                  </button>
                </div>
              </div>
            </div>

            <div className="detail-actions">
              <div className="qty-control">
                <button
                  id="decreaseQty"
                  type="button"
                  aria-label="Decrease quantity"
                >
                  -
                </button>

                <span id="qtyValue">2</span>

                <button
                  id="increaseQty"
                  type="button"
                  aria-label="Increase quantity"
                >
                  +
                </button>
              </div>

              <Link
                className="view-all-btn buy-now-btn-detail"
                to="/checkout"
              >
                Buy Now
              </Link>

              <button
                className="outline-btn icon-like-btn"
                type="button"
                aria-label="Add to wishlist"
              >
                <i className="bi bi-heart"></i>
              </button>
            </div>

            <div className="delivery-box">
              <div className="delivery-row">
                <i className="bi bi-truck"></i>

                <div>
                  <strong>Free Delivery</strong>
                  <p>Enter your postal code for Delivery Availability</p>
                </div>
              </div>

              <div className="delivery-row">
                <i className="bi bi-arrow-repeat"></i>

                <div>
                  <strong>Return Delivery</strong>
                  <p>Free 30 Days Delivery Returns.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
