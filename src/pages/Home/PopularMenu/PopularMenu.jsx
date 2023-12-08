import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const PopularMenu = () => {
    const [menu, setMenu] = useState([]);


    useEffect(() => {
        fetch('/menu.json')
            .then(res => res.json())
            .then(data => {
                const popularMenu = data.filter(item => item.category === 'popular')
                console.log(popularMenu);
                setMenu(popularMenu)
            })
    }, [])
    return (
        <section className='mb-12'>
            <SectionTitle
                subHeading={'Check it out'}
                heading={'FROM OUR MENU'}
            >
            </SectionTitle>
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex justify-center'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </section>
    );
};

export default PopularMenu;