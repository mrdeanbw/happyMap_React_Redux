import React, { Component } from 'react';
// import './lovemap.css';


class Mapfooter extends Component { 
  render() {
    return (
        <div className="social-block">
            <div className="subtitle"><i>Share design with friends:</i></div>
            <div className="social-link">
                <a href="#" className="facebook">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="twitter">
                    <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="pinterest">
                    <i className="fa fa-pinterest-p"></i>
                </a>
            </div>
        </div>

    )
}
}

export default Mapfooter;