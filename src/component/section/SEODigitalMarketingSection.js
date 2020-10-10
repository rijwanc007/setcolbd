import React,{Component} from 'react';
import digital_marketing from "../../assets/img/services/digital-marketing.png";
import boost_creadibility from "../../assets/img/icon/Boost-Credibility.png";
import boost_up_website_speed from "../../assets/img/icon/Boost-Up-Website-Speed.png";
import ecommerce_product_wise_seo from "../../assets/img/icon/Ecommerce-Product-wise-SEO.png";
import improved_seo from "../../assets/img/icon/Improved-SEO.png";
import monthly_support from "../../assets/img/icon/Monthly-Support.png";
import spread_branding from "../../assets/img/icon/Speard-Branding.png";
import strong_content_writing from "../../assets/img/icon/Strong-Content-Writing.png";
import support_all_browser from "../../assets/img/icon/Support-All-Browsers.png";
import web_analytics_performance from "../../assets/img/icon/Web-Analytics-Performance.png";


class SEODigitalMarketingSection extends Component{
    render() {
        return (
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {digital_marketing} alt={digital_marketing}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'seo_details_design'}>
                                    Digital marketing encompasses all marketing efforts that use an electronic device or the internet. Businesses leverage digital channels such as search engines, social media, email, and their websites to connect with current and prospective customers.
                                    A content marketer, for example, can create a series of blog posts that serve to generate leads from a new ebook the business recently created. The company's social media marketer might then help promote these blog posts through paid and organic posts on the business's social media accounts. Perhaps the email marketer creates an email campaign to send those who download the ebook more information on the company. We'll talk more about these specific digital marketers in a minute.
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
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {boost_creadibility} alt={boost_creadibility}/></div><br/>
                            <h6>Boost Credibility</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {boost_up_website_speed} alt={boost_up_website_speed}/></div><br/>
                            <h6>Boost Up Website Speed</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ecommerce_product_wise_seo} alt={ecommerce_product_wise_seo}/></div><br/>
                            <h6>E-Commerce Product Wise SEO</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {improved_seo} alt={improved_seo}/></div><br/>
                            <h6>Improved SEO</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {monthly_support} alt={monthly_support}/></div><br/>
                            <h6>Monthly Support</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {spread_branding} alt={spread_branding}/></div><br/>
                            <h6>Spread Branding</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {strong_content_writing} alt={strong_content_writing}/></div><br/>
                            <h6>Strong Content Writing</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {support_all_browser} alt={support_all_browser}/></div><br/>
                            <h6>Support All Browser</h6>
                        </div>
                        <div className = {'col-md-3 seo_feature_margin'}>
                            <div><img className={'icon_feature'} src = {web_analytics_performance} alt={web_analytics_performance}/></div><br/>
                            <h6>Web Analytics Performance</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SEODigitalMarketingSection;