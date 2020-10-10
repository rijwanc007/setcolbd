import React,{Component} from 'react';
import graphics_design from "../../assets/img/services/graphic-design.png";
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


class GraphicsSolutionSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {graphics_design} alt={graphics_design}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'graphics_solution_details_design'}>
                                    Almost every business today creates a video or info graphics as part of their content marketing program. In a business context, you can use videos to give customers a guided tour of your product or service. With infographics, you can help your customers understand a specific problem that you solve for them. However, the use of videos and infographics are not limited to product tutorials and guides. With the unprecedented growth of video sites like YouTube and Vimeo and infographic sites like Listly, you can use videos and infographics to create brand awareness, generate sales leads and establish yourself as a thought leader in the industry.
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
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {animation_3d} alt={animation_3d}/></div><br/>
                            <h6>Animation 3D</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {background_remove_and_retouch} alt={background_remove_and_retouch}/></div><br/>
                            <h6>Background Remove & Retouch</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {digital_advertise} alt={digital_advertise}/></div><br/>
                            <h6>Digital Advertise</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {gamming_character_design} alt={gamming_character_design}/></div><br/>
                            <h6>Gaming Character Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {image_manipulation} alt={image_manipulation}/></div><br/>
                            <h6>Image Manipulation</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {image_trace_or_vectorize} alt={image_trace_or_vectorize}/></div><br/>
                            <h6>Image Trace Or Vectorized</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {logo_design} alt={logo_design}/></div><br/>
                            <h6>Logo Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {mockup_design} alt={mockup_design}/></div><br/>
                            <h6>Mock Up Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {motion_grapics} alt={motion_grapics}/></div><br/>
                            <h6>Motion Graphics</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {product_design_e_commerce} alt={product_design_e_commerce}/></div><br/>
                            <h6>Product Design For E-Commerce</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {social_media_design} alt={social_media_design}/></div><br/>
                            <h6>Social Media Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ui_ux_design} alt={ui_ux_design}/></div><br/>
                            <h6>UI-UX Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {website_and_apps_mockup_design} alt={website_and_apps_mockup_design}/></div><br/>
                            <h6>Website & Apps Mock Up Design</h6>
                        </div>
                        <div className = {'col-md-3 graphics_solution_feature_margin'}>
                            <div><img className={'icon_feature'} src = {white_board_animation} alt={white_board_animation}/></div><br/>
                            <h6>White Board Animation</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default GraphicsSolutionSection;