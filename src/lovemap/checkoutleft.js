import React, { Component } from 'react';
import Posterposition from './posterposition';


class Lovemap extends Component {
  render() {
    return (
        <div className="checkout-left-block">
            <a href="#" className="toggle-link"><span><img src="../images/toggle.png" alt="" /></span></a>
            <div className="checkout-top-txt">
                <div className="checkout-top-txt-icon"><img src="../images/checkout-icon@2x.png" alt="" />
                </div>
                <div className="subtitle"><i>Order Summary </i></div>               
                <p><b><i>Free prioritised shipping world  </i></b>
                </p>
                <Posterposition />   
            </div>
            <div className="checkout-bg">
                <div className="order-info">
                    <div className="checkout-top-mobile">
                        <div className="checkout-top-txt checkout-top-txt-mobile">
                            <div className="checkout-top-txt-icon"><img src="../images/checkout-icon@2x.png" alt="" />
                            </div>
                            <div className="subtitle">Order Summary </div>
                            <p><b>Free prioritised shipping world</b>
                            </p>
                        </div>
                        <div className="map-block">
                            <Posterposition />   
                        </div>
                        <div className="order-info-txt">
                            <div className="order-name subtitle">Paris, France </div>
                            <div className="order-col"></div>
                            <div className="order-price">
                                <div className="order-row clearfix">
                                    <div className="order-label">Subtotal </div>
                                    <div className="order-cost subtotal"></div>
                                </div>
                                <div className="order-row clearfix">
                                    <div className="order-label">Shipping </div>
                                    <div className="order-cost shipping">$ 0 </div>
                                </div>
                                <div className="discount-row clearfix">
                                    <div className="order-label">Discount </div>
                                    <div className="order-cost discount">0% </div>
                                </div>
                                <div className=" order-row clearfix">
                                    <div className="coupon-row">
                                        <input type="text" placeholder="Coupon Code" />
                                        <button className="btn green-btn apply-btn">Apply </button>
                                    </div>
                                    <div className="help-block">Incorrect code </div>
                                </div>
                                <div className="order-row order-row-total clearfix">
                                    <div className="order-label">Total </div>
                                    <div className="order-cost total"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }

}

export default Lovemap;
