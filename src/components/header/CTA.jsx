import React from 'react'
import CV from '../../assets/resussy-2.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Resume </a>
        <a href="#contact" className='btn btn-primary'>Get In Touch</a>
     </div>
  )
}

export default CTA