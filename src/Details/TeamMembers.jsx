
import { useState, useEffect, useRef } from "react";

const TeamSlider = ({ teamMembers }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    // Auto slide every 5 seconds
    const interval = setInterval(() => {
      handleNextSlide();
    }, 25000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [currentSlide]);

  const handleNextSlide = () => {
    const totalVisibleSlides = getTotalVisibleSlides();
    const totalSlides = Math.ceil(teamMembers.length / totalVisibleSlides);
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
    const totalSlides = Math.ceil(teamMembers.length / totalVisibleSlides);
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
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex-shrink-0 w-[95%] sm:w-[45%] lg:w-[30%] 
                 ${index === teamMembers.length - 1 ? 'mr-10' : ''}`} // Add margin to the last item
          >
            <div className="rounded-sm overflow-hidden pb-4">
              <img className="w-full" src={member.image} alt={member.name} />
              <div className="flex mt-3 flex-col justify-center items-center">
                <h3 className="font-semibold text-[15px] sm:text-[18px]">
                  {member.name}
                </h3>
                <p className="text-[13px] text-gray-600 text-center">
                  {member.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Dot Indicators */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(teamMembers.length / getTotalVisibleSlides()) }).map((_, index) => (
          <button
            key={index}
            className={`h-2 lg:h-3 rounded-full transition-all duration-300 ease-in-out ${
              currentSlide === index ? "bg-coral-red w-10 lg:w-14 " : "bg-red-300 w-2 lg:w-5"
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSlider;
