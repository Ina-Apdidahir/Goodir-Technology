

import React, { useState, useEffect } from 'react';
import { FadeDown, FadeUp, FadeLeft, FadeRight } from '../Utilty/Animation'
import { motion } from 'framer-motion';
import axios from 'axios';

const Hero = () => {
  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetchHomeData();
  }, []);

  const fetchHomeData = async () => {
    const response = await axios.get('http://localhost/Goodir_db/Home/read.php');
    setHomeData(response.data);
  };

  const latestData = homeData[homeData.length - 1];

  return (
    <div className=" w-full max-container  px-2 ">
      <div className=" w-full max-container  min-h-[100vh]  flex justify-center flex-col relative ">

        <div className="flex space-x-4 justify-center mb-10 space-y-0 lg:flex-col items-center lg:absolute left-[2rem] top-[15%] lg:space-x-0 lg:space-y-4">
          <motion.div
            variants={FadeDown(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" hidden lg:block w-[0.5px] h-32 bg-gray-300">
          </motion.div>
          <motion.div
            variants={FadeRight(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-32 h-[0.5px] lg:hidden bg-gray-300">
          </motion.div>
          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M14 13.5H16.5L17.5 9.5H14V7.5C14 6.47062 14 5.5 16 5.5H17.5V2.1401C17.1743 2.09685 15.943 2 14.6429 2C11.9284 2 10 3.65686 10 6.69971V9.5H7V13.5H10V22H14V13.5Z"></path>
          </svg>

          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
          </svg>

          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer "
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22C10.1671 22 8.44851 21.5064 6.97086 20.6447L2.00516 22L3.35712 17.0315C2.49494 15.5536 2.00098 13.8345 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2ZM8.59339 7.30019L8.39232 7.30833C8.26293 7.31742 8.13607 7.34902 8.02057 7.40811C7.93392 7.45244 7.85348 7.51651 7.72709 7.63586C7.60774 7.74855 7.53857 7.84697 7.46569 7.94186C7.09599 8.4232 6.89729 9.01405 6.90098 9.62098C6.90299 10.1116 7.03043 10.5884 7.23169 11.0336C7.63982 11.9364 8.31288 12.8908 9.20194 13.7759C9.4155 13.9885 9.62473 14.2034 9.85034 14.402C10.9538 15.3736 12.2688 16.0742 13.6907 16.4482C13.6907 16.4482 14.2507 16.5342 14.2589 16.5347C14.4444 16.5447 14.6296 16.5313 14.8153 16.5218C15.1066 16.5068 15.391 16.428 15.6484 16.2909C15.8139 16.2028 15.8922 16.159 16.0311 16.0714C16.0311 16.0714 16.0737 16.0426 16.1559 15.9814C16.2909 15.8808 16.3743 15.81 16.4866 15.6934C16.5694 15.6074 16.6406 15.5058 16.6956 15.3913C16.7738 15.2281 16.8525 14.9166 16.8838 14.6579C16.9077 14.4603 16.9005 14.3523 16.8979 14.2854C16.8936 14.1778 16.8047 14.0671 16.7073 14.0201L16.1258 13.7587C16.1258 13.7587 15.2563 13.3803 14.7245 13.1377C14.6691 13.1124 14.6085 13.1007 14.5476 13.097C14.4142 13.0888 14.2647 13.1236 14.1696 13.2238C14.1646 13.2218 14.0984 13.279 13.3749 14.1555C13.335 14.2032 13.2415 14.3069 13.0798 14.2972C13.0554 14.2955 13.0311 14.292 13.0074 14.2858C12.9419 14.2685 12.8781 14.2457 12.8157 14.2193C12.692 14.1668 12.6486 14.1469 12.5641 14.1105C11.9868 13.8583 11.457 13.5209 10.9887 13.108C10.8631 12.9974 10.7463 12.8783 10.6259 12.7616C10.2057 12.3543 9.86169 11.9211 9.60577 11.4938C9.5918 11.4705 9.57027 11.4368 9.54708 11.3991C9.50521 11.331 9.45903 11.25 9.44455 11.1944C9.40738 11.0473 9.50599 10.9291 9.50599 10.9291C9.50599 10.9291 9.74939 10.663 9.86248 10.5183C9.97128 10.379 10.0652 10.2428 10.125 10.1457C10.2428 9.95633 10.2801 9.76062 10.2182 9.60963C9.93764 8.92565 9.64818 8.24536 9.34986 7.56894C9.29098 7.43545 9.11585 7.33846 8.95659 7.32007C8.90265 7.31384 8.84875 7.30758 8.79459 7.30402C8.66053 7.29748 8.5262 7.29892 8.39232 7.30833L8.59339 7.30019Z"></path>
          </svg>
          <motion.div
            variants={FadeLeft(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className="lg:hidden w-32 h-[0.5px] bg-gray-400">
          </motion.div>
          <motion.div
            variants={FadeUp(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" hidden lg:block w-[0.5px] h-32 bg-gray-400">
          </motion.div>
        </div>


        <div className=" space-y-2  lg:px-20 px-5 relative">

          {homeData.length > 0 ? (
            <>
              <motion.h2
                initial={{ opacity: 0, scale:0.8 }}
                animate={{ opacity: 1,  scale: 1 }}
                exit={{ opacity: 0,  scale: 1 }}
                transition={{ duration: 1.5 }}
                className=" text-[35px] sm:text-[55px] lg:text-[85px] text-whit-color font-extrabold text-center">{latestData.title}</motion.h2>
              <motion.p
                initial={{ opacity: 0, scale:0.8 }}
                animate={{ opacity: 1,  scale: 1 }}
                exit={{ opacity: 0,  scale: 1 }}
                transition={{ duration: 1.8 }}
                className=" text-whit-color text-[20px] sm:text-[25px] lg:text-[30px] font-bold text-center">
                {latestData.sub_title}
              </motion.p>
            </>
          ) : ''}

          <div className=" flex space-x-4 py-5 justify-center">
            <motion.button
              variants={FadeRight(0.5)}
              initial='hidden'
              whileInView={"visible"}
              viewport={{ once: true }}
              className=' px-6 lg:px-10 rounded-full py-2 lg:py-4 bg-tertiary-Color text-whit-color text-sm hover:bg-transparent border-[3px] border-tertiary-Color hover:text-whit-color transition-colors duration-4000 '> <a href="#Contact">Say hello</a>
            </motion.button>

            <motion.button
              variants={FadeLeft(0.5)}
              initial='hidden'
              viewport={{ once: true }}
              whileInView={"visible"}
              className=" px-6 lg:px-10 rounded-full py-2 lg:py-4 border-[3px] border-tertiary-Color text-whit-color "><a href="#About">Learn More</a>
            </motion.button>
          </div>
        </div>

        <div className=" hidden lg:flex space-x-4 justify-center mb-10 space-y-0 lg:flex-col items-center lg:absolute right-[2rem] top-[15%] lg:space-x-0 lg:space-y-4">
          <motion.div
            variants={FadeDown(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-32 h-[0.5px] lg:w-[0.5px] lg:h-32 bg-gray-300">
          </motion.div>
          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
          </svg>

          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path>
          </svg>

          <svg
            className="text-whit-color w-6 hover:text-tertiary-Color cursor-pointer"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path>
          </svg>
          <motion.div
            variants={FadeUp(0.8)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-32 h-[0.5px] lg:w-[0.5px] lg:h-32 bg-gray-400">
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default Hero