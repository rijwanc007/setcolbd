import React,{Component} from 'react';
import booking_banner from "../../assets/img/products/booking_banner.png";
import calender from "../../assets/img/icon/calendar.png";
import channel from "../../assets/img/icon/Channel-management.png";
import different from "../../assets/img/icon/Different-languages-and-currencies.png";
import discount from "../../assets/img/icon/Discounts-and-gift-vouchers.png";
import email_automation from "../../assets/img/icon/Email-automation.png";
import front from "../../assets/img/icon/Front-office-styling-and-images.png";
import invoicing from "../../assets/img/icon/Invoicing.png";
import multiple from "../../assets/img/icon/Multiple-payment-options.png";
import real from "../../assets/img/icon/Real-time-booking.png";
import reports from "../../assets/img/icon/Reports.png";
import web from "../../assets/img/icon/Web-check-in.png";

class BookingAndReservationSection extends Component{
    render() {
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {booking_banner} alt={booking_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'booking_and_reservation_details_design'}>
                                    SETCOL Tour &amp; Booking Management system is a web based system that manages the
                                    functioning of scheduling. It helps to reserve your schedule which you can manage by smart
                                    gadget such as smartphone, tablets, laptop and desktop. This software will help in making the
                                    whole functioning paperless. It integrates all the information into one platform. This system has
                                    built using latest technology for flexible and compatible with tablets, smartphones, laptop and
                                    desktop. It provides exact status at any given point of time. Easy to use for small, medium and
                                    large business. Anyone also can easily communicate through the system.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {calender} alt={calender}/>
                            <span>&nbsp;Calender</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {channel} alt={channel}/>
                            <span>&nbsp;Channel-management</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {different} alt={different}/>
                            <span>&nbsp;Different-languages-and-currencies</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {discount} alt={discount}/>
                            <span>&nbsp;Discounts-and-gift-vouchers</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {email_automation} alt={email_automation}/>
                            <span>&nbsp;Email-automation</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {front} alt={front}/>
                            <span>&nbsp;Front-office-styling-and-images</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {invoicing} alt={invoicing}/>
                            <span>&nbsp;Invoicing</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {multiple} alt={multiple}/>
                            <span>&nbsp;Multiple-payment-options</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {real} alt={real}/>
                            <span>&nbsp;Real-time-booking</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {reports} alt={reports}/>
                            <span>&nbsp;Reports</span>
                        </div>
                        <div className = {'col-md-3 booking_and_reservation_feature_margin'}>
                            <img className={'icon_feature'} src = {web} alt={web}/>
                            <span>&nbsp;Web-check-in</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BookingAndReservationSection;