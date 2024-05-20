import React, { useContext } from 'react';
import { FaCircle } from "react-icons/fa";
import { Apis } from '../App';

function LatestArrival() {
    const { categories } = useContext(Apis);

    const filteredProducts = categories.flatMap(category => (
        category.products.filter(product => product.promoted === true)
    ));

    return (
        <>
            <div className='text-center md:py-20 py-10'>
                <p className='md:text-5xl pb-2  pl-5 md:pl-0'>New Arrival</p>
                <div className='border-b mx-16 border-black md:hidden'></div>
                <p className='hidden md:block'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>
            <div className='md:grid flex overflow-scroll md:overflow-hidden md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-12'>
                {filteredProducts.map((product, index) => (
                    <div className="product-Div" key={index}>
                        <div className="card md:h-[350px] h-40 w-40 md:w-full relative overflow-hidden rounded-lg">
                            <img src={product.image_url} className='h-full w-full object-cover' alt={product.title} />
                        </div>
                        <div className='pt-2'>
                            <p>{product.title}</p>
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
                <button className='hidden md:block text-center mx-auto border-2 w-40 py-2 border-black hover:text-red-300 hover:border-red-300'>
                    Load More
                </button>
            </div>
        </>
    )
}

export default LatestArrival;
