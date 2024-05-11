// ResetPassword.js

import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reset = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    let tokkendata = "";


    useEffect(() => {
        tokkendata = sessionStorage.getItem("tokenOTP")
        console.log("tokkendata", tokkendata)
    })


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            console.log("hello tokken data", tokkendata)
            axios.post('http://192.168.1.19:4899/user/forget-password', { password, token: tokkendata, email: "asreyanshsharma@gmail.com" })
                .then((res) => {
                    console.log(res)

                })
                .catch((err) => console.log(err))
        }


        else {
            setMessage('Password not matched');
        }



        // setMessage('Password updated successfully!');
    };

    return (
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
                            <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="sr-only">Confirm Password</label>
                            <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            Submit
                        </button>
                    </div>
                </form>
                {message && (
                    <p className="mt-2 text-center text-sm text-green-600">{message}</p>
                )}
            </div>
        </div>
    );
};

export default Reset;
