import React, {Component, PropTypes} from 'react';
import { Breadcrumb ,Icon} from 'antd';

class Breadcrumbs extends Component {
  render() {
    if(this.props.current.length==0){return <div/>;}
    return (
        <Breadcrumb separator=">">
              <Breadcrumb.Item><Icon type="home" /></Breadcrumb.Item>

              {this.props.current.map(c=>{
                return <Breadcrumb.Item>{c}</Breadcrumb.Item>;
              })}
            </Breadcrumb>
    );
  }
}


Breadcrumbs.propTypes = {
current:PropTypes.array
};

export default Breadcrumbs;
