
import React, { useState, useEffect, useRef } from 'react';
import Image from '../assets/PORT_images/45-49.jpg';

const About = () => {
  const [inView, setInView] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.3 } // Adjust this threshold to control when the animation starts
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div ref={aboutRef} className={`lg:mt-16 mt-6 w-full max-container flex flex-col lg:flex-row justify-center ${inView ? 'transition-active' : ''}`}>
      <div className="hidden lg:block lg:w-[31%] relative group">
        <div className={`h-3/4 w-3/4 bg-coral-red absolute top-[-1rem] right-[8rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[10px] translate-y-4' : ''}`}></div>
        <img
          className={`absolute top-[-7rem] right-[1rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[-10px] translate-y-[-5px]' : ''}`}
          src={Image} width={300} alt=""
        />
        <div className={`h-48 w-96 border-8 border-white-400 absolute top-4 left-[-10rem] z-0 transition-all duration-[2000ms] ${inView ? 'translate-x-2' : ''}`}></div>
      </div>

      <div className="w-full lg:w-[31%] lg:mx-4">
        <div className="flex space-x-0 items-baseline">
          <div className=" w-20 h-1 bg-coral-red"></div>
          <p className="text-coral-red font-bold text-[18px]">About Us</p>
        </div>
        <h3 className="font-bold text-[24px]">
          Elevate Your Digital Presence with <span className="text-coral-red">Goodir Technology</span>
        </h3>

        <p className="font-bold text-[20px] mt-4 mb-8">
          Based in Galkaio, Somalia
        </p>
        <p className="text-[16px]">
          At Goodir Technology, we specialize in driving growth and success through innovative digital solutions. With a rich history of excellence, our team is dedicated to helping your business thrive in the ever-evolving digital landscape
        </p>
        <div className=" flex space-x-3 items-start mt-5">
          <svg
            className=" w-7 text-coral-red"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          <small className="text-gray-600">
            At Goodir Technology, we empower businesses with cutting-edge digital solutions.
          </small>
        </div>
        <div className=" flex space-x-3 items-start mt-5">
          <svg
            className=" w-7 text-coral-red"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM11.0026 16L6.75999 11.7574L8.17421 10.3431L11.0026 13.1716L16.6595 7.51472L18.0737 8.92893L11.0026 16Z"></path>
          </svg>
          <small className="text-gray-600">
            Our team crafts customized strategies to elevate your brand and drive measurable success.
          </small>
        </div>
        <button className="mt-8 border-2 border-coral-red bg-coral-red text-whit-color px-5 py-2 rounded-sm hover:text-black hover:bg-transparent group">
          Download cv
          <svg className='text-whit-color w-5 inline-block ml-4 group-hover:text-black' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 19H21V21H3V19ZM13 9H20L12 17L4 9H11V1H13V9Z"></path></svg>
        </button>
      </div>

      <div className="hidden lg:block lg:w-[31%] relative group">
        <div className={`h-3/4 w-3/4 bg-coral-red absolute bottom-[-1rem] left-[8rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[10px] translate-y-4' : ''}`}></div>
        <img
          className={`absolute bottom-[-7rem] right-[1rem] transition-all duration-[2000ms] ${inView ? 'translate-x-[-10px] translate-y-[-5px]' : ''}`}
          src={Image} width={300} alt=""
        />
      </div>
    </div>
  );
}

export default About;
