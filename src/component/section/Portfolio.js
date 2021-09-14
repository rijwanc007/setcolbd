import React,{Component} from 'react';
import public_market from '../../assets/img/portfolio/public-market.webp';
import dream_point from '../../assets/img/portfolio/dreams-point.webp';
import charter_need_boat from '../../assets/img/portfolio/charter.needboat.webp';
import cleaning from '../../assets/img/portfolio/cleaning.webp';

import deshi from '../../assets/img/portfolio/deshi.webp';
import mabco from '../../assets/img/portfolio/mabco.webp';
import dream_lpg from '../../assets/img/portfolio/dream-lpg.webp';
import dream_world from '../../assets/img/portfolio/dream-world-corporation.webp';


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
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://publicmarket.bikroybondhu.xyz/" target = "_blank"><img src={public_market} alt={public_market}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://dreamspointbd.com/" target = "_blank"><img src={dream_point} alt={dream_point}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://charter.needboat.com/" target = "_blank"><img src={charter_need_boat} alt={charter_need_boat}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://tubabd.xyz/cleaner/" target = "_blank"><img src={cleaning} alt={cleaning}/></a></div>
                    </div><br/>
                    <div className='row text-center'>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://bangladeshifoods.com.bd/" target = "_blank"><img src={deshi} alt={deshi}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://mabcolaboratories.com/" target = "_blank"><img src={mabco} alt={mabco}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://dreamlpg.com/" target = "_blank"><img src={dream_lpg} alt={dream_lpg}/></a></div>
                        <div className="col-xs-12 col-sm-2 col-md-3"><a href = "http://www.dreamworldbd.com/" target = "_blank"><img src={dream_world} alt={dream_world}/></a></div>
                    </div><br/>
                </div>
            </div>
        )
    }
}

export default Portfolio;