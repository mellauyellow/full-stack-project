import { connect } from 'react-redux';
import { postReview } from '../../../actions/reviews_actions';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  neighborhood: state.neighborhood
});

const mapDispatchToProps = dispatch => ({
  postReview: (review, neighborhoodId) => dispatch(postReview(review, neighborhoodId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
