import React from 'react'
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <section className='hero'>
        <div className='banner'>
            <h1>Volunteer</h1>
            <h3>Needed</h3>
            <p>The value of life is not in its duration, but in its donation. You are not important because of how long you live, you are important because of how effective you live. – Myles Munroe</p>
            <Link to={"/donate"} className='btn'>Donate Now</Link>
        </div>
        <div className='banner'>
          <img src='/hero.png' alt='hero'/>
        </div>
    </section>
  )
}

export default Hero