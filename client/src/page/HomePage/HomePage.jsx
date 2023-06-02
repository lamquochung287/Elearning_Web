import React from 'react'
import './HomePage.scss'
export const HomePage = () => {
  return (
    <div className="homepage_container">
      <div className="homepage_banner">
        <img
          src="banner.jpg"
          alt="banner advertise"
        />
        <div className="banner_slogan">
          <p className="banner_slogan_tittle">
            Learning that gets you
          </p>
          <p className="banner_slogan_text">
            Skills for your present (and your
            future). Get started with us.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
