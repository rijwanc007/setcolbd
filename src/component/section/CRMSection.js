import React,{Component} from 'react';
import crm_banner from "../../assets/img/products/crm_banner.png";
import chat_integration from "../../assets/img/icon/Chat-Integration.png";
import customer_management from "../../assets/img/icon/Customer-Management.png";
import customize_option from "../../assets/img/icon/Customization-Options.png";
import email_marketing from "../../assets/img/icon/Email-Marketing-Integration.png";
import lead_management from "../../assets/img/icon/Lead-Management.PNG";
import project_management from "../../assets/img/icon/Project-Management.png";
import reports from "../../assets/img/icon/Reports.png";
import role_based_view from "../../assets/img/icon/Role-Based-Views.png";
import sales_management from "../../assets/img/icon/Sales-management.PNG";
import social_management from "../../assets/img/icon/Social-Media-Management-Integration.png";
import staff_management from "../../assets/img/icon/Staff-Management.png";
import support_system from "../../assets/img/icon/Support-System-(ticket).png";
import task_management from "../../assets/img/icon/Task-Management.png";

class CRMSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {crm_banner} alt={crm_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'crm_details_design'}>
                                    SETCOL Customer Relationship Management (CRM) system helps manage customer data. It supports
                                    sales management, delivers actionable insights, integrates with social media and facilitates team
                                    communication. Cloud-based systems offer complete mobility and access to an ecosystem of bespoke
                                    apps. It is an approach to manage a company&#39;s interaction with current and potential customers. It
                                    uses data analysis about customers&#39; history with a company to improve business relationships
                                    with customers, specifically focusing on customer retention and ultimately driving sales growth.
                                    Salesforce lets you efficiently unify different principal functions of your business so you can
                                    achieve customer success.
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
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {chat_integration} alt={chat_integration}/></div><br/>
                            <h6>Chat Integration</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {customer_management} alt={customer_management}/></div><br/>
                            <h6>Customer Management</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {customize_option} alt={customize_option}/></div><br/>
                            <h6>Customization Options</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {email_marketing} alt={email_marketing}/></div><br/>
                            <h6>Email Marketing Integration</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {lead_management} alt={lead_management}/></div><br/>
                            <h6>Lead Management</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {project_management} alt={project_management}/></div><br/>
                            <h6>Project Management</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {reports} alt={reports}/></div><br/>
                            <h6>Reports</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {role_based_view} alt={role_based_view}/></div><br/>
                            <h6>Role Based Views</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {sales_management} alt={sales_management}/></div><br/>
                            <h6>Sales Management</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {social_management} alt={social_management}/></div><br/>
                            <h6>Social Media Management Integration</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {staff_management} alt={staff_management}/></div><br/>
                            <h6>Staff Management</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {support_system} alt={support_system}/></div><br/>
                            <h6>Support System(ticket)</h6>
                        </div>
                        <div className = {'col-md-3 crm_feature_margin'}>
                            <div><img className={'icon_feature'} src = {task_management} alt={task_management}/></div><br/>
                            <h6>Task Management</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CRMSection;