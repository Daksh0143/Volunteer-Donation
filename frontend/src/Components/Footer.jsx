import React from 'react'
import { Link } from 'react-router-dom'
import {FaSquareTwitter,FaLinkedin,FaSquareInstagram,FaSquareYoutube} from "react-icons/fa6"

const Footer = () => {
  return (
    <footer>
      <div>
        <img src='/logo.png' alt='logo'/>
      </div>
      <div>
        <h4>Support</h4>
        <ul>
          <li>Ahmedabad,India</li>
          <li>daxeshchauhan1615@gmail.com</li>
          <li>+91 1234567890</li>
        </ul>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/donate"}>Donate</Link></li>
          <li><Link to={"/contact"}>Contact</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </div>
      <div>
        <h4>Follow Us</h4>
        <ul>
          <li><Link to={"/"}><span><FaSquareTwitter/></span> <span>X</span></Link></li>
          <li><Link to={"/"}><span><FaSquareYoutube/></span> <span>YouTube</span></Link></li>
          <li><Link to={"/"}><span><FaSquareInstagram/></span> <span>Instagram</span></Link></li>
          <li><Link to={"/"}><span><FaLinkedin/></span> <span>Linkedin</span></Link></li>
        </ul>
      </div>

    </footer>
  )
}

export default Footer