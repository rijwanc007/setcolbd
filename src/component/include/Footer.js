import React,{Component} from 'react';
import setcol from '../../../public/assets/img/icon/setcolbd_two.png';
import bkash from '../../../public/assets/img/payment_gateway/bkash.jpg';
import city_bank from '../../../public/assets/img/payment_gateway/city-bank.jpg';
import dbbl from '../../../public/assets/img/payment_gateway/DBBL.jpg';
import nagad from '../../../public/assets/img/payment_gateway/nagad2.jpg';
import payoneer from '../../../public/assets/img/payment_gateway/payoneer.jpg';
import paypal from '../../../public/assets/img/payment_gateway/paypal.jpg';
import prime_bank from '../../../public/assets/img/payment_gateway/prime-bank.jpg';
import rocket from '../../../public/assets/img/payment_gateway/rocket.jpg';



class Footer extends Component{
    render(){
        return(
            <div>
                <footer>
                    <div className="footer-area">
                        <div className="container">
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
                                            <h4>Payment Gateway</h4>
                                            <div className="flicker-img">
                                                <a href="#"><img src={bkash} alt="bkash"/></a>
                                                <a href="#"><img src={city_bank} alt="city_bank"/></a>
                                                <a href="#"><img src={dbbl} alt="dbbl"/></a>
                                                <a href="#"><img src={nagad} alt="nagad"/></a>
                                                <a href="#"><img src={payoneer} alt="payoneer"/></a>
                                                <a href="#"><img src={paypal} alt="paypal"/></a>
                                                <a href="#"><img src={prime_bank} alt="prime_bank"/></a>
                                                <a href="#"><img src={rocket} alt="rocket"/></a>
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