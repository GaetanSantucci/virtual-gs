import './homepage.scss';
import { HalfHexagone, SvgBackground } from '../SvgComponent';

export const Homepage = () => {
  return (
    <section className='container'>
      <SvgBackground />
      <HalfHexagone />
    </section>
  )
}