import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import BookingAndReservationSection from "../section/BookingAndReservationSection";
import SocialMedia from "../section/SocialMedia";
import Testimonial from "../section/Testimonial";
import Contact from "../section/Contact";
import Footer from "../include/Footer";

class BookingAndReservation extends Component{
    render(){
        return(
            <div>
                <HeaderTwo/>
                <BookingAndReservationSection/>
                <br/>
                <SocialMedia/>
                <Testimonial/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default BookingAndReservation;