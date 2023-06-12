import React from 'react';
import './MySlider.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const MySlider = ({
  children,
  settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  }
}) => {
  return (
    <div className="slider_container">
      <Slider {...settings}>{children}</Slider>
    </div>
  );
};

export default MySlider;
