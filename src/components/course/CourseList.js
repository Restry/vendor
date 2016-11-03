import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';
 import {Link} from 'react-router';

import { Table, Icon } from 'antd';

const columns = [{
  title: 'title',
  dataIndex: 'title',
  key: 'title',
  render: (text,record) => <Link to={'/course/' + record.id}>{text}</Link>
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

const CourseList = ({courses}) => {
  return ( <Table columns={columns} dataSource={courses}/>
  );
};

CourseList.propTypes = {
  courses: PropTypes.array.isRequired
};

export default CourseList;
