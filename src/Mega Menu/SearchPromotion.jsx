import React, { useContext } from 'react'
import { IoClose } from "react-icons/io5";
import { Apis } from '../App';


function SearchPromotion() {
    const {SearchBox , setSearchBox} = useContext(Apis)
    return (
        <>
            <div className='py-20 bg-white w-screen overflow-scroll'>
            <IoClose className='absolute right-10 text-3xl bg-gray-400 text-white hover:bg-black rounded-full' onClick={()=> setSearchBox("none")} />
                <div className=' flex justify-center items-center'>
                    <div className='w-[400px] h-[500px]  text-center'>
                        <h1 className='text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4'>Mens</h1>
                        <ul className='text-sm py-5 [&>li]:py-1'>
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
                    <div className='w-[400px] h-[500px]  text-center'>
                        <h1 className='text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4'>Womens</h1>
                        <ul className='text-sm py-5 [&>li]:py-1'>
                            <li>Briefcase Bags</li>
                            <li>Crossbody Bags</li>
                            <li>Duffle Bags</li>
                            <li>Messenger Bags</li>
                            <li>Totes</li>
                        </ul>
                    </div>
                    <div className='w-[400px] h-[500px] text-center'>
                        <h1 className='text-2xl pt-10 border-b-2 border-gray-300 mx-20 pb-4'>Kids</h1>
                        <ul className='text-sm py-5 [&>li]:py-1'>
                            <li>Lace Ups & Dress Shoes</li>
                            <li>Loafers & Drivers</li>
                            <li>Sandals & Floaters</li>
                            <li>Slippers & Slides</li>
                        </ul>
                    </div>

                    
                </div>
               
            </div>
        </>
    )
}

export default SearchPromotion