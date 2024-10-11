import React, { useState, useEffect } from 'react';
import MainHeader from './Main Ecommerce/MainHeader';
import logo from '/logo.svg';


function ComplaintForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        complaintType: '',
        orderNumber: '',
        complaintDetails: ''
    });

    const [showHeader, setShowHeader] = useState(true);
    const threshold = 100; 

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > threshold) {
                setShowHeader(false);
            } else {
                setShowHeader(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('Form submitted:', formData);

        setFormData({
            name: '',
            email: '',
            phone: '',
            complaintType: '',
            orderNumber: '',
            complaintDetails: ''
        });
    };

    return (
        <>
            <div className='bg-gradient-to-r from-white to-blue-200'>
                <div className='h-20'>
                    {showHeader && <MainHeader />}
                </div>

                <div className="max-w-lg mx-auto p-4 shadow-md rounded-xl bg-white">
                    <img src={logo} className='mx-auto py-6 w-40' alt="Logo" />
                    <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Submit a Complaint</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                            <div className="relative mt-1">
                                <input
                                    autoFocus
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="block w-full p-2 pl-8 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <i className="fas fa-user absolute left-2 top-2 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <div className="relative mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="block w-full p-2 pl-8 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <i className="fas fa-envelope absolute left-2 top-2 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                            <div className="relative mt-1">
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="block w-full p-2 pl-8 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                />
                                <i className="fas fa-phone absolute left-2 top-2 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="complaintType" className="block text-sm font-medium text-gray-700">Complaint Type</label>
                            <div className="relative mt-1">
                                <select
                                    id="complaintType"
                                    name="complaintType"
                                    className="block w-full p-2 pl-8 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                    value={formData.complaintType}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a complaint type</option>
                                    <option value="delivery">Delivery Issue</option>
                                    <option value="product">Product Issue</option>
                                    <option value="service">Service Issue</option>
                                    <option value="other">Other</option>
                                </select>
                                <i className="fas fa-exclamation-circle absolute left-2 top-2 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="orderNumber" className="block text-sm font-medium text-gray-700">Past Order Number</label>
                            <div className="relative mt-1">
                                <input
                                    type="text"
                                    id="orderNumber"
                                    name="orderNumber"
                                    className="block w-full p-2 pl-8 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                    value={formData.orderNumber}
                                    onChange={handleChange}
                                />
                                <i className="fas fa-clipboard-list absolute left-2 top-2 text-gray-400"></i>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="complaintDetails" className="block text-sm font-medium text-gray-700">Complaint Details</label>
                            <textarea
                                id="complaintDetails"
                                name="complaintDetails"
                                className="mt-1 block w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition"
                                rows="4"
                                value={formData.complaintDetails}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="mt-6">
                            <button
                                type="submit"
                                className="w-full py-2 px-3 bg-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-transform transform hover:scale-105"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default ComplaintForm;
