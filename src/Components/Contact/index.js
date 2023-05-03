'use client';
import './contact.scss';

import axios from 'axios';

import { useEffect, useState } from 'react';

// Svg import 
import { ContactBackgroundSVG, SubmitBtn, SendMail } from '../SvgComponent';
import { Footer } from '../Footer';

export const ContactPage = () => {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  console.log();
  const resetData = () => {
    setLastname('');
    setFirstname('');
    setEmail('');
    setPhone('');
    setMessage('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // select button element to add animation
    const emailPlane = document.getElementById('plane');
    const emailBtn = document.querySelector('.contact-btn');
    const fillColor = document.querySelector('.send-mail path');

    const formData = {
      lastname,
      firstname,
      email,
      phone,
      message
    };

    axios.post('https://www.virtualgs.fr/api/v1/contact', formData)
      .then(response => {
        console.log(response.data);
        emailBtn.style.opacity = "0";
        emailPlane.classList.add('letter-flight');
        fillColor.classList.add('color-change');

        resetData();
        setTimeout(() => {
          emailBtn.style.opacity = 1;
          fillColor.classList.remove('color-change');
          emailPlane.classList.remove('letter-flight');
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {

  })

  return (
    <section className="contact-container">
      <div className='contact-background-shadow'>
        <ContactBackgroundSVG />
      </div>
      <h3 className='title'>Contact</h3>
      <form className="contact-form">
        <div className='contact-form-name'>
          <input type="text" placeholder='Nom' className='input-text' value={lastname} onChange={(e) => setLastname(e.target.value)} required />
          <input type="text" placeholder='Prénom' className='input-text' value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
        </div>
        <div className='contact-form-method' >
          <input type="email" placeholder='Email' className='input-text' value={email} onChange={(e) => setEmail(e.target.value)} required />
          <input type="tel" placeholder='Téléphone' className='input-text' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="contact-form-message">
          <textarea name='message' rows="4" cols="60" placeholder='Entrez votre message' className='input-text' value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" className="contact-btn" onClick={handleSubmit}><SubmitBtn /></button>
        <div id='plane' className='send-mail'><SendMail /></div>
      </form>
      <div className="contact-background" />
      <Footer />
    </section>
  )
}