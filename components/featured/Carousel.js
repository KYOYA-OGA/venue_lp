import React from 'react'
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1000,
  }
  return (
    <div className="carousel_wrapper bck_black">
      <Slider {...settings}>
        <picture>
          <source
            media="(max-width: 765px)"
            srcSet="/images/slide_three_sp.webp"
          />
          <img
            src="/images/slide_three.jpeg"
            alt="live"
            className="carousel_image"
          />
        </picture>

        <picture>
          <source
            media="(max-width: 765px)"
            srcSet="/images/slide_two_sp.webp"
          />
          <img
            src="/images/slide_two.jpeg"
            alt="live"
            className="carousel_image"
          />
        </picture>

        <picture>
          <source
            media="(max-width: 765px)"
            srcSet="/images/slide_one_sp.webp"
          />
          <img
            src="/images/slide_one.jpeg"
            alt="live"
            className="carousel_image"
          />
        </picture>
      </Slider>
    </div>
  )
}

export default Carousel
