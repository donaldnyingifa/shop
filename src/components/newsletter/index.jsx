import React from 'react'
import './newsletter.scss'

const News = () => (
    <div className="row">
        <div className="col-sm-6 n1"></div>
        <div className="col-sm-6 news">
            <h2>Sign up for our newsletter </h2>
            <p>Sign up for our mailing list to receive new product alerts, special offers, and coupon codes.</p>
            <input type="text" placeholder="Email Address"/>
        </div>
    </div>
)

export default News;