import { connect } from 'react-redux';
import NeighborhoodPage from './neighborhood_page';
import { fetchNeighborhood } from '../../actions/neighborhoods_actions';
import { postReview, clearReviewErrors } from '../../actions/reviews_actions';
import { uploadImage } from '../../actions/images_actions';

const mapStateToProps = state => ({
  neighborhood: state.neighborhood,
  images: state.images,
  reviews: state.reviews.allReviews,
  currentUser: state.session.currentUser,
  errors: state.reviews.errors
});

const mapDispatchToProps = dispatch => ({
  fetchNeighborhood: (id) => dispatch(fetchNeighborhood(id)),
  postReview: (review, neighborhoodId) => dispatch(postReview(review, neighborhoodId)),
  uploadImage: (image, neighborhoodId) => dispatch(uploadImage(image, neighborhoodId)),
  clearReviewErrors: () => dispatch(clearReviewErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodPage);
