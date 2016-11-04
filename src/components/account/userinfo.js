
import LoginForm from './Login';
import React from 'react';
import { Popover, Button } from 'antd';

const Userinfo = React.createClass({
  getInitialState() {
    return {visible: false};
  },
  hide() {
    this.setState({visible: false});
  },
  handleVisibleChange(visible) {
    this.setState({ visible });
  },
  render() {
    let {user,login} = this.context;

    let content = <div>
      <LoginForm login={login}/>
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
        <Button type="primary">{user && user.nickname || "Login"}</Button>
      </Popover>
    );
  }
});

Userinfo.contextTypes = {
  user: React.PropTypes.object,
  login: React.PropTypes.func
};

Userinfo.propTypes = {
  user: React.PropTypes.object.isRequired
};

export default Userinfo;
