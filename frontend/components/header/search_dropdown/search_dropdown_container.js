import { connect } from 'react-redux';
import SearchDropdown from './search_dropdown';
import { fetchRegions, fetchRegion } from '../../../actions/regions_actions';

const mapStateToProps = (state, ownProps) => ({
  regions: state.regions,
  location: ownProps.location,
  router: ownProps.router
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchRegions()),
  fetchRegion: (id, filters) => dispatch(fetchRegion(id, filters))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown);
