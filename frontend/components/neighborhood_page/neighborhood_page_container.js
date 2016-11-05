import { connect } from 'react-redux';
import NeighborhoodPage from './neighborhood_page';
import { fetchNeighborhood } from '../../actions/neighborhoods_actions';
import { postReview } from '../../actions/reviews_actions';

const mapStateToProps = state => ({
  neighborhood: state.neighborhood,
  images: state.images,
  reviews: state.reviews,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchNeighborhood: (id) => dispatch(fetchNeighborhood(id)),
  postReview: (review, neighborhoodId) => dispatch(postReview(review, neighborhoodId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodPage);
