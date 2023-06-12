import React from 'react';
import './CourseItem.scss';
import Rating from '@mui/material/Rating';
export const CourseItem = ({ data }) => {
  return (
    <a
      className="course_item_container"
      target="_self"
      href="#"
    >
      <img src={data.videoThumbnail} />
      <h1 className="course_item_name">
        {data.nameCourse}
      </h1>
      <span className="course_item_author">
        {data.author}
      </span>
      <span className="display-flex">
        <h2>{data.starRate}</h2>
        <Rating
          size="large"
          count={5}
          value={data.starRate}
          precision={0.1}
        />
      </span>
      <h2 className="course_item_price">
        {data.price} VNĐ
      </h2>
    </a>
  );
};

export default CourseItem;
