import React,{ Component,Suspense} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';
import './assets/lib/appear/jquery.appear.js';

import ScrollHandling from './component/include/ScrollHandling';
const Dashboard = React.lazy(() => import('./component/pages/Dashboard'));
const WebApplication = React.lazy(() => import('./component/pages/WebApplication'));
const MobileApplication = React.lazy(() => import('./component/pages/MobileApplication'));
const QATesting = React.lazy(() => import('./component/pages/QA-&-Testing'));
const GraphicsSolution = React.lazy(() => import('./component/pages/GraphicsSolution'));
const SEODigitalMarketing = React.lazy(() => import('./component/pages/SEO-&-DigitalMarketing'));
const OnlineDataSecurity = React.lazy(() => import('./component/pages/OnlineDataSecurity'));
const ERP = React.lazy(() => import('./component/pages/ERP'));
const Accounts = React.lazy(() => import('./component/pages/Accounts'));
const Inventory = React.lazy(() => import('./component/pages/Inventory'));
const SalesAndDistribution = React.lazy(() => import('./component/pages/SalesAndDistribution'));
const CRM = React.lazy(() => import('./component/pages/CRM'));
const HRAndPayroll = React.lazy(() => import('./component/pages/HRAndPayroll'));
const ECommerce = React.lazy(() => import('./component/pages/ECommerce'));
const BookingAndReservation = React.lazy(() => import('./component/pages/BookingAndReservation'));
const VirtualClassroom = React.lazy(() => import('./component/pages/VirtualClassroom'));
const Career = React.lazy(() => import('./component/pages/Career'));

class LandingPage extends Component{
    render(){
        return(
            <div>
                <ScrollHandling>
                <Suspense fallback={<div className={'text-info'}>Loading...</div>}>
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
                </Suspense>
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
