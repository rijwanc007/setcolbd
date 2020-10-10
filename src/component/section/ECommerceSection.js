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
                <div className={'container text-center'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Content_management_enabled} alt={Content_management_enabled}/></div><br/>
                            <h6>Content management capabilities</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Promotion_and_discount_code_tools} alt={Promotion_and_discount_code_tools}/></div><br/>
                            <h6>Promotion and discount code tools</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {easy_way_to_check_out} alt={easy_way_to_check_out}/></div><br/>
                            <h6>An easy to use checkout</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {search_engine_optimized} alt={search_engine_optimized}/></div><br/>
                            <h6>Search engine optimized code and layout</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Reporting_tools} alt={Reporting_tools}/></div><br/>
                            <h6>Reporting tools</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {An_integrated_blog_or_articles_section} alt={An_integrated_blog_or_articles_section}/></div><br/>
                            <h6>An integrated blog or articles section</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Email_marketing_integration} alt={Email_marketing_integration}/></div><br/>
                            <h6>Email marketing integration</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Multiple_payment_options} alt={Multiple_payment_options}/></div><br/>
                            <h6>Multiple payment options</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Cross_platform_coverage} alt={Cross_platform_coverage}/></div><br/>
                            <h6>The ability to scale up with your platform</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Ease_of_Use} alt={Ease_of_Use}/></div><br/>
                            <h6>Ease of Use</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {High_Resolution_Photos_and_Video} alt={High_Resolution_Photos_and_Video}/></div><br/>
                            <h6>High Resolution Photos and Video</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Mobile_Friendly_Website} alt={Mobile_Friendly_Website}/></div><br/>
                            <h6>Mobile Friendly Website</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {User_Generated_Reviews} alt={User_Generated_Reviews}/></div><br/>
                            <h6>User Generated Reviews</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {special_offer} alt={special_offer}/></div><br/>
                            <h6>Special Offers</h6>
                        </div>
                        <div className = {'col-md-3 e_commerce_feature_margin'}>
                            <div><img className={'icon_feature'} src = {Wish_Lists} alt={Wish_Lists}/></div><br/>
                            <h6>Wish Lists</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ECommerceSection;