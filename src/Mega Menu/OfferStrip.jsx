import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AiFillThunderbolt } from 'react-icons/ai';
import allApis from '../APIs/Apis';


function OfferStrip() {
    const [offerS , setOffers] = useState("")
    

    const getOfferFunc = async () => {
        const response = await axios.post(allApis.offer_strip , {name: "Offer banner text"})
      
        setOffers(response.data.data[0]?.offer_text)
    }

    const offers = [
        offerS,offerS,offerS,offerS,offerS
    ];

    useEffect(()=>{
        getOfferFunc()
    },[])


    return (
        <div className='logos md:flex hidden'>
            {Array(2).fill().map((_, index) => (
                <div key={index} className='h-20 offerstrip'>
                    {offers.map((offer, i) => (
                        <div key={i} className='flex items-center text-2xl font-semibold px-5'>
                            <AiFillThunderbolt />
                            <p className='pl-2'>{offer || ""}</p>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default OfferStrip;
