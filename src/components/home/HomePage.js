import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as UserActions from '../../actions/userActions';
import UserList from '../account/UserList';
import { browserHistory } from 'react-router';
import { Tabs, Icon, Button, Carousel } from 'antd';
const TabPane = Tabs.TabPane;
import NeedsPage from '../need/NeedsPage';



class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddNeedPage = this.redirectToAddNeedPage.bind(this);
  }

  UserRow(User, index) {
    return <div key={index}>{User.title}</div>;
  }


  redirectToAddNeedPage() {
    browserHistory.push('/need');
  }


  render() {
    const {user, showTabs} = this.props;
    let operations = <span />;
    if (user.token) {
      operations = <Button onClick={this.redirectToAddNeedPage}>发布一条需求</Button>;
    }
    return (

        <Tabs tabBarExtraContent={operations} defaultActiveKey={showTabs[0].title}>
          {showTabs.map(t => {
            return <TabPane tab={<span><Icon className="vendor" type={t.class} />{t.title}</span>} key={t.title}>
              <NeedsPage category={t.title} />
            </TabPane>;
          })}
        </Tabs>

    );
  }
}

HomePage.propTypes = {
  user: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  showTabs: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    user: state.user,
    showTabs: [
      { title: 'Wechat', class: 'wechat' },
      { title: 'Apple', class: 'apple' },
      { title: 'Game', class: 'game' }
    ]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(UserActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
