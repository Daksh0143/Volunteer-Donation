import React from 'react'

const About = () => {
  return (
    <section className='about'>
      <div className='hero'>
        <div className='banner'>
          <h1>Our Story</h1>
          <p>
            “If every American donated five hours a week, it would equal the labor of twenty million full-time volunteers.” -Whoopi Goldberg
            “Volunteering is an act of heroism on a grand scale. And it matters profoundly. It does more than help people beat the odds; it changes the odds.” -Bill Clinton
            “Volunteerism is the voice of the people put into action. These actions shape and mold the present into a future of which we can all be proud.” -Helen Dyer
          </p>
        </div>
        <div className='banner'>
          <img src='/about.png' alt='AboutImg' />
        </div>
      </div>
    </section>
  )
}

export default About