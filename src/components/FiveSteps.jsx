import React from 'react';
import './FiveSteps.css';

const FiveSteps = () => {
  return (
    <div className="five-steps">
      <div className="header">
        <h2>Five Steps to Your Perfect Space!</h2>
        <button className="right-align-button">START MY JOURNEY</button>
      </div>
      <p>"At Le Foyer Decor, we've streamlined the journey to your dream space with our efficient and client-centric approach. Our five-step process
begins with a personalized consultation where we delve into your vision and needs. From there, our talented designers craft bespoke designs
that resonate with your style and preferences. With your approval, we seamlessly transition to the execution phase, where our skilled team
brings the vision to life with precision and care. Finally, we ensure every detail is perfected before handing over your transformed space,
exceeding your expectations every step of the way. Experience the seamless transformation of your home or business with Le Foyer Decor—
where excellence meets innovation in interior design."
</p><div className="steps">
        <div className="step">
          <img src="path-to-your-image" alt="Step 1" />
          <h3>Consultation</h3>
          <p>Discuss your vision, goals, and requirements for the project.</p>
        </div>
        <div className="step">
          <img src="path-to-your-image" alt="Step 2" />
          <h3>Site Visit</h3>
          <p>Concuct a detailed evaluation of spaces and specific needs.</p></div>
        <div className="step">
          <img src="path-to-your-image" alt="Step 3" />
          <h3>Design</h3>
          <p>Create and refine designs tailored ro your preferences.</p></div>
        <div className="step">
          <img src="path-to-your-image" alt="Step 4" />
          <h3>Execution</h3>
          <p>Implement approved design with attention to detail.</p></div>
        <div className="step">
          <img src="path-to-your-image" alt="Step 5" />
          <h3>Handover</h3>
          <p>Ensuring review and satisfaction with every detail.</p></div>
      </div>
      </div>
  );
};

export default FiveSteps;
