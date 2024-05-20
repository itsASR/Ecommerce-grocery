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
import { MdAccountCircle } from "react-icons/md";

function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { SearchBox, setSearchBox,  SearchResultQuery , setSearchResultQuery , categories, SearchResultdata , setSearchResultdata } = useContext(Apis);
    




    useEffect(() => {
        const filteredProducts = categories.map((result) => {
            return result.products.filter(product => product.name && product.name.toLowerCase().includes(SearchResultQuery.toLowerCase()));
        });


        const filtereddata = filteredProducts.flat();
        setSearchResultdata(filtereddata)
      


        console.log("Filtered Abhishek:", filtereddata);
        
        
    }, [SearchResultQuery]);




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
            <header className={`md:flex hidden w-screen  justify-between items-center px-10 py-5 fixed z-[500]  ${isScrolled ? 'bg-white shadow' : ''}`}>
                <div className="flex items-center">
                    <Link to='/'><img src={logo} alt="Borobazar" className="mr-2" /></Link>
                    <Link to='/grocery'><span className="px-4 py-2  font-semibold rounded-xl mx-10 bg-green-500 text-white ">Grocery</span></Link>
                    <div className="w-[600px] ">
                        <div className="flex justify-center items-center bg-white rounded-full shadow ">
                            <input
                                type="text"
                                placeholder="Search Products here..."
                                className="px-4 py-2 w-3/4 h-12 rounded-full focus:outline-none text-gray-700 font-semibold"
                                onClick={() => setSearchBox("block")}
                                onChange={(e) => { setSearchResultQuery(e.target.value) }}
                            />
                            <button className="focus:outline-none">
                                <Link to={`/search?name=${SearchResultQuery}`}><IoSearchSharp className="text-xl text-gray-600" /></Link>
                            </button>
                            <div className="absolute -top-5  -right-[0px] -z-10 " ><SearchPromotion></SearchPromotion></div>
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
            <div className={`md:hidden w-screen   z-[500] `} style={{position:SearchResultQuery.length > 0 ? "fixed" : "static" }}>
            <div className="flex justify-between items-center px-4 pt-2">
            <Link to='/'><img src={logo} alt="Company Logo" className="h-8" /></Link>
                <MdAccountCircle className="text-5xl text-gray-700" />
            </div>
            <div className="mt-4 flex justify-center pb-2">
                <input
                    type="text"
                    placeholder="Search Products here..."
                    className="px-4 py-2 w-3/4 h-12 rounded-l-xl focus:outline-none text-gray-700 font-semibold bg-gray-200"
                    onClick={() => setSearchBox("block")}
                    onChange={(e) => { setSearchResultQuery(e.target.value) }}
               />
                <button className="px-4 h-12 bg-gray-200 rounded-r-xl focus:outline-none">
                <Link to={`/search?name=${SearchResultQuery}`}><IoSearchSharp className="text-3xl text-gray-700" /></Link>
                </button>
                <div className="absolute -top-5  -right-[0px] -z-10 " ><SearchPromotion></SearchPromotion></div>
            </div>
        </div>
        </>
    )
}

export default MainHeader;
