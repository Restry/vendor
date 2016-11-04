// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  getChildContext() {
    return {
      user: this.props.user,
      login: this.props.actions.login,
      loading:this.props.loading
    };
  }

  render() {
    return (
      <div className="ant-layout-top">

        <Header login={this.props.actions.login} user={this.props.user} loading={this.props.loading} />

        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>应用列表</Breadcrumb.Item>
              <Breadcrumb.Item>某应用</Breadcrumb.Item>

            </Breadcrumb>
          </div>
          <div className="ant-layout-container">
            {this.props.children}
          </div>
        </div>

        <div className="ant-layout-footer">
          Ant Design 版权所有 © Restry
        </div>
      </div>

    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  actions: PropTypes.object
};
App.childContextTypes = {
  user: PropTypes.object,
  login: PropTypes.func,
  loading:PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
