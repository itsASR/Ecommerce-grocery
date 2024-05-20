import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '/logo.svg';

function EcommerceFooter() {
    return (
        <>
            <div className='border-t w-1/2 mx-auto border-black mt-20'></div>
            <div className="Upper-footer flex flex-col md:flex-row justify-between items-center px-4 md:px-20 py-10">
                <div className='w-full md:w-1/3 mb-6 md:mb-0'>
                    <img src='https://img101.urbanic.com/v1/594de315770d420090cc42103fa92fc0.webp' className='w-full' alt="Promo" />
                </div>
                <div className='w-full md:w-2/3 md:pl-10'>
                    <p className='text-xl text-center font-medium'><u>Welcome Note!</u></p>
                    <p className='text-justify text-xs mt-5'>Welcome to TrendsMe.in, where style meets sustainability. Our fashion-forward brand is committed to providing eco-conscious clothing that doesn't compromise on style. From chic essentials to trend-setting pieces, each garment is thoughtfully crafted with the planet in mind. Join us in our journey towards a more sustainable future, one stylish step at a time.</p>
                </div>
            </div>

            <div className="lower-footer grid grid-cols-1 md:grid-cols-4 gap-4 container  md:px-10 px-5 gap-y-5   mx-auto py-4">
                <div className="Div-1">
                    <p className='font-medium'>Welcome to TrendsMe.in</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Social Responsibility</li>
                        <li>Sustainability</li>
                        <li>Our Factory</li>
                        <li>About Us</li>
                    </ul>
                </div>
               
                <div className="Div-3">
                    <p className='font-medium'>Help</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Payment Methods</li>
                        <li>Shipping & Delivery</li>
                        <li>Return Policy</li>
                    </ul>
                </div>

                <div className="Div-2">
                    <p className='font-medium'>Contact Us</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs '>
                        <li>Support: support@TrendsMe.in</li>
                        <li>Legal: legal.india@TrendsMe.in</li>
                        <li>Press: press.india@TrendsMe.in</li>
                    </ul>
                </div>
                <div className="Div-4">
                    <p className='font-medium'>Policies</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>

            <div className="social-box flex justify-center text-4xl pt-10 space-x-5">
                <FaInstagramSquare />
                <FaSquareXTwitter />
                <ImFacebook2 />
            </div>

            <div className="storeIcons flex justify-center space-x-2 mt-10">
                <img src='https://static2.urbanic.com/images/ui/third/google-play.png' alt="Google Play" className='w-32' />
                <img src='https://static2.urbanic.com/images/ui/third/app-store.png' alt="App Store" className='w-32' />
            </div>

            <div className='flex justify-center my-10'>
                <img src={logo} alt="TrendsMe Logo" className='w-40' />
            </div>

            <p className='text-center px-4'>TrendsMe.in Jaipur, 22 GO-Downs Road, Jaipur, India. Copyright © TrendsMe.in (India) All rights reserved</p>

            <div className="paymentsImage flex justify-center space-x-2 mt-5 mb-10">
                <img src='https://static2.urbanic.com/images/ui/third/mastercard.png' alt="Mastercard" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/visa.png' alt="Visa" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/americanexpress.png' alt="American Express" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/bhim.png' alt="Bhim" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/rupay.png' alt="Rupay" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/diners-club.png' alt="Diners Club" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/paytm.png' alt="Paytm" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/mobilebank.png' alt="Mobile Bank" className='w-8' />
                <img src='https://static2.urbanic.com/images/ui/third/256bitssl.png' alt="SSL Secure" className='w-8' />
            </div>
        </>
    )
}

export default EcommerceFooter;
