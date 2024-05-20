import React from 'react';
import { FaCircle } from "react-icons/fa";

const LazyProduct = ({ product }) => {
  return (
    <div className="product-Div">
      <div className="card h-[350px] relative overflow-hidden">
        <img src={product.image_url} className='h-full' alt={product.title} />
      </div>
      <div>
        <p className='pt-2'>{product.title}</p>
        <p>Rs {product.regular_price}</p>
        <div className="color-variant flex [&>*]:mr-2 pt-1">
          {product.colors.map((color, idx) => (
            <FaCircle className='border-[1px] border-black rounded-full' style={{ color: color }} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LazyProduct;
