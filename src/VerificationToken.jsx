import axios from 'axios';
import React, { useContext, useEffect } from 'react'

import { useLocation } from 'react-router-dom';
import { Apis } from './App';
import allApis from './APIs/Apis';

function VerificationToken() {
    const { trutoken, setTrutoken, setusername, setMail } = useContext(Apis)
    const { pathname, search } = useLocation();
    const token = localStorage.getItem("token");

    const myVerificationFunc = async () => {

        const email = localStorage.getItem("email");
        const name = localStorage.getItem("username");
        const username = name?.split(" ")

        try {
            if (token) {
                const result = await axios.post(allApis.verify_token, { email }, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                console.log("my tokeen", result)
                if (result.data.status === true) {
                    console.log("token is verified");
                    setMail(email)
                    setTrutoken(true)
                    setusername(username[0])
                } else {
                    console.log("Token is not valid");
                    localStorage.removeItem("token");
                    localStorage.removeItem("email");
                    localStorage.removeItem("username");
                    setMail("")
                    setTrutoken(false)
                }

            } else {
                console.log("token is empty");
                setTrutoken(false)
                setMail("")
            }
        } catch (error) {
            console.log("not working token auth", error);
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("username");
            setMail("")
            setTrutoken(false);
        }
    }

    useEffect(() => {
        myVerificationFunc();
    }, [pathname, search, token])





    return null
}

export default VerificationToken