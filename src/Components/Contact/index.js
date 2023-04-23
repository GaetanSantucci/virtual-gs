'use client';
import './contact.scss';

import { useRef } from 'react';

export const ContactPage = () => {

  const lastnameRef = useRef(null);
  const firstnameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);

  const handleFocus = (ref) => {
    console.log('ref: ', ref.current.name);
    if (ref.current.name === 'message') {
      return ref.current.classList.add('focus-message');
    }
    ref.current.classList.add('focus');
  }

  const handleBlur = (ref) => {
    if (ref.current.name === 'message') {
      return ref.current.classList.remove('focus-message');
    }
    ref.current.classList.remove('focus');
  }

  return (
    <section className="contact-container">
      <h2>Contact</h2>
      <form className="contact-form">
        <div className="lastname">
          <input type="text" placeholder='Entrez votre nom' className='input-text' ref={lastnameRef} onFocus={() => handleFocus(lastnameRef)} onBlur={() => handleBlur(lastnameRef)} />
        </div>
        <div className="firstname">
          <input type="text" placeholder='Entrez votre prénom' className='input-text' ref={firstnameRef} onFocus={() => handleFocus(firstnameRef)} onBlur={() => handleBlur(firstnameRef)} />
        </div>
        <div className="email">
          <input type="email" placeholder='Entrez votre email' className='input-text' ref={emailRef} onFocus={() => handleFocus(emailRef)} onBlur={() => handleBlur(emailRef)} />
        </div>
        <div className="phone">
          <input type="tel" placeholder='Entrez votre numéro de téléphone' className='input-text' ref={phoneRef} onFocus={() => handleFocus(phoneRef)} onBlur={() => handleBlur(phoneRef)} />
        </div>
        <div className="message">
          <textarea name='message' rows="6" cols="60" placeholder='Entrez votre message' className='input-text' ref={messageRef} onFocus={() => handleFocus(messageRef)} onBlur={() => handleBlur(messageRef)} />
        </div>
      </form>
      <div className="contact-background" />
    </section>
  )
}