
import React, { useState, useEffect, useRef } from 'react';
import AALI2 from '../assets/PORT_images/AALI2.png'
import axios from 'axios';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'


const Testimonial = () => {
  const [testimonialData, setTestimonialData] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchTestimonialData();
  }, []);

  const fetchTestimonialData = async () => {
    try {
      const response = await axios.get('http://localhost/Goodir_db/Testimonial/read.php');
      setTestimonialData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonialData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonialData.length - 1 : prevIndex - 1
    );
  };

  // Swipe handling for mobile or touch devices
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 75) {
      handleNext();
    }

    if (touchStartX - touchEndX < -75) {
      handlePrev();
    }
  };

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

    <div ref={ElementRef} className={`w-full max-container flex flex-col lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative ${inView ? 'transition-active' : ''}`}>
      <div className="hidden lg:block lg:w-[48%] h-full relative">
        {/* Box behind the image */}
        <div className={`h-72 w-[30rem] border-4 border-white absolute bottom-[2rem] left-[-14rem] z-0 transition-all duration-[5000ms] ${inView ? 'translate-x-[9rem]' : ''}`}></div>

        <div className="w-[60%] h-[100%] relative">
          <img src={AALI2} alt="" className="w-full h-full object-cover" />
        </div>
      </div>


      <div className=" w-full lg:w-[48%] relative">
        <div
          className={`hidden lg:block w-36 h-40 justify-center items-center bg-transparent border-4 border-whit-color z-0 top-[-7rem] right-[-1rem] absolute transition-all duration-[2000ms] ${inView ? ' translate-x-[-2rem]' : ''} `}
        >
          <svg
            className=" w-28 text-whit-color "
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
          </svg>
        </div>
        <div className={`hidden lg:block h-40 w-40 bg-[#f0f0f0]  absolute bottom-[-1rem] right-5 transition-all duration-[5000ms] ${inView ? 'translate-y-[4rem]' : ''} `}></div>
        <div className="flex space-x-0 items-baseline">
          <motion.div
            variants={FadeRight(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-20 h-1 bg-whit-color"
          >
          </motion.div>
          <motion.h3
            variants={FadeRight(0.6)}
            initial='hidden'
            whileInView={"visible"}
            className="text-sm uppercase font-semibold mb-2 text-whit-color">
            Testimonial
          </motion.h3>
        </div>

        <motion.h2
          variants={FadeRight(0.4)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="text-3xl font-bold text-whit-color mb-4">What People Say</motion.h2>
        <div
          className=" py-6 px-3 "
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {testimonialData.length > 0 && (
            <>
              <p className="italic text-lg mb-4 text-whit-color">
                "{testimonialData[currentIndex].quotes}"
              </p>
              <div className="flex space-x-2 space-y-2 items-baseline flex-wrap">
                <motion.div
                  variants={FadeRight(0.5)}
                  initial='hidden'
                  whileInView={"visible"}
                  className=" w-[5rem] h-[2px] bg-whit-color "></motion.div>
                <motion.p
                  variants={FadeRight(0.4)}
                  initial='hidden'
                  whileInView={"visible"}
                  viewport={{ once: true }}
                  className="font-bold text-whit-color  text-xl">
                  {testimonialData[currentIndex].author}
                </motion.p>
              </div>
              <div className="w-full flex mt-2 items-center ">
                <span className="text-sm text-gray-300">{testimonialData[currentIndex].role}</span>
              </div>
            </>
          )}
        </div>
        {/* Navigation Buttons */}
        <div className="flex justify-start space-x-6 items-center mt-3 pb-14">
          <motion.button
            variants={FadeLeft(0.6)}
            initial='hidden'
            whileInView={"visible"}
            onClick={handlePrev}
            className="text-4xl font-[900] text-whit-color"
          >
            ←
          </motion.button>

          <motion.button
            variants={FadeRight(0.6)}
            initial='hidden'
            whileInView={"visible"}
            onClick={handleNext}
            className="text-4xl font-[900] text-whit-color"
          >
            →
          </motion.button>
        </div>
      </div>
    </div>

  );
};

export default Testimonial;

