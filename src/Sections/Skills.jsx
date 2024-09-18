

import React, { useState, useEffect, useRef } from 'react';

const ProgressBar = ({ label, percentage }) => {
  // Function to determine the color based on the percentage
  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-white-400'; // High percentage
    if (percentage >= 50) return 'bg-yellow-300'; // Medium percentage
    return 'bg-red-500'; // Low percentage
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{label}</span>
        <span className="text-white font-medium">{percentage}%</span>
      </div>
      <div className="w-full bg-gray-300 rounded-full h-3">
        <div
          className={`h-3 rounded-full ${getProgressBarColor(percentage)}`}
          style={{ width: `${percentage}%` }} // Corrected style attribute
        ></div>
      </div>
    </div>
  );
};


const Skills = () => {

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
    <div ref={ElementRef} className= {`w-full max-container pt-4  lg:pb-10 flex flex-col space-y-12 lg:flex-row lg:space-x-5 lg:space-y-0 justify-center relative  ${inView ? 'transition-active' : ''} `}>
      <div className="w-full lg:w-1/2">
        <p className=" font-bold text-[20px] text-whit-color ">Our skills</p>
        <h3 className="font-bold text-[30px] mb-6 mt-3 text-whit-color">
          You Can Imagine We Can Do
        </h3>
        <p className=" text-[16px] text-whit-color">
          We are working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional creative personal resume portfolio template Aali
        </p>
      </div>
      <div className="w-full lg:w-1/2">
        <ProgressBar label="Website & System Design" percentage={99} />
        <ProgressBar label="Web & System Development" percentage={90} />
        <ProgressBar label="Digital Marketting" percentage={98} />
        <ProgressBar label="Branding And Design" percentage={99} />
        <ProgressBar label="App Development " percentage={80} />
      </div>
         
      <div
        className= {`hidden lg:block w-[250px] h-[350px] justify-center items-center bg-transparent border-4 border-color-[#f0f0f0] z-0 bottom-[-20rem] left-[-10rem] absolute transition-all duration-[5000ms] ${inView ?'translate-x-[4rem]' : ''}`}
      ></div>
    </div>
  );
};

export default Skills;


