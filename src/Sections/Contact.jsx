
import React from 'react'
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'

const Contact = () => {
  return (
    <div className=" w-full max-container flex flex-col lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative ">
      <div className=" w-full py-5  flex flex-col items-center justify-center space-y-3">
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
          >Get in Touch</motion.p>
        </div>
        <motion.h3
          variants={FadeRight(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="font-bold text-[30px] text-center ">
          Connect with Us with Confidence
        </motion.h3>
      </div>
      <div className="w-full flex flex-col lg:flex-row lg:justify-center space-y-8 lg:space-y-0 lg:space-x-7">
        <motion.div
          variants={FadeRight(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="w-full lg:w-[40%]">
          <p className="">
            Please fill out the form on this section to contact with Us. Or call between 9:00 a.m. and 8:00 p.m. ET, Saturday through Wednesday
          </p>
          <div className=" my-4 flex items-start space-x-3">
            <svg
              className=" w-7 "
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="Capa_1" x="0px" y="0px" viewBox="0 0 201.629 201.629"  >
              <path d="M139.321,201.629c-1.457,0-2.925-0.14-4.387-0.426c-0.04-0.006-0.08-0.012-0.12-0.019  c-2.116-0.364-52.265-9.341-89.971-47.047C14.447,123.742,4.194,84.726,1.17,69.123c-0.564-1.856-0.888-3.791-0.962-5.757  c-0.023-0.219-0.029-0.438-0.018-0.656c-0.054-6.129,2.288-11.87,6.615-16.197l12.818-12.818c0.75-0.75,1.768-1.172,2.828-1.172  s2.078,0.422,2.828,1.172l41.479,41.48c1.563,1.562,1.563,4.095,0,5.656L53.942,93.649c-0.327,0.327-0.656,0.637-0.992,0.935  c-5.987,5.316-7.148,14.626-2.694,21.65c4.279,6.747,9.12,12.838,14.387,18.105c6.239,6.238,13.642,11.89,22.001,16.795  c6.837,4.012,15.627,2.726,21.379-3.127l0.139-0.14l12.818-12.817c1.563-1.563,4.094-1.563,5.656,0l41.479,41.479  c1.563,1.562,1.563,4.095,0,5.656l-12.817,12.818C151.006,199.296,145.262,201.629,139.321,201.629z M135.976,193.265  c0.11,0.014,0.22,0.031,0.329,0.054c4.857,1.008,9.843-0.478,13.337-3.971l9.988-9.989l-35.822-35.822l-10.104,10.104  c-8.302,8.448-21.105,10.265-31.108,4.396c-8.946-5.25-16.889-11.319-23.608-18.039c-5.682-5.682-10.893-12.234-15.486-19.478  c-6.531-10.301-4.75-24.024,4.145-31.923c0.226-0.198,0.438-0.4,0.646-0.608l9.984-9.984L22.452,42.18l-9.99,9.989  c-2.832,2.833-4.348,6.609-4.27,10.637c0.003,0.044,0.005,0.087,0.006,0.131c0.04,1.376,0.266,2.725,0.672,4.008  c0.046,0.147,0.084,0.298,0.113,0.45c2.831,14.729,12.544,52.113,41.517,81.087C85.282,183.264,132.552,192.626,135.976,193.265z   M197.444,110.944c-2.209,0-4-1.791-4-4C193.444,52.387,149.058,8,94.5,8c-2.209,0-4-1.791-4-4s1.791-4,4-4  c58.97,0,106.944,47.975,106.944,106.944C201.444,109.153,199.653,110.944,197.444,110.944z M172.624,110.944c-2.209,0-4-1.791-4-4  c0-41.226-33.539-74.765-74.764-74.765c-2.209,0-4-1.791-4-4s1.791-4,4-4c45.636,0,82.764,37.128,82.764,82.765  C176.624,109.153,174.833,110.944,172.624,110.944z M147.866,110.944c-2.209,0-4-1.791-4-4c0-27.573-22.433-50.006-50.006-50.006  c-2.209,0-4-1.791-4-4s1.791-4,4-4c31.984,0,58.006,26.021,58.006,58.006C151.866,109.153,150.075,110.944,147.866,110.944z"></path>
            </svg>
            <div className="">
              <p className='text-gray-500'>Call Us</p>
              <small className='text-gray-500'>+252-90-6250563
              </small>
            </div>
          </div>
          <div className=" flex items-start space-x-3">
            <svg
              className=" w-7 "
              xmlns="http://www.w3.org/2000/svg" fill="currentColor" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 455.861 455.861"  >

              <path d="M52.616,139.032l102.427,88.898L52.616,316.828c-6.162,5.349-6.823,14.68-1.474,20.843     c5.349,6.162,14.68,6.821,20.842,1.474l105.6-91.651l40.663,35.292c2.778,2.411,6.231,3.616,9.684,3.616s6.906-1.205,9.684-3.616     l40.663-35.292l105.6,91.651c6.162,5.348,15.493,4.688,20.842-1.474c5.349-6.163,4.688-15.494-1.474-20.843L300.819,227.93     l102.427-88.898c6.163-5.349,6.823-14.68,1.474-20.843c-5.349-6.163-14.682-6.822-20.842-1.474     c-8.592,7.457-146.799,127.408-155.947,135.348c-9.151-7.942-147.358-127.893-155.947-135.348     c-6.162-5.348-15.494-4.687-20.842,1.474C45.793,124.352,46.454,133.683,52.616,139.032z"></path>
              <path d="M441.088,63.154H14.774C6.615,63.154,0,69.77,0,77.929v300.003c0,8.16,6.615,14.774,14.774,14.774h426.313     c8.16,0,14.774-6.614,14.774-14.774V77.929C455.862,69.77,449.248,63.154,441.088,63.154z M426.314,363.157h-0.001H29.549V92.703     h396.765V363.157z"></path>
            </svg>
            <div className="">
              <p className='text-gray-500'>Email</p>
              <small className='text-gray-500'>goodirtechnology@gmail.com</small>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={FadeLeft(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="w-full lg:w-[40%] space-y-5">
          <input
            type="text"
            required
            placeholder="Your Name"
            className="px-4 py-3 w-full border-0 outline-none rounded-sm shadow-md transition-shadow"
          />
          <input
            type="email"
            required
            placeholder="Your Email"
            className="px-4 py-3 w-full border-0 outline-none rounded-sm shadow-md transition-shadow"
          />
          <input
            type="phone"
            required
            placeholder="Your Phone"
            className="px-4 py-3 w-full border-0 outline-none rounded-sm shadow-md transition-shadow"
          />
          <textarea
            rows={10}
            required
            placeholder="Your Message..."
            className="px-4 py-3 w-full border-0 resize-none outline-none rounded-sm shadow-md transition-shadow"
          ></textarea>

          <button
            className=" text-whit-color px-10 py-2 border-2 border-coral-red bg-coral-red rounded-[0.25rem] 
           group hover:bg-transparent hover:text-current transition-all ease-in-out duration-400"
          >
            Submit Message
            <svg
              className="inline text-whit-color w-5 ml-3 group-hover:text-current  transition-all ease-in-out duration-400"
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path>
              </svg>
          </button>
        </motion.div>


      </div>
    </div>
  )
}

export default Contact
