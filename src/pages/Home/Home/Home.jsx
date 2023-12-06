// import React from 'react';
// import Banner from '../Banner/Banner';
// import Category from '../Category/Category';
// import PopularMenu from '../PopularMenu/PopularMenu';
// import Featured from '../Featured/Featured';
// import Testimonials from '../Testimonials/Testimonials';
// import { Helmet } from 'react-helmet-async';

// const Home = () => {
//     return (
//         <div>
//             <Helmet>
//                 <title>Bistro Boss | Home</title>
//             </Helmet>
//             <Banner></Banner>
//             <Category></Category>
//             <PopularMenu></PopularMenu>
//             <Featured></Featured>
//             <Testimonials></Testimonials>
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import SecondBanner from '../SecondBanner/SecondBanner';
import PopularMenu from '../PopularMenu/PopularMenu';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <SecondBanner></SecondBanner>
            <PopularMenu></PopularMenu>
        </div>
    );
};

export default Home;