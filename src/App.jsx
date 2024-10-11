import React, { createContext, useEffect, useState } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import './App.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import axios from 'axios';
import Cart from './Back Layout/Extra Components/Cart';
import Shop from './Back Layout/Shop';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home layout/Home';
import Header from './Home layout/Header';
import Register from './Auth pages/Register';
import Login from './Auth pages/Login';
import EcommerceApp from './Main Ecommerce/EcommerceApp';
import ProductDescription from './Back Layout/Extra Components/ProductDescription';
import OTPverification from './Auth pages/OTPverification';
import ForgetPassword from './Auth pages/ForgetPassword';
import Reset from './Auth pages/Reset';
import UserProfile from './Back Layout/Extra Components/UserProfile';
import EcommerceProductpage from './Main Ecommerce/EcommerceProductpage';
import DeletedBestProduct from './Back Layout/Extra Components/DeletedBestProduct';
import SearchResult from './Back Layout/Extra Components/SearchResult';
import Orders from './Orders';
import Support from './Support';
import FAQ from './FAQ';
import ComplaintForm from './ComplaintForm';
import UserMobileUI from './MobileUI/UserMobileUI';
import ProductsSubMenu from './Mega Menu/ProductsSubMenu';
import Catproduct from './Back Layout/Extra Components/Catproduct';
import allApis from './APIs/Apis';
import VerificationToken from './VerificationToken';
import CategoryPage from './CategoryPage/CategoryPage';
import FilteredProducts from './CategoryPage/FilteredProducts';
import CheckoutPage from './CheckoutPage';
import AddressBook from './Back Layout/Extra Components/AddressBook';
import Wishlist from './Back Layout/Extra Components/Wishlist';
import ChangePassword from './Back Layout/Extra Components/ChangePassword';
import animated from '/animated.png'

export const Apis = createContext();

function App() {
  const [loading, setLoading] = useState(true); // State for loading indicator

  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [productDetails, setProductDetails] = useState([]);
  const [SearchBox, setSearchBox] = useState('none');
  const [SearchResultQuery, setSearchResultQuery] = useState('');
  const [SearchResultdata, setSearchResultdata] = useState([]);
  const [trutoken, setTrutoken] = useState(false);
  const [username, setusername] = useState("");
  const [cartLength, setCartLength] = useState(0);
  const [cartData, setCartData] = useState([]);
  const [reloaddata, setReloaddata] = useState("")
  const [Advertise, setAdvertise] = useState([]);
  const [globalAddress, setGlobalAddress] = useState("");
  const [mail, setMail] = useState("");
    


  useEffect(() => {
      const mailTokken = localStorage.getItem("email")
      if(mailTokken){
          setMail(mailTokken)
      }
  },[reloaddata])


  const allproductsfunc = async () => {
    try {
      const products = await axios.post(allApis.get_product);
      setProductDetails(products.data.data)
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false); 
    }
  }

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.post(allApis.get_category);
        setCategories(res.data.data);

        const subCategories = res.data.data.flatMap(category => category.sub_cat_details);
        setSubCategories(subCategories);

      } catch (err) {
        console.log('Error in fetching categories:', err);
      } finally {
        setLoading(false); 
      }
    };

    fetchCategories();
    allproductsfunc();
    console.log("i am Mounting")

  }, []);

  const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  };

  const getCartFunc = async () => {
    try {
      const result = await axios.post(allApis.get_cart, { email: mail });
      // console.log("tannu", result)
      setCartData(result.data.data);
     
    } catch (error) {
      console.error('Error fetching cart data:', error);
    } finally {
      setLoading(false); 
    }
  };

  useEffect(() => {
    getCartFunc(); // Fetch cart data on component mount
  }, [reloaddata , mail]);

  useEffect(() => {
    // Update cart length when cartData changes
    if (cartData) {
      setCartLength(cartData.length);
    }
  }, [cartData]);

  if (loading) {
    // Render a loading indicator while fetching data
    return <div className='w-screen h-screen flex items-center justify-center'>
      <div>
      {/* <div className='w-40 h-40 rounded-full bg-green-600 mx-auto animate-bounce'></div> */}
      <img src={animated} className='animate-bounce h-40'></img>
      <p className='text-center'>Loading...</p>
      </div>
    </div>;
  }

  return (
    <Apis.Provider value={{setMail , mail , globalAddress, setGlobalAddress, Advertise, setAdvertise, cartData, setCartData, cartLength, setCartLength, username, setusername, trutoken, setTrutoken, productDetails, subCategories, categories, setCategories, SearchBox, setSearchBox, SearchResultQuery, setSearchResultQuery, SearchResultdata, setSearchResultdata, reloaddata, setReloaddata }}>
      <PrimeReactProvider>
        <Router >
          <VerificationToken />
          {/* <ScrollToTop/> */}
          <Routes>
            <Route path='/grocery' element={<Home />} />
            <Route path='/shop' element={<Shop />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<EcommerceApp />} />
            <Route path='/product' element={<ProductDescription />} />
            <Route path='/otp' element={<OTPverification />} />
            <Route path='/password' element={<ForgetPassword />} />
            <Route path='/reset' element={<Reset />} />
            <Route path='/user' element={<UserProfile />} />
            <Route path='/deleted' element={<DeletedBestProduct />} />
            <Route path='/search' element={<SearchResult />} />
            <Route path='/orders' element={<Orders />} />
            <Route path='/support' element={<Support />} />
            <Route path='/complaint' element={<ComplaintForm />} />
            <Route path='/usermobile' element={<UserMobileUI />} />
            <Route path='/ecommerceproducts' element={<EcommerceProductpage />} />
            <Route path='/pro' element={<ProductsSubMenu />} />
            <Route path='/cproduct' element={<Catproduct />} />
            <Route path='/category' element={<CategoryPage />} />
            <Route path='/filtered' element={<FilteredProducts />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/addressbook' element={<AddressBook />} />
            <Route path='/wishlist' element={<Wishlist />} />
            <Route path='/changepassword' element={<ChangePassword />} />
          </Routes>
        </Router >
      </PrimeReactProvider>
    </Apis.Provider>
  );
}

export default App;
