import React, { Component } from 'react';
import { Link } from 'react-router';

class Paperslice extends Component {
  render() {
    return (
        <div>
            <div className="paper-bg"><img src="images/paper-image@2x.jpg" alt="" /></div>
            <div className="paper-block">
                <div className="title-h1">Printed With Love </div>
                <div className="main-subtitle">From the paper and we used to create map prints, we have selected a range of materials to ensure that personalise love maps look wherever you decide to them. </div>
                <div className="paper-items">
                    <div className="paper-item clearfix">
                        <div className="paper-item-img"><img src="images/paper0.png" alt="" />
                        </div>
                        <div className="paper-item-info">
                            <div className="paper-item-title">Type of Paper: </div>
                            <div className="paper-item-main-subtitle"><i>Museum-quality matte paper</i></div>
                        </div>
                    </div>
                    <div className="paper-item clearfix">
                        <div className="paper-item-img"><img src="images/paper1.png" alt="" />
                        </div>
                        <div className="paper-item-info">
                            <div className="paper-item-title">Paper Weight: </div>
                            <div className="paper-item-main-subtitle"><i>192 gsm</i></div>
                        </div>
                    </div>
                    <div className="paper-item clearfix">
                        <div className="paper-item-img"><img src="images/paper2.png" alt="" />
                        </div>
                        <div className="paper-item-info">
                            <div className="paper-item-main-subtitle"><i>Printed in</i> </div>
                            <div className="paper-item-title">USA </div>
                        </div>
                    </div>
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
    );
  }
}

export default Paperslice;
