import React,{Component} from 'react';
import a_to_z from '../../../public/assets/img/portfolio/a-to-z-visa-solution.jpg';
import boat from '../../../public/assets/img/portfolio/boat.me.jpg';
import charter from '../../../public/assets/img/portfolio/charter.boat.jpg';
import dream_lpg from '../../../public/assets/img/portfolio/dream-lpg.jpg';
import dream_world from '../../../public/assets/img/portfolio/dream-world-corporation.jpg';
import hinoli from '../../../public/assets/img/portfolio/hinoli.jpg';
import mother_lift from '../../../public/assets/img/portfolio/motherlift.jpg';
import needboat from '../../../public/assets/img/portfolio/needboat.jpg';
import rongkori from '../../../public/assets/img/portfolio/rongkori.jpg';
import ruhi from '../../../public/assets/img/portfolio/ruhi.jpg';
import vmc from '../../../public/assets/img/portfolio/vmc.jpg';


class Portfolio extends Component{
    render(){
        return(
            <div>
                <div className='container'>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Our <span className="text-info">Portfolio</span></h2>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={a_to_z} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={boat} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={charter} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={dream_lpg} alt='a_to_z'/>
                    </div>
                </div>
                    <br/>
                <div className='row'>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={dream_world} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={hinoli} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={mother_lift} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={needboat} alt='a_to_z'/>
                    </div>
                </div>
                    <br/>
                <div className='row'>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={rongkori} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={ruhi} alt='a_to_z'/>
                    </div>
                    <div className="col-md-3 col-sm-3 col-xs-3">
                        <img src={vmc} alt='a_to_z'/>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}


export default Portfolio;