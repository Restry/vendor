import { Form, Icon, Input, Button, Checkbox, message, Card } from 'antd';
const FormItem = Form.Item;
import React from 'react';
import axios from 'axios';
import { Link, IndexLink,browserHistory } from 'react-router';

import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import { bindActionCreators } from 'redux';

const NormalLoginForm = Form.create()(React.createClass({

  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.actions.login(values).then((res) => {
        message.success('Login success');
        browserHistory.push('/');

      });

      // Message.info('Received values of form: ', values);
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div id="container" className="cls-container">

        <div id="bg-overlay" className="bg-img"></div>

        <div className="cls-content">
          <div className="cls-content-sm panel">
            <div className="panel-body">
              <div className="mar-ver pad-btm">
                <h3 className="h4 mar-no">用户登陆</h3>
                <p className="text-muted"></p>
              </div>

              <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                  {getFieldDecorator('email', {
                    rules: [{ required: true, message: 'Please input your email!' }]
                  })(
                    <Input addonBefore={<Icon type="user" />} placeholder="email" />
                    )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }]
                  })(
                    <Input addonBefore={<Icon type="lock" />} type="password" placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true
                  })(
                    <Checkbox>记住我</Checkbox>
                    )}

                  <a className="login-form-forgot">忘记密码</a>
                  或者
                  <Link to="/register" >立即注册</Link>

                </FormItem>
                <FormItem>

                  <Button type="primary" htmlType="submit" className="login-form-button">
                    登陆
                  </Button>

                </FormItem>
              </Form>
            </div>

            <div className="pad-all">
              <div className="media pad-top bord-top">
                <div className="pull-right">
                  <a href="#" className="pad-rgt"><i className="gsp-psi-facebook icon-lg text-primary"></i></a>
                  <a href="#" className="pad-rgt"><i className="gsp-psi-twitter icon-lg text-info"></i></a>
                  <a href="#" className="pad-rgt"><i className="gsp-psi-google-plus icon-lg text-danger"></i></a>
                </div>
                <div className="media-body text-left">
                  Login with
                      </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}));

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NormalLoginForm);

