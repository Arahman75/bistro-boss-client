import React from 'react';

const FoodCart = ({ item }) => {
    const { name, price, image, recipe } = item;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <p className='text-white bg-slate-700 absolute right-0 mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className='flex items-center justify-center'>
                    <button className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;