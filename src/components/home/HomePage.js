import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as UserActions from '../../actions/userActions';
import UserList from '../account/UserList';
import {browserHistory} from 'react-router';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddUserPage = this.redirectToAddUserPage.bind(this);
  }

  UserRow(User, index) {
    return <div key={index}>{User.title}</div>;
  }

  redirectToAddUserPage() {
    browserHistory.push('/User');
  }


  render() {
    const {Users} = this.props;

    return (
      <div>
        <h1>Users</h1>
        <input type="submit" value="Add User"
               className="btn btn-primary"
               onClick={this.redirectToAddUserPage}/>
        <UserList Users={Users}/>
      </div>
    );
  }
}

HomePage.propTypes = {
  Users: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    Users: state.user.allUser
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
