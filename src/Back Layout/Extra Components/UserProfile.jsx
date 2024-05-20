import React from 'react';
import { FaPowerOff } from 'react-icons/fa6';
import { TbTruckReturn } from 'react-icons/tb';
import { RiRefundFill } from 'react-icons/ri';
import MainHeader from '../../Main Ecommerce/MainHeader';

function UserProfile() {
    const a = "disabled"
    return (
        <>
            <div className='bg-white h-24 sticky top-0 z-10 w-screen'>
                <MainHeader />
            </div>
            <div className='flex'>
                <div className='w-80 mx-5'>
                    <div className='w-full h-10'></div>
                    <div className='mx-3 pt-5 px-2 bg-white text-center rounded-xl shadow-2xl [&>p]:pt-4 shadow-gray-200'>
                        <div className='w-40 h-40 rounded-full mx-auto overflow-hidden'>
                            <img src='https://lh3.googleusercontent.com/pw/AP1GczMvnF8hcHqp8B_QRJqrOrfBvb-JSF5v8gk71m_2sojPk4vMsnFUhvxboEOgMmZnjcndbbw_4HBV7U3qBGBGLJlMP9sZokN4uFSKlqsSY-k3dF3twEYkyKEHVlh3_zrZK0AcJ4L_jGqbUZn1INYIRQt8=w799-h599-s-no-gm?authuser=0' alt='Profile' className='object-cover w-full h-full' />
                        </div>
                        <p className='font-bold'>Rohan Singh</p>
                        <p className='font-semibold'>0987654321</p>
                        <p className='font-semibold'>rohitkuma@gmail.com</p>
                        <p className='text-xs'>A44A Shankar Vihar Vistar Ganesh Nagar Murlipura Scheme Murlipura jaipur Near Rajwada Bear bar Jaipur 302032</p>
                        <button className='mt-6 py-2 px-4 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300'>Change Password</button>
                        <div className='border-t-[1px] border-gray-300 mt-6'>
                            <div className='inline-flex flex-wrap items-center gap-3 py-5 group'>
                                <span title='Orders' className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                                    <TbTruckReturn />
                                </span>
                                <span title='Transaction' className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                                    <RiRefundFill />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-3'>
                    <div className='bg-white text-center rounded-xl shadow-inner mt-10 py-10 shadow-gray-200'>
                        <p className='text-4xl text-left pl-5 pb-10 font-light'>Personal Details</p>
                        <form>
                            <div className='border-b-[1px] border-gray-300 mx-8 flex justify-between pb-5 w-[600px] font-light items-center mb-8'>
                                <label>Name</label>
                                <input placeholder='Enter Name' className='w-96' value="Rohit Singh" />
                            </div>
                            <div className='border-b-[1px] border-gray-300 mx-8 flex font-light justify-between pb-5 items-center mb-8'>
                                <label>Email</label>
                                <input placeholder='Enter Email' className='w-96' value="RohitSingh@gmail.com" />
                            </div>
                            <div className='border-b-[1px] border-gray-300 mx-8 flex font-light justify-between pb-5 items-center mb-8'>
                                <label>Phone</label>
                                <input placeholder='Enter Phone' className='w-96' value="0987654321" />
                            </div>
                            <div className='border-b-[1px] border-gray-300 mx-8 flex font-light justify-between pb-5 items-center mb-8'>
                                <label>Address</label>
                                <textarea placeholder='Enter Address' className='w-96 h-20' value="A44A Shankar Vihar Vistar Ganesh Nagar Murlipura Scheme Murlipura jaipur Near Rajwada Bear bar Jaipur 302032 "></textarea>
                            </div>
                            <button className='py-2 px-6 rounded-xl w-[20%] font-semibold text-white bg-blue-700 hover:bg-gray-300 hover:text-gray-700' a type='submit' disabled={true}>Save</button>
                        </form>
                    </div>
                </div>

                <div className='w-72 mt-10 mr-10'>
                    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700'>
                        <a href='#'>
                            <img className='p-8 rounded-t-lg' src='https://flowbite.com/docs/images/products/apple-watch.png' alt='Product' />
                        </a>
                        <div className='px-5 pb-5'>
                            <a href='#'>
                                <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div className='flex items-center mt-2.5 mb-5'>
                                <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-gray-200 dark:text-gray-600' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                </div>
                                <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>5.0</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-3xl font-bold text-gray-900 dark:text-white'>$599</span>
                                <a href='#' className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserProfile;
