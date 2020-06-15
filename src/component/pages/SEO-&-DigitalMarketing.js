import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import SEODigitalMarketingSection from "../section/SEODigitalMarketingSection";
import SocialMedia from "../section/SocialMedia";
import Clients from "../section/Clients";
import Contact from "../section/Contact";
import Footer from "../include/Footer";
import $ from "jquery";

class SEODigitalMarketing extends Component{
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
                <SEODigitalMarketingSection/>
                <SocialMedia/>
                <Clients/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default SEODigitalMarketing;