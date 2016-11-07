import React from 'react';
import { Link } from 'react-router';
import Modal from 'react-modal';
import ReviewForm from './review_form/review_form';
import NotLoggedIn from './not_logged_in';
import SessionFormContainer from '../header/session/session_form_container';

class NeighborhoodHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      reviewForm: true,
      loggedIn: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.onModalClose = this.onModalClose.bind(this);
    this.determineComponent = this.determineComponent.bind(this);
    this.handleNextAction = this.handleNextAction.bind(this);
  }

  componentDidMount() {
    this.checkLogin();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({loggedIn: Boolean(nextProps.currentUser.id)});
  }

  handleClick(bool) {
    return () => {
      this.setState({modalOpen: true, reviewForm: bool});
    };
  }

  onModalClose() {
    this.setState({modalOpen: false});
  }

  checkLogin() {
    this.setState({loggedIn: Boolean(this.props.currentUser.id)});
  }

  handleNextAction() {
    this.setState({modalOpen: true});
  }

  determineComponent() {
    let component;

    if (this.state.loggedIn) {
      if (this.state.reviewForm) {
        component = <ReviewForm
          currentUser={this.props.currentUser}
          neighborhood={this.props.neighborhood}
          postReview={this.props.postReview}
          closeModal={this.onModalClose}
          uploadImage={this.props.uploadImage}/>;
      } else {
        component = <div></div>;
      }
    } else {
      component = <SessionFormContainer closeModal={this.onModalClose} nextAction={this.handleNextAction}/>;
    }

    return component;
  }

  render() {
    let component = this.determineComponent();
    return (
      <div className="neighborhood-header">
        <h2>{this.props.neighborhood.name}</h2>
        <div className="neighborhood-header-buttons">
          <button onClick={this.handleClick(true)}>Write a Review</button>
          <button onClick={this.handleClick(false)}>Add a Photo</button>
        </div>

        <Modal
          isOpen={this.state.modalOpen}
          onRequestClose={this.onModalClose}
          onAfterOpen={this.onModalOpen}>
          <Link onClick={this.onModalClose} className="close">x</Link>
          {component}
        </Modal>
      </div>
    );
  }
}

export default NeighborhoodHeader;
