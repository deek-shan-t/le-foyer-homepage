/* src/components/WhyUs.js */
import React, { useEffect, useRef } from 'react';
import './WhyUs.css';
import logo1 from '../assets/icons8-clock-64.png';
import logo2 from '../assets/icons8-craft-64.png';
import logo3 from '../assets/icons8-planner-64.png';
import logo4 from '../assets/icons8-anime-emoji-50.png';
import logo5 from '../assets/icons8-ophthalmology-64.png';
import logo6 from '../assets/icons8-budget-50.png';
import logo7 from '../assets/icons8-workflow-64.png';

const WhyUs = () => {
    const WhyRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate');
                    }
                });
            },
            {
                threshold: 0.1,
            }
        );

        const currentRefs = WhyRefs.current;
        currentRefs.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        // Cleanup on component unmount
        return () => {
            currentRefs.forEach((ref) => {
                if (ref) {
                    observer.unobserve(ref);
                }
            });
        };
    }, []);
    return (
        <div className="why-us">
            <h2>WHY US</h2>
            <hr />
            <div className="why-us-points">
                <div className="point p1" ref={(el) => (WhyRefs.current[0] = el)}>
                    <img src={logo1} alt="On-Time Delivery" className="logo1" />
                    <h3>On-Time Delivery</h3>
                    <p>We prioritize deadlines, ensuring your project is completed promptly.</p>
                </div>
                <div className="point p2" ref={(el) => (WhyRefs.current[1] = el)}>
                    <img src={logo2} alt="Quality Craftsmanship" className="logo2" />
                    <h3>Quality Craftsmanship</h3>
                    <p>We use premium materials and skilled craftsmanship for superior results.</p>
                </div>
                <div className="point p3" ref={(el) => (WhyRefs.current[2] = el)}>
                    <img src={logo3} alt="Personalized Approach" className="logo3" />
                    <h3>Personalized Approach</h3>
                    <p>Tailoring our services to your unique vision ensures a customized experience.</p>
                </div>
                <div className="point p4" ref={(el) => (WhyRefs.current[3] = el)}>
                    <img src={logo4} alt="Client Satisfaction" className="logo4" />
                    <h3>Client Satisfaction</h3>
                    <p>Your happiness is our goal, delivering results that exceed expectations.</p>
                </div>
            </div>
            <div className="why-us-points-below">
                <div className="point p5" ref={(el) => (WhyRefs.current[4] = el)}>
                    <img src={logo5} alt="Transparency" className="logo5" />
                    <h3>Transparency</h3>
                    <p>Clear communication and honesty guide our process from start to finish.</p>
                </div>
                <div className="point p6" ref={(el) => (WhyRefs.current[5] = el)}>
                    <img src={logo6} alt="Competitive Prices" className="logo6" />
                    <h3>Competitive Prices</h3>
                    <p>We offer fair pricing without compromising on quality.</p>
                </div>
                <div className="point p7" ref={(el) => (WhyRefs.current[6] = el)}>
                    <img src={logo7} alt="One Stop Solution" className="logo7" />
                    <h3>One Stop Solution</h3>
                    <p>From design to project management, we offer end-to-end solutions for your interior needs.</p>
                </div>
            </div>
            <div className="button-container">
                <button className="button2">TALK TO AN EXPERT</button>
            </div>
            <div className="section-space"></div>
        </div>
    );
};

export default WhyUs;
