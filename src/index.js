import React,{ Component } from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
import './assets/lib/nivo-slider/css/nivo-slider.css';
import './assets/lib/animate/animate.min.css';
import './assets/css/nivo-slider-theme.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';
import './assets/css/review.css';

import $ from "jquery";

import './assets/lib/bootstrap/js/bootstrap.min.js';
import './assets/lib/knob/jquery.knob.js';
import './assets/lib/nivo-slider/js/jquery.nivo.slider.js';
import './assets/lib/appear/jquery.appear.js';

import ScrollHandling from './component/include/ScrollHandling';
import Dashboard from './component/pages/Dashboard';
import WebApplication from './component/pages/WebApplication';
import MobileApplication from './component/pages/MobileApplication';
import QATesting from './component/pages/QA-&-Testing';
import GraphicsSolution from './component/pages/GraphicsSolution';
import SEODigitalMarketing from './component/pages/SEO-&-DigitalMarketing';
import OnlineDataSecurity from './component/pages/OnlineDataSecurity';
import ERP from './component/pages/ERP';
import Accounts from './component/pages/Accounts';
import Inventory from './component/pages/Inventory';
import SalesAndDistribution from './component/pages/SalesAndDistribution';
import CRM from './component/pages/CRM';
import HRAndPayroll from './component/pages/HRAndPayroll';
import ECommerce from './component/pages/ECommerce';
import BookingAndReservation from './component/pages/BookingAndReservation';
import VirtualClassroom from './component/pages/VirtualClassroom';
import Career from './component/pages/Career';

class LandingPage extends Component{
    render(){
        return(
            <div>
                <ScrollHandling>
                <Switch>
                    <Route exact path="/" component={Dashboard}/>
                    <Route path="/web_application" component={WebApplication}/>
                    <Route path="/mobile_application" component={MobileApplication}/>
                    <Route path="/qa_&_testing" component={QATesting}/>
                    <Route path="/graphics_solution" component={GraphicsSolution}/>
                    <Route path="/seo_&_digital_marketing" component={SEODigitalMarketing}/>
                    <Route path="/online_data_security" component={OnlineDataSecurity}/>
                    <Route path="/erp" component={ERP}/>
                    <Route path="/accounts" component={Accounts}/>
                    <Route path="/inventory" component={Inventory}/>
                    <Route path="/sales_&_distribution" component={SalesAndDistribution}/>
                    <Route path="/crm" component={CRM}/>
                    <Route path="/hr_&_payroll" component={HRAndPayroll}/>
                    <Route path="/e_commerce" component={ECommerce}/>
                    <Route path="/booking_&_reservation" component={BookingAndReservation}/>
                    <Route path="/virtual_class_room" component={VirtualClassroom}/>
                    <Route path="/career" component={Career}/>
                </Switch>
                </ScrollHandling>
            </div>
        )
    }
}
class LandingPageRouting extends Component{
    render(){
        return(
            <div>
                <Router>
                    <Route component={LandingPage}/>
                </Router>
            </div>
        )
    }
}

render(<LandingPageRouting/>,document.getElementById('root'));
