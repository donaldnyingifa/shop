import React from 'react'
import './newsletter.scss'
import image from '../../assets/01.jpg'

const News = () => (
    <div className="row">
        <div className="col-sm-6 ">
            <img src={image} width="100%" height="100%" alt="shop" />
        </div>
        <div className="col-sm-6 news">
            <h2>Sign up for our newsletter </h2>
            <p>Sign up for our mailing list to receive new product alerts, special offers, and coupon codes.</p>
            <div className="newsletter--wrapper">
                <input className="newsletter-input" type="text" placeholder="Email Address"/>
                <button class="footer-main-standard-newsletter-submit" type="submit" name="join" tabindex="0">Join</button>
            </div>
        </div>
    </div>
)

export default News;