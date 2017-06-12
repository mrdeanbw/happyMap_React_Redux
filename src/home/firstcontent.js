import React, { Component } from 'react';
import { Link } from 'react-router';

class Firstcontent extends Component {
  render() {
    return (
        <div className="first-content">
            <div className="container">
                <div className="slide-content">
                    <h1 className="title-h1"><b>Create a beautiful map print of your love story.</b></h1>
                    <div className="main-subtitle">Personalised map art print of your special day, the first place you fell in love or simply pieces of personalised art for your own home. </div>
                    {/*<a className="btn red-btn" href="editor/index.html">*/}
                    {/*<a className="btn red-btn" href="#">*/}
                    <Link to="/lovemap" className="btn red-btn">
                        <span className="btn-bg"></span>
                        <span className="btn-txt">
                            <h2>Create your love map </h2>
                        </span>
                    </Link>
                    {/*</a>*/}
                </div>
            </div>
        </div>
    );
  }
}

export default Firstcontent;
