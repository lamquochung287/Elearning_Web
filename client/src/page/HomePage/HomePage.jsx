import React from 'react';
import Banner from '../../components/Banner/Banner';
import './HomePage.scss';
import ListCourse from '../../components/ListCourse/ListCourse';
export const HomePage = () => {
  return (
    <div className="homepage_container">
      <Banner />
      <ListCourse
        titleList={'Recommend for you'}
      />

      <ListCourse
        titleList={'Popular web development'}
      />
      <ListCourse titleList={'Best Seller'} />
    </div>
  );
};

export default HomePage;
