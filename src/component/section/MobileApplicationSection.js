import React,{Component} from 'react';
import mobile_application from "../../assets/img/services/mobile-apps.png";
import Simplicity_in_design from "../../assets/img/icon/Simplicity_in_design.png";
import Compliance_with_GDPR_standards from "../../assets/img/icon/Compliance_with_GDPR_standards.png";
import Ongoing_evolution from "../../assets/img/icon/Ongoing_evolution.png";
import Less_Keyboarding_and_More_Touch from "../../assets/img/icon/Less_Keyboarding_and_More_Touch.png";
import Applied_Data_Science from "../../assets/img/icon/Applied_Data_Science_&_Machine_Learning.png";
import Integration_of_Augmented_Reality from "../../assets/img/icon/Integration_of_Augmented_Reality.png";
import Cross_platform_coverage from "../../assets/img/icon/Cross-platform_coverage.png";
import Performance_is_the_key from "../../assets/img/icon/Performance_is_the_key.png";
import Robust_Security from "../../assets/img/icon/Robust_Security.png";
import Integration_with_bigger_ecosystems from "../../assets/img/icon/Integration_with_bigger_ecosystems.png";
import Interoperability_with_modern_connectivity_standard from "../../assets/img/icon/Interoperability_with_modern_connectivity_standard.png";
import Focus_on_business_driven_solutions from "../../assets/img/icon/Focus_on_business-driven_solutions.png";
import Social_Networking_Capabilities from "../../assets/img/icon/Social_Networking_Capabilities.png";
import The_Ability_to_Work_Offline from "../../assets/img/icon/The_Ability_to_Work_Offline.png";



class MobileApplicationSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {mobile_application} alt={mobile_application}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'mobile_application_details_design'}>
                                    Mobile as well as web-based applications are awesome tools for marketing your content to a populace, which is increasingly using their smart phones instead of their PCs to access the Internet. If your business is about selling a service or a product online, then you should definitely consider creating a mobile application as one of your priority content goals. You can create a native app built for specific platforms and devices such as Android & iOS.
                                    One of the reasons why you should create mobile applications as part of your content marketing strategy is because today most people access the internet from their smart phones rather than their PCs. Having a mobile application for your business helps you capture this customer segment and drive more traffic and sales.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
                <br/>
                <div className = "container text-center">
                    <div className = "row">
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Simplicity_in_design} alt={Simplicity_in_design}/></div><br/>
                            <h6>Simplicity in design</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Compliance_with_GDPR_standards} alt={Compliance_with_GDPR_standards}/></div><br/>
                            <h6>Compliance with GDPR standards</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Ongoing_evolution} alt={Ongoing_evolution}/></div><br/>
                            <h6>Ongoing evolution</h6>
                        </div>

                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Less_Keyboarding_and_More_Touch} alt={Less_Keyboarding_and_More_Touch}/></div><br/>
                            <h6>Less Keyboarding and More Touch</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Applied_Data_Science} alt={Applied_Data_Science}/></div><br/>
                            <h6>Applied Data Science & Machine Learning</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Integration_of_Augmented_Reality} alt={Integration_of_Augmented_Reality}/></div><br/>
                            <h6>Integration of Augmented Reality</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Cross_platform_coverage} alt={Cross_platform_coverage}/></div><br/>
                            <h6>Cross-platform coverage</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Performance_is_the_key} alt={Performance_is_the_key}/></div><br/>
                            <h6>Performance is the key</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Robust_Security} alt={Robust_Security}/></div><br/>
                            <h6>Robust Security</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Integration_with_bigger_ecosystems} alt={Integration_with_bigger_ecosystems}/></div><br/>
                            <h6>Integration with bigger ecosystems</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Interoperability_with_modern_connectivity_standard} alt={Interoperability_with_modern_connectivity_standard}/></div><br/>
                            <h6>Interoperability with modern connectivity standard</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Focus_on_business_driven_solutions} alt={Focus_on_business_driven_solutions}/></div><br/>
                            <h6>Focus on business-driven solutions</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Social_Networking_Capabilities} alt={Social_Networking_Capabilities}/></div><br/>
                            <h6>Social Networking Capabilities</h6>
                        </div>
                        <div className = {'col-md-3 mobile_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {The_Ability_to_Work_Offline} alt={The_Ability_to_Work_Offline}/></div><br/>
                            <h6>The Ability to Work Offline</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default MobileApplicationSection;