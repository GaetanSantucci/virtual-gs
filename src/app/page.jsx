import {
  ContactPage,
  Homepage,
  Navbar,
  ProjectPage,
  PresentationPage,
  ServicePage,
} from '@/Components';

export default function Home() {
  return (
    <>
      <Navbar />
      <main id='panels' className='container'>
        <div id='accueil' className='panel'>
          <Homepage />
        </div>
        <div id='marketing' className='panel'>
          <PresentationPage />
        </div>
        <div id='services' className='panel'>
          <ServicePage />
        </div>
        <div id='projets' className='panel'>
          <ProjectPage />
        </div>
        <div id='contact' className='panel'>
          <ContactPage />
        </div>
      </main>
    </>
  );
}
