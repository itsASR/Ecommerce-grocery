import React, { useContext, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import sample from '/sample.jpg'
import sample2 from '/sample2.avif'
import sample3 from '/sample3.avif'
import sample4 from '/sample4.avif'
import { Apis } from '../App';


function EcommerceCategory() {
    const { ecommerceProducts } = useContext(Apis);

    useEffect(()=>{
      
        ecommerceProducts.map((data)=>{
            return console.log(data);
        })
    })


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
        <div className='bg-gray-100'>
            <div className='container mx-auto flex justify-between pt-10'>
                <div className='w-[60vw] bg-gradient-to-b from-white to-purple-200 rounded-xl border border-gray-400 grid grid-cols-3 gap-4 p-4 mb-10 '>
                   {
                    ecommerceProducts.map((data)=>{
                        return <CategoryItem image={data.image_url} text={data.category} />
                    })
                   }
                         
                    {/* // <CategoryItem image={tops} text="Tops" />
                    // <CategoryItem image={bottom} text="Bottoms" />
                    // <CategoryItem image={dresses} text="Dresses" />
                    // <CategoryItem image={activewear} text="Activewear" />
                    // <CategoryItem image={swimwaer} text="Swimwear" />
                    // <CategoryItem image={ling} text="Lingerie & Intimates" />
                    // <CategoryItem image={sleepwear} text="Sleepwear" />
                    // <CategoryItem image={accesories} text="Accessories" />
                    // <CategoryItem image={shoes} text="Shoes" /> */}
                </div>

                <div className='w-[33vw] h-[400px] overflow-hidden bg-white rounded-xl border border-gray-400 mb-10'>
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
    );
}

const CategoryItem = ({ image, text }) => {
    return (
        <div className='flex flex-col items-center'> 
            <div className='w-20 h-20 rounded-full  overflow-hidden bg-white'>
                <img src={image} className='object-cover ' alt={text} />
            </div>
            <p className='mt-2 font-semibold'>{text}</p>
        </div>
    );
}

const SliderImage = ({ src, alt }) => {
    return (
        <img src={src} alt={alt} className='h-[100%]' />
    );
}

export default EcommerceCategory;
