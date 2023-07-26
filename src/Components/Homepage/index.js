import './homepage.scss';

import { Hexagone } from '../SvgComponent';

import Image from 'next/image';
import { HomepageBackground, HomepageBrand, HomepageLogo } from '../SvgComponent/homepageSvg';


export const Homepage = () => {

  return (
    <section className='homepage-container'>
      <div className='homepage-container-header'>
        <div className='homepage-container-header-logo-svg' >
          <HomepageLogo />
        </div>
        <div className='homepage-container-header-logo'>
          <div className='homepage-container-header-logo-name' >
            <HomepageBrand />
          </div>
        </div>
      </div>
      <div className='homepage-container-visual'>
        <div className='homepage-container-visual-title'>
          <h1>Créateur de site</h1>
          <h1>internet moderne et engagé</h1>
        </div>
        <div className='homepage-container-visual-image'>
          <Image src='/images/mockup_homepage.png' alt='logo' width={800} height={600} priority />
        </div>
      </div>
      <div className='homepage-container-presentation'>
        <div className='homepage-container-presentation-catchphrase'>
          <p>Renforcez votre présence numérique</p>
          <p>avec mes solutions de développement web personnalisées</p>
        </div>
        <div className='homepage-container-presentation-svg'>
          <Hexagone />
        </div>
      </div>
      <div className='background-shadow'>
        <HomepageBackground />
      </div>
    </section>
  )
}