import React from 'react';
import logo from '/logo.svg';
import { GoPencil } from 'react-icons/go';
import { MdOutlineLocationOn } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import { IoCartOutline } from 'react-icons/io5';
import { IoSearchSharp } from 'react-icons/io5';
import { Outlet, Link } from "react-router-dom";
import HeaderDemo from './HeaderDemo';
import CategoriesSubMenu from '../Mega Menu/CategoriesSubMenu';



function Header() {
    return (
        <>
            <header className="flex justify-between items-center px-10 py-5 sticky top-0 bg-gradient-to-b from-green-200 to-white z-50">
                {/* Logo and Navigation */}
                <div className="flex items-center">
                    <Link to='/'><img src={logo} alt="Borobazar" className="mr-2" /></Link>

                    <ul className="hidden lg:flex">
                        
                        <li className="px-4 font-semibold"><Link to='/shop'>Shops</Link></li>
                        <li className="px-4 font-semibold">Pages</li>
                        <li className="px-4 font-semibold relative categories-main" >Categories
                            <div className='absolute  -left-32 top-5 categories-sub '><CategoriesSubMenu></CategoriesSubMenu></div></li>
                    </ul>
                </div>
                {/* <Link to="/contact">Contact</Link> */}
                {/* Search Bar */}
                <div className="flex justify-center items-center bg-white rounded-full w-96 shadow">
                    <input
                        type="text"
                        placeholder="Search Grocery here..."
                        className="px-4 py-2 w-3/4 h-12 rounded-full focus:outline-none text-gray-700 font-semibold"
                    />
                    <button className="focus:outline-none">
                        <IoSearchSharp className="text-xl text-gray-600" />
                    </button>
                </div>

                {/* User Actions */}
                <div className="flex items-center">
                    {/* Location */}
                    <div className="flex items-center mx-5">
                        <MdOutlineLocationOn />
                        <span className="ml-1">Delivering at</span>
                        <div className="flex items-center">
                            <span className="text-blue-600 ml-1">302001</span>
                            <GoPencil className="text-gray-500 ml-1" />
                        </div>
                    </div>
                    {/* User Icons */}
                    <ul className="flex font-semibold">
                        <li className="mx-2">
                            <IoMdHeart className="text-2xl text-red-800" />
                        </li>
                        <li className="mx-2">
                            <Link to='/cart'><IoCartOutline className="text-2xl" /></Link>
                        </li>
                        <li className="mx-2">
                            <Link to='/login'><span className="cursor-pointer">Sign In</span></Link>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
}

export default Header;
