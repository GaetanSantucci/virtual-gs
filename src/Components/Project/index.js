import './project.scss';

import Link from 'next/link';
import Image from 'next/image';


export const ProjectPage = () => {
  return (
    <section className="project-container">
      <div className="project-container-main">
        <div className='project-container-main-presentation'>
          <h2 >Mes réalisations</h2>
        </div>
        <div className='project-container-main-content'>
          <Link href='https://wakeupclf.fr' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>WAKE UP</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Livraison de plateaux brunch</p>
              <p>Sur Clermont-Ferrand et ses alentours</p>
            </article>
            <Image src='/images/wakeup1.webp' alt='wake up clermont-ferrand' width={1000} height={600} />
          </Link>
          <Link href='https://e-co-roads.netlify.app/' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>ECO-ROADS</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Trajet en voiture electrique</p>
              <p>basé sur vos points d&apos;intêrets</p>
            </article>
            <Image src='/images/ecoroads.webp' alt='ecoroads' width={1000} height={600} />
          </Link>
          <Link href='https://gaetansantucci.com' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>PORTFOLIO</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Portfolio thème sombre</p>
            </article>
            <Image src='/images/gaetansantucci.webp' alt='gaetan santucci portfolio' width={1000} height={600} />
          </Link>
          <Link href='https://rpdata.fr' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>RP DATA</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Site d&apos;analyse data client</p>
              <p>Accompagnement, formation</p>
            </article>
            <Image src='/images/rpdata.webp' alt='rp data' width={1000} height={600} />
          </Link>

          <a href='#contact' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>VOTRE PROJET</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Et si c&apos;était votre site ici ?</p>
              <p>Contactez moi afin que nous puissions discuter de votre projet en cliquant <span>ici</span></p>
            </article>
            <div className='project-message'>
              <p>VIRTUAL GS</p>
              <p>X</p>
              <p>?</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}