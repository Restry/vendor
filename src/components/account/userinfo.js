
import LoginForm from './Login';
import React from 'react';
import { Popover, Button } from 'antd';

const Userinfo = React.createClass({
  getInitialState() {
    return {
      visible: false
    };
  },
  hide() {
    this.setState({
      visible: false
    });
  },
  handleVisibleChange(visible) {
    this.setState({ visible });
  },
  render() {
    let {user} = this.props;

    let content =<div>
    <LoginForm />
    <a onClick={this.hide}>Close</a>
    </div>;

    return (
      <Popover
        content={content}
        title="Login Form"
        trigger="click"
        visible={this.state.visible}
        onVisibleChange={this.handleVisibleChange}
        >
        <Button type="primary">{user && user.name || "Login"}</Button>
      </Popover>
    );
  }
});



Userinfo.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Userinfo;
