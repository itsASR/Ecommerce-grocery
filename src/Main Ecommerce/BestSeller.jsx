import React from 'react';
import { FaCircle } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

function BestSeller() {


    const products = [
        {
            id: 1,
            imageUrl: 'https://demo-ecomus-global.myshopify.com/cdn/shop/products/p-d2.png?v=1694420596&width=360',
            name: 'Product Name 1',
            price: 150,
            a: "",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 2,
            imageUrl: 'https://m.media-amazon.com/images/I/61cV85sdV5L._AC_UL320_.jpg',
            name: 'Product Name 2',
            price: 200,
            a: "",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 3,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Footwear-Men.webp',
            name: 'Product Name 3',
            price: 50,
            a: "",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 4,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Intimates-Women.webp',
            name: 'Product Name 4',
            price: 700,
            a: " vf",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 5,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Bags-Women.webp',
            name: 'Product Name 5',
            price: 555,
            a: "c",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 6,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Designer-Men.webp',
            name: 'Product Name 6',
            price: 90,
            a: "",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 7,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Kids-2.webp',
            name: 'Product Name 7',
            price: 1210,
            a: "",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
        {
            id: 8,
            imageUrl: 'https://skin.darveys.com/assets/images/menu/Men.webp',
            name: 'Product Name 8',
            price: 399,
            a: "vbgtn",
            colors: ['text-red-500', 'text-purple-500', 'text-green-500']
        },
    ];

    return (
        <>
            <div className='text-center py-20'>
                <p className='text-5xl pb-2'>BEST SELLER</p>
                <p>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>

            <div className='grid grid-cols-4 gap-x-4 pl-7 gap-y-10 pb-12'>
                {products.map(product => (
                    <div key={product.id} className="product-Div">
                        <div className="card  h-[350px]  relative overflow-hidden rounded-lg" >
                            <img src={product.imageUrl} className='h-full w-[90%]  rounded-lg  bg-red-200 relative' alt={product.name} />
                            <div className={product.a === "" ? "font-semibold" : "hidden"}><p className='bg-[#FC5732] text-white px-3  absolute rounded-xl top-3 right-10'>{5000-product.price} OFF</p></div> 
                        </div>
                        <div className=' w-[90%] pt-3'>
                            <p>{product.name}</p>
                            <div className='flex [&>p]:pr-3'>
                                <p className={product.a === "" ? "line-through text-gray-500" : "line"}>RS 5000</p>
                                <p className={product.a === "" ? "font-semibold" : "hidden"}>RS {product.price}</p>
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
