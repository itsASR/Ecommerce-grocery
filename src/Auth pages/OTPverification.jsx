import axios from "axios";
import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const OTPVerification = () => {
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
                    alert("OTP Verifyed")
                    // navigate("/register");
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
        <div className="flex items-center justify-center">
            <div className="w-full max-w-md">
                <div className="bg-gray-400 shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <header className="h-16 w-16 bg-blue-500 text-white flex items-center justify-center rounded-full text-2xl mx-auto mb-6">
                        4
                    </header>
                    <div>
                        <h4 className="text-lg font-semibold text-gray-700 text-center mb-6">Enter Email ID</h4>
                        <form onSubmit={handleGetOTP}>
                            <input type="email" placeholder="Enter Email" onChange={(e) => { setemail(e.target.value) }} required></input><br></br>
                            <button type="submit">Get OTP</button>
                        </form>
                    </div>

                    {/* OTP Field */}
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
        </div>
    );
};

export default OTPVerification;
