// This component handles the App template used on every page.
import React, { PropTypes } from 'react';
import Header from './common/Header';
import { connect } from 'react-redux';
import * as userActions from '../actions/userActions';
import { bindActionCreators } from 'redux';
import Breadcrumb from './common/Breadcrumb';

class App extends React.Component {
  getChildContext() {
    console.log(`Getting context value user:${this.props.user},loading:${this.props.loading}`);
    return {
      user: this.props.user,
      login: this.props.actions.login,
      loading: this.props.loading
    };
  }

  render() {

    let {actions, user, loading, current} = this.props;

    return (

      <div id="container" className="effect aside-float aside-bright mainnav-out">


        <Header login={actions.login} user={user} loading={loading} />

        <div className="boxed">

          {/*CONTENT CONTAINER*/}
          {/*===================================================*/}
          <div id="content-container">



            {/*Page content*/}
            {/*===================================================*/}
            <div id="page-content">


              <hr className="new-section-sm bord-no" />
              <div className="row">
                <div className="col-lg-8 col-lg-offset-2">

 {/*Page Title*/}
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            <div id="page-title">
              <h1 className="page-header text-overflow">Off-Canvas Navigation</h1>

              {/*Searchbox*/}
              <div className="searchbox">
                <div className="input-group custom-search-form">
                  <input type="text" className="form-control" placeholder="Search.." />
                  <span className="input-group-btn">
                    <button className="text-muted" type="button"><i className="gsp-pli-magnifi-glass"></i></button>
                  </span>
                </div>
              </div>
            </div>
            {/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/}
            {/*End page title*/}

                      {this.props.children}

                </div>
              </div>
            </div>
            {/*===================================================*/}
            {/*End page content*/}


          </div>
          {/*===================================================*/}
          {/*END CONTENT CONTAINER*/}



          {/*MAIN NAVIGATION*/}
          {/*===================================================*/}
          <nav id="mainnav-container">
            <div id="mainnav">

              {/*Menu*/}
              {/*================================*/}
              <div id="mainnav-menu-wrap">
                <div className="nano has-scrollbar">
                  <div className="nano-content" tabindex="0">

                    {/*Profile Widget*/}
                    {/*================================*/}
                    <div id="mainnav-profile" className="mainnav-profile">
                      <div className="profile-wrap">
                        <div className="pad-btm">
                          <span className="label label-success pull-right">New</span>
                          <img className="img-circle img-sm img-border" src={require('../assets/img/profile-photos/1.png')} alt="Profile Picture" />
                        </div>
                        <a href="#profile-nav" className="box-block" data-toggle="collapse" aria-expanded="false">
                          <span className="pull-right dropdown-toggle">
                            <i className="dropdown-caret"></i>
                          </span>
                          <p className="mnp-name">Aaron Chavez</p>
                          <span className="mnp-desc">aaron.cha@Back of China</span>
                        </a>
                      </div>
                      <div id="profile-nav" className="collapse list-group bg-trans">
                        <a href="#" className="list-group-item">
                          <i className="gsp-pli-male icon-lg icon-fw"></i> View Profile
                                        </a>
                        <a href="#" className="list-group-item">
                          <i className="gsp-pli-gear icon-lg icon-fw"></i> Settings
                                        </a>
                        <a href="#" className="list-group-item">
                          <i className="gsp-pli-information icon-lg icon-fw"></i> Help
                                        </a>
                        <a href="#" className="list-group-item">
                          <i className="gsp-pli-unlock icon-lg icon-fw"></i> Logout
                                        </a>
                      </div>
                    </div>


                    {/*Shortcut buttons*/}
                    {/*================================*/}
                    <div id="mainnav-shortcut">
                      <ul className="list-unstyled">
                        <li className="col-xs-3" data-content="My Profile" data-original-title="" title="">
                          <a className="shortcut-grid" href="#">
                            <i className="gsp-psi-male"></i>
                          </a>
                        </li>
                        <li className="col-xs-3" data-content="Messages" data-original-title="" title="">
                          <a className="shortcut-grid" href="#">
                            <i className="gsp-psi-speech-bubble-3"></i>
                          </a>
                        </li>
                        <li className="col-xs-3" data-content="Activity" data-original-title="" title="">
                          <a className="shortcut-grid" href="#">
                            <i className="gsp-psi-thunder"></i>
                          </a>
                        </li>
                        <li className="col-xs-3" data-content="Lock Screen" data-original-title="" title="">
                          <a className="shortcut-grid" href="#">
                            <i className="gsp-psi-lock-2"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/*================================*/}
                    {/*End shortcut buttons*/}


                    <ul id="mainnav-menu" className="list-group">

                      {/*Category name*/}
                      <li className="list-header">Navigation</li>

                      {/*Menu list item*/}
                      <li>
                        <a href="index.html">
                          <i className="gsp-psi-home"></i>
                          <span className="menu-title">
                            <strong>Dashboard</strong>
                          </span>
                        </a>
                      </li>

                      {/*Menu list item*/}
                      <li className="active-sub active">
                        <a href="#">
                          <i className="gsp-psi-split-vertical-2"></i>
                          <span className="menu-title">
                            <strong>Layouts</strong>
                          </span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse in" aria-expanded="false">
                          <li><a href="layouts-collapsed-navigation.html">Collapsed Navigation</a></li>
                          <li className="active-link"><a href="layouts-offcanvas-navigation.html">Off-Canvas Navigation</a></li>
                          <li><a href="layouts-offcanvas-slide-in-navigation.html">Slide-in Navigation</a></li>
                          <li><a href="layouts-offcanvas-revealing-navigation.html">Revealing Navigation</a></li>
                          <li className="list-divider"></li>
                          <li><a href="layouts-aside-right-side.html">Aside on the right side</a></li>
                          <li><a href="layouts-aside-left-side.html">Aside on the left side</a></li>
                          <li><a href="layouts-aside-dark-theme.html">Dark version of aside</a></li>
                          <li className="list-divider"></li>
                          <li><a href="layouts-fixed-navbar.html">Fixed Navbar</a></li>
                          <li><a href="layouts-fixed-footer.html">Fixed Footer</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="widgets.html">
                          <i className="gsp-psi-gear-2"></i>
                          <span className="menu-title">
                            <strong>Widgets</strong>
                            <span className="pull-right badge badge-warning">24</span>
                          </span>
                        </a>
                      </li>

                      <li className="list-divider"></li>

                      {/*Category name*/}
                      <li className="list-header">Components</li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-boot-2"></i>
                          <span className="menu-title">UI Elements</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="ui-buttons.html">Buttons</a></li>
                          <li><a href="ui-panels.html">Panels</a></li>
                          <li><a href="ui-modals.html">Modals</a></li>
                          <li><a href="ui-progress-bars.html">Progress bars</a></li>
                          <li><a href="ui-components.html">Components</a></li>
                          <li><a href="ui-typography.html">Typography</a></li>
                          <li><a href="ui-list-group.html">List Group</a></li>
                          <li><a href="ui-tabs-accordions.html">Tabs &amp; Accordions</a></li>
                          <li><a href="ui-alerts-tooltips.html">Alerts &amp; Tooltips</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-pen-5"></i>
                          <span className="menu-title">Forms</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="forms-general.html">General</a></li>
                          <li><a href="forms-components.html">Advanced Components</a></li>
                          <li><a href="forms-validation.html">Validation</a></li>
                          <li><a href="forms-wizard.html">Wizard</a></li>
                          <li><a href="forms-file-upload.html">File Upload</a></li>
                          <li><a href="forms-text-editor.html">Text Editor</a></li>
                          <li><a href="forms-markdown.html">Markdown</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-receipt-4"></i>
                          <span className="menu-title">Tables</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="tables-static.html">Static Tables</a></li>
                          <li><a href="tables-bootstrap.html">Bootstrap Tables</a></li>
                          <li><a href="tables-datatable.html">Data Tables</a></li>
                          <li><a href="tables-footable.html">Foo Tables</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="charts.html">
                          <i className="gsp-psi-bar-chart"></i>
                          <span className="menu-title">Charts</span>
                        </a>
                      </li>

                      <li className="list-divider"></li>

                      {/*Category name*/}
                      <li className="list-header">More</li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-repair"></i>
                          <span className="menu-title">Miscellaneous</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="misc-timeline.html">Timeline</a></li>
                          <li><a href="misc-calendar.html">Calendar</a></li>
                          <li><a href="misc-maps.html">Google Maps</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-mail"></i>
                          <span className="menu-title">Email</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="mailbox.html">Inbox</a></li>
                          <li><a href="mailbox-message.html">View Message</a></li>
                          <li><a href="mailbox-compose.html">Compose Message</a></li>
                          <li><a href="mailbox-templates.html">Email Templates<span className="label label-info pull-right">New</span></a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-file-html"></i>
                          <span className="menu-title">Pages</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="pages-blank.html">Blank Page</a></li>
                          <li><a href="pages-profile.html">Profile</a></li>
                          <li><a href="pages-search-results.html">Search Results</a></li>
                          <li><a href="pages-faq.html">FAQ</a></li>
                          <li className="list-divider"></li>
                          <li><a href="pages-404.html">404 Error</a></li>
                          <li><a href="pages-500.html">500 Error</a></li>
                          <li className="list-divider"></li>
                          <li><a href="pages-login.html">Login</a></li>
                          <li><a href="pages-register.html">Register</a></li>
                          <li><a href="pages-password-reminder.html">Password Reminder</a></li>
                          <li><a href="pages-lock-screen.html">Lock Screen</a></li>

                        </ul>
                      </li>


                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-tactic"></i>
                          <span className="menu-title">Menu Level</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="#">Second Level Item</a></li>
                          <li><a href="#">Second Level Item</a></li>
                          <li><a href="#">Second Level Item</a></li>
                          <li className="list-divider"></li>
                          <li>
                            <a href="#">Third Level<i className="arrow"></i></a>

                            {/*Submenu*/}
                            <ul className="collapse" aria-expanded="false">
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                            </ul>
                          </li>
                          <li>
                            <a href="#">Third Level<i className="arrow"></i></a>

                            {/*Submenu*/}
                            <ul className="collapse" aria-expanded="false">
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                              <li className="list-divider"></li>
                              <li><a href="#">Third Level Item</a></li>
                              <li><a href="#">Third Level Item</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>


                      <li className="list-divider"></li>

                      {/*Category name*/}
                      <li className="list-header">Extras</li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-happy"></i>
                          <span className="menu-title">Icons Pack</span>
                          <i className="arrow"></i>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="icons-ionicons.html">Ion Icons</a></li>
                          <li><a href="icons-themify.html">Themify</a></li>
                          <li><a href="icons-font-awesome.html">Font Awesome</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="#">
                          <i className="gsp-psi-medal-2"></i>
                          <span className="menu-title">
                            PREMIUM ICONS
												<span className="label label-danger pull-right">BEST</span>
                          </span>
                        </a>

                        {/*Submenu*/}
                        <ul className="collapse" aria-expanded="false">
                          <li><a href="premium-line-icons.html">Line Icons Pack</a></li>
                          <li><a href="premium-solid-icons.html">Solid Icons Pack</a></li>

                        </ul>
                      </li>

                      {/*Menu list item*/}
                      <li>
                        <a href="helper-classes.html">
                          <i className="gsp-psi-inbox-full"></i>
                          <span className="menu-title">Helper Classes</span>
                        </a>
                      </li>                                </ul>


                    {/*Widget*/}
                    {/*================================*/}
                    <div className="mainnav-widget">

                      {/* Show the button on collapsed navigation */}
                      <div className="show-small">
                        <a href="#" data-toggle="menu-widget" data-target="#gsp-wg-server">
                          <i className="gsp-pli-monitor-2"></i>
                        </a>
                      </div>

                      {/* Hide the content on collapsed navigation */}
                      <div id="gsp-wg-server" className="hide-small mainnav-widget-content">
                        <ul className="list-group">
                          <li className="list-header pad-no pad-ver">Server Status</li>
                          <li className="mar-btm">
                            <span className="label label-primary pull-right">15%</span>
                            <p>CPU Usage</p>
                            <div className="progress progress-sm">
                              <div className="progress-bar progress-bar-primary">
                                <span className="sr-only">15%</span>
                              </div>
                            </div>
                          </li>
                          <li className="mar-btm">
                            <span className="label label-purple pull-right">75%</span>
                            <p>Bandwidth</p>
                            <div className="progress progress-sm">
                              <div className="progress-bar progress-bar-purple">
                                <span className="sr-only">75%</span>
                              </div>
                            </div>
                          </li>
                          <li className="pad-ver"><a href="#" className="btn btn-success btn-bock">View Details</a></li>
                        </ul>
                      </div>
                    </div>
                    {/*================================*/}
                    {/*End widget*/}

                  </div>
                  <div className="nano-pane"><div className="nano-slider"></div></div></div>
              </div>
              {/*================================*/}
              {/*End menu*/}

            </div>
          </nav>
          {/*===================================================*/}
          {/*END MAIN NAVIGATION*/}

        </div>



        {/* FOOTER */}
        {/*===================================================*/}
        <footer id="footer">

          {/* Visible when footer positions are fixed */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="show-fixed pull-right">
            You have <a href="#" className="text-bold text-main"><span className="label label-danger">3</span> pending action.</a>
          </div>



          {/* Visible when footer positions are static */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          <div className="hide-fixed pull-right pad-rgt">
            14GB of <strong>512GB</strong> Free.
            </div>



          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* Remove the class "show-fixed" and "hide-fixed" to make the content always appears. */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <p className="pad-lft">© 2016 Your Company</p>



        </footer>
        {/*===================================================*/}
        {/* END FOOTER */}


        {/* SCROLL PAGE BUTTON */}
        {/*===================================================*/}
        <button className="scroll-top btn">
          <i className="pci-chevron chevron-up"></i>
        </button>
        {/*===================================================*/}




      </div>


    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  current: PropTypes.array,
  actions: PropTypes.object
};
App.childContextTypes = {
  user: PropTypes.object,
  login: PropTypes.func,
  loading: PropTypes.bool
};

function mapStateToProps(state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    user: state.user,
    current: []
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(userActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
