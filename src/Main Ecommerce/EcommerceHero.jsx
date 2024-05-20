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
        <div className="flex justify-center  w-screen  md:h-screen h-40 ">
          <img src="https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1714741271.jpg" className="object-cover w-full h-full"></img>
        </div>

        <div className="flex justify-center  w-screen  md:h-screen h-40  ">
          <img src="https://cdn.shopaccino.com/qarot/slideshows/untitled-2-680217_l.jpg?v=513" className="object-cover w-full h-full"></img>
        
        </div>

        <div className="flex justify-center  w-screen  md:h-screen h-40  ">
          <img src='https://media.darveys.com/vss_mobileappbuilder/k/b/kbmobileapp_tc__1714633375.jpg' className='object-cover w-full h-full'></img>
        </div>
      </Slider>


    </>
  )
}

export default EcommerceHero