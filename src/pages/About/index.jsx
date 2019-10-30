import React from 'react'
import './about.scss'
import Header from '../../components/header'
import Footer from '../../components/footer'
import News from '../../components/newsletter'
import image from '../../assets/12.jpg'

const About =()=> (
    <div style={{marginTop:'5vh'}}>
         <Header />
         <div className="row" style={{backgroundColor:'rgb(254, 254, 255)'}}>
             
             <div className="col-lg-10" >
                <div className="us">
                <h2 style={{textAlign:"center"}}>About Us</h2>
                    <p>Kyrieuberfashion is a multi brand luxury store for the fashionable woman.
                        Our aim is to make every woman stand out and make a statement in our quality pieces.</p>
                    <p>Since launching in 2014, we have succeeded in providing classic versatile wears that stands the test of time.
                        A Kyrie woman is elegant, bold, confident and unconventional.</p>
                    <img className="centered" style={{ boxShadow: '24px 50px 60px rgba(0,0,0,.3)' }} src={image} alt="about us" />
                </div>
                
             </div>
             <div className="col-lg-2">
                
             </div>

         </div>
         
        
         <News />
         <Footer />
    </div>
)

export default About;