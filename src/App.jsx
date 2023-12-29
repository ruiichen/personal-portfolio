import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Nav2 from './components/nav2/Nav2'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


const App = () => {
  return (
    <>
        <Nav />
        <Header />
        <About />
        <Nav2 />
        <Experience />
        <Portfolio />
        <Contact />
        
         {/*
       
        
       
        
        
        
        
  */}
    </>
  )
}

export default App
