import React, { useContext, useEffect, useState } from 'react';
import { Apis } from '../../App';
import { useLocation } from 'react-router-dom';
import { FaCircle } from "react-icons/fa";
import MainHeader from '../../Main Ecommerce/MainHeader';
import MegaProductSubCategories from '../../Mega Menu/MegaProductSubCategories';
import {  FaFilter } from 'react-icons/fa';



function SearchResult() {
  const { SearchResultdata, setSearchResultdata, categories, SearchResultQuery, setSearchResultQuery } = useContext(Apis);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  useEffect(() => {
    setSearchResultQuery("")
  }, [name, categories]);

  useEffect(() => {
    if (name) {
      const filteredProducts = categories.flatMap((category) => {
        return category.products.filter(product => product.name && product.name.toLowerCase().includes(name.toLowerCase()));
      });
      setFilteredProducts(filteredProducts);
    } else {
      const allProducts = categories.flatMap(category => category.products);
      setFilteredProducts(allProducts);
    }
  }, [name, categories]);

  return (
    <>
    <p className='md:hidden fixed bottom-10 right-5 text-xl bg-black p-5 rounded-full z-[100]'><FaFilter color="#ffff" /></p>
      <div className="bg-white">
        <div className='md:h-20'>
         <MainHeader></MainHeader>
        </div>
        <div className='w-full h-10 bg-gray-200 flex items-center'>
          <ul className='no-scrollbar flex [&>li]:px-2 sm:[&>li]:px-5 px-4 sm:px-10 text-xs sm:text-sm overflow-x-auto whitespace-nowrap'>
            <li className='relative product-page-categories'><span className='cursor-pointer'>Mens</span>
              <div className='absolute z-10 hidden product-page-subcategories'>
                <MegaProductSubCategories></MegaProductSubCategories>
              </div>
            </li>
            <li className="cursor-pointer">Women</li>
            <li className="cursor-pointer">Kids</li>
            <li className="cursor-pointer">Designers</li>
            <li className="cursor-pointer">Clothing</li>
            <li className="cursor-pointer">Footwear</li>
            <li className="cursor-pointer">Accessories</li>
            <li className="cursor-pointer">Intimates</li>
            <li className="cursor-pointer">Offers</li>
          </ul>
        </div>
        <div className='text-center py-10 sm:py-20'>
          <p className='text-2xl sm:text-5xl pb-2'>{name?.toUpperCase()}</p>
          <p className='text-2xl sm:text-5xl pb-2' style={{display: name.length > 1 ? "none" : "block"}}>Products</p>
          
        </div>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-4 px-4 sm:px-7 gap-y-10 pb-12'>
          {filteredProducts.map((product, index) => (
            <div className="product-Div" key={index}>
              <div className="card h-56 md:h-[350px] relative overflow-hidden">
                <img src={product.image_url} loading='lazy' className='h-full w-full object-fill' alt={product.title} />
              </div>
              <div>
                <p className='pt-2 text-sm sm:text-base'>{product.title}</p>
                <p className='text-sm sm:text-base'>Rs {product.regular_price}</p>
                <div className="color-variant flex [&>*]:mr-2 pt-1">
                  {product.colors.map((color, idx) => (
                    <FaCircle className='border-[1px] border-black rounded-full' style={{ color: color }} key={idx} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SearchResult;
