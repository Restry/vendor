import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import User from '../account/userinfo';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


const Header = ({loading}) => {
  return (
    <div>
      {/*NAVBAR*/}
      {/*===================================================*/}
      <div id="navbar-container" className="boxed">
        <div className="col-lg-8 col-lg-offset-2">

          {/*Brand logo & name*/}
          {/*================================*/}
          <div className="navbar-header">
            <a href="index.html" className="navbar-brand">
              <img src={require('../../assets/img/logo.png')} alt="Gsp Logo" className="brand-icon" />
              <div className="brand-title">
                <span className="brand-text">BOC GSP</span>
              </div>
            </a>
          </div>
          {/*================================*/}
          {/*End brand logo & name*/}


          {/*Navbar Dropdown*/}
          {/*================================*/}
          <div className="navbar-content clearfix">

            <ul className="nav navbar-top-links pull-right">

              {/*User dropdown*/}
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              <li id="dropdown-user" className="dropdown">
                <User />
              </li>
              {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
              {/*End user dropdown*/}

              <li>
                <a href="#" className="aside-toggle navbar-aside-icon">
                  <i className="pci-ver-dots"></i>
                </a>
              </li>
            </ul>
          </div>
          {/*================================*/}
          {/*End Navbar Dropdown*/}
        </div>
        <div className="clear"></div>
      </div>

      {/*===================================================*/}
      {/*END NAVBAR*/}
    </div>

  );
};

export default Header;
