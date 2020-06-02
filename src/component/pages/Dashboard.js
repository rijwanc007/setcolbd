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
import Footer from '../include/Footer';

import jQuery from "jquery";


class Dashboard extends Component{
    componentDidMount() {
        (function($) {
            "use strict";
            /*---------------------
             TOP Menu Stick
            --------------------- */
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
            //---------------------------------------------
            //Nivo slider
            //---------------------------------------------
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
            /*--------------------------
             collapse
            ---------------------------- */
            var panel_test = $('.panel-heading a');
            panel_test.on('click', function() {
                panel_test.removeClass('active');
                $(this).addClass('active');
            });
            if (typeof($.fn.knob) != 'undefined') {
                var knob_tex = $('.knob');
                knob_tex.each(function() {
                    var $this = $(this),
                        knobVal = $this.attr('data-rel');

                    $this.knob({
                        'draw': function() {
                            $(this.i).val(this.cv + '%')
                        }
                    });

                    $this.appear(function() {
                        $({
                            value: 0
                        }).animate({
                            value: knobVal
                        }, {
                            duration: 2000,
                            easing: 'swing',
                            step: function() {
                                $this.val(Math.ceil(this.value)).trigger('change');
                            }
                        });
                    }, {
                        accX: 0,
                        accY: -150
                    });
                });
            }
        })(jQuery);
    }
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
                <Footer/>
            </div>
        )
    }
}

export default Dashboard;