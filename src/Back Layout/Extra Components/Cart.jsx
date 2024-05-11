import React, { useState } from 'react';
import { FiTrash2 } from 'react-icons/fi'; // Importing Trash icon from Feather Icons

function Cart() {
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Product 1', price: 10, count: 1 },
        { id: 2, name: 'Product 2', price: 20, count: 1 },
        { id: 3, name: 'Product 3', price: 15, count: 1 },
    ]);

    // Function to calculate the total amount
    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + (item.price * item.count), 0);
    };

    // Function to calculate the total item count
    const calculateTotalItemCount = () => {
        return cartItems.reduce((total, item) => total + item.count, 0);
    };

    // Function to update the count of an item in the cart
    const updateItemCount = (id, count) => {
        setCartItems(cartItems.map(item => {
            if (item.id === id) {
                return { ...item, count };
            }
            return item;
        }));
    };

    // Function to remove an item from the cart
    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            <div className='flex justify-between'>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 w-[60vw]">
                    {cartItems.map(item => (
                        <div key={item.id} className="border p-4 flex justify-between items-center">
                            <img src='https://picsum.photos/id/237/200/300' alt={item.name} className="w-20 h-20 object-cover mr-4"></img>
                            <div>
                                <p className="text-lg font-semibold">{item.name}</p>
                                <p className="text-gray-600">Rs {item.price}</p>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="number"
                                    min="1"
                                    value={item.count}
                                    onChange={(e) => updateItemCount(item.id, parseInt(e.target.value))}
                                    className="w-16 h-10 border rounded-md px-2"
                                />
                                <button onClick={() => removeItem(item.id)}>
                                    <FiTrash2 className="text-red-500 cursor-pointer" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-8 w-80 border border-gray-300 rounded-lg p-4">
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Total Item Count:</p>
                        <p className="text-lg">{calculateTotalItemCount()}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Item Value:</p>
                        <p className="text-lg">Rs {calculateTotal()}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-lg font-semibold">Shipping Charge:</p>
                        <p className="text-lg">Rs 0</p>
                    </div>
                    <hr className="my-4 border-t border-gray-300" />
                    <div>
                        <p className="text-xl font-bold">Total:</p>
                        <p className="text-xl font-bold">Rs {calculateTotal()}</p>
                    </div>
                    <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
