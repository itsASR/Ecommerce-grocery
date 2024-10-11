import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import allApis from '../../APIs/Apis';
import MainHeader from '../../Main Ecommerce/MainHeader';
import { Apis } from '../../App';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [addedToCart, setAddedToCart] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const {setReloaddata , mail} = useContext(Apis)

    useEffect(() => {
        fetchWishlist();
    }, []);

    useEffect(() => {
        checkingCartFunc();
        checkingCartFunc2()
    }, [wishlist]);


    const checkingCartFunc2 = async () => {
        try {
            const result = await axios.post(allApis.get_cart, { email:mail});
            const cartItems = result.data.data;
            setCartItems(cartItems)
            const arr = wishlist.filter(wishlistItem => {
                return cartItems.some(cartItem => cartItem.size === wishlistItem.size && cartItem.color === wishlistItem.color && cartItem.product_id === wishlistItem.product_id ); 
            });

           
            console.log("arr", arr);
            if (arr.length > 0) {
                console.log("true value", arr);
                handleRemoveFromWishlistArray(arr);
            } else {
                console.log("not true");
            }
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };


    


    const fetchWishlist = async () => {
        try {
            const response = await axios.post(allApis.get_wishlist, { email: mail });
            setWishlist(response.data.data);
        } catch (error) {
            console.error('Error fetching wishlist:', error);
        } finally {
            setLoading(false);
        }
    };

    const checkingCartFunc = async () => {
        try {
            const result = await axios.post(allApis.get_cart, { email: mail });
            const cartItems = result.data.data;
            setCartItems(cartItems);
            const addedToCartArray = wishlist.map(item => cartItems.some(cartItem => cartItem.size === item.size && cartItem.color === item.color  && cartItem.product_id === item.product_id));
            console.log("happy6", cartItems , "happy9" , wishlist)
            setAddedToCart(addedToCartArray);
        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    };

    const handleAddToCart = async (item, index) => {
        try {
            const resultcart = await axios.post(allApis.add_cart, { email: mail, product_id: item.product_id, size: item.size, color: item.color })
            if (resultcart.data.status === true) {
                // alert('Item added to cart successfully!');
                const updatedAddedToCart = [...addedToCart];
                updatedAddedToCart[index] = true;
                setAddedToCart(updatedAddedToCart);
                checkingCartFunc();
                setReloaddata(Math.random()) 
            } else {
                console.log("Something Went Wrong")
            }

            // Optionally, you can also remove the item from wishlist here if needed
            handleRemoveFromWishlist(item);
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
    };

    const handleRemoveFromWishlist = async (item) => {
        try {
            const response = await axios.post(allApis.remove_wishlist, { email: mail, id: item.cart_id });
            console.log("Item removed from wishlist:", response);
            setWishlist(wishlist.filter(wishlistItem => wishlistItem.cart_id !== item.cart_id));
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    const handleRemoveFromWishlistArray = async (items) => {
        console.log("nair", items)
        try {
            const requests = items.map(async (item) => {
                const response = await axios.post(allApis.remove_wishlist, { email: mail, id: item.cart_id });
                console.log("Item removed from wishlist:", response);
                setAddedToCart(response)
                return response;
            });
            await Promise.all(requests);
            setWishlist(wishlist.filter(wishlistItem => !items.some(item => item.cart_id === wishlistItem.cart_id)));
        } catch (error) {
            console.error('Error removing from wishlist:', error);
        }
    };

    if (loading) {
        return <div className="text-center mt-4">Loading...</div>;
    }

    return (
        <>
            <div className='h-20'>
                <MainHeader></MainHeader>
            </div>
            <div className="container mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">My Wishlist</h1>
                {wishlist.length === 0 ? (
                    <div className="text-center">Your wishlist is empty.</div>
                ) : (
                    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
                        {wishlist.map((item, index) => (
                            <li key={index} className="border p-4 rounded shadow mx-auto ">
                                <img src={allApis.baseurl + (item.colorDetails[0].image_url[0][0].url || "")} alt={item.name} className="w-96 h-48 object-contain mb-4 mx-auto" />
                                <h2 className="text-md font-bold">{item.name}</h2>
                                <div className='flex items-end'>
                                    <p className='text-2xl'>{(item.colorDetails[0].sizeDetails[0].discount_price || "")} rs</p>
                                    <p className='text-sm text-slate-900 line-through'>{(item.colorDetails[0].sizeDetails[0].regular_price || "")} rs</p>
                                </div>
                                <p>Size: {item.size}</p>
                                <div className='flex items-center '>
                                    <p>Color: </p>
                                    <div className='w-5 h-5 rounded-full ml-2' style={{ backgroundColor: item.color }}></div>
                                </div>
                                <div className=' w-full flex  justify-center items-center pt-4'>
                                    {addedToCart[index] ? (
                                        <button className="mt-2 bg-blue-600 text-white py-2 px-12 rounded-full" disabled>
                                            Added
                                        </button>
                                    ) : (
                                        <button className="mt-2 bg-green-600 text-white py-2 px-12 rounded-full"
                                            onClick={() => handleAddToCart(item, index)}>
                                            Add to Cart
                                        </button>
                                    )}
                                    <button className="mt-2 ml-2 text-white py-1 px-4 rounded"
                                        onClick={() => handleRemoveFromWishlist(item)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="" height="30" viewBox="0 0 48 48">
                                            <path d="M 20.5 4 A 1.50015 1.50015 0 0 0 19.066406 6 L 14.640625 6 C 12.803372 6 11.082924 6.9194511 10.064453 8.4492188 L 7.6972656 12 L 7.5 12 A 1.50015 1.50015 0 1 0 7.5 15 L 8.2636719 15 A 1.50015 1.50015 0 0 0 8.6523438 15.007812 L 11.125 38.085938 C 11.423352 40.868277 13.795836 43 16.59375 43 L 31.404297 43 C 34.202211 43 36.574695 40.868277 36.873047 38.085938 L 39.347656 15.007812 A 1.50015 1.50015 0 0 0 39.728516 15 L 40.5 15 A 1.50015 1.50015 0 1 0 40.5 12 L 40.302734 12 L 37.935547 8.4492188 C 36.916254 6.9202798 35.196001 6 33.359375 6 L 28.933594 6 A 1.50015 1.50015 0 0 0 27.5 4 L 20.5 4 z M 14.640625 9 L 33.359375 9 C 34.196749 9 34.974746 9.4162203 35.439453 10.113281 L 36.697266 12 L 11.302734 12 L 12.560547 10.113281 A 1.50015 1.50015 0 0 0 12.5625 10.111328 C 13.025982 9.4151428 13.801878 9 14.640625 9 z M 11.669922 15 L 36.330078 15 L 33.890625 37.765625 C 33.752977 39.049286 32.694383 40 31.404297 40 L 16.59375 40 C 15.303664 40 14.247023 39.049286 14.109375 37.765625 L 11.669922 15 z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </>
    );
};

export default Wishlist;
