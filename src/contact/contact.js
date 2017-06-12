import React, { Component } from 'react';
import Header from '../header/header';

class Contact extends Component {
  render() {
    return (
      <div className="page-wrap contacts-wrap">
        <Header />
        <div className="container">
          <div className="contacts-title"><div className="contacts-title-position"><span style={{fontWeight:'bolder'}}>Hello. </span> How may we <br />help you? </div></div>
          <div className="contacts-block-b row">
              <div className="col-sm-4 col-sm-offset-1 contacts-l">
                  <p className="contacts-b-title">Customer Support </p>
                  <p className="contacts-b-subtitle">Have any questions? </p>
                  <p><a href="mailto:hello@thehappymaps.com">hello@thehappymaps.com </a></p>
              </div>
              <div className="col-sm-4 col-sm-offset-1 contacts-r">
                  <p className="contacts-b-title">Media Inquires </p>
                  <p className="contacts-b-subtitle">Communications </p>
                  <p><a href="mailto:enrick@thehappymaps.com">enrick@thehappymaps.com </a></p>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
