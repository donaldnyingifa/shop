import React from 'react'
import './home.scss'
import Carrousel from '../../components/carrousel'
import News from '../../components/newsletter'
import Instagram from '../../components/instagram'
import Footer from '../../components/footer'
import Directory from '../../components/directory'
export default function Home() {
    return (
        <div>
             {/* style={{marginTop:'650px'}}*/}
            <div className='homepage'>
                < Directory />
            </div>

            <div class="parallax">
                <div className="parallaxText">
                    <h2>Our Brand Our Goal</h2>
                    <p>Our Brand is rooted in our Italo-Argentinian and Swiss heritage, crafting innovative designs and quality products.</p>
                </div>
            </div>
            <div>
                 <News />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
