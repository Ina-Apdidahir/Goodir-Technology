
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
      <div className=" w-full py-5  flex flex-col items-center justify-center space-y-3">
        <p className=" font-bold text-[18px] text-coral-red ">Latest Updates</p>
        <h3 className="font-bold text-[30px] ">From My Blog</h3>
        <small className="font-semibold text-[16px] text-gray-400 ">
          We offer high quality products for competitive prices. Our main goal is customer satisfaction
        </small>
      </div>

      <div className="py-4 w-full ">
        {posts.map((post) => (
          <div key={post.id} className=" w-full mb-16 flex lg:items-center flex-col lg:flex-row lg:space-x-4 group ">
            <div className="w-full overflow-hidden rounded-sm h-[200px] sm:h-[300px] lg:h-[240px] lg:w-[45%] ">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover " />
            </div>
            <div className=' w-full lg:w-[30%] flex-col justify-start space-y-2 my-3 lg:my-0'>
              <p className='text-red-500 '>{post.category}</p>
              <h2 className="text-2xl font-bold group-hover:underline">
                <Link to={`/post/${post.id}`}> {post.title} </Link>
              </h2>
              <p className='text-gray-500'>{post.date}</p>
            </div>
            <div className="mt-2 lg:w-[15%] ">
              <Link to={`/post/${post.id}`} className="text-red-500 px-5 py-2 border-2 border-coral-red bg-transparent group-hover:bg-coral-red group-hover:text-whit-color rounded-sm">
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