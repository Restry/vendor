import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as needActions from '../../actions/needActions';
import NeedList from './NeedList';

class NeedsPage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }


  render() {
    const {needs} = this.props;

    return (
        <NeedList loading={this.props.loading} needs={needs} />
    );
  }
}

NeedsPage.propTypes = {
  needs: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  let {category} = ownProps;

  return {
    loading: state.ajaxCallsInProgress > 0,
    needs: state.needs.filter((n) => n.category == category)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(needActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(NeedsPage);
