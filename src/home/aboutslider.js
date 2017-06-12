import React, { Component } from 'react';

class Aboutslider extends Component {
  render() {
    return (
      <div className="about-wrap clearfix">
          <div className="about-block">
              <div className="about-img"><img src="images/about0.png" alt="" />
              </div>
              <div className="about-title"><span>Bring Your Memories to Life</span>
              </div>
              <div className="about-txt">Simply choose the location of your favorite place, your first kiss or wedding day. </div>
          </div>
          <div className="about-block">
              <div className="about-img"><img src="images/about1.png" alt="" />
              </div>
              <div className="about-title"><span>Personalise Your Love Map </span>
              </div>
              <div className="about-txt">Choose your color scheme add your content. </div>
          </div>
          <div className="about-block">
              <div className="about-img"><img src="images/about2.png" alt="" />
              </div>
              <div className="about-title"><span>Delivered With Love </span>
              </div>
              <div className="about-txt">We send the maps in stylish tubes, making your poster arrive to door, free of charge. </div>
          </div>
       </div>
    );
  }
}

export default Aboutslider;
