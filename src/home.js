import React, { Component } from 'react';
import Header from './header/header';
import Firstcontent from './home/firstcontent';
import Aboutslider from './home/aboutslider';
import SliderAnimation from './home/slideranimation';
import Phototype from './home/phototype';
import Paperslice from './home/paperslice';
import Postslide from './home/postslide';
import Infoslide from './home/infoslide';
import Footer from './footer/footer';

class Home extends Component {
  render() {
    return (
      <div className="page-wrap">
        <div className="first-slide">
          <Header />   
          <Firstcontent />           
        </div>
        <div className="about-slide desktop-slide">
          <div className="container">
            <Aboutslider />
          </div>
        </div>
        <div className="about-slide mobile-slide">
          <div className="container">
            <SliderAnimation />
          </div>
        </div>
        <div className="photo-wrap">
          <div className="container">
            <Phototype />
          </div>
        </div>
        <div className="paper-slide">
          <div className="container">
            <Paperslice />
          </div>
        </div>
        <div className="post-slide">
          <div className="container">
            <Postslide />
          </div>
        </div>
        <div className="info-slide">
          <div className="container">
            <Infoslide />
          </div>
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Home;
