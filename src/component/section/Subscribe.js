import React,{Component} from 'react';
import axios from "axios";
import Swal from 'sweetalert2';
import  {API_BASE_URL}  from '../include/config'


class Subscribe extends Component{
    constructor(props) {
        super(props);
        this.state = {
            subscriber: ''
        };
        this.getSubscriber = this.getSubscriber.bind(this);
    }
    getSubscriber = (e) => {
        this.setState({
            subscriber: e.target.value
        })
    };
    onSubmit = (e) => {
        e.preventDefault();
        const subscriber = {
            subscriber: this.state.subscriber
        };
        axios.post(API_BASE_URL + '/subscriber/', subscriber)
            .then(res => {
                this.setState({
                    subscriber: ''
                });
                Swal.fire(
                    'Subscription!',
                    res.data,
                    'success'
                )
            })
            .catch(function(error) {
                if (error.response) {
                    Swal.fire(
                        'Cancel!',
                        'Only Upload PDF file',
                        'error'
                    )
                }
            });
        };
        render(){
        return(
            <div>
                <div className="suscribe-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12 text-center">
                                <form onSubmit={this.onSubmit}>
                                <div className="suscribe-text"><h3>Welcome to SETCOLBD,Please Subscribe us</h3></div>
                                <div><input type="email" className = "form-control" value={this.state.subscriber} onChange={this.getSubscriber} placeholder="enter your valid email" required/></div><br/>
                                <div><input type="submit" className="btn btn-info" value="Subscribe"/></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Subscribe;