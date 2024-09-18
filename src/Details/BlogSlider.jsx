

import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';

const PostSlider = ({ posts }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 5000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  const handleNextSlide = () => {
    const totalVisibleSlides = getTotalVisibleSlides();
    const totalSlides = Math.ceil(posts.length / totalVisibleSlides);
    const nextSlide = (currentSlide + 1) % totalSlides;
    setCurrentSlide(nextSlide);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / totalVisibleSlides;
      sliderRef.current.scrollTo({
        left: slideWidth * totalVisibleSlides * nextSlide,
        behavior: "smooth",
      });
    }
  };

  const handlePrevSlide = () => {
    const totalVisibleSlides = getTotalVisibleSlides();
    const totalSlides = Math.ceil(posts.length / totalVisibleSlides);
    const prevSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    setCurrentSlide(prevSlide);
    if (sliderRef.current) {
      const slideWidth = sliderRef.current.clientWidth / totalVisibleSlides;
      sliderRef.current.scrollTo({
        left: slideWidth * totalVisibleSlides * prevSlide,
        behavior: "smooth",
      });
    }
  };

  const handleDotClick = (index) => {
    setCurrentSlide(index);
    if (sliderRef.current) {
      const totalVisibleSlides = getTotalVisibleSlides();
      const slideWidth = sliderRef.current.clientWidth / totalVisibleSlides;
      sliderRef.current.scrollTo({
        left: slideWidth * totalVisibleSlides * index,
        behavior: "smooth",
      });
    }
  };

  const getTotalVisibleSlides = () => {
    if (window.innerWidth >= 1024) {
      return 3; // Large screens: show 3 slides
    } else if (window.innerWidth >= 640) {
      return 2; // Medium screens: show 2 slides
    } else {
      return 1; // Small screens: show 1 slide
    }
  };

  // Touch event handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      // Swipe left
      handleNextSlide();
    }

    if (touchStartX.current - touchEndX.current < -50) {
      // Swipe right
      handlePrevSlide();
    }
  };

  return (
    <div className="relative w-full mt-9">
      <div
        className="flex w-full overflow-hidden space-x-4 sm:space-x-10  "
        ref={sliderRef}
        style={{ WebkitOverflowScrolling: 'touch' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {posts.map((post, index) => (
          <div
            key={index}
            // className="w-full sm:w-[48%] lg:w-[30%] flex-shrink-0 mb-16 flex justify-between flex-col group"
            className={`flex-shrink-0 w-[95%] sm:w-[45%] lg:w-[30%] mb-16 flex justify-between flex-col group
                 ${index === posts.length - 1 ? 'mr-10' : ''}`} // Add margin to the last item
          >
            <div className="">
            <div className="w-full overflow-hidden rounded-sm h-[200px] sm:h-[180px] lg:h-[240px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-[1.05] transition-all duration-[1000ms]"
              />
            </div>
              <div className="w-full flex-col justify-start space-y-2 my-3 lg:my-0">
              <p className="text-red-500">{post.category}</p>
              <h2 className="text-2xl font-bold group-hover:underline">
                <Link to={`/post/${post.id}`}>{post.title}</Link>
              </h2>
              <p className="text-gray-500">{post.date}</p>
            </div>
            <div className="mt-2 lg:w-auto">
              <Link
                to={`/post/${post.id}`}
                className="text-coral-red px-5 py-2 border-2 border-coral-red bg-transparent hover:bg-coral-red hover:text-white rounded-sm"
              >
                Full Story
              </Link>
            </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(posts.length / getTotalVisibleSlides()) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 lg:h-3 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index ? "bg-coral-red w-10 lg:w-14 " : "bg-[rgba(133,13,51,0.35)] w-2 lg:w-5"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PostSlider;
