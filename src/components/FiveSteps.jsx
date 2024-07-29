import React from 'react';
import './FiveSteps.css';
import step1 from './consultation.png';
import first from './icons8-1-key-50.png';
import step2 from './sitevisit.png';
import second from './icons8-2-key-50.png';
import third from './icons8-3-key-50.png';
import fourth from './icons8-4-key-50.png';
import fifth from './icons8-5-key-50.png';
import step3 from './design.png';
import step4 from './execution.png';
import step5 from './handover.png';

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
          <img src={step1} alt="Step 1" className="step-image1" />
          <h3><img src={first} alt="first" className="first"/>Consultation</h3>
          <p>Discuss your vision, goals, and requirements for the project.</p>
        </div>
        <div className="step">
          <img src={step2} alt="Step 2" className="step-image2" />
          <h3><img src={second} alt="second" className="second"/>Site Visit</h3>
          <p>Concuct a detailed evaluation of spaces and specific needs.</p></div>
        <div className="step">
          <img src={step3} alt="Step 3" className="step-image3"/>
          <h3><img src={third} alt="third" className="third"/>Design</h3>
          <p>Create and refine designs tailored ro your preferences.</p></div>
        <div className="step">
          <img src={step4} alt="Step 4" className="step-image4"/>
          <h3><img src={fourth} alt="fourth" className="fourth"/>Execution</h3>
          <p>Implement approved design with attention to detail.</p></div>
        <div className="step">
          <img src={step5} alt="Step 5" className="step-image5"/>
          <h3><img src={fifth} alt="fifth" className="fifth"/>Handover</h3>
          <p>Ensuring review and satisfaction with every detail.</p></div>
      </div>
      </div>
  );
};

export default FiveSteps;
