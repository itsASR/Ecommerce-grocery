import React, { useContext, useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample from '/sample.jpg';
import sample2 from '/sample2.avif';
import sample3 from '/sample3.avif';
import sample4 from '/sample4.avif';
import { Apis } from '../App';
import allApis from '../APIs/Apis';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EcommerceCategory = () => {
    const { categories } = useContext(Apis);
    const [bannerDetails , setBannerDetails] = useState([]);


    const gettingBannerDetails = async () => {
        try {
          const result = await axios.post(allApis.banner , {banner:"Middle-Banner"})
        //   console.log("result cat banner", result)
          setBannerDetails(result.data.data)
        } catch (error) {
          console.log("error in getting cat banner", error)
        }
      }
    
      useEffect(()=>{
        gettingBannerDetails();
      },[])



    const SampleArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "none" }}
                onClick={onClick}
            />
        );
    }



    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />
    };

    return (
        <>
            <div className='bg-gray-100 hidden md:block'>
                <div className='mx-5 flex justify-between pt-10'>
                    <div className='w-[60vw] bg-gradient-to-b from-white to-purple-200 rounded-xl border border-gray-400 grid grid-cols-4 lg:grid-cols-7 gap-4 p-4 mb-10'>
                    {categories.slice(0, 11).map((category, index) => (
                            <CategoryItem key={index} image={allApis.baseurl + category.image_url} text={category.name} />
                        ))} 
                        
                        <div className='pl-4'>
                            <Link to="/category"><div className='w-20 h-20 rounded-full overflow-hidden bg-white'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfuJCfYODW9DiWKKlgpLgguz6bRmi5zghinQ&s' className='object-cover w-full h-full' alt='Random image' />
                            </div></Link>
                            <p className='mt-2 font-semibold text-center'>View All</p>
                        </div>


                    </div>

                    <div className='w-[33vw] h-[400px] overflow-hidden rounded-xl border border-gray-400 mb-10'>
                        <div className='container mx-auto h-full'>
                            <Slider {...settings}>
                                {
                                    bannerDetails.map((banner , index)=>(
                                        <SliderImage key={index} src={allApis.baseurl + banner.image_url} alt="Discount Offer" />

                                    ))
                                }
                                {/* <SliderImage src={sample2} alt="Best Offer 2" />
                                <SliderImage src={sample3} alt="Best Offer 3" />
                                <SliderImage src={sample4} alt="Best Offer 4" />
                                <SliderImage src={sample2} alt="Discount Offer" />
                                <SliderImage src={sample3} alt="Best Offer 2" /> */}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:hidden'>
                <div className='text-center md:py-20 py-10'>
                    <p className='md:text-5xl pb-2'>User Name, Visit our categories</p>
                    <div className='border-b mx-16 border-black md:hidden'></div>
                </div>
                <div className='grid grid-rows-2 grid-flow-col gap-x-4 p-4 bg-white rounded-lg shadow-lg overflow-x-scroll overflow-y-hidden no-scrollbar'>
                    {categories.map((category, index) => (
                        <CategoryItem key={index} image="https://picsum.photos/200" text={category.cat_name} />
                    ))}
                </div>
            </div>
        </>
    );
}

const CategoryItem = ({ image, text }) => {
    const navigate = useNavigate();
    function CategoryRedirect(name) {
        navigate("/category?name=" + name);
    }

    return (
        <div className='flex flex-col items-center '>
            <div onClick={() => CategoryRedirect(text)}>
                <div className='w-20 h-20 rounded-full overflow-hidden bg-white cursor-pointer'>
                    <img src={image} className='object-cover w-full h-full' alt={text} />
                </div>
                <p className='mt-2 font-semibold text-center' >{text}</p>
            </div>
        </div>
    );
}

const SliderImage = ({ src, alt }) => {
    return (
        <div className='relative h-[400px] w-full'>
            <img src={src} alt={alt} className='absolute top-0 left-0 h-full w-full object-cover' />
        </div>
    );
}

export default EcommerceCategory;
