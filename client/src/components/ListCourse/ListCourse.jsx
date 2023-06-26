import React from 'react';
import './ListCourse.scss';
import CourseItem from '../CourseItem/CourseItem';
import MySlider from '../Slider/MySlider';
export const ListCourse = ({ titleList, listData }) => {
  const settings = {
    infinite: false,
    speed: 500,
    arrows: true,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <button className="slick-next" />,
    prevArrow: <button className="slick-prev" />
  };
  return (
    <div className="list_container">
      <h1>{titleList}</h1>
      <MySlider settings={settings}>
        {listData.map((data) => (
          <CourseItem
            key={data.id}
            data={data}
          />
        ))}
      </MySlider>
    </div>
  );
};

export default ListCourse;
