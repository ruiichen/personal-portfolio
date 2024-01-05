import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.png'
import FACEDEMO from '../../assets/facedemo.png'
import FACEDEMO2 from '../../assets/facedemo2.png'
import ASSET4 from '../../assets/asset4.png'
import TICTACTOE from '../../assets/tictactoegif.gif'
import CALCULATOR from '../../assets/calculatorgif.gif'
import WIP from '../../assets/WORKINPROGRESS.png'
import WSDEMO from '../../assets/wsdemo.png'
import WSLOGIN from '../../assets/wslogin.png'
import WSMAIN from '../../assets/wsmain.png'
import WSBUY from '../../assets/wsbuy.png'
import WSSELL from '../../assets/wssell.png'

import Carousel from 'react-bootstrap/Carousel';

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <div className='portfolio-container'>
        <h5> Take A Look Through</h5>
        <h2 style={{ color: "white" }}> My Portfolio</h2> 

        <div className='portfolioitem'>
          <h3> WealthShrimple</h3>
            <Carousel>
              <Carousel.Item>
              <img className='portfolioimage'src={WSDEMO}/>
              </Carousel.Item>
              <Carousel.Item>
              <img className='portfolioimage'src={WSLOGIN}/>
              </Carousel.Item>
               <Carousel.Item>
              <img className='portfolioimage'src={WSMAIN}/>
              </Carousel.Item>
              <Carousel.Item>
              <img className='portfolioimage'src={WSBUY}/>
              </Carousel.Item>
               <Carousel.Item>
              <img className='portfolioimage'src={WSSELL}/>
              </Carousel.Item>
            </Carousel>
        <div className='portfoliotext'>
            <h5>Java, SpringBoot, Maven, MySQL, Oauth2, React, JS</h5>
            <p>This is mock investment website that allows the user to experience an authentic stock market simulation and performs real-time queries of NASDAQ whenever a stock is to be bought or sold by the user. The back-end manages user accounts connected to their gmail and their respective stock inventory.</p>
            <a href="https://wealthshrimple-64d69.web.app/" className='btn btn-primary'>Try it</a>
          </div>
      </div>

        <div className='portfolioitem'>
          <div>
            <h3>Average Face Generator</h3>
            
            <Carousel>
              <Carousel.Item>
              <img className='portfolioimage'src={FACEDEMO} />
              </Carousel.Item>
              <Carousel.Item>
              <img className='portfolioimage'src={FACEDEMO2}/>
              </Carousel.Item>
              <Carousel.Item>
               <img className='portfolioimage'src={ASSET4}/>
              </Carousel.Item> 
            </Carousel>          
            
          </div>
          <div className='portfoliotext'>
            <h5>Python Flask OpenCV Dlib HTML </h5>
            <p>This is a program that takes in pictures of different faces in image format and generates a face based on the average of those consumed. Utilizes OpenCV and Dlib in Python to detect 68 facial landmarks and uses similarity transform to create the new average face.</p>
            <a href="https://r9chen.pythonanywhere.com" className='btn btn-primary'>Try It</a>
          </div>
        </div>
      </div>

      <div className='portfolioitem'>
          <h3> Tic Tac Toe AI</h3>
          <img className='portfolioimage'src={TICTACTOE} alt="About Image" />
        <div className='portfoliotext'>
            <h5>Java JavaFX</h5>
            <p>This is a Tic Tac Toe game built using Java and JavaFX that allows you to play with either another player, an easy AI, or a master AI. The master AI was developed following the fundamentals of game theory, specifically the minimax algorithm, to ensure that the AI would always choose the most optimal move available in a given gamestate.</p>
            <a href="https://github.com/ruiichen/TicTacToeAI" className='btn btn-primary'>GitHub Link</a>
          </div>
      </div>

      <div className='portfolioitem'>
      <h3> BEDMAS Calculator </h3>
          <img className='portfolioimage'src={CALCULATOR} alt="About Image" />
        <div className='portfoliotext'>
            <h5>Java JavaFX</h5>
            <p>This is a program written in Java that calculates user-input strings according to BEDMAS and incorporates scientific calculator features such as memory and inverse.</p>
            <a href="https://github.com/ruiichen/BEDMAS-Calculator" className='btn btn-primary'>GitHub Link</a>
          </div>
      </div>
    </section>
  )
}

export default Portfolio
