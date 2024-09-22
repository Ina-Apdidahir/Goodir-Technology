
import { motion, useInView } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'
import React, { useState, useEffect, useRef } from 'react';

const ProgressBar = ({ label, percentage, delay }) => {
  // Function to determine the color based on the percentage
  const getProgressBarColor = (percentage) => {
    if (percentage >= 80) return 'bg-white-400'; // High percentage
    if (percentage >= 50) return 'bg-yellow-300'; // Medium percentage
    return 'bg-red-500'; // Low percentage
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { threshold: 0.5 });

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-white font-medium">{label}</span>
        <motion.span
          initial={{ x: -20, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
          transition={{ duration: 0.5, delay }}
          className="text-white font-medium"
        >
          {isInView ? `${percentage}%` : '0%'}
        </motion.span>
      </div>
      <div className="w-full bg-gray-400 rounded-full h-3">
        <motion.div
          ref={ref}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 4, delay }}
          className={`h-3 rounded-full ${getProgressBarColor(percentage)}`}
        ></motion.div>
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
    <div ref={ElementRef} className={`w-full max-container pt-4  lg:pb-10 flex flex-col space-y-12 lg:flex-row lg:space-x-5 lg:space-y-0 justify-center relative  ${inView ? 'transition-active' : ''} `}>
      <div className="w-full lg:w-1/2">
        <div className="flex space-x-0 items-baseline">
          <motion.div
            variants={FadeRight(1.3)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-20 h-1 bg-whit-color"
          >
          </motion.div>
          <motion.p
            variants={FadeRight(0.9)}
            initial='hidden'
            whileInView={"visible"}
            className=" font-bold text-[20px] text-whit-color ">Our skills</motion.p>
        </div>

        <motion.h3
          variants={FadeRight(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }} className="font-bold text-[30px] mb-6 mt-3 text-whit-color">
          You Can Imagine We Can Do
        </motion.h3>
        <motion.p
          variants={FadeUp(0.6)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className=" text-[16px] text-whit-color">
          We are working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional creative personal resume portfolio template Aali
        </motion.p>
      </div>
      <div className="w-full lg:w-1/2">
        <ProgressBar label="Website & System Design" percentage={99} />
        <ProgressBar label="Web & System Development" percentage={90} />
        <ProgressBar label="Digital Marketting" percentage={98} />
        <ProgressBar label="Branding And Design" percentage={99} />
        <ProgressBar label="App Development " percentage={80} />
      </div>

      <div
        className={`hidden lg:block w-[250px] h-[350px] justify-center items-center bg-transparent border-4 border-color-[#f0f0f0] z-0 bottom-[-20rem] left-[-10rem] absolute transition-all duration-[5000ms] ${inView ? 'translate-x-[4rem]' : ''}`}
      ></div>
    </div>
  );
};

export default Skills;


