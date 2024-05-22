import React from 'react'
import { IoHomeOutline , IoCartOutline } from "react-icons/io5";
import { BiCategory } from "react-icons/bi";
import { Link } from 'react-router-dom';
// import { IoCartOutline } from "react-icons/io5";
import grocery from '/GroceryIcon.png'





function MobileLowerMenu() {
    return (
        <>
        
            <div className='w-screen  bg-white md:hidden'>
                <ul className='flex justify-between mx-10 items-center text-center '>
                    <li><button className='h-10 w-8 my-3'><BiCategory className='w-full h-full'></BiCategory></button></li>
                    <li><button className='h-12 w-10 my-3 '><img src={grocery} className='w-full h-full'></img></button></li>
                    <li><button  className='h-10 w-8 my-3'><Link to='/cart'><IoCartOutline className='w-full h-full'></IoCartOutline></Link></button></li>
                    
                </ul>
            </div>
        </>
    )
}

export default MobileLowerMenu