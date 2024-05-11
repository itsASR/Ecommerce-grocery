import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaSquareXTwitter } from "react-icons/fa6";
import logo from '/logo.svg';


function EcommerceFooter() {
    return (
        <>
        <div className='border-t w-1/2 mx-auto border-black mt-20'></div>
            <div className="Upper-footer  h-80  flex justify-between px-20 items-center ">
                
                <div className='w-96'>
                    <img src='https://img101.urbanic.com/v1/594de315770d420090cc42103fa92fc0.webp'></img>
                </div>
                <div className=' h-40 w-[600px] mt-10'>
                    <p className='text-xl text-center font-medium' ><u>Welcome Note!</u></p>
                    <p className='text-justify text-xs mt-5'>Welcome to TrendsMe.in, where style meets sustainability. Our fashion-forward brand is committed to providing eco-conscious clothing that doesn't compromise on style. From chic essentials to trend-setting pieces, each garment is thoughtfully crafted with the planet in mind. Join us in our journey towards a more sustainable future, one stylish step at a time.</p>
                </div>
            </div>
            <div className="lower-footer flex justify-between px-10 pt-4">
                <div className="Div-1">
                    <p className='font-medium'>Welcome to TrendsMe.in</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Social Responsibility</li>
                        <li>Sustainability</li>
                        <li>Our Factory</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="Div-2">
                    <p className='font-medium'>Contact Us</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Support: support@TrendsMe.in</li>
                        <li>Legal: legal.india@TrendsMe.in</li>
                        <li>Press: press.india@TrendsMe.in</li>
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
                <div className="Div-4">
                    <p className='font-medium'>Policies</p>
                    <ul className='[&>li]:py-1 [&>li]:text-xs'>
                        <li>Terms & Conditions</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

            </div>
            <div className="social-box flex text-4xl pt-10 justify-center">
                <FaInstagramSquare />
                <FaSquareXTwitter className='mx-5' />
                <ImFacebook2 />
            </div>
            <div className="storeIcons flex justify-center [&>img]:w-32 [&>img]:mx-2 mt-10">
                <img src='https://static2.urbanic.com/images/ui/third/google-play.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/app-store.png'></img>
            </div>
            <div className='flex justify-center my-10'>
                <img src={logo}></img>
            </div>
            <p className='text-center'>TrendsMe.in Jaipur, 22 GO-Downs Road, Jaipur, India. Copyright © TrendsMe.in (India) All rights reserved</p>
            <div className="paymentsImage flex [&>img]:w-8 [&>img]:mx-2  justify-center text-center mt-5 mb-10">
                <img src='https://static2.urbanic.com/images/ui/third/mastercard.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/visa.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/americanexpress.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/bhim.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/rupay.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/diners-club.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/paytm.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/mobilebank.png'></img>
                <img src='https://static2.urbanic.com/images/ui/third/256bitssl.png'></img>

            </div>

        </>
    )
}

export default EcommerceFooter