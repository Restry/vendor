import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/userActions';
import UserList from '../account/UserList';
import { browserHistory } from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  UserRow(User, index) {
    return <div key={index}>{User.title}</div>;
  }

  redirectToAddUserPage() {
    // browserHistory.push('/User');

    let {actions, user} = this.props;
    actions.getAllUser(user.token);
  }


  render() {
    const {user} = this.props;

    return (
      <div>
        <h1>Users</h1>
        <input type="submit" value="Loading Data"
          className="btn btn-primary"
          onClick={this.redirectToAddUserPage} />
        <UserList Users={user.allUsers} />
      </div>
    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
