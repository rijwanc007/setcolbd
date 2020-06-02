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
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                               <img src={erp} alt={erp}/>
                                            </a>
                                            <h4>ERP</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={accounts} alt={accounts}/>
                                            </a>
                                            <h4>Accounts</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                               <img src={inventory} alt={inventory}/>
                                            </a>
                                            <h4>Inventory</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                               <img src={sales_distribution} alt={sales_distribution}/>
                                            </a>
                                            <h4>Sales & Distribution</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={crm} alt={crm}/>
                                            </a>
                                            <h4>CRM</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={hr} alt={hr}/>
                                            </a>
                                            <h4>HR & Payroll</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={ecommerce} alt={ecommerce}/>
                                            </a>
                                            <h4>E-commerce</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                                <img src={ticket} alt={ticket}/>
                                            </a>
                                            <h4>Booking & Reservation</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className=" about-move">
                                    <div className="services-details">
                                        <div className="single-services">
                                            <a className="services-icon" href="#">
                                               <img src={virtual_class} alt={virtual_class}/>
                                            </a>
                                            <h4>Virtual Classroom</h4>
                                            <p>
                                                will have to make sure the prototype looks finished by inserting text or
                                                photo.make sure the prototype looks finished by.
                                            </p>
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


export default Product;