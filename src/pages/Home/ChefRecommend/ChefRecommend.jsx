import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import salad from '../../../assets/home/slide1.jpg'


const ChefRecommend = () => {
    return (
        <section>
            <SectionTitle
                subHeading={"Should Try"}
                heading={'RECOMMENDS'}
            >
            </SectionTitle>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                <div className="card rounded-none bg-gray-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">
                            Caeser Salad
                        </h2>
                        <p className='text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none bg-gray-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">
                            Caeser Salad
                        </h2>
                        <p className='text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
                <div className="card rounded-none bg-gray-100 shadow-xl">
                    <figure><img className='w-full h-[300px]' src={salad} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="text-2xl text-center">
                            Caeser Salad
                        </h2>
                        <p className='text-center'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn btn-outline border-0 border-b-4 mt-4">Add To Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefRecommend;