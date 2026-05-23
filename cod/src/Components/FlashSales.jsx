
import { Link } from 'react-router-dom';

export default function FlashSales() {
  return (
    <main className="page-main">
      {/* BREADCRUMB */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Flash Sales</span>
      </nav>

      {/* FLASH SALES SECTION */}
      <section className="flash-sales section-block catalog-page">
        <div className="section-header flash-sales__header">
          <div>
            <div className="section-label">
              <span className="label-icon"></span>
              <span className="label-text">Today's</span>
            </div>

            <div className="flash-sales__title-section">
              <h1 className="section-title">Flash Sales</h1>
              
              {/* TIMER */}
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

          {/* CONTROLS */}
          <div className="slider-controls">
            <button className="control-btn prev-btn" aria-label="Previous products">
              <i className="bi bi-arrow-left"></i>
            </button>
            <button className="control-btn next-btn" aria-label="Next products">
              <i className="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* PRODUCTS SCROLL CONTAINER */}
        <div className="products-scroll" id="productsScroll">
          {/* Mahsulotlar ro'yxati JavaScript yoki API orqali shu yerga yuklanadi */}
        </div>
      </section>
    </main>
  );
}
