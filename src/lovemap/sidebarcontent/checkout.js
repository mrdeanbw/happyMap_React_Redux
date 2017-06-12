import React, { Component } from 'react';
import $ from "jquery";
// import Stepnavigation from './stepnavigation';
// import './lovemap.css';


class Checkout extends Component { 
    checkBoxAction = () => {  
        $(".input-none").toggleClass("dropdowninput");
    }
    checkwrapAction = () => {  
        $(".input-none1").toggleClass("dropdowninput");
    }
    render() {
        return (
            <div className="toolbar-content">
                {/*<Stepnavigation />*/}
                <div id="tab-checkout" className="toolbar-container">
                    <div className="checkout-content">
                        <div className="checkout-content-title-mobile">Checkout </div>
                        <div className="checkout-form">
                            <form id="payment-form" action="/checkout/new" method="post">
                                <input type="hidden" name="_csrf-frontend" />
                                <div className="checkout-form-step1">
                                    <div className="checkout-form-head">
                                        <div className="subtitle">Customer Information </div>
                                    </div>
                                    <div className="input-row">
                                        {/*<label for="order-email">Where should we send receipt and tracking number? </label>*/}
                                        <label>Where should we send receipt and tracking number? </label>
                                        <div className="form-group field-order-email required">
                                            {/*<label className="control-label" for="order-email"></label>*/}
                                            <label className="control-label"></label>
                                            <input type="email" id="order-email" className="form-control" name="Order[email]" placeholder="Email" aria-required="true" />
                                            <div className="help-block"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="checkout-form-step2">
                                    <div className="checkout-form-head">
                                        <div className="subtitle">Shipping Address </div>
                                        <a onClick={this.checkBoxAction}><div className="check-wrap" >
                                            <div className="form-group field-order-is_gift required" >
                                                <input type="hidden" name="Order[is_gift]" value="0" />
                                                <input type="checkbox" id="order-is_gift" name="Order[is_gift]" value="1" />
                                                <label className="control-label"><span></span>This is a gift <small>(Add a cute note) </small>
                                                {/*<label className="control-label" for="order-is_gift"><span></span>This is a gift <small>(Add a cute note) </small>*/}
                                                </label>
                                                <div className="help-block"></div>
                                            </div>
                                        </div>
                                        </a>
                                    </div>
                                    <div className="input-row input-none" id="giftInfo" style={{width: '100%'}}>
                                        <label>Personalize your gift with free message! </label>
                                        <div className="form-group field-order-gift_subject">
                                            <label className="control-label">Subject box </label>
                                            <input type="text" id="order-gift_subject" className="form-control" name="Order[gift_subject]" placeholder="Subject" />
                                            <div className="help-block"></div>
                                        </div>
                                        <div className="form-group field-order-gift_message">
                                            <textarea id="order-gift_message" className="form-control" name="Order[gift_message]" rows="6" placeholder="Message block"></textarea>
                                            <div className="help-block"></div>
                                        </div>
                                    </div>
                                    <div className="input-row">
                                        <label>Where are we sending package?</label>
                                        <div className="form-group field-order-shipping_name required">
                                            <input type="text" id="order-shipping_name" className="form-control" name="Order[shipping_name]" placeholder="Full Name" aria-required="true" />
                                            <div className="help-block"></div>
                                        </div>
                                        <div className="form-group field-order-shipping_address required">
                                            <input type="text" id="order-shipping_address" className="form-control" name="Order[shipping_address]" placeholder="Address Line 1" aria-required="true" />
                                            <div className="help-block"></div>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                <div className="checkout-form-step3">
                                    <div className="checkout-billing-wrap">
                                        <div className="checkout-form-head">
                                            <div className="subtitle">Billing </div>
                                            <div className="lock" title="Secured with 256bit SHA encryption"></div>
                                        </div>
                                        <div className="pay-method">
                                            <div className="payment-error"></div>
                                            <div className="pay-card">
                                                <div className="pay-row">
                                                    <label>Card number: </label>
                                                    <input id="cardNumber" type="text" placeholder="0000  0000  0000  0000" size="20" data-stripe="number" />
                                                </div>
                                                <div className="pay-row clearfix">
                                                    <div className="pay-row-short">
                                                        <label>Cardholder name </label>
                                                        <input type="text" placeholder="Name" data-stripe="name" />
                                                    </div>
                                                    <div className="pay-row-short pay-row-expire">
                                                        <label>Expiry </label>
                                                        <input id="cardExpMonth" type="text" className="expire-day" placeholder="MM" size="2" data-stripe="exp_month" /> /
                                                        <input id="cardExpYear" type="text" className="expire-month" placeholder="YY" size="2" data-stripe="exp_year" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="pay-card pay-card-back">
                                                <div className="pay-row clearfix">
                                                    <div className="pay-row-short">
                                                        <label>CVC </label>
                                                        <input id="cardCVC" type="text" placeholder="&middot;&middot;&middot;" size="4" data-stripe="cvc" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="check-wrap">
                                            <a onClick={this.checkwrapAction}><div className="form-group field-order-billing_same_as_shipping required">
                                                <input type="hidden" name="Order[billing_same_as_shipping]" value="0" />
                                                <input type="checkbox" id="order-billing_same_as_shipping" name="Order[billing_same_as_shipping]" value="1" />
                                                <label className="control-label"><span></span>Billing address same as shipping</label>
                                                <div className="help-block"></div>                                                
                                            </div></a>
                                            
                                            <div className="input-row input-none1" id="giftInfo" style={{width: '100%'}}>
                                                <div className="form-group field-order-gift_subject">
                                                    <input type="text" id="order-gift_subject" className="form-control" name="Order[gift_subject]" placeholder="Address line 1" />
                                                    <div className="help-block"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="advantages-wrap clearfix">
                                        <div className="advantages-block">
                                            <div className="advantages-img"><img src="../images/check-icon0.png" alt="" />
                                            </div>
                                            <div className="subtitle">Happiness Guarantee </div>
                                            <div className="advantages-txt">If your not 100% with your order for reason, let us know we'll make it right. </div>
                                        </div>
                                        <div className="advantages-block">
                                            <div className="advantages-img"><img src="../images/check-icon1.png" alt="" />
                                            </div>
                                            <div className="subtitle">We got your back </div>
                                            <div className="advantages-txt">Secured with 256bit SHA</div>
                                        </div>
                                        <div className="advantages-block">
                                            <div className="advantages-img"><img src="../images/check-icon2.png" alt="" />
                                            </div>
                                            <div className="subtitle">Fast Shipping </div>
                                            <div className="advantages-txt">We print the maps two days and delivery takes within 3-5 working depending on your location.</div>
                                        </div>
                                    </div>
                                    <div className="btn-wrap">
                                        <button className="btn green-btn">COMPLETE ORDER </button>   
                                        {/*<button type="submit" className="btn green-btn" name="checkout" value="1">COMPLETE ORDER </button>                                        */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>                    
            </div>
        )
    }
}

export default Checkout;