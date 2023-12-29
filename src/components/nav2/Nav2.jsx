import React from 'react'
import './nav2.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {useState} from 'react'

const Nav2 = () => {
    const [activeNav, setActiveNav]=useState('#');
    document.addEventListener('DOMContentLoaded', function() {
    const hdloc = document.getElementById("header"); 
    const abtloc = document.getElementById("about");
    const exploc = document.getElementById("experience");
    const pfloc = document.getElementById("portfolio");
    const ctloc = document.getElementById("contact");
    window.addEventListener('scroll', () => {
      if(window.scrollY >= hdloc.offsetTop && window.scrollY < exploc.offsetTop - 100) {
        setActiveNav('#about');
      } else if (window.scrollY >= abtloc.offsetTop - 100 && window.scrollY < exploc.offsetTop + pfloc.offsetHeight + exploc.offsetHeight - 100) {
        setActiveNav('#experience')
      } else if (window.scrollY >= exploc.offsetTop + pfloc.offsetHeight + exploc.offsetHeight - 100) {
        setActiveNav('#contact')
      } else {
        setActiveNav('#');
      }

    })
    })
  return (
    <nav2>
        <a href="#" onClick={() => setActiveNav('#')} className={activeNav==='#' ? 'active':''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav==='#about' ? 'active':''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav==='#experience' ? 'active':''}><BiBook/></a>
        <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav==='#contact' ? 'active':''}><BiMessageSquareDetail/></a>
    </nav2>
  )
}

export default Nav2
