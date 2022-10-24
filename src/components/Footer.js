import React from 'react'

function Footer(){
    return(
        <div className='footer'>
            <img className="footer-logo" src='images/logo.svg' alt='logo' />
            <div className="contacts">
                <div className="contacts-location">
                    <img src='images/icon-location.svg' alt='location'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div className="contacts-phone">
                    <img src='images/icon-phone.svg' alt='location'/>
                    <p>+1-543-123-4567</p>
                </div>
                <div className="contacts-email">
                    <img src='images/icon-email.svg' alt='location'/>
                    <p>example@fylo.com</p>
                </div>
            </div>
            <div className="footer-links-1">
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div className="footer-links-2">
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div className="social-media-icons">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
        </div>
    );
}
export default Footer;