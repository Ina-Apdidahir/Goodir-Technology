
import React, { useEffect, useState } from 'react';

import Logo from '../assets/PORT_images/Asset23.png';
import Menu from '../assets/PORT_images/menu.svg';
import close from '../assets/PORT_images/close.svg';



const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } // Adjust threshold to your liking
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const navItems = [
    { name: 'Home', href: '#Home' },
    { name: 'About', href: '#About' },
    { name: 'Work', href: '#Work' },
    { name: 'Services', href: '#Service' },
    { name: 'Testimonials', href: '#Testimonial' },
    { name: 'Blog', href: '#Blog' },
    { name: 'Contact', href: '#Contact' },
  ];

  return (
    <header className="px-3 py-2 sm:py-4 bg-coral-red  z-10 w-full fixed">
      <nav className="flex justify-between items-center max-container ">
        <a href="" className="flex items-center space-x-2 h-full ">
          <img className="w-24 lg:w-36" src={Logo} alt="Logo" />
        </a>

        <ul className="flex flex-1 items-center justify-end gap-8 mr-10 max-lg:hidden">
          {navItems.map((item, index) => (
            <li className="relative px-2 py-2 group" key={index}>
              <a
                className={`${activeSection === item.href.slice(1) ? 'text-gray-400' : 'text-white'
                  } hover:text-gray-400`}
                href={item.href}
              >
                {item.name}
              </a>
              {/* Animated line */}
              <span className="absolute left-0 bottom-0 w-[1%] h-[1px] bg-white opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
            </li>
          ))}
        </ul>


        <div className="hidden max-lg:block z-30">
          <img
            className=' sm:ml-10 transition-all duration-300  '
            onClick={() => setShowNav((prev) => !prev)}
            src={showNav ? close : Menu} width={26} alt="Menu" />
        </div>

        {/* Mobile Menu with Transition */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-[rgba(133,13,51,0.7)] backdrop-blur-sm z-20 transition-all duration-500 transform ${showNav ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
        >
          <div className="max-container pt-12 flex flex-col max-h-screen overflow-y-auto">

            <ul className="p-4 pt-[4rem] flex flex-col items-center justify-center gap-4 lg:hidden overflow-y-auto max-h-[calc(100vh-24px)]">
              {navItems.map((item, index) => (
                <li className="relative px-2 py-2 group" key={index}>
                  <a
                    className={`${activeSection === item.href.slice(1) ? 'text-gray-400' : 'text-white'
                      } hover:text-gray-400`}
                    href={item.href}
                  >
                    {item.name}
                  </a>
                  {/* Animated line */}
                  <span className="absolute left-0 bottom-0 w-[1%] h-[1px] bg-white opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300 ease-in-out"></span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
