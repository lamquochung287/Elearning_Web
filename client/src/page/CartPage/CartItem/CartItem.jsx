import React from 'react';
import './CartItem.scss';
import { RubbishIcon } from '../../../components/Icon/Icon';
import { useDispatch, useSelector } from 'react-redux';
import CustomDialog from '../../../components/Dialog/CustomDialog';
export const CartItem = () => {
  const { openDialog } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
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
      <div>
        {/* <button
          className="btn_delete"
          onClick={handleDeleteItem}
        >
          <RubbishIcon />
        </button> */}
        <CustomDialog course={data} />
      </div>
    </div>
  );
};

export default CartItem;
