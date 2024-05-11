import React from 'react';
import small from '/small.webp';
import chips from '/chips.webp';
import './ShopComponents.css'; // Import CSS file for styling
import TodaysDeal from '../../Home layout/TodaysDeal';

function CategoryItem({ icon, text }) {
    return (
        <li className='flex justify-center items-center py-5 font-medium'>
            <div className='bg-green-200 w-12 h-12 rounded-full mr-2'>
                <img src={icon} alt={text} className='' />
            </div>
            <p className='w-16'>{text}</p>
        </li>
    );
}

function ShopComponents() {
    return (
        <div className='w-screen h-screen mt-8 border-t-[0.1px] border-gray-300 container mx-auto flex'>
            <div className='w-52 h-full border-r-[0.1px] border-gray-300 overflow-y-scroll scrollbar-hidden'>
                <ul className='w-40 bg-white mx-auto text-center items-center flex flex-col justify-center'>
                    <CategoryItem icon={small} text="Top Picks" />
                    <CategoryItem icon={small} text="Daily Essentials" />
                    <CategoryItem icon={small} text="Top Deals" />
                    <CategoryItem icon={small} text="Drinks" />
                    <CategoryItem icon={small} text="Kitchen Items" />
                    <CategoryItem icon={small} text="Fresheners" />
                    <CategoryItem icon={chips} text="Chips" />
                </ul>
            </div>

            <div className='w-full h-full  overflow-y-scroll scrollbar-hidden'>
                <TodaysDeal></TodaysDeal>
            </div>
        </div>
    );
}

export default ShopComponents;
