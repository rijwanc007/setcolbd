import React,{Component} from 'react';
import facebook from '../../../public/assets/img/icon/facebook.png';
import instragram from '../../../public/assets/img/icon/instagram.png';
import linkedin from '../../../public/assets/img/icon/linkedin.png';
import pinterest from '../../../public/assets/img/icon/pinterest.png';
import twiter from '../../../public/assets/img/icon/twiter.png';


class SocialMedia extends Component{
    render(){
        return(
            <div>
                <div id="fixed-social">
                    <div>
                        <a href="#" className="fixed-twitter" target="_blank"><img src={twiter} alt="twiter"/>
                            <span>Twitter</span></a>
                    </div>
                    <div>
                        <a href="#" className="fixed-facebook" target="_blank"><img src={facebook} alt="facebook"/>
                            <span>Facebook</span></a>
                    </div>
                    <div>
                        <a href="#" className="fixed-twitter" target="_blank"><img src={instragram} alt="twiter"/>
                            <span>Twitter</span></a>
                    </div>
                    <div>
                        <a href="#" className="fixed-facebook" target="_blank"><img src={linkedin} alt="facebook"/>
                            <span>Facebook</span></a>
                    </div>
                    <div>
                        <a href="#" className="fixed-twitter" target="_blank"><img src={pinterest} alt="twiter"/>
                            <span>Twitter</span></a>
                    </div>
                </div>
            </div>
        )
    }
}


export default SocialMedia;