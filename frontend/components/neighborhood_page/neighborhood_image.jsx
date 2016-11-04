import React from 'react';

const NeighborhoodImage = ({images}) => {

  if (Object.keys(images).length > 0) {
    let style = {
      backgroundImage: 'url(' + images[1].url + ')'
    };
    return (
      <div className="neighborhood-image" style={style}>
      </div>
    );
  } else {
    return (
      <div></div>
    );
  }
};

export default NeighborhoodImage;
