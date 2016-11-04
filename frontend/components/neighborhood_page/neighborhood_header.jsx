import React from 'react';

const NeighborhoodHeader = ({neighborhood}) => {
  const handleReviewClick = () => {

  };

  const handlePhotoClick = () => {

  };

  return (
    <div className="neighborhood-header">
      <h2>{neighborhood.name}</h2>
      <div className="neighborhood-header-buttons">
        <button onClick={handleReviewClick}>Write a Review</button>
        <button onClick={handlePhotoClick}>Add a Photo</button>
      </div>
    </div>
  );
};

export default NeighborhoodHeader;
