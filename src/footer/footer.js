import React, { Component } from 'react';
import { Link } from 'react-router';

class Footer extends Component {
  render() {
    return (
        <div className="footer-slide">
            <div className="container">
                <div className="footer-l">
                    <a className="footer-logo" href="/"><img src="images/footer-logo@2x.png" alt=" " />
                    </a>
                </div>
                <div className="footer-width">
                    <div className="social-block-f">
                        <div className="social-link">
                            <a href="https://www.facebook.com/thehappymaps/" target="_blank">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/happymaps/" target="_blank">
                                <i className="fa fa-instagram"></i>
                            </a>
                            <a href="https://twitter.com/thehappymaps" target="_blank">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a href="https://www.pinterest.com/thehappymaps/" target="_blank">
                                <i className="fa fa-pinterest-p"></i>
                            </a>
                        </div>
                    </div>
                    <div className="footer-l">
                        <ul className="footer-menu">
                            <li><Link to="/lovemap">Create your love map</Link></li>
                            <li><Link to='/story'>Our Story</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                            <li className="footer-menu-mail"><Link to='/home'>hello@thehappymaps.com </Link></li>
                        </ul>
                        <div className="subscribe-block">
                            <div className="subscribe-title">Subscribe our newsletters: </div>
                            <div className="form-block">
                                <form id="subscribe-form" action="site/subscribe" method="post">
                                    <input type="hidden" name="_csrf-frontend" value="SS1Fd2RPSGM4bnYbMix7KjkVFz83H3k0Kkg2Jg8WAjt7WhYZJiEkFg==" />
                                    <div className="form-group field-subscribe-email required">
                                        <label className="control-label"></label>
                                        <input type="email" id="subscribe-email" className="" name="Subscribe[email]" placeholder="Your e-mail" aria-required="true" />
                                        <div className="help-block"></div>
                                    </div>
                                    <button type="submit">Sign up </button>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="footer-thanks">
                        <span>Special thanks to </span>
                        <span>OSM contributors &amp; </span>
                        <img className="footer-thanks-logo" src="images/thanks-logo.svg" alt="" />
                    </div>
                </div>
                <div className="copy-block">
                    <div className="copy-link">
                        <Link to="/service">Terms of Service</Link>
                        <Link to="/police">Privacy Policy</Link>
                    </div>
                    <div className="copy">Created by <a href="#">MARAKAS DESIGN </a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Footer;
