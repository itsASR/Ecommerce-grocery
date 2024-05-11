import React from 'react'
import Header from '../../Home layout/Header'
import { FaPowerOff } from "react-icons/fa6";
import { TbTruckReturn } from "react-icons/tb";
import { RiRefundFill } from "react-icons/ri";
import MainHeader from '../../Main Ecommerce/MainHeader';



function UserProfile() {
    return (
        <>
        <div className='bg-white h-24 sticky w-screen'>
        <MainHeader></MainHeader>

        </div>
            <div className='  bg-gray-200 flex'>
                <div className='w-80   mx-5'>
                    <div className='w-full h-10'></div>
                    <div className='mx-3 pt-5 px-2 bg-white text-center rounded-xl  shadow-inner [&>p]:pt-4    shadow-white'>
                        <div className=' w-40 h-40 rounded-full mx-auto overflow-hidden'>
                            <img src='https://i.pravatar.cc/300' className='object-contain '></img>
                        </div>
                        <p className='font-bold'>Rohan Singh</p>
                        <p className='font-semibold'>rohitkuma@gmail.com</p>
                        <p>A44A Shankar Vihar Vistar Ganesh Nagar Murlipura Scheme Murlipura jaipur Near Rajwada Bear bar Jaipur 302032  </p>
                        <button className='px-5 py-2 bg-gradient-to-b from-white to-green-200 rounded-xl my-5 font-bold '>Change Password</button>
                        <div class="border-t-2 border-black">
                        <div class="inline-flex flex-wrap items-center gap-3 py-5 group">
                            <span 
                                class=" cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <TbTruckReturn />

                            </span>

                              <span
                                class="cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                                <RiRefundFill />

                            </span>

                             
                            
                        </div>
                    </div>
                    </div>
                    
                </div>

                <div className='mx-3    '>
                    <div className='bg-white text-center rounded-xl  shadow-inner  mt-10  py-10  shadow-white'>
                        <p className='text-4xl text-left pl-5 pb-10 font-semibold'>Personal Details</p>
                        <form>
                            <div className='border-b-2 border-black mx-8 flex justify-between pb-5 w-[600px] items-center mb-8'>
                                <label>Name</label>
                                <input placeholder='Enter Name' className='w-96' value="Rohit Singh"></input>
                            </div>
                            <div className='border-b-2 border-black mx-8 flex justify-between pb-5 items-center mb-8'>
                                <label>Email</label>
                                <input placeholder='Enter Email' className='w-96' value="RohitSingh@gmail.com"></input>
                            </div>
                            <div className='border-b-2 border-black mx-8 flex justify-between  pb-5 items-center mb-8'>
                                <label>Phone</label>
                                <input placeholder='Enter Email' className='w-96' value="0987654321"></input>
                            </div>
                            <div className='border-b-2 border-black mx-8 flex justify-between  pb-5 items-center mb-8'>
                                <label>Address</label>
                                <textarea placeholder='Enter Email' className='w-96' value="A44A Shankar Vihar Vistar Ganesh Nagar Murlipura Scheme Murlipura jaipur Near Rajwada Bear bar Jaipur 302032 "></textarea>
                            </div>
                            <button className='py-2 px-6 rounded-xl w-[90%] font-semibold text-white bg-blue-700' type='submit'>Save</button>
                        </form>

                    </div>
                </div>

                <div className='w-72 mt-10 mr-10'>


                    <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img class="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" alt="product image" />
                        </a>
                        <div class="px-5 pb-5">
                            <a href="#">
                                <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport</h5>
                            </a>
                            <div class="flex items-center mt-2.5 mb-5">
                                <div class="flex items-center space-x-1 rtl:space-x-reverse">
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                    <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                </div>
                                <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">5.0</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <span class="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                                <a href="#" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add to cart</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}

export default UserProfile
