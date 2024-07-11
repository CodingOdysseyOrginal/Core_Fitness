import { useState } from "react";
import "./FAQS.css";

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: "What are the membership options?",
    answer: "We offer monthly, quarterly, and annual memberships. Each membership includes access to all gym facilities and classes."
  },
  {
    question: "How do I cancel my membership?",
    answer: "You can cancel your membership by visiting the front desk or contacting our customer service team. Please note that a 30-day notice is required for cancellation."
  },
  {
    question: "Is there a joining fee?",
    answer: "NO! There is no joining fee at all."
  },
  {
    question: "What is the refund policy?",
    answer: "Refunds are available within the first 14 days of membership. After that, refunds are not available, but you can transfer your membership to another person."
  },
  {
    question: "Do you offer personal training?",
    answer: "Yes, we offer personal training sessions. You can book a session with one of our certified trainers at the front desk or though our website."
  },
];

const FAQS = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const toggleAnswer = (index: number) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-header">
        <h1>Here are some frequently asked questions to help you find what you need!</h1>
      </div>
      <div className="faq-list">
        {faqItems.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3
              className="faq-question"
              onClick={() => toggleAnswer(index)}
            >
              {faq.question}
            </h3>
            <p
              className={`faq-answer ${visibleIndex === index ? "visible" : ""}`}
            >
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQS;
