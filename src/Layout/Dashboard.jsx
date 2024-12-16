import React from 'react'
import { FaBook, FaCalendar, FaHistory, FaHome, FaList, FaPhone, FaShoppingCart, FaStar, FaThList, FaUsers, FaUtensils } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'
import { NavLink, Outlet } from 'react-router-dom'
import useCart from '../Hooks/useCart'
import useAdmin from '../Hooks/useAdmin'

const Dashboard = () => {
    const [cart] = useCart();

    // Get admin value from the database
    const [isAdmin] = useAdmin();

    return (
        <>
            <div className='flex'>
                {/* Dashboard side bar */}
                <div className="w-64 min-h-screen bg-orange-600 text-white">
                    <ul className="menu p-4">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to="/dashboard/adminHome"><FaHome /> Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItems"><FaUtensils /> Add Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageitems"><FaThList /> Manage Items</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allusers"><FaUsers /> All Users</NavLink>
                                </li>
                            </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome"><FaHome /> User Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/reservation"><FaCalendar /> Reservation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentHistory"><FaHistory /> Payment History</NavLink>
                                    </li>

                                    <li>
                                        <NavLink to="/dashboard/cart"><FaShoppingCart /> My Cart ({cart.length})</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/review"><FaStar /> Add Review</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/booking"><FaListCheck /> My Booking</NavLink>
                                    </li>
                                </>
                        }

                        {/* shared nav links */}
                        <div className='divider'></div>
                        <li>
                            <NavLink to="/"><FaHome /> Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad"><FaList /> Menu</NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/contact"><FaPhone /> Contact</NavLink>
                        </li>
                    </ul>
                </div>
                {/* Dashboard content */}
                <div className='flex-1 p-8'>
                    <Outlet />
                </div>
            </div>
        </>
    )
}

export default Dashboard


