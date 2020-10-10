import React,{Component} from 'react';
import inventory_banner from "../../assets/img/products/inventory_banner.png";
import advance_payment from "../../assets/img/icon/Advance-Payment-Scheduling.png";
import barcode from "../../assets/img/icon/Barcoding-&-Tagging.png";
import cloud_based from "../../assets/img/icon/Cloud-Based-Software-with-Real-Time-Updates.png";
import inventory_app from "../../assets/img/icon/Inventory-App-Integration-with-Other-Systems.png";
import inventory_forcasting from "../../assets/img/icon/Inventory-Forecasting.png";
import inventory_management from "../../assets/img/icon/Inventory-Management.png";
import inventory_security from "../../assets/img/icon/Inventory-Security-and-Backups.png";
import inventory_tracking from "../../assets/img/icon/Inventory-Tracking.png";
import iot from "../../assets/img/icon/IoT-Integration.png";
import reporting from "../../assets/img/icon/Reporting-Tools.png";

class InventorySection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {inventory_banner} alt={inventory_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'inventory_details_design'}>
                                    SETCOL Inventory management system is most essential part for not only medium to large
                                    enterprise business but also for growing up small businesses. This software ensure customers to
                                    maintain minimum stocks in their inventory and ensures the smooth operation of the business.
                                    As mismanaged inventory means disappointed customers and uncontrolled inventory means too
                                    much cash to be tied up in warehouse with slower sales. Other factors like quicker production
                                    cycles, a proliferation of products, multi-vendor product and the nature of the big box store
                                    makes necessary to have an inventory management system. System must have the ability to track
                                    sales and available inventory, communicate with suppliers in near-time and receive and
                                    incorporate other data such as seasonal demand or trend. Our inventory management system will
                                    ensure your time of order placement and purchase time.
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
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {advance_payment} alt={advance_payment}/></div><br/>
                            <h6>Advance Payment Scheduling</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {barcode} alt={barcode}/></div><br/>
                            <h6>Barcoding & Tagging</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {cloud_based} alt={cloud_based}/></div><br/>
                            <h6>Cloud Based Software With Real Time Updates</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {inventory_app} alt={inventory_app}/></div><br/>
                            <h6>Inventory App Integration With Other Systems</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {inventory_forcasting} alt={inventory_forcasting}/></div><br/>
                            <h6>Inventory Forecasting</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {inventory_management} alt={inventory_management}/></div><br/>
                            <h6>Inventory Management</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {inventory_security} alt={inventory_security}/></div><br/>
                            <h6>Inventory Security & Backups</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {inventory_tracking} alt={inventory_tracking}/></div><br/>
                            <h6>Inventory Tracking</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {iot} alt={iot}/></div><br/>
                            <h6>IoT Integration</h6>
                        </div>
                        <div className = {'col-md-3 inventory_feature_margin'}>
                            <div><img className={'icon_feature'} src = {reporting} alt={reporting}/></div><br/>
                            <h6>Reporting Tools</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default InventorySection;