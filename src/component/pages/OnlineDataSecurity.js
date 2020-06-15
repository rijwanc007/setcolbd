import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import OnlineDataSecuritySection from "../section/OnlineDataSecuritySection";
import SocialMedia from "../section/SocialMedia";
import Clients from "../section/Clients";
import Contact from "../section/Contact";
import Footer from "../include/Footer";
import $ from "jquery";

class OnlineDataSecurity extends Component{
    componentDidMount() {
        var s = $("#sticker");
        var pos = s.position();
        $(window).on('scroll', function() {
            var windowpos = $(window).scrollTop() > 300;
            if (windowpos > pos.top) {
                s.addClass("stick");
            } else {
                s.removeClass("stick");
            }
        });
    }
    render(){
        return(
            <div>
                <HeaderTwo/>
                <OnlineDataSecuritySection/>
                <SocialMedia/>
                <Clients/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default OnlineDataSecurity;