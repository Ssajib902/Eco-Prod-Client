import React from 'react'
import { Helmet } from 'react-helmet-async'
import Cover from '../../../Shared/Cover/Cover'
import SectionTitle from '../../../../Components/SectionTitle/SectionTitle'

import menuImg from '../../../../assets/menu/banner3.jpg'
import dessertImg from '../../../../assets/menu/dessert-bg.jpeg'
import soupImg from '../../../../assets/menu/soup-bg.jpg'
import saladImg from '../../../../assets/menu/salad-bg.jpg'
import pizzaImg from '../../../../assets/menu/pizza-bg.jpg'
import useMenu from '../../../../Hooks/useMenu'
import MenuCategory from '../MenuCategory/MenuCategory'

const Menu = () => {
    const [menu] = useMenu();
    const desserts = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');
    return (
        <>
            <Helmet>
                <title>Eco Prod | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu" />

            <SectionTitle
                subHeading="Don't Miss"
                heading="Todays Offer"
            ></SectionTitle>

            <MenuCategory items={offered}></MenuCategory>

            <MenuCategory items={desserts} title="Desserts" img={dessertImg}></MenuCategory>

            <MenuCategory items={soup} title="soup" img={soupImg}></MenuCategory>

            <MenuCategory items={salad} title="salad" img={saladImg}></MenuCategory>

            <MenuCategory items={pizza} title="pizza" img={pizzaImg}></MenuCategory>

        </>
    )
}

export default Menu