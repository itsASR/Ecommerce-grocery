import React, { useContext, useEffect, useState } from 'react';
import { Apis } from '../../App';
import { useLocation } from 'react-router-dom';
import { FaCircle, FaFilter } from "react-icons/fa";
import MainHeader from '../../Main Ecommerce/MainHeader';
import MegaProductSubCategories from '../../Mega Menu/MegaProductSubCategories';

function SearchResult() {
  const { SearchResultdata, setSearchResultdata, categories, SearchResultQuery, setSearchResultQuery } = useContext(Apis);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [isSortMenuVisible, setSortMenuVisible] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');

  useEffect(() => {
    setSearchResultQuery("");
  }, [name, categories]);

  const sortProducts = (products) => {
    switch (sortOption) {
      case 'name-asc':
        return products.sort((a, b) => a.name.localeCompare(b.name));
      case 'name-desc':
        return products.sort((a, b) => b.name.localeCompare(a.name));
      case 'price-asc':
        return products.sort((a, b) => a.regular_price - b.regular_price);
      case 'price-desc':
        return products.sort((a, b) => b.regular_price - a.regular_price);
      case 'color':
        return products.sort((a, b) => a.colors[0].localeCompare(b.colors[0])); // Assuming color is a string
      default:
        return products;
    }
  };

  useEffect(() => {
    if (name) {
      const filteredProducts = categories.flatMap((category) => {
        return category.products.filter(product => product.name && product.name.toLowerCase().includes(name.toLowerCase()));
      });
      setFilteredProducts(sortProducts(filteredProducts));
    } else {
      const allProducts = categories.flatMap(category => category.products);
      setFilteredProducts(sortProducts(allProducts));
    }
  }, [name, categories, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const toggleSortMenu = () => {
    setSortMenuVisible(!isSortMenuVisible);
  };

  return (
    <>
      <p 
        className='md:hidden fixed bottom-10 right-5 text-xl bg-black p-5 rounded-full z-[100] cursor-pointer' 
        onClick={toggleSortMenu}
      >
        <FaFilter color="#fff" />
      </p>
      {isSortMenuVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-[200] bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-lg">
            <div className='sort-options text-center mb-5'>
              <p className='text-3xl py-5'>Filter</p>
              <label htmlFor="sort" className="mr-2">Sort By:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange} className="p-2 border rounded">
                <option value="">None</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                {/* <option value="color">Color</option> */}
              </select>
            </div>
            <button className="mt-2 px-4 py-2 bg-gray-300 rounded float-right" onClick={toggleSortMenu}>Done</button>
          </div>
        </div>
      )}
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
          <p className='text-2xl sm:text-5xl pb-2' style={{ display: name.length > 1 ? "none" : "block" }}>Products</p>
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
