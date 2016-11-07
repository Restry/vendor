// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Breadcrumb from './common/Breadcrumb';

class App extends React.Component {
  getChildContext() {
    console.log(`Getting context value user:${this.props.user},loading:${this.props.loading}`);
    return {
      user: this.props.user,
      login: this.props.actions.login,
      loading:this.props.loading
    };
  }

  render() {

let {actions,user,loading,current} = this.props;

    return (
      <div className="ant-layout-top">

        <Header login={actions.login} user={user} loading={loading} />

        <div className="ant-layout-wrapper">
          <div className="ant-layout-breadcrumb">
            <Breadcrumb current={current}/>
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
  current: PropTypes.array,
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
    user: state.user,
    current:[]
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
