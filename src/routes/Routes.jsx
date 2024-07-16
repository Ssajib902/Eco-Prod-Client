import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Home/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Dashboard from "../pages/Dashboard/Dashboard";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/contact-us',
            element: <ContactUs />
        },
        {
            path: '/dashboard',
            element: <Dashboard />
        },
        {
          path: 'menu',
          element: <Menu />
        },
        {
          path: 'order/:category',
          element: <Order />
        },
      ]
    },
  ]);
