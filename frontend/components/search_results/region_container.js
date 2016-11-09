import { connect } from 'react-redux';
import { fetchRegion } from '../../actions/regions_actions';
import Region from './region';

const mapStateToProps = (state, ownProps) => ({
  region: state.region,
  router: ownProps.router,
  query: ownProps.location.query
});

const mapDispatchToProps = dispatch => ({
  fetchRegion: (regionId) => dispatch(fetchRegion(regionId))
});

export default connect(mapStateToProps, mapDispatchToProps)(Region);
