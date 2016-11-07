import NeedForm from './NeedForm';
import * as needActions from '../../actions/needActions';

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { message } from 'antd';

const ManageNeedPage = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  handleCancel() {
    this.setState({ visible: false });
  },

  redirect() {
    //this.setState({saving: false});
    message.success('Need saved');
    this.context.router.push('/');
  },

  handleCreate(e) {
    e.preventDefault();

    const form = this.form;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      values.states = 'started';
      values.token = this.props.user.token;

      this.props.actions.saveNeed(values)
        .then(() => this.redirect())
        .catch(error => {
          message.error(error);
          //this.setState({saving: false});
        });



      console.log('Received values of form: ', values);
      form.resetFields();
      //  this.setState({ visible: false });
    });
  },
  saveFormRef(form) {
    this.form = form;
  },
  render() {
    return (
      <NeedForm
        ref={this.saveFormRef}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
        />
    );
  }
});
ManageNeedPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  const needId = ownProps.params.id; // from the path `/need/:id`

  let need = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };

  if (needId && state.needs.length > 0) {
    //need = getNeedById(state.needs, needId);
  }

  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(needActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageNeedPage);


/*

import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as needActions from '../../actions/needActions';
import NeedForm from './NeedForm';
import {authorsFormattedForDropdown} from '../../selectors/selectors';
import { message, Button } from 'antd';

export class ManageNeedPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      need: Object.assign({}, props.need),
      errors: {},
      saving: false
    };

    this.updateNeedState = this.updateNeedState.bind(this);
    this.saveNeed = this.saveNeed.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.need.id != nextProps.need.id) {
      // Necessary to populate form when existing need is loaded directly.
      this.setState({need: Object.assign({}, nextProps.need)});
    }
  }

  updateNeedState(event) {
    const field = event.target.name;
    let need = this.state.need;
    need[field] = event.target.value;
    return this.setState({need: need});
  }

  needFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.need.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }


  saveNeed(event) {
    event.preventDefault();

    if (!this.needFormIsValid()) {
      return;
    }

    this.setState({saving: true});

    this.props.actions.saveNeed(this.state.need)
      .then(() => this.redirect())
      .catch(error => {
        message.error(error);
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    message.success('Need saved');
    this.context.router.push('/needs');
  }

  render() {
    return (
      <NeedForm
        allAuthors={this.props.authors}
        onChange={this.updateNeedState}
        onSave={this.saveNeed}
        need={this.state.need}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageNeedPage.propTypes = {
  need: PropTypes.object.isRequired,
  authors: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageNeedPage.contextTypes = {
  router: PropTypes.object
};

function getNeedById(needs, id) {
  const need = needs.filter(need => need.id == id);
  if (need) return need[0]; //since filter returns an array, have to grab the first.
  return null;
}

function mapStateToProps(state, ownProps) {
  const needId = ownProps.params.id; // from the path `/need/:id`

  let need = {id: '', watchHref: '', title: '', authorId: '', length: '', category: ''};

  if (needId && state.needs.length > 0) {
    need = getNeedById(state.needs, needId);
  }

  return {
    need: need,
    authors: authorsFormattedForDropdown(state.authors)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(needActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageNeedPage);
*/
