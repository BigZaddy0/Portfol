import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton:{
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    },
  },
};

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType:"mirror",
      repeat: Infinity,
    },
  },
};

const Hero = () => {
  return (
    <div className='hero'>
        <div className="wrapper">
          <motion.div 
          className="textContainer" 
          variants={textVariants} 
          initial="initial" 
          animate="animate"
          >
            <motion.h2 variants={textVariants}>Zven Service</motion.h2>
            <motion.h1 variants={textVariants}>Web development and Mobile app development</motion.h1>
            <motion.div variants={textVariants} className="buttons">
                <a href="#Portfolio"><motion.button variants={textVariants}>See our Latest work</motion.button></a>
                <a href="#Contact"><motion.button variants={textVariants}>Contact Us</motion.button></a>
            </motion.div>
            <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
          </motion.div>
        </div>
        <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
           Taking Your Business To The Next Level
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" height="600px" width="900px" alt="" />
        </div>
    </div>
  )
}

export default Hero