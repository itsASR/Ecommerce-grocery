// ResetPassword.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import allApis from '../APIs/Apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../Main Ecommerce/MainHeader';

const Reset = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const [tokkendata, setTokkendata] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        const token = sessionStorage.getItem("tokenOTP");
        const userEmail = sessionStorage.getItem("email");
        setTokkendata(token);
        setEmail(userEmail);
        console.log("tokkendata", token, userEmail);
        console.log("My mail", userEmail);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            try {
                const response = await axios.post(allApis.forget_password, { password, token: tokkendata, email });
                if (response.data.status === true) {
                    toast.success(response.data.message);
                    setTimeout(() => {
                        navigate("/login");
                    }, 3000);
                } else {
                    toast.warn(response.data.message);
                }
            } catch (error) {
                toast.error("Server Error");
            }
        } else {
            setMessage('Password not matched');
        }
    };

    return (
       <>
       <MainHeader></MainHeader>
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Reset Password</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Please enter your new password below.</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input
                                id="confirmPassword"
                                name="confirmPassword"
                                type="password"
                                autoComplete="new-password"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Submit
                        </button>
                    </div>
                </form>
                {message && (
                    <p className="mt-2 text-center text-sm text-green-600">{message}</p>
                )}
            </div>
            <ToastContainer />
        </div>
       
       </>
    );
};

export default Reset;
