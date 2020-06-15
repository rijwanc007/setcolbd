import React,{Component} from 'react';
import HeaderTwo from '../include/HeaderTwo'
import WebApplicationSection from '../section/WebApplicationSection'
import Clients from '../section/Clients'
import Contact from '../section/Contact'
import Footer from '../include/Footer'
import SocialMedia from "../section/SocialMedia";
import $ from "jquery";

class WebApplication extends Component{
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
               <WebApplicationSection/>
               <SocialMedia/>
               <Clients/>
               <Contact/>
               <Footer/>
            </div>
        )
    }
}

export default WebApplication;