

import Header from '../Sections/Header';
import React from 'react';
import { useParams } from 'react-router-dom';

import Ecommerce from '../assets/PORT_images/Ecommerce.jpg';
import Landing from '../assets/PORT_images/Landing.jpg';

const PostDetail = () => {
    const { id } = useParams(); // Get the post id from the URL


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


