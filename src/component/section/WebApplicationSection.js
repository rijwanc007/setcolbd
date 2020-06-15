import React,{Component} from 'react';
import web_application from '../../assets/img/services/web-application.png';
import mobile_friendliness from '../../assets/img/icon/mobile_frienliness.png';
import quick_loading_times from '../../assets/img/icon/quick_loading_times.png';
import search_engine_optimized from '../../assets/img/icon/search_engine_optimized.png';
import analytics_enabled from '../../assets/img/icon/Analytics-enabled.png';
import Built_for_conversion from '../../assets/img/icon/Built_for_conversion.png';
import Content_management_enabled from '../../assets/img/icon/Content_management_enabled.png';
import Social_media from '../../assets/img/icon/Social_media.png';
import Set_up_email_marketing from '../../assets/img/icon/Set_up_email_marketing.png';
import Robust_Security from '../../assets/img/icon/Robust_Security.png';
import Progressive_Web_Apps from '../../assets/img/icon/Progressive_Web_Apps.png';
import Quality_Web_Content from '../../assets/img/icon/Quality_Web_Content.png';
import Simplicity_in_design from '../../assets/img/icon/Simplicity_in_design.png';

class WebApplicationSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {web_application} alt={web_application}/>
                    </div>
                </div>
                <div  className = "footer-area">
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-6 col-sm-6 col-xl-6">
                            <div className="section-headline text-center">
                                <h2>Detail <span className="text-info">'s</span></h2>
                            </div>
                            <p className={'web_application_details_design'}>
                                Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles.You can create web-based applications that are mobile responsive and market them on specific market places such as world-wide. You can also host these web-based applications on your website to help your customers tackle a problem or complete a task. For instance, let’s assume your company sells insurance policies. You could create a custom application such as a tax calculator, which will calculate the tax savings of users who want to take a certain policy. Customers can download these applications and use them when they want, with or without an internet connection. You need to develop a web-based application if it helps your customers complete a task they perform on a daily basis. Web-based applications bring in new customers onboard as they sign-up or download these applications. It also helps in retaining existing customers, while positioning you as a thought leader in the industry.
                            </p>
                        </div>
                        <div className = "col-md-6 col-sm-6 col-xl-6">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                            <div className = {'row'}>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {mobile_friendliness} alt={mobile_friendliness}/>
                                    <span>&nbsp;Mobile-friendliness</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {quick_loading_times} alt={quick_loading_times}/>
                                    <span>&nbsp;Quick loading times</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {search_engine_optimized} alt={search_engine_optimized}/>
                                    <span>&nbsp;Search engine optimised</span>
                                </div>

                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {analytics_enabled} alt={analytics_enabled}/>
                                    <span>&nbsp;Analytics-enabled</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Built_for_conversion} alt={Built_for_conversion}/>
                                    <span>&nbsp;Built for conversion</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Content_management_enabled} alt={Content_management_enabled}/>
                                    <span>&nbsp;Content management enabled</span>
                                </div>

                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Social_media} alt={Social_media}/>
                                    <span>&nbsp;Social media</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Set_up_email_marketing} alt={Set_up_email_marketing}/>
                                    <span>&nbsp;Set up email marketing</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Robust_Security} alt={Robust_Security}/>
                                    <span>&nbsp;Robust Security</span>
                                </div>

                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Progressive_Web_Apps} alt={Progressive_Web_Apps}/>
                                    <span>&nbsp;Progressive Web Apps</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Quality_Web_Content} alt={Quality_Web_Content}/>
                                    <span>&nbsp;Quality Web Content</span>
                                </div>
                                <div className = {'col-md-6 web_application_feature_margin'}>
                                    <img src = {Simplicity_in_design} alt={Simplicity_in_design}/>
                                    <span>&nbsp;Simple and Professional Web Design</span>
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

export default WebApplicationSection;