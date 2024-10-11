import React, { useContext, useEffect, useState } from 'react';
import { Apis } from '../../App';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaCircle, FaFilter } from "react-icons/fa";
import MainHeader from '../../Main Ecommerce/MainHeader';
import MegaProductSubCategories from '../../Mega Menu/MegaProductSubCategories';
import allApis from '../../APIs/Apis';
import axios from 'axios';
 
 
function SearchResult() {
  const { SearchResultdata, setSearchResultdata, categories, productDetails, SearchResultQuery, setSearchResultQuery } = useContext(Apis);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOption, setSortOption] = useState('');
  const [isSortMenuVisible, setSortMenuVisible] = useState(false);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get('name');
  const [getsubcat, setGetsubcat] = useState("Mens")
  const navigate = useNavigate();
  const [promotedTabs, setPromotedTabs] = useState([])



  function catshow(e) {
    e.preventDefault();
    navigate("/cproduct?name=" + e.target.innerText);

  }


  useEffect(() => {
    setSearchResultQuery("");
  }, [name, productDetails]);

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
      const filteredProducts = productDetails.filter(product => product.name && product.name.toLowerCase().includes(name.toLowerCase()));

      setFilteredProducts(sortProducts(filteredProducts));
    } else {
      const allProducts = productDetails;
      setFilteredProducts(sortProducts(allProducts));
    }
  }, [name, productDetails, sortOption]);

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const toggleSortMenu = () => {
    setSortMenuVisible(!isSortMenuVisible);
  };

  const promotedTabsFunc = async () => {
    try {
      const response = await axios.post(allApis.promoted_tabs)
      setPromotedTabs(response.data.data)
      console.log("searchh",response.data.data)

    } catch (error) {
      console.log("Axios Promoted tab error", error)
    }
  }


  useEffect(() => {
    promotedTabsFunc()
  }, [])

  console.log("chips", filteredProducts[0]?.colorDetails[0].sizeDetails[0].discount_price)

  return (
    <>
      {/* Filter/Sort Button */}
      <p
        className='fixed bottom-10 right-5 text-xl bg-black p-3 rounded-full z-[100] cursor-pointer shadow-md hover:shadow-lg transition duration-300'
        onClick={toggleSortMenu}
      >
        <FaFilter color="#fff" />
      </p>

      {/* Sort Menu */}
      {isSortMenuVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-[200] bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-xl">
            <div className='sort-options text-center mb-4'>
              <p className='text-2xl font-bold pb-4'>Filter & Sort</p>
              <label htmlFor="sort" className="mr-2">Sort By:</label>
              <select id="sort" value={sortOption} onChange={handleSortChange} className="p-2 border rounded">
                <option value="">None</option>
                <option value="name-asc">Name (A-Z)</option>
                <option value="name-desc">Name (Z-A)</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
              </select>
            </div>
            <button className="mt-4 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition duration-300" onClick={toggleSortMenu}>Done</button>
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="bg-white">
        <div className='md:h-20'>
          {/* Main Header component */}
          <MainHeader />
        </div>
        {/* Navigation */}
        <div className='w-full h-10 bg-gray-200 flex items-center'>
          <ul className='no-scrollbar flex [&>li]:px-2 sm:[&>li]:px-5 px-4 sm:px-10 text-xs sm:text-sm overflow-x-auto whitespace-nowrap'>
            {
              promotedTabs.map(items => (
                <li><Link to={`/cproduct?name=${items.name}`}>{items.name}</Link></li>
              ))
            }
          </ul>
        </div>
        {/* Page Header */}
        <div className='mx-auto max-w-7xl px-4  sm:px-6 lg:px-8'>
          <div className="">
            <h2 class="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center pt-5">{name?.toUpperCase()}</h2>

            <h2 class="font-manrope font-bold text-3xl min-[400px]:text-4xl text-black mb-8 max-lg:text-center" style={{ display: name.length > 1 ? "none" : "block" }} >Available Products</h2>
          </div>

          {/* Product Grid */}
          <div class="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {filteredProducts.map((product, index) => (
              <Link to={`/product?id=${product.id}`} key={index} className="hover:no-underline ">
                <div className="max-w-[384px] mx-auto">
                  <div className="w-full max-w-sm aspect-square h-80  relative">
                    <img src={allApis.baseurl + product.colorDetails[0].image_url[0].url} alt="cream image" className="w-full h-full rounded-xl object-cover" />
                    {product.colorDetails[0].sizeDetails[0].percent_off && (
                                <div className="font-semibold">
                                    <p className='bg-[#FC5732] text-white px-2 md:px-3 md:text-md text-xs absolute rounded-xl top-3 right-3 z-50'>
                                        {product.colorDetails[0].sizeDetails[0].percent_off}% OFF
                                    </p>
                                </div>
                            )}
                    {/* <span
                      className="py-1 min-[400px]:py-2 px-2 min-[400px]:px-2 cursor-pointer rounded-lg bg-gradient-to-tr from-green-600 to-green-400 font-medium text-base leading-7 text-white absolute top-3 right-3 z-10">20%
                      Off</span> */}
                  </div>
                  {/* <div className="card-image relative overflow-hidden h-56 md:h-72">
                  <img
                    src={allApis.baseurl + product.colorDetails[0].image_url[0].url}
                    // loading="lazy"
                    className="h-full w-full object-cover"
                    alt={product.title}
                  />
                </div> */}
                  <div className="color-variants flex items-center mt-2">
                    {product.colorDetails.map((color, idx) => (
                      <FaCircle key={idx} className="ml-2" style={{ color: color.color }} />
                    ))}
                  </div>
                  <div className="p-4">
                    <p className="text-base font-semibold">{product.name.slice(0, 30)}</p>
                    <div className="flex justify-between mt-2">
                      <p className=" text-xl font-semibold leading-8 text-indigo-600">Rs {product.colorDetails[0].sizeDetails[0].discount_price}</p>
                      <p className="text-base text-gray-500 line-through">Rs {product.colorDetails[0].sizeDetails[0].regular_price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>

  );
}

export default SearchResult;
