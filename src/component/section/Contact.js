import React,{Component} from 'react';
import Iframe from 'react-iframe'
import axios from 'axios'
import Swal from 'sweetalert2';
import address from '../../assets/img/icon/location-80.png';
import email from '../../assets/img/icon/email-80.png';
import phone from '../../assets/img/icon/phone-80.png';
import  {API_BASE_URL}  from '../include/config'

class Contact extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        };
        this.getName = this.getName.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getSubject = this.getSubject.bind(this);
        this.getMessage = this.getMessage.bind(this);
    }
    getName = (e) => {
        this.setState({
            name: e.target.value
        })
    };
    getEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };
    getSubject = (e) => {
        this.setState({
            subject: e.target.value
        })
    };
    getMessage = (e) => {
        this.setState({
            message: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        const contact = {
            name: this.state.name,
            email: this.state.email,
            subject: this.state.subject,
            message: this.state.message
        };
        axios.post(API_BASE_URL + '/contact/', contact)
            .then(res => {
                this.setState({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
                Swal.fire(
                    'Contact!',
                    res.data,
                    'success'
                )
            })
            .catch(function(error) {
                if (error.response) {
                    Swal.fire(
                        'Cancel!',
                        'Opps Something Went Wrong Please Try Again Later',
                        'error'
                    )
                }
            });
    };
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
                                    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.439060616321!2d90.40943111545187!3d23.7317175954056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9aaa7fb50d1%3A0x7a3104cb73a7058c!2sSkies%20Engineering%20%26%20Technologies%20Company!5e0!3m2!1sen!2sbd!4v1588177429236!5m2!1sen!2sbd"
                                            height="435"
                                            width="100%"
                                            className={'border'}/>
                                </div>
                                <div className="col-md-6 col-sm-6 col-xs-12">
                                    <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="name">Name : </label>
                                        <input type="text" className="form-control" value={this.state.name} onChange={this.getName} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="email">Email : </label>
                                        <input type="email" className="form-control" value={this.state.email} onChange={this.getEmail} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject : </label>
                                        <input type="text" className="form-control" value={this.state.subject} onChange={this.getSubject} required/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="message">Message : </label>
                                        <textarea className="form-control" id="message" rows="3" style={{resize:"none"}} value={this.state.message} onChange={this.getMessage} required>&nbsp;</textarea>
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