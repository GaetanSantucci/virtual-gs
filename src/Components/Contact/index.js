'use client';
import './contact.scss';

import axios from 'axios';

import { useEffect, useState } from 'react';

// Svg import 
import { ContactBackgroundSVG, SubmitBtn } from '../SvgComponent';
import { Footer } from '../Footer';

export const ContactPage = () => {

  const [lastname, setLastname] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  const resetData = () => {
    setLastname('');
    setFirstname('');
    setEmail('');
    setPhone('');
    setMessage('');
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any input field is empty
    if (!lastname || !firstname || !email || !phone || !message) {
      setErrorMessage('Merci de remplir les champs !');
      setTimeout(() => {
        setErrorMessage('')
      }, 2000)
      return;
    }

    // select button element to add animation
    const emailBtn = document.querySelector('.contact-btn');

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
        emailBtn.classList.add('slide-out-elliptic-top-bck');

        resetData();
        setTimeout(() => {
          emailBtn.classList.remove('slide-out-elliptic-top-bck');
        }, 1200);
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
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="contact-btn" onClick={handleSubmit}><SubmitBtn /></button>
      </form>
      <div className="contact-background" />
      <Footer />
    </section>
  )
}