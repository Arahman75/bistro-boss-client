// import React from 'react';
// import MenuItem from '../../Shared/MenuItem/MenuItem';
// import Cover from '../../Shared/Cover/Cover';
// import { Link } from 'react-router-dom';

// const MenuCategory = ({ items, title, img }) => {
//     return (
//         <div>
//             <div className='py-8'>
//                 {
//                     title && <Cover
//                         img={img}
//                         title={title}
//                         description={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
//                     ></Cover>
//                 }
//             </div>
//             <div className='grid md:grid-cols-2 gap-4 mt-10'>
//                 {
//                     items.map(item => <MenuItem
//                         key={item._id}
//                         item={item}
//                     ></MenuItem>)
//                 }
//             </div>
//             <div className='flex items-center justify-center'>
//                 <Link to={`/order/${title}`}>
//                     <button className="btn btn-outline border-0 border-b-4 mt-4">Order Now</button></Link>
//             </div>
//         </div>
//     );
// };

// export default MenuCategory;

import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';

const MenuCategory = ({ title, items, img }) => {
    return (
        <div className='mb-12'>
            {
                title && <Cover title={title} img={img} description={"Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi."}></Cover>
            }
            <div className='grid md:grid-cols-1 lg:grid-cols-2 gap-10'>
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
        </div>
    );
};

export default MenuCategory;