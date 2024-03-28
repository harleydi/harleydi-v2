import React, { useRef } from 'react';
import '../styles/contact.scss';
// import emailjs from '@emailjs/browser';
import github from '../assets/images/github.png';
import twitter from '../assets/images/twitter.png';
import phone from '../assets/images/viber.png';
import email from '../assets/images/telegram.png';

export default function Contact() {

  const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('service_bs38ybq', 'template_e86cp7g', form.current, 'C3KlUGyY_GKp9zISa')
  //     .then((result) => {
  //       console.log(result.text);
  //     }, (error) => {
  //       console.log(error.text);
  //     });
  //     e.target.reset();
  // };

  return (
    <div className='contact'>
      <h1 className='mainTitle'>Contact</h1>
      <form className='form' ref={form} onSubmit={sendEmail} >
        <label>
          Name: <br/>
          <input type="text" name="name" />
        </label>
        <label>
          Email: <br/>
          <input type="text" name="email" />
        </label>
        <label>
          Message: <br/>
          <textarea name='message' />
        </label>
        <div className='btns'>
          <a href="/work"><button>Send message</button></a>
          <a><button type='reset'>Reset</button></a>
        </div>
      </form>
      {/* <div className='icons'>
        <img src={linkedin} alt='linkedin' />
        <img src={github} alt='github' />
        <img src={twitter} alt='twitter' />
        <img src={phone} alt='phone' />
        <img src={email} className='email' alt='email' />
      </div> */}
    </div>
  )
}
