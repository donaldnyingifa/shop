import React, { Component } from 'react'
import './slider.scss'
import image1 from '../../assets/kids.jpg'
import image2 from '../../assets/everton.jpg'
import image3 from '../../assets/resort.jpg'
import BackgroundSlideshow from 'react-background-slideshow'
 
export default class Carrousel extends Component {
  render () {
    return (
        <BackgroundSlideshow images={[ 'https://i.ibb.co/cvpntL1/hats.png', 'https://i.ibb.co/px2tCc3/jackets.png', 'https://i.ibb.co/0jqHpnp/sneakers.png' ]} />
    )
  }
}
