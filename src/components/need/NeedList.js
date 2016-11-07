import React, { PropTypes } from 'react';
import NeedListRow from './NeedListRow';
import { Link } from 'react-router';

import { Table, Icon } from 'antd';

const columns = [{
  title: '标题',
  dataIndex: 'title',
  key: 'title',
  render: (text, record) => <Link to={'/need/' + record._id}>{text}</Link>
}, {
  title: '描述',
  dataIndex: 'notes',
  key: 'notes'
}, {
  title: '状态',
  dataIndex: 'states',
  key: 'states'
}, {
  title: '进度',
  dataIndex: 'process',
  key: 'process'
}, {
  title: '操作',
  key: '',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.states}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions<Icon type="down" />
      </a>
    </span>
  )
}];

class NeedList extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (<Table loading={this.props.loading} columns={columns} dataSource={this.props.needs} />);
  }
}
 
NeedList.propTypes = {
  needs: PropTypes.array.isRequired,
  loading: PropTypes.bool
};

export default NeedList;
