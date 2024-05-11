import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import logo from '/logo.svg'
import { Link, useNavigate } from 'react-router-dom';
import { BsArrowLeft } from "react-icons/bs";






function Login() {
    const navigate = useNavigate();
    const [mobile, setmobile] = useState("")
    const [password, setpassword] = useState("")




    function loginformsubmit(e) {
        e.preventDefault()
        console.log("login details taking ");
        console.log(mobile, password);
        axios.post('http://192.168.1.19:4899/user/login', { mobile, password })
            .then((res) => {
                if (res.data.message === "Login Successfully")
                    alert("Login Successfully")
                navigate("/");

            })
            .catch((err) => {
                alert(err.response.data.message);

            })

    }







    return (
        <>


            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-1 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    /> */}
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={(e) => loginformsubmit(e)} method="POST">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile Number
                            </label>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setmobile(e.target.value)}
                                    id="mobile"
                                    name="mobile"
                                    type="number"

                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <Link to='/password'><p className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        Forgot password?
                                    </p></Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    onChange={(e) => setpassword(e.target.value)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className='flex justify-between'>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Not a member?{' '}
                            <Link to='/register' className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                Register
                            </Link>
                        </p>
                        <p className="mt-10 text-center text-sm text-gray-500">
                            Back to Home{' '}
                            <Link to='/' className="font-semibold leading-6 text-green-600 hover:text-green-500">
                                Home
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Login