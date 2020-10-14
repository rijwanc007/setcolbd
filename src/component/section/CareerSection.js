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
                            <div className = "col-md-6 col-sm-6 col-xl-6 text-center">
                                <div className="form-group">
                                    <label htmlFor="select_position"><h4 className={'text-info'}>Position ::</h4></label>
                                    <select className="form-control" id="select_position">
                                        <option selected disabled value="">Choose An Option</option>
                                        <option value="HR">HR</option>
                                        <option value="Account">Account</option>
                                        <option value="Employee">Employee</option>
                                        <option value="Sale Leader">Sale Leader</option>
                                        <option value="Supervisor">Supervisor</option>
                                        <option value="Seller">Seller</option>
                                        <option value="Client">Client</option>
                                    </select>
                                </div>
                            </div>
                            <div className = "col-md-6 col-sm-6 col-xl-6 text-center">
                                <div className="form-group">
                                    <label htmlFor="select_position"><h4 className={'text-info'}>Email ::</h4></label>
                                    <input type="email" className = "form-control" placeholder="enter your email address"/>
                                </div>
                            </div>
                            <div className = "col-md-12 col-sm-12 col-xl-12 text-center">
                                <div><input type="file" style={{height:'44px'}} className = "form-control" accept=".pdf" placeholder="enter your cv in pdf format"/></div><br/>
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