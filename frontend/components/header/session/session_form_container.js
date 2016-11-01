import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../../actions/session_actions';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.currentUser.username),
  errors: state.session.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  login: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
