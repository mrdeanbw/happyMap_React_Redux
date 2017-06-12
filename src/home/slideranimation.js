import React, { Component } from 'react';

class SliderAnimation extends Component {
  render() {
    return (
      <div id="myCarousel" className="about-wrap clearfix carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
            <div className="item active">
                <div className="about-block">
                    <div className="about-img"><img src="images/about0.png" alt="" />
                    </div>
                    <div className="about-title"><span>Bring Your Memories to Life</span>
                    </div>
                    <div className="about-txt">Simply choose the location your favorite place, your kiss or wedding day</div>
                </div>
            </div>
            <div className="item">
                <div className="about-block">   
                    <div className="about-img"><img src="images/about1.png" alt="" />
                    </div>
                    <div className="about-title"><span>Personalise Your Love Map </span>
                    </div>
                    <div className="about-txt">Choose your color scheme add your content. </div>
                </div>
            </div>
            <div className="item">
                <div className="about-block">
                    <div className="about-img"><img src="images/about2.png" alt="" />
                    </div>
                    <div className="about-title"><span>Delivered With Love </span>
                    </div>
                    <div className="about-txt">We send the maps in stylish tubes, making your poster arrive to door, free of charge. </div>
                </div>
            </div>
         </div>
         {/*<a className="left carousel-control" href="#myCarousel" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left"></span>
            <span className="sr-only">Previous</span>
         </a>*/}
         {/*<a className="right carousel-control" href="#myCarousel" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right"></span>
            <span className="sr-only">Next</span>
         </a>*/}
       </div>
    );
  }
}

export default SliderAnimation;
