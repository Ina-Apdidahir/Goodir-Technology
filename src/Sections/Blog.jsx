
import React from 'react'
import { motion } from 'framer-motion';
import { FadeLeft, FadeRight, FadeUp } from '../Utilty/Animation'

import Ecommerce from '../assets/PORT_images/Ecommerce.jpg'
import Landing from '../assets/PORT_images/Landing.jpg'
import PostSlider from '../Details/BlogSlider';

const Blog = () => {

  const posts = [
    {
      id: 1,
      title: 'How to create simple personal website',
      category: 'Design',
      date: 'November 10, 2021',
      image: Landing,
      content: 'Aali is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals. In today’s digital world, your website is the first interaction consumers have with your business. That\'s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line. That\'s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we\'re confident we can design a custom website that drives sales for your unique business.'
    },
    {
      id: 2,
      title: 'How to create Githup page',
      category: 'Development',
      date: 'November 10, 2021',
      image: Ecommerce,
      content: 'Aali is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals. In today’s digital world, your website is the first interaction consumers have with your business. That\'s why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line. That\'s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we\'re confident we can design a custom website that drives sales for your unique business.'
    },

    // Add more posts here
  ];


  return (
    <div className="w-full max-container flex flex-col lg:space-x-6 space-y-4 lg:flex-row flex-wrap relative ">
      <div className=" w-full py-5  flex flex-col justify-center space-y-3">
        <div className="flex space-x-0 items-baseline">
          <motion.div
            variants={FadeRight(1.3)}
            initial='hidden'
            whileInView={"visible"}
            className=" w-20 h-1 bg-coral-red">
          </motion.div>
          <motion.p
            variants={FadeRight(0.9)}
            initial='hidden'
            whileInView={"visible"}
            className=" font-bold text-[18px] text-coral-red ">Blogs</motion.p>
        </div>
        <motion.h3
          variants={FadeRight(0.8)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="font-bold text-[30px] ">Latest Updates</motion.h3>
        <motion.small
          variants={FadeUp(0.6)}
          initial='hidden'
          whileInView={"visible"}
          viewport={{ once: true }}
          className="font-semibold text-[16px] text-gray-400 ">
          Welcome to Goodir Technology’s Blog, where we share insights, updates, and tips to help you stay ahead in the digital landscape. Check out our latest posts for valuable information.
        </motion.small>
      </div>

      <PostSlider posts={posts} />

    </div >
  )
}

export default Blog

