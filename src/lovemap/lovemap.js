import React, { Component } from 'react';
// import {Tabs,Tab} from 'react-bootstrap';
import $ from "jquery";
import { Link } from 'react-router';
import Header from '../header/header';
import Posterposition from './posterposition';
import Stepwrap from './stepwrap';
import Mapfooter from './sidebarcontent/mapfooter';
import CheckoutLeft from './checkoutleft';
import './lovemap.css';

class Lovemap extends Component {
  componentDidMount() {      
      this.addLocation();
  }

//     componentWillMount() {
//       console.log('Component WILL MOUNT!')
//    }
  
  checkOutEvent = () => {        
      $(".column-right").addClass("column-width");
      $(".nav-toolbar").addClass("nav-toolbar-class");
  }

  checkOutRemove  = () => {        
      $(".column-right").removeClass("column-width");
      $(".nav-toolbar").removeClass("nav-toolbar-class");
  }

  addLocation = () => {
      $(".nav-location").addClass("active"); 
      $(".nav-customize").removeClass("active");
      $(".nav-layout").removeClass("active");  
      $(".nav-checkout").removeClass("active");

      $(".location-item").addClass("active1");
      $(".layout-item").removeClass("active1"); 
      $(".customize-item").removeClass("active1");  

      $(".social-block").removeClass("customize-active"); 
    //   $(".social-block").removeClass("layout-active");   
      $(".social-block").css("display", "inherit"); 
      $(".poster-position").removeClass("map-display");  
      $(".step-wrap").removeClass("stepicondisplay"); 
      $(".poster-position-content").removeClass("poster-position-display"); 
      $(".checkout-left-block").css("display", "none");  
      
      this.checkOutRemove();
  }
  addCustomize = () => {
      $(".nav-customize").addClass("active");    
      $(".nav-location").removeClass("active");
      $(".nav-layout").removeClass("active");  
      $(".nav-checkout").removeClass("active");

      $(".customize-item").addClass("active1");   
      $(".layout-item").removeClass("active1");   

      $(".social-block").addClass("customize-active"); 
      $(".social-block").removeClass("layout-active");    
      $(".social-block").css("display", "inherit");  
      $(".poster-position").removeClass("map-display");  
      $(".step-wrap").removeClass("stepicondisplay"); 
      $(".poster-position-content").removeClass("poster-position-display"); 
      $(".checkout-left-block").css("display", "none");  
      this.checkOutRemove();  
  }

  addLayout = () => {
      $(".nav-layout").addClass("active");  
      $(".nav-location").removeClass("active");
      $(".nav-customize").removeClass("active");
      $(".nav-checkout").removeClass("active");

      $(".layout-item").addClass("active1"); 
      $(".customize-item").addClass("active1"); 

      $(".social-block").addClass("layout-active");  
      $(".social-block").css("display", "inherit");
      $(".poster-position").removeClass("map-display");  
      $(".step-wrap").removeClass("stepicondisplay"); 
      $(".poster-position-content").removeClass("poster-position-display"); 
      $(".checkout-left-block").css("display", "none");  

      this.checkOutRemove();  
  }
  
  addCheckout = () => {
      this.checkOutEvent();
      $(".nav-checkout").addClass("active");  
      $(".nav-location").removeClass("active");
      $(".nav-customize").removeClass("active");
      $(".nav-layout").removeClass("active");
      
    //   $(".social-block").addClass("socialIcon");  
      $(".social-block").css("display", "none");      
      $(".poster-position").addClass("map-display");  
      $(".step-wrap").addClass("stepicondisplay");  
      $(".poster-position-content").addClass("poster-position-display"); 
      $(".checkout-left-block").css("display", "block");  
  }
  

  render() {
    return (
       <div className="editor-index location-tab">
        <div className="page-wrap"> 
          <div className="header-wrap">
            <Header />
          </div>
          <div className="content-wrap poster-position-content">
            <div className="content-container" style={{height: '930px'}}>
              <Posterposition />                                                     
              <Stepwrap />              
            </div>
          </div>
          <div className="content-wrap">
            <div className="content-container left-content-container" style={{height: '930px'}}>                                      
              <CheckoutLeft />                              
            </div>
          </div>
          <div className="column-right location-active">
            <div className="nav-toolbar clearfix">                
                <Link to="/lovemap/location" className="nav-toolbar-link nav-location" onClick={()=>this.addLocation()}>
                    <span className="nav-toolbar-icon">
                      <span className="nav-toolbar-icon-static"><img src="../images/location@2x.png" alt="" /></span>
                      <span className="nav-toolbar-icon-hover"><img src="../images/location-white@2x.png" alt="" /></span>                    
                    </span>
                    <span className="nav-toolbar-txt">Location </span>
                </Link>
                <Link to="/lovemap/customise" className="nav-toolbar-link nav-customize" onClick={()=>this.addCustomize()}>
                    <span className="nav-toolbar-icon">
                    <span className="nav-toolbar-icon-static"><img src="../images/customize@2x.png" alt="" /></span>
                    <span className="nav-toolbar-icon-hover"><img src="../images/customize-white@2x.png" alt="" /></span>                    </span>
                    <span className="nav-toolbar-txt">Customise </span>
                </Link>
                <Link to="/lovemap/layout" className="nav-toolbar-link nav-layout" onClick={()=>this.addLayout()}>
                    <span className="nav-toolbar-icon">
                     <span className="nav-toolbar-icon-static"><img src="../images/layout@2x.png" alt="" /></span>
                    <span className="nav-toolbar-icon-hover"><img src="../images/layout-white@2x.png" alt="" /></span>
                    </span>
                    <span className="nav-toolbar-txt">Layout </span>
                </Link>
                <Link to="/lovemap/checkout" className="nav-toolbar-link nav-checkout" onClick={()=>this.addCheckout()}>
                    <span className="nav-toolbar-icon">
                     <span className="nav-toolbar-icon-static"><img src="../images/checkout@2x.png" alt="" /></span>
                    <span className="nav-toolbar-icon-hover"><img src="../images/checkout-white@2x.png" alt="" /></span>
                    </span>
                    <span className="nav-toolbar-txt">Checkout </span>
                </Link>
            </div>
            {this.props.children}
            <Mapfooter />
          </div>
        </div>
       </div>
    );
  }
}

export default Lovemap;
