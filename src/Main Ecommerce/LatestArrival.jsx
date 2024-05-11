import React from 'react';
import { FaCircle } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

function LatestArrival() {
    const products = [
        {
            id: 1,
            imageUrl: 'https://m.media-amazon.com/images/I/61cV85sdV5L._AC_UL320_.jpg',
            name: 'Product Name 1',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 2,
            imageUrl: 'https://media.darveys.com/catalog/product/c/l/clot_280224_36463_1.jpg',
            name: 'Product Name 2',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 3,
            imageUrl: 'https://media.darveys.com/resized/460_520/_4_6_46-lot6207_1.jpg',
            name: 'Product Name 3',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 4,
            imageUrl: 'https://media.darveys.com/resized/460_520/_4_8_48-lot7432_1.jpg',
            name: 'Product Name 4',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 5,
            imageUrl: 'https://media.darveys.com/resized/460_520/_1_0_108-lot6176_1.jpg',
            name: 'Product Name 5',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 6,
            imageUrl: 'https://media.darveys.com/resized/460_520/_2_0_20-lot4907_1.jpg',
            name: 'Product Name 6',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 7,
            imageUrl: 'https://media.darveys.com/resized/460_520/_3_9_39-lot7421_1.jpg',
            name: 'Product Name 7',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 8,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Footwear-Women.webp',
            name: 'Product Name 8',
            price: 'Rs 150',
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
    ];

    return (
        <>
            <div className='text-center py-20'>
                <p className='text-5xl pb-2'>New Arrival</p>
                <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>

            <div className='grid grid-cols-4 gap-x-4 pl-7 gap-y-10 pb-12'>
                {products.map(product => (
                    <div key={product.id} className="product-Div">
                        <div className="card  h-[350px]  relative overflow-hidden" >
                            <img src={product.imageUrl} className='h-full' alt={product.name} />
                            <div className='absolute lowe-info w-full text-center'>
                                <div className='flex justify-center text-4xl pb-2'>
                                    <CiHeart className='mr-2 bg-[#F2F2F2] p-1' />
                                    <IoBagOutline className='mr-2 bg-[#F2F2F2] p-1' />
                                </div>
                                <div className='saves font-bold  '>
                                    <p className='relative text-white z-40'>S, M, L</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <div className="color-varient flex [&>*]:mr-2 pt-1">
                                {product.colors.map((color, index) => (
                                    <FaCircle key={index} className={color} />
                                ))}
                            </div>
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

export default LatestArrival;
