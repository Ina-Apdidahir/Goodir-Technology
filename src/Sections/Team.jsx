
import React, { useState, useEffect, useRef } from 'react';
import TeamSlider from '../Details/TeamMembers';
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'

function Team() {

    const [inView, setInView] = useState(false);
    // const [teamData, setTeamData] = useState([]);
    const ElementRef = useRef(null);

    useEffect(() => {
        // fetchteamData();
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

            <div className="w-full mb-4 flex flex-col items-center">
                <div className="w-full ">
                    <div className="flex space-x-0 items-baseline">
                        <motion.div
                            variants={FadeRight(1.3)}
                            initial='hidden'
                            whileInView={"visible"}
                            className=" w-20 h-1 bg-coral-red"></motion.div>
                        <motion.p
                            className="text-coral-red font-bold text-[18px]"
                            variants={FadeRight(0.9)}
                            initial='hidden'
                            whileInView={"visible"}
                        >  Our Team </motion.p>
                    </div>
                    <motion.h3
                        variants={FadeRight(0.8)}
                        initial='hidden'
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className="font-bold text-[30px] mb-6 mt-3 ">
                        Meet Our Expert Team
                    </motion.h3>
                    <motion.p
                        variants={FadeRight(0.8)}
                        initial='hidden'
                        whileInView={"visible"}
                        viewport={{ once: true }}
                        className=" text-[16px] ">
                        At Goodir Technology, our team consists of highly skilled professionals dedicated to delivering exceptional results. With a blend of expertise and innovation, we are committed to driving success for our clients.
                    </motion.p>
                </div>

                <TeamSlider />

            </div>
        </div>
    )
}

export default Team