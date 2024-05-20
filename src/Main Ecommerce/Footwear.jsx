import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function Footwear() {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    };

    return (
        <>
             <div className='text-center md:pt-20 pb-5 pt-10'>
                <p className='md:text-5xl pb-2  pl-5 md:pl-0'>Footwear</p>
                <div className='border-b mx-16 border-black md:hidden'></div>
            </div>
            <div className="slider-container pt-10 px-4 pb-10">
                <Slider {...settings}>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553401.jpg" className="w-full h-auto" alt="Footwear 1"/>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553360.jpg" className="w-full h-auto" alt="Footwear 2"/>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663552955.jpg" className="w-full h-auto" alt="Footwear 3"/>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553092.jpg" className="w-full h-auto" alt="Footwear 4"/>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553302.jpg" className="w-full h-auto" alt="Footwear 5"/>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553010.jpg" className="w-full h-auto" alt="Footwear 6"/>
                    </div>
                </Slider>
            </div>
        </>
    );
}

export default Footwear;
