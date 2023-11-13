import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg';
import dessertImg from '../../../assets/menu/dessert-bg.jpeg';
import useMenu from '../../../Hooks/useMenu';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuCategory from '../MenuCategory/MenuCategory';
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'


const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const soup = menu.filter(item => item.category === 'soup');
    const pizza = menu.filter(item => item.category === 'pizza');
    const dessert = menu.filter(item => item.category === 'dessert');
    const salad = menu.filter(item => item.category === 'salad');

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'OUR MENU'}
                description={'Would you like to try a dish?'}
            ></Cover>
            {/* main covers */}
            <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"}></SectionTitle>
            {/* offered menu items */}
            <MenuCategory items={offered}></MenuCategory>
            {/* desert menu items */}
            <MenuCategory
                items={dessert}
                title="Dessert"
                img={dessertImg}
            ></MenuCategory>
            {/* fizza menu items */}
            <MenuCategory
                items={pizza}
                title="pizza"
                img={pizzaImg}
            ></MenuCategory>
            {/* salad menu items */}
            <MenuCategory
                items={salad}
                title="salad"
                img={saladImg}
            ></MenuCategory>
            {/* soup menu items */}
            <MenuCategory
                items={soup}
                title="soup"
                img={soupImg}
            ></MenuCategory>
        </div>
    );
};

export default Menu;