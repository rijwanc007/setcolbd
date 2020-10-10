import React,{Component} from 'react';
import erp_banner from "../../assets/img/products/erp_banner.png";
import vms from "../../assets/img/icon/vehicle-management-system.png";
import crm from "../../assets/img/icon/Customer-Relationship-Management.png";
import fms from "../../assets/img/icon/Financial-Management-System.png";
import hrm from "../../assets/img/icon/HRM-and-Payroll Management-System.png";
import mms from "../../assets/img/icon/manufacturing_management_system.png";
import pms from "../../assets/img/icon/Purchase Management-System.png";
import sdm from "../../assets/img/icon/Sales-and-Distribution-Management-System.PNG";
import wims from "../../assets/img/icon/Warehouse-and-Inventory-Management-System.PNG";

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
                <div className={'container text-center'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {hrm} alt={hrm}/></div><br/>
                            <h6>HRM & Payroll Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {sdm} alt={sdm}/></div><br/>
                            <h6>Sales & Distribution Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {pms} alt={pms}/></div><br/>
                            <h6>Purchase Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {wims} alt={wims}/></div><br/>
                            <h6>Warehouse & Inventory Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {mms} alt={mms}/></div><br/>
                            <h6>Manufacturing Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {crm} alt={crm}/></div><br/>
                            <h6>Customer Relationship Management</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {fms} alt={fms}/></div><br/>
                            <h6>Financial Management System</h6>
                        </div>
                        <div className = {'col-md-3 erp_feature_margin'}>
                            <div><img className={'icon_feature'} src = {vms} alt={vms}/></div><br/>
                            <h6>Vehicle Management System</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ERPSection;