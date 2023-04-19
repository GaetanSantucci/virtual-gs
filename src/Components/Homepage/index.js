import './homepage.scss';
import { HalfHexagone, SvgBackground } from '../SvgComponent';

export const Homepage = () => {
  return (
    <section className='homepage-container'>
      <SvgBackground />
      <HalfHexagone />
    </section>
  )
}