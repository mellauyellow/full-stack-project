import { connect } from 'react-redux';
import Region from './region';

const mapStateToProps = (state, ownProps) => ({
  region: state.region,
  router: ownProps.router,
  query: ownProps.location.query
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Region);
