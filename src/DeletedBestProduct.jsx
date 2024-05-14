import React, { useContext, useState } from 'react';
import { FaCircle } from "react-icons/fa";
import { IoHeartCircleOutline } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { Apis } from './App';

function BestSeller() {
    const { categories } = useContext(Apis);
    const [bestSellerPro, setBestSellerPro] = useState([]);

    const filteredProducts = categories.flatMap(category => (
        category.products.filter(product => product.promoted === true)
    ));

    return (
        <>
            <div className='text-center py-20'>
                <p className='text-5xl pb-2'>New Arrival</p>
                <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>
            <div className='grid grid-cols-4 gap-x-4 pl-7 gap-y-10 pb-12'>
                {filteredProducts.map((product, index) => (
                    <div className="product-Div" key={index}>
                        <div className="card h-[350px] relative overflow-hidden">
                            <img src={product.image_url} className='h-full' alt={product.title} />
                          
                        </div>
                        <div>
                            <p className='pt-2'>{product.title}</p>
                            <p>Rs {product.regular_price}</p>
                            <div className="color-variant flex [&>*]:mr-2 pt-1">
                                {product.colors.map((color, idx) => (
                                    <FaCircle className='border-[1px] border-black rounded-full' style={{ color: color }} key={idx} />
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className='text-center'>
                <button className='border-2 w-40 py-2 border-black hover:text-red-300 hover:border-red-300'>Load More</button>
            </div>
        </>
    )
}

export default BestSeller;
