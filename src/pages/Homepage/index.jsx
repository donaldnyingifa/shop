import React from 'react'
import './home.scss'
import Carrousel from '../../components/carrousel'
import News from '../../components/newsletter'
import Footer from '../../components/footer'
import Directory from '../../components/directory'
export default function Home() {
    return (
        <div>
            <div className="">
                <Carrousel />
            </div>
            <div className='homepage'  style={{marginTop:'650px'}}>
                < Directory />
            </div>

            <div class="parallax"></div>
            <div>
                 <News />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
