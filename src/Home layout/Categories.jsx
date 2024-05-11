import React, { useContext } from 'react'
import milk from '/milk.png'
import cover from '/cover.jpg'
import { FaLocationArrow } from "react-icons/fa";
import { Apis } from '../App';


function Categories() {

    const { products } = useContext(Apis);


    return (
        <>

            <div className="container mx-auto py-8">
                <h2 className="text-4xl font-bold mb-4 ml-10">Explore By Categories</h2>
                <div className="grid grid-cols-7  gap-y-20">
                    {/* Product cards */}
                    {
                        products.map((datas) => {
                            return <div className="bg-white rounded shadow-md p-4 text-center w-40 h-40">
                                <div><img src={datas.category_image_url} alt="Product" className="mb-4 mx-auto " /></div>
                                <div className="text-lg font-semibold mb-2">
                                    <h2>{datas.name}</h2>
                                </div>
                            </div>
                        })
                    }





                    {/* ---------All category card------------- */}


                    <div className="bg-white rounded shadow-md p-4 text-center w-40 h-40">
                                <div><p  className="mb-4 mx-auto ">Discover all Categories</p> </div>
                                <div className="text-lg font-semibold mb-2   text-center animate-bounce flex justify-center pt-10">
                                <FaLocationArrow />
                                </div>
                            </div>

                    






                </div>
            </div>


        </>
    )
}

export default Categories