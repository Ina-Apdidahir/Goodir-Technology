
import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Counter from '../Details/counter';

const Clients = () => {
  const [inView, setInView] = useState(false);
  const ElementRef = useRef(null);

  const isInView = useInView(ElementRef, {
    once: true,
    amount: 0.3,
  });

  useEffect(() => {
    if (isInView) {
      setInView(true);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ElementRef}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className={`flex justify-center lg:items-center flex-col space-y-4 lg:flex-row  relative text-white py-8`}
    >
      <motion.div
        initial={{ y: -10, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: -10, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`hidden lg:block h-32 w-32 bg-coral-red  absolute bottom-[-10rem] left-5`}
      />
      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
        transition={{ duration: 1 }}
        className={`hidden lg:block w-60 h-[500px] justify-center items-center bg-transparent border-4   border-color-[#f0f0f0] z-0 top-[-11rem] right-[-12rem] absolute`}
      />
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={5000} duration={3000} />
        <p className="text-[24px]">JavaScript Projects</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={90} duration={3000} />
        <p className="text-[24px]">Digital Products</p>
      </div>
      <div className="mx-8 text-center flex space-x-2 items-baseline">
        <Counter end={300} duration={3000} />
        <p className="text-[24px]">Happy Clients</p>
      </div>
    </motion.div>
  );
};

export default Clients;