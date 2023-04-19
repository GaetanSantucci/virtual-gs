import './homepage.scss';
import { HalfHexagone, SvgBackground } from '../SvgComponent';

export const Homepage = () => {
  return (
    <section id='home' className='homepage-container'>
      <SvgBackground />
      <HalfHexagone />
    </section>
  )
}