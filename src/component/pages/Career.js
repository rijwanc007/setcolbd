import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import CareerSection from "../section/CareerSection";
import SocialMedia from "../section/SocialMedia";
import Technology from "../section/Technology";
import Clients from "../section/Clients";
import Contact from "../section/Contact";
import Footer from "../include/Footer";
import $ from "jquery";

class Career extends Component{
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
                <CareerSection/>
                <SocialMedia/>
                <br/>
                <Technology/>
                <br/>
                <Clients/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default Career;