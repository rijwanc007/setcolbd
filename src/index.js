import React,{ Component/*,Suspense, lazy*/ } from 'react';
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

import './assets/lib/bootstrap/js/bootstrap.min.js';
import './assets/lib/knob/jquery.knob.js';
import './assets/lib/nivo-slider/js/jquery.nivo.slider.js';
import './assets/lib/appear/jquery.appear.js';

import loadable from 'react-loadable';

import ScrollHandling from './component/include/ScrollHandling';
const Dashboard = loadable({
    loader : () => import('./component/pages/Dashboard'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const WebApplication = loadable({
    loader : () => import('./component/pages/WebApplication'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const MobileApplication = loadable({
    loader : () => import('./component/pages/MobileApplication'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const QATesting = loadable({
    loader : () => import('./component/pages/QA-&-Testing'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const GraphicsSolution = loadable({
    loader : () => import('./component/pages/GraphicsSolution'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const SEODigitalMarketing = loadable({
    loader : () => import('./component/pages/SEO-&-DigitalMarketing'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const OnlineDataSecurity = loadable({
    loader : () => import('./component/pages/OnlineDataSecurity'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const ERP = loadable({
    loader : () => import('./component/pages/ERP'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const Accounts = loadable({
    loader : () => import('./component/pages/Accounts'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const Inventory = loadable({
    loader : () => import('./component/pages/Inventory'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const SalesAndDistribution = loadable({
    loader : () => import('./component/pages/SalesAndDistribution'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const CRM = loadable({
    loader : () => import('./component/pages/CRM'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const HRAndPayroll = loadable({
    loader : () => import('./component/pages/HRAndPayroll'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const ECommerce = loadable({
    loader : () => import('./component/pages/ECommerce'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const BookingAndReservation = loadable({
    loader : () => import('./component/pages/BookingAndReservation'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const VirtualClassroom = loadable({
    loader : () => import('./component/pages/VirtualClassroom'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});
const Career = loadable({
    loader : () => import('./component/pages/Career'),
    loading : () => <div className={'text-info'}> Loading...... </div>,
});

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
