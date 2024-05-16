import React, { useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import logo from '/logo.svg';
import { IoSearchSharp } from 'react-icons/io5';
import { IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import LoginMenu from '../Mega Menu/LoginMenu';
import ThreeDotMenu from '../Mega Menu/ThreeDotMenu';
import ProductsSubMenu from '../Mega Menu/ProductsSubMenu';
import SearchPromotion from '../Mega Menu/SearchPromotion';
import { Apis } from '../App';

function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { SearchBox, setSearchBox, SearchResultData, setSearchResultData, categories } = useContext(Apis);
    const [Abhishek, setAbhishek] = useState([])




    useEffect(() => {
        const filteredProducts = categories.map((result) => {
            return result.products.filter(product => product.name && product.name.includes('pants'));
        });


        const filteredAbhishek = filteredProducts.flat();

        setAbhishek(filteredAbhishek);


        console.log("Filtered Abhishek:", filteredAbhishek);
    }, [categories]);




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
            <header className={`flex justify-between items-center px-10 py-5 fixed w-full z-[500]  ${isScrolled ? 'bg-white shadow' : ''}`}>
                {/* Logo and Navigation */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, perferendis!</p>
                <div className="flex items-center">
                    <Link to='/'><img src={logo} alt="Borobazar" className="mr-2" /></Link>
                    <Link to='/grocery'><span className="px-4 py-2 bg-green-200 font-semibold rounded-xl mx-10">Grocery</span></Link>
                    <div className="relative">
                        <div className="flex justify-center items-center bg-white rounded-full w-[600px] shadow ">
                            <input
                                type="text"
                                placeholder="Search Products here..."
                                className="px-4 py-2 w-3/4 h-12 rounded-full focus:outline-none text-gray-700 font-semibold"
                                onClick={() => setSearchBox("block")}
                                onChange={(e) => { setSearchResultData(e.target.value) }}
                            />
                            <button className="focus:outline-none">
                                <Link to='/search'><IoSearchSharp className="text-xl text-gray-600" /></Link>
                            </button>
                            <div className="absolute -top-5  -right-[400px] -z-10 " style={{ display: SearchBox }}><SearchPromotion></SearchPromotion></div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <ul className="hidden lg:flex">
                            <li className="px-4 font-semibold relative categories-main ml-10 product-menu"><Link to='/ecommerceproducts'><span>Products</span></Link>
                                <div className='absolute -right-40 product-sub-menu '>
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
