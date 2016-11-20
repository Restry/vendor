import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
const Option = Select.Option;
import React from 'react';

import { connect } from 'react-redux';
import * as userActions from '../../actions/userActions';
import { bindActionCreators } from 'redux';
import { Link, IndexLink, browserHistory } from 'react-router';


const residences = [{
  value: 'zhejiang',
  label: 'Zhejiang',
  children: [{
    value: 'hangzhou',
    label: 'Hangzhou',
    children: [{
      value: 'xihu',
      label: 'West Lake'
    }]
  }]
}, {
  value: 'jiangsu',
  label: 'Jiangsu',
  children: [{
    value: 'nanjing',
    label: 'Nanjing',
    children: [{
      value: 'zhonghuamen',
      label: 'Zhong Hua Men'
    }]
  }]
}];

const RegistrationForm = Form.create()(React.createClass({
  getInitialState() {
    return {
      passwordDirty: false
    };

  },
  componentDidMount() {

    this.props.form.setFieldsValue({
      email: '123@qq.com'
    });
  },
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }

      this.props.actions.registration(values).then((res) => {
        browserHistory.push('/');

      });

      console.log('Received values of form: ', values);
    });
  },
  handlePasswordBlur(e) {
    const value = e.target.value;
    this.setState({ passwordDirty: this.state.passwordDirty || !!value });
  },
  checkPassowrd(rule, value, callback) {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  },
  checkConfirm(rule, value, callback) {
    const form = this.props.form;
    if (value && this.state.passwordDirty) {
      form.validateFields(['confirm'], { force: true });
    }

    callback();
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const prefixSelector = getFieldDecorator('prefix', {
      initialValue: '86'
    })(
      <Select className="icp-selector">
        <Option value="86">+86</Option>
        <Option value="80">+80</Option>
      </Select>
      );
    return (
      <div id="container" className="cls-container">

        <div id="bg-overlay" className="bg-img bg-img-1"></div>

        <div className="cls-content">
          <div className="cls-content-lg panel">
            <div className="panel-body">
              <div className="mar-ver pad-btm">
                <h3 className="h4 mar-no">用户注册</h3>
                <p className="text-muted">输入用户信息</p>
              </div>


              <Form horizontal onSubmit={this.handleSubmit}>
                <FormItem
                  {...formItemLayout}
                  label="邮箱"
                  hasFeedback
                  >
                  {getFieldDecorator('email', {
                    rules: [{
                      type: 'email', message: 'The input is not valid E-mail!'
                    }, {
                      required: true, message: 'Please input your E-mail!'
                    }]
                  })(
                    <Input />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="密码"
                  hasFeedback
                  >
                  {getFieldDecorator('password', {
                    rules: [{
                      required: true, message: 'Please input your password!'
                    }, {
                      validator: this.checkConfirm
                    }]
                  })(
                    <Input type="password" onBlur={this.handlePasswordBlur} />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="确认密码"
                  hasFeedback
                  >
                  {getFieldDecorator('confirm', {
                    rules: [{
                      required: true, message: 'Please confirm your password!'
                    }, {
                      validator: this.checkPassowrd
                    }]
                  })(
                    <Input type="password" />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label={(
                    <span>
                      昵称&nbsp;
              <Tooltip title="What do you want other to call you?">
                        <Icon type="question-circle-o" />
                      </Tooltip>
                    </span>
                  )}
                  hasFeedback
                  >
                  {getFieldDecorator('nickname', {
                    rules: [{ required: true, message: 'Please input your nickname!' }]
                  })(
                    <Input />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="所在地"
                  >
                  {getFieldDecorator('residence', {
                    initialValue: ['zhejiang', 'hangzhou', 'xihu'],
                    rules: [{ type: 'array', required: true, message: 'Please select your habitual residence!' }]
                  })(
                    <Cascader options={residences} />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="联系方式"
                  >
                  {getFieldDecorator('phone', {
                    rules: [{ required: true, message: 'Please input your phone number!' }]
                  })(
                    <Input addonBefore={prefixSelector} />
                    )}
                </FormItem>
                <FormItem
                  {...formItemLayout}
                  label="手机验证"
                  >
                  <Row gutter={8}>
                    <Col span={12}>
                      {getFieldDecorator('captcha', {
                        rules: [{ required: true, message: 'Please input the captcha you got!' }]
                      })(
                        <Input size="large" />
                        )}
                    </Col>
                    <Col span={12}>
                      <Button size="large">Get captcha</Button>
                    </Col>
                  </Row>
                </FormItem>
                <FormItem>
                  <Row>
                    <Col span={14} offset={6}>
                      <p>
                        {getFieldDecorator('agreement', {
                          valuePropName: 'checked'
                        })(
                          <Checkbox>我同意此 <a>协议</a></Checkbox>
                          )}
                      </p>
                      <Button type="primary" htmlType="submit" size="large">注册</Button>
                    </Col>
                  </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
