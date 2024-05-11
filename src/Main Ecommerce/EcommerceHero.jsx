import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


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


function SampleNextArrow2(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
  appendDots: dots => (
    <div
      style={{
        backgroundColor: "",
        borderRadius: "10px",
        padding: "10px",
        position: "absolute",
        bottom: "20px"
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  infinite: true,
  pauseOnHover: false,
  prevArrow: <SampleNextArrow />,
  nextArrow: <SampleNextArrow />,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 4000,
  cssEase: "linear"
};


function EcommerceHero() {



  return (
    <>

      <Slider {...settings} className="">
        <div className="flex justify-center  w-screen h-screen  bg-cover bg-center  relative">
          <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1714741271.jpg" className="object-fill w-full h-full"></img>
        </div>

        <div className="flex justify-center  w-screen h-screen bg-cover bg-center bg-gray-100 relative">
          <img src='https://demo-ecomus-global.myshopify.com/cdn/shop/files/001fashion-slideshow-02.jpg?v=1696047230&width=3840' className=''></img>
          <p className='absolute bottom-52 left-20 text-7xl font-medium w-80 font-serif '>SIMPLE MEET-UP</p>
          <p className='absolute bottom-36 left-20  font-semibold w-80'>Expolre Simple & Sweet Collection</p>
          <button className='absolute bottom-12 left-20 text-2xl font-semibold w-80 bg-black text-white px-5 py-2 '>Show Collection</button>
        </div>

        <div className="flex justify-center  w-screen h-screen bg-cover bg-center bg-gray-100 relative">
          <img src='https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1714633375.jpg' className=''></img>
        </div>
      </Slider>


    </>
  )
}

export default EcommerceHero