import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/userActions';
import UserList from '../account/UserList';
import { browserHistory } from 'react-router';
import {Tabs,Icon} from 'antd';
const TabPane = Tabs.TabPane;

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
  <Tabs defaultActiveKey="1">
    <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">

        <input type="submit" value="Loading Data"
          className="btn btn-primary"
          onClick={this.redirectToAddUserPage} />
        <UserList loading={this.context.loading} Users={user.allUsers} />
    </TabPane>
    <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
      Tab 2
    </TabPane>
  </Tabs>

    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

HomePage.contextTypes={
  loading:React.PropTypes.bool
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
