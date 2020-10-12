import React,{Component} from 'react';
import erp from '../../assets/img/products/erp.png';
import accounts from '../../assets/img/products/accounting.png';
import inventory from '../../assets/img/products/inventory.png';
import sales_distribution from '../../assets/img/products/sales_distribution.png';
import crm from '../../assets/img/products/crm.png';
import hr from '../../assets/img/products/hr.png';
import ecommerce from '../../assets/img/products/ecommerce.png';
import ticket from '../../assets/img/products/ticket..png';
import virtual_class from '../../assets/img/products/virtual_class_room.png';
import {Link} from "react-router-dom";


class Product extends Component{
    render(){
        return(
            <div id="product">
                <div className="services-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline services-head text-center">
                                    <h2>Our <span className="text-info">Product</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row text-center">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/erp">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                               <img src={erp} alt={erp}/>
                                            </a>
                                            <h4>ERP</h4>
                                            <p>Enterprise resource planning (ERP) is the integrated management of business processes,which is mediated by software and technology.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/accounts">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                                <img src={accounts} alt={accounts}/>
                                            </a>
                                            <h4>Accounts</h4>
                                            <p>Accounting management system can describe as a software that records & processes accounting transactions within functional.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/inventory">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                               <img src={inventory} alt={inventory}/>
                                            </a>
                                            <h4>Inventory</h4>
                                            <p>Inventory management system is most essential part for not only medium to large enterprise business but also for growing up small businesses.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/sales_&_distribution">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                               <img src={sales_distribution} alt={sales_distribution}/>
                                            </a>
                                            <h4>Sales & Distribution</h4>
                                            <p>Sales & Distribution management system comes with its necessary features that helps you keep tracking of sales information, inventory information.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/crm">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                                <img src={crm} alt={crm}/>
                                            </a>
                                            <h4>CRM</h4>
                                            <p>Customer Relationship Management (CRM) system helps manage customer data. It supports sales management, delivers actionable insights.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/hr_&_payroll">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                                <img src={hr} alt={hr}/>
                                            </a>
                                            <h4>HR & Payroll</h4>
                                            <p>HR & PAYROLL Management Systems ensure the human capital of an organization and focus on implementing policies and processes.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/e_commerce">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                                <img src={ecommerce} alt={ecommerce}/>
                                            </a>
                                            <h4>E-Commerce</h4>
                                            <p>E-commerce describes the process of buying, selling, transferring or exchanging products, services and/or information via computer software.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/booking_&_reservation">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                                <img src={ticket} alt={ticket}/>
                                            </a>
                                            <h4>Booking & Reservation</h4>
                                            <p>Tour & Booking Management system is a web based system that manages the functioning of scheduling. It helps to reserve your schedule.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <Link to="/virtual_class_room">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href={null}>
                                               <img src={virtual_class} alt={virtual_class}/>
                                            </a>
                                            <h4>Virtual Classroom</h4>
                                            <p>Virtual Classroom is equipped with electronic devices that have supporting software to improve and facilitate teaching methods. However.<span className="text-info">Read More</span></p>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Product;