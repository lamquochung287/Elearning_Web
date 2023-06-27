import React, { useEffect, useState } from 'react';
import './CartPage.scss';
import CartItem from './CartItem/CartItem';
import Loading from '../../components/Loading/Loading';

export const CartPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [isSuccess, setSuccess] = useState(true);
  const processPurchase = () => {
    setLoading(true);
  };

  return (
    <div className="cart_page_container">
      <h1 className="text_align_center">Your Cart</h1>
      <CartItem />
      <CartItem />
      <CartItem />
      <hr className="break_line" />
      <h2 className="align_right">Total: 279,000</h2>
      <div className="align_center">
        {isLoading ? (
          <Loading />
        ) : (
          <button
            className="btn_purchase"
            onClick={processPurchase}
          >
            Purchase
          </button>
        )}
      </div>
    </div>
  );
};

export default CartPage;
