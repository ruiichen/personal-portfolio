import React, {useEffect} from 'react'
import Typewriter from "typewriter-effect"
import './header.css'
import CTA from './CTA'
import name from '../../assets/name.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='hello'>Hello, I'm</h5>

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
            "I'm a Computer Science student studying at the University of Waterloo.",
            "I'm passionate about solving problems with code.",
            "I'm an aspiring Software Engineer.",
            "I'm Rui Chen",
            "Let's get in touch!",
          ],
          }}/>
        </h5>
        </div>

        <CTA />
        
    </header>
  )
}

export default Header