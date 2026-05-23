import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Contact() {
  // Form ma'lumotlarini saqlash uchun state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // Inputlar o'zgarganda stateni yangilash funksiyasi
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Form jo'natilganda ishlaydigan funksiya
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Yuborilgan ma\'lumotlar:', formData);
    // Bu yerda backend API ga so'rov yuborish kodini yozishingiz mumkin
    alert('Xabaringiz muvaffaqiyatli yuborildi!');
    setFormData({ name: '', email: '', phone: '', message: '' }); // Formani tozalash
  };

  return (
    <main className="page-main">
      {/* BREADCRUMB */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>Contact</span>
      </nav>

      {/* CONTACT LAYOUT */}
      <section className="contact-layout">
        {/* ASIDE PANEL */}
        <aside className="contact-panel">
          <div className="contact-method">
            <div className="contact-method__title">
              <span className="contact-icon">
                <i className="bi bi-telephone"></i>
              </span>
              <h2>Call To Us</h2>
            </div>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>

          <div className="contact-divider"></div>

          <div className="contact-method">
            <div className="contact-method__title">
              <span className="contact-icon">
                <i className="bi bi-envelope"></i>
              </span>
              <h2>Write To Us</h2>
            </div>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </aside>

        {/* CONTACT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__row">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email*"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button className="view-all-btn contact-submit" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}
