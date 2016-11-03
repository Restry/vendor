import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import { Menu, Breadcrumb, Row, Col } from 'antd';
import User from '../account/userinfo';
let ua={name:"mike"}

const Header = ({loading}) => {
  return (
    <div className="ant-layout-header">
      <div className="ant-layout-wrapper">
        <Row>
          <Col span={18}>
            <div className="ant-layout-logo"></div>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

              <Menu.Item key="1">
                <IndexLink to="/" activeClassName="active">Home</IndexLink>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/courses" activeClassName="active">Wechat</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/about" activeClassName="active">Games</Link>
              </Menu.Item>

              <Menu.Item key="4">
                <Link to="/register" activeClassName="active">Register</Link>
              </Menu.Item>
              <Menu.Item key="5">
                <Link to="/login" activeClassName="active">login</Link>
              </Menu.Item>

              <Menu.Item key="6">
                {loading && <LoadingDots interval={100} dots={20} />}
              </Menu.Item>

            </Menu>
          </Col>

          <Col span={6}>
            <User user={ua} />
          </Col>
        </Row>



      </div>
    </div>



  );
};

Header.propTypes = {
  loading: PropTypes.bool.isRequired
};

export default Header;
