import React from 'react';
import Slider from 'react-slick';

const NeighborhoodImagesSlide = ({image}) => (
  <img src={image.url} className="image-slide"></img>
);

const NeighborhoodImagesSlideshow = ({images}) => {
  if (Object.keys(images).length > 0) {
    let imageKeys = Object.keys(images);
    let allImages = imageKeys.map((key, idx) => {
      let userName = `${images[key].user.first_name} ${images[key].user.last_name.slice(0, 1)}.`;

      return (
        <div key={idx}>
          <NeighborhoodImagesSlide image={images[key]} />
          <h5>{userName}</h5>
          <h5>{images[key].caption}</h5>
        </div>
      );
    });

    let settings = {
      dots: true,
      arrows: true,
      accessibility: true
    };

    return (
      <div className="all-images-slideshow">
        <Slider {...settings}>
          {allImages}
        </Slider>
      </div>
    );
  } else {
    return (
      <div className="no-images"></div>
    );
  }
};



export default NeighborhoodImagesSlideshow;
