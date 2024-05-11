import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import logo from '/logo.svg';
import { IoSearchSharp } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import LoginMenu from '../Mega Menu/LoginMenu';
import ThreeDotMenu from '../Mega Menu/ThreeDotMenu';
import ProductsSubMenu from '../Mega Menu/ProductsSubMenu';

function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            if (scrollPosition > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={`flex justify-between items-center px-10 py-5 fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow' : ''}`}>
                {/* Logo and Navigation */}
                <div className="flex items-center">
                    <Link to='/'><img src={logo} alt="Borobazar" className="mr-2" /></Link>
                    <Link to='/grocery'><span className="px-4 py-2 bg-green-200 font-semibold rounded-xl mx-10">Grocery</span></Link>
                    <div className="flex justify-center items-center bg-white rounded-full w-[600px] shadow ">
                        <input
                            type="text"
                            placeholder="Search Products here..."
                            className="px-4 py-2 w-3/4 h-12 rounded-full focus:outline-none text-gray-700 font-semibold"
                        />
                        <button className="focus:outline-none">
                            <IoSearchSharp className="text-xl text-gray-600" />
                        </button>
                    </div>

                    <div className="flex items-center">
                        <ul className="hidden lg:flex">
                            <li className="px-4 font-semibold relative categories-main ml-10 product-menu"><Link to='/ecommerceproducts'><span>Products</span></Link>
                                <div className='absolute -right-10 product-sub-menu'>
                                    <ProductsSubMenu></ProductsSubMenu>
                                </div></li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex font-semibold">
                            <li className="mx-2">
                                <Link to='/cart'><IoCartOutline className="text-2xl" /></Link>
                            </li>
                            <li className="px-4 font-semibold  categories-main cursorpoints" ><Link to='/login'><span className='flex items-center mx-3'><FaRegUser className='mr-2' />User</span></Link>
                                <div className=' loginmenu '><LoginMenu></LoginMenu></div>
                            </li>
                            <li className="threedotbtn mt-1 " ><span className='flex items-center '><BsThreeDotsVertical className=' ' /></span>
                                <div className=' threedotSubmenu '><ThreeDotMenu></ThreeDotMenu></div>
                            </li>
                        </ul>
                    </div>
                </div>

            </header>
        </>
    )
}

export default MainHeader;
