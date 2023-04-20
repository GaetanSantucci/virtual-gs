import './homepage.scss';
import { HalfHexagone, SvgBackground, BrandName, Logo } from '../SvgComponent';

export const Homepage = () => {
  return (
    <section className='homepage-container'>
      <SvgBackground />
      <SvgBackground back='svg-shadow' />
      <div className='hexa-brand'>
        <HalfHexagone />
        <div className='hexa-brand-effect'>
          <BrandName />
          <div className='hexa-brand-logo'>
            <Logo />
          </div>
        </div>
      </div>
    </section>
  )
}