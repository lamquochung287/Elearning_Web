import React from 'react';
import './DetailCourse.scss';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';
import {
  VideoIcon,
  MobileIcon,
  InfinityIcon,
  CupIcon
} from '../../components/Icon/Icon';

export const DetailCourse = () => {
  // const courseData = {
  //   id: 'N0001',
  //   videoThumbnail:
  //     'https://img-b.udemycdn.com/course/240x135/2497890_744b_3.jpg',
  //   nameCourse: 'Next.js Projects - 4 NextJS 13 projects (Instagram, Google.)',
  //   price: '279,000',
  //   author: 'Dr Stone',
  //   starRate: 4.0,
  //   numberReview: 256
  // };
  const { courseData } = useSelector((state) => state.course);
  return (
    <>
      <div className="course_container">
        <img
          src={courseData.videoThumbnail}
          alt="video course image"
          className="course_detail_image"
        />
        <div className="course_information_container">
          <div>
            <h2 className="course_name">{courseData.nameCourse}</h2>
          </div>
          <div>
            <span className="course_star">
              <h2 className="rate_color">{courseData.starRate}</h2>
              <Rating
                size="large"
                count={5}
                value={courseData.starRate}
                precision={0.1}
                readOnly
              />
              <span className="underline bold">
                {courseData.numberReview} Reviews
              </span>
            </span>
          </div>
          <span>This course includes:</span>
          <ul>
            <li className="gap_display_flex">
              <VideoIcon />5 hours on-demand video
            </li>
            <li className="gap_display_flex">
              <MobileIcon /> Access on mobile and TV
            </li>
            <li className="gap_display_flex">
              <InfinityIcon />
              Full lifetime access
            </li>
            <li className="gap_display_flex">
              <CupIcon />
              Certificate of completion
            </li>
          </ul>
          <h2>Price: {courseData.price} VNĐ</h2>
          <button className="button_add_to_cart">Add To Cart</button>
          <button className="button_buy_now">Buy Now</button>
          <span className="text-align-center">30-Day Money-Back Guarantee</span>
        </div>
      </div>
    </>
  );
};

export default DetailCourse;
