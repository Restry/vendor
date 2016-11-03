// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';

import { Menu, Breadcrumb } from 'antd';

class App extends React.Component {
  render() {
    return (
  <div className="ant-layout-top">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-logo"></div>

          <Header loading={this.props.loading} />

        </div>
      </div>
      <div className="die ant-layout-subheader">
        <div className="ant-layout-wrapper">
          <Menu mode="horizontal"
            defaultSelectedKeys={['1']} style={{marginLeft: 124}}>
            <Menu.Item key="1">二级导航</Menu.Item>
            <Menu.Item key="2">二级导航</Menu.Item>
            <Menu.Item key="3">二级导航</Menu.Item>
          </Menu>
        </div>
      </div>
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
  loading: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
