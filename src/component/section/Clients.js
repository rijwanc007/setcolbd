import React,{Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import grameenphone from '../../assets/img/clients_partners/grameenphone.png';
import airtel from '../../assets/img/clients_partners/airtel.png';
import banglalink from '../../assets/img/clients_partners/banglalink.png';
import robi from '../../assets/img/clients_partners/rob.png';
import ranksteel from '../../assets/img/clients_partners/ranksteel.png';
import clicktect from '../../assets/img/clients_partners/clicktech.png';
import sattar from '../../assets/img/clients_partners/sattar.png';
import donuts from '../../assets/img/clients_partners/my-donuts.png';
import needboat from '../../assets/img/clients_partners/needboat.png';
import vmc from '../../assets/img/clients_partners/VMC.png';
import boat from '../../assets/img/clients_partners/boat.me.png';
import dream_lpg from '../../assets/img/clients_partners/dream-lpg.png';
import dream_energy from '../../assets/img/clients_partners/dream-energy.png';
import dream_lpg_convertion from '../../assets/img/clients_partners/dream-lpg-convertion.png';
import dream_steel from '../../assets/img/clients_partners/dream-steel.png';
import dream_world from '../../assets/img/clients_partners/dream-world.png';
import laila_group from '../../assets/img/clients_partners/laila-group.png';
import ruhi from '../../assets/img/clients_partners/ruhi.png';
import rongkori from '../../assets/img/clients_partners/rongkori.png';
import gk_business from '../../assets/img/clients_partners/gk-business.png';
import atoz from '../../assets/img/clients_partners/atoz.png';
import bright_agro from '../../assets/img/clients_partners/bright-agro.png';
import bs from '../../assets/img/clients_partners/bs.png';
import empire_carpet from '../../assets/img/clients_partners/empire-carpet.png';
import irish_dental from '../../assets/img/clients_partners/irish-dental.png';
import lahari from '../../assets/img/clients_partners/lahari.png';
import mother_lift from '../../assets/img/clients_partners/mother-lift.png';
import national_training_institute from '../../assets/img/clients_partners/national-training-institute.png';
import noli from '../../assets/img/clients_partners/noli.png';
import nvf from '../../assets/img/clients_partners/NVF.png';
import pixel_eng from '../../assets/img/clients_partners/pixel-eng.png';


class Clients extends Component{
    render() {
        return(
            <div style={{backgroundColor:"#f5f5f5"}}>
                <br/>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Our Clients <span className="text-info">&</span> Partners</h2>
                        </div>
                    </div>
                </div>
                <InfiniteCarousel
                    breakpoints={[
                        {
                            breakpoint: 500,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                            },
                        },
                    ]}
                    autoCycle={true}
                    dots={false}
                    showSides={true}
                    sidesOpacity={.5}
                    sideSize={.1}
                    slidesToScroll={1}
                    slidesToShow={8}
                    scrollOnDevice={true}
                    animationDuration={300}
                >
                    <div><img style={{width:'90px'}} src={grameenphone} alt=''/></div>
                    <div><img style={{width:'90px'}} src={airtel} alt=''/></div>
                    <div><img style={{width:'90px'}} src={banglalink} alt=''/></div>
                    <div><img style={{width:'90px'}} src={robi} alt=''/></div>
                    <div><img style={{width:'90px'}} src={ranksteel} alt=''/></div>
                    <div><img style={{width:'90px'}} src={clicktect} alt=''/></div>
                    <div><img style={{width:'90px'}} src={sattar} alt=''/></div>
                    <div><img style={{width:'90px'}} src={donuts} alt=''/></div>
                    <div><img style={{width:'90px'}} src={needboat} alt=''/></div>
                    <div><img style={{width:'90px'}} src={vmc} alt=''/></div>
                    <div><img style={{width:'90px'}} src={boat} alt=''/></div>
                    <div><img style={{width:'90px'}} src={dream_lpg} alt=''/></div>
                    <div><img style={{width:'90px'}} src={dream_energy} alt=''/></div>
                    <div><img style={{width:'90px'}} src={dream_lpg_convertion} alt=''/></div>
                    <div><img style={{width:'90px'}} src={dream_steel} alt=''/></div>
                    <div><img style={{width:'90px'}} src={dream_world} alt=''/></div>
                    <div><img style={{width:'90px'}} src={laila_group} alt=''/></div>
                    <div><img style={{width:'90px'}} src={ruhi} alt=''/></div>
                    <div><img style={{width:'90px'}} src={rongkori} alt=''/></div>
                    <div><img style={{width:'90px'}} src={gk_business} alt=''/></div>
                    <div><img style={{width:'90px'}} src={atoz} alt=''/></div>
                    <div><img style={{width:'90px'}} src={bright_agro} alt=''/></div>
                    <div><img style={{width:'90px'}} src={bs} alt=''/></div>
                    <div><img style={{width:'90px'}} src={empire_carpet} alt=''/></div>
                    <div><img style={{width:'90px'}} src={irish_dental} alt=''/></div>
                    <div><img style={{width:'90px'}} src={lahari} alt=''/></div>
                    <div><img style={{width:'90px'}} src={mother_lift} alt=''/></div>
                    <div><img style={{width:'90px'}} src={national_training_institute} alt=''/></div>
                    <div><img style={{width:'90px'}} src={noli} alt=''/></div>
                    <div><img style={{width:'90px'}} src={nvf} alt=''/></div>
                    <div><img style={{width:'90px'}} src={pixel_eng} alt=''/></div>
                </InfiniteCarousel>
                <br/>
                <br/>
            </div>
        )
    }
}


export default Clients;