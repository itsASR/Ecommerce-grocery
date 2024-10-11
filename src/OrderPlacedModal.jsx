import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OrderPlacedModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    // Close the modal when pressing the Escape key
    React.useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    return (
        <Link to="/"><div className="fixed inset-0 flex items-center justify-center z-[50]">
            {/* Darkened background overlay */}
            <div
                onClick={onClose}
                className="fixed inset-0 bg-black  cursor-pointer"
                aria-hidden="true"
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white shadow-lg rounded-lg max-w-sm mx-auto p-6 relative"
            >
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                    aria-label="Close"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
                <div className="text-center">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-14 h-14 mx-auto mb-4 text-green-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                        />
                    </svg>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-2">Order Placed Successfully!</h2>
                    <p className="text-gray-600 mb-4">Thank you for your order. You will receive a confirmation email shortly.</p>
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        Go to Dashboard
                    </button>
                </div>
            </motion.div>
        </div></Link>
    );
};

export default OrderPlacedModal;
