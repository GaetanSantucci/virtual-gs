"use client";

import { ContactPage, Homepage, Navbar, ProjectPage, ServicePage } from '@/Components';

import { useEffect, useState } from 'react';


export default function Home() {
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.pageYOffset;
    const sections = document.querySelectorAll(".section");

    sections.forEach((section, index) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        currentScrollPosition >= sectionTop - sectionHeight / 2 &&
        currentScrollPosition < sectionTop + sectionHeight / 2
      ) {
        setActiveSection(index);
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="slider">
      <div className={`section ${activeSection === 0 ? "active" : ""}`}>
        <Homepage />
      </div>
      <div className={`section ${activeSection === 1 ? "active" : ""}`}>
        <ServicePage />
      </div>
      <div className={`section ${activeSection === 2 ? "active" : ""}`}>
        <ProjectPage />
      </div>
      <div className={`section ${activeSection === 2 ? "active" : ""}`}>
        <ContactPage />
      </div>
      <Navbar />
    </div>
  )
}
