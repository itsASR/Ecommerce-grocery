import React, { useContext, useEffect, useState } from 'react';
import { Apis } from '../App';

function ProductsForMobile() {
    const { categories } = useContext(Apis);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const allProducts = categories.flatMap(category => category.products);
        setProducts(allProducts);
    }, [categories]);

    console.log("filteredProducts", products);

    return (
        <>
            <div className='md:hidden'>
            <div className='text-center md:py-20 py-10'>
                <p className='md:text-5xl pb-2 pl-5 md:pl-0'>Our Collection</p>
                <div className='border-b mx-16 border-black md:hidden'></div>
                
            </div>
            <div className='grid overflow-hidden grid-cols-2 sm:grid-cols-3  md:grid-cols-3 lg:grid-cols-4  gap-4 pb-12'>
                {products.map(product => (
                    <div key={product.id} className="product-div mx-auto">
                        <div className="card md:h-[350px] h-40 w-40 md:w-full relative overflow-hidden rounded-lg">
                            <img src={product.image_url} className='h-full w-full rounded-lg bg-red-200 relative z-20 hover:z-0 object-cover' alt={product.title} />
                            <img src='https://img101.urbanic.com/v1/goods-pic/18a5a20039a64497ac6afb176e7c6b70UR_w1440_q90.webp' className='h-full w-full rounded-lg bg-red-200 absolute top-0 z-10 hover:z-30 object-cover' alt={product.title} />
                            {product.discount_price && (
                                <div className="font-semibold">
                                    <p className='bg-[#FC5732] text-white px-2 md:px-3 md:text-md text-xs absolute rounded-xl top-3 right-3 z-50'>
                                        {product.percent_off}% OFF
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className='pt-3'>
                            <p>{product.name}</p>
                            <div className='flex items-center'>
                                <p className={product.discount_price ? "line-through text-gray-500 pr-3" : ""}>
                                    RS {product.regular_price}
                                </p>
                                {product.discount_price && (
                                    <p className="font-semibold">
                                        RS {product.discount_price}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            </div>
        </>
    );
}

export default ProductsForMobile;
