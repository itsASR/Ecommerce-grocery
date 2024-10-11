import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import Cart from './Back Layout/Extra Components/Cart';
import { Apis } from './App';
import allApis from './APIs/Apis';
import { FiTrash2 } from 'react-icons/fi'; 
import MainHeader from './Main Ecommerce/MainHeader';
import DropDown from './Back Layout/Extra Components/DropDown';
import OrderPlacedModal from './OrderPlacedModal'; 

const CheckoutPage = () => {
    const { cartData, globalAddress, setGlobalAddress , setReloaddata } = useContext(Apis);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');
    const [selectedState, setSelectedState] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const [addresses, setAddresses] = useState([]);
    const [paymentSelect, setPaymentSelect] = useState("COD");
    const [typingAddress, setTypingAddress] = useState(true);
    const [obj, setObj] = useState([]);
    const [newAddress, setNewAddress] = useState({
        name: '',
        street: '',
        city: '',
        state: '',
        country: '',
        pincode: '',
        phone: '',
    });

    const [isModalOpen, setModalOpen] = useState(false); // State to control the modal visibility

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
    };

    function defineAddress() {
        if (globalAddress === "") {
            setTypingAddress(true);
            setNewAddress({
                name: '',
                street: '',
                city: '',
                state: '',
                country: '',
                pincode: '',
                phone: '',
            });
        } else {
            setTypingAddress(false);
            setNewAddress({
                name: globalAddress.name,
                street: globalAddress.street,
                city: globalAddress.city,
                state: globalAddress.state,
                country: globalAddress.country,
                pincode: globalAddress.pincode,
                phone: globalAddress.phone,
            });
        }
    }

    const submitFunc = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(allApis.add_order, {
                email: email,
                address: newAddress,
                payment_type: paymentSelect,
                items: obj
            });
            console.log("Order placed successfully:", response.data);
            if(response.data.status === true){
                setReloaddata(Math.random())
                setModalOpen(true);  // Open the modal on successful order placement

            }
        } catch (error) {
            console.error("Error placing order:", error);
        }
    };

    useEffect(() => {
        const updatedObj = cartData.map(cart => ({
            qty: cart.count,
            size: cart.size,
            product_id: cart.product_id,
            color: cart.color
        }));
        setObj(updatedObj);
    }, [cartData]);

    useEffect(() => {
        setEmail(localStorage.getItem("email"));
        setToken(localStorage.getItem("token"));
        defineAddress();
    }, [globalAddress]);

    return (
        <>
            <OrderPlacedModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />  {/* Include the modal here */}

            <div className="min-h-screen">
                <div className='h-20'>
                    <MainHeader></MainHeader>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-lg ">
                    <h2 className="text-3xl font-semibold text-center mb-10 text-gray-800">
                        Checkout
                    </h2>

                    <div className='flex justify-evenly'>

                        <div className='max-w-md w-full  bg-gray-100 p-5 rounded-xl'>
                            <p className='text-2xl text-center  '>Billing Address</p>
                            <div className='text-center mb-5'>
                                <DropDown></DropDown>
                            </div>
                            <form className="space-y-4" onSubmit={(e) => submitFunc(e)}>
                                <div className="">
                                    <label className='text-xs text-gray-800'>Full Name<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="name"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="Full Name"
                                        value={typingAddress ? newAddress.name : globalAddress.name}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>Street<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="street"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2 h-11"
                                        placeholder="Street"
                                        value={typingAddress ? newAddress.street : globalAddress.street}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>City<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="city"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="City"
                                        value={typingAddress ? newAddress.city : globalAddress.city}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>State<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="state"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="State"
                                        value={typingAddress ? newAddress.state : globalAddress.state}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>Country<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="country"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="Country"
                                        value={typingAddress ? newAddress.country : globalAddress.country}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>Pincode<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="pincode"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="Pincode"
                                        value={typingAddress ? newAddress.pincode : globalAddress.pincode}
                                        onChange={handleChange}
                                    />
                                    <label className='text-xs text-gray-800'>Phone<span className='text-red-600 '>*</span></label>
                                    <input
                                        required
                                        type="text"
                                        name="phone"
                                        className="w-full p-2 border border-gray-300 rounded-full mb-2"
                                        placeholder="Phone"
                                        value={typingAddress ? newAddress.phone : globalAddress.phone}
                                        onChange={handleChange}
                                    />
                                </div>

                                <div className=''>
                                    <label htmlFor="paymentMethod" className="block text-xl font-medium font-semibold">
                                        Payment Method
                                    </label>
                                    <select
                                        onChange={(e) => setPaymentSelect(e.target.value)}
                                        id="paymentMethod"
                                        name="paymentMethod"
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        required
                                    >
                                        <option value="COD">COD</option>
                                        <option disabled value="UPI">UPI</option>
                                        <option disabled value="Wallet">Wallet</option>
                                    </select>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="w-full bg-green-600 text-white py-2 px-4 rounded-full hover:bg-green-700 transition-colors"
                                    >
                                        Place Order
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div>
                            <p className='text-xl pb-5'>Your Order</p>
                            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4  h-[600px] overflow-y-scroll">

                                {cartData && cartData.map(item => (
                                    <div className="border p-4 flex flex-col md:flex-row justify-between items-center bg-white rounded-xl mr-10">
                                        <div className='flex'>
                                            <img src={allApis.baseurl + item.colorDetails[0].image_url[0][0].url} className="w-28 h-28 object-cover mr-4 mb-4 md:mb-0 rounded-xl"></img>
                                            <div className="flex flex-col items-center md:items-start ">
                                                <p className="text-lg font-semibold">{item.name}</p>
                                                <p className="text-gray-600">Size: {item.size}</p>
                                                <p className="text-gray-600">Rs {item.colorDetails[0].sizeDetails[0].discount_price}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center mt-4 md:mt-4">
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckoutPage;
