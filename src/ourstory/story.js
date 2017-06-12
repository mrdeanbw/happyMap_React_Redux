import React, { Component } from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

class Story extends Component {
  render() {
    return (
      <div className="page-wrap">
        <div className="first-slide first-slide-privacy about-main">          
          <Header />   
          <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="about-main-title">Happy Maps </div>
                        <div className="about-main-txt">
                            was built to capture life or remind of places the most celebrations of lives happened.
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="blockquote-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 col-sm-offset-2">
                        <div className="blockquote-txt">
                            all know about that or special occasions, it also be a headache. know what I'm talking. Gift shopping. Happy Maps built to make it for anyone to create gifts that celebrates any occasion. Whether it's a where you first fell love, your wedding day, a certain place in world that inspires you.
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="static-about-wrap">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="static-about-block">
                            <div className="static-about-title title-h2">Our Story </div>
                            <div className="static-about-txt">
                                We a problem finding gifts our girlfriends that was and special that they remember day in and. We ended up creating personal map of the place we met our. Our family members and saw the map posters the wall and asked we could make it them too. This was of the idea for Maps. We’re committed to concept of spreading love good feelings through meaningful artistic gifts and home.
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="static-about-img">
                            <img src="../images/about.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </div>
         </div>

         <Footer />
      </div>
    );
  }
}

export default Story;
