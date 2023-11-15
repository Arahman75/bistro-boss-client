import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer';
import NavBar from '../pages/Shared/NavBar';

const Main = () => {
    const location = useLocation()
    const noHeaderFooter = location.pathname.includes('/login')
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
            <Outlet></Outlet>
            {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;