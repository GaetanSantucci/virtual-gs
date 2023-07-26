'use client';
import { LayoutMobile, ServiceDot, ServiceHexagone, ServiceLayout, ServiceTitle } from '../SvgComponent/serviceSvg';
import './service.scss';
import Image from 'next/image';

export const ServicePage = () => {

  return (
    <section className="service-container">
      <ServiceHexagone />
      <div className='service-container-title'>
        <ServiceTitle />
        <h2>Construisons votre projet</h2>
        <h2>autour de mes forces</h2>
      </div>
      <div className="service-container-main">
        <LayoutMobile />
        <ServiceLayout />
      </div>
      <Image src='/images/gaetan_santucci_green.png' width={400} height={400} priority alt='Photo de Gaetan Santucci' />
      <ServiceDot />

    </section>
  )
}