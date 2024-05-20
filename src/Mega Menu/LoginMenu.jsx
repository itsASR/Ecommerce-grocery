import React from 'react'
import { RiProfileLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { Link } from 'react-router-dom';




function LoginMenu() {
    return (
        <>
            {/* <div className='w-10 h-20 right-20 top-10 bg-red-200 absolute loginmenu'></div> */}
            <div className=' w-80  right-20 top-12 absolute '>
                <div className='bg-white px-5 mt-3 rounded-md border-white border-4'>
                    <div className='w-full flex justify-between border-b-2 border-black py-5'>
                        <p>New Customer?</p>
                        <Link to='/register'><p>Sign Up</p></Link>
                    </div>
                    <div className='[&>p]:py-2'>
                        <Link to='/user'><p className='flex items-center'><RiProfileLine  className='mr-2'/>Profile</p></Link>
                        <Link to='/orders'><p className='flex items-center'><FiBox  className='mr-2'/>My Orders</p></Link>
                        <p className='flex items-center'><BiSolidOffer className='mr-2' />Offers</p>

                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginMenu