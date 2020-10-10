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
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Detail <span className="text-info">'s</span></h2>
                            </div>
                            <p className={'web_application_details_design'}>
                                Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles.You can create web-based applications that are mobile responsive and market them on specific market places such as world-wide. You can also host these web-based applications on your website to help your customers tackle a problem or complete a task. For instance, let’s assume your company sells insurance policies. You could create a custom application such as a tax calculator, which will calculate the tax savings of users who want to take a certain policy. Customers can download these applications and use them when they want, with or without an internet connection. You need to develop a web-based application if it helps your customers complete a task they perform on a daily basis. Web-based applications bring in new customers onboard as they sign-up or download these applications. It also helps in retaining existing customers, while positioning you as a thought leader in the industry.
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
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {mobile_friendliness} alt={mobile_friendliness}/></div><br/>
                            <h6>Mobile friendliness</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {quick_loading_times} alt={quick_loading_times}/></div><br/>
                            <h6>Quick loading times</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {search_engine_optimized} alt={search_engine_optimized}/></div><br/>
                            <h6>Search engine optimised</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {analytics_enabled} alt={analytics_enabled}/></div><br/>
                            <h6>Analytics enabled</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Built_for_conversion} alt={Built_for_conversion}/></div><br/>
                            <h6>Built for conversion</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Content_management_enabled} alt={Content_management_enabled}/></div><br/>
                            <h6>Content management enabled</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Social_media} alt={Social_media}/></div><br/>
                            <h6>Social media</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Set_up_email_marketing} alt={Set_up_email_marketing}/></div><br/>
                            <h6>Set up email marketing</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Robust_Security} alt={Robust_Security}/></div><br/>
                            <h6>Robust Security</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Progressive_Web_Apps} alt={Progressive_Web_Apps}/></div><br/>
                            <h6>Progressive Web Apps</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Quality_Web_Content} alt={Quality_Web_Content}/></div><br/>
                            <h6>Quality Web Content</h6>
                        </div>
                        <div className = {'col-md-3 web_application_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Simplicity_in_design} alt={Simplicity_in_design}/></div><br/>
                            <h6>Simple and Professional Web Design</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default WebApplicationSection;