"use client";

import { ContactPage, Homepage, Navbar, ProjectPage, MarketingPage, ServicePage, Footer } from '@/Components';
import {  useEffect, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin, ScrollTrigger } from 'gsap/all';

import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export default function Home() {
  console.log('isMobile:', isMobile);
  
      useEffect(() =>{
        console.log("je suis avant le if");

        if(!isMobile) {
          console.log(" je passe dans le if");
          let panels = gsap.utils.toArray(".panel"),
          observer = ScrollTrigger.normalizeScroll(true),
          scrollTween;
  
          // on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
          document.addEventListener("touchstart", e => {
            if (scrollTween) {
              e.preventDefault();
              e.stopImmediatePropagation();
            }
          }, {capture: true, passive: false})
          
          function goToSection(i) {
            scrollTween = gsap.to(window, {
              scrollTo: {y: i * innerHeight, autoKill: false},
              onStart: () => {
                observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
                observer.enable();
              },
              duration: 1,
              onComplete: () => scrollTween = null,
              overwrite: true
            });
          }
          
          panels.forEach((panel, i) => {
            ScrollTrigger.create({
              trigger: panel,
              start: "top bottom",
              end: "+=199%",
              onToggle: self => self.isActive && !scrollTween && goToSection(i)
            });
  });
  
  // just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):
  ScrollTrigger.create({
    start: 0, 
    end: "max",
    snap: 1 / (panels.length - 1)
  })
       }
    })
  
    
  return (
  <>
  <Navbar /> 
      <main id="panels" className='container' >
        <div id='home'  className='panel'>
          <Homepage />
        </div>
         <div id='marketing' className='panel'>
            <MarketingPage />
          </div>
            {/* <div id='service' className='panel'>
            <ServicePage />
            </div>
            <div id='project' className='panel'>
            <ProjectPage />
            </div> */}
          <div id='contact' className='panel'>
            <ContactPage />
          </div>
          </main>
            <Footer />
  </>
   )

  }