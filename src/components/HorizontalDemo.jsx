import React from 'react';
import VideoCard from './VideoCard';
import { VIDEO_DATA } from '../constants';

const HorizontalDemo = () => {
    return (
        <div className='flex flex-col mt-24 '> <h1 className='text-pretty w-full text-center text-5xl lg:text-7xl text-neutral-100 '> Functionality </h1>
        <div className="flex flex-wrap items-start w-full mt-10 gap-4">
            
            {VIDEO_DATA.map((video) => (
                <VideoCard key={video.id} {...video} />))}
         
        </div></div>
        
    );
};

export default HorizontalDemo;