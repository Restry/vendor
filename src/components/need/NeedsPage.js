import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as needActions from '../../actions/needActions';
import NeedList from './NeedList';
import {browserHistory} from 'react-router';

class NeedsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.redirectToAddNeedPage = this.redirectToAddNeedPage.bind(this);
  }

  needRow(need, index) {
    return <div key={index}>{need.title}</div>;
  }

  redirectToAddNeedPage() {
    browserHistory.push('/need');
  }

  render() {
    const {needs} = this.props;

    return (
      <div>
        <h1>Needs</h1>
        <input type="submit"
               value="Add Need"
               className="btn btn-primary"
               onClick={this.redirectToAddNeedPage}/>
        <NeedList needs={needs}/>
      </div>
    );
  }
}

NeedsPage.propTypes = {
  needs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    needs: state.needs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(needActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedsPage);
