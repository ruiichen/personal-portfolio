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
              <small>5+ Years Coding</small>
            </article>

            <article className='about__card'>
              <BiBrain className='about__icon'/>
              <h5>Fast Learner</h5>
              <small>Made This Site In 3 Days</small>
            </article>

            <article className='about__card'>
              <FaRegHandshake className='about__icon'/>
              <h5>Collaborative</h5>
              <small>Thrives Working With Others</small>
            </article>

          </div>

          <p>
          Grounded and solution orientated Computer Science student who thrives working in a team-based environment. Seeking a role where I can grow and learn from experienced team members while drawing from soft and technical skills that I have already successfully executed.
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