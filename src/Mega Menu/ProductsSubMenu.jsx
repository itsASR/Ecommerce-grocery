import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Apis } from '../App';

function ProductsSubMenu() {
    const { categories } = useContext(Apis);

  

    return (
        <div className=''>
            <div className='bg-white mt-6 rounded-xl'>
                <div className='mx-8 pt-5 pb-8 flex'>
                    {categories.map((category, index) => (
                        <div key={index} className='mr-8'>
                            <h1 className='text-lg font-semibold mb-2 text-nowrap'>{category.category.name}</h1>
                            <ul className='space-y-1'>
                                {category.products.map((product, productIndex) => (
                                    <li key={productIndex} className='text-sm font-normal text-gray-600 text-nowrap'>{product.name}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductsSubMenu;
