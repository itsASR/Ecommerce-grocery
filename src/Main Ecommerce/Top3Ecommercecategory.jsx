import React from 'react';

function Top3Ecommercecategory() {
  return (
    <>
      <div className='text-center md:pt-20 pb-5 pt-10'>
        <p className='md:text-5xl pb-2  pl-5 md:pl-0'>Fashion!</p>
        <div className='border-b mx-16 border-black md:hidden'></div>
        <p className='mx-10 '>Discover the Latest Trends in Men's, Women's, and Kid's</p>
      </div>

      <div className='hidden md:block'>
        <div className='container mx-auto flex flex-col lg:flex-row justify-between pt-10 space-y-4 lg:space-y-0 lg:space-x-4'>
          <div className='relative w-full lg:w-[33%] h-[400px] lg:h-[500px] bg-purple-500'>
            <img
              src='https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/cdn-cgi/image/h=600,w=444,q=85,fit=cover/lifestyle/1000012951045-Blue-Navy-1000012951045_01-2100.jpg'
              className='object-cover w-full h-full'
              alt='Product 1'
            />
            <div className='absolute inset-0 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40'>
              <span className="text-lg">For Men</span>
            </div>
          </div>
          <div className='relative w-full lg:w-[33%] h-[400px] lg:h-[500px] bg-green-500'>
            <img
              src='https://img101.urbanic.com/v1/e09cee2fd2494100b7eb844fc0077d2b.webp'
              className='object-cover w-full h-full'
              alt='Product 2'
            />
            <div className='absolute inset-0 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40'>
              <span className="text-lg">For Women</span>
            </div>
          </div>
          <div className='relative w-full lg:w-[33%] h-[400px] lg:h-[500px] bg-blue-500'>
            <img
              src='https://static.hopscotch.in/fstatic/product/202405/192fc199-58ee-43d5-827b-8211482c53da_full.jpg?version=1715597938143&tr=w-480,c-at_max,n-normal'
              className='object-cover w-full h-full'
              alt='Product 3'
            />
            <div className='absolute inset-0 flex justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity bg-black bg-opacity-40'>
              <span className="text-lg">For Kids</span>
            </div>
          </div>
        </div>
      </div>
      <div className='md:hidden'>
        <div className='flex  overflow-scroll mx-5 py-5 justify-center'>
          <div className='mx-2 text-center'>
            <img
              src='https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/cdn-cgi/image/h=600,w=444,q=85,fit=cover/lifestyle/1000012951045-Blue-Navy-1000012951045_01-2100.jpg'
              className='object-cover w-20 h-20 rounded-xl'
              alt='Product 2'
            />
            <p>Men</p>
          </div>
          <div className='mx-2 text-center'>
            <img
              src='https://img101.urbanic.com/v1/e09cee2fd2494100b7eb844fc0077d2b.webp'
              className='object-cover w-20 h-20 rounded-xl'
              alt='Product 2'
            />
            <p>Womens</p>
          </div>
          <div className='mx-2 text-center'>
            <img
              src='https://static.hopscotch.in/fstatic/product/202405/192fc199-58ee-43d5-827b-8211482c53da_full.jpg?version=1715597938143&tr=w-480,c-at_max,n-normal'
              className='object-cover w-20 h-20 rounded-xl'
              alt='Product 2'
            />
            <p>Kids</p>
          </div>

        </div>
      </div>
    </>
  );
}

export default Top3Ecommercecategory;
