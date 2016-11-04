import React from 'react';

const NeighborhoodTrendingWords = ({reviews}) => {
  let allWords = [];

  if (reviews) {
    reviews.forEach(review => {
      let bodyWords = review.body.split(" ");
      allWords.concat(bodyWords);
    });
  }

  return (
    <div className="neighborhood-trending-words">
    </div>
  );
};

export default NeighborhoodTrendingWords;
