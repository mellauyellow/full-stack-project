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
    <div className="neighborhood-trending-words'">
      This is the neighborhood trending words component.
    </div>
  );
}

export default NeighborhoodTrendingWords;
