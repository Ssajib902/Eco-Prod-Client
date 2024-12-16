import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Menu from "../pages/Home/Menu/Menu/Menu";
import Order from "../pages/Home/Order/Order";
import ContactUs from "../pages/ContactUs/ContactUs";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRoutes from "../routes/PrivateRoutes";
import Secret from "../pages/Shared/Secret/Secret";
import Cart from "../pages/Cart/Cart";
import Dashboard from "../Layout/Dashboard";
import AllUsers from "../pages/Dashboard/All Users/AllUsers";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Payment from "../pages/Dashboard/Payment/Payment";
import About from "../pages/Home/About/About";

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
            path: '/about-us',
            element: <About />
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
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        },
        {
          path: '/secret',
          element: <PrivateRoutes><Secret /></PrivateRoutes>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        },
        
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard /></PrivateRoutes>,
      children: [
        // Normal User
        {
          path: 'cart',
          element: <Cart />
        },
        {
          path: 'payment',
          element: <Payment />
        },

        // admin routes
        {
          path: 'addItems',
          element: <AdminRoute><AddItems /></AdminRoute>
        },
        {
          path: 'manageItems',
          element: <AdminRoute><ManageItems /> </AdminRoute>
        },
        {
          path: 'updateItem/:id',
          element: <AdminRoute><UpdateItem /></AdminRoute>,
          loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`),
        },
        {
          path: 'allusers',
          element: <AdminRoute><AllUsers /></AdminRoute>
        },

      ]
    }
  ]);
