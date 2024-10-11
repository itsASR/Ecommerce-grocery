import React, { useContext, useEffect, useState } from 'react';
import StarRating from './StarRating';
import { Link, useLocation } from 'react-router-dom';
import { Apis } from '../../App';
import MainHeader from '../../Main Ecommerce/MainHeader';
// import { addcartfunc } from '../../Cartfunc';
import allApis from '../../APIs/Apis';
import axios from 'axios';
import Review from './Review';
import { FaHeart } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";


const ProductDescription = () => {
  const { productDetails, setReloaddata,mail } = useContext(Apis);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeTab, setActiveTab] = useState('description');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get('id');
  const [singleDetail, setSingleDetail] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [selectedSize, setSelectedSize] = useState(null);
  const [activeColor, setActiveColor] = useState("");
  const [priceTab, setPriceTab] = useState("");
  const [warning, setWarning] = useState("");
  const [btn, setBtn] = useState(false);
  const [wishlistCondition, setWishlistCondition] = useState(false)



  useEffect(() => {
    if (id) {
      const filteredProducts = productDetails.filter(product => String(product.id).includes(id));
      setFilteredProducts(filteredProducts);
      if (filteredProducts.length > 0) {
        setSingleDetail(filteredProducts[0].colorDetails[0]);
      }
    }
  }, [id, productDetails]);

  useEffect(() => {
    if (singleDetail) {
      setImagePath(singleDetail.image_url?.[0]?.url || "");
      setActiveColor(singleDetail.color);
    }
  }, [singleDetail]);

  const handleImageClick = (imgUrl) => {
    setImagePath(imgUrl);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleStarClick = (value) => {
    setRating(value);
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (review.trim() !== '' && rating !== 0) {
      setReviews([...reviews, { review, rating }]);
      setReview('');
      setRating(0);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };


  function PriceFunc() {

    singleDetail.sizeDetails?.map((size) => {
      if (size.size === selectedSize) {
        setPriceTab(size.discount_price)
      }
    })
  }

  useEffect(() => {
    PriceFunc()
  }, [selectedSize])

  function setdatafunc(color) {
    setSingleDetail(color);
    setPriceTab("");
    setSelectedSize("");
  }


  function sendOrderFunc(product) {
   
    addcartfunc(product, activeColor, selectedSize)
  }

  const addcartfunc = async (product, activeColor, selectedSize) => {
    // const {setReloaddata} = useContext(A)
    // console.log("product_idproduct_id", product, activeColor, selectedSize)
    try {
      const response = await axios.post(allApis.add_cart, {
        email: mail,
        product_id: product.id,
        size: selectedSize,
        color: activeColor
      })
      if (response.data.status === true) {
        setReloaddata(Math.random())
        setBtn(true)
      }
      console.log("my res from func is ", response);
    } catch (error) {
      setWarning("Something went wrong")
      console.log("la error", error)
      if (error.response.data.status) {
        setWarning(error.response.data.message)
      } else {
        setWarning("Something went wrong")
      }
    }
  };


  async function checkingItem() {
    try {
      const result = await axios.post(allApis.get_cart, { email: mail });
      const foundInCart = result.data.data.some(item =>
        item.product_id === singleDetail.id &&
        item.size === selectedSize &&
        item.color === activeColor
      );
      if (foundInCart) {
        console.log("Product is already in the cart.");
        setBtn(true)
      } else {
        console.log("Product is not in the cart.");
        setBtn(false)
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }

  async function checkingWishlist() {
    try {
      const result = await axios.post(allApis.get_wishlist, { email: mail });
      const foundInCart = result.data.data.some(item =>
        item.product_id === singleDetail.id &&
        item.size === selectedSize &&
        item.color === activeColor
      );
      if (foundInCart) {
        console.log("Product is already in the cart.");
        setWishlistCondition(true)
      } else {
        console.log("Product is not in the cart.");
        setWishlistCondition(false)
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }



  useEffect(() => {
    checkingItem()
    checkingWishlist()
  }, [selectedSize, activeColor])


  async function addWishlistFunc(product) {
    // console.log(product.id)
    try {
      const result = await axios.post(allApis.add_wishlist, { email: mail, product_id: product.id, size: selectedSize, color: activeColor })
      if (result.data.status === true) {
        setWishlistCondition(true)
      }
    } catch (error) {
      setWarning("Failed to Add in Wishlist")
      console.log("failed to add wiahlsih" , error)
    }
  }


  // const fetchWishlist = async () => {
  //   try {
  //     const response = await axios.post(allApis.get_wishlist, { email: "tsoni9742@gmail.com" })
  //     console.log("fetch wishlist", response.data)
      
  //   } catch (error) {
  //     console.log("error in getting wishlist", error)
  //   }
  // }

  // useEffect(() => {
  //   fetchWishlist()
  // }, [])

  // console.log("all products ", filteredProducts)
  return (
    <div>
      <MainHeader />
      <div className="mx-auto px-4 py-8 pt-16">
        {filteredProducts.map((product) => (
          <div key={product.id} className="max-w-screen mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className='flex flex-col ml-10'>
                {singleDetail.image_url && singleDetail.image_url.map((img) => (
                  <div key={img.url} className="md:flex-shrink-0 w-20 h-20 mt-20" onClick={() => handleImageClick(img.url)}>
                    <img className="h-full w-full object-contain" src={allApis.baseurl + img.url} alt="Product" />
                  </div>
                ))}
              </div>
              <div className="flex ml-10 mt-10">
                <img className="h-[600px] w-[500px] object-contain" src={allApis.baseurl + imagePath} alt="Product" />
              </div>
              <div className="p-8 w-[700px] mt-10">
                <h2 className="text-3xl font-semibold mb-2">{product.name}</h2>
                <div className="flex items-center mb-4">
                  <StarRating rating={4} />
                  <span className="text-gray-600 ml-2">4.5 (24 Reviews)</span>
                </div>
                <div className="mb-6">
                  <p className="text-gray-600">Colors:</p>
                  <div className="flex">
                    {product.colorDetails.map((color) => (
                      <div key={color.color} className={`mr-1 border-4 rounded-full h-6 w-6 ${activeColor === color.color ? 'border-blue-500' : 'border-transparent'} `} style={{ backgroundColor: color.color }} onClick={() => setdatafunc(color)} onMouseDown={() => setActiveColor(color.color)}></div>
                    ))}
                  </div>
                </div>
                <div className="flex items-center mb-6">
                  <span className="text-gray-600 mr-2">Sizes:</span>
                  {singleDetail.sizeDetails && singleDetail.sizeDetails.map((size) => (
                    <button key={size.size} className={`px-3 py-1 border border-gray-300 rounded-lg mr-2 ${selectedSize === size.size ? 'bg-blue-500 text-white' : 'bg-gray-200'}`} onClick={() => setSelectedSize(size.size)} onMouseDown={() => { setWarning("") }}>
                      {size.size}
                    </button>
                  ))}
                </div>

                {/* <div className="mb-6">
                  <p className="text-gray-600 mb-2">Quantity:</p>
                  <div className="flex items-center">
                    <button onClick={decrementQuantity} className="px-3 py-1 border border-gray-300 rounded-lg mr-2">-</button>
                    <span className="text-xl font-semibold mx-2">{quantity}</span>
                    <button onClick={incrementQuantity} className="px-3 py-1 border border-gray-300 rounded-lg">+</button>
                  </div>
                </div> */}
                <p className="text-gray-700 text-2xl font-semibold mb-6 flex">Price: {priceTab ? <p className='pl-2 text-blue-600 text-2xl font-semibold'>{priceTab} RS</p> : "Please Select Size"}</p>
                <div className='w-96 h-32 bg-green-200 mb-5'>
                  <img src='https://www.shutterstock.com/image-vector/super-sale-discount-e-commerce-260nw-1384030046.jpg' className='w-full h-full object-cover'></img>
                </div>
                <p className='text-red-800 font-bold pb-2'>{warning}</p>
                <div className='flex'>
                  <button
                    className="mr-5 group transition-all duration-500 p-4 rounded-full bg-indigo-50 hover:bg-indigo-100 hover:shadow-sm hover:shadow-indigo-300">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26"
                        fill="none">
                        <path
                          d="M4.47084 14.3196L13.0281 22.7501L21.9599 13.9506M13.0034 5.07888C15.4786 2.64037 19.5008 2.64037 21.976 5.07888C24.4511 7.5254 24.4511 11.4799 21.9841 13.9265M12.9956 5.07888C10.5204 2.64037 6.49824 2.64037 4.02307 5.07888C1.54789 7.51738 1.54789 11.4799 4.02307 13.9184M4.02307 13.9184L4.04407 13.939M4.02307 13.9184L4.46274 14.3115"
                          stroke="#4F46E5" stroke-width="1.6" stroke-miterlimit="10"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg> */}
                    {wishlistCondition ? <FaHeart className='text-red-500 text-xl'  /> : <CiHeart className='text-xl' onClick={() => priceTab ? addWishlistFunc(product) : setWarning("Please Select the Size or Quantity*")} />}

                  </button>
                  <button className="rounded-full bg-green-600 text-white px-24 py-3  hover:bg-green-700" onClick={() => priceTab ? sendOrderFunc(product) : setWarning("Please Select the Size or Quantity*")} style={{ display: btn ? "none" : "block" }}>
                    Add to Cart
                  </button>
                  <Link to="/cart"><button className="rounded-full bg-blue-600 text-white px-20 py-4 flex items-center justify-center hover:bg-blue-700" style={{ display: btn ? "flex" : "none" }}>
                    {/* SVG Cart Icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 mr-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 12.91a2 2 0 0 0 1.97 1.59h10.7a2 2 0 0 0 1.97-1.59L23 6H6" />
                    </svg>
                    <span className="ml-2">View Cart</span>
                  </button></Link>

                </div>
              </div>
            </div>



            <div className="md:px-8 py-8">
              <div className="flex border-b">
                <button className={`${activeTab === 'description' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-700'} mr-1 px-4 py-2 border-b-2 font-medium`} onClick={() => setActiveTab('description')}>
                  Description
                </button>
                <button className={`${activeTab === 'reviews' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-700'} mr-1 px-4 py-2 border-b-2 font-medium`} onClick={() => setActiveTab('reviews')}>
                  Reviews
                </button>
                <button className={`${activeTab === 'returnPolicy' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-500 hover:text-gray-700'} px-4 py-2 border-b-2 font-medium`} onClick={() => setActiveTab('returnPolicy')}>
                  Return Policy
                </button>
              </div>
              <div className="mt-4">
                {activeTab === 'description' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                    <p className="text-gray-700">{singleDetail.description}</p>
                  </div>
                )}
                {activeTab === 'reviews' && (
                  <div>
                    <Review></Review>
                    <h3 className="text-lg font-semibold mb-4">Reviews</h3>
                    <form onSubmit={handleSubmitReview} className="mb-4">
                      <StarRating onStarClick={handleStarClick} />
                      <textarea className="w-full p-2 border border-gray-300 rounded mt-2" placeholder="Write your review..." value={review} onChange={handleReviewChange}></textarea>
                      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                        Submit Review
                      </button>
                    </form>
                    {reviews.length === 0 ? (
                      <p className="text-gray-700">No reviews yet.</p>
                    ) : (
                      <ul>
                        {reviews.map((review, index) => (
                          <li key={index} className="text-gray-700">
                            <div className="flex items-center mb-2">
                              <StarRating rating={review.rating} />
                            </div>
                            <p>{review.review}</p>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
                {activeTab === 'returnPolicy' && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Return Policy</h3>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDescription;
