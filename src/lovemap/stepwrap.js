import React, { Component } from 'react';
// import { Link } from 'react-router';
import './lovemap.css';

class Stepwrap extends Component {
  render() {
    return (
       <div className="step-wrap">
        <div className="step-item location-item active1">
            <div className="step-number">1 <span className="done-bg"></span>
            </div>
            <div className="step-txt">Location </div>
        </div>
        <div className="step-item customize-item">
            <div className="step-number">2 <span className="done-bg"></span>
            </div>
            <div className="step-txt">Customize </div>
        </div>
        <div className="step-item layout-item">
            <div className="step-number">3 <span className="done-bg"></span>
            </div>
            <div className="step-txt">Layout </div>
        </div>
        <div className="step-item checkout-item">
            <div className="step-number">4 <span className="done-bg"></span>
            </div>
            <div className="step-txt">Checkout </div>
        </div>
      </div>
    );
  }
}

export default Stepwrap;
