import React from 'react'
import { RiProfileLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from 'react-router-dom';


function ThreeDotMenu() {
    return (
        <div className=' w-40  right-5 top-12 absolute '>
            <div className='bg-white  mt-3 rounded-md border-white border-4'>

                <div className='[&>p]:py-2'>
                    <p className='flex items-center'><RiProfileLine className='mx-2' />Notifications</p>
                    <Link to='/support'><p className='flex items-center'><FiBox className='mx-2' />Support</p></Link>


                </div>
            </div>
        </div>
    )
}

export default ThreeDotMenu