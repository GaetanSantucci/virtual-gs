'use client';
import { LayoutMobile, ServiceDot, ServiceHexagone, ServiceLayout, ServiceTitle } from '../SvgComponent/serviceSvg';
import './service.scss';
import Image from 'next/image';

export const ServicePage = () => {

  return (
    <section className="service-container">
      <div className='service-container-title'>
        <h2>Construisons votre projet autour de mes connaissances</h2>
        <h2></h2>
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