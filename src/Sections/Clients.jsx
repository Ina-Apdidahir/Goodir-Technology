

import React, { useState, useEffect, useRef } from 'react';
import Counter from '../Details/counter';

const Clients = () => {

  const [inView, setInView] = useState(false);
  const ElementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust this threshold to control when the animation starts
    );

    if (ElementRef.current) {
      observer.observe(ElementRef.current);
    }

    return () => {
      if (ElementRef.current) {
        observer.unobserve(ElementRef.current);
      }
    };
  }, []);

  return (
    <div ref={ElementRef} className= {`flex justify-center lg:items-center flex-col space-y-4 lg:flex-row  relative text-white py-8  ${inView ? 'transition-active' : ''}`}>
      <div 
      className= {` hidden lg:block h-32 w-32 bg-coral-red  absolute bottom-[-10rem] left-5 transition-all duration-[5000ms] ${inView ?'translate-y-[3rem]' : ''}`}
      ></div>
      <div
        className= {`hidden lg:block w-60 h-[500px] justify-center items-center bg-transparent border-4   border-color-[#f0f0f0] z-0 top-[-11rem] right-[-12rem] absolute transition-all duration-[5000ms]       ${inView ?'translate-x-[-2rem]' : ''}`}
      ></div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={5000} duration={3000} />
        <p className=' text-[24px]'>JavaScript Projects</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={90} duration={3000} />
        <p className=' text-[24px]'>Digital Products</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={300} duration={3000} />
        <p className=' text-[24px] '>Happy Clients</p>
      </div>
    </div>
  );
};

export default Clients;