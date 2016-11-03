import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import { Menu, Breadcrumb } from 'antd';

const Header = ({loading}) => {
  return (

    <Menu theme="dark" mode="horizontal"
      defaultSelectedKeys={['1']} style={{ lineHeight: '63px' }}>
      <Menu.Item key="1"><IndexLink to="/" activeClassName="active">Home</IndexLink>
      </Menu.Item>
      <Menu.Item key="2"><Link to="/courses" activeClassName="active">Courses</Link></Menu.Item>
      <Menu.Item key="3"><Link to="/about" activeClassName="active">About</Link></Menu.Item>
      {loading && <LoadingDots interval={100} dots={20} />}
    </Menu>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
