import React from 'react';
import { Link } from 'react-router';
import { Table } from 'antd';

const columns = [{
  title: 'title',
  dataIndex: 'title',
  key: 'title',
  render: (text, record) => <Link to={'/course/' + record.id}>{text}</Link>
}, {
  title: 'authorId',
  dataIndex: 'authorId',
  key: 'authorId'
}, {
  title: 'category',
  dataIndex: 'category',
  key: 'category'
}, {
  title: 'length',
  dataIndex: 'length',
  key: 'length'
}, {
  title: 'Action',
  key: '',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.authorId}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions<Icon type="down" />
      </a>
    </span>
  )
}];


const UserList = ({users}) => {
  return (<Table columns={columns} dataSource={users} />
  );
};

UserList.propTypes = {
  users: React.PropTypes.array.isRequired
};

export default UserList;

