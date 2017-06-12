import React, { Component } from 'react';
import { Link } from 'react-router';

class Postslide extends Component {
  render() {
    return (
        <div>
            <div className="post-item clearfix post-item-r post-met">
                <div className="post-img">
                    <img src="images/post0.jpg" alt="" />
                    <span className="place-link" href="#"><i>Emily Rose</i></span>
                </div>
                <div className="post-info">
                    <div className="post-bg"><img src="images/marker.png" alt="" />
                    </div>
                    <div className="title-h2">Where We Met </div>
                    <div className="post-txt">“David bumped into me at the airport cafe. He was on his way to catch his flight but he said that the image of me wouldn't go away. David turned at his gate and walked back to the cafe to ask me for my number. He always says that choosing to miss his flight to talk to me was the best decision he made in his life.”
                    </div>
                    <Link to="/lovemap" className="txt-link">
                        <span>
                            <h3>Create your own love story</h3>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="post-item clearfix post-item-l post-married">
                <div className="post-img">
                    <img src="images/post1.jpg" alt="" />
                    <span className="place-link" href="#">Benjamin Greenwald </span>
                </div>
                <div className="post-info">
                    <div className="post-bg"><img src="images/heart.png" alt="" />
                    </div>
                    <div className="title-h2">Where we married </div>
                    <div className="post-txt">“It started with a flower and me waiting outside where I asked her to go to the military ball. She made me beg but finally gave in. When I returned home from the Army, I asked her to marry me. We got married at my family’s estate in beautiful New York City where we’ve been together for over 40+ years. Through all the good times and bad, we are still madly in love with each other.” </div>
                    <Link to="/lovemap" className="txt-link">
                        <span>
                            <h3>Create your own love story</h3>
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Postslide;
