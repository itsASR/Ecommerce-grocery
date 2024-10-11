import React, { useContext } from 'react'
import { RiProfileLine } from "react-icons/ri";
import { FiBox } from "react-icons/fi";
import { BiSolidOffer } from "react-icons/bi";
import { Link, useNavigate } from 'react-router-dom';
import { Apis } from '../App';




function LoginMenu() {
    const {trutoken , username , setusername , setTrutoken} = useContext(Apis)
    const navigate = useNavigate();
    function logoutFunc(){
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        localStorage.removeItem("username");
        setTrutoken(false);
        navigate("/");

    }



    return (
        <>
            {/* <div className='w-10 h-20 right-20 top-10 bg-red-200 absolute loginmenu'></div> */}
            <div className=' w-80  right-20 top-12 absolute '>
                <div className='bg-white px-5 mt-3 rounded-md border-white border-4'>
                    <div className='w-full flex justify-between border-b-2 border-black py-5 pt-18'>
                        {/* <p>New Customer?</p> */}
                        <p>{trutoken? "hi, "+username:"New Customer?"}</p>
                        <Link to='/register'><p style={{display:trutoken?'none':'block'}} className='hover:text-green-600'>Sign Up</p></Link>
                        <p className='cursor-pointer' style={{display:trutoken?'block':'none'}} onClick={()=>logoutFunc()}>Logout</p>
                    </div>
                    <div className='[&>p]:py-2'>
                        <Link to='/user'><p className='flex items-center my-2'><RiProfileLine  className='mr-2 hover:text-green-600'/>Profile</p></Link>
                        <Link to='/orders'><p className='flex items-center my-2' ><FiBox  className='mr-2 hover:text-green-600'/>My Orders</p></Link>
                        {/* <p className='flex items-center'><BiSolidOffer className='mr-2' />Offers</p> */}

                    </div>
                </div>
            </div>
        </>

    )
}

export default LoginMenu