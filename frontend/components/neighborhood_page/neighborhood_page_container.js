import { connect } from 'react-redux';
import NeighborhoodPage from './neighborhood_page';
import { fetchNeighborhood } from '../../actions/neighborhoods_actions';

const mapStateToProps = state => ({
  neighborhood: state.neighborhood,
  images: state.images,
  reviews: state.reviews
});

const mapDispatchToProps = dispatch => ({
  fetchNeighborhood: (id) => dispatch(fetchNeighborhood(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NeighborhoodPage);
