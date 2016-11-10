import { connect } from 'react-redux';
import { fetchRegion } from '../../actions/regions_actions';
import {fetchSearchRegion } from '../../actions/search_actions';
import Search from './search';

const mapStateToProps = (state, ownProps) => ({
  region: state.region,
  router: ownProps.router,
  query: ownProps.location.query,
  search: state.search
});

const mapDispatchToProps = dispatch => ({
  fetchRegion: (regionId, filters) => dispatch(fetchRegion(regionId, filters)),
  fetchSearchRegion: (regionId, filters) => dispatch(fetchSearchRegion(regionId, filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
