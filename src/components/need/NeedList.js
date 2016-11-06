import React, {PropTypes} from 'react';
import NeedListRow from './NeedListRow';
 import {Link} from 'react-router';

import { Table, Icon } from 'antd';

const columns = [{
  title: 'title',
  dataIndex: 'title',
  key: 'title',
  render: (text,record) => <Link to={'/need/' + record.id}>{text}</Link>
}, {
  title: 'notes',
  dataIndex: 'notes',
  key: 'notes'
}, {
  title: 'category',
  dataIndex: 'category',
  key: 'category'
}, {
  title: 'states',
  dataIndex: 'states',
  key: 'states'
}, {
  title: 'Action',
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

const NeedList = ({needs}) => {
  return ( <Table columns={columns} dataSource={needs}/>
  );
};

NeedList.propTypes = {
  needs: PropTypes.array.isRequired
};

export default NeedList;
