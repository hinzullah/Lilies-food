import React from 'react'
import mybadge1 from '../Assets/badge1.png'
import mybadge2 from '../Assets/badge2.jpg'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='f1'>
            <h6>Company</h6>
            <ul>
                <li>About Us</li>
                <li>Careers</li>
                <li>Contact</li>
            </ul>
        </div>

        <div className='f2'>
            <h6>Support</h6>
            <ul>
                <li>Help Center</li>
                <li>Safety Center</li>
            </ul>
        </div>

        <div className='f3'>
            <h6>Legal</h6>
            <ul>
                <li>Cookies Policy</li>
                <li>Privacy Policy</li>
                <li>Terms of Services</li>
                <li>Dispute Resolution</li>
            </ul>
        </div>

        <div className='f4'>
            <h6>Install App</h6>
            <ul>
                <li><img src={mybadge1} className='footer-google' alt='g-play' /></li>
                <li><img src={mybadge2} className='footer-apple' alt='g-play' /></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer