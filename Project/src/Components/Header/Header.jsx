import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
    const [filter, setFilter] = useState('');

    return (
        <div>
            <header className="shadow sticky z-50 top-0">
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

                        {/* Logo */}
                        <Link to="/" className="flex items-center order-1">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>

                        {/* Home Link */}
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                `order-2 block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                            }
                        >
                            Home
                        </NavLink>

                        {/* Search Bar */}
                        <div className="order-3 flex justify-center w-full lg:w-auto lg:flex-1 lg:mx-4">
                            <input
                                type="text"
                                placeholder="Search your Favourite"
                                value={filter}
                                onChange={(e) => setFilter(e.target.value)}
                                className="p-3 w-full max-w-xl border border-gray-300 rounded-[19px] shadow-sm focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition duration-300"
                            />
                        </div>

                        {/* Login and Sign Up */}
                        <div className="order-4 flex items-center lg:order-4">
                            <Link
                                to="/login"
                                className="text-gray-800 hover:bg-gray-200 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Log in
                            </Link>
                            <Link
                                to="/signup"
                                className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                            >
                                Sign UP
                            </Link>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}
