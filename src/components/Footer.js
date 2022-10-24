import React from 'react'

function Footer(){
    return(
        <div class='footer'>
            <img class="footer-logo" src='images/logo.svg' alt='logo' />
            <div class="contacts">
                <div class="contacts-location">
                    <img src='images/icon-location.svg' alt='location'/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                </div>
                <div class="contacts-phone">
                    <img src='images/icon-phone.svg' alt='location'/>
                    <p>+1-543-123-4567</p>
                </div>
                <div class="contacts-email">
                    <img src='images/icon-email.svg' alt='location'/>
                    <p>example@fylo.com</p>
                </div>
            </div>
            <div class="footer-links-1">
                <p>About Us</p>
                <p>Jobs</p>
                <p>Press</p>
                <p>Blog</p>
            </div>
            <div class="footer-links-2">
                <p>Contact Us</p>
                <p>Terms</p>
                <p>Privacy</p>
            </div>
            <div class="social-media-icons">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
            </div>
        </div>
    );
}
export default Footer;