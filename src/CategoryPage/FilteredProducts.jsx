import React, { useContext, useEffect, useState } from 'react';
import allApis from '../APIs/Apis';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Apis } from '../App';
import MainHeader from '../Main Ecommerce/MainHeader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function FilteredProducts() {
    const { productDetails, setReloaddata, setAdvertise , mail } = useContext(Apis);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const name = searchParams.get('name');
    const navigate = useNavigate();
    const [showSizeDiv, setShowSizeDiv] = useState(false)
    const [sizeChart, setSizeChart] = useState([])
    const [selectedSize, setSelectedSize] = useState(null);
    const [myProduct, setMyProduct] = useState([]);
    const [warning, setWarning] = useState("");
    const [btn, setBtn] = useState(false);
    const [outOfStock, setOutOfStock] = useState(false);
  

    useEffect(() => {
        const filterTopSellingProducts = () => {
            let arr = [];
            productDetails.forEach((product) => {
                product.colorDetails.forEach((colorDetail) => {
                    if (colorDetail[name] === "true") {
                        arr.push(colorDetail);
                    }
                });
            });
            setFilteredProducts(arr);
        };

        filterTopSellingProducts();
    }, [productDetails]);



    // function callingcatfilter(name) {
    //     navigate("/filtered?name=" + name)
    // }

    // console.log("productDetails", productDetails)

    
    function closingDiv() {
        setShowSizeDiv(false);
        setSelectedSize(null);
        setWarning("");
    }    

    const addCartFunc1 = async () => {
        try {
            const resultcart = await axios.post(allApis.add_cart, { email: mail, product_id: myProduct.id, size: selectedSize, color: myProduct.color })
            if (resultcart.data.status === true) {
                setShowSizeDiv(false)
                setSelectedSize(null)
                setWarning("")
                toast.success("Successfully Added in Your Cart")
                setReloaddata(Math.random())
            } else {
                setWarning("Something Went Wrong")
            }
        } catch (error) {
            console.log(error)
        }

    }

    function addCartFunc(product) {
        setMyProduct(product)
        setSizeChart(product.sizeDetails)
        setShowSizeDiv(true)
    }



    function showPrice() {
        const productPrice = (myProduct?.sizeDetails?.filter((product) => product.size === selectedSize) || "")
        return (productPrice[0]?.discount_price)
    }


    useEffect(() => {
        showPrice()
    }, [selectedSize])


    async function setSelectedSizeFunc(size) {
        setSelectedSize(size)
    }


    async function checkingItem() {
        try {
            const result = await axios.post(allApis.get_cart, { email: mail });

            const foundInCart = result.data.data.some(item =>
                item.product_id === myProduct.id &&
                item.size === selectedSize &&
                item.color === myProduct.color
            );
            if (foundInCart) {
                setBtn(true);
                setOutOfStock(false);
            } else {
                const productPrice = myProduct?.sizeDetails?.find(product => product.size === selectedSize);
                console.log("jaipr", productPrice)
                if (!productPrice) {
                    console.log("Product price not found for selected size");
                } else {
                    console.log("Product size found:", productPrice.size);

                    if (productPrice.quantity === 0) {
                        setOutOfStock(true);
                        setBtn(false);
                    } else {
                        setOutOfStock(false);
                        setBtn(false); 
                    }
                }
            }


        } catch (error) {
            console.error("Error fetching cart data:", error);
        }
    }

    useEffect(() => {
        checkingItem()
    }, [selectedSize])


    return (
        <>
            <div className='md:h-20'>
                {/* Main Header component */}
                <MainHeader />
            </div>


           <div className='w-screen h-screen bg-[#000000cf] fixed z-[505] top-0' style={{ display: showSizeDiv ? 'flex' : 'none' }}>
                <div className="p-4 w-80 mx-auto bg-white  shadow-md space-y-4 fixed top-0 z-50 right-0  h-screen text-center flex-col items-center  z-[50000] overflow-scroll no-scrollbar" >
                    <button className='fixed right-5 bg-gray-200 px-2 py-1 rounded-full hover:scale-125' onClick={() => { closingDiv() }}>X</button>
                    <div className="text-3xl font-medium text-black mb-4  pb-5 pt-5 ">Select Preference:</div>

                    <div className='border border-gray-200 rounded-xl px-5 py-5 '>
                        <img src={allApis.baseurl + (myProduct?.image_url?.[0]?.url || '')} className='h-40 w-40 rounded-xl flex justify-center items-center mx-auto mb-4'></img>
                        <p>{myProduct.name}</p>
                        <div className="flex space-x-4 my-4 justify-center">
                            {
                                sizeChart.map((sizechart) => (

                                    <button
                                        key={sizechart.size}
                                        className={`px-4 py-2 rounded ${selectedSize === sizechart.size ? 'bg-green-500' : 'bg-gray-200'} text-white`}
                                        onMouseDown={() => setWarning("")}
                                        onClick={() => setSelectedSizeFunc(sizechart.size)}
                                    >
                                        {sizechart.size}
                                    </button>
                                ))
                            }
                        </div>
                        <div className="text-lg font-medium text-black mb-4 text-blue-500">
                            Price: {showPrice() ? showPrice() : "Please Select the Size"}
                        </div>
                    </div>
                    <p className='text-center text-red-500'>{warning}</p>


                    {outOfStock ? <button className="w-3/4 py-2  bg-red-900 text-white  rounded-full ">
                        Out Of Stock
                    </button> : <div><button className="w-3/4 py-2 rounded bg-green-500 text-white  rounded-full mx-auto flex justify-content item-center" onClick={() => selectedSize ? addCartFunc1() : setWarning("Select the Size*")} style={{ display: btn ? 'none' : 'block' }}>
                        Add to Cart2
                    </button>
                        <Link to="/cart"><button className="w-3/4 py-2 rounded bg-gray-500 text-white  rounded-full mx-auto flex justify-content item-center hover:bg-green-600" style={{ display: btn ? 'block' : 'none' }} >
                            View Cart
                        </button></Link></div>}


                </div>
            </div>


            <div className='text-center md:py-20 py-10'>
                <p className='md:text-5xl pb-2 pl-5 md:pl-0'>{name === "promoted" ? "Latest Arrival" : "Best Seller"}</p>
                <div className='border-b mx-16 border-black md:hidden'></div>
                <p className='hidden md:block'>Shop the Latest Styles: Stay ahead of the curve with our newest arrivals</p>
            </div>

            <div className='md:grid flex overflow-scroll md:overflow-hidden md:grid-cols-3 lg:grid-cols-4 gap-4 px-4 pb-12 '>
                {filteredProducts?.slice(0, 10).map((product, index) => (

                    <div key={index} className="product-Div  mb-10 ">
                        <Link to={`/product?id=${product.id}`}><div className="card md:h-[350px] h-40 w-40 md:w-full relative overflow-hidden rounded-lg">
                            <img src={allApis.baseurl + product.image_url[0].url} className='h-full w-full rounded-lg bg-red-200 relative z-20 hover:z-0 object-cover' alt={product.title} />
                            <img src={allApis.baseurl + product.image_url[1].url} className='h-full w-full rounded-lg bg-red-200 absolute top-0 z-10 hover:z-30 object-cover' alt={product.title} />
                            {product.sizeDetails[0].percent_off && (
                                <div className="font-semibold">
                                    <p className='bg-[#FC5732] text-white px-2 md:px-3 md:text-md text-xs absolute rounded-xl top-3 right-3 z-50'>
                                        {product.sizeDetails[0].percent_off}% OFF
                                    </p>
                                </div>
                            )}
                        </div></Link>
                        <div className='pt-3 bg-gray-100 h-28 overflow-hidden'>
                            <p>{product?.name?.slice(0, 30)}</p>
                            <div className='flex items-end justify-between'>

                                <div>
                                    {product.sizeDetails[0].discount_price && (
                                        <p className="text-2xl font-bold text-slate-900">
                                            RS {product.sizeDetails[0].discount_price}
                                        </p>
                                    )}
                                    <p className={product.sizeDetails[0].discount_price ? "text-sm text-slate-900 line-through" : ""}>
                                        RS {product.sizeDetails[0].regular_price}
                                    </p>

                                </div>

                                {/* <button className="flex items-center rounded-md bg-slate-900 px-2 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300" onClick={() => addCartFunc(product)}>
                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                Add to cart </button> */}
                                <button
                                    type="button"
                                    className="px-2 py-2.5 bg-slate-900 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex" onClick={() => addCartFunc(product)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>

                                    <span class="ml-2">Add to cart</span>
                                </button>

                            </div>







                        </div>
                    </div>

                ))}
            </div>
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
            />
        </>
    );
}

export default FilteredProducts;
