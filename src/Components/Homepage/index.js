import './homepage.scss';

import { SvgBackground, BrandName, Logo, Hexagone } from '../SvgComponent';

import Image from 'next/image';


export const Homepage = () => {

  return (
    <section className='homepage-container'>
      <div className='homepage-container-header'>
        <div className='homepage-container-header-logo-svg'>
          <Logo />
        </div>
        <div className='homepage-container-header-logo'>
          <div className='homepage-container-header-logo-name'>
            <BrandName />
          </div>
        </div>
      </div>
      <div className='homepage-container-visual'>
        <div className='homepage-container-visual-title'>
          <h1>Création</h1>
          <h1>de site web</h1>
        </div>
        <div className='homepage-container-visual-image'>
          <Image src='/images/mock-multi-wake.png' alt='logo' width={800} height={600} priority />
        </div>
      </div>
      <div className='homepage-container-presentation'>
        <div className='homepage-container-presentation-catchphrase'>
          <p>Renforcez votre présence numérique</p>
          <p> avec nos solutions de développement web personnalisées</p>
        </div>
        <div className='homepage-container-presentation-svg'>
          <Hexagone />
        </div>
      </div>
      <div className='background-shadow'>
        <SvgBackground />
      </div>
    </section>
  )
}