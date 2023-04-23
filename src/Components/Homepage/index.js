import './homepage.scss';
import { HalfHexagone, SvgBackground, BrandName, Logo } from '../SvgComponent';

export const Homepage = () => {

  // var path = window.querySelectorAll('.svg-letter');
  // path.getTotalLength();
  return (
    <section className='homepage-container'>
      <SvgBackground />
      <div className='background-shadow'>
        <SvgBackground data-background='shadow' />
      </div>
      <div className='hexa-brand'>
        <div className='hexa-brand-align'>
          <div className='hexa-brand-name'>
            <BrandName />
          </div>
          <div className='hexa-brand-logo'>
            <Logo />
          </div>

        </div>
      </div>
    </section>
  )
}