import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons';
import './style.css'


const Footer = () => (

    <footer className = "footer">
        <div className = "footer-list">
            <ul className =  "footer-media-link">
                <li className = "footer-media-item">
                    <a target="_blank" href="https://github.com/zulieh" className="footer-media-link">
                        <FontAwesomeIcon icon={faGithub} />   
                    </a>
                </li>

                <li className = "footer-media-item">
                    <a target="_blank" href="https://www.linkedin.com/in/dantijani-zuleiha-577a15bb/" className="footer-media-link">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>

                <li className = "footer-media-item">
                    <a target="_blank" href="https://medium.com/@Zuliekha" className="footer-media-link">
                        <FontAwesomeIcon icon={faMedium} />
                    </a>
                </li> 
            </ul>      
        </div>
        <p className= 'footer-text'>&copy; 2021 Design and Develop by Zuleiha Dantijani.</p>
    </footer>
        
);

export default Footer;
