import React from 'react'
import Slider from "react-slick";
// import { baseUrl } from "./config";
import vegis from '/vegis.webp';
import deos from '/deos.webp';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function ShopSlider() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "linear",
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SampleNextArrow />
    };
    return (
        <>
            <div className="slider-container mt-5 container mx-auto">
                <Slider {...settings}>
                    <div className=''>
                        <img src={vegis} className='w-[90%] h-[450px] mx-auto' />
                    </div>
                    <div>
                        <img src={deos} className='w-[90%] h-[450px] mx-auto' />
                    </div>
                    <div>
                        <img src={vegis} className='w-[90%] h-[450px] mx-auto' />
                    </div>
                    <div>
                        <img src={deos} className='w-[90%] h-[450px] mx-auto' />
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default ShopSlider