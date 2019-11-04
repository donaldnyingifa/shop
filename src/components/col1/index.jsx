import React from 'react';
import Carousel from "react-multi-carousel";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import Img1 from '../../assets/17.jpg';
import Img2 from '../../assets/18.jpg';
import Img3 from '../../assets/19.jpg';
import Img4 from '../../assets/20.jpg';

import './slider.scss'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselCustom =()=> (
 <div>
   <h2 className="tc">KYRIE'19 <strong>COLLECTION</strong></h2>

   <Carousel 
   autoPlay
   autoPlaySpeed={1250}
   infinite
   responsive={responsive}>
    <div><img src={Img1} alt="kyrie" width="300vw" /></div>
    <div><img src={Img2} alt="kyrie" width="300vw" /></div>
    <div><img src={Img3} alt="kyrie" width="300vw" /></div>
    <div><img src={Img2} alt="kyrie" width="300vw" /></div>
    </Carousel>
    <Link to='/shop'>
     <button className="cb">Shop the Look </button>
    </Link>
    
 </div>
  )


export default CarouselCustom;