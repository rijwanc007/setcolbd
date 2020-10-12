import React,{Component} from 'react';
import '../../assets/lib/knob/jquery.knob.js';

class Skill extends Component{
    componentDidMount() {
        if (typeof($.fn.knob) !== 'undefined') {
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
    }
    render(){
        return(
            <div>
                <div className="our-skill-area fix hidden-sm">
                    <div className="test-overly"></div>
                    <div className="skill-bg area-padding-2">
                        <div className="container">
                            <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="95" data-linecap="round" data-width="175" data-bgColor="#3EC1D5" data-fgcolor="white" data-thickness=".20" data-readonly="true" disabled/><h3 className="progress-h4">Web & Mobile Application</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="85" data-linecap="round" data-width="175" data-bgColor="#3EC1D5" data-fgcolor="white" data-thickness=".20" data-readonly="true" disabled/><h3 className="progress-h4">Graphics Solution</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-12 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="88" data-linecap="round" data-width="175" data-bgColor="#3EC1D5" data-fgcolor="white" data-thickness=".20" data-readonly="true" disabled/><h3 className="progress-h4">SEO & Digital Marketing</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xs-12 col-sm-3 col-md-3 text-center">
                                        <div className="single-skill">
                                            <div className="progress-circular">
                                                <input type="text" className="knob" value="0" data-rel="87" data-linecap="round" data-width="175" data-bgColor="#3EC1D5" data-fgcolor="white" data-thickness=".20" data-readonly="true" disabled/><h3 className="progress-h4">Data Security</h3>
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

export default Skill;