import React from 'react';
import { ABOUT } from '../constants';
import { motion } from 'framer-motion';
const About = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap  w-full  mt-24 gap-10'>
            <motion.div initial={{x:-100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{delay:1, duration:1}}className='flex justify-center align-middle'>
            <h1 className='text-pretty text-5xl lg:text-7xl text-neutral-100 '>About <span className='text-matrix-green'>G</span>.E.N.I.S.I.S</h1>

            </motion.div>
            <motion.p initial={{x:100, opacity:0}} whileInView={{x:0, opacity:1}} transition={{delay:1, duration:1}} className='text-justify tracking-tight text-matrix-green text-sm lg:text-lg '>{ ABOUT}</motion.p>
        </div>
    );
};

export default About;