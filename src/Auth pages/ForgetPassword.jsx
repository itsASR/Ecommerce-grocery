import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState(["", "", "", ""]);
    const [buttonActive, setButtonActive] = useState(false);
    const [showOTPField, setShowOTPField] = useState(false);
    const [email, setemail] = useState("");
    const inputRefs = useRef([]);

    useEffect(() => {
        if (showOTPField) {
            inputRefs.current[0].focus();
        }
    }, [showOTPField]);

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

    const handleGetOTP = (e) => {
        e.preventDefault();
        console.log("my email", setemail)
        setShowOTPField(true);
        axios.post('http://192.168.1.19:4899/user/get-otp', { email })
            .then((response) => {
                console.log("my response from server", response)
            })
            .catch((err) => { console.log("my error abhishek") })
    };


    const finalSubmitform = (e) => {
        e.preventDefault();
        let otp = inputs.join("")
        console.log("my otp is", otp)
        axios.post('http://192.168.1.19:4899/user/verify-otp', { email, otp })
            .then((response) => {
                if (response.data.msg === "OTP Verifyed") {
                    sessionStorage.setItem("tokenOTP", response.data.token)
                    alert("OTP Verifyed")
                    navigate("/reset");

                    
                }
                else{
                    alert(response.data.msg)
                }
            })
            // .then((response) => {console.log(response.data.msg)})
            // OTP Verifyed
            .catch((err) => console.log(err))
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Forgot Password</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">Please enter your email address below and we'll send you instructions on how to reset your password.</p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={handleGetOTP}>
                    <input type="hidden" name="remember" value="true"/>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email" className="sr-only">Email address</label>
                            <input id="email" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" value={email} onChange={(e) => setemail(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                {/* <!-- Heroicon name: solid/lock-closed --> */}
                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M10 12a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                                    <path fillRule="evenodd" d="M7 4a3 3 0 100 6H4a1 1 0 00-1 1v9a1 1 0 001 1h12a1 1 0 001-1v-9a1 1 0 00-1-1h-3a3 3 0 00-5.83 0H7a1 1 0 00-1-1zM6 8a1 1 0 112 0 1 1 0 01-2 0z" clipRule="evenodd"/>
                                </svg>
                            </span>
                            GET OTP
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
                
            </div>
        </div>
    );
};

export default ForgotPassword;
