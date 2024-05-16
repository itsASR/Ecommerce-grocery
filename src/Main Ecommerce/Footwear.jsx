import React, { Component } from "react";
import Slider from "react-slick";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none", background: "red" }}
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
        autoplaySpeed: 4000,
    };
    return (

        <>
        <h1 className="text-6xl text-center pt-20">Footwears</h1>
            <div className="slider-container pt-10">
                <Slider {...settings}>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553401.jpg"></img>

                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553360.jpg"></img>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663552955.jpg"></img>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553092.jpg"></img>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553302.jpg"></img>
                    </div>
                    <div>
                        <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1663553010.jpg"></img>
                    </div>
                </Slider>
            </div>
        </>
    )
}

export default Footwear