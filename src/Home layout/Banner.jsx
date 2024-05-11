// components/Banner.js
import React from 'react';
import { IoSearchSharp } from 'react-icons/io5';

const Banner = () => {
  return (
    <section className="banner  w-full bg-no-repeat bg-cover bg-fill-thumbnail py-20 lg:py-40 flex items-center">
      <div className="container mx-auto lg:w-3/6 text-center">
        <h2 className="text-5xl font-bold mb-6 ">Discover Freshness Every Day</h2>
        <p className="text-lg  mb-10">
          Elevate your meals with the finest selection of farm-fresh produce, meats, and more.
        </p>
        <div className="flex justify-center items-center rounded-full bg-white bg-opacity-50 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search for groceries..."
            className="px-4 py-2 w-full rounded-l-full focus:outline-none"
          />
          <button className="px-6 py-2 bg-green-500 text-white rounded-r-full hover:bg-green-600 focus:outline-none">
            <IoSearchSharp className="text-3xl" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
