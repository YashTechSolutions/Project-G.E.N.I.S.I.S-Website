import React from 'react';
// import './Hero.css'; // Assuming you have a CSS file for styling
import { motion } from 'framer-motion';


const Hero = () => {
    return (
        <div className="flex flex-col w-full h-screen gap-10 justify-center items-center ">
            <motion.h1 initial={{x:100, opacity:0}} animate={{x:0, opacity:1}} transition={{delay:1, duration:1}} className='text-matrix-green text-6xl lg:text-9xl tracking-tight '>Project </motion.h1>
            <motion.h1 initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ delay: 1, duration: 1 }} className=' text-6xl lg:text-11xl tracking-tight '><span className='text-matrix-green'>G</span>.E.N.I.S.I.S</motion.h1>
            <motion.h2 initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 1.2, duration: 2.5}}className=' text-1xl lg:text-3xl tracking-tight text-matrix-green text-center'> <span className='text-neutral-100'>Guided </span>Executive Navigator and Intelligent System for Individual Support</motion.h2>
        </div>
    );
};

export default Hero;