import React from 'react'
import './home.scss'
import Carrousel from '../../components/carrousel'

import Directory from '../../components/directory'
export default function Home() {
    return (
        <div>
            <div className="slider">
                <Carrousel />
            </div>
            
            <div className='homepage'  style={{marginTop:'650px'}}>
                < Directory />
            </div>
        </div>
    )
}
