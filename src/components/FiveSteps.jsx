import React, { useEffect, useRef } from 'react';
import './FiveSteps.css';
import step1 from '../assets/consultation.png';
import first from '../assets/icons8-1-key-50.png';
import step2 from '../assets/sitevisit.png';
import second from '../assets/icons8-2-key-50.png';
import third from '../assets/icons8-3-key-50.png';
import fourth from '../assets/icons8-4-key-50.png';
import fifth from '../assets/icons8-5-key-50.png';
import step3 from '../assets/design.png';
import step4 from '../assets/execution.png';
import step5 from '../assets/handover.png';

const FiveSteps = () => {
    const stepsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    } else {
                        entry.target.classList.remove('animate');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentSteps = stepsRef.current;
        currentSteps.forEach((step) => {
            if (step) {
                observer.observe(step);
            }
        });

        return () => {
            if (currentSteps) {
                currentSteps.forEach((step) => {
                    if (step) {
                        observer.unobserve(step);
                    }
                });
            }
        };
    }, []);

    return (
        <div className="five-steps">
            <div className="header">
                <h2>Five Steps to Your Perfect Space!</h2>
                <button className="right-align-button">START MY JOURNEY</button>
            </div>
            <p className="para">
                "At Le Foyer Decor, we've streamlined the journey to your dream space with our efficient and client-centric approach. Our five-step process
                begins with a personalized consultation where we delve into your vision and needs. From there, our talented designers craft bespoke designs
                that resonate with your style and preferences. With your approval, we seamlessly transition to the execution phase, where our skilled team
                brings the vision to life with precision and care. Finally, we ensure every detail is perfected before handing over your transformed space,
                exceeding your expectations every step of the way. Experience the seamless transformation of your home or business with Le Foyer Decor—
                where excellence meets innovation in interior design."
            </p>
            <div className="steps">
                <div className="step s1" ref={(el) => (stepsRef.current[0] = el)}>
                    <img src={step1} alt="Step 1" className="step-image1" />
                    <h3><img src={first} alt="first" className="first" />Consultation</h3>
                    <p>Discuss your vision, goals, and requirements for the project.</p>
                </div>
                <div className="step s2" ref={(el) => (stepsRef.current[1] = el)}>
                    <img src={step2} alt="Step 2" className="step-image2" />
                    <h3><img src={second} alt="second" className="second" />Site Visit</h3>
                    <p>Conduct a detailed evaluation of spaces and specific needs.</p>
                </div>
                <div className="step s3" ref={(el) => (stepsRef.current[2] = el)}>
                    <img src={step3} alt="Step 3" className="step-image3" />
                    <h3><img src={third} alt="third" className="third" />Design</h3>
                    <p>Create and refine designs tailored to your preferences.</p>
                </div>
                <div className="step s4" ref={(el) => (stepsRef.current[3] = el)}>
                    <img src={step4} alt="Step 4" className="step-image4" />
                    <h3><img src={fourth} alt="fourth" className="fourth" />Execution</h3>
                    <p>Implement approved design with attention to detail.</p>
                </div>
                <div className="step s5" ref={(el) => (stepsRef.current[4] = el)}>
                    <img src={step5} alt="Step 5" className="step-image5" />
                    <h3><img src={fifth} alt="fifth" className="fifth" />Handover</h3>
                    <p>Ensuring review and satisfaction with every detail.</p>
                </div>
            </div>
            <div className="section-space"></div>
        </div>
    );
};

export default FiveSteps;
