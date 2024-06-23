import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Web Devlopment</h2>
          <p>
          At our agency, we’re passionate about crafting websites that resonate with your vision. Whether it’s a sleek e-commerce platform or an engaging blog, we’ll build it from the ground up. Our team specializes in technologies like WordPress and React, ensuring your site is not only visually stunning but also optimized for search engines and mobile devices
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Business Branding</h2>
          <p>
          Branding isn’t just about logos; it’s about creating an emotional connection with your audience. We’ll work closely with you to understand your business values, target audience, and unique selling points. From logo design to comprehensive brand guidelines, we’ll ensure your brand stands out and leaves a lasting impression.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>SEO Optimization</h2>
          <p>
          Imagine your website as a hidden gem waiting to be discovered. Our SEO experts will unlock its potential. We’ll analyze keywords relevant to your industry, optimize your content, and build authoritative backlinks. As a result, your website will climb search engine rankings, attracting organic traffic and boosting your online presence.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Graphics Design</h2>
          <p>
          Our creative team lives and breathes design. Whether it’s eye-catching banners, captivating infographics, or social media graphics that stop the scroll, we’ve got you covered. We understand that aesthetics matter, and we’ll ensure your visuals align seamlessly with your brand identity.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;