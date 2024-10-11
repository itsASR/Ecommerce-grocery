import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import allApis from "../APIs/Apis";
import axios from "axios";
// import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';



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
  const [bannerDetails, setBannerDetails] = useState([]);
  const [isLoading , setIsLoading] = useState(true)

  const gettingBannerDetails = async () => {
    try {
      const result = await axios.post(allApis.banner, { banner: "TOP-Banner" })
      // console.log(result)
      setBannerDetails(result.data.data)
      setIsLoading(false);
    } catch (error) {
      console.log("error in getting banner", error)
    }
  }

  useEffect(() => {
    gettingBannerDetails();
  }, [])

  return (
    <>

      <Slider {...settings} className="">
        {
          bannerDetails && bannerDetails.map((banner , index) => (
            <div key={index} className="flex justify-center  w-screen  md:h-screen h-40 ">
              <img src={allApis.baseurl + banner.image_url}
                className="object-cover w-full h-full"></img>
            </div>

          ))
        }
      </Slider>



      <div style={{display:isLoading?"block":"none"}}>
        <Skeleton height={550} baseColor="#F6EDFF"  highlightColor="#444" />
      </div>



    </>
  )
}

export default EcommerceHero