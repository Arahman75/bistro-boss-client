import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-12"
        >
            <SwiperSlide>
                <img src={slide1} alt="" />
                <h3 className='text-4xl text-center text-white -mt-16 uppercase'>Salad</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide2} alt="" />
                <h3 className='text-4xl text-center text-white -mt-16 uppercase'>Fizza</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide3} alt="" />
                <h3 className='text-4xl text-center text-white -mt-16 uppercase'>Soup</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide4} alt="" />
                <h3 className='text-4xl text-center text-white -mt-16 uppercase'>Desert</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={slide5} alt="" />
                <h3 className='text-4xl text-center text-white -mt-16 uppercase'>Salad</h3>
            </SwiperSlide>
        </Swiper>
    );
};

export default Category;