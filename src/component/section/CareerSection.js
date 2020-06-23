import React,{Component} from 'react';
import career_banner from "../../assets/img/career/career_banner.png";

class CareerSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {career_banner} alt={career_banner}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Job <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'career_details_design'}>Skies Engineering & Technologies Company is looking for some Hardworking, Punctual & Challenging People. But opportunity is limited. So apply now and grab your position for better tomorrow.</p>
                            </div>
                            <div className = "col-md-12 col-sm-12 col-xl-12 text-center">
                                <div><input type="text" className = "form-control" accept=".pdf" placeholder="enter your cv in pdf format"/></div><br/>
                                <div><button className="btn btn-info">Apply</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CareerSection;