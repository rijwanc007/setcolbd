import React,{Component} from 'react';
import about_img from '../../../public/assets/img/about/setcolbd-03.png';



class About extends Component{
    render(){
        return(
            <div>
                <div id="about" className="about-area area-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="section-headline text-center">
                                    <h2>About <span className="text-info">SETCOLBD</span></h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 col-sm-6 col-xs-12" style={{backgroundColor:"white"}}>
                                <div className="well-left">
                                    <div className="single-well">
                                        <a href="#">
                                            <img src={about_img} alt="about_us"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-sm-6 col-xs-12">
                                <div className="well-middle">
                                    <div className="single-well">
                                        <p>
                                            The software development industry has room for growth as there is considerable demand in this industry with more businesses adopting software programs that will allow for improved efficiency and lower operating costs; this was so as to look for ways to not be affected by the economic downturn.
                                        </p>
                                        <ul>
                                            <li><span className="text-info"><i className="fa fa-check"></i></span> We are determined to serve innovative and best quality services.</li>
                                            <li><span className="text-info"><i className="fa fa-check"></i></span> We are able to develop rapid solutions.</li>
                                            <li><span className="text-info"><i className="fa fa-check"></i></span> We provide 24/7 customer services and support to meet your SATISFACTIONS</li>
                                            <li><span className="text-info"><i className="fa fa-check"></i></span> Our customer support team always ready for valuable feedback and satisfy you</li>
                                            <li><span className="text-info"><i className="fa fa-check"></i></span> Our focus is to build long term relationships with our honorable customers</li>
                                        </ul>
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


export default About;