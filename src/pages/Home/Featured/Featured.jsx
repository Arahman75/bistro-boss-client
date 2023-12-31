import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import featuredImg from '../../../assets/home/featured.jpg';
import './Featured.css'
const Featured = () => {
    return (
        <div className='featured-bg text-white pt-8 my-20 bg-fixed'>
            <SectionTitle subHeading={"check it out"}
                heading={'Featured Items'}
            ></SectionTitle>
            <div className='md:flex justify-center bg-slate-500 opacity-80 items-center pb-20 pt-12 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'>
                    <p>March 20, 2023</p>
                    <p className=' uppercase'>WHERE CAN I GET SOME?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-4">order now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;