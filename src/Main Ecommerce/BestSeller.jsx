import React, { useContext, useState } from 'react';
import { FaCircle } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";
import { Apis } from '../App';
import { Link } from 'react-router-dom';





function BestSeller() {


    const { categories } = useContext(Apis);





    const filteredProducts = categories.flatMap(category => (
        category.products.filter(product => product.top_selling === true)
    ));





    return (
        <>
            <div className='text-center py-20'>
                <p className='text-5xl pb-2'>BEST SELLER</p>
                <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>

            <div className='grid grid-cols-4 gap-x-4 pl-7 gap-y-10 pb-12'>
                {filteredProducts.map(product => (
                    <div className="product-Div">
                        <div className="card  h-[350px]  relative overflow-hidden rounded-lg" >
                            <img src={product.image_url} className='h-full w-[90%]  rounded-lg .roboto-serif-text  bg-red-200 relative z-20 hover:z-0 ' alt={product.title} />
                            <img src='https://img101.urbanic.com/v1/goods-pic/18a5a20039a64497ac6afb176e7c6b70UR_w1440_q90.webp' className='h-full w-[90%]  rounded-lg .roboto-serif-text  bg-red-200 absolute top-0  z-10 hover:z-30' alt={product.title} />


                            <div className={product.discount_price === null ? "hidden" : "font-semibold"}><p className='bg-[#FC5732] text-white px-3  absolute rounded-xl top-3 right-10 z-50'>{product.percent_off}% OFF</p></div>
                        </div>
                        <div className=' w-[90%] pt-3'>
                            <p>{product.name}</p>
                            <div className='flex [&>p]:pr-3'>
                                <p className={product.discount_price === null ? "line" : "line-through text-gray-500"}>RS {product.regular_price}</p>
                                <p className={product.discount_price === null ? "hidden" : "font-semibold"}>RS {product.discount_price}</p>
                            </div>

                            <p className='line-through	'></p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button className='  border-2 w-40 py-2 border-black hover:text-red-300 hover:border-red-300'>Load More</button>
            </div>
        </>
    )
}

export default BestSeller;
