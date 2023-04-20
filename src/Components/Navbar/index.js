'use client';
import './navbar.scss';

import Link from 'next/link';

import { IconContact, IconHome, IconProject, IconMarketing, IconService, Logo } from '../SvgComponent';


const layout = [
  {
    slug: 'home',
    icon: <IconHome />
  }, {
    slug: 'marketing',
    icon: <IconMarketing />
  }, {
    slug: 'service',
    icon: <IconService />
  }, {
    slug: 'project',
    icon: <IconProject />
  }, {
    slug: 'contact',
    icon: <IconContact />
  }
]

export const Navbar = () => {

  return (
    <nav className='navbar'>
      <Link href='/' onClick={() => { scrollTo(0, 0) }}>
        <Logo />
      </Link>
      <ul className='icon-section'>
        {
          layout.map((nav,) => {
            return (
              <li className='container-icon' key={nav.slug}>
                <Link href={`#${nav.slug}`}>
                  {nav.icon}
                </Link>
                <p>{nav.slug}</p>
              </li>
            )
          })
        }
      </ul>
      <Link href='https://www.linkedin.com/in/gaetan-santucci/'>
        <div className='icon-portrait' />
      </Link>
    </nav >
  )
}

