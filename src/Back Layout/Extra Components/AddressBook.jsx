// AddressBook.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import allApis from '../../APIs/Apis';
import MainHeader from '../../Main Ecommerce/MainHeader';

const AddressBook = () => {
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [newAddress, setNewAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        phone: '',
    });

    //   console.log("addresses", addresses)

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        setToken(localStorage.getItem("token"));
    }, []);

    useEffect(() => {
        if (email) {
            fetchAddresses();

        }
    }, [email]);




    const fetchAddresses = async () => {
        // console.log("email", email)
        try {
            const result = await axios.post(allApis.user_details, { email }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }

            });
            if (result.data.status === true) {
                setAddresses(result.data.data);
            }
            // console.log("user", result.data.data[0].uname);
        } catch (err) {
            console.log("err", err);
        }
    };

    const handleAddAddress = async () => {
        try {
            const response = await axios.post(allApis.update_user_details, { address: newAddress, email });
            console.log("firstresponse", response)
            fetchAddresses();
            setNewAddress({
                name: '',
                street: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
                phone: '',
            });
        } catch (error) {
            console.error('Error adding address:', error);
        }
    };

    const handleDeleteAddress = async (id) => {
        console.log("ok", email, id)
        try {
            await axios.post(allApis.remove_address, { email, id });
            console.log("hello")
            fetchAddresses();
            // setAddresses(addresses.filter((address) => address.id !== id));
        } catch (error) {
            console.error('Error deleting address:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    return (
        <>

            <div className='h-20'>
                <MainHeader></MainHeader>
            </div>
            <div className=" mx-auto p-4 bg-white min-h-screen shadow-md rounded-md">
                <h2 className="text-2xl font-bold mb-10 text-center mt-5">Address Book</h2>

                <div className='flex justify-evenly'>
                    <ul className="space-y-2  ">
                        {addresses.map((address) => (
                            address.address.map((data, index) => (
                                <div className='flex justify-between items-center border border-gray-200 rounded-md p-2 '>
                                    <li key={index} className=" ">
                                        <div className='w-96  pr-5 break-words	'>

                                            <p>{data.name}</p>

                                            <p>{data.street}</p>
                                            <p>{data.city}, {data.state}, {data.country} - {data.pincode}</p>
                                            <p>{data.phone}</p>
                                        </div>
                                    </li>
                                    <button
                                        className="ml-2 p-1 bg-red-500 text-white rounded-md"
                                        onClick={() => handleDeleteAddress(data.id)}
                                    >
                                        Delete
                                    </button>
                                </div>
                            ))
                        ))}
                    </ul>


                    <div className="mb-4 space-y-2 max-w-md">
                        <p className='text-center text-xl'>Add New Address</p>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Name"
                            value={newAddress.name}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="street"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Street"
                            value={newAddress.street}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="City"
                            value={newAddress.city}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="state"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="State"
                            value={newAddress.state}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="country"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Country"
                            value={newAddress.country}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="pincode"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Pincode"
                            value={newAddress.pincode}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="phone"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            placeholder="Phone"
                            value={newAddress.phone}
                            onChange={handleChange}
                        />
                        <button
                            className="mt-2 w-full p-2 bg-blue-500 text-white rounded-md"
                            onClick={handleAddAddress}
                        >
                            Add Address
                        </button>
                    </div>


                </div>

            </div>

        </>
    );
};

export default AddressBook;
