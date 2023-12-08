import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg"

const Menu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro Boos | Menu</title>
            </Helmet>
            <Cover
                img={menuImg}
                title={'Our Menu'}
            ></Cover>
            <h2>This is menu page</h2>
        </div>
    );
};

export default Menu;