import React,{Component} from 'react';
import qa_testing from "../../assets/img/services/qa-testing.png";


class QATestingSection extends Component{
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {qa_testing} alt={qa_testing}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className={'container'}>
                        <div className={'row'}>
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Detail <span className="text-info">'s</span></h2>
                                </div>
                            </div>
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <p className={'qa_testing_details_design'}>
                                    Testing refers as the process of evaluating a system or its component’s with the intent to find whether it satisfies the specified requirements or not.
                                    Testing execute a system in order to identify any gaps, errors or missing requirements.
                                    Test Strategy is also known as test approach defines how testing would be carried out. Test approach has two techniques:
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default QATestingSection;