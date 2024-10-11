import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from '/logo.svg';
import { IoSearchSharp, IoCartOutline } from 'react-icons/io5';
import { FaRegUser } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import LoginMenu from '../Mega Menu/LoginMenu';
import ThreeDotMenu from '../Mega Menu/ThreeDotMenu';
import ProductsSubMenu from '../Mega Menu/ProductsSubMenu';
import SearchPromotion from '../Mega Menu/SearchPromotion';
import { Apis } from '../App';

function MainHeader() {
    const [isScrolled, setIsScrolled] = useState(false);
    const { SearchBox, setSearchBox, SearchResultQuery, setSearchResultQuery, productDetails, SearchResultdata, setSearchResultdata, trutoken , cartLength   } = useContext(Apis);
    const navigate = useNavigate();

    useEffect(() => {
        const filteredProducts = productDetails.filter(product => product.name && product.name.toLowerCase().includes(SearchResultQuery.toLowerCase()));
        setSearchResultdata(filteredProducts);
    }, [SearchResultQuery, productDetails, setSearchResultdata]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Add this effect to handle scroll restoration on refresh
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    function onEnterFunc(){
        if(event.key === "Enter"){
            navigate    (`/search?name=${SearchResultQuery}`)

        }
    }



    return (
        <>
            <header className={`flex justify-between items-center px-10 py-5 fixed w-full z-[500] ${isScrolled ? 'bg-white shadow' : ''}`}>
                <div className="flex items-center">
                    <Link to='/'><img src={logo} alt="Borobazar" className="mr-2" /></Link>
                    <Link to='/grocery'><span className="px-4 py-2 font-semibold rounded-xl mx-10 bg-green-500 text-white">Grocery</span></Link>
                    <div className="relative">
                        <div className="flex justify-center items-center bg-white rounded-full w-[600px] shadow">
                            <input
                                type="text"
                                onKeyDown={()=>onEnterFunc()}
                                placeholder="Search Products here..."
                                className="px-4 py-2 w-3/4 h-12 rounded-full focus:outline-none text-gray-700 font-semibold"
                                onClick={() => setSearchBox("block")}
                                onChange={(e) => setSearchResultQuery(e.target.value)}
                            />
                            <button className="focus:outline-none">
                                <Link to={`/search?name=${SearchResultQuery}`}><IoSearchSharp className="text-xl text-gray-600" /></Link>
                            </button>
                            <div className="absolute -top-5 -right-[400px] -z-10">
                                <SearchPromotion />
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <ul className="hidden lg:flex">
                            <li className="px-4 font-semibold relative categories-main ml-10 product-menu">
                                <Link to='/search?name='><span>Products</span></Link>
                                <div className='absolute -left-[800%] product-sub-menu'>
                                    <ProductsSubMenu />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="flex items-center">
                        <ul className="flex font-semibold">
                            <li className="relative mx-2">
                                <Link to='/cart'><IoCartOutline className="text-2xl " /></Link>
                                <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900 " style={{display:cartLength>0?"flex":"none"}}>{cartLength}</div>
                            </li>
 
                          



                            <li className="px-4 font-semibold  categories-main cursorpoints" style={{ display: trutoken ? 'none' : 'block' }}><Link to='/login'><span className='flex items-center mx-3'>Login</span></Link>
                                <div className=' loginmenu '><LoginMenu></LoginMenu></div>
                            </li>


                            <li className="px-4 font-semibold  categories-main cursorpoints" style={{ display: trutoken ? 'block' : 'none' }}><Link to='/user'><span className='flex items-center mx-3'><FaRegUser className='mr-2' />User</span></Link>
                                <div className=' loginmenu '><LoginMenu></LoginMenu></div>
                            </li>
                            <li className="threedotbtn mt-1">
                                <span className='flex items-center'><BsThreeDotsVertical /></span>
                                <div className='threedotSubmenu'><ThreeDotMenu /></div>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
}

export default MainHeader;
