import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
const FormItem = Form.Item;
import React from 'react';
import axios from 'axios';
import { Link, IndexLink } from 'react-router';

const NormalLoginForm = Form.create()(React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    this.props.form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.login(values).then((res) => {
        message.success('Login success');
      });

     // Message.info('Received values of form: ', values);
    });
  },
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
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
            <Checkbox>Remember me</Checkbox>
            )}
          <a className="login-form-forgot">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Log in
          </Button>
          Or
          <Link to="/register" >register now!</Link>
        </FormItem>
      </Form>
    );
  }
}));

export default NormalLoginForm;
