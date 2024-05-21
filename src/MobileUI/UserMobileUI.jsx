import React from 'react';
import { IoArrowBack } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import UserMobileUI2 from './UserMobileUI2';
import { Link, useNavigate } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';



function UserMobileUI() {
    const navigate = useNavigate();
    return (
        <>
            <div className='bg-[#6E131A] w-screen h-44 text-white pt-2'>
                <div className='flex justify-between items-center p-4'>
                    <button className=''><IoArrowBack className='text-xl' onClick={() => navigate(-1)} /></button>
                    {/* <button className='p-2 bg-white text-black rounded-lg'>Home</button> */}


                    <div className='text-4xl mr-4'>
                        <Link to='/'><FaHome color="#ffff" /></Link>

                    </div>
                </div>
                <div className='p-4'>
                    <p className='text-xl font-bold'>ASR</p>
                    <p className='text-sm font-light'>
                        <span>9680415819</span>
                        <span className='ml-2'>asreyanshsharma@gmail.com</span>
                    </p>
                    <p className='flex items-center text-sm'>
                        <span>Edit Profile</span>
                        <span className='ml-2'><IoIosArrowForward /></span>
                    </p>
                </div>
            </div>
            <UserMobileUI2></UserMobileUI2>

        </>
    );
}

export default UserMobileUI;
