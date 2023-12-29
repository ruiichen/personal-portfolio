import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const NavSocials = () => {
  return (
    <div className='ms-5 nav__socials'>
        <a href="https://www.linkedin.com/in/ruichenn" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ruiichen" target="_blank"><FaGithub/></a>
    </div>
  )
}

export default NavSocials
