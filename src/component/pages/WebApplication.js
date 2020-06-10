import React,{Component} from 'react';
import HeaderTwo from '../include/HeaderTwo'
import WebApplicationSection from '../section/WebApplicationSection'
import Contact from '../section/Contact'
import Footer from '../include/Footer'



class WebApplication extends Component{
    render(){
        return(
            <div>
               <HeaderTwo/>
               <WebApplicationSection/>
               <Contact/>
               <Footer/>
            </div>
        )
    }
}


export default WebApplication;