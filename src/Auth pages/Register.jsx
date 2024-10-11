import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from '/logo.svg';
import MainHeader from '../Main Ecommerce/MainHeader';
import allApis from '../APIs/Apis';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Registration() {
    const navigate = useNavigate();
    const [firstname, setFirstname] = useState("");
    const [secondname, setSecondname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user_name, setUser_name] = useState("");
    const [mobile, setMobile] = useState("");
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [buttonActive, setButtonActive] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false);
    const inputRefs = useRef([]);
    const [warning, setWarning] = useState("")


    async function getOTP() {
        try {
            await axios.post(allApis.get_otp, { email })

        } catch (error) {
            toast.error("Server Error")
        }
    }

    const handleGetOTP = async (e) => {
        e.preventDefault();
        try {
            const result = await axios.post(allApis.user_existence, { email , mobile });
            console.log("result", result)
            if (result.data.message) {
                setWarning(result.data.message);
            } else {
                setShowOTPField(true);
                getOTP();
            }
        } catch (err) {
            toast.error("Server Error Try Again", err);
            console.log("back end", err)
        }
    };

    useEffect(() => {
        setUser_name(`${firstname} ${secondname}`);
        if (showOTPField) {
            inputRefs.current[0].focus();
        }
    }, [firstname, secondname, showOTPField]);

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        if (value !== "" && index < 3) {
            inputRefs.current[index + 1].focus();
        }

        if (value === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        if (index === 3 && value !== "") {
            setButtonActive(true);
        } else {
            setButtonActive(false);
        }
    };

    const handleInputKeyDown = (e, index) => {
        if (e.key === "Backspace" && index > 0 && inputs[index] === "") {
            inputRefs.current[index - 1].focus();
        }
    };

    const AccountCreated = async (token) => {
        console.log("don", user_name, mobile, email, password, token)
        try {
            const result = await axios.post(allApis.register, { name: user_name, mobile, email, password, token })
            // if(result.response.data.status)
            // console.log("account created APi", result)
            // localStorage.setItem("token",token);
            // localStorage.setItem("email", email);
            // localStorage.setItem("username", user_name);
            toast.success("Account created successfully");
            navigate('/login');
        } catch (error) {
            toast.error("Error on creating Account")
        }


    }

    const finalSubmitform = async (e) => {
        e.preventDefault();
        let otp = inputs.join("");
        try {
            const response = await axios.post(allApis.verify_otp, { email, otp })
        //    console.log("vaba", response.data.msg)
            if (response.data.status === true) {
                toast.success("OTP Verified")
                AccountCreated(response.data.token);
            } else {
                toast.warn(response.data.msg)
            }
        } catch (error) {
            toast.error(error)
        }

    }

    return (
        <>

            <div className='md:pb-16 '>
                <MainHeader></MainHeader>
            </div>
            <div className="flex  flex-col justify-center items-center bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className="mx-auto h-12 w-auto"
                            src={logo}
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Register for your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{' '}
                            <Link to="/" className="font-medium text-indigo-600 hover:text-indigo-500">
                                back to home
                            </Link>
                        </p>
                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleGetOTP} method="POST">
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                                <div>
                                    <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                                        First Name
                                    </label>
                                    <input
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        required
                                        value={firstname}
                                        onChange={(e) => setFirstname(e.target.value)}
                                        className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500  py-2"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="secondname" className="block text-sm font-medium text-gray-700">
                                        Last Name
                                    </label>
                                    <input
                                        id="secondname"
                                        name="secondname"
                                        type="text"
                                        required
                                        value={secondname}
                                        onChange={(e) => setSecondname(e.target.value)}
                                        className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
                                    Mobile Number
                                </label>
                                <input
                                    id="mobile"
                                    name="mobile"
                                    type="number"
                                    required
                                    value={mobile}
                                    onClick={()=>setWarning("")}
                                    onChange={(e) => setMobile(e.target.value)}
                                    className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Email address
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onClick={() => setWarning("")}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="pl-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 py-2"
                                />
                            </div>
                        </div>

                        <div>
                            <p className='text-center text-red-800 animate-pulse'>{warning}</p>
                            <button
                                type="submit"
                                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Get OTP
                            </button>
                        </div>
                    </form>

                    {showOTPField && (
                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-gray-700 text-center mb-4">Enter OTP</h4>
                            <form onSubmit={finalSubmitform}>
                                <div className="flex justify-center gap-2">
                                    {inputs.map((input, index) => (
                                        <input
                                            ref={(ref) => (inputRefs.current[index] = ref)}
                                            id={`input-${index}`}
                                            key={index}
                                            type="text"
                                            value={input}
                                            onChange={(e) => handleInputChange(index, e.target.value)}
                                            onKeyDown={(e) => handleInputKeyDown(e, index)}
                                            className="h-12 w-12 bg-gray-100 rounded-lg outline-none text-center"
                                            maxLength="1"
                                        />
                                    ))}
                                </div>
                                <button
                                    type="submit"
                                    className={`mt-6 w-full py-3 rounded-md text-white ${buttonActive ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"}`}
                                    disabled={!buttonActive}
                                >
                                    Verify
                                </button>
                            </form>
                        </div>
                    )}

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
            <ToastContainer />
        </>
    );
}

export default Registration;
