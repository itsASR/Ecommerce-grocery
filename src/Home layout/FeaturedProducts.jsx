import React from 'react'

function FeaturedProducts() {
  return (
    <div className="container mx-auto py-8 mb-10">
      <h2 className="text-4xl font-bold mb-4 ml-10">Featured Products</h2>
      <div className="grid grid-cols-2 gap-1 lg:grid-cols-6">
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4 text-center ">
          <img src="https://via.placeholder.com/2" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4 ">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        {/* Product cards */}
        <div className="bg-white rounded shadow-md p-4">
          <img src="https://via.placeholder.com/250" alt="Product" className="w-full mb-4" />
          <div className="text-lg font-semibold mb-2">Product Name</div>
          <div className="text-gray-600 mb-2">$99.99</div>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        </div>
        
       
       
        
        {/* Repeat this product card structure for other products */}
      </div>
    </div>
  )
}

export default FeaturedProducts