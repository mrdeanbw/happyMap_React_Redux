import React, { Component } from 'react';
import { Link } from 'react-router';

class Infoslide extends Component {
  render() {
    return (
        <div className="row">
            <div className="col-sm-10 col-sm-offset-1">
                <div className="info-wrap ">
                    <div className="info-content clearfix">
                        <div className="about-block">
                            <div className="about-img"><img src="images/about3.png" alt="" />
                            </div>
                            <div className="about-title"><span>Delivered with love </span>
                            </div>
                            <div className="about-txt">We send the map in stylish tubes, making your poster arrive to door. </div>
                        </div>

                        <div className="about-block">
                            <div className="about-img"><img src="images/about4.png" alt="" />
                            </div>
                            <div className="about-title"><span>We Got Your Back </span>
                            </div>
                            <div className="about-txt">If your not 100% with your order for reason, let us know we’ll make it right. </div>
                        </div>
                    </div>
                    <div className="btn-wrap">
                        <Link to="/lovemap" className="btn red-btn">                        
                            <span className="btn-bg"></span>
                            <span className="btn-txt">
                                Create love map
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Infoslide;
