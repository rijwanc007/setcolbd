import React,{Component} from 'react';
import '../../assets/lib/nivo-slider/css/nivo-slider.css';
import '../../assets/css/nivo-slider-theme.css';
import '../../assets/lib/nivo-slider/js/jquery.nivo.slider.js';
import slider_one from '../../assets/img/slider/cloudbase-software.jpg';
import slider_two from '../../assets/img/slider/e-commerce.jpg';
import slider_three from '../../assets/img/slider/website-design-and-development-page.jpg';
import slider_four from '../../assets/img/slider/graphic-design.jpg';
import slider_five from '../../assets/img/slider/Mobile-apps.jpg';
import $ from "jquery";
class Slider extends Component{
    componentDidMount() {
        $('#ensign-nivoslider').nivoSlider({
            effect: 'random',
            slices: 15,
            boxCols: 12,
            boxRows: 8,
            animSpeed: 500,
            pauseTime: 5000,
            startSlide: 0,
            directionNav: true,
            controlNavThumbs: false,
            pauseOnHover: true,
            manualAdvance: false,
        });
    }
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
                    </div>
                </div>
            </div>
        )
    }
}

export default Slider;