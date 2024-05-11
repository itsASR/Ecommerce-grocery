import React, { useState, useRef, useEffect } from 'react'

import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import logo from '/logo.svg'




function Registration() {
    const navigate = useNavigate();
    const [firstname, setfirstname] = useState("")
    const [secondname, setsecondname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    const [user_name, setuser_name] = useState("")
    const [mobile, setmobile] = useState("")
    const reffer_by = ""
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [buttonActive, setButtonActive] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false);
    const inputRefs = useRef([]);
    




    function getOTP() {
        axios.post('http://192.168.1.19:4899/user/get-otp', { email })
            .then((response) => {
                console.log("i am response", response);
            })
            .catch((err) => { console.log(err) })
    }


    const handleGetOTP = async (e) => {
        e.preventDefault();
        console.log(mobile);
        console.log("printed done ");
        console.log(firstname, secondname, email, password);
        console.log("this is username", user_name);

        try {
            const result = await axios.post('http://192.168.1.19:4899/user/check-user-existance', { mobile, email });
            console.log(result);
            if (result.data.message) {
                console.log("already a user")
                alert(result.data.message)
            }
            else {
                console.log("else working no user found you can create new user");
                setShowOTPField(true);
                getOTP()
            }
        } catch (err) {
            console.log("this is error in user check api", err);
        }
    };


    useEffect(() => {
        setuser_name(`${firstname} ${secondname}`);
        if (showOTPField) {
            inputRefs.current[0].focus();
        }
    }, [firstname, secondname, showOTPField]);

    const handleInputChange = (index, value) => {
        const newInputs = [...inputs];
        newInputs[index] = value;
        setInputs(newInputs);

        // Enable next input if current input is not empty
        if (value !== "" && index < 3) {
            inputRefs.current[index + 1].focus();
        }

        // Disable previous inputs if backspace is pressed
        if (value === "" && index > 0) {
            inputRefs.current[index - 1].focus();
        }

        // Check if fourth input is filled
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

    function AccountCreated(token) {
        console.log(token)
        axios.post('http://192.168.1.19:4899/user/register', { name : user_name, mobile, email, password, token : token })
            .then((res) => {
                console.log(res)
                alert("created account done")
            })
            .catch((err) => console.log(err))
    }

    const finalSubmitform = async (e) => {
        e.preventDefault();
        let otp = inputs.join("")
        console.log("my otp is", otp)
        await axios.post('http://192.168.1.19:4899/user/verify-otp', { email, otp })
            .then((response) => {
                console.log(response);

                if (response.data.msg === "OTP Verifyed") {
                    alert("OTP Verifyed")
                    
                    sessionStorage.setItem("token", response.data.token)
                    AccountCreated(response.data.token)
                }
                else {
                    alert(response.data.msg)
                }
            })
            // .then((response) => {console.log(response.data.msg)})
            // OTP Verifyed
            .catch((err) => console.log(err))
    }


    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8 w-[90vw]  items-center mx-auto bg-[#ffffff] ">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img
                        className="mx-auto h-10 w-auto"
                        src={logo}
                        alt="Your Company"
                    /> */}
                    <h2 className=" mt-2 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Register for your account
                    </h2>
                    <p className=" text-center text-sm text-gray-500">
                        Back to Home{' '}
                        <Link to='/' className="font-semibold leading-6 text-green-600 hover:text-green-500">
                            Home
                        </Link>
                    </p>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleGetOTP} method="POST">



                        <div className='flex justify-between'>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    First Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={firstname}
                                        onChange={(e) => { setfirstname(e.target.value) }}
                                        id="firstname"
                                        name="firstname"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ml-2">
                                    Last Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        value={secondname}
                                        onChange={(e) => { setsecondname(e.target.value) }}
                                        id="lastname"
                                        name="lastname"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5  ml-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                Mobile Number
                            </label>
                            <div className="mt-2">
                                <input
                                    value={mobile}
                                    onChange={(e) => setmobile(e.target.value)}
                                    id="mobile"
                                    name="mobile"
                                    type="number"
                                    autoComplete="mobile"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>


                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={email}
                                    onChange={(e) => setemail(e.target.value)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
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
                             
                            </div>
                            <div className="mt-2">
                                <input
                                    value={password}
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
                                Get OTP
                            </button>
                        </div>
                    </form>
                    {showOTPField && (
                        <div>
                            <h4 className="text-lg font-semibold text-gray-700 text-center mb-6">Enter OTP</h4>
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
                                    className={`mt-6 w-full py-3 rounded-md text-white ${buttonActive ? "bg-blue-500 hover:bg-blue-600" : "bg-gray-400 cursor-not-allowed"
                                        }`}
                                    disabled={!buttonActive}
                                    onClick={() => { console.log(inputs) }} >
                                    Verify
                                </button>
                            </form>
                        </div>
                    )}

                    <p className="mt-10 text-center text-sm text-gray-500">
                        Already a member?{' '}
                        <a href="#" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                            <Link to="/login" >Login</Link>
                        </a>
                    </p>
                </div>
            </div>




        </>
    )
}

export default Registration