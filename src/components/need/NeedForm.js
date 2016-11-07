import { Form, Input, Tooltip, Radio, Icon, Cascader, Select, Row, Col, Checkbox, Button } from 'antd';
const FormItem = Form.Item;
import React, { Component, PropTypes } from 'react';

class NeedForm extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
      this.props.form.setFieldsValue(this.props.need);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.need._id != nextProps.need._id) {
      this.props.form.setFieldsValue(nextProps.need);
    }
  }


  render() {
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 }
    };
    const { visible, onCancel, onCreate, form, need } = this.props;
    const { getFieldDecorator } = form;

    return (

      <Form horizontal onSubmit={onCreate}>
        <FormItem {...formItemLayout} label="标题" hasFeedback>
          {getFieldDecorator('title', {
            rules: [{
              required: true, message: '请输入标题!'
            }]
          })(<Input />)}
        </FormItem>

        <FormItem {...formItemLayout} label="类别" hasFeedback>
          {getFieldDecorator('category', {
            initialValue: 'Wechat'
          })(
            <Radio.Group>
              <Radio value="Wechat">Wechat</Radio>
              <Radio value="Apple">Apple</Radio>
              <Radio value="Game">Game</Radio>
            </Radio.Group>
            )}
        </FormItem>

        <FormItem {...formItemLayout} label="描述">
          {getFieldDecorator('notes')(<Input type="textarea" />)}
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
}

NeedForm.propTypes = {
  need: PropTypes.object
};

export default Form.create()(NeedForm);




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
