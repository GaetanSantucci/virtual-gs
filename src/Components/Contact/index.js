'use client';
import './contact.scss';

import axios from 'axios';

import Link from 'next/link';

import { useEffect, useState } from 'react';

// Svg import 
import { ContactBackgroundSVG, BrandName, SubmitBtn, SendMail } from '../SvgComponent';

export const ContactPage = () => {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  console.log('firstname:', firstname);
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
    console.log('formData: ', formData);

    axios.post('http://localhost:8888/api/v1/contact', formData)
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

    console.log('submit le form')
  }

  useEffect(() => {

  })

  return (
    <section className="contact-container">
      <div className='contact-background-shadow'>
        <ContactBackgroundSVG />
      </div>
      <h2 className='title'>Contact</h2>
      <form className="contact-form">
        <div className="lastname">
          <input type="text" placeholder='Nom' className='input-text' value={lastname} onChange={(e) => setLastname(e.target.value)} required />
        </div>
        <div className="firstname">
          <input type="text" placeholder='Prénom' className='input-text' value={firstname} onChange={(e) => setFirstname(e.target.value)} required />
        </div>
        <div className="email">
          <input type="email" placeholder='Email' className='input-text' value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="phone">
          <input type="tel" placeholder='Téléphone' className='input-text' value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div className="message">
          <textarea name='message' rows="6" cols="60" placeholder='Entrez votre message' className='input-text' value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="submit" className="contact-btn" onClick={handleSubmit}><SubmitBtn /></button>
        <div id='plane' className='send-mail'><SendMail /></div>
      </form>
      <div className="contact-background" />
      <footer className='footer'>
        <p>&copy; COPYRIGHT 2023 VIRTUAL GS - Tous droits réservés </p><Link href='#'>Conditions générales</Link>
      </footer>
      <div className="contact-brand-name"><BrandName /></div>
    </section>
  )
}