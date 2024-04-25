import React from 'react'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
    return (
        <div className='body'>
            <footer className="footer">
                <div className="waves">
                    <div className="wave" id="wave1"></div>
                    <div className="wave" id="wave2"></div>
                    <div className="wave" id="wave3"></div>
                    <div className="wave" id="wave4"></div>
                </div>
                <ul className="social-icon">
                    <li className="social-icon__item"><a className="social-icon__link" href="https://www.facebook.com/techligator/">
                        <FacebookIcon />
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="#">
                        <XIcon />
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="https://www.linkedin.com/company/techligator/">
                        <LinkedInIcon />
                    </a></li>
                    <li className="social-icon__item"><a className="social-icon__link" href="https://www.instagram.com/techligator/">
                        <InstagramIcon />
                    </a></li>
                </ul>
                <ul className="menu">
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            <PhoneIcon /> +91 8260684075
                        </a>
                    </li>
                    <li className="menu__item">
                        <a className="menu__link" href="#">
                            <EmailIcon /> contact.techligator@gmail.com
                        </a>
                    </li>
                </ul>

                <div style={{marginLeft: '2em'}}>
                <p>&copy;2024 AC Bill Calculator | All Rights Reserved</p>
                <p>Powered by <a href='https://techligator.com/'>Techligator</a> version 2.1.0</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer
