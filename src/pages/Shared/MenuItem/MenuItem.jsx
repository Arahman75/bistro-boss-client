// import React from 'react';

// const MenuItem = ({ item }) => {
//     const { name, price, image, recipe } = item;
//     return (
//         <div className='flex space-x-4'>
//             <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-[100px]' src={image} alt="" />
//             <div>
//                 <h3 className='uppercase'>{name}------------</h3>
//                 <p>{recipe}</p>
//             </div>
//             <p className='text- text-orange-400'>{price}</p>
//         </div>
//     );
// };

// export default MenuItem;
import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item;
    return (
        <div className='flex space-x-6'>
            <img style={{ borderRadius: '0 200px 200px 200px' }} className='w-28' src={image} alt="" />
            <div>
                <h3 className='text-2xl uppercase'>{name}----------</h3>
                <p>{recipe}</p>
            </div>
            <p className='text-yellow-600 text-lg'>{price}</p>
        </div>
    );
};

export default MenuItem;