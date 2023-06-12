import React from 'react';
import './ListCourse.scss';
import CourseItem from '../CourseItem/CourseItem';
import MySlider from '../Slider/MySlider';
export const ListCourse = ({ titleList }) => {
  const listData = [
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/240x135/2497890_744b_3.jpg',
      nameCourse:
        'Next.js Projects - 4 NextJS 13 projects (Instagram, Google.)',
      price: '279,000',
      author: 'Dr Stone',
      starRate: 4.0
    },
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/240x135/1802126_4842_2.jpg',
      nameCourse: 'Introduction to the MongoDB',
      price: '249,000',
      author: 'Browne Way',
      starRate: 4.4
    },
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/240x135/4777782_41a2_6.jpg',
      nameCourse:
        'Learn Game Development with JavaScript',
      price: '249,000',
      author: 'Frank Dvorak',
      starRate: 4.4
    },
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/240x135/4418914_9e62_5.jpg',
      nameCourse:
        'TypeScript Complete Course - Beginner To Advanced + Project',
      price: '249,000',
      author: 'Manik (Cloudaffle)',
      starRate: 4.7
    },
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/480x270/764164_de03_5.jpg',
      nameCourse:
        'The Complete Web Developer Course 3.0',
      price: '379,000',
      author: 'Robison Race',
      starRate: 4.7
    },
    {
      videoThumbnail:
        'https://img-b.udemycdn.com/course/240x135/4724938_ab3d_3.jpg',
      nameCourse:
        'Mastering TypeScript - 2023 Edition',
      price: '279,000',
      author: 'Colt Steele',
      starRate: 4.7
    }
  ];
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
        {listData.map((data, index) => (
          <CourseItem
            key={index}
            data={data}
          />
        ))}
      </MySlider>
    </div>
  );
};

export default ListCourse;
