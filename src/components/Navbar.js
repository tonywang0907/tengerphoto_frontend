import React, { useState, useEffect } from 'react'
import Logo from '../assets/brians_logo.png'
import EtsyLogo from '../assets/etsy_icon.png'
import { Link, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Navbar = () => {
    const location = useLocation()
    const [activeTab, setActiveTab] = useState('')

    useEffect(() => {
        setActiveTab(location.pathname)
    }, [location]);

    return (
        <>  
            <div id="nav_container">
                <Link to="/" className="links" id="logo_container">
                    <img src={Logo} height="100px" width="100px" alt="Home Page Logo"></img>
                    <p>tengerphoto</p>
                </Link>
                
                <div id="nav_bar_container">
                    <ul>
                        <li><Link to="/" className={`links ${activeTab === '/' ? 'active' : ''}`}>Home</Link></li>
                        <li><Link to="/about" className={`links ${activeTab === '/about' ? 'active' : ''}`}>About</Link></li>
                        <li><Link to="/portfolio" className={`links ${activeTab.includes('/portfolio')? 'active' : ''}`}>Portfolio</Link></li>
                    </ul>
                </div>

                <div id="social_links_container">
                    <ul>
                        <Link to="https://www.instagram.com/tengerphoto/" className="links"><li><FontAwesomeIcon icon={faInstagram} size="xl"/></li></Link>
                        <Link to="https://twitter.com/tengerphoto" className="links"><li><FontAwesomeIcon icon={faTwitter} size="xl"/></li></Link>
                        <Link to="https://www.etsy.com/shop/TengerPhoto?ref=nla_listing_details" className="links"><li><img src={EtsyLogo} height="20px" width="20px" alt="Etsy Icon"></img></li></Link>
                    </ul>

                </div>
            </div> 
        </>
    )
}

export default Navbar
