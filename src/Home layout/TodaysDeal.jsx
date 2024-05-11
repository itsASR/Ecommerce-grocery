import React, { useContext, useEffect } from 'react';
import milk from '/milk.png'
import cover from '/cover.jpg'
import axios from 'axios';
import { Apis } from '../App';




function TodaysDeal() {

    const { products } = useContext(Apis);


    return (
        <>
            <div className="container mx-auto py-8 mt-10">
                <h2 className="text-4xl font-bold mb-4 ml-10">Deal Of The Day</h2>
                <div className="grid grid-cols-2 gap-5 md:grid-cols-5">
                    {/* Product cards */}
                    {
                        products.map((result) => {
                            return result.products.map((allProducts) => {
                                return <div className="bg-white rounded shadow-md p-4 text-center">
                                    <div className="imgDiv w-40 mx-auto h   bg-gray-300 overflow-hidden rounded-lg">
                                        <img src={allProducts.image_url} className='object-scale-down'></img>
                                    </div>
                                    <div className="text-lg font-semibold mb-2">
                                        <p>{allProducts.name}</p></div>
                                    <div className="text-gray-600 mb-2">Price: {allProducts.price}</div>
                                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => { handleclick(ramu) }} >Add to Cart</button>
                                </div>
                            })
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default TodaysDeal