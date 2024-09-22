
import { useState, useEffect, useRef } from "react";
import axios from 'axios';

const TeamSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const [teamData, setTeamData] = useState([]);

  // useEffect(() => {
  //   fetchteamData();
  //   // Auto slide every 5 seconds
  //   const interval = setInterval(() => {
  //     handleNextSlide();
  //   }, 5000);

  //   return () => clearInterval(interval); // Clear interval on component unmount
  // }, [currentSlide]);

  useEffect(() => {
    if (teamData.length > 0) {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [teamData , currentSlide]);

  useEffect(() => {
      fetchteamData();
  }, []);

  const fetchteamData = async () => {
    const response = await axios.get('http://localhost/Goodir_db/Team/read.php');
    setTeamData(response.data);
  };

  const handleNextSlide = () => {
    const totalVisibleSlides = getTotalVisibleSlides();
    const totalSlides = Math.ceil(teamData.length / totalVisibleSlides);
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
    const totalSlides = Math.ceil(teamData.length / totalVisibleSlides);
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
    <>
      {teamData && teamData.length > 0 && (
        <div className="relative w-full mt-9">
          <div
            className="flex w-full overflow-hidden space-x-4 sm:space-x-10  "
            ref={sliderRef}
            style={{ WebkitOverflowScrolling: 'touch' }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {teamData.map((member, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-[95%] sm:w-[45%] lg:w-[30%] 
                 ${index === teamData.length - 1 ? 'mr-10' : ''}`} // Add margin to the last item
              >
                <div className="rounded-sm overflow-hidden pb-4">
                  {member.image && <img className="w-full" src={`http://localhost/Goodir_db/uploads/${member.image}`} alt={member.name} />}
                  <div className="flex mt-3 flex-col justify-center items-center">
                    <h3 className="font-semibold text-[15px] sm:text-[18px]">
                      {member.name}
                    </h3>
                    <p className="text-[13px] text-gray-600 text-center">
                      {member.skills}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Dot Indicators */}
          <div className="flex justify-center mt-4 space-x-2">
            {Array.from({ length: Math.ceil(teamData.length / getTotalVisibleSlides()) }).map((_, index) => (
              <button
                key={index}
                className={`h-2 lg:h-3 rounded-full transition-all duration-300 ease-in-out ${currentSlide === index ? "bg-coral-red w-10 lg:w-14 " : "bg-[rgba(133,13,51,0.35)] w-2 lg:w-5"
                  }`}
                onClick={() => handleDotClick(index)}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TeamSlider;