// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import { Breadcrumb } from 'antd';

class App extends React.Component {
  render() {
    return (
      <div className="ant-layout-top">

        <Header loading={this.props.loading} />

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
