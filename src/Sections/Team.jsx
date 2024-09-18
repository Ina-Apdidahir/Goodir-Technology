
import React, { useState, useEffect, useRef } from 'react';
import Ismo from '../assets/PORT_images/ismo.webp'
import xabiib from '../assets/PORT_images/xabiib.webp'
import Me from '../assets/PORT_images/Me.webp'
import salman from '../assets/PORT_images/salman.webp'
import suhayb from '../assets/PORT_images/suhayb.webp'
import abdirisaq from '../assets/PORT_images/abdirisaq.webp'

function Team() {

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
        <div ref={ElementRef}
            className={`w-full max-container flex flex-col justify-center lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative  ${inView ? 'transition-active' : ''}`}>

            <div className="w-full  lg:w-[90%] mb-4 flex flex-col items-center">
                <div className="w-full ">
                <div className="flex space-x-3 items-center">
                    <div className=" w-16 h-3 bg-coral-red"></div>
                    <p className=" font-bold text-[20px] text-coral-red ">  Experience </p>
                </div>
                <h3 className="font-bold text-[30px] mb-6 mt-3 ">
                    Meet Our Expert Team
                </h3>
                <p className=" text-[16px] ">
                    At Goodir Technology, our team consists of highly skilled professionals dedicated to delivering exceptional results. With a blend of expertise and innovation, we are committed to driving success for our clients.
                </p>
                </div>
                <div className=" flex flex-wrap justify-center mt-9 ">
                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3 rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={Ismo} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Ismail Mohamed Hersi
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Ui Ux Design , Graphic Design
                            </p>
                        </div>
                    </div>
                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3  rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={Me} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Bishar Abdidahir Mohamed
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Software developer , UX/UI designer
                            </p>
                        </div>
                    </div>
                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3  rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={xabiib} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Abdirahman Habib Hersi
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Degital marketer , full stack developer
                            </p>
                        </div>
                    </div>

                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3  rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={salman} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Salmaan Ahmed Abdi
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Degital marketer , full stack developer
                            </p>
                        </div>
                    </div>

                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3  rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={suhayb} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Abdirahman Habib Hersi
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Graphic designer,UX/UI designer
                            </p>
                        </div>
                    </div>

                    <div className=" w-[200px] sm:w-[45%] lg:w-[30%] my-5 mx-3  rounded-sm overflow-hidden ">
                        <img
                            className=" w-full "
                            src={abdirisaq} alt="" />

                        <div className="flex mt-3 flex-col justify-center items-center">
                            <h3 className="font-semibold  text-[15px]  sm:text-[18px] sm:font-semibold ">
                                Abdirahman Habib Hersi
                            </h3>
                            <p className=" text-[13px] text-gray-600 text-center ">
                                Fullstack Software Developer
                            </p>
                        </div>
                    </div>

                   
                </div>
            </div>
        </div>
    )
}

export default Team