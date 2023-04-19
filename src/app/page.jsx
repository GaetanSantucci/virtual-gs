"use client";
import { useState } from 'react';
import styles from '/public/styles/page.module.scss'
import { ContactPage, Homepage, ProjectPage, ServicePage } from '@/Components';

import { gsap } from 'gsap/dist/gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const component = useRef();
  const slider = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="main" ref={component}>
      <Homepage id='accueil'/>
      <div ref={slider} className="container">
      <ServicePage id='service'/>
      <ProjectPage id='project'/>
      </div>
      <ContactPage id='contact' />
      </div>
  )
}
