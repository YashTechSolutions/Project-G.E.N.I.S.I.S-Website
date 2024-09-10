import React from 'react';
import { ABOUT } from '../constants';

const About = () => {
    return (
        <div className='flex flex-wrap lg:flex-nowrap  w-full  mt-24 gap-10'>
            <div className='flex justify-center align-middle'>
            <h1 className='text-pretty text-5xl lg:text-7xl text-neutral-100 '>About <span className='text-matrix-green'>G</span>.E.N.I.S.I.S</h1>

            </div>
            <p className='text-justify tracking-tight text-matrix-green text-sm lg:text-lg '>{ ABOUT}</p>
        </div>
    );
};

export default About;