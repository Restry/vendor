import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import LoadingDots from './LoadingDots';
import { Menu, Breadcrumb, Row, Col } from 'antd';
import User from '../account/userinfo';

const Header = ({loading}) => {
  return (
    <div className="ant-layout-header">
      <div className="ant-layout-wrapper">
        <Row>
          <Col span={18}>
            <div className="ant-layout-logo">
              <i className="vendor anticon-logo"></i>
            </div>

            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>

              <Menu.Item key="1">
                <IndexLink to="/" activeClassName="active">首页</IndexLink>
              </Menu.Item> 
              <Menu.Item key="2">
                <Link to="/about" activeClassName="active">关于我们</Link>
              </Menu.Item>
            </Menu>
          </Col>

          <Col span={6} className="ant-userinfo">
            <User />
          </Col>
        </Row>

      </div>
    </div>
  );
};

export default Header;
