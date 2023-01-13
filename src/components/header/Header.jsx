import React, {useEffect} from 'react'
import Typewriter from "typewriter-effect"
import './header.css'
import CTA from './CTA'
import name from '../../assets/name.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='hello'>Hello I'm</h5>

        <div>
          <img className="nameIMG" src={name} alt="name"/>
        </div>

        <h5 className="text-light">
          <Typewriter
          options={{
            autoStart: true,
          loop: true,
          delay: 40,
          strings:[
            "I'm a web developer",
            "I'm passionate in visual art",
            "I aspire to code the future",
            "I'm Rui Chen",
            "and I'm looking for a job c:",
          ],
          }}/>
        </h5>
        </div>

        <CTA />
        
    </header>
  )
}

export default Header