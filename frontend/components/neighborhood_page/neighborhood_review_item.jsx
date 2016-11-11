import React from 'react';

const months = {
  0: "January",
  1: "February",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "August",
  8: "September",
  9: "October",
  10: "November",
  11: "December"
};

const NeighborhoodReviewItem = ({review, images, currentUser, deleteReview, neighborhood, fetchImages}) => {
  let reviewImages;

  if (images.length > 0) {
    reviewImages = images.map((image, idx) => {
      let style = {
        backgroundImage: 'url(' + image.url + ')'
      };

      return (
        <div className="review-image" style={style} key={idx}></div>
      );
    });
  }
  let dateObject = new Date(review.created_at);

  const handleDelete = (e) => {
    deleteReview(review.id, neighborhood.id);
    fetchImages(neighborhood.id);
  };

  let reviewEditText = <div></div>;

  if (review.user.id === currentUser.id) {
    reviewEditText = (
      <div className="review-edit-section">
        <button>Edit review</button>
        <button onClick={handleDelete}>Delete review</button>
      </div>
    );
  }

  return (
    <li>
      <div className="reviewer-content">
        <img src={review.user.profile_pic_url}></img>
        <div>
          <h5>{review.user.first_name} {review.user.last_name.slice(0, 1)}.</h5>
          <h6>Zip Code: {review.user.zip_code}</h6>
        </div>
      </div>
      <div className="review-body">
        <h5>{months[dateObject.getMonth()] + " " + dateObject.getFullYear()}</h5>
        <h5>{review.body}</h5>
        <div className="review-images">
          {reviewImages}
        </div>
        {reviewEditText}
      </div>
    </li>
  );
};

export default NeighborhoodReviewItem;
