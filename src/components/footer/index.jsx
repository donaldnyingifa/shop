import React from 'react'
import { Link } from "react-router-dom";
import './footer.scss'

const Footer = () => (
    <div className="row">
    {/* <div className=""> */}
        <div className="col-sm-4 footer">
            <h2>LOCATE US</h2>
            <ul>
            <li>Suite B 2.3 Heroes Place</li>
            <li>145 Ademola Adetokunbo Wuse 2,</li>
            <li>Abuja, Nigeria</li>
            </ul>
        </div>
        <div className="col-sm-4 footer">
            <h2>FOOTER MENU</h2>
            <ul>
                <li>
                     <Link to='/'>
                         Home
                     </Link>
                </li>
                <li>
                     <Link to='/shop'>
                         Shop
                     </Link>
                </li>
                <li>
                     <Link to='/contact'>
                         Contact
                     </Link>
                </li>
                <li>
                     <Link to='/about'>
                           About
                     </Link>
                </li>
            </ul>
        </div>
        <div className="col-sm-4 footer">
            <h2>GET SOCIAL</h2>
                    <span><a href="https://www.instagram.com/kyrieuberfashion_/" target="_blank" rel="noopener noreferrer" class="white-text">
                         <i class="fab fa-instagram fa-2x"></i> </a></span>
                        
                    <span><a href="https://www.facebook.com/kyrieuberfashionabuja" target="_blank" rel="noopener noreferrer" class="white-text">
                    <i class="fab fa-facebook fa-2x"></i>
                    </a></span>
          
        </div>
        
    {/* </div> */}
    <div className ="fb">© 2019 Kyrieuberfashion | Powered by BomoNyingifa</div>
    </div>
)

export default Footer;