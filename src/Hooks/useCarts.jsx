// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";
// import { AuthContext } from "../provider/AuthProvider";
// import { useContext } from "react";

// const useCarts = () => {
//    const axiosSecure = useAxiosSecure()
//    const { user } = useContext(AuthContext);
//    // tan stack query
//    const { refetch, data: cart = [] } = useQuery({
//       queryKey: ['cart'],
//       queryFn: async () => {
//          const res = await axiosSecure.get(`/carts?email=${user?.email}`);
//          return res.data;
//       }
//    })
//    return [cart, refetch]
// };

// export default useCarts;


import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';


const useCarts = () => {
   const axiosSecure = useAxiosSecure();
   // tankstack query
   const { data: cart = [] } = useQuery({
      queryKey: ['cart'],
      queryFn: async () => {
         const res = await axiosSecure.get('/carts')
         return res.data;
      },
   })


   return [cart]
};

export default useCarts;