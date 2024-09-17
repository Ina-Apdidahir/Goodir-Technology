import React from 'react'

const Resume = () => {
  return (
    <div className="w-full max-container flex flex-col items-center lg:items-start lg:space-y-0 lg:space-x-4">
      <div className="w-full lg:w-[80%] mb-4">
        <p className=" font-bold text-[20px] text-coral-red ">  Know More </p>
        <h3 className="font-bold text-[30px] mb-6 mt-3 ">
        How We Deliver Excellence
        </h3>
        <p className=" text-[16px] ">
        Our Proven Process for Success. At Goodir Technology, we follow a clear and effective process to ensure that every project meets your goals and exceeds expectations.
        </p>
      </div>

      <div className="w-full lg:w-full flex flex-col lg:justify-between lg:space-x-4 mr-2 ">

        <div className=" w-full mt-[5rem]  lg:mt-4 flex flex-col items-start space-y-4">
          <div className="flex space-x-3 items-center">
            <div className=" w-16 h-3 bg-coral-red"></div>
            <h3 className=' text-[30px] font-bold '>Our Process</h3>
          </div>
          <div className=" flex  flex-wrap space-y-4">

            <div className="w-full lg:w-[45%] flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:space-y-1 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Make An Appointment </h3>
                  <span className=" text-[14px] text-gray-500 ">Any Time</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

            <div className="w-full lg:w-[45%] flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                  <svg 
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.2914 5.99994H20.0002C20.5525 5.99994 21.0002 6.44766 21.0002 6.99994V13.9999C21.0002 14.5522 20.5525 14.9999 20.0002 14.9999H18.0002L13.8319 9.16427C13.3345 8.46797 12.4493 8.16522 11.6297 8.41109L9.14444 9.15668C8.43971 9.3681 7.6758 9.17551 7.15553 8.65524L6.86277 8.36247C6.41655 7.91626 6.49011 7.17336 7.01517 6.82332L12.4162 3.22262C13.0752 2.78333 13.9312 2.77422 14.5994 3.1994L18.7546 5.8436C18.915 5.94571 19.1013 5.99994 19.2914 5.99994ZM5.02708 14.2947L3.41132 15.7085C2.93991 16.1209 2.95945 16.8603 3.45201 17.2474L8.59277 21.2865C9.07284 21.6637 9.77592 21.5264 10.0788 20.9963L10.7827 19.7645C11.2127 19.012 11.1091 18.0682 10.5261 17.4269L7.82397 14.4545C7.09091 13.6481 5.84722 13.5771 5.02708 14.2947ZM7.04557 5H3C2.44772 5 2 5.44772 2 6V13.5158C2 13.9242 2.12475 14.3173 2.35019 14.6464C2.3741 14.6238 2.39856 14.6015 2.42357 14.5796L4.03933 13.1658C5.47457 11.91 7.65103 12.0343 8.93388 13.4455L11.6361 16.4179C12.6563 17.5401 12.8376 19.1918 12.0851 20.5087L11.4308 21.6538C11.9937 21.8671 12.635 21.819 13.169 21.4986L17.5782 18.8531C18.0786 18.5528 18.2166 17.8896 17.8776 17.4146L12.6109 10.0361C12.4865 9.86205 12.2652 9.78636 12.0603 9.84783L9.57505 10.5934C8.34176 10.9634 7.00492 10.6264 6.09446 9.7159L5.80169 9.42313C4.68615 8.30759 4.87005 6.45035 6.18271 5.57524L7.04557 5Z"></path>
                  </svg>
              </div>
              <div className="">
              <div className="flex flex-col lg:space-y-1 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Meet Our Team </h3>
                  <span className=" text-[14px] text-gray-500 ">With in 72hrs</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

            <div className="w-full lg:w-[45%] flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:space-y-1 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Get Consultation </h3>
                  <span className=" text-[14px] text-gray-500 ">With in 5days</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

            <div className="w-full lg:w-[45%] flex flex-col lg:flex-row lg:space-x-3 my-4 ">
              <div className=" w-10 h-10 p-2 mx-2 my-4 lg:my-0 rounded-full bg-coral-red flex justify-center items-center">
                <svg
                  className=" w-8 text-whit-color "
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                </svg>
              </div>
              <div className="">
                <div className="flex flex-col lg:space-y-1 mb-3 ">
                  <h3 className=" text-[22px] font-bold ">Start Project </h3>
                  <span className=" text-[14px] text-gray-500 ">with in Week</span>
                </div>
                <small className="text-[16px] text-gray-500">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit accusantium nihil eius, dolorem dignissimos veritatis inventore nam dolor corrupti maxime adipisci facilis commodi omnis ea? Incidunt magni aliquam mollitia. Unde.
                </small>
              </div>
            </div>

          </div>
        </div>

        
      </div>
    </div>
  )
}

export default Resume