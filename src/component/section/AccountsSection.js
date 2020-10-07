import React,{Component} from 'react';
import accounting_banner from "../../assets/img/products/accounting_banner.png";

import account_holds from "../../assets/img/icon/Account-Holds.png";
import account_payable from "../../assets/img/icon/Accounts-Payable-Purchase-Order-Reconciliation.png";
import ap_document from "../../assets/img/icon/AP-Document-Attachment.png";
import ar_aging from "../../assets/img/icon/AR-Aging-Reports.png";
import ar_comment from "../../assets/img/icon/AR-Comment-Support.png";
import balance_forward from "../../assets/img/icon/Balance-Forward.png";
import check_printing from "../../assets/img/icon/Check-Printing.png";
import cost_of_goods from "../../assets/img/icon/Cost-of-Goods-Sold-Reporting.png";
import credit_card from "../../assets/img/icon/Credit-Card-Payment-Support.png";
import credit_notes from "../../assets/img/icon/Credit-Notes.png";
import custom_account_receivable from "../../assets/img/icon/Custom-Accounts-Receivable-Terms.png";
import custom_account_management from "../../assets/img/icon/Customer-Accounts-Management.png";
import eft_support from "../../assets/img/icon/EFT-Support.png";
import email_invoice from "../../assets/img/icon/Email-Invoicing.png";
import envelopes from "../../assets/img/icon/Envelopes.png";
import invoice_creation from "../../assets/img/icon/Invoice-Creation.png";
import invoice_duplication from "../../assets/img/icon/Invoice-Duplication.png";
import pack_slips from "../../assets/img/icon/Pack-Slips.png";
import payment_date from "../../assets/img/icon/Payment-Date-Calculation.png";
import progress_billing from "../../assets/img/icon/Progress-Billing.png";
import promotions_coupons from "../../assets/img/icon/Promotions,-Coupons,-Rebates.png";
import receipts from "../../assets/img/icon/Receipts.png";
import recuring_invoice from "../../assets/img/icon/Recurring-Invoices.png";
import reminders from "../../assets/img/icon/Reminders.png";
import rma_support from "../../assets/img/icon/RMA-Support.png";
import sales_attribution from "../../assets/img/icon/Sales-Attributions.png";
import sales_tax_calculation from "../../assets/img/icon/Sales-Tax-Calculation.png";
import suspicious_payment_alert from "../../assets/img/icon/Suspicious-Payment-Alerts.png";
import vendor_records from "../../assets/img/icon/Vendor-Records-Management.png";

class AccountsSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {accounting_banner} alt={accounting_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'accounts_details_design'}>
                                    SETCOL Accounting management system can describe as a software that records &amp;
                                    processes accounting transactions within functional modules such as accounts payable, accounts
                                    receivable, journal, general ledger, payroll &amp; trial balance. Accounting management system is a web
                                    based software, which is accessed from anywhere at any time with any device. SETCOL
                                    Accounting management system provide its users a user-friendly module to create, manage and
                                    search existing accounts depending on role, users from organizations, universities, federal
                                    agencies, institutes/ centers etc. Service desk staffs are able to access and use the functionality.
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
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {account_holds} alt={account_holds}/>
                            <span>&nbsp;Account-Holds</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {account_payable} alt={account_payable}/>
                            <span>&nbsp;Accounts-Payable-Purchase-Order-Reconciliation</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {ap_document} alt={ap_document}/>
                            <span>&nbsp;AP-Document-Attachment</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {ar_aging} alt={ar_aging}/>
                            <span>&nbsp;AR-Aging-Reports</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {ar_comment} alt={ar_comment}/>
                            <span>&nbsp;AR-Comment-Support</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {balance_forward} alt={balance_forward}/>
                            <span>&nbsp;Balance-Forward</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {check_printing} alt={check_printing}/>
                            <span>&nbsp;Check-Printing</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {cost_of_goods} alt={cost_of_goods}/>
                            <span>&nbsp;Cost-of-Goods-Sold-Reporting</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {credit_card} alt={credit_card}/>
                            <span>&nbsp;Credit-Card-Payment-Support</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {credit_notes} alt={credit_notes}/>
                            <span>&nbsp;Credit-Notes</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {custom_account_receivable} alt={custom_account_receivable}/>
                            <span>&nbsp;Custom-Accounts-Receivable-Terms</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {custom_account_management} alt={custom_account_management}/>
                            <span>&nbsp;Customer-Accounts-Management</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {eft_support} alt={eft_support}/>
                            <span>&nbsp;EFT-Support</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {email_invoice} alt={email_invoice}/>
                            <span>&nbsp;Email-Invoicing</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img src = {envelopes} alt={envelopes}/>
                            <span>&nbsp;Envelopes</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {invoice_creation} alt={invoice_creation}/>
                            <span>&nbsp;Invoice-Creation</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {invoice_duplication} alt={invoice_duplication}/>
                            <span>&nbsp;Invoice-Duplication</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {pack_slips} alt={pack_slips}/>
                            <span>&nbsp;Pack-Slips</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {payment_date} alt={payment_date}/>
                            <span>&nbsp;Payment-Date-Calculation</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {progress_billing} alt={progress_billing}/>
                            <span>&nbsp;Progress-Billing</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {promotions_coupons} alt={promotions_coupons}/>
                            <span>&nbsp;Promotions,-Coupons,-Rebates</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {receipts} alt={receipts}/>
                            <span>&nbsp;Receipts</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {recuring_invoice} alt={recuring_invoice}/>
                            <span>&nbsp;Recurring-Invoices</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {reminders} alt={reminders}/>
                            <span>&nbsp;Reminders</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {rma_support} alt={rma_support}/>
                            <span>&nbsp;RMA-Support</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {sales_attribution} alt={sales_attribution}/>
                            <span>&nbsp;Sales-Attributions</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {sales_tax_calculation} alt={sales_tax_calculation}/>
                            <span>&nbsp;Sales-Tax-Calculation</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {suspicious_payment_alert} alt={suspicious_payment_alert}/>
                            <span>&nbsp;Suspicious-Payment-Alerts</span>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <img className={'icon_feature'} src = {vendor_records} alt={vendor_records}/>
                            <span>&nbsp;Vendor-Records-Management</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountsSection;