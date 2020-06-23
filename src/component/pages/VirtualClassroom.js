import React,{Component} from 'react';
import HeaderTwo from "../include/HeaderTwo";
import VirtualClassroomSection from "../section/VirtualClassroomSection";
import SocialMedia from "../section/SocialMedia";
import Testimonial from "../section/Testimonial";
import Contact from "../section/Contact";
import Footer from "../include/Footer";

class VirtualClassroom extends Component{
    render(){
        return(
            <div>
                <HeaderTwo/>
                <VirtualClassroomSection/>
                <br/>
                <SocialMedia/>
                <Testimonial/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}

export default VirtualClassroom;