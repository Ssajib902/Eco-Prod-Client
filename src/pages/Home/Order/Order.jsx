// import React, { useState } from "react";
// import orderCover from "../../../assets/shop/order.jpg";
// import Cover from "../../Shared/Cover/Cover";
// import "react-tabs/style/react-tabs.css";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import useMenu from "../../../Hooks/useMenu";
// import { OrderTab } from "./OrderTab";
// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Order = () => {
//   const categories = [
//     "salad",
//     "pizza",
//     "soup",
//     "dessert",
//     "drink",
//     "wooden",
//     "vegetables",
//     "clothes",
//     "bamboo",
//   ];
//   const { category } = useParams();
//   const initialIndex = categories.indexOf(category);
//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menu] = useMenu();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredMenu = menu.filter((item) =>
//     item.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <>
//       <Helmet>
//         <title>Eco Prod | Order Products</title>
//       </Helmet>

//       <form className="flex items-center max-w-xl mx-auto p-10" onSubmit={(e) => e.preventDefault()}>
//         <label htmlFor="simple-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative w-full">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
//           <input
//             type="text"
//             id="simple-search"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-orange-400 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search items..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
//         >
//           <svg
//             className="w-4 h-4"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//           <span className="sr-only">Search</span>
//         </button>
//       </form>

//       <div>
//         {searchQuery ? (
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
//             {filteredMenu.map((item) => (
//               <OrderTab key={item.id} items={[item]}></OrderTab>
//             ))}
//           </div>
//         ) : (
//           <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//             <hr />
//             <TabList className="text-center mt-7 mb-7 font-serif font-extrabold text-2xl">
//               <Tab>Salad</Tab>
//               <Tab>Pizza</Tab>
//               <Tab>Soup</Tab>
//               <Tab>Desserts</Tab>
//               <Tab>Drinks</Tab>
//               <Tab>Vegetables</Tab>
//               <Tab>Fishes</Tab>
//               <Tab>Meats</Tab>
//               <Tab>Wooden</Tab>
//               <Tab>Clothes</Tab>
//               <Tab>Bamboo</Tab>
//             </TabList>
//             <hr className="mb-5" />
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "salad")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "pizza")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "soup")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "dessert")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "drinks")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "vegetables")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "fishes")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "meats")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "wooden")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "clothes")}></OrderTab>
//             </TabPanel>
//             <TabPanel>
//               <OrderTab items={menu.filter((item) => item.category === "bamboo")}></OrderTab>
//             </TabPanel>
//           </Tabs>
//         )}
//       </div>
//     </>
//   );
// };

// export default Order;






























// import React, { useState } from "react";
// // import orderCover from "../../../assets/shop/order.jpg";
// // import Cover from "../../Shared/Cover/Cover";
// import "react-tabs/style/react-tabs.css";
// import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
// import useMenu from "../../../Hooks/useMenu";
// import { OrderTab } from "./OrderTab";
// import { useParams } from "react-router-dom";
// import { Helmet } from "react-helmet-async";

// const Order = () => {
//   const categories = [
//     "salad",
//     "pizza",
//     "soup",
//     "dessert",
//     "drink",
//     "wooden",
//     "vegetables",
//     "clothes",
//     "bamboo",
//   ];
//   const { category } = useParams();
//   const initialIndex = categories.indexOf(category);
//   const [tabIndex, setTabIndex] = useState(initialIndex);
//   const [menu] = useMenu();
//   const [searchQuery, setSearchQuery] = useState("");

//   const filteredMenu = (items) => {
//     return items.filter((item) =>
//       item.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   };

