import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {FaAward} from 'react-icons/fa'
import {BiBrain} from 'react-icons/bi'
import {FaRegHandshake} from 'react-icons/fa'



const About = () => {
  return (
    <section id='about'>
      <div className="container text__container">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </div>
      <div className="container about__container">
        <div className="about__me"> 
          <img className='my-face'src={ME} alt="About Image" />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>I've worked with many languages in both a professional and a personal environment.</small>
            </article>

            <article className='about__card'>
              <BiBrain className='about__icon'/>
              <h5>Fast Learner</h5>
              <small>I learned React and frontend technologies to make this site within three days.</small>
            </article>

            <article className='about__card'>
              <FaRegHandshake className='about__icon'/>
              <h5>Collaborative</h5>
              <small>I love working in a group setting and have collaborated with teams throughout the SDLC.</small>
            </article>

          </div>

          <p>
          Hi there! 👋🏻 I'm Rui, an aspiring software enginner that loves solving problems in math and code. I fell in love with programming not only because I love to innovate and challenge myself, but also, I love to learn about other people's thought processes and how they would tackle a problem. Outside of programming, I love to draw, listen to music, and explore new things. I'm always open to connect and chat! 
          </p>
          <div align='center'>
             <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          </div>
         
        </div>
      </div>
    </section>
  )
}

export default About