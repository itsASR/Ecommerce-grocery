import React, { useContext, useEffect, useState } from 'react';
import { FaPowerOff } from 'react-icons/fa';
import { TbTruckReturn } from 'react-icons/tb';
import { RiRefundFill } from 'react-icons/ri';
import MainHeader from '../../Main Ecommerce/MainHeader';
import axios from 'axios';
import allApis from '../../APIs/Apis';
import { Apis } from '../../App';
import { Link } from 'react-router-dom';
import { Country, State, City } from 'country-state-city';

function UserProfile() {
    const { Advertise, cartData } = useContext(Apis);
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [userDetail, setUserDetail] = useState([]);
    const [bestSeller, setBestSeller] = useState([]);
    const [advertiseData, setAdvertiseData] = useState(null);
    const [updatedAddress, setUpdatedAddress] = useState({
        street: 'ho rah h ',
        city: 'ho rha ',
        state: 'arab ',
        country: 'India',
        pincode: '55555'
    });

    const imgpath = "https://eu.ui-avatars.com/api/?name=";
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [city, setCity] = useState('');

    const countriesList = Country.getAllCountries();
    const statesList = State.getAllStates();
    const cityList = City.getAllCities();


    console.log("raman", Advertise)

    useEffect(() => {
        const finalStateList = statesList.filter(state => state.countryCode === selectedCountry);
        setStates(finalStateList);
    }, [selectedCountry]);

    useEffect(() => {
        const finalCityList = cityList.filter(city => city.stateCode === selectedState);
        setCities(finalCityList);
    }, [selectedState]);

    const handleCountryChange = async (e) => {
        const countryCode = e.target.value;
        setSelectedCountry(countryCode);
    };

    const handleStateChange = async (e) => {
        const stateCode = e.target.value;
        setSelectedState(stateCode);
    };

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        setToken(localStorage.getItem("token"))
        let indexing = Math.floor(Math.random() * 6);
        setAdvertiseData(Advertise[indexing]);
    }, [Advertise]);

    useEffect(() => {
        if (email) {
            getUserFunc();
        }
    }, [email]);

    const getUserFunc = async () => {
        console.log("token", token)
        try {
            const result = await axios.post(allApis.user_details, { email }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

            });
            if (result.data.status === true) {
                setUserDetail(result.data.data);
            }
            console.log("user", result.data.data[0].uname);
        } catch (err) {
            console.log("err", err);
        }
    };

    const saveAddress = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                email: email,
                address: {
                    name: userDetail[0]?.uname || "",
                    street: updatedAddress.street,
                    city: updatedAddress.city,
                    state: updatedAddress.state,
                    country: updatedAddress.country,
                    pincode: updatedAddress.pincode,
                    phone: userDetail[0]?.mobile || "",
                }
            };
            const result = await axios.post(allApis.update_user_details, payload);
            console.log("address result", result);
        } catch (error) {
            console.log("address result error", error);
        }
    };

    const handleAddressChange = (e) => {
        const { name, value } = e.target;
        setUpdatedAddress((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    console.log("tyagore", advertiseData)

    return (
        <>
            <div className='bg-white h-24 sticky top-0 z-10 w-screen'>
                <MainHeader />
            </div>
            <div className='flex flex-col lg:flex-row justify-between'>
                <div className='lg:w-80 mx-5'>
                    <div className='w-full h-10'></div>
                    <div className='mx-3 pt-5 px-2 bg-white text-center rounded-xl shadow-2xl [&>p]:pt-4 shadow-gray-200'>
                        <div className='w-40 h-40 rounded-full mx-auto overflow-hidden'>
                            <img
                                src={imgpath + (userDetail[0]?.uname + "&size=250" || "")}
                                //  src="https://eu.ui-avatars.com/api/?name=John+Doe&size=250"
                                alt='Profile'
                                className='object-cover w-full h-full'
                            />
                        </div>
                        <p className='font-bold'>{userDetail[0]?.uname}</p>
                        <p className='font-semibold'>{userDetail[0]?.mobile}</p>
                        <p className='font-semibold'>{userDetail[0]?.email}</p>
                        <p className='text-xs'>
                            {userDetail && userDetail[0]?.address[0]?.street + userDetail[0]?.address[0]?.city + userDetail[0]?.address[0]?.pincode + " " + userDetail[0]?.address[0]?.state + userDetail[0]?.address[0]?.country}
                        </p>
                        <Link to="/changepassword"><button className='mt-6 py-2 px-4 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition duration-300'>Change Password</button></Link>
                        <div className='border-t-[1px] border-gray-300 mt-6'>
                            <div className='inline-flex flex-wrap items-center gap-3 py-5 group'>
                                <span title='Orders' className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                                    <Link to="/orders"><TbTruckReturn /></Link>
                                </span>
                                <span title='Transaction' className='cursor-pointer rounded-full border border-gray-900/5 bg-gray-900/5 p-3 text-gray-900 transition-colors hover:border-gray-900/10 hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70'>
                                    <RiRefundFill />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='mx-3 lg:w-auto'>
                    <div className='bg-white rounded-xl shadow-md mt-10 p-8'>
                        <h2 className='text-4xl font-light mb-8'>Personal Details</h2>
                        <div className='space-y-6'>
                            <div className='flex flex-col md:flex-row items-center'>
                                <span className='w-full md:w-36 text-left font-light'>Name:</span>
                                <span className='w-full md:w-96 mt-2 md:mt-0'>{userDetail[0]?.uname || ''}</span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <span className='w-full md:w-36 text-left font-light'>Email:</span>
                                <span className='w-full md:w-96 mt-2 md:mt-0'>{userDetail[0]?.email || ''}</span>
                            </div>
                            <div className='flex flex-col md:flex-row items-center'>
                                <span className='w-full md:w-36 text-left font-light'>Phone:</span>
                                <span className='w-full md:w-96 mt-2 md:mt-0'>{userDetail[0]?.mobile || ''}</span>
                            </div>
                        </div>

                        <div className='flex justify-between mt-8'>
                            <Link to="/orders"><button className='py-3 px-8 rounded-full bg-purple-600 hover:bg-purple-700 text-white'>Orders</button></Link>
                            <Link to="/addressbook"><button className='py-3 px-8 rounded-full bg-blue-600 hover:bg-blue-700 text-white'>All Addresses</button></Link>
                        </div>
                    </div>
                </div>

                <div className='w-full lg:w-72 mt-10 lg:mr-10 hidden md:block'>
                    <div className='w-full max-w-sm mx-auto lg:mx-0 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ' style={{display:advertiseData?"block":"none"}}>

                        <img className='p-8 rounded-t-lg' src={allApis.baseurl + advertiseData?.image_url[0]?.url} alt='Product' />

                        <div className='px-5 pb-5'>

                            <h5 className='text-xl font-semibold tracking-tight text-gray-900 dark:text-white'>{advertiseData?.name}</h5>

                            <div className='flex items-center mt-2.5 mb-5'>
                                <div className='flex items-center space-x-1 rtl:space-x-reverse'>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-yellow-300' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                    <svg className='w-4 h-4 text-gray-200 dark:text-gray-600' aria-hidden='true' xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 22 20'>
                                        <path d='M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z' />
                                    </svg>
                                </div>
                                <span className='bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3'>5.0</span>
                            </div>
                            <div className='flex items-center justify-between'>
                                <span className='text-3xl font-bold text-gray-900 dark:text-white'>RS {advertiseData?.sizeDetails[0].discount_price}</span>
                                <Link to={`/product?id=${advertiseData?.id}`} className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'>View Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default UserProfile;
