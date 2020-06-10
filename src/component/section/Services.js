import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import web_development from '../../assets/img/services/web_development.png';
import graphics from '../../assets/img/services/80.png';
import mobile_app from '../../assets/img/services/mobile-app-icon-80.png';
import testing from '../../assets/img/services/testingpng-80.png';
import digital_marketing from '../../assets/img/services/digitalmarketing-80.png';
import data_security from '../../assets/img/services/data_secutiry-80.png';


class Services extends Component{
    render(){
        return(
            <div id="services">
                <div id="services" className="services-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline services-head text-center">
                                    <h2>Our <span className="text-info">Services</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={web_development} alt={web_development}/>
                                            </a>
                                            <h4>Web Application</h4>
                                            <p>Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles.<Link to="/web_application" className="text-info">Read More</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={mobile_app} alt='mobile_application'/>
                                            </a>
                                            <h4>Mobile Application</h4>
                                            <p>Mobile as well as web-based applications are awesome tools for marketing your content to a populace, which is increasingly.<a className="text-info" href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={testing} alt={testing}/>
                                            </a>
                                            <h4>QA & Testing</h4>
                                            <p>Testing refers as the process of evaluating a system or its component’s with the intent to find whether it satisfies the specified requirements.<a className="text-info" href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={graphics} alt={graphics}/>
                                            </a>
                                            <h4>Graphics Solution</h4>
                                            <p>Almost every business today creates a video or info-graphics as part of their content marketing program. In a business context, you can.<a className="text-info" href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={digital_marketing} alt={digital_marketing} />
                                            </a>
                                            <h4>Seo & Digital Marketing</h4>
                                            <p>Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels.<a className="text-info" href="#">Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={data_security} alt={data_security}/>
                                            </a>
                                            <h4>Online Data Security</h4>
                                            <p>Secure Socket Layer (SSL) certification and validation are a necessary piece of web security for any business that collects information from .<a className="text-info" href="#">Read More</a></p>
                                        </div>
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

export default Services;