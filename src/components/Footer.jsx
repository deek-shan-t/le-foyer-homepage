import React, { useEffect, useRef } from 'react';
import Contact from './Contact';
import ContactBox from './ContactBox';
import ContactEnd from './ContactEnd';
import RightTop from './RightTop';
import RightContactEnd from './RightContactEnd';
import './footerstyle.css';

function Footer() {
  const block1Ref = useRef(null);
  const block2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (entry.target === block1Ref.current) {
            entry.target.classList.add('animate-block1');
          } else if (entry.target === block2Ref.current) {
            entry.target.classList.add('animate-block2');
          }
        }
      });
    }, { threshold: 0.1 });

    const block1Current = block1Ref.current;
    const block2Current = block2Ref.current;

    if (block1Current) {
      observer.observe(block1Current);
    }
    if (block2Current) {
      observer.observe(block2Current);
    }

    return () => {
      if (block1Current) {
        observer.unobserve(block1Current);
      }
      if (block2Current) {
        observer.unobserve(block2Current);
      }
    };
  }, []);

  return (
    <footer id='mainBlock'>
      <div className='block1' ref={block1Ref}>
        <Contact />
        <ContactBox />
        <ContactEnd />
      </div>
      <div className='block3'>
       
      </div>
      <div className='block2' ref={block2Ref}>
        <RightTop />
        <RightContactEnd />
      </div>
    </footer>
  );
}

export default Footer;
