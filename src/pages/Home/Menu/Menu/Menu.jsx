import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../../Shared/Cover/Cover";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";

import menuImg from "../../../../assets/menu/banner3.jpg";
import dessertImg from "../../../../assets/menu/dessert-bg.jpeg";
import soupImg from "../../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../../assets/menu/salad-bg.jpg";
import pizzaImg from "../../../../assets/menu/pizza-bg.jpg";
import useMenu from "../../../../Hooks/useMenu";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const vegetables = menu.filter((item) => item.category === "vegetables");
  const fishes = menu.filter((item) => item.category === "fishes");
  const meats = menu.filter((item) => item.category === "meats");
  const wooden = menu.filter((item) => item.category === "wooden");
  const clothes = menu.filter((item) => item.category === "clothes");
  const bamboo = menu.filter((item) => item.category === "bamboo");
  return (
    <>
      <div className="mb-10">
        <Helmet>
          <title>Eco Prod | Menu</title>
        </Helmet>
        <Cover img={menuImg} title="Our Menu" />

        <SectionTitle
          subHeading="Don't Miss"
          heading="Todays Offer"
        ></SectionTitle>

        <MenuCategory 
        items={offered}
        ></MenuCategory>

        {/* <MenuCategory
          items={desserts}
          title="Desserts"
          img={dessertImg}
        ></MenuCategory>

        <MenuCategory 
        items={soup} 
        title="soup" 
        img={soupImg}
        ></MenuCategory>

        <MenuCategory 
        items={salad} 
        title="salad" 
        img={saladImg}
        ></MenuCategory>

        <MenuCategory 
        items={pizza} 
        title="pizza" 
        img={pizzaImg}
        ></MenuCategory> */}

        <MenuCategory
          items={vegetables}
          title="vegetables"
          img={saladImg}
        ></MenuCategory>

        <MenuCategory
          items={fishes}
          title="fishes"
          img={pizzaImg}
        ></MenuCategory>

        <MenuCategory 
        items={meats} 
        title="meats" 
        img={saladImg}
        ></MenuCategory>

        <MenuCategory
          items={wooden}
          title="wooden"
          img={pizzaImg}
        ></MenuCategory>

        <MenuCategory
          items={clothes}
          title="clothes"
          img={saladImg}
        ></MenuCategory>

        <MenuCategory
          items={bamboo}
          title="bamboo"
          img={pizzaImg}
        ></MenuCategory>
      </div>
    </>
  );
};

export default Menu;
