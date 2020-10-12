import React,{Component} from 'react';
import a_to_z from '../../assets/img/portfolio/a-to-z-visa-solution.jpg';
import boat from '../../assets/img/portfolio/boat.me.jpg';
import charter from '../../assets/img/portfolio/charter.boat.jpg';
import dream_lpg from '../../assets/img/portfolio/dream-lpg.jpg';
import dream_world from '../../assets/img/portfolio/dream-world-corporation.jpg';
import hinoli from '../../assets/img/portfolio/hinoli.jpg';
import mother_lift from '../../assets/img/portfolio/motherlift.jpg';
import needboat from '../../assets/img/portfolio/needboat.jpg';
import rongkori from '../../assets/img/portfolio/rongkori.jpg';
import ruhi from '../../assets/img/portfolio/ruhi.jpg';
import vmc from '../../assets/img/portfolio/vmc.jpg';
import ecommerce from '../../assets/img/portfolio/setcolbd-ecommerce.jpg';


class Portfolio extends Component{
    render(){
        return(
            <div id="portfolio">
                <div className='container'>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Our <span className="text-info">Portfolio</span></h2>
                        </div>
                    </div>
                </div>
                <div className='row text-center'>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "https://www.a2zvisasolutionltd.co.uk/" target = "_blank"><img src={a_to_z} alt={a_to_z}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "https://boat.me/" target = "_blank"><img src={boat} alt={boat}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "https://charter.needboat.com/" target = "_blank"><img src={charter} alt={charter}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://dreamlpg.com/" target = "_blank"><img src={dream_lpg} alt={dream_lpg}/></a></div>
                </div><br/>
                <div className='row text-center'>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://www.dreamworldbd.com/" target = "_blank"><img src={dream_world} alt={dream_world}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://hinoli.com/" target = "_blank"><img src={hinoli} alt={hinoli}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://setcolbd.com/motherlifts/" target = "_blank"><img src={mother_lift} alt={mother_lift}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "https://needboat.com/" target = "_blank"><img src={needboat} alt={needboat}/></a></div>
                </div>
                    <br/>
                <div className='row text-center'>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://rongkori.xyz/" target = "_blank"><img src={rongkori} alt={rongkori}/></a></div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <img src={ruhi} alt='a_to_z'/>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3">
                        <img src={vmc} alt='a_to_z'/>
                    </div>
                    <div className="col-xs-12 col-sm-3 col-md-3"><a href = "http://setcolbd.xyz/ecommerce/" target = "_blank"><img src={ecommerce} alt={ecommerce}/></a></div>
                </div>
                </div>
            </div>
        )
    }
}

export default Portfolio;