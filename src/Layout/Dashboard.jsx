// import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart } from "react-icons/fa";
// import { NavLink, Outlet } from "react-router-dom";

// const Dashboard = () => {
//     return (
//         <div className="flex">
//             <div className="w-64 min-h-screen bg-orange-400">
//                 <ul className="menu p-4">
//                     <li><NavLink to='/dashboard/userHome'>
//                         <FaHome></FaHome>
//                         User Home</NavLink></li>
//                     <li><NavLink to='/dashboard/reservation'>
//                         <FaCalendar></FaCalendar>
//                         Reservation</NavLink></li>
//                     <li><NavLink to='/dashboard/review'>
//                         <FaAd />
//                         Add a Review</NavLink></li>
//                     <li><NavLink to='/dashboard/bookings'>
//                         <FaList />
//                         My Booking</NavLink></li>
//                     <li><NavLink to='/dashboard/cart'>
//                         <FaShoppingCart />
//                         My Cart</NavLink></li>
//                     <div className="divider"></div>
//                     <li><NavLink to='/'>
//                         <FaHome></FaHome>
//                         Home</NavLink></li>
//                     <li><NavLink to='/order/salad'>
//                         <FaSearch></FaSearch>
//                         Menu</NavLink></li>
//                 </ul>
//             </div>
//             <div className="flex-1 p-8">
//                 <Outlet></Outlet>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;
import React from 'react';
import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaPaypal, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from 'react-icons/fa';
import { NavLink, Outlet } from 'react-router-dom';
import useCart from '../Hooks/useCarts';

const Dashboard = () => {
    const [cart] = useCart();

    const isAdmin = true;
    return (
        <div className='flex'>
            {/*Dashboard side bar */}
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu p-4'>
                    {
                        isAdmin ? <>
                            <li className='mb-4'><NavLink to='/dashboard/adminHome'> <FaHome></FaHome>Admin Home</NavLink></li>

                            <li className='mb-4'><NavLink to='/dashboard/addItems'> <FaUtensils></FaUtensils>Add Items</NavLink></li>

                            <li className='mb-4'><NavLink to='/dashboard/manageItems'> <FaList></FaList>Mange Items</NavLink></li>

                            <li className='mb-4'><NavLink to='/dashboard/booking'> <FaBook></FaBook>Manage Booking</NavLink></li>

                            <li className='mb-4'><NavLink to='/dashboard/users'> <FaUsers></FaUsers> All Users</NavLink></li>

                        </> :
                            <>
                                <li className='mb-4'><NavLink to='/dashboard/userHome'> <FaHome></FaHome>User Home</NavLink></li>

                                <li className='mb-4'><NavLink to='/dashboard/reservation'> <FaCalendar></FaCalendar>Reservation</NavLink></li>

                                <li className='mb-4'><NavLink to='/dashboard/paymentHistory'> <FaPaypal />payment history</NavLink></li>

                                <li className='mb-4'><NavLink to='/dashboard/cart'> <FaShoppingCart></FaShoppingCart>My Cart : ({cart.length})</NavLink></li>

                                <li className='mb-4'><NavLink to='/dashboard/review'> <FaAd></FaAd>Add Review</NavLink></li>

                                <li className='mb-4'><NavLink to='/dashboard/booking'> <FaList></FaList>My Booking</NavLink></li>
                            </>
                    }
                    {/* Shared nav links */}
                    <div className="divider"></div>
                    <li className='mb-4'><NavLink to='/'> <FaHome></FaHome>Home</NavLink></li>
                    <li className='mb-4'><NavLink to='/order/salad'> <FaSearch></FaSearch>Menu</NavLink></li>
                    <li className='mb-4'><NavLink to='/order/contact'> <FaEnvelope></FaEnvelope>Contact</NavLink></li>

                </ul>

            </div>
            {/*Dashboard content */}
            <div className='flex-1 p-8'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;