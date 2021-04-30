import React,{Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import grameenphone from '../../assets/img/clients_partners/grameenphone.webp';
import airtel from '../../assets/img/clients_partners/airtel.webp';
import banglalink from '../../assets/img/clients_partners/banglalink.webp';
import robi from '../../assets/img/clients_partners/rob.webp';
import ranksteel from '../../assets/img/clients_partners/ranksteel.webp';
import clicktect from '../../assets/img/clients_partners/clicktech.webp';
import sattar from '../../assets/img/clients_partners/sattar.webp';
import donuts from '../../assets/img/clients_partners/my-donuts.webp';
import needboat from '../../assets/img/clients_partners/needboat.webp';
import vmc from '../../assets/img/clients_partners/VMC.webp';
import boat from '../../assets/img/clients_partners/boat.me.webp';
import dream_lpg from '../../assets/img/clients_partners/dream-lpg.webp';
import dream_energy from '../../assets/img/clients_partners/dream-energy.webp';
import dream_lpg_convertion from '../../assets/img/clients_partners/dream-lpg-convertion.webp';
import dream_steel from '../../assets/img/clients_partners/dream-steel.webp';
import dream_world from '../../assets/img/clients_partners/dream-world.webp';
import laila_group from '../../assets/img/clients_partners/laila-group.webp';
import ruhi from '../../assets/img/clients_partners/ruhi.webp';
import rongkori from '../../assets/img/clients_partners/rongkori.webp';
import gk_business from '../../assets/img/clients_partners/gk-business.webp';
import atoz from '../../assets/img/clients_partners/atoz.webp';
import bright_agro from '../../assets/img/clients_partners/bright-agro.webp';
import bs from '../../assets/img/clients_partners/bs.webp';
import empire_carpet from '../../assets/img/clients_partners/empire-carpet.webp';
import irish_dental from '../../assets/img/clients_partners/irish-dental.webp';
import lahari from '../../assets/img/clients_partners/lahari.webp';
import mother_lift from '../../assets/img/clients_partners/mother-lift.webp';
import national_training_institute from '../../assets/img/clients_partners/national-training-institute.webp';
import noli from '../../assets/img/clients_partners/noli.webp';
import nvf from '../../assets/img/clients_partners/NVF.webp';
import pixel_eng from '../../assets/img/clients_partners/pixel-eng.webp';


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