//   const desserts = filteredMenu(menu.filter((item) => item.category === "dessert"));
//   const soup = filteredMenu(menu.filter((item) => item.category === "soup"));
//   const salad = filteredMenu(menu.filter((item) => item.category === "salad"));
//   const pizza = filteredMenu(menu.filter((item) => item.category === "pizza"));
//   const drinks = filteredMenu(menu.filter((item) => item.category === "drinks"));
//   const vegetables = filteredMenu(menu.filter((item) => item.category === "vegetables"));
//   const fishes = filteredMenu(menu.filter((item) => item.category === "fishes"));
//   const meats = filteredMenu(menu.filter((item) => item.category === "meats"));
//   const wooden = filteredMenu(menu.filter((item) => item.category === "wooden"));
//   const clothes = filteredMenu(menu.filter((item) => item.category === "clothes"));
//   const bamboo = filteredMenu(menu.filter((item) => item.category === "bamboo"));

//   return (
//     <>
//       <Helmet>
//         <title>Eco Prod | Order Products</title>
//       </Helmet>

//       <form className="flex items-center max-w-xl mx-auto p-10" onSubmit={(e) => e.preventDefault()}>
//         <label htmlFor="simple-search" className="sr-only">
//           Search
//         </label>
//         <div className="relative w-full">
//           <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
//           <input
//             type="text"
//             id="simple-search"
//             className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-orange-400 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//             placeholder="Search items..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
//         >
//           <svg
//             className="w-4 h-4"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 20 20"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//             />
//           </svg>
//           <span className="sr-only">Search</span>
//         </button>
//       </form>

//       <div>
//         {/* <Cover img={orderCover} title="Order Product"></Cover> */}
//         <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
//           <hr />
//           <TabList className="text-center mt-7 mb-7 font-serif font-extrabold text-2xl">
//             <Tab>Salad</Tab>
//             <Tab>Pizza</Tab>
//             <Tab>Soup</Tab>
//             <Tab>Desserts</Tab>
//             <Tab>Drinks</Tab>
//             <Tab>Vegetables</Tab>
//             <Tab>Fishes</Tab>
//             <Tab>Meats</Tab>
//             <Tab>Wooden</Tab>
//             <Tab>Clothes</Tab>
//             <Tab>Bamboo</Tab>
//           </TabList>
//           <hr className="mb-5" />
//           <TabPanel>
//             <OrderTab items={salad}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={pizza}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={soup}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={desserts}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={drinks}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={vegetables}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={fishes}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={meats}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={wooden}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={clothes}></OrderTab>
//           </TabPanel>
//           <TabPanel>
//             <OrderTab items={bamboo}></OrderTab>
//           </TabPanel>
//         </Tabs>
//       </div>
//     </>
//   );
// };

// export default Order;




import React, { useState } from "react";
// import orderCover from "../../../assets/shop/order.jpg";
// import Cover from "../../Shared/Cover/Cover";
import "react-tabs/style/react-tabs.css";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import useMenu from "../../../Hooks/useMenu";
import { OrderTab } from "./OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
  const categories = [
    "salad",
    "pizza",
    "soup",
    "dessert",
    "drink",
    "wooden",
    "vegetables",
    "clothes",
    "bamboo",
  ];

  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter menu items globally based on the search query
  const globalFilteredMenu = searchQuery
    ? menu.filter((item) =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : menu;

  // Categorize the filtered menu items
  const categorizedItems = categories.reduce((acc, category) => {
    acc[category] = globalFilteredMenu.filter((item) => item.category === category);
    return acc;
  }, {});

  return (
    <>
      <Helmet>
        <title>Eco Prod | Order Products</title>
      </Helmet>

      <form
        className="flex items-center max-w-xl mx-auto p-10"
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="simple-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"></div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-orange-400 dark:border-gray-600 dark:placeholder-white dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-orange-400 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-orange-400 dark:hover:bg-orange-600 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h-4"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
      </form>

      <div>
        {/* <Cover img={orderCover} title="Order Product"></Cover> */}
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <hr />
          <TabList className="text-center mt-7 mb-7 font-serif font-extrabold text-2xl">
            {categories.map((cat) => (
              <Tab key={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</Tab>
            ))}
          </TabList>
          <hr className="mb-5" />
          {categories.map((cat) => (
            <TabPanel key={cat}>
              <OrderTab items={categorizedItems[cat]}></OrderTab>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </>
  );
};

export default Order;
