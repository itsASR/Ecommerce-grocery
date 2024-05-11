// Footer2.js
import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faCreditCard, faIndianRupeeSign } from '@fortawesome/free-solid-svg-icons';

const Footer2 = () => {
    return (
        <footer className="bg-gray-900 text-white py-8 hidden lg:block">
            <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
                {/* Branding Section */}
                <div>
                    <h2 className="text-2xl font-bold">BoroBazar</h2>
                    <p className="text-sm">Your trusted online shopping partner</p>
                </div>

                {/* Navigation Section */}
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">Home</a>
                    <a href="#" className="text-gray-400 hover:text-white">Shop</a>
                    <a href="#" className="text-gray-400 hover:text-white">About Us</a>
                    <a href="#" className="text-gray-400 hover:text-white">Contact</a>
                </div>

                {/* Social Media Section */}
                {/* <div className="flex space-x-6">
                    <FontAwesomeIcon icon={faFacebookF} className="text-gray-400 hover:text-white" />
                    <FontAwesomeIcon icon={faTwitter} className="text-gray-400 hover:text-white" />
                    <FontAwesomeIcon icon={faInstagram} className="text-gray-400 hover:text-white" />
                </div> */}
            </div>

            {/* Subscription Section */}
            <div className="border-t border-gray-800 mt-8 pt-8">
                <div className="container mx-auto text-sm flex justify-between">
                    <div>
                        <p>&copy; 2024 BoroBazar. All Rights Reserved.</p>
                        <div className="mt-4">
                            <form>
                                <label htmlFor="email" className="block text-gray-400 mb-1">Subscribe to our newsletter:</label>
                                <div className="flex">
                                    <input type="email" id="email" name="email" placeholder="Your email" className="px-4 py-2 w-64 border border-gray-600 rounded-l-md focus:outline-none" />
                                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 focus:outline-none">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div>
                        {/* Payment Methods Section */}
                        <div className="container mx-auto mt-8 lg:mt-0 flex justify-end">
                            <div className="text-right">
                                <h3 className="text-lg font-semibold mb-2">Payment Methods</h3>
                                {/* <div className="flex space-x-4">
                                    <FontAwesomeIcon icon={faIndianRupeeSign} className="text-gray-400 hover:text-white" title="Credit Card" />
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-400 hover:text-white" title="Debit Card" />
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-400 hover:text-white" title="UPI" />
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-400 hover:text-white" title="Cash" />
                                    <FontAwesomeIcon icon={faCreditCard} className="text-gray-400 hover:text-white" title="Amazon Pay" />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </footer>
    );
}

export default Footer2;
