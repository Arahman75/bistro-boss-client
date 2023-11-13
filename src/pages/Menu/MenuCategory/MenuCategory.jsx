import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ items, title, img }) => {
    return (
        <div>
            <div className='py-8'>
                {
                    title && <Cover
                        img={img}
                        title={title}
                        description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                    ></Cover>
                }
            </div>
            <div className='grid md:grid-cols-2 gap-4 mt-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <div className='flex items-center justify-center'>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Full Menu</button>
            </div>
        </div>
    );
};

export default MenuCategory;