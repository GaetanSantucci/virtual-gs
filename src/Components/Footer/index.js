import './footer.scss';

import Link from 'next/link';
import Image from 'next/image';
import { BrandName } from '../SvgComponent';



export const Footer = () => {
  return (
    <footer className='footer-container'>
      <div className="footer-container-brand"><BrandName /></div>
      <div className="footer-container-terms">
        <p>&copy; COPYRIGHT 2023 VIRTUALGS - Tous droits réservés - <Link href='#'>Conditions générales</Link></p>
      </div>
    </footer>
  )
}

