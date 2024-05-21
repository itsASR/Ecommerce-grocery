import React from 'react';
import MainHeader from './Main Ecommerce/MainHeader';
import FAQ from './FAQ';
import { Link } from 'react-router-dom';

function Support() {
    return (
        <>
            <div className='h-32'>
                <MainHeader />
            </div>
            <FAQ />
            <div className='mx-auto px-4 sm:px-6'>
                <div className='main-support-div mb-10 md:flex'>
                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-6 mb-6">
                            <img src='https://t4.ftcdn.net/jpg/01/26/39/73/360_F_126397385_YSHBFkORjoxhn1GbUoSWC8mKhYey8orW.jpg' alt="Fraud Icon" className="w-16 h-16 mb-4" />
                            <h2 className="text-lg font-semibold text-center mb-2">Encountered a problem? Report it to us:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Fraud</li>
                                <li>Product Issues</li>
                                <li>Delivery Problems</li>
                                <li>Other Concerns</li>
                            </ul>
                            <p className="text-sm text-center mb-4">Email us at <a href="mailto:support@example.com" className="text-blue-500 hover:underline">support@example.com</a> with details for swift assistance, or alternatively, <Link to='/complaint' className="text-blue-500 hover:underline">click here</Link> to fill out a form.</p>
                        </div>
                    </div>

                    <div className="max-w-md mx-auto">
                        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 p-6">
                            <img src='https://t3.ftcdn.net/jpg/04/89/27/48/360_F_489274878_2RzzoEd2hyIQwfESV33sFG6rW5kOe976.jpg' alt="Call Icon" className="w-16 h-16 mb-4" />
                            <h2 className="text-lg font-semibold text-center mb-2">Encountered a problem? Call us:</h2>
                            <ul className="list-disc pl-6 mb-4">
                                <li>Monday-Saturday</li>
                                <li className='list-none'>9 AM - 6 PM</li>
                            </ul>
                            <p className='text-sm text-center mb-4'>Click on Connect Now Button or Dial <a href="tel:0987654321" className="text-blue-500 hover:underline">1800-255-255</a></p>
                            <a href="tel:0987654321" className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-green-600'>Connect Now!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Support;
