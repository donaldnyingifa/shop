import React from 'react'
import './footer.scss'

const Footer = () => (
    <div>
    <div className="row footer">
        <div className="col-sm-4">
            <h2>LOCATE US</h2>
            <ul>
            <li>Suite B 2.3 Heroes Place</li>
            <li>145 Ademola Adetokunbo Wuse 2,</li>
            <li>Abuja, Nigeria</li>
            </ul>
        </div>
        <div className="col-sm-4">
            <h2>FOOTER MENU</h2>
            <ul>
                <li>Contact</li>
                <li>About</li>
                <li>Return Policy</li>
            </ul>
        </div>
        <div className="col-sm-4">
            <h2>GET SOCIAL</h2>
                <ul>
                    <li><a href="https://www.instagram.com/kyrieuberfashion_/" target="_blank" rel="noopener noreferrer" class="white-text">
                        <i class="fa fa-rss fa-2x"></i></a></li>
                    <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="white-text">
                    <i class="fab fa-facebook fa-2x"></i>
                    </a></li>
                </ul>
        </div>
        
    </div>
    <p className ="fb">© 2019 Kyrieuberfashion | Powered by BomoNyingifa</p>
    </div>
)

export default Footer;