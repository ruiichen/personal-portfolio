import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import { SiPostman, SiR } from "react-icons/si";
import { GiPegasus } from "react-icons/gi";
import { FaFlask } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { SiApachemaven } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiRacket } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { SiPython } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";

const Experience = () => {
  return (
    <div id='experience' className='experience'>
      <div className="container text__container">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </div>
      
      <div className="flavour__back"> 
      <div className="container experience__container">
        
        <div className="experience__frontend">
          <h3>Front-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <h4>React.js</h4>
            </article>
            <article className='experience__details'>
              <SiJavascript className='experience__details-icon'/>
              <h4>JavaScript</h4>
            </article>
            <article className='experience__details'>
              <FaHtml5 className='experience__details-icon'/>
              <h4>HTML</h4>
            </article>
            <article className='experience__details'>
              <FaReact className='experience__details-icon'/>
              <h4>JSX</h4>
            </article>
            <article className='experience__details'>
              <FaFlask className='experience__details-icon'/>
              <h4>Flask</h4>
            </article>
            <article className='experience__details'>
              <SiCss3 className='experience__details-icon'/>
              <h4>CSS</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Back-End Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaJava className='experience__details-icon'/>
              <h4>Java</h4>
            </article>
            <article className='experience__details'>
              <SiCplusplus className='experience__details-icon'/>
              <h4>C++</h4>
            </article>
            <article className='experience__details'>
              <SiPython className='experience__details-icon'/>
              <h4>Python</h4>
            </article>
            <article className='experience__details'>
              <SiCoursera className='experience__details-icon'/>
              <h4>C</h4>
            </article>
            <article className='experience__details'>
              <SiRacket className='experience__details-icon'/>
              <h4>Racket</h4>
            </article>
            <article className='experience__details'>
              <SiMysql className='experience__details-icon'/>
              <h4>MySQL</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Other Development Tools</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <FaGitAlt className='experience__details-icon'/>
              <h4>Git</h4>
            </article>
            <article className='experience__details'>
            <SiPostman className='experience__details-icon'/>
              <h4>Postman</h4>
            </article>
            <article className='experience__details'>
              <SiApachemaven className='experience__details-icon'/>
              <h4>Maven</h4>
            </article>
            <article className='experience__details'>
              <SiSpring className='experience__details-icon'/>
              <h4>SpringBoot</h4>
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__details-icon'/>
              <h4>OAuth2</h4>
            </article>
            <article className='experience__details'>
              <GiPegasus className='experience__details-icon'/>
              <h4>Pega</h4>
            </article>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Experience