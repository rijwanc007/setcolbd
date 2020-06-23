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
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                            <div className = {'row'}>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {boost_creadibility} alt={boost_creadibility}/>
                                    <span>&nbsp;Boost Credibility</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {boost_up_website_speed} alt={boost_up_website_speed}/>
                                    <span>&nbsp;Boost Up Website Speed</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {ecommerce_product_wise_seo} alt={ecommerce_product_wise_seo}/>
                                    <span>&nbsp;E-Commerce Product Wise SEO</span>
                                </div>

                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {improved_seo} alt={improved_seo}/>
                                    <span>&nbsp;Improved SEO</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {monthly_support} alt={monthly_support}/>
                                    <span>&nbsp;Monthly Support</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {spread_branding} alt={spread_branding}/>
                                    <span>&nbsp;Spread Branding</span>
                                </div>

                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {strong_content_writing} alt={strong_content_writing}/>
                                    <span>&nbsp;Strong Content Writing</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {support_all_browser} alt={support_all_browser}/>
                                    <span>&nbsp;Support All Browser</span>
                                </div>
                                <div className = {'col-md-3 seo_feature_margin'}>
                                    <img src = {web_analytics_performance} alt={web_analytics_performance}/>
                                    <span>&nbsp;Web Analytics Performance</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default SEODigitalMarketingSection;