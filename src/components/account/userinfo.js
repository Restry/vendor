import LoginForm from './Login';
import React from 'react';
import { Popover, Button } from 'antd';
import { Link, IndexLink } from 'react-router';

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

    let content =  <div>
      {!user.token && <LoginForm login={login}/>}

      <a onClick={this.hide}>Close</a>
    </div>;

    return (
      <div>
        <Popover
          content={content}
          title="登陆"
          trigger="click"
          visible={this.state.visible}
          placement="rightBottom" 
          onVisibleChange={this.handleVisibleChange}
          >
        <Button>{user && user.nickname || "登陆"}</Button>
          
        </Popover>
        {!user.token && <Link to="/register">注册</Link>}
      </div>
    );
  }
});

Userinfo.contextTypes = {
  user: React.PropTypes.object,
  login: React.PropTypes.func
};


export default Userinfo;
