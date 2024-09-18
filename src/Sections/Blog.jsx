
import React from 'react'
import { Link } from 'react-router-dom';

import Ecommerce from '../assets/PORT_images/Ecommerce.jpg'
import Landing from '../assets/PORT_images/Landing.jpg'

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
          <div className=" w-20 h-1 bg-coral-red"></div>
          <p className=" font-bold text-[18px] text-coral-red ">Blogs</p>
        </div>
        <h3 className="font-bold text-[30px] ">Latest Updates</h3>
        <small className="font-semibold text-[16px] text-gray-400 ">
          Welcome to Goodir Technology’s Blog, where we share insights, updates, and tips to help you stay ahead in the digital landscape. Check out our latest posts for valuable information.
        </small>
      </div>



      <div className="py-4 w-full flex overflow-x-auto space-x-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="w-full sm:w-[48%] lg:w-[30%] flex-shrink-0 mb-16 flex justify-between flex-col group"
          >
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
        ))}
      </div>


    </div >
  )
}

export default Blog



// import React from 'react';
// import { Link } from 'react-router-dom';

// const PostList = () => {
//     const posts = [
//         { id: 1, title: 'How to create simple personal website', date: 'November 10, 2021', image: 'path/to/image.jpg' },
//         // Add more posts here
//     ];

//     return (
//         <div className="p-4">
//             {posts.map((post) => (
//                 <div key={post.id} className="mb-4 flex items-center">
//                     <img src={post.image} alt={post.title} className="w-32 h-32 object-cover mr-4"/>
//                     <div>
//                         <h2 className="text-xl font-bold">{post.title}</h2>
//                         <p>{post.date}</p>
//                         <Link to={/post/${post.id}} className="text-red-500 underline">Full Story</Link>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }

// export default PostList;