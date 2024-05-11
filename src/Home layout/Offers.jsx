import React from 'react';
import discountoffer20 from '/20off.png'
import bestoffer2 from '/bestoffer2.png'
import bestoffer3 from '/bestoffer3.png'
import bestoffer4 from '/bestoffer4.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Offers() {
 
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
    <>

      <div className='w-screen  container mx-auto '>
        <Slider {...settings}>
         
            <img src={discountoffer20} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
            <img src={bestoffer2} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
            <img src={bestoffer3} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
            <img src={bestoffer4} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
            <img src={discountoffer20} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
            <img src={bestoffer2} alt="Image 1" className="w-40 h-40 object-cover rounded-lg px-2" />
     
           
          
          
        </Slider>
      </div>


    </>
  );
}

export default Offers;
