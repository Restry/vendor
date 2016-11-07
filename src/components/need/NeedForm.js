import { Button, Modal,Checkbox, Form, Input, Radio } from 'antd';
const FormItem = Form.Item;
import React from 'react';

const NeedForm = Form.create()(
  (props) => {
    const { visible, onCancel, onCreate, form } = props;
    const { getFieldDecorator } = form;
    
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
        

        <Form horizontal onSubmit={this.handleSubmit}>
        <FormItem
          {...formItemLayout}
          label="标题"
          hasFeedback
          >
          {getFieldDecorator('title', {
            rules: [  {
              required: true, message: '请输入标题!'
            }]
          })(
            <Input />
            )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="Password"
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
          label="Confirm Password"
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
              Nickname&nbsp;
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
          label="Habitual Residence"
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
          label="Phone Number"
          >
          {getFieldDecorator('phone', {
            rules: [{ required: true, message: 'Please input your phone number!' }]
          })(
            <Input addonBefore={prefixSelector} />
            )}
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
              <Button type="primary" htmlType="submit" size="large">发布</Button>
            </Col>
          </Row>
        </FormItem>
      </Form>


    );
  }
);
export default NeedForm;

/*

<Form horizontal onSubmit={onCreate}>
          <FormItem label="Title">
            {getFieldDecorator('title', {
              rules: [{ required: true, message: 'Please input the title of collection!' }]
            })(
              <Input />
            )}
          </FormItem>
          <FormItem label="Description">
            {getFieldDecorator('notes')(<Input type="textarea" />)}
          </FormItem>

          <FormItem className="collection-create-form_last-form-item">
            {getFieldDecorator('category', {
              initialValue: 'Wechat'
            })(
              <Radio.Group>
                <Radio value="Wechat">Wechat</Radio>
                <Radio value="Apple">Apple</Radio>
              </Radio.Group>
            )}
          </FormItem>

        <FormItem>
            <p>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked'
              })(
                <Checkbox>I had read the <a>agreement</a></Checkbox>
                )}
            </p>
            <Button type="primary" htmlType="submit" size="large">Submit</Button>

        </FormItem>
        </Form>

import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const NeedForm = ({need, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Need</h1>
      <TextInput
        name="title"
        label="Title"
        value={need.title}
        onChange={onChange}
        error={errors.title}/>

      <SelectInput
        name="authorId"
        label="Author"
        value={need.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={need.category}
        onChange={onChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={need.length}
        onChange={onChange}
        error={errors.length}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

NeedForm.propTypes = {
  need: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default NeedForm;
*/
