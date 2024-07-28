import React from 'react';
import './RightContact_end.css';
function RightContact_end() {
  const questions = [
    "Why do I need an interior designer?",
    "Can I customize the design as per my preferences?",
    "Can I get my furniture custom-made via your service?",
    "What is the process of working with an interior designer?",
    "How much does hiring an interior designer cost?",
    "How long does the interior design process take?",
    "Can I see samples of your previous work?",
    "Do you handle all aspects of the design, including furniture and decor?",
    "Will I be involved in the decision-making process?",
    "What if I don't like the final design?",
    "Can you work within my budget?",
    "Do you offer eco-friendly design options?",
    "What styles do you specialize in?",
    "Can you help with renovations as well as new builds?",
    "How do you handle project management?",
    "What if I want to make changes after the design is finalized?",
    "Do you provide 3D renderings or visualizations?",
    "How do I get started with your service?"
  ];

  return (
    <div className="accordion accordion-flush box" id="accordionFlushExample">
      {questions.map((question, index) => (
        <div className="accordion-item" key={index}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed question"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#flush-collapse${index}`}
              aria-expanded="false"
              aria-controls={`flush-collapse${index}`}
            >
              {index + 1}) {question}
            </button>
          </h2>
          <div
            id={`flush-collapse${index}`}
            className="accordion-collapse collapse "
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate
              the <code>.accordion-flush</code> class. This is the {index + 1} item's
              accordion body. This content can be replaced with actual answers to the questions.
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RightContact_end;
