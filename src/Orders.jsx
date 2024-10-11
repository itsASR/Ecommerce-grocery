import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MainHeader from './Main Ecommerce/MainHeader';
import allApis from './APIs/Apis';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { Apis } from './App';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filter, setFilter] = useState('All');
  const [getOrders ,setGetOrders] = useState([])
  const {mail} = useContext(Apis)


  const callOrder = async () => {
    try {
      const response = await axios.post(allApis.get_orders , {email: mail})
      console.log("orders", response.data.data);
      setOrders(response.data.data);
      setFilteredOrders(response.data.data);
    } catch (error) {
      console.log("get order error", error)
    }}
 
 useEffect(()=>{
  callOrder();
 }, [])

  useEffect(() => {
    if (filter === 'All') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter(order => order.status === filter));
    }
  }, [filter, orders]);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  const OrderCard = ({ order }) => {
    let statusColor = '';
    switch (order.status) {
      case 'Processing':
        statusColor = 'bg-yellow-100';
        break;
      case 'Shipped':
        statusColor = 'bg-blue-100';
        break;
      case 'Delivered':
        statusColor = 'bg-green-100';
        break;
      case 'Pending':
        statusColor = 'bg-gray-100';
        break;
      case 'Cancelled':
        statusColor = 'bg-red-100';
        break;
      default:
        statusColor = 'bg-gray-100';
    }

    return (
      <div className={`shadow-md rounded-md flex flex-col sm:flex-row items-center p-4 mb-4`}>
        <img src={allApis.baseurl + (order.colorDetails[0]?.image_url[0]?.url || "")} alt={`Order ${order.id}`} className=" sm:w-24 h-auto mb-4 sm:mr-4 sm:mb-0" />
        <div className="flex flex-grow flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-2 sm:mb-0">
            <h2 className="text-lg font-semibold mb-1">Order ID: {order.id}</h2>
            <p className="text-gray-600 mb-1">Product: {order.name}</p>
            <p className={`text-gray-600 pb-1`}>Payment Type: <span className={` px-2 py-1 rounded`}>{order.payment_type}</span></p>
            <p className={`text-gray-600`}>Status: <span className={`${statusColor} px-2 py-1 rounded`}>{order.status}</span></p>
          </div>
          <div className="flex flex-col md:text-right items-end">
            <p className="text-gray-600 mb-1">Order Date: {formatDate(order.date)}</p>
            <p className="text-gray-600 mb-1">Price: ${order.price}</p>
            <p className="text-gray-600">Estimated Delivery Date: {formatDate(order.delivery_date)}</p>
            <Link to="/support"><button className="text-gray-600 px-2 py-2 bg-green-600 rounded-xl text-white w-40 flex items-center justify-evenly text-sm mt-2 hover:scale-110 hover:bg-green-700">Get Support <FaArrowRightLong /></button></Link>

          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='h-20'>
        <MainHeader></MainHeader>
      </div>
      <div className="container mx-auto py-8 px-4 sm:px-10 ">
        <div className="mb-4 flex flex-col pt-10 md:pt-0 sm:flex-row justify-between items-center">
          <div className='flex flex-col sm:flex-row items-center mb-4 sm:mb-0'>
            <h1 className="text-2xl font-bold mb-2 sm:mb-0">My Orders</h1>
            <div className='text-sm flex items-center ml-0 sm:ml-5'>
              <select className='p-2 'style={{outline:"0px"}}>
                <option>Ecommerce</option>
                <option>All Orders</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <label htmlFor="statusFilter" className="mr-2 mb-2 sm:mb-0">Filter by status:</label>
            <select
              id="statusFilter"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-gray-300 p-2 rounded"
            >
              <option value="All">All</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Delivered">Delivered</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>
        </div>
        <div className="grid gap-4">
          {filteredOrders.map(order => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MyOrdersPage;
