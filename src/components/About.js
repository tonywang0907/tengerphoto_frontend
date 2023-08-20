import React from 'react'
import { Link } from 'react-router-dom'
import BrianInsta from '../assets/brians_instagram.png'
// import SwitchingText from '../components/SwitchingText'

const About = () => {

    return (
        <div id="about_container">
            <div id="about_inner_container">
                <div id="about_inner_left_container">
                    <h1 id="name">Brian Teng</h1>

                    <p id="title">Automotive Photographer</p>

                    <div id="about_me_container">
                        <h1>About Me</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>

                    <ul id="about_links">
                        <Link className="links links_box"><li>Email Me</li></Link>
                        <Link to="https://www.linkedin.com/in/brian-teng-840280231/" className="links links_box"><li>Resume</li></Link>
                        <Link to="/portfolio" className="links links_box"><li>Portfolio</li></Link>
                    </ul>
                </div>

                <div id="about_innner_right_container">
                    <Link to="https://www.instagram.com/tengerphoto/"><img id="brians_insta" src={BrianInsta}/></Link>
                </div>
            </div>


        </div>
    )
}

export default About
