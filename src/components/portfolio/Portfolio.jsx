import React from 'react'
import './portfolio.css'
import ME from '../../assets/me.png'
import FACEDEMO from '../../assets/facedemo.png'
import FACEDEMO2 from '../../assets/facedemo2.png'
import ASSET4 from '../../assets/asset4.png'
import { Carousel } from 'react-carousel-minimal';
import TICTACTOE from '../../assets/tictactoegif.gif'
import CALCULATOR from '../../assets/calculatorgif.gif'
import WIP from '../../assets/WORKINPROGRESS.png'

const Portfolio = () => {
  const data1 = [
    {
      image: FACEDEMO,
      caption: " "
    },
    {
      image: ASSET4,
      caption: " "
    },
    {
      image: FACEDEMO2,
      caption: " "
    }
  ];

  const captionStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
  }
  const slideNumberStyle = {
    fontSize: '20px',
  }



  return (
    <section id='portfolio'>
      <div className='portfolio-container'>
        <h5> Take A Look Through</h5>
        <h2 style={{ color: "white" }}> My Portfolio</h2>

        <div className='portfolioitem'>
          <h3> WealthShrimple</h3>
          <img className='portfolioimage'src={WIP} alt="About Image" />
        <div className='portfoliotext'>
            <h5>Java, SpringBoot, Maven, MySQL, Oauth2, React, JS</h5>
            <p>This is mock investment website that allows the user to experience an authentic stock market simulation by performing real-time queries of any NASDAQ stock’s price to be used whenever it is to be bought or sold by the user. The back-end manages user accounts connected to their gmail and their respective stock inventory.</p>
            <a href="" className='btn btn-primary'>Try it</a>
          </div>
      </div>

        <div className='portfolioitem'>
          <div>
            <h3>Average Face Generator</h3>
            <div style={{
              padding: "0px 20px"
            }}>
              <Carousel
                data={data1}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={false}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideImageFit="cover"
                thumbnails={false}
                thumbnailWidth="100px"
                slideBackgroundColor="none"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "25px auto",
                }}
              />
            </div>
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