import React from 'react';
import './CourseItem.scss';
import Rating from '@mui/material/Rating';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCourseDetails } from '../../features/course/courseSlice';
export const CourseItem = ({ data }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(setCourseDetails(data));
  };
  return (
    <Link
      className="course_item_container"
      to={`/detail/${data.id}`}
      onClick={handleClick}
    >
      <img src={data.videoThumbnail} />
      <h1 className="course_item_name">{data.nameCourse}</h1>
      <span className="course_item_author">{data.author}</span>
      <span className="display-flex">
        <h2>{data.starRate}</h2>
        <Rating
          size="large"
          count={5}
          value={data.starRate}
          precision={0.1}
          readOnly
        />
      </span>
      <h2 className="course_item_price">{data.price} VNĐ</h2>
    </Link>
  );
};

export default CourseItem;
