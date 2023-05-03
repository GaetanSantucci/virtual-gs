import './project.scss';

import { BackgroundProject } from '../SvgComponent';

import Link from 'next/link';
import Image from 'next/image';


export const ProjectPage = () => {
  return (
    <section className="project-container">
      <div className="project-container-main">
        <div className='project-container-main-presentation'>
          <h2 >Projets</h2>
        </div>
        <div className='project-container-main-content'>
          <Link href='https://wakeupclf.fr' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>WAKE UP</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Livraison de plateaux brunch</p>
              <p>Sur Clermont-Ferrand et ses alentours</p>
            </article>
            <Image src='/images/wakeup.webp' alt='wakeup' width={1000} height={600} />
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
          <Link href='https://e-co-roads.netlify.app/' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>ECO-ROADS</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>Trajet en voiture electrique</p>
              <p>basé sur vos points d&apos;intêrets</p>
            </article>
            <Image src='/images/ecoroads.webp' alt='ecoroads' width={1000} height={600} />
          </Link>
          <a href='#contact' className='project-container-main-content-card'>
            <article className='project-container-main-content-card-presentation'>
              <h3 className='project-container-main-content-card-presentation-title'>Nouveau projet</h3>
              <span className='project-container-main-content-card-presentation-separate'></span>
              <p>VIRTUAL GS</p>
              <p>X</p>
              <p>?</p>
            </article>
            <div className='project-message'>
              <h2>Et si c&apos;était votre site ici ?</h2>
              <p>Contactez moi afin que nous puissions discuter de votre projet en cliquant <span>ici</span></p>
            </div>
          </a>
        </div>
      </div>
      <div className='project-container-background'>
        <BackgroundProject />
      </div>
    </section>
  )
}