import React from 'react'
import { RiProfileLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaHeart } from "react-icons/fa";


function ThreeDotMenu() {
    return (
        <div className=' w-40  right-5 top-12 absolute '>
            <div className='bg-white  mt-3 rounded-md border-white border-4'>

                <div className='[&>p]:py-2'>
                    {/* <Link to="/notification"><p className='flex items-center'><RiProfileLine className='mx-2' />Notifications</p></Link> */}
                    <Link to='/support' ><p className='flex items-center py-2 border-b border-gray-200'><FiBox className='mx-2' />Support</p></Link>
                    <Link to='/wishlist'><p className='flex items-center py-2'><FaHeart className='mx-2 text-red-500 ' />Wishlist</p></Link>
{/* <FaHeart className='text-red-500 text-xl'/> */}

                </div>
            </div>
        </div>
    )
}

export default ThreeDotMenu