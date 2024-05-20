import React, { useContext } from 'react';
import { IoClose } from "react-icons/io5";
import { Apis } from '../App';
import { Link } from 'react-router-dom';

function SearchPromotion() {
    const { setSearchBox, SearchResultQuery, SearchResultdata } = useContext(Apis);

    return (
        <>
            <div className='py-20 bg-white w-screen' style={{ display: SearchResultQuery.length > 0 ? "block" : "none" }}>
                <div className='absolute w-screen mx-auto flex justify-center' style={{ display: SearchResultQuery.length > 1 ? "flex" : "none" }}>
                    <div className="w-full max-w-md p-4 bg-white pt-20 border border-gray-200 rounded-lg shadow sm:p-8 ">
                        <div className="flex items-center justify-between mb-4">
                            <h5 className="text-xl font-bold leading-none text-gray-900  ">{SearchResultQuery}</h5>
                            <Link to={`/search?name=${SearchResultQuery}`}><span className="text-sm font-medium text-blue-600 hover:underline ">
                                View all
                            </span></Link>
                        </div>
                        <div className="flow-root">
                            <ul role="list" className="divide-y divide-gray-200 ">
                                {SearchResultdata.map((products) => (
                                    <li key={products.id} className="py-3 sm:py-4">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0">
                                                <img className="w-8 h-8 rounded-full" src={products.image_url} alt="Neil image" />
                                            </div>
                                            <div className="flex-1 min-w-0 ms-4">
                                                <p className="text-sm font-medium text-gray-900 truncate ">
                                                    {products.title}
                                                </p>

                                            </div>

                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-start overflow-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                    <div className="w-full md:w-[400px] text-center p-4">
                        <h1 className="text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4">Mens</h1>
                        <ul className="text-sm py-5 [&>li]:py-1">
                            <li>Bathrobes</li>
                            <li>Trench Coats</li>
                            <li>Jackets</li>
                            <li>Jeans</li>
                            <li>Lounge & Sleepwear</li>
                            <li>Pants</li>
                            <li>Polos</li>
                            <li>Shirts</li>
                            <li>Shorts</li>
                            <li>Socks</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[400px] text-center p-4">
                        <h1 className="text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4">Womens</h1>
                        <ul className="text-sm py-5 [&>li]:py-1">
                            <li>Briefcase Bags</li>
                            <li>Crossbody Bags</li>
                            <li>Duffle Bags</li>
                            <li>Messenger Bags</li>
                            <li>Totes</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-[400px] text-center p-4">
                        <h1 className="text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4">Kids</h1>
                        <ul className="text-sm py-5 [&>li]:py-1">
                            <li>Lace Ups & Dress Shoes</li>
                            <li>Loafers & Drivers</li>
                            <li>Sandals & Floaters</li>
                            <li>Slippers & Slides</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SearchPromotion;
