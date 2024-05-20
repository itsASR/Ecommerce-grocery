import React, { useContext, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample from '/sample.jpg';
import sample2 from '/sample2.avif';
import sample3 from '/sample3.avif';
import sample4 from '/sample4.avif';
import { Apis } from '../App';

function EcommerceCategory() {
    const { categories } = useContext(Apis);

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none", background: "green" }}
                onClick={onClick}
            />
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SamplePrevArrow />,
        prevArrow: <SamplePrevArrow />
    };

    return (
        <>
            <div className='bg-gray-100 hidden md:block'>
                <div className='container mx-auto flex flex-col lg:flex-row justify-between pt-10'>
                    <div className='w-full lg:w-[60vw] bg-gradient-to-b from-white to-purple-200 rounded-xl border border-gray-400 grid grid-cols-2 sm:grid-cols-3 gap-4 p-4 mb-10'>
                        {
                            categories.map((category, index) => (
                                <CategoryItem key={index} image={category.category.image_url} text={category.category.name} />
                            ))
                        }
                    </div>

                    <div className='w-full  lg:w-[33vw] h-[400px] overflow-hidden bg-white rounded-xl border border-gray-400 mb-10'>
                        <div className='container mx-auto'>
                            <Slider {...settings}>
                                <SliderImage src={sample} alt="Discount Offer" />
                                <SliderImage src={sample2} alt="Best Offer 2" />
                                <SliderImage src={sample3} alt="Best Offer 3" />
                                <SliderImage src={sample4} alt="Best Offer 4" />
                                <SliderImage src={sample2} alt="Discount Offer" />
                                <SliderImage src={sample3} alt="Best Offer 2" />
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden '>
                <div className='text-center md:py-20 py-10 '>
                    <p className='md:text-5xl pb-2   md:pl-0'>User Name, Visit our categories</p>
                    <div className='border-b mx-16 border-black md:hidden'></div>
                </div>
                <div className='grid grid-rows-2 grid-flow-col gap-x-4 p-4 bg-white rounded-lg shadow-lg overflow-x-scroll overflow-y-hidden no-scrollbar'>
    {
        categories.map((category, index) => (
            <CategoryItem key={index} image={category.category.image_url} text={category.category.name} />
        ))
    }
</div>
            </div>
        </>
    );
}

const CategoryItem = ({ image, text }) => {
    return (
        <div className='flex flex-col items-center '>
            <div className='w-20 h-20 rounded-full overflow-hidden bg-white'>
                <img src={image} className='object-cover' alt={text} />
            </div>
            <p className='mt-2 font-semibold text-center'>{text}</p>
        </div>
    );
}

const SliderImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className='h-full w-full object-cover' />
    );
}

export default EcommerceCategory;
