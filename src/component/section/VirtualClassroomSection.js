import React,{Component} from 'react';
import virtual_class_room_banner from "../../assets/img/products/virtual-classroom_banner.png";
import affordable from "../../assets/img/icon/Affordable-and-Scalable.png";
import easy from "../../assets/img/icon/Easy-to-Deliver-Online-Courses.PNG";
import effective from "../../assets/img/icon/Effective-to-Keep-Your-Students'-Minds-Synced.png";
import flexible from "../../assets/img/icon/Flexible-to-Make-Your-Own-Virtual-Classroom.png";
import possible from "../../assets/img/icon/Possible-to-Achieve-Further-Improvement.png";

class VirtualClassroomSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {virtual_class_room_banner} alt={virtual_class_room_banner}/>
                    </div>
                </div>
                <div className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'virtual_class_details_design'}>
                                    Virtual Classroom is equipped with electronic devices that have supporting software to
                                    improve and facilitate teaching methods. However, it is often seen that significant class may
                                    face interruption due to lack of enrich lecture sheets/ course tools, assigning assignments and
                                    getting back assignments from students, publishing class test result waste a lot of time. And
                                    sometime some students do not get the important notice, sheets, assignments, exam date and
                                    results for their absence. For the lack of time parents cannot track their children’s result and
                                    attendance.
                                    Therefore, to overcome those problems a feasible system is created in this thesis project that will
                                    have no physical intervention from teachers and students. Thus, the system will facilitate the
                                    smooth running of the scheduled classes at our university, and minimize time loss. Parents also
                                    can track their children. And most essential parts of using virtual classroom is to manage and
                                    continue class from home during any disaster or any pandemic situation.
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
                        <div className = {'col-md-3 virtual_class_feature_design'}>
                            <img className={'icon_feature'} src = {affordable} alt={affordable}/>
                            <span>&nbsp;Affordable-and-Scalable</span>
                        </div>
                        <div className = {'col-md-3 virtual_class_feature_design'}>
                            <img className={'icon_feature'} src = {easy} alt={easy}/>
                            <span>&nbsp;Easy-to-Deliver-Online-Courses</span>
                        </div>
                        <div className = {'col-md-3 virtual_class_feature_design'}>
                            <img className={'icon_feature'} src = {effective} alt={effective}/>
                            <span>&nbsp;Effective-to-Keep-Your-Students'-Minds-Synced</span>
                        </div>
                        <div className = {'col-md-3 virtual_class_feature_design'}>
                            <img className={'icon_feature'} src = {flexible} alt={flexible}/>
                            <span>&nbsp;Flexible-to-Make-Your-Own-Virtual-Classroom</span>
                        </div>
                        <div className = {'col-md-3 virtual_class_feature_design'}>
                            <img className={'icon_feature'} src = {possible} alt={possible}/>
                            <span>&nbsp;Possible-to-Achieve-Further-Improvement</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VirtualClassroomSection;