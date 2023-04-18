// 'use client';
import './navbar.scss';

import Link from 'next/link';
import Image from 'next/image';

import me from '/public/images/portrait.jpg';

import { IconContact, IconHome, IconProject, IconService, Logo } from '../SvgComponent';


export const Navbar = () => {
  return (
    <nav className='navbar'>
      <Link href='/'>
        <Logo />
      </Link>
      <div className='icon-section'>
        <div className='container-icon'>
          <Link href='#home'>
            <IconHome />
          </Link>
          <p>accueil</p>
        </div>
        <div className='container-icon'>
          <Link href='#services'>
            <IconService />
          </Link>
          <p>services</p>
        </div>
        <div className='container-icon'>
          <Link href='#projects'>
            <IconProject />
          </Link>
          <p>projets</p>
        </div>
        <div className='container-icon'>
          <Link href='#contact'>
            <IconContact />
          </Link>
          <p>contact</p>
        </div>
      </div>
      {/* <Image src={me} alt='Gaetan Santucci' className='navbar-portrait' /> */}
      <Link href='https://www.linkedin.com/in/gaetan-santucci/'>
        <div className='icon-portrait' />
      </Link>
    </nav>
  )
}

