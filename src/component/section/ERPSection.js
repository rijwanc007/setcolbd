import React,{Component} from 'react';
import erp_banner from "../../assets/img/products/erp_banner.png";
import animation_3d from "../../assets/img/icon/animation-3d.png";
import background_remove_and_retouch from "../../assets/img/icon/background-remove-and-retouch.png";
import digital_advertise from "../../assets/img/icon/digital-advertise.png";
import gamming_character_design from "../../assets/img/icon/gamming-character-design.png";
import image_manipulation from "../../assets/img/icon/image-manipulation.png";
import image_trace_or_vectorize from "../../assets/img/icon/image-trace-or-vectorize.png";
import logo_design from "../../assets/img/icon/logo-design.png";
import mockup_design from "../../assets/img/icon/mockup-design.png";
import motion_grapics from "../../assets/img/icon/motion-grapics.png";
import product_design_e_commerce from "../../assets/img/icon/products-design(for-ecommerce-sites).png";
import social_media_design from "../../assets/img/icon/social-media-design.png";
import ui_ux_design from "../../assets/img/icon/ui-ux-design.png";
import website_and_apps_mockup_design from "../../assets/img/icon/website-and-apps-mockup-design.png";
import white_board_animation from "../../assets/img/icon/white-board-animation.png";

class ERPSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {erp_banner} alt={erp_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'erp_details_design'}>
                                    Enterprise resource planning (ERP) is the integrated management of business processes, which
                                    is mediated by software and technology in real-time. It integrates varied organizational systems and
                                    facilitates error-free transactions and production to enhance the organization&#39;s efficiency. It is a
                                    web–based software which provides real–time access systems to management, employees and
                                    partners. ERP systems actually focused on automating back office functions that did not directly
                                    affect customers and the public. Front office functions such as customer relationship management,
                                    deal directly with customers or e-business systems such as e-commerce, e-government, e-telecom,
                                    and e-finance or supplier relationship management became integrated step by step later, when the
                                    internet simplified communicating with external parties. As the use of mobile phone is vast now, we
                                    are making more effort to integrate mobile devices and business intelligence (BI) with the ERP
                                    system. ERP&#39;s scope usually implies to make changes in staff’s work processes and practices.
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
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {animation_3d} alt={animation_3d}/>
                                <span>&nbsp;Animation 3D</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {background_remove_and_retouch} alt={background_remove_and_retouch}/>
                                <span>&nbsp;Background Remove & Retouch</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {digital_advertise} alt={digital_advertise}/>
                                <span>&nbsp;Digital Advertise</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {gamming_character_design} alt={gamming_character_design}/>
                                <span>&nbsp;Gaming Character Design</span>
                            </div>

                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {image_manipulation} alt={image_manipulation}/>
                                <span>&nbsp;Image Manipulation</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {image_trace_or_vectorize} alt={image_trace_or_vectorize}/>
                                <span>&nbsp;Image Trace Or Vectorized</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {logo_design} alt={logo_design}/>
                                <span>&nbsp;Logo Design</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {mockup_design} alt={mockup_design}/>
                                <span>&nbsp;Mock Up Design</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {motion_grapics} alt={motion_grapics}/>
                                <span>&nbsp;Motion Graphics</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {product_design_e_commerce} alt={product_design_e_commerce}/>
                                <span>&nbsp;Product Design For E-Commerce</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {social_media_design} alt={social_media_design}/>
                                <span>&nbsp;Social Media Design</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {ui_ux_design} alt={ui_ux_design}/>
                                <span>&nbsp;UI-UX Design</span>
                            </div>
                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {website_and_apps_mockup_design} alt={website_and_apps_mockup_design}/>
                                <span>&nbsp;Website & Apps Mock Up Design</span>
                            </div>

                            <div className = {'col-md-3 erp_feature_margin'}>
                                <img src = {white_board_animation} alt={white_board_animation}/>
                                <span>&nbsp;White Board Animation</span>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ERPSection;