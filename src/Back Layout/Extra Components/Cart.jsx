import React, { useContext, useEffect, useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'; // Importing Trash icon from Feather Icons
import MainHeader from '../../Main Ecommerce/MainHeader';
import axios from 'axios';
import allApis from '../../APIs/Apis';
import { Apis } from '../../App';
import { Link, useNavigate } from 'react-router-dom';

function Cart() {
    // const [cartData, setCartData] = useState([]);
    const [CartItems, setCartItems] = useState([]);
    const { setCartLength, cartData, setCartData, setReloaddata, cartLength , mail , reloaddata} = useContext(Apis)
    const navigate = useNavigate()
    const [cartvariable , setCartVariable] = useState(null)
    // Function to calculate the total amount
    const calculateTotal = () => {
        return cartData.reduce((total, item) => total + (item.colorDetails[0].sizeDetails[0].discount_price * item.count), 0);
    };

    // Function to calculate the total item count
    const calculateTotalItemCount = () => {

        return CartItems.reduce(
            (previousValue, currentValue) => previousValue + currentValue,
            0);

    };


    // useEffect(()=>{
    //     calculateTotalItemCount()
    // })


    function CalculateTotalitems() {
        const countarr = [];
        cartData.map((items) => {
            if (items.count === undefined) {
                countarr.push(1)
            } else {
                countarr.push(items.count)
            }

            setCartItems(countarr);
        })

    }

    function CalculateTotalitems1() {

        cartData.map((items) => {
            if (items.count === undefined) {
                items.count = 1
            }

        })

    }


    // useEffect(()=>{
    // CalculateTotalitems1()
    // }, [cartData])


    useEffect(() => {
        CalculateTotalitems()
        calculateTotalItemCount()
        CalculateTotalitems1()
        setCartLength(cartData.length)
        console.log("cart amil", mail)
        localStorage.removeItem("cartdataLocal")
    }, [cartData, mail , reloaddata])

    // Function to update the count of an item in the cart
    const updateItemCount = (id, count) => {
        setCartData(prevCartData =>
            prevCartData.map(item =>
                item.cart_id === id ? { ...item, count: count } : item
            )
        );
    };

        

    function checkoutFunc() {
        const myObjectString = JSON.stringify(cartData);
        localStorage.setItem("cartdataLocal", myObjectString)
        checkoutRedirect()

    }

    function checkoutRedirect() {
        let cartdataLocalVariable = localStorage.getItem("cartdataLocal")
        if (cartdataLocalVariable) {
            navigate("/checkout")
        } else {
            alert("Something went wrong in your cart")
        }
    }


    // Function to remove an item from the cart
    const removeItem = async (id) => {
        try {
            const removeCart = await axios.post(allApis.remove_cart, { email: mail, id })
            console.log("Remove Function", removeCart)
            if (removeCart.data.status === true) {
                setReloaddata(Math.random())
            } else {
                console.log("Error Not Able to Delete")
            }
            // console.log("Remove Function", removeCart.data.status === true)
        } catch (error) {
            console.log(error)
        }
    };




    const allOrders = () => {
        return (
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-[60vw] "
            >
                {cartData && cartData.map(item => (
                    <div className="border p-4 flex flex-col md:flex-row justify-between items-center bg-white">
                        <div className='flex'>
                            <img src={allApis.baseurl + item.colorDetails[0].image_url[0][0].url} className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"></img>
                            <div className="flex flex-col items-center md:items-start ">
                                <p className="text-lg font-semibold">{item.name}</p>
                                <p className="text-gray-600">Size: {item.size}</p>
                                <p className="text-gray-600">Rs {item.colorDetails[0].sizeDetails[0].discount_price}</p>
                            </div>
                        </div>
                        <div className="flex items-center mt-4 md:mt-0">
                            <input
                                onKeyDown={(e) => e.preventDefault()}
                                type="number"
                                min="1"
                                max="15"
                                value={item.count ? item.count : "1"}
                                onChange={(e) => updateItemCount(item.cart_id, parseInt(e.target.value))}
                                className="w-16 h-10 border rounded-md px-2"
                            />


                            <button onClick={() => removeItem(item.cart_id)} className="ml-2">
                                <FiTrash2 className="text-red-500 cursor-pointer" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    // console.log("cartData", cartData)

    return (
        <>
            <MainHeader></MainHeader>
            <div className="container mx-auto px-4 py-8 md:pt-28">
                <h1 className="text-2xl font-bold mb-10 text-center">Shopping Cart</h1>
                <div className='container  w-screen h-96' style={{
                    backgroundImage: "url('https://mir-s3-cdn-cf.behance.net/projects/404/c1a552112421559.Y3JvcCwxMzczLDEwNzQsMzMsMA.jpg')",
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    display: cartLength ? "none" : "block"
                }}>

                </div>
                <div className='flex flex-col lg:flex-row justify-between '>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-1 gap-4 w-full lg:w-[60vw] "
                    >
                        {cartData && cartData.map((item, index) => (
                            <div key={index} className="bg-gray-100 border p-4 flex flex-col md:flex-row justify-between items-center bg-white">
                                <div className='flex'>
                                    <img src={allApis.baseurl + item.colorDetails[0].image_url[0][0].url} className="w-20 h-20 object-cover mr-4 mb-4 md:mb-0"></img>
                                    <div className="flex flex-col items-center md:items-start ">
                                        <p className="text-lg font-semibold">{item.name}</p>
                                        <p className="text-gray-600">Size: {item.size}</p>
                                        <p className="text-gray-600">Rs {item.colorDetails[0].sizeDetails[0].discount_price}</p>
                                    </div>
                                </div>
                                <div className="flex items-center mt-4 md:mt-0">
                                    <select className='w-12' onChange={(e) => updateItemCount(item.cart_id, parseInt(e.target.value))}>
                                        {
                                            (() => {
                                                let options = [];
                                                for (let i = 1; i < 16; i++) {
                                                    options.push(<option key={i}>{i}</option>);
                                                }
                                                return options;
                                            })()
                                        }

                                    </select>
                                    {/* <input
                                        onKeyDown={(e) => e.preventDefault()}
                                        type="number"
                                        min="1"
                                        max="15"
                                        value={item.count ? item.count : "1"}
                                        onChange={(e) => updateItemCount(item.cart_id, parseInt(e.target.value))}
                                        className="w-16 h-10 border rounded-md px-2"
                                    /> */}
                                    {/* <input
                                        type="number"
                                        min="1"
                                        value={CartItems}
                                        onChange={(e) => updateItemCount(item.id, parseInt(e.target.value))}
                                        className="w-16 h-10 border rounded-md px-2"
                                    /> */}

                                    <button onClick={() => removeItem(item.cart_id)} className="ml-2">
                                        <FiTrash2 className="text-red-500 cursor-pointer" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" mt-8 lg:mt-0 lg:ml-8 w-full lg:w-80 border border-gray-300 rounded-lg p-4" style={{ display: cartLength ? "block" : "none" }}>
                        <h2
                            className="font-manrope font-bold text-3xl leading-10 text-black pb-6 border-b border-gray-200 ">
                            Order Summary
                        </h2>
                        <div className="data py-6 border-b border-gray-200">
                            <div className="flex items-center justify-between gap-4 mb-5">
                                <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Total Item Count</p>
                                <p className="font-medium text-lg leading-8 text-gray-900">{calculateTotalItemCount()}</p>
                            </div>
                            <div className="flex items-center justify-between gap-4 mb-5">
                                <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Item Value</p>
                                <p className="font-medium text-lg leading-8 text-gray-900">{calculateTotal()} Rs</p>
                            </div>
                            <div className="flex items-center justify-between gap-4 mb-5">
                                <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700">Shipping</p>
                                <p className="font-medium text-lg leading-8 text-gray-600">00.00 Rs</p>
                            </div>
                            <div className="flex items-center justify-between gap-4 ">
                                <p className="font-normal text-lg leading-8 text-gray-400 transition-all duration-500 group-hover:text-gray-700 ">Coupon Code</p>
                                <p className="font-medium text-lg leading-8 text-red-500">#Not Eligible</p>
                            </div>
                            <div className="total flex items-center justify-between pt-6">
                                <p className="font-normal text-xl leading-8 text-black ">Subtotal</p>
                                <h5 className="font-manrope font-bold text-2xl leading-9 text-indigo-600">{calculateTotal()} Rs</h5>
                            </div>
                        </div>
                        <button
                            className="w-full text-center bg-indigo-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-indigo-700" onClick={() => checkoutFunc()}>Checkout</button>
                        {/* <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                            Proceed to Checkout
                        </button> */}
                    </div>
                </div>
            </div>

        </>
    );
}

export default Cart;
