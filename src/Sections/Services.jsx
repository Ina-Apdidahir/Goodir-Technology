
import React, { useState, useEffect, useRef } from 'react';
import service from '../assets/PORT_images/service.png'
import axios from 'axios'
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'

const Services = () => {

  const [inView, setInView] = useState(false);
  const [cardsData, setCardsData] = useState([]);
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


  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    const response = await axios.get('http://localhost/Goodir_db/Services/read.php');
    setCardsData(response.data);
  };

  return (
    <div ref={ElementRef} className={`w-full max-container flex flex-col lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative  ${inView ? 'transition-active' : ''}`}>

      <div className={` hidden lg:block w-1/5 h-1/6 bg-coral-red absolute  lg:top-[-5rem] lg:right-[-12rem] z-0 transition-all duration-[5000ms] ${inView ? 'translate-y-[3rem]' : ''}`}></div>
      <div className={`hidden lg:block w-1/4 h-1/6 bg-slate-900 absolute lg:bottom-[-8rem] lg:left-[-12rem]  transition-all duration-[5000ms] ${inView ? 'translate-y-[-3rem]' : ''}`}></div>

      <div className=" w-full lg:w-[46%] ">
        <div className="flex space-x-0 items-baseline">
          <motion.div
            variants={FadeRight(1.3)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-20 h-1 bg-coral-red"></motion.div>
          <motion.p
            variants={FadeRight(0.9)}
            initial='hidden'
            whileInView={"visible"}
            className=" font-bold text-[20px] text-coral-red ">  What We Do </motion.p>
        </div>
        <motion.h3
          variants={FadeRight(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="font-bold text-[30px] mb-6 mt-3 ">
          Our Services
        </motion.h3>

        <motion.p
          variants={FadeUp(0.5)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className=" text-[16px] ">
          We offer high quality products for competitive prices. Our main goal is customer satisfaction, which we obtain through market orientation of ongoing service and support.
        </motion.p>
      </div>

      {cardsData && cardsData.length > 0 ? (
        cardsData.map((item, index) => (
          <motion.div
            variants={ index % 2 === 0 ? FadeLeft(0.8) : FadeRight(0.8) }
            initial='hidden'
            whileInView={"visible"}
            viewport={{ once: true }}
            key={index}
            className="transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200 flex justify-center flex-col lg:flex-row lg:space-x-4"
          >
            <div className="w-[50px] pb-5 pt-2">
              <img src={service} alt="" className="w-full" />
            </div>
            <div className="lg:w-[70%]">
              <h3 className="font-bold text-[25px]">{item.service_title}</h3>
              <p className="font-semibold text-[18px] text-gray-400">
                {item.sub_title} <span className='text-red-700'>${item.starting_price}</span>
              </p>
              <small className="text-[15px] line-clamp-4 ">{item.long_text}</small>
              <button className=' py-2 rounded-sm mt-3 hover:text-tertiary-Color ' >Learn More →</button>
            </div>
          </motion.div>
        ))
      ) : 'No card'}
      {/* <div
        className="transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200 flex justify-center flex-col lg:flex-row lg:space-x-4 "
      >
        <div className="w-[50px] pb-5 pt-2">
          <img src={service} alt="" className="w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">Branding and Design</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$59.99</span>
          </p>
          <small>
            We craft unique branding and design solutions that elevate your brand's identity. Our team focuses on creating visual elements that capture your company's essence, ensuring a strong and consistent presence across all platforms. From logos to comprehensive branding materials, we develop designs that resonate with your target audience, making a lasting impression and setting you apart from the competition.
          </small>
        </div>
      </div>

      <div
        className="transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200 flex justify-center flex-col lg:flex-row lg:space-x-4 "
      >
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">Digital Marketting</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$99.99</span>
          </p>
          <small>
            Our digital marketing strategies are designed to amplify your online presence and engage your audience effectively. We utilize the latest tools and techniques, including SEO, social media marketing, and email campaigns, to drive traffic and boost conversions. By analyzing market trends and consumer behavior, we tailor our approach to maximize your brand's reach and impact, ensuring measurable and sustainable growth.
          </small>
        </div>
      </div>

      <div
        className="transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200 flex justify-center flex-col lg:flex-row lg:space-x-4 "
      >
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">Web Development</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$299.99</span>
          </p>
          <small>
            Our web development services focus on building dynamic, responsive websites that offer an exceptional user experience. We prioritize clean design and seamless navigation to ensure visitors can easily access the information they need. By utilizing modern frameworks and coding practices, we create websites that are not only visually appealing but also optimized for performance, security, and scalability.
          </small>
        </div>
      </div>

      <div
        className="transition-container w-full lg:w-[46%] px-5 py-7 rounded-lg bg-white-200 flex justify-center flex-col lg:flex-row lg:space-x-4 "
      >
        <div className=" w-[50px] pb-5 pt-2 ">
          <img src={service} alt="" className=" w-full" />
        </div>
        <div className="lg:w-[70%]">
          <h3 className="font-bold text-[25px]">System Development</h3>
          <p className="font-semibold text-[18px] text-gray-400">
            Starts from <span className='text-red-700'>$499.99</span>
          </p>
          <small>
            In system development, we engineer custom solutions tailored to streamline your business processes. Our team designs and implements systems that automate tasks, enhance data management, and improve overall efficiency. From inventory management to CRM systems, we ensure that each solution is robust, scalable, and fully integrated with your existing infrastructure, providing a seamless operational experience.
          </small>
        </div>
      </div> */}

      <div className=" w-full lg:w-[46%] flex flex-col justify-center items-center">
        <h3 className="font-bold text-[30px] mb-6 mt-3 ">
          Do You Want Something Different?
        </h3>
        <a href='#Contact' className=' border-2 border-coral-red px-6 py-2 bg-coral-red text-whit-color group hover:bg-transparent hover:text-black transition-all duration-300 rounded-sm'>
          Knock Me
          <svg
            className=" text-whit-color w-12 h-4 inline-block group-hover:text-black transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
        </a>
      </div>


    </div>
  )
}

export default Services