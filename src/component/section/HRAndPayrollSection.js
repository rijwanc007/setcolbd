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
                <div className={'container'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline text-center">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {announcement} alt={announcement}/>
                            <span>&nbsp;Announcement-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {appraisal} alt={appraisal}/>
                            <span>&nbsp;Appraisal-&-Talent-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {benefits} alt={benefits}/>
                            <span>&nbsp;Benefits-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {bonus} alt={bonus}/>
                            <span>&nbsp;Bonus-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {employee_information} alt={employee_information}/>
                            <span>&nbsp;Employee-Information-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {financial} alt={financial}/>
                            <span>&nbsp;Financial-&-Accounting-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {internal} alt={internal}/>
                            <span>&nbsp;Internal-Messaging-System</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {learning} alt={learning}/>
                            <span>&nbsp;Learning-and-Professional-Development</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {leave_management} alt={leave_management}/>
                            <span>&nbsp;Leave-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {loan_management} alt={loan_management}/>
                            <span>&nbsp;Loan-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {payroll} alt={payroll}/>
                            <span>&nbsp;Payroll-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {provident} alt={provident}/>
                            <span>&nbsp;Provident-Fund-&-Gratuity-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {recruitment} alt={recruitment}/>
                            <span>&nbsp;Recruitment-&-Hiring</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {role} alt={role}/>
                            <span>&nbsp;Role Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {task} alt={task}/>
                            <span>&nbsp;Task-Management</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {third} alt={third}/>
                            <span>&nbsp;Third-Party-integrations</span>
                        </div>
                        <div className = {'col-md-3 hr_and_payroll_feature_margin'}>
                            <img className={'icon_feature'} src = {time} alt={time}/>
                            <span>&nbsp;Time-(Attendance-&-Overtime)-Management</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HRAndPayrollSection;