import React,{Component} from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import mizanur_rahman from '../../../public/assets/img/clients_pic/mizanur-rahman.png';
import philip from '../../../public/assets/img/clients_pic/philip.png';
import sattar from '../../../public/assets/img/clients_pic/sattar.png';
import vmc from '../../../public/assets/img/clients_pic/vmc.png';

class Testimonial extends Component{

       render(){
           const responsive = {
               desktop: {
                   breakpoint: { max: 3000, min: 1024 },
                   items: 1,
                   slidesToSlide: 1
               },
               tablet: {
                   breakpoint: { max: 1024, min: 464 },
                   items: 1,
                   slidesToSlide: 1
               },
               mobile: {
                   breakpoint: { max: 464, min: 0 },
                   items: 1,
                   slidesToSlide: 1
               }
           };
           return(
               <div>
                   <div className="row">
                       <div className="col-md-12 col-sm-12 col-xs-12">
                           <div className="text-center">
                               <h2>See for yourself what <span className='text-info'>SETCOL’s</span> many different clients have had to say</h2>
                           </div>
                       </div>
                   </div>
                   <br/>
                   <Carousel
                       swipeable={false}
                       draggable={false}
                       showDots={true}
                       responsive={responsive}
                       ssr={true}
                       infinite={true}
                       autoPlay={this.props.deviceType !== "mobile" ? true : false}
                       autoPlaySpeed={3000}
                       keyBoardControl={true}
                       customTransition="all .5"
                       transitionDuration={2000}
                       containerClass="carousel-container"
                       removeArrowOnDeviceType={["tablet", "mobile"]}
                       deviceType={this.props.deviceType}
                       dotListClass="custom-dot-list-style"
                       itemClass="carousel-item-padding-40-px"
                       arrows={false}
                   >
                       <div>
                           <div className="codepen-wrapper">
                               <figure className="review">
                                   <blockquote className="review__text">
                                       The compliment of the best Software Company SETCOLBD for providing us much convenient and better quality Software Solution.
                                   </blockquote>
                                   <figcaption className="review__person">
                                       <img src={mizanur_rahman} alt="User 1"
                                            className="review__photo"/>
                                       <div className="review__info">
                                           <p className="review__info--name">Mizanur Rahman</p><br/>
                                           <p className="review__info--date"> Director : Liala Styles Ltd.</p>
                                       </div>
                                       <div className="review__rating text-info">8</div>
                                   </figcaption>
                               </figure>
                           </div>
                       </div>
                       <div>
                           <div className="codepen-wrapper">
                               <figure className="review">
                                   <blockquote className="review__text">
                                       SETCOLBD is incredible to work with. They have great communication and superb insights into Ecommerce. They went above and beyond to make sure I was completely satisfied with our new website. They completed the job on time and handled all the projects expeditiously. I love his attention to detail. The finished product blow my mind. I highly recommend SETCOLBD.
                                   </blockquote>
                                   <figcaption className="review__person">
                                       <img src={philip} alt="User 1"
                                            className="review__photo"/>
                                       <div className="review__info">
                                           <p className="review__info--name">Phillip Berry</p><br/>
                                           <p className="review__info--date">Founder & CEO : Need Boat</p>
                                       </div>
                                       <div className="review__rating text-info">8.8</div>
                                   </figcaption>
                               </figure>
                           </div>
                       </div>
                       <div>
                           <div className="codepen-wrapper">
                               <figure className="review">
                                   <blockquote className="review__text">
                                       SETCOLBD is right on the mark. Excellent communication and quick service. While working with them I witnessed their diligence and creativity. I will be using their service again.
                                   </blockquote>
                                   <figcaption className="review__person">
                                       <img src={sattar} alt="User 1"
                                            className="review__photo"/>
                                       <div className="review__info">
                                           <p className="review__info--name">Sazzad Sattar</p><br/>
                                           <p className="review__info--date">Executive Director : Sattar Metal Industries Ltd.</p>
                                       </div>
                                       <div className="review__rating text-info">9</div>
                                   </figcaption>
                               </figure>
                           </div>
                       </div>
                       <div>
                           <div className="codepen-wrapper">
                               <figure className="review">
                                   <blockquote className="review__text">
                                       SETCOLBD gives the company better business intelligence when we're talking with our vendors and customers. It's an accurate ERP management system. SETCOLBD is the most efficient, affordable & customized ERP System provider in the market with great support.
                                   </blockquote>
                                   <figcaption className="review__person">
                                       <img src={vmc} alt="User 1"
                                            className="review__photo"/>
                                       <div className="review__info">
                                           <p className="review__info--name">Alexious Dorsey</p><br/>
                                           <p className="review__info--date">Founder & CEO : Visual Misconception</p>
                                       </div>
                                       <div className="review__rating text-info">7.8</div>
                                   </figcaption>
                               </figure>
                           </div>
                       </div>
                   </Carousel>
               </div>
           )
       }
}


export default Testimonial;