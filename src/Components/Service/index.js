'use client';
import { ServiceDot, ServiceLayout } from '../SvgComponent/serviceSvg';
import './service.scss';
import Image from 'next/image';
import { useEffect } from 'react';

export const ServicePage = () => {

  useEffect(() => {
    const serviceLayout = document.querySelector('.service-layout');
    serviceLayout.classList.add('animate-dash');
  }, []);

  return (
    <section className="service-container">
      <div className="service-container-main">
        <ServiceLayout />
        <div className="service-container-main-picture">
          <ServiceDot />
          <Image src='/images/gaetan_santucci.png' width={400} height={400} priority alt='Photo de Gaetan Santucci' />
        </div>
      </div>

    </section>
  )
}