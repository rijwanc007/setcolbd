import React,{Component} from 'react';
import slider_one from '../../assets/img/slider/cloudbase-software.jpg';
import slider_two from '../../assets/img/slider/e-commerce.jpg';
import slider_three from '../../assets/img/slider/website-design-and-development-page.jpg';
import slider_four from '../../assets/img/slider/graphic-design.jpg';
import slider_five from '../../assets/img/slider/Mobile-apps.jpg';

class Slider extends Component{
    render(){
        return(
            <div>
                <div id="home" className="slider-area">
                    <div className="bend niceties preview-2">
                        <div id="ensign-nivoslider" className="slides">
                            <img src = {slider_one} alt="" title="#slider-direction-1"/>
                            <img src = {slider_two} alt="" title="#slider-direction-2"/>
                            <img src = {slider_three} alt="" title="#slider-direction-3"/>
                            <img src = {slider_four} alt="" title="#slider-direction-4"/>
                            <img src = {slider_five} alt="" title="#slider-direction-5"/>
                        </div>
                        <div id="slider-direction-1" className="slider-direction slider-one">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            <div className="layer-1-1 hidden-xs">
                                                <h2 className="title1">Since 2017</h2>
                                            </div>
                                            <div className="layer-1-2">
                                                <h1 className="title2">We are a quality & established providing best solutions in IT industry since 2017 to ensure you a successful online presence.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-direction-2" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content text-center">
                                            <div className="layer-1-1 hidden-xs">
                                                <h2 className="title1">Support</h2>
                                            </div>
                                            <div className="layer-1-2">
                                                <h1 className="title2">We have diversified and customer driven products with strong business analytical team R&D support.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-direction-3" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            <div className="layer-1-1 hidden-xs">
                                                <h2 className="title1">Insure</h2>
                                            </div>
                                            <div className="layer-1-2">
                                                <h1 className="title2">we will strive and are committed to provide a the maximum level of stability to our clients.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-direction-4" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            <div className="layer-1-1 hidden-xs">
                                                <h2 className="title1">Commitment</h2>
                                            </div>
                                            <div className="layer-1-2">
                                                <h1 className="title2">we will strive and are committed to provide a the maximum level of stability to our clients.</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="slider-direction-5" className="slider-direction slider-two">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 col-sm-12 col-xs-12">
                                        <div className="slider-content">
                                            <div className="layer-1-1 hidden-xs">
                                                <h2 className="title1">Capability</h2>
                                            </div>
                                            <div className="layer-1-2">
                                                <h1 className="title2">We are committed to complete and deliver all projects on time .</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;