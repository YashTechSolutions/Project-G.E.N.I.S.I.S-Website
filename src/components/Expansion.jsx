import React, { useState } from 'react';

const Expansion = ({ title, children }) => {
    
    return (
        <div className='flex flex-col w-full items-center  text-center'>
            {/* <h1 className=' text-5xl lg:text-7xl tracking-tight ' ><span className='text-matrix-green'>G</span>.E.N.I.S.I.S</h1> */}
            <h2 className=' text-1xl lg:text-3xl tracking-tight text-matrix-green '>Guided Executive Navigator and Intelligent System for Individual Support</h2>
            
        </div>
    );
};

export default Expansion;