import React, { Component } from 'react';

class Phototype extends Component {
  render() {
    return (
        <div className="row">
            <div className="photo-block col-sm-7 col-xs-12"><img src="images/photo1.jpg" alt="" />
            </div>
            <div className="photo-block col-sm-5 col-xs-12"><img src="images/photo0.jpg" alt="" /><img className="mobile-img" src="images/photo0-mobile.png" alt="" />
            </div>
            <div className="photo-block col-sm-4 col-xs-12"><img src="images/photo2.jpg" alt="" /><img className="mobile-img" src="images/photo1-mobile.jpg" alt="" />
            </div>
            <div className="photo-block col-sm-4 col-xs-12"><img src="images/photo3.jpg" alt="" /><img className="mobile-img" src="images/photo2-mobile.jpg" alt="" />
            </div>
            <div className="photo-block col-sm-4 col-xs-12"><img src="images/photo4.jpg" alt="" /><img className="mobile-img" src="images/photo3-mobile.jpg" alt="" />
            </div>
        </div>
    );
  }
}

export default Phototype;
