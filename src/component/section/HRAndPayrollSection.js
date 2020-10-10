import React,{Component} from 'react';
import hr_banner from "../../assets/img/products/hr_banner.png";
import announcement from "../../assets/img/icon/Announcement-Management.PNG";
import appraisal from "../../assets/img/icon/Apprisal-&-Talent-Management.png";
import benefits from "../../assets/img/icon/Benefits-Management.png";
import bonus from "../../assets/img/icon/Bonus-Management.png";
import employee_information from "../../assets/img/icon/Employee-Information-Management.png";
import financial from "../../assets/img/icon/Financial-&-Accounting-Management.png";
import internal from "../../assets/img/icon/Internal-Messaging-System.png";
import learning from "../../assets/img/icon/Learning-and-Professional-Development.png";
import leave_management from "../../assets/img/icon/Leave-Management.PNG";
import loan_management from "../../assets/img/icon/Loan-Management.png";
import payroll from "../../assets/img/icon/Payroll-Management.png";
import provident from "../../assets/img/icon/Provident-Fund-&-Gratuity-Management.png";
import recruitment from "../../assets/img/icon/Recruitment-&-Hiring.PNG";
import role from "../../assets/img/icon/Role Management (2).png";
import task from "../../assets/img/icon/Task-Mangement.png";
import third from "../../assets/img/icon/Third-Party-integrations.PNG";
import time from "../../assets/img/icon/Time-(Attendence-&-Overtime)-Management.png";


class HRAndPayrollSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {hr_banner} alt={hr_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'hr_and_payroll_details_design'}>
                                    SETCOL HR &amp; PAYROLL Management Systems ensure the human capital of an organization
                                    and focus on implementing policies and processes. Our system can specialize in finding, recruiting,
                                    training and developing employees, employee-benefits, performance appraisal, reward
                                    management, transactional work as well as maintaining employee relations and
                                    payroll and administration benefit systems.
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
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {announcement} alt={announcement}/></div><br/>
                            <h6>Announcement Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {appraisal} alt={appraisal}/></div><br/>
                            <h6>Appraisal & Talent Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {benefits} alt={benefits}/></div><br/>
                            <h6>Benefits Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {bonus} alt={bonus}/></div><br/>
                            <h6>Bonus Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {employee_information} alt={employee_information}/></div><br/>
                            <h6>Employee Information Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {financial} alt={financial}/></div><br/>
                            <h6>Financial & Accounting Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {internal} alt={internal}/></div><br/>
                            <h6>Internal Messaging System</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {learning} alt={learning}/></div><br/>
                            <h6>Learning & Professional Development</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {leave_management} alt={leave_management}/></div><br/>
                            <h6>Leave Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {loan_management} alt={loan_management}/></div><br/>
                            <h6>Loan Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {payroll} alt={payroll}/></div><br/>
                            <h6>Payroll Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {provident} alt={provident}/></div><br/>
                            <h6>Provident Fund & Gratuity Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {recruitment} alt={recruitment}/></div><br/>
                            <h6>Recruitment & Hiring</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {role} alt={role}/></div><br/>
                            <h6>Role Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {task} alt={task}/></div><br/>
                            <h6>Task Management</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {third} alt={third}/></div><br/>
                            <h6>Third Party integrations</h6>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <div><img className={'icon_feature'} src = {time} alt={time}/></div><br/>
                            <h6>Time(Attendance & Overtime)Management</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HRAndPayrollSection;