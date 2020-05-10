import React,{Component} from 'react';


class Subscribe extends Component{
    render(){
        return(
            <div>
                <div className="suscribe-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs=12 text-center">
                                <div className="suscribe-text"><h3>Welcome to SETCOLBD,Please Subscribe us</h3></div>
                                <div><input type="text" className = "form-control" placeholder="enter your valid email"/></div><br/>
                                <div><button className="btn btn-info">Subscribe</button></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Subscribe;