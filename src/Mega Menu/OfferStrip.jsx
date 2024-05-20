import React from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';

function OfferStrip() {
    const offers = [
        'Summer Sale Offer Save Up to 70%',
        'Summer Sale Offer Save Up to 70%',
        'Summer Sale Offer Save Up to 70%',
        'Summer Sale Offer Save Up to 70%',
        'Summer Sale Offer Save Up to 70%',
        'Summer Sale Offer Save Up to 70%',
    ];

    return (
        <div className='logos md:flex hidden'>
            {Array(2).fill().map((_, index) => (
                <div key={index} className='h-20 offerstrip'>
                    {offers.map((offer, i) => (
                        <div key={i} className='flex items-center text-2xl font-semibold px-5'>
                            <AiFillThunderbolt />
                            <p className='pl-2'>{offer}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default OfferStrip;
