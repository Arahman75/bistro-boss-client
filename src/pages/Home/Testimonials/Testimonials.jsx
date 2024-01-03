// import React, { useEffect, useState } from 'react';
// import SectionTitle from '../../../components/SectionTitle/SectionTitle';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import '@smastrom/react-rating/style.css'

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import { Navigation } from 'swiper/modules';
// import { Rating } from '@smastrom/react-rating';


// const Testimonials = () => {
//     const [reviews, setReviews] = useState([]);

//     useEffect(() => {
//         fetch('http://localhost:5000/reviews')
//             .then(res => res.json())
//             .then(data => setReviews(data))
//     }, [])

//     return (
//         <div>
//             <SectionTitle
//                 subHeading={"What Our Clients Say"}
//                 heading={'TESTIMONIALS'}
//             ></SectionTitle>

//             <Swiper navigation={true} modules={[Navigation]} className="mySwiper">


//                 {
//                     reviews.map(review => <SwiperSlide key={review._id}>
//                         <div className='flex flex-col  items-center mx-24 my-16'>
//                             <Rating
//                                 style={{ maxWidth: 180 }}
//                                 value={review.rating}
//                                 readOnly
//                             />
//                             <p className='py-4'>{review.details}</p>
//                             <h3 className='text-2xl'>{review.name}</h3>
//                         </div>
//                     </SwiperSlide>)
//                 }

//             </Swiper>

//         </div>
//     );
// };

// export default Testimonials;
import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import { useState } from 'react';
import { useEffect } from 'react';
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);
            })
    }, [])

    return (
        <section>
            <SectionTitle subHeading={"What Our Clients Say"}
                heading={'TESTIMONIALS'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className='m-24 flex flex-col items-center'>
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className='text-5xl font-bold mt-2'><FaQuoteLeft /></p>
                            <p className='my-4'>{review.details}</p>
                            <h3 className='text-[#CD9003] text-xl'>{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;