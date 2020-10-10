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
                <div className={'container text-center'}>
                    <div className={'row'}>
                        <div className = "col-md-12 col-sm-12 col-xl-12">
                            <div className="section-headline">
                                <h2>Feature <span className="text-info">'s</span></h2>
                            </div>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {account_holds} alt={account_holds}/></div><br/>
                            <h6>Account Holds</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {account_payable} alt={account_payable}/></div><br/>
                            <h6>Accounts Payable Purchase Order Reconciliation</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ap_document} alt={ap_document}/></div><br/>
                            <h6>AP Document Attachment</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ar_aging} alt={ar_aging}/></div><br/>
                            <h6>AR Aging Reports</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {ar_comment} alt={ar_comment}/></div><br/>
                            <h6>AR Comment Support</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {balance_forward} alt={balance_forward}/></div><br/>
                            <h6>Balance Forward</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {check_printing} alt={check_printing}/></div><br/>
                            <h6>Check Printing</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {cost_of_goods} alt={cost_of_goods}/></div><br/>
                            <h6>Cost of Goods Sold Reporting</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {credit_card} alt={credit_card}/></div><br/>
                            <h6>Credit Card Payment Support</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {credit_notes} alt={credit_notes}/></div><br/>
                            <h6>Credit Notes</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {custom_account_receivable} alt={custom_account_receivable}/></div><br/>
                            <h6>Custom Accounts Receivable Terms</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {custom_account_management} alt={custom_account_management}/></div><br/>
                            <h6>Customer Accounts Management</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {eft_support} alt={eft_support}/></div><br/>
                            <h6>EFT Support</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {email_invoice} alt={email_invoice}/></div><br/>
                            <h6>Email Invoicing</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {envelopes} alt={envelopes}/></div><br/>
                            <h6>Envelopes</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {invoice_creation} alt={invoice_creation}/></div><br/>
                            <h6>Invoice Creation</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {invoice_duplication} alt={invoice_duplication}/></div><br/>
                            <h6>Invoice Duplication</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {pack_slips} alt={pack_slips}/></div><br/>
                            <h6>Pack Slips</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {payment_date} alt={payment_date}/></div><br/>
                            <h6>Payment Date Calculation</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {progress_billing} alt={progress_billing}/></div><br/>
                            <h6>Progress Billing</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {promotions_coupons} alt={promotions_coupons}/></div><br/>
                            <h6>Promotions,Coupons,Rebates</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {receipts} alt={receipts}/></div><br/>
                            <h6>Receipts</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {recuring_invoice} alt={recuring_invoice}/></div><br/>
                            <h6>Recurring Invoices</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {reminders} alt={reminders}/></div><br/>
                            <h6>Reminders</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {rma_support} alt={rma_support}/></div><br/>
                            <h6>RMA Support</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {sales_attribution} alt={sales_attribution}/></div><br/>
                            <h6>Sales Attributions</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {sales_tax_calculation} alt={sales_tax_calculation}/></div><br/>
                            <h6>Sales Tax Calculation</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {suspicious_payment_alert} alt={suspicious_payment_alert}/></div><br/>
                            <h6>Suspicious Payment Alerts</h6>
                        </div>
                        <div className = {'col-md-3 accounts_feature_margin'}>
                            <div><img className={'icon_feature'} src = {vendor_records} alt={vendor_records}/></div><br/>
                            <h6>Vendor Records Management</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AccountsSection;