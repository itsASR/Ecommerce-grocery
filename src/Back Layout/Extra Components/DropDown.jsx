import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import allApis from '../../APIs/Apis';
import { Apis } from '../../App'; 


const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [addresses, setAddresses] = useState([]);
  const { globalAddress, setGlobalAddress } = useContext(Apis)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

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

  function setActionFunc(data) {
    setGlobalAddress(data);
    setIsOpen(false);
  }

  return (
    <div className="relative">
      {/* Dropdown button */}
      <button
        id="dropdownDefaultButton"
        onClick={toggleDropdown}
        className="text-black   font-medium rounded-lg text-sm px-5  text-center inline-flex items-center "
        type="button"
      >
        Your Addresses
        <svg
          className={`w-2.5 h-2.5  ms-3 ${isOpen ? 'transform rotate-180' : ''}`}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 10 6"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div
          id="dropdown"
          className="absolute z-10 bg-white  divide-y divide-gray-100 rounded-lg shadow w-96 h-96 overflow-scroll mt-1 origin-top-right mx-auto right-0 left-0 "
        >
          <ul
            className="py-2 text-sm text-black dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li className="flex justify-between items-center border border-gray-200 rounded-md text-black   px-4 py-6 font-bold text-lg hover:bg-green-600 text-black  hover:text-white cursor-pointer" onClick={() => setActionFunc('')}>Type New Address</li>
            {addresses.map((address) => (
              address.address.map((data, index) => (
                <li key={index} className="flex justify-between items-center border border-gray-200 rounded-md text-black text-justify  px-4 py-2 hover:bg-blue-600 text-black  hover:text-white cursor-pointer" onClick={() => setActionFunc(data)}>
                  <div>

                    <p className='font-bold text-lg'>{data.name}</p>

                    <p>{data.street}</p>
                    <p>{data.city}, {data.state}, {data.country} - {data.pincode}</p>
                    <p>{data.phone}</p>
                  </div>

                </li>
              ))
            ))}


          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
