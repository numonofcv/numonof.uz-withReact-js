import React, { useState } from 'react';
import './FAQSections.scss';
import '../../index.scss';

const faqData = [
 {
      question: 'What services do you offer?',
      answer: 'We offer a comprehensive suite of services including web development, mobile app development, UI/UX design, and digital marketing strategies tailored to your business needs.'
    },
    {
      question: 'How can I contact you?',
      answer: 'You can email me at <a href="mailto:alexa@example.com" class="text-blue-600 hover:underline">alexa@example.com</a> or call me at (123) 455-7690.'
    },
    {
      question: 'What is your development process?',
      answer: 'Our development process typically involves discovery, planning, design, development, testing, deployment, and ongoing support. We prioritize agile methodologies for flexibility and efficiency.'
    },
    {
      question: 'Do you provide ongoing support?',
      answer: 'Yes, we provide comprehensive ongoing support and maintenance services to ensure your applications remain up-to-date, secure, and perform optimally.'
    },
  ];

const FAQSections = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
      <section className="faq-section">
        <div className="container faq__section-container">
      {faqData.map((item, index) => (
        <div
          className="faq-item"
          key={index}
          onClick={() => toggleAnswer(index)}
        >
          <div className="faq-question">
            {item.question}
            <span>{activeIndex === index ? '−' : '›'}</span>
          </div>
          {activeIndex === index && item.answer && (
            <div className="faq-answer">{item.answer}</div>
          )}
        </div>
      ))}
        </div>
    </section>
  );
};

export default FAQSections;
