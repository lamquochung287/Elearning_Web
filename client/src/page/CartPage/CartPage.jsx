import React from 'react';
import './CartPage.scss';
import CartItem from './CartItem/CartItem';

export const CartPage = () => {
  return (
    <div className="cart_page_container">
      <h1 className="text_align_center">Your Cart</h1>
      <CartItem />
      <CartItem />
      <CartItem />

      <h2 className="align_right">Total: 279,000</h2>
    </div>
  );
};

export default CartPage;
