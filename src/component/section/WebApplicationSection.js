import React,{Component} from 'react';
import web_application from '../../assets/img/services/web-application.png';

class WebApplicationSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img src = {web_application}/>
                    </div>
                </div>
                <div  className = "footer-area">
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Detail <span className="text-info">'s</span></h2>
                        </div>
                    </div>
                </div>
                <div className = "container">
                    <div className = "row">
                        <div className = "col-md-6 col-sm-6 col-xl-6">
                            Web-based applications, which are built to serve a specific use and customer base; and can be accessed from desktops, laptops, and even mobiles.You can create web-based applications that are mobile responsive and market them on specific market places such as world-wide. You can also host these web-based applications on your website to help your customers tackle a problem or complete a task. For instance, let’s assume your company sells insurance policies. You could create a custom application such as a tax calculator, which will calculate the tax savings of users who want to take a certain policy. Customers can download these applications and use them when they want, with or without an internet connection. You need to develop a web-based application if it helps your customers complete a task they perform on a daily basis. Web-based applications bring in new customers onboard as they sign-up or download these applications. It also helps in retaining existing customers, while positioning you as a thought leader in the industry.
                        </div>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default WebApplicationSection;