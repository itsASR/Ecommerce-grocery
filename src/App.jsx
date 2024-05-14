import React, { createContext, useEffect, useState } from 'react'
import { PrimeReactProvider } from 'primereact/api';
import './App.css'
import "primereact/resources/themes/lara-light-cyan/theme.css";
import axios from 'axios'
import Cart from './Back Layout/Extra Components/Cart'
import Shop from './Back Layout/Shop'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home layout/Home'
import Header from './Home layout/Header'
import Register from './Auth pages/Register';
import Login from './Auth pages/Login';
import EcommerceApp from './Main Ecommerce/EcommerceApp';
import ProductDescription from './Back Layout/Extra Components/ProductDescription';
import OTPverification from './Auth pages/OTPverification';
import ForgetPassword from './Auth pages/ForgetPassword';
import Reset from './Auth pages/Reset';
import UserProfile from './Back Layout/Extra Components/UserProfile';
import EcommerceProductpage from './Main Ecommerce/EcommerceProductpage';
import DeletedBestProduct from './DeletedBestProduct';


export const Apis = createContext()

function App() {

  const [categories, setCategories] = useState([]);




  useEffect(() => {
    const fetchCategories = async () => {
        try {
            const res = await axios.get('/Ecommerce API/EcomProducts.json');
            setCategories(res.data);
        } catch (err) {
            console.log("Error in fetching categories:", err);
        }
    };

    fetchCategories();
}, []);



  return (
    <>
      <Apis.Provider value={{ categories, setCategories}}>
      <PrimeReactProvider  >
        <BrowserRouter>
        {/* {<Register></Register>  && <Header />} */}
          <Routes>
            <Route path='/grocery' element={<Home></Home>}></Route>
            <Route path='/shop' element={<Shop></Shop>}></Route>
            <Route path='/cart' element={<Cart></Cart>}></Route>
            <Route path='/register' element={<Register></Register>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/' element={<EcommerceApp></EcommerceApp>}></Route>
            <Route path='/product' element={<ProductDescription></ProductDescription>}></Route>
            {/* <Route path='/otp' element={<OTPverification></OTPverification>}></Route> */}
            {/* <Route path='/password' element={<ForgetPassword></ForgetPassword>}></Route> */}
            {/* <Route path='/reset' element={<Reset></Reset>}></Route> */}
            <Route path='/user' element={<UserProfile></UserProfile>}></Route>
            <Route path='/deleted' element={<DeletedBestProduct></DeletedBestProduct>}></Route>
            
            <Route path='/ecommerceproducts' element={<EcommerceProductpage></EcommerceProductpage>}></Route>
            
            

          </Routes>
        </BrowserRouter>
        </PrimeReactProvider>
      </Apis.Provider>

    </>
  )
}

export default App