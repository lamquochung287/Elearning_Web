import React from 'react';
import './CartItem.scss';

export const CartItem = () => {
  const data = {
    id: 'N0001',
    videoThumbnail:
      'https://img-b.udemycdn.com/course/240x135/2497890_744b_3.jpg',
    nameCourse: 'Next.js Projects - 4 NextJS 13 projects (Instagram, Google.)',
    price: '279,000',
    author: 'Dr Stone',
    starRate: 4.0,
    numberReview: 256
  };
  return (
    <div className="cart_item_container">
      <img
        src={data.videoThumbnail}
        alt="Item image"
      />
      <div>
        <h2>{data.nameCourse}</h2>
        <span>
          <i>{data.author}</i>
        </span>
      </div>
      <h2>{data.price}</h2>
    </div>
  );
};

export default CartItem;
