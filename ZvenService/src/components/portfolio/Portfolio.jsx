import React, { useRef } from 'react'
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
    {
        id:1,
        title:"Social Web App",
        img:"/social.jpg",
        desc:"This is a social media app develop with MERN stack, this app features. User can Create/Delete account,Post images in feed with hide likes/comments feature, Like/comment on posts, Update your profile/password with email otp authentication, Follow/Unfollow other users to visit their profile, Chat with your friends.",
        link: "https://theapp-g8f6.onrender.com"
    },
    {
        id:2,
        title:"Sacu Bank",
        img:"/sacubank.jpg",
        desc:"In this project i have develop real world net-banking project. This project is a best simulator for banking learners Features, Secure login and signup system with md5 encryption, OTP verification, Admin & user panel, Withdraw and deposit section, Money transfer system, Email alerts after every transaction, Request debit card .",
        link: "https://sacubank.com/"
    },
    {
        id:3,
        title:"Verdant World.",
        img:"/verdantworld.jpg",
        desc:"Verdant World is a project for for a real esate company in Nigeria, It as all the modern day reguire tech for website to function well.",
        link: "https://verdantworld.com.ng"
    },
    {
        id:4,
        title:"Hangman Game.",
        img:"/hangman.jpeg",
        desc:"This is a simple word guessing game.",
        link: "https://hangman-kappa-five.vercel.app/"
    },

];

const Single = ({ item }) => {

    const ref = useRef();

    const { scrollYProgress } = useScroll({
         target: ref, 
         //offset: ["start start","end start"]
    });

    const y = useTransform(scrollYProgress,[0,1], [-200, 200]);

    return (
        <section >
        <div className="container">
            <div className="wrapper">
            <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
            </div>
            <motion.div className="textContainer" style={{y}}>
                <h2>{item.title}</h2>
                <p>{item.desc}</p> 
                <a href={item.link}>
                <button>See Demo</button>
                </a>
            </motion.div>
            </div>
        </div>
    </section>
    );
};

const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset:["end end" , "start start"]});

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    });
  return (
    <div className='portfolio' ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
    
  )
}

export default Portfolio