import React,{Component} from 'react';
import axios from 'axios'
import Swal from 'sweetalert2';
import career_banner from "../../assets/img/career/career_banner.png";
import  {API_BASE_URL}  from '../include/config'

class CareerSection extends Component{
    constructor(props) {
        super(props);
        this.state = {
            position: '',
            email: '',
            cv: '',
        };
        this.getPosition = this.getPosition.bind(this);
        this.getEmail = this.getEmail.bind(this);
        this.getCV = this.getCV.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    getPosition = (e) => {
        this.setState({
            position: e.target.value
        })
    };
    getEmail = (e) => {
        this.setState({
            email: e.target.value
        })
    };
    getCV = (e) => {
        this.setState({
            cv: e.target.files[0]
        })
    };
    onSubmit() {
        const career = new FormData();
        career.append('position', this.state.position);
        career.append('email', this.state.email);
        career.append('cv', this.state.cv);
        axios.post(API_BASE_URL + '/career', career)
            .then(res => {
                this.setState({
                    position: '',
                    email: '',
                });
                Swal.fire(
                    'Career!',
                    res.data,
                    'success'
                );
            })
            .catch(function(error) {
                if (error.response) {
                    Swal.fire(
                        'Cancel!',
                        'Something Is Wrong.Please Fill Up Every Field & PDF File Upload',
                        'error'
                    )
                }
            });
    }
    render(){
        return(
            <div>
                <div className = "row">
                    <div className = "col-md-12 col-sm-12 col-xl-12">
                        <img className = {'services_banner img-responsive'} src = {career_banner} alt={career_banner}/>
                    </div>
                </div>
                <div  className = "footer-area">
                    <div className = "container">
                        <div className = "row">
                            <div className = "col-md-12 col-sm-12 col-xl-12">
                                <div className="section-headline text-center">
                                    <h2>Job <span className="text-info">'s</span></h2>
                                </div>
                                <p className={'career_details_design'}>Skies Engineering & Technologies Company is looking for some Hardworking, Punctual & Challenging People. But opportunity is limited. So apply now and grab your position for better tomorrow.</p>
                            </div>
                            <div className = "col-md-6 col-sm-6 col-xl-6 text-center">
                                <div className="form-group">
                                    <label htmlFor="select_position"><h4 className={'text-info'}>Position ::</h4></label>
                                    <select className="form-control" id="select_position" value={this.state.position} onChange={this.getPosition} required>
                                        <option selected disabled value="">Choose An Option</option>
                                        <option value="Frontend Developer">Frontend Developer</option>
                                        <option value="Backend Developer">Backend Developer</option>
                                        <option value="App Developer">App Developer</option>
                                        <option value="UX/UI Designer">UX/UI Designer</option>
                                        <option value="SEO & Digital Marketer">SEO & Digital Marketer</option>
                                        <option value="HR & Admin">HR & Admin</option>
                                        <option value="Business Development">Business Development</option>
                                        <option value="Software Sells & Marketing">Software Sale's & Marketing</option>
                                        <option value="Project Manager">Project Manager</option>
                                        <option value="Content Writer">Content Writer</option>
                                    </select>
                                </div>
                            </div>
                            <div className = "col-md-6 col-sm-6 col-xl-6 text-center">
                                <div className="form-group">
                                    <label htmlFor="select_position"><h4 className={'text-info'}>Email ::</h4></label>
                                    <input type="email" className = "form-control" value={this.state.email} onChange={this.getEmail} placeholder="enter your email address" required/>
                                </div>
                            </div>
                            <div className = "col-md-12 col-sm-12 col-xl-12 text-center">
                                <div><input type="file" style={{height:'44px'}} className = "form-control" ref={'cv'} onChange={this.getCV} placeholder="enter your cv in pdf format" required/></div><br/>
                                <div><input type={'submit'} className={'btn btn-info btn-block'} value={'Apply'} onClick={()=>this.onSubmit()} /></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CareerSection;