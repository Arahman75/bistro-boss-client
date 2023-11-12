import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className='text-center md:w-3/12 mx-auto my-8'>
            <p className='text-[#D99904] text-lg mb-2'>--- {subHeading} ---</p>
            <h3 className='text-4xl border-y-2 py-3 uppercase'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;