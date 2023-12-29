import React from 'react'
import CV from '../../assets/resume.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume </a>
        <a href="#contact" className='btn btn-primary'>Get In Touch</a>
     </div>
  )
}

export default CTA