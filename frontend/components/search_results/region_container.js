import { connect } from 'react-redux';
import Region from './region';

const mapStateToProps = state => ({
  region: state.region
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Region);
