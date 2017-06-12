import React, { Component } from 'react';
// import './lovemap.css';


class Stepnavigation extends Component { 
  render() {
    return (
        <div className="step-navigation clearfix">
            <a className="back-link" href="#">Back </a>
            <a className="step-navigation-next" href="#">Customise </a>
        </div>

    )
  }
}

export default Stepnavigation;