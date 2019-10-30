import React from 'react'
import './home.scss'
import Header from '../../components/header'
import Carrousel from '../../components/carrousel'
import News from '../../components/newsletter'
import CollectionItem from '../../components/collection-item';
import Footer from '../../components/footer'
import Feed1 from '../../components/feed1'

import c1 from '../../assets/52.jpg'
import c2 from '../../assets/57.jpg'
import c3 from '../../assets/48.jpg'
import c22 from '../../assets/36.jpg'

const items = [
    {
      id: 1,
      imageUrl: c1,
      price: null
    },
    {
      id: 2,
      imageUrl: c2,
      price: null
    },
    {
      id: 3,
      imageUrl: c3,
      price: null
    },
    {
      id: 4,
      imageUrl: c22,
      price: null
    },
]

const Home =()=> (
        <div>
             <Header />
            <div style={{marginTop:'10vh'}}>
                <Feed1 />
            </div>

            <div class="parallax">
                <div className="parallaxText">
                    <h2>Our Brand Our Goal</h2>
                    <p>Kyrie is a high end Luxury multibrand store</p>

                    <p>Explore the world of affordable luxury fashion.</p>
                    <p>Looking for a new dress? 
                        We offer an amazing selection of womens dresses ! </p>
                </div>
            </div>
            <div className="collection-preview">
                <h2 style={{textAlign:"center"}}>New Arrivals</h2>
                <div className="preview p">
                    <CollectionItem item={items[0]} />
                    <CollectionItem item={items[1]} />
                    <CollectionItem item={items[2]} />
                    <CollectionItem item={items[3]} />
                </div>
            </div>
                 <Carrousel />
                 <News />
                <Footer />
        </div>
    )
export default Home;
