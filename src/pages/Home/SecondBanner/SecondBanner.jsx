import React from 'react';
import './SecondBanner.css';

const SecondBanner = () => {
    return (
        <div className='banner-bg w-full h-[570px] my-12 p-24'>
            <div className='bg-white flex items-center justify-center w-full h-96 text-center text-[#151515]'>
                <div>
                    <h2 className='text-4xl mb-4'>Bistro Boss</h2>
                    <p className='w-[750px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
                </div>
            </div>
        </div>
    );
};

export default SecondBanner;