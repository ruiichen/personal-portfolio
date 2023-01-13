import React, { useRef } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { MdTextsms } from 'react-icons/md'
import {MdFileCopy} from 'react-icons/md'
import emailjs from '@emailjs/browser';
import CV from '../../assets/resussy-2.pdf'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {

    emailjs.sendForm('service_0xepori', 'template_4tu3dwn', form.current, '_kn3PTRVBz5EpkAH7')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  
  return (
    <section id='contact'>

      <div className='contact'>
        <h5 className="heading"> Get In Touch</h5>
        <h2 className="heading" >Contact Me</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__icon" />
              <h4>Email</h4>
              <h5>ruicwork@gmail.com</h5>
              <a href="mailto:ruicwork@gmail.com">Send a message</a>
            </article>
            
            <article className="contact__option">
              <MdFileCopy className="contact__icon" />
              <h4>Resume</h4>
              <h5>Take a look at my resume</h5>
              <a href={CV} download>Download</a>
            </article>

            <article className="contact__option">
              <MdTextsms className="contact__icon" />
              <h4>Text</h4>
              <h5>(+1)289-707-2986</h5>
              <h5>Feel free to shoot me a text</h5>
            </article>

            

          </div>
          {/*
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Name' required />
            <input type="email" name='email' placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
  */}
        </div>
      </div>
    </section>
  )
}

export default Contact