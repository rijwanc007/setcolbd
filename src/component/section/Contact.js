import React,{Component} from 'react';
import address from '../../assets/img/icon/location-80.png';
import email from '../../assets/img/icon/email-80.png';
import phone from '../../assets/img/icon/phone-80.png';

class Contact extends Component{
    render(){
        return(
            <div id="contact">
                <div className="contact-area">
                    <div className="contact-inner area-padding">
                        <div className="contact-overly"></div>
                        <div className="container ">
                            <div className="row">
                                <div className="col-md-12 col-sm-12 col-xs-12">
                                    <div className="section-headline text-center">
                                        <h2>Contact <span className="text-info">us</span></h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <img src={phone} alt = "phone"/>
                                            <p>
                                                Call : +88-0255112226, +88-01401157050<br/>
                                                <span>Saturday - Thursday (9am-6pm)</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <img src={email} alt = "email"/>
                                            <p>
                                                Email : info@setcolbd.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4 col-xs-12">
                                    <div className="contact-icon text-center">
                                        <div className="single-icon">
                                            <img src={address} alt = "address"/>
                                            <p>
                                                Location : 31/1 Purana Paltan, Sharif Complex(10th floor)<br/>
                                                <span>Dhaka-1000,Bangladesh</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.439060616321!2d90.40943111545187!3d23.7317175954056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9aaa7fb50d1%3A0x7a3104cb73a7058c!2sSkies%20Engineering%20%26%20Technologies%20Company!5e0!3m2!1sen!2sbd!4v1588177429236!5m2!1sen!2sbd"  style={{border:"none"}}  height="435" width="100%" title="google location"></iframe>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <form>
                                    <div className="form-group">
                                        <label htmlFor="name">Name : </label>
                                        <input type="text" className="form-control" id="name"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email : </label>
                                        <input type="email" className="form-control" id="email"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject : </label>
                                        <input type="text" className="form-control" id="subject"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message : </label>
                                        <textarea className="form-control" id="message" rows="3" style={{resize:"none"}}></textarea>
                                    </div>
                                    <input type="submit" className="btn btn-info btn-lg btn-block" value="Send"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Contact;