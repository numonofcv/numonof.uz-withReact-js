import React, { useState } from "react";
import "./FAQ.css";

const faqData = [
{
id: "q1",
question: "What programming languages do you use?",
answer: `I mainly work with JavaScript, HTML, and CSS. I also have experience with TypeScript, React, Node.js, and
Python.`,
},
{
id: "q2",
question: "How do you approach UI/UX design?",
answer: `My approach to UI/UX design focuses on user-centricity, clean aesthetics, and intuitive interactions. I prioritize
accessibility and responsiveness to ensure a seamless experience across all devices.`,
},
{
id: "q3",
question: "Can you work with modern frameworks?",
answer: `Yes, I am proficient in modern front-end frameworks like React and Next.js, and familiar with back-end frameworks such
as Express.js and Django.`,
},
];

export default function FAQ() {
const [activeIndex, setActiveIndex] = useState(null);

const toggleAccordion = (index) => {
setActiveIndex(index === activeIndex ? null : index);
};

return (
<section className="faq-section">
  <div className="container accordion-container">
    <h2 className='title'>Frequently Asked Questions</h2>
    {faqData.map((item, index) => (
    <div key={item.id} className="accordion-item-wrapper">
      <button className="accordion-button" onClick={()=> toggleAccordion(index)}
        >
        {item.question}
        <span className="accordion-arrow">
          {activeIndex === index ? "▲" : "▼"}
        </span>
      </button>
      {activeIndex === index && (
      <div className="accordion-answer-box">
        <p className="accordion-answer">{item.answer}</p>
      </div>
      )}
    </div>
    ))}
  </div>
</section>
);
};