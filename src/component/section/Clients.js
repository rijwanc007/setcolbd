import React,{Component} from 'react';
import InfiniteCarousel from 'react-leaf-carousel';
import laila_group from '../../assets/img/clients_partners/laila-group.webp';
import e_courier from '../../assets/img/clients_partners/e-courier.webp';
import nahid_group from '../../assets/img/clients_partners/Nahid-Group.webp';
import sattar from '../../assets/img/clients_partners/sattar.webp';
import skrp from '../../assets/img/clients_partners/SKRP.webp';
import sme from '../../assets/img/clients_partners/sme.webp';
import public_market from '../../assets/img/clients_partners/public-market.webp';
import donuts from '../../assets/img/clients_partners/my-donuts.webp';
import panda from '../../assets/img/clients_partners/panda.webp';
import electronic_association from '../../assets/img/clients_partners/bangladesh-electronic-asociation.webp';
import noakhali_zila from '../../assets/img/clients_partners/Noakhali-Zila-shamity.webp';
import vmc from '../../assets/img/clients_partners/VMC.webp';
import boat from '../../assets/img/clients_partners/boat.me.webp.webp';
import need_boat from '../../assets/img/clients_partners/need-boat.webp';
import mabco from '../../assets/img/clients_partners/mabco.webp';
import bright_agro from '../../assets/img/clients_partners/bright-agro.webp';
import gk_business from '../../assets/img/clients_partners/gk-business.webp';
import barovoot from '../../assets/img/clients_partners/barovoot.webp';
import deshi from '../../assets/img/clients_partners/deshi.webp';
import dream_lpg from '../../assets/img/clients_partners/dream-lpg.webp';
import dream_world from '../../assets/img/clients_partners/dream-world.webp';
import dream_steel from '../../assets/img/clients_partners/dream-steel.webp';
import dream_energy from '../../assets/img/clients_partners/dream-energy.webp';
import dream_lpg_convertion from '../../assets/img/clients_partners/dream-workshop.webp';
import n_islam from '../../assets/img/clients_partners/N-Islam.webp';
import rongkori from '../../assets/img/clients_partners/rongkori.webp';



class Clients extends Component{
    render() {
        return(
            <div style={{backgroundColor:"#f5f5f5"}}>
                <br/>
                <div className="row">
                    <div className="col-md-12 col-sm-12 col-xs-12">
                        <div className="section-headline text-center">
                            <h2>Our <span className="text-info">Client's</span></h2>
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
                    <div><img style={{width:'100px'}} src={laila_group} alt=''/></div>
                    <div><img style={{width:'100px'}} src={e_courier} alt=''/></div>
                    <div><img style={{width:'100px'}} src={nahid_group} alt=''/></div>
                    <div><img style={{width:'100px'}} src={sattar} alt=''/></div>
                    <div><img style={{width:'100px'}} src={skrp} alt=''/></div>
                    <div><img style={{width:'100px'}} src={sme} alt=''/></div>
                    <div><img style={{width:'100px'}} src={public_market} alt=''/></div>
                    <div><img style={{width:'100px'}} src={donuts} alt=''/></div>
                    <div><img style={{width:'100px'}} src={panda} alt=''/></div>
                    <div><img style={{width:'100px'}} src={electronic_association} alt=''/></div>
                    <div><img style={{width:'100px'}} src={noakhali_zila} alt=''/></div>
                    <div><img style={{width:'100px'}} src={vmc} alt=''/></div>
                    <div><img style={{width:'100px'}} src={boat} alt=''/></div>
                    <div><img style={{width:'100px'}} src={need_boat} alt=''/></div>
                    <div><img style={{width:'100px'}} src={mabco} alt=''/></div>
                    <div><img style={{width:'100px'}} src={bright_agro} alt=''/></div>
                    <div><img style={{width:'100px'}} src={gk_business} alt=''/></div>
                    <div><img style={{width:'100px'}} src={barovoot} alt=''/></div>
                    <div><img style={{width:'100px'}} src={deshi} alt=''/></div>
                    <div><img style={{width:'100px'}} src={dream_lpg} alt=''/></div>
                    <div><img style={{width:'100px'}} src={dream_world} alt=''/></div>
                    <div><img style={{width:'100px'}} src={dream_steel} alt=''/></div>
                    <div><img style={{width:'100px'}} src={dream_energy} alt=''/></div>
                    <div><img style={{width:'100px'}} src={dream_lpg_convertion} alt=''/></div>
                    <div><img style={{width:'100px'}} src={n_islam} alt=''/></div>
                    <div><img style={{width:'100px'}} src={rongkori} alt=''/></div>
                </InfiniteCarousel>
                <br/>
                <br/>
            </div>
        )
    }
}


export default Clients;