
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'

const Works = () => {

  const [works, setWorks] = useState([]);

  useEffect(() => {
    fetchWorks();
  }, []);

  const fetchWorks = async () => {
    const response = await axios.get('http://localhost/Goodir_db/Works/read.php');
    setWorks(response.data);
  };



  return (
    <div className=" relative w-full max-container flex justify-center lg:flex-row flex-wrap space-x-4 space-y-4">
      <div className=" w-full py-5 sm:top-[-12rem] flex flex-col items-center justify-center space-y-3">
        <div className="flex space-x-0 items-baseline">
          <motion.div
            variants={FadeRight(0.9)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-20 h-1 bg-whit-color">
          </motion.div>
          <motion.p
            variants={FadeRight(0.6)}
            initial='hidden'
            whileInView={"visible"}
            className="text-whit-color font-bold text-[18px] ">Selected Works
          </motion.p>
        </div>
        <motion.h3
          variants={FadeRight(0.9)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="font-bold text-[16px] sm:text-[28px] text-whit-color">Showcasing Our Latest Achievements
        </motion.h3>
        <div className=" hidden lg:flex space-x-4 flex-wrap sm:space-x-6">
          <button className="border-0  text-[16px] text-whit-color sm:text-[18px] sm:font-bold ">All </button>
          <button className="border-0  text-[16px] text-whit-color sm:text-[18px] sm:font-bold ">Branding and Design</button>
          <button className="border-0  text-[16px] text-whit-color sm:text-[18px] sm:font-bold ">System Development</button>
          <button className="border-0  text-[16px] text-whit-color sm:text-[18px] sm:font-bold ">web Development</button>
          <button className="border-0  text-[16px] text-whit-color sm:text-[18px] sm:font-bold ">Digital Marketting</button>
        </div>
        <div className='mt-12 lg:hidden '>
          <select
            className="mt-2 py-2 px-4 outline-none border border-gray-300 rounded-sm shadow-sm bg-white hover:border-gray-400  duration-200 ease-in-out"
            name="" id="">
            <option value="All">All</option>
            <option value="Branding and Design">Branding and Design</option>
            <option value="System Development">System Development</option>
            <option value="web Development">Web Development</option>
            <option value="Digital Marketing">Digital Marketing</option>
          </select>

        </div>
      </div>

      {works && (
        works.map((work,index) => (
          <motion.div
            variants={ index % 2 === 0 ? FadeLeft(0.8) : FadeRight(0.8) }
            initial='hidden'
            whileInView={"visible"}
            viewport={{ once: true }}
            key={index}
            className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
            <div className=" relative overflow-hidden group group rounded-[0.5rem] w-full h-full">

              {work.taskImage && <img className="w-full h-full object-cover" src={`http://localhost/Goodir_db/uploads/${work.taskImage}`} alt={work.name} />}

              <div  className=" absolute  w-full h-full overflow-y-auto flex items-center justify-start flex-col bottom-[-100%] left-0  bg-[#f345459a] group-hover:bottom-0 transition-all duration-300 ">
                <svg
                  className=" text-blue-200  w-10  cursor-pointer mb-1"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                </svg>

                <h3 className="font-bold text-[18px] text-whit-color">{work.taskName}</h3>
                <p className=" text-whit-color text-[15px] line-clamp-4  px-2 "> {work.description} </p>
                <a
                  href={work.linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-blue-200 underline text-center">
                  {work.linkUrl}
                </a>
              </div>
            </div>
          </motion.div>
        ))
      )}

      {/* <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className=" relative overflow-hidden group rounded-[0.5rem] w-full h-full">
          <img src={Landing} alt="" className="w-full h-full object-cover" />
          <a href='' className=" absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0  bg-[#f345458f] group-hover:bottom-0 transition-all duration-300 ">
            <svg
              className="text-whit-color w-16  cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>

            <p className=" text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>

      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className="relative overflow-hidden group group rounded-[0.5rem] w-full h-full ">
          <img src={Blog} alt="" className="w-full h-full object-cover" />
          <a href='' className="absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0 bg-[#f345458f] group-hover:bottom-0 transition-all duration-300">
            <svg
              className="text-whit-color w-16 cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>

            <p className="text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div>


      <div className="w-full lg:w-1/3 lg:h-140px overflow-hidden">
        <div className=" relative overflow-hidden group group rounded-[0.5rem] w-full h-full">
          <img src={Food} alt="" className="w-full h-full object-cover" />
          <a href='' className=" absolute w-full h-full flex justify-center items-center flex-col bottom-[-100%] left-0  bg-[#f345458f] group-hover:bottom-0 transition-all duration-300 ">
            <svg
              className="text-whit-color w-16  cursor-pointer mb-5"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C6.47598 2 2.00098 6.475 2.00098 12C2.00098 16.425 4.86348 20.1625 8.83848 21.4875C9.33848 21.575 9.52598 21.275 9.52598 21.0125C9.52598 20.775 9.51348 19.9875 9.51348 19.15C7.00098 19.6125 6.35098 18.5375 6.15098 17.975C6.03848 17.6875 5.55098 16.8 5.12598 16.5625C4.77598 16.375 4.27598 15.9125 5.11348 15.9C5.90098 15.8875 6.46348 16.625 6.65098 16.925C7.55098 18.4375 8.98848 18.0125 9.56348 17.75C9.65098 17.1 9.91348 16.6625 10.201 16.4125C7.97598 16.1625 5.65098 15.3 5.65098 11.475C5.65098 10.3875 6.03848 9.4875 6.67598 8.7875C6.57598 8.5375 6.22598 7.5125 6.77598 6.1375C6.77598 6.1375 7.61348 5.875 9.52598 7.1625C10.326 6.9375 11.176 6.825 12.026 6.825C12.876 6.825 13.726 6.9375 14.526 7.1625C16.4385 5.8625 17.276 6.1375 17.276 6.1375C17.826 7.5125 17.476 8.5375 17.376 8.7875C18.0135 9.4875 18.401 10.375 18.401 11.475C18.401 15.3125 16.0635 16.1625 13.8385 16.4125C14.201 16.725 14.5135 17.325 14.5135 18.2625C14.5135 19.6 14.501 20.675 14.501 21.0125C14.501 21.275 14.6885 21.5875 15.1885 21.4875C19.259 20.1133 21.9999 16.2963 22.001 12C22.001 6.475 17.526 2 12.001 2Z"></path>
            </svg>

            <p className=" text-whit-color font-bold text-[18px] mt-8 mb-2">GitHub</p>
            <h3 className="font-bold text-[25px] text-whit-color">Ecommerce website</h3>
          </a>
        </div>
      </div> */}
    </div>
  )
}

export default Works