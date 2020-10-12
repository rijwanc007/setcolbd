import React,{Component} from 'react';
import facebook from '../../assets/img/icon/facebook.png';
import instragram from '../../assets/img/icon/instagram.png';
import linkedin from '../../assets/img/icon/linkedin.png';
import pinterest from '../../assets/img/icon/pinterest.png';
import twiter from '../../assets/img/icon/twiter.png';


class SocialMedia extends Component{
    render(){
        return(
            <div>
                <div id="fixed-social">
                    <div><a href="https://www.twitter.com/setcolbd/" className="fixed-twitter" ><img src={twiter} alt="twiter"/><span>Twitter</span></a></div>
                    <div><a href="https://www.facebook.com/setcolbd/" className="fixed-facebook" target="_blank"><img src={facebook} alt="facebook"/><span>Facebook</span></a></div>
                    <div><a href="https://www.instagram.com/setcolbd/" className="fixed-instagrem" target="_blank"><img src={instragram} alt="twiter"/><span>Instragram</span></a></div>
                    <div><a href="https://www.linkedin.com/company/setcolbd/" className="fixed-linkedin" target="_blank"><img src={linkedin} alt="facebook"/><span>Linkedin</span></a></div>
                    <div><a href="https://www.pinterest.com/setcolbd/" className="fixed-pinterest" target="_blank"><img src={pinterest} alt="pinterest"/><span>Pinterest</span></a></div>
                </div>
            </div>
        )
    }
}

export default SocialMedia;