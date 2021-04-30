import React,{ Component,Suspense,lazy} from 'react';
import {render} from 'react-dom';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import './assets/css/custom.css';

import ScrollHandling from './component/include/ScrollHandling';
const Dashboard = lazy(() => import('./component/pages/Dashboard'));
const WebApplication = lazy(() => import('./component/pages/WebApplication'));
const MobileApplication = lazy(() => import('./component/pages/MobileApplication'));
const QATesting = lazy(() => import('./component/pages/QA-&-Testing'));
const GraphicsSolution = lazy(() => import('./component/pages/GraphicsSolution'));
const SEODigitalMarketing = lazy(() => import('./component/pages/SEO-&-DigitalMarketing'));
const OnlineDataSecurity = lazy(() => import('./component/pages/OnlineDataSecurity'));
const ERP = lazy(() => import('./component/pages/ERP'));
const Accounts = lazy(() => import('./component/pages/Accounts'));
const Inventory = lazy(() => import('./component/pages/Inventory'));
const SalesAndDistribution = lazy(() => import('./component/pages/SalesAndDistribution'));
const CRM = lazy(() => import('./component/pages/CRM'));
const HRAndPayroll = lazy(() => import('./component/pages/HRAndPayroll'));
const ECommerce = lazy(() => import('./component/pages/ECommerce'));
const BookingAndReservation = lazy(() => import('./component/pages/BookingAndReservation'));
const VirtualClassroom = lazy(() => import('./component/pages/VirtualClassroom'));
const Career = lazy(() => import('./component/pages/Career'));

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
