import React,{Component} from 'react';
import Header from '../include/Header';
import Slider from '../section/Slider';
import About from '../section/About';
import SocialMedia from '../section/SocialMedia';
import Services from '../section/Services';
import Skill from '../section/Skill';
import Product from '../section/Product';
import Subscribe from '../section/Subscribe';
import Technology from '../section/Technology';
import Clients from '../section/Clients';
import Portfolio from '../section/Portfolio';
import Testimonial from '../section/Testimonial';
import Contact from '../section/Contact';
import Messenger from '../include/Messenger';
import Footer from '../include/Footer';

class Dashboard extends Component{
    render(){
        return(
            <div>
                <Header/>
                <Slider/>
                <About/>
                <SocialMedia/>
                <Services/>
                <Skill/>
                <Product/>
                <Subscribe/>
                <br/>
                <Technology/>
                <br/>
                <Clients/>
                <br/>
                <Portfolio/>
                <br/><br/>
                <Testimonial/>
                <Contact/>
                <Messenger/>
                <Footer/>
            </div>
        )
    }
}

export default Dashboard;