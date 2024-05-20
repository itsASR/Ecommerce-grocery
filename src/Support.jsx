import React from 'react'
import fraud from '/fraud-detection.png'
import MainHeader from './Main Ecommerce/MainHeader'
import FAQ from './FAQ'
import { Link } from 'react-router-dom'


function Support() {
    return (
        <>
            <div className='h-32 '>
                <MainHeader></MainHeader>
            </div>
            <FAQ></FAQ>
            <div className=' mx-auto flex  justify-center -mt-20'>
                <div className='main-support-div  grid grid-cols-2 gap-20 mb-10'>
                    <div class="max-w-md mx-auto ">
                        <div class="flex items-center h-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-6">
                            <img src='https://t4.ftcdn.net/jpg/01/26/39/73/360_F_126397385_YSHBFkORjoxhn1GbUoSWC8mKhYey8orW.jpg' alt="Fraud Icon" class="w-20 h-20" />
                            <div class="pl-6">
                                <h2 class="text-lg font-semibold">Encountered a problem? Report it to us:</h2>
                                <ul class="list-disc pl-6">
                                    <li>Fraud</li>
                                    <li>Product Issues</li>
                                    <li>Delivery Problems</li>
                                    <li>Other Concerns</li>
                                </ul>
                                <p class="mt-2">Email us at <a href="mailto:support@example.com" class="text-blue-500 hover:underline">support@example.com</a> with details for swift assistance, or alternatively, <Link to='/complaint'  class="text-blue-500 hover:underline">click here</Link> to fill out a form.</p>
                            </div>
                        </div>
                    </div>


                    <div class="max-w-md mx-auto ">
                        <div class="flex items-center h-80 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-6">
                            <img src='https://t3.ftcdn.net/jpg/04/89/27/48/360_F_489274878_2RzzoEd2hyIQwfESV33sFG6rW5kOe976.jpg' alt="Fraud Icon" class="w-20 h-20" />
                            <div class="pl-6">
                                <h2 class="text-lg font-semibold">Encountered a problem? Call us:</h2>
                                <ul class="list-disc pl-6 py-5">
                                    <li>Monday-Saturday</li>
                                    <li className='list-none'>9 AM - 6 PM</li>

                                </ul>
                                <p className='py-2 pb-5'>Click on Connect Now Button or Dial 1800-255-255</p>
                                <a href="tel:0987654321" className='bg-blue-600 text-white px-2 py-2 rounded-lg hover:bg-green-600'>Connect Now!</a>
                            </div>
                        </div>
                    </div>





                </div>
            </div>

        </>
    )
}

export default Support