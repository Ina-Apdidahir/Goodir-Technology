

import Header from '../Sections/Header';
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Ecommerce from '../assets/PORT_images/Ecommerce.jpg';
import Landing from '../assets/PORT_images/Landing.jpg';

const PostDetail = () => {
    const { id } = useParams(); // Get the post id from the URL
    const navigate = useNavigate();

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

    // Find the post that matches the id
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <h2>Post not found</h2>;
    }

    return (
        <div className="">
            <Header />

            <div className="post-detail py-10 px-6 sm:px-10 lg:px-[20%] pt-[7rem] ">
                <div
                    onClick={() => navigate(-1)}
                    className=" w-28 h-12 rounded-full cursor-pointer bg-coral-red flex justify-center items-center mb-10 border-2 border-coral-red group hover:bg-transparent transition-all duration-300 ease-in-out"
                >
                    <svg
                        className=" w-8 text-whit-color group-hover:text-black transition-all duration-300  ease-in-out"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M5.82843 6.99955L8.36396 9.53509L6.94975 10.9493L2 5.99955L6.94975 1.0498L8.36396 2.46402L5.82843 4.99955H13C17.4183 4.99955 21 8.58127 21 12.9996C21 17.4178 17.4183 20.9996 13 20.9996H4V18.9996H13C16.3137 18.9996 19 16.3133 19 12.9996C19 9.68584 16.3137 6.99955 13 6.99955H5.82843Z"></path>
                    </svg>

                </div>

                <img src={post.image} alt={post.title} className="w-full h-64 sm:h-[300px] object-cover" />
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <div className="flex justify-between items-center space-x-3 mb-3 ">
                    <p className="text-gray-500">{post.date}</p>
                    <p className="text-gray-500">{post.category}</p>
                </div>
                <p className="mt-4">{post.content}</p>
            </div>
        </div>
    );
};

export default PostDetail;


