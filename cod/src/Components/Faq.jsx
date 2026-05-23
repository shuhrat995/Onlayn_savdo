import React from 'react';
import { Link } from 'react-router-dom';

export default function Faq() {
  // Savol-javoblarni massiv ichida saqlaymiz (kod toza turishi uchun)
  const faqData = [
    {
      id: 1,
      question: "How long does delivery take?",
      answer: "Most orders are delivered within 2 to 5 business days depending on location."
    },
    {
      id: 2,
      question: "Can I change my order?",
      answer: "You can contact support before the order is shipped."
    },
    {
      id: 3,
      question: "How do I return a product?",
      answer: "Open your account order history and submit a return request for eligible items."
    }
  ];

  return (
    <main className="page-main simple-page">
      {/* BREADCRUMB */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <span>FAQ</span>
      </nav>

      {/* FAQ CONTENT */}
      <article className="simple-card">
        <h1>FAQ</h1>
        
        {faqData.map((item) => (
          <React.Fragment key={item.id}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </React.Fragment>
        ))}
      </article>
    </main>
  );
}