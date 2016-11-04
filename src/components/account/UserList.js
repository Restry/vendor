import React from 'react';
import { Link } from 'react-router';
import { Table ,Icon} from 'antd';

const columns = [{
  title: 'nickname',
  dataIndex: 'nickname',
  key: 'nickname',
  render: (text, record) => <Link to={'/course/' + record.id}>{text}</Link>
}, {
  title: 'email',
  dataIndex: 'email',
  key: 'email'
}, {
  title: 'phone',
  dataIndex: 'phone',
  key: 'phone'
}, {
  title: 'residence',
  dataIndex: 'residence',
  key: 'residence'
}, {
  title: 'Action',
  key: '',
  render: (text, record) => (
    <span>
      <a href="#">Action 一 {record.phone}</a>
      <span className="ant-divider" />
      <a href="#">Delete</a>
      <span className="ant-divider" />
      <a href="#" className="ant-dropdown-link">
        More actions<Icon type="down" />
      </a>
    </span>
  )
}];


class UserList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {Users}=this.props;
    return ( <Table columns={columns} loading={this.context.loading} dataSource={Users} />    );
  }
}

UserList.propTypes = {
  Users: React.PropTypes.array.isRequired
};
UserList.contextTypes={
  loading:React.PropTypes.bool
};

export default UserList;

