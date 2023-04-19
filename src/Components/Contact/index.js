import './contact.scss';

export const ContactPage = () => {
  return (
    <section id='contact' className="contact-container">
      <h2>Contact Page</h2>
      <form className="contact-form">
        <input type="email" placeholder='Entrez votre email' />
        <input type="text" placeholder='Entrez votre nom' />
        <input type="textarea" placeholder='Entrez votre message' />
      </form>
    </section>
  )
}