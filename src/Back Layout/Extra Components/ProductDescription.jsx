import React, { useState } from 'react';
import StarRating from './StarRating';

const ProductDescription = () => {
  const [activeTab, setActiveTab] = useState('description');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [quantity, setQuantity] = useState(1);

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

  return (
    <div className=" ">
      <div className=" mx-auto px-4 py-8">
        <div className="max-w-screen mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className='flex flex-col ml-10'>
              <div className="md:flex-shrink-0 w-20 h-20 bg-blue-200 mt-10 ">
                <img
                  className="h-full w-full object-cover "
                  src="https://picsum.photos/200/300"
                  alt="Product"
                />
              </div>

              <div className="md:flex-shrink-0 w-20 h-20 bg-blue-200 mt-10">
                <img
                  className="h-full w-full object-cover "
                  src="https://picsum.photos/200/300"
                  alt="Product"
                />
              </div>
              <div className="md:flex-shrink-0 w-20 h-20 bg-blue-200 mt-10">
                <img
                  className="h-full w-full object-cover "
                  src="https://picsum.photos/200/300"
                  alt="Product"
                />
              </div>
            </div>
            <div className="flex  ml-10 mt-10 ">
              <img
                className="h-[600px] w-[500px] object-cover "
                src="https://picsum.photos/200/300"
                alt="Product"
              />

            </div>
            <div className="p-8 w-[700px] mt-10">
              <h2 className="text-3xl font-semibold mb-4">Product Name</h2>
              <p className="text-gray-700 text-lg mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <div className="flex items-center mb-6">
                <StarRating rating={4} />
                <span className="text-gray-600 ml-2">4.5 (24 Reviews)</span>
              </div>
              <div className="flex items-center mb-6">
                <span className="text-gray-600 mr-2">Sizes:</span>
                <button className="px-3 py-1 border border-gray-300 rounded-lg mr-2">XS</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg mr-2">S</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg mr-2">M</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg mr-2">L</button>
                <button className="px-3 py-1 border border-gray-300 rounded-lg mr-2">XL</button>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Colors:</p>
                <div className="flex">
                  <div className="w-6 h-6 bg-red-500 rounded-full mr-2"></div>
                  <div className="w-6 h-6 bg-blue-500 rounded-full mr-2"></div>
                  <div className="w-6 h-6 bg-green-500 rounded-full mr-2"></div>
                </div>
              </div>
              <div className="mb-6">
                <p className="text-gray-600 mb-2">Quantity:</p>
                <div className="flex items-center">
                  <button onClick={decrementQuantity} className="px-3 py-1 border border-gray-300 rounded-lg mr-2">-</button>
                  <span className="text-xl font-semibold mx-2">{quantity}</span>
                  <button onClick={incrementQuantity} className="px-3 py-1 border border-gray-300 rounded-lg mr-2">+</button>
                </div>
              </div>
              <p className="text-gray-700 text-lg font-semibold mb-6">Price: $99.99</p>
              <button className="bg-black text-white px-36 py-3 rounded-lg hover:bg-blue-600">
                Add to Cart
              </button>
            </div>
          </div>
          <div className="md:px-8 py-8">
            <div className="flex border-b">
              <button
                className={`${activeTab === 'description'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  } mr-1 px-4 py-2 border-b-2 font-medium`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </button>
              <button
                className={`${activeTab === 'reviews'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  } mr-1 px-4 py-2 border-b-2 font-medium`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews
              </button>
              <button
                className={`${activeTab === 'returnPolicy'
                  ? 'border-blue-500 text-blue-500'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
                  } px-4 py-2 border-b-2 font-medium`}
                onClick={() => setActiveTab('returnPolicy')}
              >
                Return Policy
              </button>
            </div>
            <div className="mt-4">
              {activeTab === 'description' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product Description</h3>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est
                    laborum.
                  </p>
                </div>
              )}
              {activeTab === 'reviews' && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Reviews</h3>
                  <form onSubmit={handleSubmitReview} className="mb-4">
                    <StarRating onStarClick={handleStarClick} />
                    <textarea
                      className="w-full p-2 border border-gray-300 rounded mt-2"
                      placeholder="Write your review..."
                      value={review}
                      onChange={handleReviewChange}
                    ></textarea>
                    <button
                      type="submit"
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
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
      </div>
    </div>
  );
};

export default ProductDescription;
