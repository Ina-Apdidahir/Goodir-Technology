
import React, { useState } from 'react';
import Logo from '../assets/PORT_images/Asset23.png';
import Menu from '../assets/PORT_images/menu.svg';
import close from '../assets/PORT_images/close.svg';

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  // const handleMenuClick = () => setShowNav(true);
  // const handleCloseClick = () => setShowNav(false);

  return (
    <header className="px-3 py-2 sm:py-4 bg-coral-red  z-10 w-full fixed">
      <nav className="flex justify-between items-center max-container ">
        <a href="" className="flex items-center space-x-2 h-full ">
          <img className="w-24 lg:w-36" src={Logo} alt="Logo" />
        </a>

        <ul className="flex flex-1 items-center justify-center gap-8 max-lg:hidden">
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Home">Home</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#About">About</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Work">Work</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Service">Services</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Testimonial">Testimonials</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Blog">Blog</a>
          </li>
          <li className="px-2 py-2">
            <a className="text-white hover:text-coral-red" href="#Contact">Contact</a>
          </li>
        </ul>

        <div className="hidden max-lg:block z-30">
          <img
            className=' sm:ml-10 transition-all duration-300  '
            onClick={() => setShowNav((prev) => !prev)}
            src={showNav ? close : Menu} width={26} alt="Menu" />
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(187,81,81,0.75)] backdrop-blur-sm z-20 transition-all duration-500 transform ${showNav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
        >
          <div className="max-container pt-12 flex flex-col bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] max-h-screen overflow-y-auto">

          <ul className="p-4 pt-[4rem] flex flex-col items-center justify-center gap-4 lg:hidden overflow-y-auto max-h-[calc(100vh-24px)]">
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Home"
                  onClick={() => setShowNav((prev) => !prev)}
                >Home</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#About"
                  onClick={() => setShowNav((prev) => !prev)}
                >About</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Work"
                  onClick={() => setShowNav((prev) => !prev)}
                >Work</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Service"
                  onClick={() => setShowNav((prev) => !prev)}
                >Services</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Testimonial"
                  onClick={() => setShowNav((prev) => !prev)}
                >Testimonials</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Blog"
                  onClick={() => setShowNav((prev) => !prev)}
                >Blog</a>
              </li>
              <li className="px-2 py-2">
                <a className="text-white hover:text-coral-red" href="#Contact"
                  onClick={() => setShowNav((prev) => !prev)}
                >Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
