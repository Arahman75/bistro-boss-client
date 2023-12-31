// import React, { useContext } from 'react';
// import useAuth from '../../Hooks/useAuth';
// import { AuthContext } from '../../provider/AuthProvider';
// import Swal from 'sweetalert2';
// import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import useAxiosSecure from '../../Hooks/useAxiosSecure';
// import useCarts from '../../Hooks/useCarts';

// const FoodCart = ({ item }) => {
//     // const { user } = useAuth;
//     const { user } = useContext(AuthContext)
//     const { name, price, image, recipe, _id } = item;
//     const navigate = useNavigate();
//     const location = useLocation();
//     const axiosSecure = useAxiosSecure();
//     const [, refetch] = useCarts();
//     // const from = location.state?.from?.pathname || "/";

//     // const handleAddToCart = (food) => {
//     const handleAddToCart = () => {
//         if (user && user.email) {
//             // send item to the database
//             console.log(user.emil);
//             const cartItem = {
//                 menuId: _id,
//                 email: user.email,
//                 image,
//                 name,
//                 price
//             }
//             // axios.post('http://localhost:5000/carts', cartItem)
//             axiosSecure.post('/carts', cartItem)
//                 .then(res => {
//                     console.log(res.data);
//                     if (res.data.insertedId) {
//                         Swal.fire({
//                             position: "top-end",
//                             icon: "success",
//                             title: `${name} added to your carts`,
//                             showConfirmButton: false,
//                             timer: 1500
//                         });
//                         // refetch the cart to update the items cart
//                         refetch();
//                     }
//                 })

//         }
//         else {
//             Swal.fire({
//                 title: "You are not logged In?",
//                 text: "Please login to add to the cart",
//                 icon: "warning",
//                 showCancelButton: true,
//                 confirmButtonColor: "#3085d6",
//                 cancelButtonColor: "#d33",
//                 confirmButtonText: "Yes, login!"
//             }).then((result) => {
//                 if (result.isConfirmed) {
//                     // send the user to the login
//                     navigate('/login', { state: { from: location } })
//                 }
//             });
//         }

//     }

//     return (
//         <div className="card bg-base-100 shadow-xl">
//             <figure><img className='w-full' src={image} alt="Shoes" /></figure>
//             <p className='text-white bg-slate-700 absolute right-0 mr-4 mt-4 px-4'>${price}</p>
//             <div className="card-body">
//                 <h2 className="card-title">{name}</h2>
//                 <p>{recipe}</p>
//                 <div className='flex items-center justify-center'>
//                     {/* <button onClick={() => handleAddToCart(item)} className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to Cart</button> */}
//                     <button onClick={handleAddToCart} className="btn btn-outline border-0 border-b-4 mt-4 border-orange-500">Add to Cart</button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default FoodCart;

import React from 'react';
import useAuth from '../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useCarts from '../../Hooks/useCarts';

const FoodCart = ({ item }) => {
    const { image, price, name, recipe, _id } = item;
    const [, refetch] = useCarts();
    const { user } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxiosSecure();


    const handleAddToCart = () => {
        // console.log(food, user.email)
        if (user && user?.email) {
            // sent cart items to the database
            // console.log(user.email, food);
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            // axios.post('http://localhost:5000/carts', cartItem)
            // use axiosSecure hook useAxiosSecure
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertedId
                    ) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} Added to my cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        // to update the refetch cart count
                        refetch();
                    }
                })

        }
        else {
            Swal.fire({
                title: "You are not logged In",
                text: "Please login to add to the cart?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, Login!"
            }).then((result) => {
                if (result.isConfirmed) {
                    // Send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }
    }
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img className='w-full' src={image} alt="Shoes" /></figure>
            <p className='text-white bg-slate-700 absolute right-0 mr-4 mt-4 px-4'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">

                    {/* <button onClick={() => handleAddToCart(item)}  */}
                    <button onClick={handleAddToCart}
                        className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCart;