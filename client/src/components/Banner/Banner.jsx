import React, { useEffect, useState } from 'react';
import './Banner.scss';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export const Banner = () => {
  const dataBanner = [
    {
      srcImg: 'banner.jpg',
      sloganTitle: 'Learning that gets you',
      sloganText: `Skills for your present (and your future). Get started with us.`,
    },
    {
      srcImg: 'banner_2.jpg',
      sloganTitle: 'Unlock the power of your people',
      sloganText: `Elearning Business is trusted by 12.5K+ companies around the world. Find out what we can do for yours.`,
    },
    {
      srcImg: 'banner_3.jpg',
      sloganTitle: 'Learning for all',
      sloganText: `Thousands of courses to help you succeed in your goals — at work and in life.`,
    },
  ];

  const [currentBanner, setCurrentBanner] = useState(0);
  const nextSlide = () => {
    setCurrentBanner((currentBanner + 1) % dataBanner.length);
  };

  const prevSlide = () => {
    if (currentBanner === 0) {
      setCurrentBanner(dataBanner.length - 1);
    } else {
      setCurrentBanner(Math.abs(currentBanner - 1) % dataBanner.length);
    }
  };

  useEffect(() => {
    let interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentBanner]);
  return (
    <div className="banner_container">
      <article className="banner_banner">
        <img src={dataBanner[currentBanner].srcImg} alt="banner advertise" />
        <div className="banner_slogan">
          <p className="banner_slogan_tittle">{dataBanner[currentBanner].sloganTitle}</p>
          <p className="banner_slogan_text">{dataBanner[currentBanner].sloganText}</p>
        </div>
        <button className="btn_slider right" onClick={nextSlide}>
          <NavigateNextIcon
            sx={{
              width: '4rem',
              height: '4rem',
              fill: 'white',
              fontSize: '4rem',
              backgroundColor: 'black',
              borderRadius: '50%',
            }}
          />
        </button>
        <button className="btn_slider left" onClick={prevSlide}>
          <ChevronLeftIcon
            sx={{
              width: '4rem',
              height: '4rem',
              fill: 'white',
              fontSize: '4rem',
              backgroundColor: 'black',
              borderRadius: '50%',
            }}
          />
        </button>
      </article>
    </div>
  );
};

export default Banner;
