'use client';
import './navbar.scss';

import Link from 'next/link';

import { IconContact, IconHome, IconProject, IconMarketing, IconService, Logo } from '../SvgComponent';
import { useState, useEffect } from 'react';

const layout = [
  {
    slug: 'home',
    icon: <IconHome />,
    active: true
  }, {
    slug: 'marketing',
    icon: <IconMarketing />,
  }, {
    slug: 'service',
    icon: <IconService />,
  }, {
    slug: 'project',
    icon: <IconProject />,
  }, {
    slug: 'contact',
    icon: <IconContact />
  }
]

export const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  console.log('activeSection: ', activeSection);

  useEffect(() => {
    function handleScroll() {
      const panels = document.querySelectorAll('.panel');
      const scrollPosition = window.innerHeight / 2;

      for (let i = 0; i < panels.length; i++) {
        const panel = panels[i];
        const rect = panel.getBoundingClientRect();
        if (scrollPosition >= rect.top && scrollPosition < rect.bottom) {
          setActiveSection(panel.id);
          break;
        }
      }
    }

    handleScroll(); // Call the function once to set the initial active section

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <nav className='navbar'>
      <a href='#home' ><Logo /></a>
      <ul className='icon-section'>
        {
          layout.map((nav, i) => {
            return (
              <li className={`container-icon ${nav.slug === activeSection ? 'active' : ''}`} key={nav.slug}>
                <a href={`#${nav.slug}`}>
                  {nav.icon}
                </a>
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

