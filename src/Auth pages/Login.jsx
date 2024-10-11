import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '/logo.svg'
import MainHeader from '../Main Ecommerce/MainHeader';
import allApis from '../APIs/Apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function Login() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");

    const loginformsubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(allApis.login, { email: mobile, password })
            // console.log("first", res)

            if (res.data.status === true) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("email", res.data.email);
                localStorage.setItem("username", res.data.username);
                toast.success("error.response.data.message")
                navigate("/");
            } else {
                toast.warn(err.response.data.message)
            }

        } catch (error) {
            // console.log("error,", error.response.data.message)
            toast.error(error.response.data.message)
        }
    }

    return (
        <>
            <MainHeader></MainHeader>
            <div className="flex  flex-col justify-center px-6 py-8 sm:px-8 lg:px-12 bg-gray-100 md:pt-28">
                <div className="sm:mx-auto sm:w-full sm:max-w-md ">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                        alt="Your Company"
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <form className="space-y-6 bg-white p-8 rounded-lg shadow-md" onSubmit={loginformsubmit} method="POST">
                        <div>
                            <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                Email ID
                            </label>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => setMobile(e.target.value)}
                                    id="mobile"
                                    name="mobile"
                                    type="email"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to='/password' className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </Link>
                                </div>
                            </div>
                            <div className="mt-1">
                                <input
                                    onChange={(e) => setPassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-gray-300 shadow-sm py-2 px-3 text-gray-900 placeholder-gray-400 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6 flex justify-between text-sm text-gray-500">
                        <p>
                            Not a member?{' '}
                            <Link to='/register' className="font-medium text-indigo-600 hover:text-indigo-500">
                                Register
                            </Link>
                        </p>
                        <p>
                            <Link to='/' className="font-medium text-green-600 hover:text-green-500">
                                Back to Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}
 
export default Login;
