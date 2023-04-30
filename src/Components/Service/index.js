'use client';
import { ServiceDot, ServiceHexagone, ServiceLayout, ServiceTitle } from '../SvgComponent/serviceSvg';
import './service.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export const ServicePage = () => {
  const [svgLength, setsvgLength] = useState()


  return (
    <section className="service-container">
      <ServiceHexagone />
      <div className='service-container-title'>
        <ServiceTitle />
      </div>
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