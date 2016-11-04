import { connect } from 'react-redux';
import SearchDropdown from './search_dropdown';
import { fetchRegions } from '../../../actions/regions_actions';

const mapStateToProps = (state, ownProps) => ({
  regions: state.regions,
  location: ownProps.location
});

const mapDispatchToProps = dispatch => ({
  fetchRegions: () => dispatch(fetchRegions())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDropdown);
