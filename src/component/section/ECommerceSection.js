import React,{Component} from 'react';
import e_commerce_banner from "../../assets/img/products/eccomerce_banner.png";
import Content_management_enabled from "../../assets/img/icon/Content_management_enabled.png";
import Promotion_and_discount_code_tools from "../../assets/img/icon/Promotion_and_discount_code_tools.png";
import easy_way_to_check_out from "../../assets/img/icon/easy_way_to_check_out.png";
import search_engine_optimized from "../../assets/img/icon/search_engine_optimized.png";
import Reporting_tools from "../../assets/img/icon/Reporting_tools.png";
import An_integrated_blog_or_articles_section from "../../assets/img/icon/An_integrated_blog_or_articles_section.png";
import Email_marketing_integration from "../../assets/img/icon/Email_marketing_integration.png";
import Multiple_payment_options from "../../assets/img/icon/Multiple_payment_options.png";
import Cross_platform_coverage from "../../assets/img/icon/Cross-platform_coverage.png";
import Ease_of_Use from "../../assets/img/icon/Ease_of_Use.png";
import High_Resolution_Photos_and_Video from "../../assets/img/icon/High-Resolution_Photos_and_Video.png";
import Mobile_Friendly_Website from "../../assets/img/icon/Mobile-Friendly_Website.png";
import User_Generated_Reviews from "../../assets/img/icon/User-Generated_Reviews.png";
import special_offer from "../../assets/img/icon/special-offer.png";
import Wish_Lists from "../../assets/img/icon/Wish_Lists.png";

class ECommerceSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {e_commerce_banner} alt={e_commerce_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'e_commerce_details_design'}>
                                    E-commerce describes the process of buying, selling, transferring or exchanging products, services
                                    and/or information via computer software including the Internet.
                                    E-business refers to a broader definition of e-commerce, not just the buying and selling of goods and
                                    services but also servicing customers, collaborating with business partners, conducting e-learning
                                    and processing electronic transactions. B2B business is simply defined as -ecommerce between
                                    companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className={'container'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                            <div className = {'row'}>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Content_management_enabled} alt={Content_management_enabled}/>
                                    <span>&nbsp;Content management capabilities</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Promotion_and_discount_code_tools} alt={Promotion_and_discount_code_tools}/>
                                    <span>&nbsp;Promotion and discount code tools</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {easy_way_to_check_out} alt={easy_way_to_check_out}/>
                                    <span>&nbsp;An easy-to-use checkout</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {search_engine_optimized} alt={search_engine_optimized}/>
                                    <span>&nbsp;Search engine optimized code and layout</span>
                                </div>

                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Reporting_tools} alt={Reporting_tools}/>
                                    <span>&nbsp;Reporting tools</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {An_integrated_blog_or_articles_section} alt={An_integrated_blog_or_articles_section}/>
                                    <span>&nbsp;An integrated blog or articles section</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Email_marketing_integration} alt={Email_marketing_integration}/>
                                    <span>&nbsp;Email marketing integration</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Multiple_payment_options} alt={Multiple_payment_options}/>
                                    <span>&nbsp;Multiple payment options</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Cross_platform_coverage} alt={Cross_platform_coverage}/>
                                    <span>&nbsp;The ability to scale up with your platform</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Ease_of_Use} alt={Ease_of_Use}/>
                                    <span>&nbsp;Ease of Use</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {High_Resolution_Photos_and_Video} alt={High_Resolution_Photos_and_Video}/>
                                    <span>&nbsp;High-Resolution Photos and Video</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Mobile_Friendly_Website} alt={Mobile_Friendly_Website}/>
                                    <span>&nbsp;Mobile-Friendly Website</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {User_Generated_Reviews} alt={User_Generated_Reviews}/>
                                    <span>&nbsp;User-Generated Reviews</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {special_offer} alt={special_offer}/>
                                    <span>&nbsp;Special Offers</span>
                                </div>
                                <div className = {'col-md-3 e_commerce_feature_margin'}>
                                    <img src = {Wish_Lists} alt={Wish_Lists}/>
                                    <span>&nbsp;Wish Lists</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ECommerceSection;