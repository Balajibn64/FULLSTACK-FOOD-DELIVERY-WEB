import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt='' />
                <p>Craving your favorite dishes? We've got you covered! At "TOMATO", we bring delicious meals from your favorite restaurants straight to your doorstep. Fast, fresh, and reliable – satisfying your hunger has never been easier. Order now and enjoy the convenience of online food delivery at its best!</p>
                <div className="footer-social-icons">
                  <img src={assets.facebook_icon} alt='' />  
                  <img src={assets.twitter_icon} alt='' />  
                  <img src={assets.linkedin_icon} alt='' />  
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+91 987654321</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>Copyright 2024 © Tomato.com - All Rights Reserved.</p> 
    </div>
  )
}

export default Footer