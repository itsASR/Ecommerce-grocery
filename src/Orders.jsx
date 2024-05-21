import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MainHeader from './Main Ecommerce/MainHeader';

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    axios.get('public/Ecommerce API/Orders.json')
      .then(response => {
        setOrders(response.data);
        setFilteredOrders(response.data);
      })
      .catch(error => {
        console.error('Error fetching orders:', error);
      });
  }, []);

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
        <img src={order.image} alt={`Order ${order.id}`} className=" sm:w-24 h-auto mb-4 sm:mr-4 sm:mb-0" />
        <div className="flex flex-grow flex-col sm:flex-row justify-between">
          <div className="flex flex-col mb-2 sm:mb-0">
            <h2 className="text-lg font-semibold mb-1">Order ID: {order.id}</h2>
            <p className="text-gray-600 mb-1">Product: {order.productName}</p>
            <p className={`text-gray-600`}>Status: <span className={`${statusColor} px-2 py-1 rounded`}>{order.status}</span></p>
          </div>
          <div className="flex flex-col md:text-right">
            <p className="text-gray-600 mb-1">Order Date: {formatDate(order.orderDate)}</p>
            <p className="text-gray-600 mb-1">Price: ${order.price}</p>
            <p className="text-gray-600">Estimated Delivery Date: {formatDate(order.estimatedDeliveryDate)}</p>
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
