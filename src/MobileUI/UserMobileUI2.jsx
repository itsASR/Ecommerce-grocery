import React from 'react';
import { FaUser, FaClipboardList, FaShoppingBasket, FaHeart, FaBell, FaBox, FaLifeRing } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function UserMobileUI2() {
    const menuItems = [
        { icon: <FaUser color="#4A90E2" />, text: 'My Account', link: '/user' },
        { icon: <FaClipboardList color="#50E3C2" />, text: 'My Orders', link: '/orders' },
        { icon: <FaShoppingBasket color="#F5A623" />, text: 'Grocery' },
        { icon: <FaHeart color="#D0021B" />, text: 'Wishlist' },
        { icon: <FaBell color="#F8E71C" />, text: 'Notifications' },
        { icon: <FaBox color="#BD10E0" />, text: 'Products', link: '/search?name=' },
        { icon: <FaLifeRing color="#7ED321" />, text: 'Support', link: '/support' }
    ];

   

    return (
        <div className='w-screen bg-white'>
            {menuItems.map((item, index) => (
                <div key={index} className='flex items-center py-5 px-4 border-b border-gray-300'>
                    <div className='text-xl mr-4'>
                        {item.icon}
                    </div>
                    {item.text === 'My Account' ? (
                        <Link to={item.link} className='text-lg font-medium' >
                            {item.text}
                        </Link>
                    ) : item.text === 'My Orders' ? (
                        <Link to={item.link} className='text-lg font-medium' >
                            {item.text}
                        </Link>
                    ): item.text === 'Support' ? (
                        <Link to={item.link} className='text-lg font-medium' >
                            {item.text}
                        </Link>
                    )  :item.text === 'Products' ? (
                        <Link to={item.link} className='text-lg font-medium' >
                            {item.text}
                        </Link>
                    ): (
                        <p className='text-lg font-medium'>
                            {item.text}
                        </p>
                    )}
                </div>
            ))}
            <div className='flex justify-evenly py-5 px-4 border-b border-gray-300'>
                <Link to='/login' className='flex items-center  py-2 px-8 border border-gray-300'>
                    Login
                </Link>
                <Link to='/register' className='flex items-center  py-2 px-8 border border-gray-300'>
                    Register
                </Link>
            </div>
        </div>
    );
}

export default UserMobileUI2;
