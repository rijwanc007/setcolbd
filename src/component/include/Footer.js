import React,{Component} from 'react';
import setcol from '../../assets/img/icon/setcolbd_two.png';
import arrow from '../../assets/img/icon/arrow.png';
import bkash from '../../assets/img/payment_gateway/bkash.jpg';
import city_bank from '../../assets/img/payment_gateway/city-bank.jpg';
import dbbl from '../../assets/img/payment_gateway/DBBL.jpg';
import nagad from '../../assets/img/payment_gateway/nagad2.jpg';
import payoneer from '../../assets/img/payment_gateway/payoneer.jpg';
import paypal from '../../assets/img/payment_gateway/paypal.jpg';
import prime_bank from '../../assets/img/payment_gateway/prime-bank.jpg';
import rocket from '../../assets/img/payment_gateway/rocket.jpg';
import {Link} from "react-router-dom";

class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
                    <div className="footer-area">
                        <div className="container">
                            <div className={'row'}>
                                <div className="col-md-2 col-sm-2 col-xs-12">
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/web_application" className={'drop_down_item_color'}>Web Application</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/mobile_application" className={'drop_down_item_color'}>Mobile Application</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/qa_&_testing" className={'drop_down_item_color'}>QA & Testing</Link></div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/graphics_solution" className={'drop_down_item_color'}>Graphics Solution</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/seo_&_digital_marketing" className={'drop_down_item_color'}>Seo & Digital Marketing</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/online_data_security" className={'drop_down_item_color'}>Online Data Security</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-12">
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/erp" className={'drop_down_item_color'}>ERP</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/accounts" className={'drop_down_item_color'}>Accounts</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/inventory" className={'drop_down_item_color'}>Inventory</Link></div>
                                </div>
                                <div className="col-md-2 col-sm-2 col-xs-12">
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/sales_&_distribution" className={'drop_down_item_color'}>Sales & Distribution</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/crm" className={'drop_down_item_color'}>CRM</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/hr_&_payroll" className={'drop_down_item_color'}>HR & Payroll</Link></div>
                                </div>
                                <div className="col-md-3 col-sm-3 col-xs-12">
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/e_commerce" className={'drop_down_item_color'}>E-Commerce</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/booking_&_reservation" className={'drop_down_item_color'}>Booking & Reservation</Link></div>
                                    <div><img src={arrow}  className={'footer_link'} alt={arrow}/><Link to="/virtual_class_room" className={'drop_down_item_color'}>Virtual Classroom</Link></div>
                                </div>
                            </div>
                            <br/>
                            <hr/>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <div className="footer-logo text-center"><img src={setcol} alt="setcol"/></div>
                                            <p>
                                                This technology has helped companies to not only reduce overhead but increase productivity as well. Another plus for companies are virtualizations which not only allow them to eliminate several server farms but has made IT infrastructure more economical and flexible while slashing operating costs.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>information</h4>
                                            <p>
                                                We are committed to complete and deliver all projects on time .
                                            </p>
                                            <div className="footer-contacts">
                                                <p><span>Tel:</span> +88-01401157050</p>
                                                <p><span>Email:</span> info@setcolbd.com</p>
                                                <p><span>Working Hours:</span> 9am-6pm</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12 text-center">
                                    <div className="footer-content">
                                        <div className="footer-head">
                                            <h4>We Accept</h4>
                                            <div className="flicker-img">
                                                <a href="#"><img src={paypal} alt="paypal"/></a>
                                                <a href="#"><img src={prime_bank} alt="prime_bank"/></a>
                                                <a href="#"><img src={dbbl} alt="dbbl"/></a>
                                                <a href="#"><img src={city_bank} alt="city_bank"/></a>
                                                <a href="#"><img src={nagad} alt="nagad"/></a>
                                                <a href="#"><img src={rocket} alt="rocket"/></a>
                                                <a href="#"><img src={bkash} alt="bkash"/></a>
                                                <a href="#"><img src={payoneer} alt="payoneer"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}


export default Footer;