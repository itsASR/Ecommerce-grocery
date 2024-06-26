import React, { useContext } from 'react';
import { Apis } from '../App';

function BestSeller() {
    const { categories } = useContext(Apis);

    const filteredProducts = categories.flatMap(category => (
        category.products.filter(product => product.top_selling === true)
    ));

    return (
        <>
            <div className='text-center md:py-20 py-10'>
                <p className='md:text-5xl pb-2  pl-5 md:pl-0'>BEST SELLER</p>
                <div className='border-b mx-16 border-black md:hidden'></div>
                <p className='hidden md:block'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>

            <div className='md:grid flex overflow-scroll md:overflow-hidden md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-12'>
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-Div">
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
            <div className='text-center'>
                <button className='hidden md:block text-center mx-auto border-2 w-40 py-2 border-black hover:text-red-300 hover:border-red-300'>
                    Load More
                </button>
            </div>
        </>
    );
}

export default BestSeller;
