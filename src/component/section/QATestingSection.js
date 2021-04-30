import React,{Component} from 'react';
import qa_testing from "../../assets/img/services/qa-testing.png";
import ad_hoc from "../../assets/img/icon/Ad-Hoc-Testing.webp";
import alpha from "../../assets/img/icon/alpha-testing.webp";
import beta from "../../assets/img/icon/beta-testing.webp";
import expletory from "../../assets/img/icon/Expletory-Testing.webp";
import integration from "../../assets/img/icon/Integration-testing.webp";
import monkey from "../../assets/img/icon/Monkey-Testing.webp";
import performance from "../../assets/img/icon/Performance-Testing.webp";
import smoke from "../../assets/img/icon/smoke-testing.webp";
import stress from "../../assets/img/icon/Stress-Testing.webp";
import system from "../../assets/img/icon/System-Testing.webp";
import unit from "../../assets/img/icon/unit-testing.webp";
import user from "../../assets/img/icon/User-Acceptance-Testing.webp";
import validation from "../../assets/img/icon/Validation.webp";
import verification from "../../assets/img/icon/Verification.webp";


class QATestingSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {qa_testing} alt={qa_testing}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                            </div>
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <p className={'qa_testing_details_design'}>
                                    Testing refers as the process of evaluating a system or its component’s with the intent to find whether it satisfies the specified requirements or not.
                                    Testing execute a system in order to identify any gaps, errors or missing requirements.
                                    Test Strategy is also known as test approach defines how testing would be carried out. Test approach has two techniques:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={'container text-center'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ad_hoc} alt={ad_hoc}/></div><br/>
                            <h6>Ad Hoc Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {alpha} alt={alpha}/></div><br/>
                            <h6>Alpha Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {beta} alt={beta}/></div><br/>
                            <h6>Beta Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {expletory} alt={expletory}/></div><br/>
                            <h6>Expletive Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {integration} alt={integration}/></div><br/>
                            <h6>Integration Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {monkey} alt={monkey}/></div><br/>
                            <h6>Monkey Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {performance} alt={performance}/></div><br/>
                            <h6>Performance Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {smoke} alt={smoke}/></div><br/>
                            <h6>Smoke Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {stress} alt={stress}/></div><br/>
                            <h6>Stress Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {system} alt={system}/></div><br/>
                            <h6>System Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {unit} alt={unit}/></div><br/>
                            <h6>Unit Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {user} alt={user}/></div><br/>
                            <h6>User Acceptance Testing</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {validation} alt={validation}/></div><br/>
                            <h6>Validation</h6>
                        </div>
                        <div className = {'col-md-3 sales_and_distribution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {verification} alt={verification}/></div><br/>
                            <h6>Verification</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default QATestingSection;