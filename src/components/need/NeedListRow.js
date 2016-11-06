import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const NeedListRow = ({need}) => {
  return (
    <tr>
      <td><a href={need.watchHref} target="_blank">Watch</a></td>
      <td><Link to={'/need/' + need.id}>{need.title}</Link></td>
      <td>{need.authorId}</td>
      <td>{need.category}</td>
      <td>{need.length}</td>
    </tr>
  );
};

NeedListRow.propTypes = {
  need: PropTypes.object.isRequired
};

export default NeedListRow;
