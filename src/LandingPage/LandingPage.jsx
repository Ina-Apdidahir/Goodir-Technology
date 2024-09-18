
import React from 'react'
import Header from '../Sections/Header'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Skills from '../Sections/Skills'
import Works from '../Sections/Works'
import Services from '../SECTIONS/Services'
import Resume from '../Sections/Resume'
import Testimonial from '../SECTIONS/Testimonial'
import Blog from '../Sections/Blog'
import Clients from '../SECTIONS/Clients'
import Contact from '../Sections/Contact'
import Footer from '../SECTIONS/Footer'
import Team from '../Sections/Team'


const LandingPage = () => {
    return (
        <>
            <div className="relative  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                <Header />
                <section
                    id="Home"
                    className=" px-5 bg-coral-red">
                    < Hero />
                </section>
                <section
                    id="About"
                    className=" padding ">
                    < About />
                </section>
                <section className=" padding bg-coral-red ">
                    < Skills />
                </section>
                <section
                    id="Work"
                    className=" padding relative">
                    <div
                        className=" w-full h-[450px] absolute left-0 right-0 top-[-4rem] z-[-5] bg-coral-red "
                    >
                        <div
                            className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
                        >
                        </div>
                    </div>
                    < Works />
                </section>
                <section
                    id="Service"
                    className=" padding ">
                    < Services />
                </section>
                <section className=" padding bg-coral-red ">
                    <Resume />
                </section>
                <section
                id='Team'
                 className=" padding ">
                    <Team />
                </section>
                <section
                    id="Testimonial"
                    className="  bg-black relative ">
                    <div //red and white
                        className=" bg-[radial-gradient(circle_farthest-side,rgba(253,253,21,.15),rgba(255,255,255,0))]"
                    >
                        <div //white in the midle
                            className="rounded-full bg-[radial-gradient(circle_farthest-side,rgba(253,21,0,.5),rgba(255,255,255,0))]"
                        >
                            <div //back ground pattern
                                className="  px-[4rem] pt-14  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
                            >
                                < Testimonial />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="Blog"
                    className=" padding ">
                    < Blog />
                </section>
                <section className=" padding  bg-black relative bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                    <div //red and white
                        className=" bg-[radial-gradient(circle_farthest-side,rgba(253,253,251,.15),rgba(255,255,255,0))]"
                    >
                        <div //white in the midle
                            className="rounded-full bg-[radial-gradient(circle_farthest-side,rgba(0,0,0,.5),rgba(0,0,0,0))]"
                        >
                            <div //back ground pattern
                                className="  lg:px-[2rem]   "
                            >
                                < Clients />
                            </div>
                        </div>
                    </div>
                </section>
                <section
                    id="Contact"
                    className=" padding ">
                    < Contact />
                </section>
                <section className="  pb-4 bg-coral-red  text-whit-color ">
                    <div className="  px-10 pt-14 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
                        < Footer />
                    </div>
                </section>
            </div>
        </>
    )
}



export default LandingPage