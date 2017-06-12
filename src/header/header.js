import React, { Component } from 'react';
import { Link } from 'react-router';
// import $ from "jquery";

class Header extends Component {
//   showmenu(){
//       $("body").toggleClass("menu-open");
//   }
  render() {
    return (
        <div className="header-wrap">
            <div className="container">
                <a href="#" className="mobile-link-menu">
                    <span className="menu-link-line">
                        <span className="menu-link-line-center"></span>
                        <span className="menu-link-line-top"></span>
                        <span className="menu-link-line-bottom"></span>
                    </span>
                </a>
                <a className="main-logo" href="/">
                    <img src="images/logo@2x.png" alt="" />
                    <img className="dark-logo" src="images/footer-logo@2x.png" alt="" />
                </a>
                <div className="menu-wrap">
                <ul className="menu">
                    <li><Link to="/lovemap" className="createMap">Create your love map</Link></li>
                    <li><Link to='/story' className="createMap">Our Story</Link></li>
                    <li><Link to='/contact' className="createMap">Contact</Link></li>
                </ul>
                </div>
            </div>
        </div>
    );
  }
}

export default Header;
