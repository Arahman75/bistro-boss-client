import FoodCart from '../../../components/FoodCart/FoodCart';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const OrderTabs = ({ items }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <div className='my-12'>

            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='grid md:grid-cols-3 gap-10'>
                        {
                            items.slice(0, 6).map(item => <FoodCart key={item._id} item={item}>

                            </FoodCart>)
                        }
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default OrderTabs;