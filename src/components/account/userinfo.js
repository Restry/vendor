import LoginForm from './Login';
import React from 'react';
import { Popover, Button } from 'antd';
import { Link, IndexLink } from 'react-router';

const Userinfo = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  hide() {
    this.setState({ visible: false });
  },
  handleVisibleChange(visible) {
    this.setState({ visible });
  },
  render() {
    let {user, login} = this.context;
    if (user && user.nickname) {
      return (
        <div>
          <a href="#" data-toggle="dropdown" className="dropdown-toggle text-right">
            <span className="pull-right">
              <i className="gsp-pli-male ic-user"></i>
            </span>
            <div className="username hidden-xs">
              {user.nickname}
            </div>
          </a>


          <div className="dropdown-menu dropdown-menu-md dropdown-menu-right panel-default">

            {/* Dropdown heading  */}
            <div className="pad-all bord-btm">
              <p className="text-main mar-btm"><span className="text-bold">750GB</span> of 1,000GB Used</p>
              <div className="progress progress-sm">
                <div className="progress-bar">
                  <span className="sr-only">70%</span>
                </div>
              </div>
            </div>


            {/* User dropdown menu */}
            <ul className="head-list">
              <li>
                <a href="#"><i className="gsp-pli-male icon-lg icon-fw"></i> Profile</a>
              </li>
              <li>
                <a href="#">
                  <span className="badge badge-danger pull-right">9</span><i className="gsp-pli-mail icon-lg icon-fw"></i> Messages</a>
              </li>
              <li>
                <a href="#"><span className="label label-success pull-right">New</span><i className="gsp-pli-gear icon-lg icon-fw"></i> Settings</a>
              </li>
              <li>
                <a href="#"><i className="gsp-pli-information icon-lg icon-fw"></i> Help</a>
              </li>
              <li>
                <a href="#"><i className="gsp-pli-computer-secure icon-lg icon-fw"></i> Lock screen</a>
              </li>
            </ul>

            {/* Dropdown footer */}
            <div className="pad-all text-right">
              <a href="pages-login.html" className="btn btn-primary"><i className="gsp-pli-unlock"></i> Logout</a>
            </div>
          </div>

        </div>
      );
    }else{


    return <Link className="text-right" to="login">登陆</Link>;
    }


  }
});

Userinfo.contextTypes = {
  user: React.PropTypes.object,
  login: React.PropTypes.func
};


export default Userinfo;
