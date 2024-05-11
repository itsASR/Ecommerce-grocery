import React, { useState } from 'react';

const StarRating = ({ onStarClick }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    onStarClick(value);
  };

  return (
    <div>
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`cursor-pointer ${
            index < rating ? 'text-yellow-500' : 'text-gray-400'
          }`}
          onClick={() => handleClick(index + 1)}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
